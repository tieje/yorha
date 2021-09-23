from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers
from .models import Archetype
# We could use the above, but the below, ensures that we use the user model that's in use in settings
from django.contrib.auth import get_user_model

class UserSerializer(GeoFeatureModelSerializer):
    # The GeoFeatureModelSerializer is a subclass of ModelSerializer, so... it should work as intended
    class Meta:
        # id is never really specified so I guess the serializer takes care of that automatically
        # https://www.django-rest-framework.org/tutorial/1-serialization/
        # the ModelSerializer actually copies from models directly. Otherwise, the serializer will be as long as the model
        model = get_user_model()
        fields = ('id', 'username', 'is_staff', 'is_active', 'date_joined', 'identify_as', 'search_for',)
        geo_field = 'location'

class ArchetypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archetype
        fields = "__all__"