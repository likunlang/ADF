# -*- coding:utf-8 -*-
import os
import re
import random
import time
import asyncio
""" 
#chrome打开链接
adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main -d "url"

#关闭chrome
adb shell am force-stop com.android.chrome

#切换飞行模式
adb shell am start -a android.settings.AIRPLANE_MODE_SETTINGS & adb shell input keyevent KEYCODE_ENTER & adb shell input keyevent 4
"""  
 
devices = ['4f728ee9']
linksFile = open('./links.txt','r')
links = linksFile.readlines() #链接文件arr
loop = asyncio.get_event_loop()

# 切换飞行模式:
def toggleAirplane(device):
    #获取飞行模式状态
    aielane_on = os.popen('adb shell getprop persist.radio.airplane_mode_on').read()

    #切换
    os.system('adb ' + device + ' shell am start -a android.settings.AIRPLANE_MODE_SETTINGS & adb ' + device + ' shell input keyevent KEYCODE_DPAD_DOWN & adb ' + device + ' shell input keyevent 4 & sleep 0.1')
    os.system('adb ' + device + ' shell am start -a android.settings.AIRPLANE_MODE_SETTINGS & adb ' + device + ' shell input keyevent KEYCODE_ENTER & adb ' + device + ' shell input keyevent 4 & sleep 0.1')

    if aielane_on[0] == '0': #飞行模式关
        os.system('adb ' + device + ' shell am start -a android.settings.AIRPLANE_MODE_SETTINGS & adb ' + device + ' shell input keyevent KEYCODE_ENTER & adb ' + device + ' shell input keyevent 4 & sleep 3')


async def opend(link,device): #定义为异步
    try:
        #切换ip
        toggleAirplane(device)
        #打开链接
        os.system('adb ' + device + ' shell am start -n com.android.chrome/com.google.android.apps.chrome.Main -d "%s"'%link)

    except Exception:
        print ('opend link error')
    else:
        #打开成功等待
        time.sleep(random.randint(8,9))
        print ('++++opend link success++++')
        #关闭浏览器
        os.system('adb -s ' + device + ' shell am force-stop com.android.chrome')

def run():
    try:
        #获取随机链接
        link = links[random.randint(0,len(links)-1)].replace("&","\&").replace("\n","")

        if len(devices) > 0 : 
            #多个设备
            for i in devices:
                device = "-s " + i;
                loop.run_until_complete(opend(link, device))
        else:
            #单个设备
            device = ''
            opend(link, device)

    except Exception:
        print ('error')
    return run()

if __name__ == '__main__':
    run()