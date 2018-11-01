const links = [
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda308fd657fe64e9013e73&flowMainId=1125&t=1541030211&sign=c99bd7d8799f92c0849ca3e63c093789',
        'http://trafficbank.idouzi.com/api/details?id=5bda309fd657fe0419783923&flowMainId=1125&t=1541030202&sign=43990b4516492685dcecdd65ee451f92',
    ],
    //2 138*** 5188
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda3701d657fe2c481820c3&flowMainId=5188&t=1541029651&sign=7f56cbd4446a2fabc7ea5a71c6dd3271',
        'http://trafficbank.idouzi.com/api/details?id=5bda36fad657fe1bf6581373&flowMainId=5188&t=1541029660&sign=2345c22b71610c9e92a396eebfb2da99',
    ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda36dbd657fe3d516527d3&flowMainId=5207&t=1541029775&sign=33afee7e583675483739066165867d0a',
        'http://trafficbank.idouzi.com/api/details?id=5bda36d5d657fe2de325b423&flowMainId=5207&t=1541029785&sign=bba60b088780db26fa9218feeadfd5af',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda36e0d657fe4cb9004be3&flowMainId=5286&t=1541029744&sign=71cee5c5f17f296dc471bf27c2852174',
        'http://trafficbank.idouzi.com/api/details?id=5bda36e7d657fe5dfd1a0a13&flowMainId=5286&t=1541029733&sign=a863bccca7d0d7cfdf6a203824a1b7a8',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda36efd657fe6dcb048f23&flowMainId=5295&t=1541029697&sign=d03540fc94940522d657e7ba8bb709eb',
        'http://trafficbank.idouzi.com/api/details?id=5bda36f5d657fe0d155ed343&flowMainId=5295&t=1541029688&sign=1a0f5f130a7b2feefb10ba22fc1df0e1',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda2cf5d657fe20fc2b74b3&flowMainId=5683&t=1541029845&sign=c51b832a05c6d1310e37bf545904a5c3',
        'http://trafficbank.idouzi.com/api/details?id=5bda29dcd657fe75c269c0f3&flowMainId=5683&t=1541029854&sign=66884e94b85a13015b8d56a5e91271f4',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda29d2d657fe57752c0b63&flowMainId=5667&t=1541029885&sign=ccf62d8c9105f5da036929f084afdd2b',
        'http://trafficbank.idouzi.com/api/details?id=5bda29ccd657fe45c011eff3&flowMainId=5667&t=1541029895&sign=0edc084cb7594519dbd758387153a3dc',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda29c6d657fe36cf52e463&flowMainId=5688&t=1541029935&sign=9e4755f494c79310cc710eab79abcbfb',
        'http://trafficbank.idouzi.com/api/details?id=5bda29c2d657fe27315f8fa3&flowMainId=5688&t=1541029945&sign=d7337b3ea8429a4455faf3f8a66633e6',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda29bdd657fe79d5675533&flowMainId=5703&t=1541029983&sign=af8d9c8a2d391c93328e82a8820c787b',
        'http://trafficbank.idouzi.com/api/details?id=5bda29abd657fe5c395fefe3&flowMainId=5703&t=1541030006&sign=071318d4a194b2a8d2c4315c753cde4f',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda30d6d657fe3e9124af13&flowMainId=5731&t=1541030064&sign=86d5f13a4821e1bf3cd820b83de2d5ba',
        'http://trafficbank.idouzi.com/api/details?id=5bda30cbd657fe2ec623e883&flowMainId=5731&t=1541030073&sign=eabebc89a2cb6680cc6f0bce51737d1f',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda30c7d657fe112d4c9d43&flowMainId=5765&t=1541030111&sign=876e82c3a60abfa8a3a45036dd96c610',
        'http://trafficbank.idouzi.com/api/details?id=5bda30bdd657fe02625ff143&flowMainId=5765&t=1541030121&sign=46b34216896ed003b4dc8e08cfec3d03',
    ],

    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda30afd657fe52862daae3&flowMainId=5830&t=1541030155&sign=7ac0babca3310d7cf70579675a68a475',
        'http://trafficbank.idouzi.com/api/details?id=5bda30a9d657fe30720fab73&flowMainId=5830&t=1541030164&sign=7f271af38bef7fe5f6aa7f3a5cf1553b',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda1b4dd657fe10593f40b3&flowMainId=5894&t=1541030258&sign=7bd0aaea8c0b5f9ddb530ecf148da05f',
        'http://trafficbank.idouzi.com/api/details?id=5bda1b46d657fe715868d133&flowMainId=5894&t=1541030267&sign=b7ace153757333a5f3c2cc552a5ae082',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda1b3ad657fe40bc5efe13&flowMainId=6141&t=1541030309&sign=c4a4cc6fb00d53dfa1778a443073e6e9',
        'http://trafficbank.idouzi.com/api/details?id=5bda1b3ed657fe61b26c9ec3&flowMainId=6141&t=1541030300&sign=c5b96bc1e3b2ce835c3f04c7927eb8ab',
    ],
    //10_649 6496
    [
        'http://trafficbank.idouzi.com/api/details?id=5bda3fced657fe6496736f23&flowMainId=6496&t=1541030345&sign=6e1aa53a0541945af3b6608d076c186c',
        'http://trafficbank.idouzi.com/api/details?id=5bda3ffad657fe74431e9733&flowMainId=6496&t=1541030336&sign=5a5f39a10e056469dea5afcf5984d0a1',
    ],
];

module.exports =  links;