
from django.contrib import admin
from django.urls import include, path

from ninja import NinjaAPI


from ninja.errors import ValidationError

from ninja.security import HttpBearer

class AuthTokenBOT(HttpBearer):
    def authenticate(self, request, token):
        print("Auth TOKEN BOT ==> " + token)
        if token == AUTH_TOKEN_BOT:
            return token




api = NinjaAPI()
api = NinjaAPI(
    openapi_extra={
        "info": {
            "termsOfService": "https://minestonecoin.com/terms/",
        }
    },
    title="Mine Stone Coin MiniApp Game API",
    description="This is a API RestFull with dynamic OpenAPI info section",
)


@api.get("/")
def server_info(request):
    
    return {"result": "OK"}


@api.exception_handler(ValidationError)
def custom_validation_errors(request, exc):
    print(exc.errors)  # <--------------------- !!!!
    return api.create_response(request, {"detail": exc.errors}, status=422)



urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]

admin.site.site_header = "TonCakeSwap Admin Panel"
admin.site.site_title = "TonCakeSwap Panel Admin"
