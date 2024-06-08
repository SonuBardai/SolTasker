from ninja import NinjaAPI
from task.api import router as task_router
from web_auth.api import router as web_auth_router


api = NinjaAPI()
api.add_router("", web_auth_router)
api.add_router("", task_router)
