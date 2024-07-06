from ninja import ModelSchema
from ninja import Schema

from .models import User




#! Schema Model User

class User_In(ModelSchema):
    class Config:
        model = User
        model_fields = [
            "user_id",
            "username",
            "first_name",
            "last_name",
            "invited_by",
            "is_premium"
        ]
        optional_fields = [
            "username",
            "first_name",
            "last_name",
            "invited_by",
            "is_premium"
        ]



class User_Out(ModelSchema):

    class Config:
        validation = False

        optional_fields = ["first_name", "last_name"]

    class Meta:
        model = User
        fields = "__all__"
        
        
class Error(Schema):
    msg: str