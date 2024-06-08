from ninja import Router
from ninja.errors import HttpError
from web_auth.models import User
from pydantic import BaseModel


router = Router()


class LoginPayload(BaseModel):
    public_key: str


class LoginResponse(BaseModel):
    token: str


@router.post("login")
def login(request, payload: LoginPayload) -> LoginResponse:
    public_key = payload.public_key
    if not public_key:
        raise HttpError(400, "public_key is required")

    try:
        user = User.objects.get(public_key=public_key)
    except User.DoesNotExist:
        user = User.objects.create(public_key=public_key)

    token = user.generate_token()

    res = LoginResponse(token=token)
    return res
