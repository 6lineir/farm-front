import time
from datetime import datetime


def TimeNow():
	return datetime.now().strftime('%Y-%m-%d %H:%M:%S')


def TimeNowUTC():
	return datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')


def TimeStamp():
  now = datetime.now()
  timestamp = datetime.timestamp(now)
  # times = int(time.time())
  return timestamp
	