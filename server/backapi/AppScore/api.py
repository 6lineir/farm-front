from ninja import Router

from AppUser.models import User, Referral
from .models import Score
from .schema import Score_In, Score_Out, Error

from backapi.urls import AuthTokenBOT, AuthToken
# from django.shortcuts import get_list_or_404, get_object_or_404
# from django.http import JsonResponse
# from django.core.serializers import json

# from django.utils import timezone
# from utils.time_me import TimeNowUTC, TimeStamp
# from utils.redis_db import Set_RDIS, Get_RDIS


router = Router()


    
    
# دریافت اطلاعات کاربر از دیتابیس
@router.get("/get", response={200: Score_Out, 403: Error}, tags=["MiniApp Users Score"], auth=AuthToken())
def get_User_Score(request, user_id: int):
    token = request.headers.get("Authorization").split(" ")[-1]
    if str(token) == str(user_id):
        # res_user = User.objects.get(pk=int(user_id))
        get_score = Score.objects.get(pk=int(user_id))
        # print(get_score)
        ################ Check ################
        return get_score
    else:
        return 403, {"msg": "Error,Not Access User in Score"}




@router.put("/claim", tags=["MiniApp Users Score"], auth=AuthToken())
def Update_User_Score(request, payload: Score_In):
    token = request.headers.get("Authorization").split(" ")[-1]
    get_user = User.objects.get(pk=int(token))
    if get_user.is_active == False:
        User.objects.filter(pk=int(token)).update(is_active=True)
    get_score = Score.objects.get(pk=int(token))
    ################ Func ################
    try:
        
        return {"msg": f"Success, Update Score User {int(token)}"}
    except Exception:
        return {"msg": "Error"}
    