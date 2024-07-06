from django.db import models
from django.utils import timezone

# Create your models here.
from ninja import ModelSchema
from ninja import Schema




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


#! Schema Model User

# class User_In(ModelSchema):
#     class Config:
#         model = User
#         model_fields = [
#             "user_id",
#             "username",
#             "first_name",
#             "last_name",
#             "invited_by",
#             "is_premium",
#         ]
#         optional_fields = [
#             "username",
#             "first_name",
#             "last_name",
#             "lang",
#             "invited_by",
#             "is_premium",
#         ]

# class User_Out(ModelSchema):

#     class Config:
#         validation = False

#         optional_fields = ["first_name", "last_name"]

#     class Meta:
#         model = User
#         fields = "__all__"
# class Error(Schema):
#     msg: str