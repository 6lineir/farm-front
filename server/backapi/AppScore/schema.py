from ninja import ModelSchema
from ninja import Schema

from .models import Score




#! Schema Model User

class Score_In(ModelSchema):
    class Config:
        model = Score
        model_fields = [
            "user_id",
            "user_level",
            "coins",
            "coin_referral",
            "coin_tasks",
            "max_farm",
            "farm_last_time"
        ]
        # optional_fields = [
        #     "username",
        #     "first_name",
        #     "last_name",
        #     "invited_by",
        #     "is_premium"
        # ]



class Score_Out(ModelSchema):

    class Config:
        validation = False

        optional_fields = ["user_level", "coins"]

    class Meta:
        model = Score
        fields = "__all__"
        
        
class Error(Schema):
    msg: str