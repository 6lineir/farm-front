from django.db import models
from django.utils import timezone

# Create your models here.



class User(models.Model):
    user_id = models.BigIntegerField(
        primary_key=True, unique=True, blank=False, null=False
    )
    username = models.CharField(max_length=100, default=None, null=True, blank=True)
    first_name = models.CharField(max_length=100, default=None, null=True, blank=True)
    last_name = models.CharField(max_length=100, default=None, null=True, blank=True)
    invited_by = models.BigIntegerField(default=0, null=True, blank=True)
    is_premium = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_online = models.BooleanField(default=False)
    sign_time = models.DateTimeField(default=timezone.now)
    

    def __str__(self):
        return str(self.user_id)



#! تیبل برای رفرال یوزر ها
class Referral(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    invited_id = models.BigIntegerField(default=0, null=True, blank=True)
    is_active = models.BooleanField(default=False)
    inv_time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.user_id)
