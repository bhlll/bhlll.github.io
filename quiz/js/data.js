var data = [
  {
    a:'看到路边有人乞讨，在有零钱的情况下，你一般会给多少钱？',
    q:[
      '1元以下',
      '5元及以上'
    ]
  },
  {
    a:'你喜欢做家务吗?',
    q:[
      '喜欢',
      '不喜欢'
    ]
  },
  {
    a:'你会至少一门乐器吗？',
    q:[
      '会',
      '不会'
    ]
  },
  {
    a:'给你一把古筝，你认为它是?',
    q:[
      '背面藏着暗器的掩饰物',
      '一把普通的乐器'
    ]
  },
  {
    a:'恋人送你一枚戒指，你认为是什么材质的?',
    q:[
      '铂金',
      '黄金'
    ]
  },
  {
    a:'你擅长运动或者体育吗？',
    q:[
      '擅长',
      '不擅长'
    ]
  },
  {
    a:'你喜欢看神话故事吗？',
    q:[
      '喜欢',
      '不喜欢'
    ]
  },
  {
    a:'圣诞老人和一枝梅你比较喜欢哪个？',
    q:[
      '一枝梅',
      '圣诞老人'
    ]
  },
  {
    a:'走在路上，有人突然塞了一个东西给你，你认为是什么?',
    q:[
      '糖果',
      '瓜子'
    ]
  },
  {
    a:'如果你有一台时光机，最想穿越回那个朝代？',
    q:[
      '唐朝',
      '宋朝'
    ]
  }
];
var hudata = [
  {
    t:'aishen',
    r:'你高度敏感，有一种难能可贵的善良，它会使在心灵层面上与他人产生共鸣。你有审美与创造力，有艺术家气质。你总会想要建立或改变些什么，也许是艺术，也许是理论，或者仅仅是工作或生活方式。你比较喜欢独处，想要留在一个安静的地方，远离世界的繁华喧嚣动荡。这会使你心如止水，从而看清更多事物的本质。'
  },
  {
    t:'guangming',
    r:'你认为自己是一个自信努力、精力充沛的人。这些品质使你在许多方面都出类拔萃。不过你可能会害怕失败，因为你的安全感大都基于你目前的成就，因此你变成工作狂，甚至不在意自己的身体和精神状况。其实你已经很棒了，你有独特的天赋和优点。要知道，那些真正爱你的人，并非因为你的成就而爱你，他们爱你只是因为你是你。'
  },
  {
    t:'kuye',
    r:'你是一个温和、耐心、好脾气的人。你想要与生活保持一种美丽的和谐，也试图在你的交往圈子里传递这种态度。不过，对完美关系的过度追求可能会使你固执地否认不愉快与冲突的存在，从而导致一种刻意的冷漠态度。其实，每种看似负面的事物都有它存在的原因。接受生活的不完美，你才会成为一个更坚强、更有智慧的人，拥有真正的宁静。'
  },
  {
    t:'yinyang',
    r:'你是一个善于观察、有逻辑、有条理的人。在工作中你似乎有些强迫症状，而这正是你巨大才华的源头。你喜欢一切工作都井井有条并且圆满完成。你觉得有必要改善你周围的一切。当别人的工作不符合你的期望时，你可能会非常生气。你需要尝试放松自己，比如周末出去散散心看看天空，或者只是听一首喜欢的歌。与世界和平相处会对你的情绪有很大的帮助，也能改善你与他人的关系。'
  },
  {
    t:'zisediwang',
    r:'你自认诚实，友善，是爱心小天使。你很善于换位思考，经常牺牲自己来满足他人的需要。虽然你在帮助别人的时候会得到很大的满足感，但有时也会觉得很累。要记住，爱别人的前提首先是要学会爱自己。这会让你的生活更加幸福，也能给你更多成就感与满足感。'
  },
  {
    t:'heimaijinban',
    r:'你想要自由和快乐，想要刺激的生活经历。你害怕无聊和单调，有多种多样的兴趣爱好。你需要学会管理自己的时间与精力。你学会使用时间表，强迫自己有条理地进行学习与工作，你将会更加充实、满足和快乐。'
  },
  {
    t:'meiguishuijing',
    r:'你总是温柔如水的样子，是那么善解人意，富有同情心，总是忧愁着别人的忧愁，说你矫情也好，做作也罢，其实你的脑子里根本没有想那么多，只是单纯的想要每个人过得更好。'
  },
  {
    t:'baoban',
    r:'你热情开朗，大方，不拘小节。有领导能力，具有激励人心的气质。组织力强，热情开朗、对人慷慨大方。心胸宽大，懂得宽怒。    　　一言九鼎有信用。乐观，不多疑，诚恳正直。'
  },
  {
    t:'xueyixia',
    r:'你最大的特点是创新，追求独一无二的生活，个人主义色彩很浓重。对人友善又注重隐私。绝对算得上是“友谊之星”。'
  },
  {
    t:'maotouying',
    r:'你是所有蝴蝶中最有耐心，行事最小心、也是最善良的蝴蝶。做事脚踏实地，也比较固执，不达目的是不会放手的。他们的忍耐力也是出奇的强大，同时也非常勤奋。他们心中总是背负着很多的责任感，但往往又很没有安全感，不会完全地相信别人。'
  }
]