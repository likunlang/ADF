# -*- coding: UTF-8 -*-
import re
import requests
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
import time
import sys 
import random
import win32api,win32con
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

devices=['Galaxy S5','iPhone 5','iPhone 6','iPhone 6 Plus','iPhone 7','iPhone 7 Plus','iPhone 8','iPhone 8 Plus','iPhone X','iPhone SE']

linksFile=open('./links.txt','r')
links = linksFile.readlines() #链接文件arr

configObj = [ 
    # id、是否冻结、打开链接概率、点击广告概率、浏览量max、点击量max、当前浏览量、当前点击量
    {'id':0,  'uId':1125, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},   #176 312 1 =2
    {'id':1,  'uId':5188, 'viewRate':88, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},   #138 283 10 =0.4
    {'id':2,  'uId':5207, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #B1 297 9 =3.6
    {'id':3,  'uId':5286, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},   #B2 278 10=2.4
    {'id':4,  'uId':5295, 'viewRate':91, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #黑 281 11 =1.8
    {'id':5,  'uId':5285, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #团 290 6 =3.6
    {'id':6,  'uId':5683, 'viewRate':86, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #1_642 281 1 =2
    {'id':7,  'uId':5667, 'viewRate':80, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #2_648 304 2 =3.2
    {'id':8,  'uId':5688, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #3_674 306 6 =1.6
    {'id':9,  'uId':5703, 'viewRate':92, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #4_654 293 1 =0.75
    {'id':10, 'uId':5731, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #5_664 294 4 =2.8
    {'id':11, 'uId':5765, 'viewRate':94, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #6_643 269 6 =3
    {'id':12, 'uId':5830, 'viewRate':86, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #7_647 280 1 =1.8
    {'id':13, 'uId':5894, 'viewRate':93, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #8_644 312 12 =1.4
    {'id':14, 'uId':6141, 'viewRate':100, 'clickRate':12, 'viewMax':1500, 'clickMax':10, 'viewed':0, 'clicked':0},  #9_644 296 6 =1.26
]

def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,x,y,0,0)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,x,y,0,0) 

# 获取代理ip
def getIPs(url):
	res = requests.get(url).text
	ips = re.split(r'\r\n', res)
	print (ips)
	return ips

def run():
	
	ipArr = getIPs('http://tpv.daxiangdaili.com/ip/?tid=556024889005251&num=60&filter=on') # 获取代理ip
	
	if len(ipArr) < 10: # 如果获取到的代理数太少则*秒后再重新获取
		time.sleep(300)
	
	else: # 代理ipArr数够多
		for ip in ipArr:

			openlinks =  5 #定义一次打开链接条数

			for i in range(0,openlinks):
				viewRandom = random.randint(0,100)
				clickRandom = random.randint(0,100)
				linkRandom = links[random.randint(0,len(links)-1)] #随机选取某一链接
				userID = linkRandom[81:85]

				print ('random:',viewRandom,',',clickRandom)

				# 是否打开链接
				for configItem in configObj:
					
					if viewRandom < configItem['viewRate']:
						print ('++ opend link ++')
						chromeOptions = webdriver.ChromeOptions()
						mobileEmulation = {'deviceName': devices[random.randint(0,len(devices)-1)]}
						chromeOptions.add_experimental_option('mobileEmulation', mobileEmulation)
						chromeOptions.add_argument("--proxy-server=http://" + ip) #设置代理
						chromeOptions.set_headless() #设置成无浏览器界面
						
						browser = webdriver.Chrome(options = chromeOptions)
						browser.set_page_load_timeout(56)

						try:
							browser.get(linkRandom) # 打开链接
						except Exception:
							print ('opend link error')
						else:
							time.sleep(random.uniform(1,3))
							try:
								AD = WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.ID, "ad")))
							except Exception:
								print ('opend link timeout')
							else:
								click(392,349)
								browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
								click(305,458)
								click(385,541)

								time.sleep(random.uniform(1,3))

								if configItem['clicked'] < configItem['clickMax'] and clickRandom < configItem['clickRate']:
									try:
										# 点击广告
										# clickAD = browser.find_element_by_id('ad')
										if AD:
											time.sleep(random.uniform(10,15))
											AD.click()
											configItem['clicked'] = configItem['clicked'] + 1
											time.sleep(random.uniform(3,5))
											print ('ID_', configItem['id'], 'clicked:', configItem['clicked'])
									except Exception:
										print ('click ad error')
								time.sleep(random.uniform(2,5))
						finally:
							browser.close()
							browser.quit()
					else:
						print ('-- not opend --')
		linksFile.close()

	return run()


if __name__ == '__main__':
	run()