from django.contrib import admin
from .models import CustomUser, Archetype
# Register your models here.
models = [
    CustomUser,
    Archetype,
    ]

admin.site.register(models)
