/*
*
*  使用：
*  1 安装依赖： npm install
*  2 启动： node index.js
*
* */

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

let linkArr = require('./links');
const axios = require('axios');
/*
50-2
100-4
150-6
200-8
250-10
300-12
350-14
400-16*/

let configObj = [ //比例必须小于4% 则: 浏览量=25*点击量
    //id、是否冻结、打开链接概率、点击广告概率、浏览量max、点击量max、当前浏览量、当前点击量
    {id:0,  alive:true,  viewRate:100, clickRate:12, viewMax:1500, clickMax:3, viewed:0, clicked:0},   //17
    {id:1,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},   //138
    {id:2,  alive:true,  viewRate:100, clickRate:12, viewMax:1500, clickMax:3, viewed:0, clicked:0},  //B1
    {id:3,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},   //B2
    {id:4,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //黑
    {id:5,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //团
    {id:6,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //1_642
    {id:7,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //2_648
    {id:8,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //3_674
    {id:9,  alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //4_654
    {id:10, alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //5_664
    {id:11, alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //6_643
    {id:12, alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //7_647
    {id:13, alive:true,  viewRate:100, clickRate:0, viewMax:1500, clickMax:0, viewed:0, clicked:0},  //8_644
    {id:14, alive:true,  viewRate:100, clickRate:0, viewMax:400, clickMax:0, viewed:0, clicked:0},  //9_644
]

let aliveConfigObj = configObj.filter(item =>item.alive === true)

//轮询下标对象
let indexObj = {
    target:aliveConfigObj[0].id,
    arr:aliveConfigObj.map(item=>item.id)
};

let netFlag = 1 //是否有网络
let pageGotoOption = {
    timeout:120*1000,
    waitUntil:'networkidle0'
}


//生成随机数函数
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
//获取代理列表
function getProxyList() {
    const NewProxy = {
        index:0,
        list:[]
    }
    return new Promise((resolve, reject)=>{
        return axios.get('http://tpv.daxiangdaili.com/ip/?tid=556024889005251&num=100&filter=on')
            .then(res=>{
                NewProxy.list = res.data.replace(/\r\n/g,'-').split('-');
                if(NewProxy.list.length > 3){//获取到ip大于4个时
                    console.log('++++获取IP成功++++')
                    resolve(NewProxy)
                }else {//获取不到ip
                    setTimeout(()=>{
                        console.log('重新获取IP')
                        resolve(getProxyList())
                    },200*1000)

                }
            })
            .catch(error=> {
                console.log(error);
            });

    })
}

function setDevice() {
    let randomIndex = Math.floor(Math.random()*devices.length)
    return devices[randomIndex]
}


async function run(index, config, flag, links, proxy) {

    let opendLink = randomNum(1,100);
    let opendAd = randomNum(1,100);
    let viewtime = randomNum(10*1000,14*1000);//页面停留时间

    console.log('randomNum: ',opendLink,opendAd)

    let currentConfig = config.find(item =>item.id===index.target);

    if (opendLink < currentConfig.viewRate){

        if (proxy.index === proxy.list.length || proxy.list[proxy.index] === undefined){
            await getProxyList().then(res=>{
                proxy = res;
                console.log('++++新获取proxy',proxy,'++++')
            });
        }

        const browser = await puppeteer.launch({
            headless: true,  //是否需关闭浏览器显示,
            args: [
                '--proxy-server='+ proxy.list[proxy.index]
            ]
        });
        console.log('当前使用代理',proxy.list[proxy.index])
        proxy.index++;

        const page = await browser.newPage();
        await page.emulate(setDevice());
        await page.waitFor(randomNum(10,20));//使打开link时间间隔随机

        if ( currentConfig.viewed < currentConfig.viewMax) {
            try{
                //打开页面
                let linkIndex = randomNum(0,links[index.target].length); //随机链接下标
                await page.goto(links[index.target][linkIndex],pageGotoOption);

                let container = '#container';
                await page.waitForSelector(container);
                if (container&&flag){ //有网络，加载页面成功
                    currentConfig.viewed++;
                    console.log('###### 当前浏览量 ######');

                    config.map(item=>{
                        if(item.id === index.target) {
                            console.log('****** ID_'+ item.id + ': ' + item.viewed + ' ******');
                        }else {
                            console.log('====== ID_'+ item.id + ': ' + item.viewed + ' ======');
                        }
                    })
                    console.log(' ');

                    //点击广告
                    if (opendAd < currentConfig.clickRate && currentConfig.clicked < currentConfig.clickMax) {//随机数来决定是否点击广告
                        let AD = '#ad';
                        await page.waitForSelector(AD);
                        if (AD){
                            await page.waitFor(viewtime);
                            await page.click(AD);
                            currentConfig.clicked++
                            console.log('++++++ 当前点击量 ++++++++++');
                            config.map(item=>{
                                if(item.id === index.target) {
                                    console.log('****** ID_'+ item.id + ' 浏览量:' + item.viewed + ' 点击量:' + item.clicked + ' 比例:' + parseInt(item.clicked*100/item.viewed) + '% ******');
                                }else {
                                    console.log('+++ID_'+ item.id + ' 浏览量:' + item.viewed + ' 点击量:' + item.clicked + ' 比例:' + parseInt(item.clicked*100/item.viewed) + '%+++');
                                }
                            })
                            console.log(' ');

                            await page.waitFor(randomNum(100,600));
                        }
                    }else if (currentConfig.clicked >= currentConfig.clickMax){
                        await page.waitFor(randomNum(100,300));
                        console.log('---- ID_ '+currentConfig.id+'已完成点击：'+currentConfig.clicked+' ----')
                    }


                    let clickFalg = 0;
                    let openLinks = index.arr.length < 4 ? index.arr.length : 4
                    while (clickFalg < openLinks){ //同时打开的链接数
                        let clickRandom = randomNum(0,index.arr.length);
                        let currentConfigNew = config.find(item =>item.id===clickRandom);
                        if (clickRandom !==index.target &&  currentConfigNew.viewed < currentConfigNew.viewMax) {
                            let pageNew = await browser.newPage();
                            await pageNew.emulate(setDevice());

                            let linkIndexNew = randomNum(0,links[clickRandom].length);
                            await pageNew.goto(links[clickRandom][linkIndexNew],pageGotoOption); //前面加await为同步执行
                            currentConfigNew.viewed++;
                            console.log('****** 同时点击 ID_'+ currentConfigNew.id + ': ' + currentConfigNew.viewed + ' ******');
                        }

                        clickFalg++;
                    }

                }

            }catch(e){//没有网络
                console.log('连接超时,切换IP...')
                console.log(' ')
                flag = 0;
            }
        }else{
            //如果超出预设最大值则在index.arr中删除下标
            index.arr = index.arr.filter(item=>{
                if (item !== index.target){
                    return item
                }
            })

            if( index.arr.length === 0){
                //全部超出预设最大值，退出程序
                console.log('++++++ 最终数据 ++++++');
                config.map(item=>{
                    console.log('++ID_'+ item.id + ' 浏览量:' + item.viewed + ' 点击量:' + item.clicked + ' 比例:' + parseInt(item.clicked*100/item.viewed) + '%');
                })
                process.exit();
            }
        }

        //关闭浏览器
        await page.waitFor(randomNum(200,800));
        browser.close();

    }else{
        console.log('NO opend');
    }

    index.target = index.target === index.arr[index.arr.length - 1] ? index.arr[0] : index.arr[index.arr.indexOf(index.target) + 1];

    run(index, config, flag, linkArr, proxy);
}

getProxyList()
.then(resProxy=>{
    console.log(resProxy)
    run(indexObj, configObj, netFlag, linkArr, resProxy)
})






