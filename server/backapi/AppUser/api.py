from ninja import Router
from .models import User


from django.shortcuts import get_list_or_404, get_object_or_404
from django.http import JsonResponse
from django.core.serializers import json

from django.utils import timezone
# from utils.time_me import TimeNowUTC, TimeStamp

# from utils.redis_db import Set_RDIS, Get_RDIS


router = Router()

