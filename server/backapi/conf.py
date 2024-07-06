
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent





AUTH_TOKEN_BOT = "app123"


IS_DEV = True


if IS_DEV == True:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / "db.sqlite3",
        }
    }


if IS_DEV == False:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": "nqzdb",
            "USER": "root",
            "PASSWORD": "root",
            "HOST": "127.0.0.1",
            "PORT": "5432",
        }
    }
