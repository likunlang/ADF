import random
oldf=open('G:/ADF/listhk.txt','r') #打开原文件
newf=open('G:/ADF/newfile','w') #打开要写入文件
lines=oldf.readlines() #原文件行列表
randline=random.randint(0,len(lines)) # 若干行
for i in range(0,randline):
	print(lines[random.randint(0,len(lines))])
	#newf.write(lines[random.randint(0,len(lines))]) # 写入新文件随机行
oldf.close()
newf.close()