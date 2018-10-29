const links = [
    // //1 176*** 1125
    // [
    //     'http://trafficbank.idouzi.com/api/details?id=5bd586bcd657fe672d699cf3&flowMainId=1125&t=1540748304&sign=2d98b8773cd9c46f3c0f23818d802257',
    //     'http://trafficbank.idouzi.com/api/details?id=5bd586d6d657fe08425311e3&flowMainId=1125&t=1540748292&sign=86522e2393f958fdb9dfd766653825b1',
    // ],
    // //2 138*** 5188
    // [
    //     'http://trafficbank.idouzi.com/api/details?id=5bd5e00fd657fe51482139e3&flowMainId=5188&t=1540747705&sign=415b5549eb616cfcf5e1419fd04a5712',
    //     'http://trafficbank.idouzi.com/api/details?id=5bd5e02ed657fe2f5831c933&flowMainId=5188&t=1540747678&sign=420cb702b0fe116eef407797ce862986',
    // ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd735ddd657fe490765d293&flowMainId=5207&t=1540830737&sign=c22649ebe5a611dab4a76f9f7c84d00c',
        'http://trafficbank.idouzi.com/api/details?id=5bd735e3d657fe59af6c1da3&flowMainId=5207&t=1540830726&sign=77f65d0fb25ef8b26d8c789f4545b84d',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd7360cd657fe48960ab643&flowMainId=5286&t=1540830784&sign=f083c9815301cfc73c7030892fd1e609',
        'http://trafficbank.idouzi.com/api/details?id=5bd73612d657fe67af520603&flowMainId=5286&t=1540830772&sign=644612be7decd43a86ddeccba7326668',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd735a7d657fe1cdc51cf53&flowMainId=5295&t=1540830690&sign=194a3ef89039a729cf52118477bd31d8',
        'http://trafficbank.idouzi.com/api/details?id=5bd735aed657fe2bbb67c743&flowMainId=5295&t=1540830679&sign=b93020ee2a63605d1eb336d9a86f48e1',
    ],
    //团 5285
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd7367ad657fe1f14694d63&flowMainId=5285&t=1540830961&sign=228ef8008329cc48fd8b66b50d9d7e51',
        'http://trafficbank.idouzi.com/api/details?id=5bd73695d657fe412a623fc3&flowMainId=5285&t=1540830951&sign=0db4990ff4df4ec834567ba0bfbc2ba0',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4c7d657fe11d8090783&flowMainId=5683&t=1540747900&sign=4b33c28c4801b42fbe498d88da1bd634',
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4ccd657fe212908f943&flowMainId=5683&t=1540747890&sign=74ce92ce2fb433d48212ffb60077e04d',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd6e17ad657fe1482196be3&flowMainId=5667&t=1540831123&sign=863b0632e7454ebb8ae6200ad51fa539',
        'http://trafficbank.idouzi.com/api/details?id=5bd6e17ed657fe23640b4a63&flowMainId=5667&t=1540831104&sign=f8a360dd402a14566329903802650f1b',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd73185d657fe2206511ab3&flowMainId=5688&t=1540831022&sign=91338b7b1d4ddcc1ce7e7f7a5840c77a',
        'http://trafficbank.idouzi.com/api/details?id=5bd736ebd657fe0bb7624f33&flowMainId=5688&t=1540831001&sign=99e232b8d596ef12fa7b997dc7af81eb',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd73180d657fe12c677e2d3&flowMainId=5703&t=1540831314&sign=cf3fba1093f49197b9aafb19f920233b',
        'http://trafficbank.idouzi.com/api/details?id=5bd737f9d657fe5a982a8383&flowMainId=5703&t=1540831295&sign=56730a26d5f1fa190a98e74da1cd7b01',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd7334dd657fe200e17fb73&flowMainId=5731&t=1540831417&sign=58196ec452fa458c3440138bddc08a06',
        'http://trafficbank.idouzi.com/api/details?id=5bd73370d657fe5f0133faf3&flowMainId=5731&t=1540831405&sign=f5f45fcdacf145d1e6ac5cdc3f6fd39a',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd73885d657fe63bf170be3&flowMainId=5765&t=1540831369&sign=5aeb72d89050afd2d3424e332c568977',
        'http://trafficbank.idouzi.com/api/details?id=5bd71269d657fe07cc587b83&flowMainId=5765&t=1540831353&sign=be5fb5ad34753dd3c80c4521ee287280',
    ],

    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd6eb92d657fe139c64ca23&flowMainId=5830&t=1540831483&sign=4f9b9b659eb36409d80980cf2ff7e05a',
        'http://trafficbank.idouzi.com/api/details?id=5bd6eb9ad657fe33c70eb493&flowMainId=5830&t=1540831470&sign=2c7e7a0dd635200fd033c53ebe43e4fc',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd73176d657fe72d52bdc63&flowMainId=5894&t=1540831570&sign=3a48b98b49c6b0c21d1b9a3cc12c1f8b',
        'http://trafficbank.idouzi.com/api/details?id=5bd73179d657fe03e124e6a3&flowMainId=5894&t=1540831559&sign=d92843af3fd647e1e9ab39566c26123c',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd73335d657fe214e5c0853&flowMainId=6141&t=1540831518&sign=6d91fe969ead028cf0cb49388b701efe',
        'http://trafficbank.idouzi.com/api/details?id=5bd73342d657fe023138cf63&flowMainId=6141&t=1540831507&sign=e1292679aa9e366046172820989c8c1c',
    ],
    //10_649 6496
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd737dbd657fe79e22bece3&flowMainId=6496&t=1540831852&sign=1a409b06b4770ee329360c3a7aae5dbb',
        'http://trafficbank.idouzi.com/api/details?id=5bd737d3d657fe3be22475f3&flowMainId=6496&t=1540831862&sign=312b1cbdbfad6ac28ee025542a52ba6a',
    ],
];

module.exports =  links;