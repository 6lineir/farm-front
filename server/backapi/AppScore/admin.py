from django.contrib import admin
from .models import Score

# Register your models here.


class List_User_Score(admin.ModelAdmin):
    list_display = (
        "user_id",
        "user_level",
        "coins",
        "coin_referral",
        "coin_tasks",
        "max_farm",
    )


admin.site.register(Score, List_User_Score)
