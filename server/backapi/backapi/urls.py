
from django.contrib import admin
from django.urls import include, path

from ninja import NinjaAPI
from ninja.errors import ValidationError
from ninja.security import HttpBearer

from conf import AUTH_TOKEN_BOT
from AppUser.models import User
from utils.redis_db import Get_RDIS


class AuthTokenBOT(HttpBearer):
    
    def authenticate(self, request, token):
        print("Auth TOKEN BOT ==> " + token)
        if token == AUTH_TOKEN_BOT:
            return token

class AuthToken(HttpBearer):
    def authenticate(self, request, token):
        print("Auth TOKEN ==> " + token)
        # # print(rtoken)
        users = User.objects.all()
        Lister = []
        for i in users:
            if i.is_online == True:
                getRD = Get_RDIS(f"USR_ONLINE:{i.pk}")
                # print("ONline USER")
                # print(i.pk)
                if getRD == None:
                    i.is_online = False
                    i.save()
            Lister.append(str(i.pk))
        # print(Lister)
        if token in Lister:
            return token





api = NinjaAPI()
api = NinjaAPI(
    openapi_extra={
        "info": {
            "termsOfService": "https://toncakeswap.com/",
        }
    },
    title="Farm MiniApp TonCakeSwap API",
    description="This is a API RestFull with dynamic OpenAPI info section",
)


@api.get("/")
def server_info(request):
    
    return {"result": "OK! Server API is Run"}


@api.exception_handler(ValidationError)
def custom_validation_errors(request, exc):
    print(exc.errors)  # <--------------------- !!!!
    return api.create_response(request, {"detail": exc.errors}, status=422)


#? Add init Urls APis APP
from AppUser.api import router as user_router
from AppScore.api import router as score_router
# Bot Users API
api.add_router("/user/", user_router)
api.add_router("/score/", score_router)




urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]

admin.site.site_header = "TonCakeSwap Admin Panel"
admin.site.site_title = "TonCakeSwap Panel Admin"
