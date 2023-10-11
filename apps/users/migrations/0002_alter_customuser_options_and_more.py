# Generated by Django 4.2.5 on 2023-10-05 21:35

import apps.users.helpers
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('djstripe', '0012_2_8'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='customuser',
            options={},
        ),
        migrations.AddField(
            model_name='customuser',
            name='billing_details_last_changed',
            field=models.DateTimeField(default=django.utils.timezone.now, help_text='Updated every time an event that might trigger billing happens.'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='customer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='djstripe.customer'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='language',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='last_synced_with_stripe',
            field=models.DateTimeField(blank=True, help_text='Used for determining when to next sync with Stripe.', null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='subscription',
            field=models.ForeignKey(blank=True, help_text='The associated Stripe Subscription object, if it exists', null=True, on_delete=django.db.models.deletion.SET_NULL, to='djstripe.subscription'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='timezone',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='avatar',
            field=models.FileField(blank=True, upload_to='profile-pictures/', validators=[apps.users.helpers.validate_profile_picture]),
        ),
    ]
