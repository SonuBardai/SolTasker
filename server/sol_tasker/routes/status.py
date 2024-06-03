from ninja import Router


router = Router()


@router.post("status")
def status(request):
    return {"status": "ok"}
