const links = [
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd87063d657fe6752492723&flowMainId=1125&t=1540911324&sign=d1cebe9a1a99af451ba644dfac9d8b4b',
        'http://trafficbank.idouzi.com/api/details?id=5bd87081d657fe06422990c3&flowMainId=1125&t=1540911315&sign=2ccb6a3760e0b5ed22f4d96d5bb03cab',
    ],
    //2 138*** 5188
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86d9fd657fe6e71436a23&flowMainId=5188&t=1540910523&sign=cbcab0300ac421745226fb9c1a84cb5d',
        'http://trafficbank.idouzi.com/api/details?id=5bd86d9cd657fe5f3871ad53&flowMainId=5188&t=1540910533&sign=fe9284bde71959e8d547698eff6f9681',
    ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86db0d657fe1d23692b73&flowMainId=5207&t=1540910563&sign=9b9a8a65668b01293969a44f93ba05bf',
        'http://trafficbank.idouzi.com/api/details?id=5bd86dadd657fe0e28142593&flowMainId=5207&t=1540910573&sign=b8e475f7e74fc92da04520e19ba06854',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86c33d657fe044855d203&flowMainId=5286&t=1540910393&sign=c5b40010395fb481e6e1e222b44a770d',
        'http://trafficbank.idouzi.com/api/details?id=5bd86c38d657fe12f06c4153&flowMainId=5286&t=1540910383&sign=5a44a59cd9a3fb51a07f56be74695b5a',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86c7fd657fe7f08659293&flowMainId=5295&t=1540910314&sign=7d139ef8e17796e15ad8d293ced8d825',
        'http://trafficbank.idouzi.com/api/details?id=5bd86c98d657fe79313e35a3&flowMainId=5295&t=1540910304&sign=667b008cce0f56ed36cf13884f7e5a50',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86dfbd657fe06473246e3&flowMainId=5683&t=1540910686&sign=28a0e7eabc71b45ef88f55ba05beb68c',
        'http://trafficbank.idouzi.com/api/details?id=5bd86e6ad657fe559a792ee3&flowMainId=5683&t=1540910706&sign=ca0e0ed5522d6123210afd47696e67d7',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86ee9d657fe5efb4d4953&flowMainId=5667&t=1540910850&sign=96ff6adf3c44303a8cf1f28fdb12752f',
        'http://trafficbank.idouzi.com/api/details?id=5bd86ef0d657fe7d6e47a2a3&flowMainId=5667&t=1540910862&sign=d76f865385fb85ea4ce901c34e450185',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd85312d657fe42650a8e93&flowMainId=5688&t=1540910777&sign=3649c1eabc2fefb3f7812354983948e9',
        'http://trafficbank.idouzi.com/api/details?id=5bd852fed657fe67ac1883c3&flowMainId=5688&t=1540910786&sign=d04ffc4dbf471f9b30650ac915ad7094',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86df2d657fe2735516b13&flowMainId=5703&t=1540910954&sign=a3168477d34376ca24bb2e0fad3991d2',
        'http://trafficbank.idouzi.com/api/details?id=5bd86dd9d657fe2be419ea53&flowMainId=5703&t=1540910964&sign=19090c852647346c1b647e878c66c2ee',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd7dbc2d657fe3cb2557783&flowMainId=5731&t=1540911002&sign=64acbf3c15a1066c9b3e79e3fe08a276',
        'http://trafficbank.idouzi.com/api/details?id=5bd7dbc5d657fe4b8f75a3d3&flowMainId=5731&t=1540910992&sign=71d91e33a8a85ca3a17606074a70e9cd',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd7df34d657fe6eb87e85b3&flowMainId=5765&t=1540911073&sign=92475854cb6e7c00485a539514cf01b0',
        'http://trafficbank.idouzi.com/api/details?id=5bd7df28d657fe6013666df3&flowMainId=5765&t=1540911082&sign=25a35ed7cf571954d96c2824dccdba19',
    ],

    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd87039d657fe5a2d000d63&flowMainId=5830&t=1540911187&sign=a111e0ab977fb231e311d5d9900e213f',
        'http://trafficbank.idouzi.com/api/details?id=5bd87023d657fe1b426b4113&flowMainId=5830&t=1540911198&sign=97fb508db2cd797a30110367302352e2',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd86edbd657fe3d79155a33&flowMainId=5894&t=1540911284&sign=0d7a5221099bf8ffb99c4db71536f951',
        'http://trafficbank.idouzi.com/api/details?id=5bd86ee1d657fe4c134b9763&flowMainId=5894&t=1540911275&sign=1797eb99cc5f7760894f256502d62c05',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd870f2d657fe18a264e993&flowMainId=6141&t=1540911436&sign=5315ae9377bdfe38b2f2b1cfb843e278',
        'http://trafficbank.idouzi.com/api/details?id=5bd870e4d657fe7966143a73&flowMainId=6141&t=1540911448&sign=1aa8ef97fb0c02b16c8c27202ce0abc5',
    ],
    //10_649 6496
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd7df1bd657fe32004602c3&flowMainId=6496&t=1540914423&sign=68e5be6fc386b7390f231d69560f4821',
        'http://trafficbank.idouzi.com/api/details?id=5bd86da8d657fe7e1a4517b3&flowMainId=6496&t=1540911528&sign=dfa13ff08d46b1be7c006b34a1b51f23',
    ],
];

module.exports =  links;