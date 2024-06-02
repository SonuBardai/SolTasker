from django.db import models
import jwt
from datetime import datetime, timedelta
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    public_key = models.CharField(max_length=255, unique=True)
    type = models.CharField(max_length=255)  # tasker or poster
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="custom_user_set",  # Custom related name to avoid clashes
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="custom_user_set",  # Custom related name to avoid clashes
        blank=True,
    )

    USERNAME_FIELD = "public_key"
    REQUIRED_FIELDS = []

    class Meta:
        db_table = "users"

    def generate_token(self):
        payload = {
            "user_id": self.id,
            "exp": datetime.now() + timedelta(days=1),  # Token expiration time
        }
        token = jwt.encode(payload, "your_secret_key", algorithm="HS256")
        return token
