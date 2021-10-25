"""
Defines the GraphQL Schema using Graphene.
"""
from accounts.models import Archetype, CustomUser
from django.contrib.auth import get_user_model
import graphene
from graphene_django import DjangoObjectType, DjangoListField


# Current user model is CustomUser. See 'accounts.models'.
user_model = get_user_model()

class AccountType(DjangoObjectType):
    class Meta:
        model = user_model
        fields = (
            'id',
            'gender',
            'identify_as',
            'is_staff',
            'is_active',
            'search_for',
            'username',
        )


class ArchetypeType(DjangoObjectType):
    class Meta:
        model = Archetype
        fields = '__all__'


class Query(graphene.ObjectType):
    """
    Defines which fields are available on a root query and their respective
    arguments.
    """

    accounts = graphene.List(
        AccountType,
        # Arguments available:
        id=graphene.ID(),
        is_staff=graphene.Boolean(),
        gender=graphene.String(),
    )
    archetypes = DjangoListField(ArchetypeType)

    def resolve_accounts(
        root, info, id=None, is_staff=None, gender=None):
        """
        Returns a queryset and processes arguments to GraphQL queries.

        The prototype could take **kwargs, but then the client user does not get
        an error message if they pass an invalid argument. Listing valid argume-
        nts in the prototype is more verbose, but enables feedback.
        """
        query_set = CustomUser.objects.all()

        # Make sure values are not None; Falsy values are valid but without
        # `is not None` the block will not execute
        if id is not None:
            query_set = query_set.filter(id=id)

        if is_staff is not None:
            query_set = query_set.filter(is_staff=is_staff)

        if gender is not None:
            query_set = query_set.filter(gender=gender)

        return query_set

schema = graphene.Schema(query=Query)
