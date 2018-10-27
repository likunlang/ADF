/*
*
*  使用：
*  1 安装依赖： npm install
*  2 启动： node index.js
*
* */

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

let pageGotoOption = {
    timeout:120*1000,
    waitUntil:'networkidle0'
}


//生成随机数函数
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function setDevice() {
    let randomIndex = Math.floor(Math.random()*devices.length)
    return devices[randomIndex]
}

async function run() {

    const browser = await puppeteer.launch({
        headless: false,  //是否需关闭浏览器显示,
        args: [
            '--proxy-server=183.129.244.17:17452'
        ]
    });
    const page = await browser.newPage();
    await page.emulate(devices['iPhone 6']);



    try{
        await page.goto('http://ip.cn',pageGotoOption);
        let container = '#container';
        await page.waitForSelector(container);
        console.log('加载成功')
    }catch(e){//没有网络
        console.log(e)
        console.log(' ')
    }

}

run();






