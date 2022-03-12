

from time import sleep
from turtle import delay
from easymodbus.modbusClient import ModbusClient
modbusclient = ModbusClient("192.168.15.48", 502)

discreteInputs = modbusclient.read_holdingregisters(0, 8)
for dI in range (0,len(discreteInputs)):
    modbusclient.connect()
    print(discreteInputs[dI])
    modbusclient.close()
    
    
    
