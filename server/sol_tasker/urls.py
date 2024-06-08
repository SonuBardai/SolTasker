from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI
from web_auth.router import router as web_auth_router
from task.router import router as task_router


api = NinjaAPI()
api.add_router("", web_auth_router)
api.add_router("", task_router)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("v1/", api.urls),
]
