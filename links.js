const links = [
    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd49274d657fe7afb3b67d3&flowMainId=5830&t=1540658682&sign=0e823a7e179c11c1346df0b0362192e3',
        'http://trafficbank.idouzi.com/api/details?id=5bd48ff7d657fe406d263a93&flowMainId=5830&t=1540658642&sign=f15923fc1b99dffdf79a8a154a696bd2',
        'http://trafficbank.idouzi.com/api/details?id=5bd48ffcd657fe4ea02347a3&flowMainId=5830&t=1540658627&sign=b962a7d22b1a36623d55af16dc66d498',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd49219d657fe64cc5359e3&flowMainId=5894&t=1540659226&sign=a66006251629f2dd7921bcbe307b8e99',
        'http://trafficbank.idouzi.com/api/details?id=5bd4921cd657fe746b586db3&flowMainId=5894&t=1540659216&sign=5149b45e46f81a865b55194c172fe327',
        'http://trafficbank.idouzi.com/api/details?id=5bd49222d657fe042a650ea3&flowMainId=5894&t=1540659205&sign=b830caa743dda3a4de02fcbcb49edff1',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd4916ad657fe3fd55e2fa3&flowMainId=6141&t=1540659153&sign=7f5c9d560476e3a5571bc83ed2dc3a01',
        'http://trafficbank.idouzi.com/api/details?id=5bd49173d657fe4eb12c1173&flowMainId=6141&t=1540659144&sign=fbb859d6eae2dd9801245a7f88dd59ad',
        'http://trafficbank.idouzi.com/api/details?id=5bd49179d657fe6dda5e46b3&flowMainId=6141&t=1540659134&sign=77cdef867a08b097f6dee4e79f257fb7',
    ],
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd48f18d657fe03a16cab53&flowMainId=1125&t=1540659088&sign=baa71532a1ea87f314140152182b3ebd',
        'http://trafficbank.idouzi.com/api/details?id=5bd49262d657fe3e4f2f5ff3&flowMainId=1125&t=1540659042&sign=4450eea377aa87ab7bf3f3acce785ada',
        'http://trafficbank.idouzi.com/api/details?id=5bd4926ad657fe5c1f151bd3&flowMainId=1125&t=1540659033&sign=7445d3679292cd7cebcbc460e78d4ebc',
    ],
    //2 138*** 5188
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd48098d657fe3894417873&flowMainId=5188&t=1540657815&sign=7cd040f64a0976c24af048fc98e86c3b',
        'http://trafficbank.idouzi.com/api/details?id=5bd4809ed657fe4736278b93&flowMainId=5188&t=1540657806&sign=042a0d23b1a914c01575e4db0c3ec15d',
        'http://trafficbank.idouzi.com/api/details?id=5bd480a3d657fe56eb2b90a3&flowMainId=5188&t=1540657795&sign=ec29080b17b502df87615601bb9bcfe0',
    ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd492ced657fe24df0d20a3&flowMainId=5207&t=1540657926&sign=2791d14951823c2404dc22d8358436ff',
        'http://trafficbank.idouzi.com/api/details?id=5bd492d6d657fe35ce39e053&flowMainId=5207&t=1540657913&sign=b55f8425ac5b448a2c413e2eaa6c7670',
        'http://trafficbank.idouzi.com/api/details?id=5bd492dbd657fe44a02fe843&flowMainId=5207&t=1540657899&sign=5d989bbff0082924ea5f275a40945533',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd49302d657fe4162040173&flowMainId=5286&t=1540657969&sign=b18e57bf40699ca7138834fcd38238b5',
        'http://trafficbank.idouzi.com/api/details?id=5bd49306d657fe5095185983&flowMainId=5286&t=1540657960&sign=7e5c5808fc8344199d0428291a84abad',
        'http://trafficbank.idouzi.com/api/details?id=5bd4930ad657fe60fd5fcd03&flowMainId=5286&t=1540657951&sign=60079d72c1130ea4d6afe5d1fb06d91c',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd480a3d657fe56eb2b90a3&flowMainId=5295&t=1540657871&sign=fe84c5540bae692432e2da3e9a479823',
        'http://trafficbank.idouzi.com/api/details?id=5bd49299d657fe79011b2403&flowMainId=5295&t=1540657861&sign=d107e4a55da74b1363fffde453100514',
        'http://trafficbank.idouzi.com/api/details?id=5bd4929ed657fe095010b803&flowMainId=5295&t=1540657851&sign=a783bddae5ed00eaff7141cb01dfe1b3',
    ],
    //团 5285
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd4932fd657fe3f24383c13&flowMainId=5285&t=1540658042&sign=2c3ccfd71b45193afa7bd69deed7c649',
        'http://trafficbank.idouzi.com/api/details?id=5bd4933cd657fe5de534add3&flowMainId=5285&t=1540658032&sign=5af24665ad00be07844c0a9419f0c910',
        'http://trafficbank.idouzi.com/api/details?id=5bd4934ad657fe0cad0881e3&flowMainId=5285&t=1540658023&sign=7a77d2a6b36fc77fd61e988acaff41ff',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd493b0d657fe5fe7520233&flowMainId=5683&t=1540658149&sign=f21e29ea9d3c9860752d3715ce8ccbb4',
        'http://trafficbank.idouzi.com/api/details?id=5bd493b6d657fe710c292193&flowMainId=5683&t=1540658138&sign=cf2db9bb3a7d017e591b4fd229a92caa',
        'http://trafficbank.idouzi.com/api/details?id=5bd493bcd657fe7fed453bd3&flowMainId=5683&t=1540658128&sign=461596d88d0c2c1d2928ceeebc8802b0',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd49001d657fe5e9f2a6b23&flowMainId=5667&t=1540658219&sign=b7415939365660e7d78f25e7ca459386',
        'http://trafficbank.idouzi.com/api/details?id=5bd493d0d657fe105a339d43&flowMainId=5667&t=1540658207&sign=e1429c5a925591b4ffc8c38c552be982',
        'http://trafficbank.idouzi.com/api/details?id=5bd493e6d657fe5e0b11a883&flowMainId=5667&t=1540658197&sign=ceed030961b0f407c682703025fb6066',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd49353d657fe2a5a4d8d63&flowMainId=5688&t=1540658102&sign=9cc7213fad398e6a6e15c6b389abd17d',
        'http://trafficbank.idouzi.com/api/details?id=5bd4935cd657fe49b951b003&flowMainId=5688&t=1540658092&sign=8ce8d7ffbe34a540d8eaa04cf4362aaa',
        'http://trafficbank.idouzi.com/api/details?id=5bd49389d657fe689648c2c3&flowMainId=5688&t=1540658078&sign=ce0eae6dabd77a6b1c0196eb37d4b508',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd493e6d657fe5e0b11a883&flowMainId=5703&t=1540658401&sign=730f7c0487a76ee2221818a4225c35bc',
        'http://trafficbank.idouzi.com/api/details?id=5bd49441d657fe080f458a93&flowMainId=5703&t=1540658285&sign=a7cacb335b57616e7f3256241be36468',
        'http://trafficbank.idouzi.com/api/details?id=5bd4944bd657fe363c69de73&flowMainId=5703&t=1540658275&sign=a9a820af6bde6c4679d89a8c7dd0e1b3',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd30adbd657fe69a35f5f53&flowMainId=5731&t=1540558323&sign=d09ce6ebc155dad8ee75dfc829dcbc01',
        'http://trafficbank.idouzi.com/api/details?id=5bd49479d657fe538d118f03&flowMainId=5731&t=1540658515&sign=3d906d820c66222333549cd0ebf4cea5',
        'http://trafficbank.idouzi.com/api/details?id=5bd4947cd657fe6397278423&flowMainId=5731&t=1540658504&sign=0a35032f43d82ed6eccce5da941b250e',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd49460d657fe047f5d02c3&flowMainId=5765&t=1540658585&sign=5119ab6fb8b1b6d9f3603bfdaa259566',
        'http://trafficbank.idouzi.com/api/details?id=5bd49466d657fe13380d11c3&flowMainId=5765&t=1540658575&sign=d911ad6766ac9b9b39db79683778f864',
        'http://trafficbank.idouzi.com/api/details?id=5bd4946cd657fe24140de873&flowMainId=5765&t=1540658565&sign=62d0a9210b2b33a4ea6e6fe6e6b2aead',
    ],
];

module.exports =  links;