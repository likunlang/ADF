from selenium import webdriver
from selenium.common.exceptions import TimeoutException
import time
import sys 
import random

import win32api,win32con
 
import os,time
import pyautogui as pag
try:
    while True:
            print("Press Ctrl-C to end")
            x,y = pag.position() #返回鼠标的坐标
            posStr="Position:"+str(x).rjust(4)+','+str(y).rjust(4)
            print(posStr)#打印坐标
            time.sleep(0.2)
            os.system('cls')#清楚屏幕 383 985   144 933   833-1012
except  KeyboardInterrupt:
    print('end....')
	
'''
def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,x,y,0,0)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,x,y,0,0) 
'''

	
''' 
driver = webdriver.Chrome() #使用Chrome浏览器
#driver.maximize_window() #窗口最大化
driver.get("http://trafficbank.idouzi.com/api/details?id=5bbc6e79274ac0439e086d3d&flowMainId=795&t=1539081613&sign=64ceeac097638b017ad353ab429b6dc5")
time.sleep(3)
driver.switch_to.frame(0)
urls = driver.find_elements_by_xpath("//a")
for url in urls:
    #print(url.get_attribute("href"))
	driver.get(url.get_attribute("href"))
print("999")
'''
'''
b = driver.switch_to.frame(iframe)
print('a')
print(b)
'''