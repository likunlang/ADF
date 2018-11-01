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
400-16
500-20
*/

let configObj = [ //比例必须小于4% 则: 浏览量=25*点击量
    //id0、是否冻结、打开链接概率、点击广告概率、浏览量max、点击量max、当前浏览量、当前点击量
    // {id:0,  alive:true,  viewRate:100, clickRate:20, viewMax:1500, clickMax:14, viewed:0, clicked:0},   //138 ** 870 7 *0.2(680/11=0.016)
    {id:0,  alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //B1 1026 13 *3.8(921/19=0.0206)
    {id:1,  alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},   //B2 840 0 *1.75(853/14=0.016)
    {id:2,  alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //黑 913 10 *2.8(835/14=0.016)
    {id:3,  alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:15, viewed:0, clicked:0},   //176 **379 1073 14 *2.6(1017/21=0.02)
    {id:4,  alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //1_642 1100 22 *1.38(878/11=0.0125)
    {id:5, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //2_648 920 16 *3(884/15=0.0169)
    {id:6, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //3_674 970 22 *2.13(914/17=0.018)
    {id:7, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //4_654 967 0 *2(909/16=0.017)
    {id:8, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //5_664 891 18 *3(887/15=0.0169)
    {id:9, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //6_643 859 13 *3.4(836/17=0.0203)
    {id:10, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //7_647 840 8 *3(875/15=0.017)
    {id:11, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //8_644 936 23 *3.2(863/16=0.0185)
    {id:12, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //9_644 930 16 *3.7(825/15=0.01818)
    {id:13, alive:true,  viewRate:100, clickRate:22, viewMax:1500, clickMax:16, viewed:0, clicked:0},  //10_649 1061 0 *1(823/4)
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
function setDevice() {
    let randomIndex = Math.floor(Math.random()*devices.length)
    return devices[randomIndex]
}

async function run(index, config, flag, links) {

    let opendLink = randomNum(1,100);
    let opendAd = randomNum(1,100);
    let viewtime = randomNum(12*1000,14*1000);//页面停留时间

    console.log('randomNum: ',opendLink,opendAd)
    let currentConfig = config.find(item =>item.id===index.target);

    if (opendLink < currentConfig.viewRate){

        const browser = await puppeteer.launch({
            headless: true,  //是否需关闭浏览器显示,
        });

        const page = await browser.newPage();
        await page.emulate(setDevice());

        if (!flag){
            flag = 1;
            await page.waitFor(randomNum(3*1000,6*1000));
        }else{
            await page.waitFor(randomNum(10,20));//使打开link时间间隔随机
        }

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

                            await page.waitFor(randomNum(100,300));
                        }
                    }else if (currentConfig.clicked >= currentConfig.clickMax){
                        await page.waitFor(randomNum(50,160));
                        console.log('---- ID_ '+currentConfig.id+'已完成点击：'+currentConfig.clicked+' ----')
                    }


                    let clickFalg = 0;
                    let openLinks = index.arr.length < 6 ? index.arr.length : 6
                    while (clickFalg < openLinks){ //同时打开的链接数
                        let clickRandom = randomNum(0,index.arr.length);
                        let currentConfigNew = config.find(item =>item.id===clickRandom);
                        if (clickRandom !==index.target &&  currentConfigNew.viewed < currentConfigNew.viewMax) {
                            let pageNew = await browser.newPage();
                            await pageNew.emulate(setDevice());

                            let linkIndexNew = randomNum(0,links[clickRandom].length);
                            await pageNew.goto(links[clickRandom][linkIndexNew],pageGotoOption); //前面加await为同步执行
                            let containerNew = '#container';
                            await pageNew.waitForSelector(containerNew);
                            if (containerNew){
                                currentConfigNew.viewed++;
                                console.log('****** 同时点击 ID_'+ currentConfigNew.id + ': ' + currentConfigNew.viewed + ' ******');
                            }
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
        await page.waitFor(randomNum(100,300));
        browser.close();

    }else{
        console.log('NO opend');
    }

    index.target = index.target === index.arr[index.arr.length - 1] ? index.arr[0] : index.arr[index.arr.indexOf(index.target) + 1];

    run(index, config, flag, linkArr);
}

run(indexObj, configObj, netFlag, linkArr);





