const links = [
    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5ef84d657fe363261b9d3&flowMainId=5830&t=1540748234&sign=00f9bd1a60e6ac72adc4f694fc7dbd4e',
        'http://trafficbank.idouzi.com/api/details?id=5bd5ef8bd657fe652c7078f3&flowMainId=5830&t=1540748224&sign=c71120e4fbede879336aa090bc2c6f33',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5ef46d657fe083e33b913&flowMainId=5894&t=1540748394&sign=691ca5b49cfbd21fcf32a55863935db7',
        'http://trafficbank.idouzi.com/api/details?id=5bd5ef57d657fe191e371703&flowMainId=5894&t=1540748386&sign=d771a5c184cf6dc39bcf9b20732acaf9',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5ee6cd657fe5d5f42bf13&flowMainId=6141&t=1540748345&sign=251b0682b5d3408e20f68a8c558eb8bd',
        'http://trafficbank.idouzi.com/api/details?id=5bd5ee78d657fe7bc94c9423&flowMainId=6141&t=1540748334&sign=b7ecb23281aed9e72887526739c9ceec',
    ],
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd586bcd657fe672d699cf3&flowMainId=1125&t=1540748304&sign=2d98b8773cd9c46f3c0f23818d802257',
        'http://trafficbank.idouzi.com/api/details?id=5bd586d6d657fe08425311e3&flowMainId=1125&t=1540748292&sign=86522e2393f958fdb9dfd766653825b1',
    ],
    //2 138*** 5188
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e00fd657fe51482139e3&flowMainId=5188&t=1540747705&sign=415b5549eb616cfcf5e1419fd04a5712',
        'http://trafficbank.idouzi.com/api/details?id=5bd5e02ed657fe2f5831c933&flowMainId=5188&t=1540747678&sign=420cb702b0fe116eef407797ce862986',
    ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4e5d657fe6e2c7afdc3&flowMainId=5207&t=1540747744&sign=dc1fb31727d4cfd9f70f972efcc59a00',
        'http://trafficbank.idouzi.com/api/details?id=5bd5e026d657fe105c3e8e23&flowMainId=5207&t=1540747731&sign=55545df2a7616d73c144a6c4b0b1041e',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4d3d657fe305469f323&flowMainId=5286&t=1540747801&sign=aafb9600b895c009a09a75f29831b4e5',
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4d7d657fe3f684d3213&flowMainId=5286&t=1540747790&sign=01e39f18447535739ab50a3a0114c241',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5f095d657fe253c1435f3&flowMainId=5295&t=1540747857&sign=b00759c4f7824881dcf8036c08c51764',
        'http://trafficbank.idouzi.com/api/details?id=5bd5f0a9d657fe36461381d3&flowMainId=5295&t=1540747847&sign=b29a379744521d7bd7850cd4116d223c',
    ],
    //团 5285
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4b3d657fe52172611b3&flowMainId=5285&t=1540747956&sign=5e99cea8960a9a68da5803a062069587',
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4b3d657fe52172611b3&flowMainId=5285&t=1540747956&sign=5e99cea8960a9a68da5803a062069587',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4c7d657fe11d8090783&flowMainId=5683&t=1540747900&sign=4b33c28c4801b42fbe498d88da1bd634',
        'http://trafficbank.idouzi.com/api/details?id=5bd5e4ccd657fe212908f943&flowMainId=5683&t=1540747890&sign=74ce92ce2fb433d48212ffb60077e04d',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5e49ad657fe0668507ba3&flowMainId=5667&t=1540748016&sign=c87eb4dfe01f4e153f1a63616cfd5faf',
        'http://trafficbank.idouzi.com/api/details?id=5bd5c0e8d657fe63a203fed3&flowMainId=5667&t=1540748761&sign=d59cd86aa05567b2d660f117050ac73f',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5efa6d657fe335f1c3123&flowMainId=5688&t=1540748057&sign=d5276ddffd8c71809a80a1634f07c109',
        'http://trafficbank.idouzi.com/api/details?id=5bd5efb7d657fe424b7c6113&flowMainId=5688&t=1540748047&sign=f98fbb45ccacefe23af28d45e4bf3d9b',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5f086d657fe76c4302793&flowMainId=5703&t=1540748093&sign=1915b46740a0c869f31d551bcef2e74a',
        'http://trafficbank.idouzi.com/api/details?id=5bd5f08dd657fe070025fe03&flowMainId=5703&t=1540748084&sign=cbae45f1223a0f6aab379fb03d45dab3',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5ee99d657fe6aac4e3253&flowMainId=5731&t=1540748152&sign=7854d83d9a9f6a9f4c728b87a806a946',
        'http://trafficbank.idouzi.com/api/details?id=5bd5eea2d657fe0a4e1b0d53&flowMainId=5731&t=1540748143&sign=6018dc3680505ae3e85830fed69e3e98',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd5f074d657fe38155b56d3&flowMainId=5765&t=1540748191&sign=551a396221f4b8f64b64c8d082cc6b2d',
        'http://trafficbank.idouzi.com/api/details?id=5bd5f07ed657fe58360e7583&flowMainId=5765&t=1540748182&sign=dbf7688558bc52aa76908051ca8fc864',
    ],
];

module.exports =  links;