from ninja import Router

from .models import User, Referral
from .schema import User_In, User_Out, Error
from AppScore.models import Score

from backapi.urls import AuthTokenBOT, AuthToken
from django.shortcuts import get_list_or_404, get_object_or_404
from django.http import JsonResponse
from django.core.serializers import json

from django.utils import timezone
from utils.time_me import TimeNowUTC, TimeStamp
from utils.redis_db import Set_RDIS, Get_RDIS


router = Router()

#! فانکشن هندل کردن افزودن امتیاز به دعوت کننده
def InvAddScore(level, is_perm):
    if is_perm == False:
        if level == 1: return 0.1
        if level == 2: return 0.2
        if level == 3: return 0.3
        # if level == 4: return 0.4
    if is_perm == True:
        if level == 1: return 0.3
        if level == 2: return 0.6
        if level == 3: return 0.9
        # if level == 4: return 0.12


@router.post("/create", tags=["MiniApp Users"], auth=AuthTokenBOT())
def create_User(request, payload: User_In):
    data = payload.dict()
    print(data)
    try:
        if data["invited_by"] == data["user_id"]:
            data["invited_by"] = 0
        userCreated = User.objects.create(**data)
        user_id = userCreated or User.objects.get(pk=int(data["user_id"])) #? ساخت دیتای کاربر
        scoreCreated = Score.objects.create(user_id=user_id) #? ساخت دیتای امتیازات کاربر
        getallUser = User.objects.filter(pk=int(data["invited_by"]))
        print("==========getReffUser=======")
        print(user_id.invited_by)
        print("==========getReffUser=======")
        
        if len(getallUser) >= 1:  #! افزودن امتیاز به دعوت کننده
            if getallUser[0] != user_id:
                set_reff = Referral.objects.create(user_id=getallUser[0],invited_id=user_id.pk) #? افزود ابجکت رفرال به کاربر دعوت کننده
                getReff_score = Score.objects.get(pk=int(data["invited_by"]))
                getReff_user = User.objects.get(pk=int(data["invited_by"]))
                invScore = InvAddScore(getReff_score.user_level, getReff_user.is_premium)
                #? محاسبه مقدار افزود با دریافت سکه قبل]                
                new_invScore = getReff_score.coin_referral + invScore
                Score.objects.filter(pk=getReff_user).update(coin_referral=new_invScore)

        return {"msg": f"Success, Register User {data['user_id']}"}
    except Exception:
        return {"msg": "Error, User ID Exist"}
    
    
    
    
# دریافت اطلاعات کاربر از دیتابیس
@router.get("/get", response={200: User_Out, 403: Error}, tags=["MiniApp Users"], auth=AuthToken())
def get_User(request, user_id: int):
    token = request.headers.get("Authorization").split(" ")[-1]
    if str(token) == str(user_id):
        res_user = User.objects.get(pk=int(user_id))
        ################ Redis ################
        setObj = {
            "timestamp": TimeStamp(),
            "utc": TimeNowUTC(),
        }
        getRD = Get_RDIS(f"USR_ONLINE:{user_id}")
        if getRD == None:
            #! اگر در رسید ابجکت انلاین کاربر نباشع با ورود به مینی اپ ساخته میشه براش
            Set_RDIS(f"USR_ONLINE:{user_id}", setObj, ex=900)  # ? 15 min Delete
        if getRD != None:
            #! اگر کاربر مینی اپ رو باز کنه فیلد انلاین اپدیت میشه
            User.objects.filter(pk=int(user_id)).update(is_online=True)
        #######################################
        return res_user
    else:
        return 403, {"msg": "Error, User Not Access"}
