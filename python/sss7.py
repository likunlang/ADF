from selenium import webdriver
from selenium.common.exceptions import TimeoutException
import time
import sys 
import random
import win32api,win32con
sys.setrecursionlimit(100000)


def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,x,y,0,0)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,x,y,0,0) 

def getlines():
	for line in open('./IP7.txt','r'):
		oldf=open('./links.txt','r') #打开原文件
		# newf=open('./newfile','w') #打开要写入文件
		lines=oldf.readlines() #原文件行列表
		randline=random.randint(0,len(lines)%10) # 若干行links
		#if randline<4:
		randline = 3
		#else:
		#	pass
			
		for i in range(0,randline):
			#print(lines[random.randint(0,len(lines)-1)])
			# newf.write(lines[random.randint(0,len(lines))]) # 写入新文件随机行
			deviceArr=['Galaxy S5','iPhone 5','iPhone 6','iPhone 6 Plus','iPhone 7','iPhone 7 Plus','iPhone 8','iPhone 8 Plus','iPhone X','iPhone SE','Nexus 4','Nexus 5','Nexus 6','Nexus 7']
			chromeOptions = webdriver.ChromeOptions()
			mobileEmulation = {'deviceName': deviceArr[random.randint(0,len(deviceArr)-1)]}
			chromeOptions.add_experimental_option('mobileEmulation', mobileEmulation)
			# chromeOptions.set_headless()#设置成无浏览器界面
			#line =  getip()
			# chromeOptions.add_argument("--proxy-server=http://"+line)
			browser = webdriver.Chrome(chrome_options = chromeOptions)
			browser.set_page_load_timeout(45)
			global ii
			try:
				browser.get(lines[random.randint(0,len(lines)-1)])
			except TimeoutException:
				#browser.execute_script('window.stop()')
				browser.close()
				browser.quit()
			else:								
				for i in range(1, 2):
					browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
					time.sleep(random.randint(2,4))
					click(392,349)
					click(305,610)
					click(385,690)
					time.sleep(1)	
				for i in range(1, 2):
					browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
					time.sleep(random.randint(2,3))
					click(322,389)
					click(335,510)
					click(385,590)
					time.sleep(1)
					ii  = ii+1
					print(ii)
					if ii %2 == 0:
						print("======================================")
						#click(550,990) # mouse.py 的注释代码可以获取指定位置区域
					time.sleep(1)
					browser.close()
					browser.quit()
		oldf.close()
		
		#print("**************************************************")
		
		
		#print("**************************************************")
 
if __name__ == '__main__':
	ii = 0
	for i in range(500):
		getlines()
#browser.close()  
# 退出，清除浏览器缓存