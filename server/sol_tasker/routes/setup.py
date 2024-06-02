from ninja import Router

router = Router()

@router.post("/setup")
def setup(request):
    ...
