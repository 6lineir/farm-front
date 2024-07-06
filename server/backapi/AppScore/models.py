from django.db import models
from AppUser.models import User
# Create your models here.


class Score(models.Model):
    user_id = models.OneToOneField(
        User, primary_key=True, unique=True, on_delete=models.CASCADE
    )
    user_level = models.IntegerField(default=1, null=True, blank=True)
    coins = models.FloatField(default=0, null=True, blank=True)
    coin_referral = models.FloatField(default=0, null=True, blank=True)
    coin_tasks = models.FloatField(default=0, null=True, blank=True)
    max_farm = models.FloatField(default=0.2, null=True, blank=True)
    farm_last_time = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, blank=True)

    def __str__(self):
        return str(self.user_id) + " - [" + str(self.user_level) + "]"
