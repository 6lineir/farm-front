from django.contrib import admin
from .models import User ,Referral
from django.utils import timezone

# Register your models here.


class List_User(admin.ModelAdmin):
    def admin_signtime(self, obj):
        return timezone.localtime(obj.sign_time).strftime("%Y-%m-%d ~ %I:%M")

    ordering = ["-sign_time"]
    list_display = (
        "user_id",
        "username",
        "first_name",
        "invited_by",
        "is_premium",
        "is_online",
        "is_active",
        "admin_signtime",
    )
    search_fields = ["user_id", "username", "invited_by"]
    list_filter = ("is_premium", "is_active")


admin.site.register(User, List_User)


class List_Reff(admin.ModelAdmin):
    def admin_signtime(self, obj):
        return timezone.localtime(obj.inv_time).strftime("%Y-%m-%d ~ %I:%M")

    ordering = ["-inv_time"]
    list_display = (
        "user_id",
        "invited_id",
        "is_active",
        "admin_signtime",
    )
    search_fields = ["user_id", "invited_by"]

admin.site.register(Referral, List_Reff)
