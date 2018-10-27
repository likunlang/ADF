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
	for line in open('./IP3.txt','r'):
		oldf=open('./links.txt','r') #打开原文件
		#newf=open('G:/ADF/newfile','w') #打开要写入文件
		lines=oldf.readlines() #原文件行列表
		randline=random.randint(0,len(lines)%10) # 若干行
		if randline<4:
			randline = 4
		else:
			pass
			
		for i in range(0,randline):
			print(lines[random.randint(0,len(lines)-1)])
			#newf.write(lines[random.randint(0,len(lines))]) # 写入新文件随机行
			
			chromeOptions = webdriver.ChromeOptions()
			mobileEmulation = {'deviceName': 'iPhone X'}
			chromeOptions.add_experimental_option('mobileEmulation', mobileEmulation)
			chromeOptions.set_headless()#设置成无浏览器界面
			#line =  getip()
			chromeOptions.add_argument("--proxy-server=http://"+line)
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
				time.sleep(3)					
				for i in range(1, 2):
					browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
					time.sleep(3)
				for i in range(1, 2):
					browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
					ii  = ii+1
					print(ii)
					if ii %10 == 0:
						print("======================================")
						click(550,990) # mouse.py 的注释代码可以获取指定位置区域
					time.sleep(3)
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


 
