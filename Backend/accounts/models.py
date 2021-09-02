from django.contrib.gis.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.gis.geos import Point
# We'll be extending AbstractUser since it's simpler than AbstractBaseUser

class Archetype(models.Model):
    name = models.CharField(max_length=40, primary_key=True)
    traits = models.CharField(max_length=100)
    synergies = models.CharField(max_length=100)
    poem = models.TextField()

    def __str__(self):
        return self.name
class CustomUser(AbstractUser):
# there are potentially two models. One from the AbstractUser and one from the GIS. I might need to pick one.
    location = models.PointField(geography=True, default=Point(0.0, 0.0))
    identify_as = models.ManyToManyField(Archetype, related_name='Archetype.name+')
    search_for = models.ManyToManyField(Archetype, related_name='Archetype.name+')
"""
pass is used as a placeholder because user functionality is already in the AbstractUser class. If you want to make any changes to the AbstractUser model, we can do it here.
https://github.com/django/django/blob/master/django/contrib/auth/models.py
https://docs.djangoproject.com/en/3.1/topics/db/models/
"""
