
#adb shell input keyevent 返回主界面：3  后退：4
#adb shell input swipe 250 250 300 300 滑动
#主键：(503,2104) 
#关闭： (37,137) 
#广告:(1367,18187) 1284 18187 16052 
#链接 1080/1920=446/792（截屏）   截屏*2.42(系数) -232 (557,1670) (557,1438) (557,1206)

# http://trafficbank.idouzi.com/api/details?id=5bbc808dd657fe7a146a0893&flowMainId=5188&t=1539601673&sign=b3fe7241e7660f30d09fdcdd549984a4
																						  
import os
import time
import random

def run(i):
    delay = random.uniform(2, 4)
    viewtime = random.uniform(15, 20)
    adtime = random.uniform(3, 6)
    clickX = str(557)
    clickY = str(1670)
    adX = str(532)
    adY = str(1849)

    time.sleep(delay)

    #点击链接
    cmd = 'adb shell input tap ' + clickX + ' ' + clickY
    os.popen(cmd)
    time.sleep(viewtime)

    # 点击广告
    cmd = 'adb shell input tap ' + adX + ' ' + adY
    os.popen(cmd)
    time.sleep(adtime)

    #返回
    back = 'adb shell input keyevent 4'
    os.system(back)
    time.sleep(2)

    #回主界面
    # home = 'adb shell input keyevent 3'
    # os.system(home)

    # print('%s%d, %s%f%s, %s(%s,%s)'%('已点赞 X', i, '延迟', delay, 's',
    #       '点击坐标：', randomX, randomY))

# for i in range(1,5): # 自动点赞20次
run(1)