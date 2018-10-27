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
        });
        const page = await browser.newPage();
        await page.emulate(setDevice());


        try{
            await page.goto('http://www.baidu.com',pageGotoOption);
            await page.waitFor(3000)
            console.log('加载成功')
        }catch(e){//没有网络
            console.log(e)
            console.log(' ')
        }
        browser.close();
        await page.waitFor(1000)
        run();
}

run();






