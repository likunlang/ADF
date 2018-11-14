/*
*
*  使用：
*  1 安装依赖： npm install
*  2 启动： node index.js
*
* */

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const readline = require('readline');
const fs = require('fs');

let hasNet = 1 //是否有网络
let pageOptions = {
    timeout:45*1000,
    waitUntil:'networkidle0'
}

let config = [
    {index:0, id:'0000',  ifview:true, clickRate:0, clickMax:0, viewed:0, clicked:0},
    {index:1, id:'5207',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:2, id:'5286',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:3, id:'1125',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:4, id:'7992',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:5, id:'8069',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:6, id:'8067',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:7, id:'8070',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:8, id:'8071',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:9, id:'8081',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:10, id:'8079',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:11, id:'8083',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:12, id:'8275',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:13, id:'8285',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:14, id:'8288',  ifview:true, clickRate:100, clickMax:4, viewed:0, clicked:0},
    {index:14, id:'8041',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8109',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8111',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8192',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8586',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8421',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8598',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8601',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8606',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8610',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8182',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'8236',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
    {index:14, id:'5295',  ifview:true, clickRate:100, clickMax:5, viewed:0, clicked:0},
]

//生成随机数函数
function randint(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
function device() {
    return devices[randint(0,devices.length)]
}

//读取文件
function rf(path) {
    let rl = readline.createInterface({
        input: fs.createReadStream(path),
        crlfDelay: Infinity
    });

    let lines = [];
    rl.on('line', (line) => {
        lines.push(line)
    })

    return new Promise((resolve,reject) => {
        rl.on('close',line=>{
            resolve(lines)
        })
    })
}

function getConfig(con,link) {
    let curentId = link.substr(link.indexOf('&t=')-4,4)
    let con_obj = con.find(i =>i.id===curentId) ? con.find(i =>i.id===curentId) : con[0]
    return con_obj
}

async function opend(res) {
    let links = res
    let link = links[randint(0,links.length-1)]
    let conf = getConfig(config,link)

    let clickAd = randint(1,100);
    console.log('randint: ',clickAd)

    if (conf.ifview){
        const browser = await puppeteer.launch({
            headless: true,  //是否需关闭浏览器显示,
        });

        const page = await browser.newPage();
        await page.emulate(device());

        if (!hasNet){ //没有网络
            await page.waitFor(randint(6*1000,10*1000));
        }

        try{
            //打开页面
            await page.goto(link, pageOptions);
            await page.waitForSelector('#container')

            hasNet = 1

            await page.waitForSelector('#ad iframe',{timeout:35000})

            //浏览成功
            conf.viewed++;
            console.log('###### 当前浏览量 ######');
            config.map(item=>{
                if(item.id === conf.id) {
                    console.log('****** ID_'+ item.id + ': ' + item.viewed + ' ******');
                }else {
                    console.log('====== ID_'+ item.id + ': ' + item.viewed + ' ======');
                }
            })

            if(conf.clicked < conf.clickMax && clickAd < conf.clickRate){//点击广告

                await page.waitFor(randint(2*1000,3*1000)); //广告出现后等待时间
                await page.click('#ad');
                await page.waitFor(randint(1*1000,2*1000)); //点击广告后等待时间

                //点击广告成功
                conf.clicked++
                console.log('++++++ 当前点击量 ++++++++++');
                config.map(item=>{
                    if(item.id === conf.id) {
                        console.log('****** ID_'+ item.id + ' 浏览量:' + item.viewed + ' 点击量:' + item.clicked);
                    }else {
                        console.log('+++ID_'+ item.id + ' 浏览量:' + item.viewed + ' 点击量:' + item.clicked);
                    }
                })
                console.log(' ');

            }

            //同时打开其他链接
            for(let i=0; i<4; i++){
                let _link = links[randint(0, links.length - 1)]
                let _conf = getConfig(config, _link)
                if(_conf.id != conf.id && _conf.ifview){
                    let _page = await browser.newPage();
                    await _page.emulate(device());
                    await _page.goto(_link, pageOptions);

                    await _page.waitForSelector('#container')
                    hasNet = 1

                    await _page.waitForSelector('#ad iframe',{timeout:35000})
                    await page.waitFor(randint(500,1*1000)); //广告出现后等待时间

                    _conf.viewed++;
                    console.log('****** 同时点击 ID_'+ _conf.id + ': ' + _conf.viewed + ' ******');
                }
            }

        }catch(e){//没有网络
            console.log('连接超时,切换IP...')
            console.log(' ')
            hasNet = 0;
        }

        //关闭浏览器
        await page.waitFor(randint(2*1000,3*1000));
        browser.close();
    }
    opend(res)
}

rf('./links.txt').then(res=>{
    opend(res)
})









