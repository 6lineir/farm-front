import redis
import json


FRDIS = redis.StrictRedis(host='127.0.0.1',
                         port="6379",
                         db="3",
                        #  username=RDIS_USER,
                        #  password=RDIS_PASS,
                         decode_responses=True)



# SET
def Set_RDIS(key , val, **kwargs):
    seter = FRDIS.set(key,json.dumps(val),**kwargs)
    

# GET
def Get_RDIS(key):
    hasOn = FRDIS.exists(key)
    if hasOn == 1:
        geter = FRDIS.get(key)
        return json.loads(geter)
    else: print(f'??? Not Fond FRDIS Get {key}')
    


# H SET
def HSet_RDIS(key ,kname, val):
    seter = FRDIS.hset(key,kname,json.dumps(val))
    
    
# H GET
def HGet_RDIS(key, kname):
    hasOn = FRDIS.exists(key)
    if hasOn == 1:
        geter = FRDIS.hget(key,kname)
        return json.loads(geter)
    else: print(f'??? Not Fond FRDIS HGet {key}')