from ninja import Router
from pydantic import BaseModel


router = Router()


class CreateTaskPayload(BaseModel): ...


class CreateTaskResponse(BaseModel): ...


@router.post("task")
def create_task(request, payload: CreateTaskPayload) -> CreateTaskResponse: ...
