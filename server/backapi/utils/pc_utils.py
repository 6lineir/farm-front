import psutil
import platform
import json
from datetime import datetime


def get_size(bytes, suffix="B"):
    """
    Scale bytes to its proper format
    e.g:
        1253656 => '1.20MB'
        1253656678 => '1.17GB'
    """
    factor = 1024
    for unit in ["", "K", "M", "G", "T", "P"]:
        if bytes < factor:
            return f"{bytes:.2f}{unit}{suffix}"
        bytes /= factor
        
        
def System_Info():
  uname = platform.uname()
  boot_time_timestamp = psutil.boot_time()
  bt = datetime.fromtimestamp(boot_time_timestamp)
  cpufreq = psutil.cpu_freq()
  svmem = psutil.virtual_memory()
  net_io = psutil.net_io_counters()
  object_sys = {
      "system": uname.system,
      "node_name": uname.node,
      "boot_time": f"{bt.year}/{bt.month}/{bt.day} {bt.hour}:{bt.minute}:{bt.second}",
      "physical_cores": str(psutil.cpu_count(logical=False)),
      "total_cores": str(psutil.cpu_count(logical=True)),
      "max_frequency": f"{cpufreq.max:.2f}Mhz",
      "current_frequency": f"{cpufreq.current:.2f}Mhz",
      "total_CPU_usage": f"{psutil.cpu_percent()}%",
      "total_memory": get_size(svmem.total),
      "available_memory": get_size(svmem.available),
      "used_memory": get_size(svmem.used),
      "percent_memory": get_size(svmem.percent),
      "network_send":f"{get_size(net_io.bytes_sent)}",
      "network_received":f"{get_size(net_io.bytes_recv)}"
  }
#   print(json.dumps(object_sys, indent=2))
  return object_sys
  
  
  
#System_Info()


