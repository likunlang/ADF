const links = [
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd2fa54d657fe4d5a1a6343&flowMainId=1125&t=1540558488&sign=e2e3583a63858a93f6c46c59cf2813e7',
        'http://trafficbank.idouzi.com/api/details?id=5bd2fa64d657fe7a45209c53&flowMainId=1125&t=1540558477&sign=24e23b265f06a2b26990111aa30f44dd',
        'http://trafficbank.idouzi.com/api/details?id=5bd2fa6dd657fe27065ab9b3&flowMainId=1125&t=1540558462&sign=5facdc7f27c4c33bffdcdbb6ae1031cf',
    ],
    //2 138*** 5188
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd30ae6d657fe09ed198563&flowMainId=5188&t=1540557806&sign=6976b89a406154e9a4d71cd9310eb21a',
        'http://trafficbank.idouzi.com/api/details?id=5bd30aead657fe167a518f13&flowMainId=5188&t=1540557796&sign=eaedff360da15f2e029e52dda8fe34c1',
        'http://trafficbank.idouzi.com/api/details?id=5bd30aefd657fe258d2096e3&flowMainId=5188&t=1540557786&sign=d006ecc5356d15d42814cd43a2f9117e',
    ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd0675ad657fe073d322813&flowMainId=5207&t=1540389331&sign=3b79c0499f4276911cee16abbde08fb6',
        'http://trafficbank.idouzi.com/api/details?id=5bd06763d657fe266c270cc3&flowMainId=5207&t=1540389321&sign=9914a3fd57b093e88cd0b3c2c7efd47d',
        'http://trafficbank.idouzi.com/api/details?id=5bd06768d657fe38671b33a3&flowMainId=5207&t=1540389315&sign=ef7c4e4db6478963f0cbcfd310ad8c07',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd2fa99d657fe231e401763&flowMainId=5286&t=1540557893&sign=59ddd87ef5e3bb793b2314b28ca60b5c',
        'http://trafficbank.idouzi.com/api/details?id=5bd2faa4d657fe52f051ff33&flowMainId=5286&t=1540557880&sign=dc7df890a98a631f2ffbf4d7283d4caa',
        'http://trafficbank.idouzi.com/api/details?id=5bd2faa4d657fe52f051ff33&flowMainId=5286&t=1540557880&sign=dc7df890a98a631f2ffbf4d7283d4caa',
        'http://trafficbank.idouzi.com/api/details?id=5bd2faacd657fe71420c8523&flowMainId=5286&t=1540557870&sign=2d60a483635a98adcc2a93d559e3514e',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd42c23d657fe6442556f13&flowMainId=5295&t=1540634923&sign=6771984346bf02c264800c71dd71687b',
        'http://trafficbank.idouzi.com/api/details?id=5bd42c28d657fe72bc3989e3&flowMainId=5295&t=1540634914&sign=1e66d70701c73f9ee83f6fc95559a86c',
        'http://trafficbank.idouzi.com/api/details?id=5bd42c2ed657fe02b546f3b3&flowMainId=5295&t=1540634904&sign=1432572d3ad1ad94b5f0e3263e137e8a',
    ],
    //团 5285
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd42d08d657fe272e286d03&flowMainId=5285&t=1540634964&sign=f6a268dbb5c8eeebe801cc5df4af7ac7',
        'http://trafficbank.idouzi.com/api/details?id=5bd42d10d657fe39ee4c54f3&flowMainId=5285&t=1540634954&sign=41526ed62c054d107076f71383dfdd8d',
        'http://trafficbank.idouzi.com/api/details?id=5bd42d12d657fe49601f3243&flowMainId=5285&t=1540634945&sign=00503486513be1ddc40065d6217ed7e2',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd307b7d657fe4ef0742b33&flowMainId=5683&t=1540557972&sign=eb94b080566d3aac4e8b10da3c79c228',
        'http://trafficbank.idouzi.com/api/details?id=5bd307c1d657fe6cb850fc53&flowMainId=5683&t=1540557961&sign=96911c345044b005ceaa5f9443b42533',
        'http://trafficbank.idouzi.com/api/details?id=5bd307c7d657fe0b5458f853&flowMainId=5683&t=1540557952&sign=1eb6d923d978197ca8eb0d9e67e4e667',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd2e98dd657fe69d3585283&flowMainId=5667&t=1540558097&sign=a4991fa526361783bdb06f90ac5e6530',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e995d657fe08af2cbb03&flowMainId=5667&t=1540558087&sign=1b2fcb5f81730951fa41a985666dca65',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e99ed657fe168e2d3013&flowMainId=5667&t=1540558077&sign=eb88b1f5f51ddf358fd12b93a1882c02',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd2e99ed657fe168e2d3013&flowMainId=5688&t=1540558037&sign=514d76989ae5bf15f0d068aeb5cf6759',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e9a4d657fe3651340333&flowMainId=5688&t=1540558027&sign=fbfdb6d403ddb0be8397f8da6347040d',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e9aad657fe462f6c77f3&flowMainId=5688&t=1540558018&sign=70d19015b1b6e5644db5140522f3c0ae',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd30786d657fe46ab3193c3&flowMainId=5703&t=1540558182&sign=29a5c0d5b7b27d62fd79afa04da701a9',
        'http://trafficbank.idouzi.com/api/details?id=5bd30796d657fe54311b5de3&flowMainId=5703&t=1540558173&sign=2e0383aa306d39d651fead0793448a74',
        'http://trafficbank.idouzi.com/api/details?id=5bd307add657fe0279516ce3&flowMainId=5703&t=1540558162&sign=5477986e8561a90c03fa154fe14eaa78',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd30adbd657fe69a35f5f53&flowMainId=5731&t=1540558323&sign=d09ce6ebc155dad8ee75dfc829dcbc01',
        'http://trafficbank.idouzi.com/api/details?id=5bd30ae0d657fe781f5f39b3&flowMainId=5731&t=1540558313&sign=01039ae9721eba0de22b957bb63d0c8f',
        'http://trafficbank.idouzi.com/api/details?id=5bd30aead657fe167a518f13&flowMainId=5731&t=1540558300&sign=ece2d3ff01f35c83382c6e38a73bb10c',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd30accd657fe3be9555a63&flowMainId=5765&t=1540558403&sign=0a9691699113be5d6d879dd30e4da3e9',
        'http://trafficbank.idouzi.com/api/details?id=5bd30ad2d657fe4bf345e7d3&flowMainId=5765&t=1540558390&sign=2360627f0bb8cdd4f74f27974517cc0a',
        'http://trafficbank.idouzi.com/api/details?id=5bd30ad6d657fe5a92352ae3&flowMainId=5765&t=1540558379&sign=6ff8b5f7d0fe98890b7fbe4797d167f7',
    ],
    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd306c4d657fe66155b8f53&flowMainId=5830&t=1540558578&sign=1f82c25128debc2fda91f122ecc58569',
        'http://trafficbank.idouzi.com/api/details?id=5bd306cfd657fe03c92ca9a3&flowMainId=5830&t=1540558568&sign=793da865e9d4845c8f6805afe9e96a8c',
        'http://trafficbank.idouzi.com/api/details?id=5bd306dfd657fe3171171e03&flowMainId=5830&t=1540558554&sign=b9644ba4b3fc5323f3422a07b6aa230f',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd2e942d657fe01e0483b23&flowMainId=5894&t=1540558639&sign=958555a7ae719aebd3dc33fad333ba66',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e94dd657fe1fae017b53&flowMainId=5894&t=1540558629&sign=84295a21cfc3a4d6452388c8681c3068',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e955d657fe3faa5887f3&flowMainId=5894&t=1540558620&sign=aac928f8c5b8aeb181493b2c191e2aef',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd2f7a4d657fe1eb12a54d3&flowMainId=6141&t=1540558720&sign=e86ad8d66b67d6ac858bcc4c65419ce2',
        'http://trafficbank.idouzi.com/api/details?id=5bd2e95bd657fe4fc36333f3&flowMainId=6141&t=1540558707&sign=9886f22fedd6b30a206a7377f38d5e91',
        'http://trafficbank.idouzi.com/api/details?id=5bd30d8dd657fe758c268ff3&flowMainId=6141&t=1540558686&sign=480db7b6c3b63093b8d0d583ef4963b9',
    ],
];

module.exports =  links;