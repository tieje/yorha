# Generated by Django 3.1.6 on 2021-03-09 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_customuser_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Archetype',
            fields=[
                ('name', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('traits', models.CharField(max_length=100)),
                ('synergies', models.CharField(max_length=100)),
                ('poem', models.TextField()),
            ],
        ),
        migrations.AddField(
            model_name='customuser',
            name='identify_as',
            field=models.ManyToManyField(related_name='_customuser_identify_as_+', to='accounts.Archetype'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='search_for',
            field=models.ManyToManyField(related_name='_customuser_search_for_+', to='accounts.Archetype'),
        ),
    ]