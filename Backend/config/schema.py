import graphene
from graphene_django import DjangoObjectType, DjangoListField
from graphene_gis.converter import gis_converter
from django.contrib.auth import get_user_model
from accounts.models import Archetype

user_model = get_user_model()

class AccountType(DjangoObjectType):
    class Meta:
        model = user_model
        fields = ('id', 'username', 'location', 'is_staff', 'is_active', 'date_joined', 'identify_as', 'search_for',)

class ArchetypeType(DjangoObjectType):
    class Meta:
        model = Archetype
        fields = '__all__'
class Query(graphene.ObjectType):
    accounts = DjangoListField(AccountType)
    archetypes = DjangoListField(ArchetypeType)
    """
    accounts = graphene.List(AccountType)

    def resolve_accounts(root, info, **kwargs):
        return Question.objects.all()
    """
    
schema = graphene.Schema(query=Query)
