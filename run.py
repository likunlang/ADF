# -*- coding: UTF-8 -*-
import os
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

os.environ["webdriver.chrome.driver"] = "D:\ADFclick\chromedriver.exe"

devices=['Galaxy S5','iPhone 5','iPhone 6','iPhone 6 Plus','iPhone 7','iPhone 7 Plus','iPhone 8','iPhone 8 Plus','iPhone X','iPhone SE']

ipRexg = re.compile(r'(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}')

waitIpTime = 301

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
	try:
		ipArr = getIPs('http://tpv.daxiangdaili.com/ip/?tid=556227891973450&num=15&filter=on') # 获取代理ip
		
	except Exception:
		print ('get IP error')
		time.sleep(waitIpTime)
	else:
		if len(ipArr) < 5: # 如果获取到的代理数太少则*秒后再重新获取
			time.sleep(waitIpTime)
		
		else: # 代理ipArr数够多

			linksFile = open('./links.txt','r')
			links = linksFile.readlines() #链接文件arr

			for ip in ipArr:

				if ipRexg.search(ip):
					
					openlinks =  4 #定义一次打开链接条数

					for i in range(0,openlinks):
						# viewRandom = random.randint(0,100)
						linkRandom = links[random.randint(0,len(links)-1)] #随机选取某一链接
						# userID = linkRandom[81:85]
						
						chromeOptions = webdriver.ChromeOptions()
						mobileEmulation = {'deviceName': devices[random.randint(0,len(devices)-1)]}
						chromeOptions.add_experimental_option('mobileEmulation', mobileEmulation)

						chromeOptions.add_argument("--proxy-server=http://" + ip) #设置代理
						chromeOptions.set_headless() #设置成无浏览器界面
						
						browser = webdriver.Chrome(options = chromeOptions)
						browser.set_page_load_timeout(50)

						try:
							browser.get(linkRandom) # 打开链接
						except Exception:
							print ('error')
							continue
						else:
							time.sleep(random.uniform(28,38))
							try:
								AD = WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.ID, "ad")))

							except Exception:
								print ('timeout')
								continue
							else:
								# click(392,349)
								browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
								# click(305,458)
								# click(385,541)

								time.sleep(random.uniform(1,3))
								if AD:
									print ('+++++ opend links success +++++')
						finally:
							browser.close()
							browser.quit()
				else:
					continue
				
			linksFile.close()
	return run()


if __name__ == '__main__':
	run()