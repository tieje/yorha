# Generated by Django 3.1.6 on 2021-10-06 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20211006_1853'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='gender',
            field=models.CharField(choices=[('FEMALE', 'female'), ('MALE', 'male'), ('NONBINARY', 'non-binary')], default='non-binary', max_length=10),
        ),
    ]
