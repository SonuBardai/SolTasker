from ninja import Router


router = Router()


@router.get("status")
def status(request):
    return {"status": "ok"}
