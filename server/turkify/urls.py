from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI
from web_auth.router import router as web_auth_router


api = NinjaAPI()

api.add_router("", web_auth_router)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("rest/", api.urls),
]
