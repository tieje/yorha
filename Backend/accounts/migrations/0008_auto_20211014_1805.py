# Generated by Django 3.1.6 on 2021-10-14 18:05

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20211006_1854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='gender',
            field=models.CharField(choices=[('FEMALE', 'female'), ('MALE', 'male'), ('NONBINARY', 'non-binary')], default=accounts.models.CustomUser.Genders['NONBINARY'], max_length=10),
        ),
    ]
