# Generated by Django 5.0.6 on 2024-07-06 20:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AppUser', '0002_referral'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='referral',
            name='score_add',
        ),
    ]
