const subtitle = {
  "环保市场规模": {
    "10": "环保行业的发达对一个国家意味着可持续发展、居民生活质量提高、绿色经济增长与国际形象的提升。环保产业涉及多个领域，",
    "18": "包括环保技术、环保设备、环保服务等，可以为国家带来新的经济增长点和竞争优势。"
  },
  "环保项目类型": {
    "10": "《减污降碳协同增效实施方案》于2022年6月印发实施，强调生态环境分区管控等源头治理，加强工业、交通运输、城乡建设",
    "18": "等重点领域减污降碳落地实施，强化大气、水、土壤、固废等环境污染治理。"
  },
  "主要能源（2021）": {
    "7": "此部分对最新一年的数据进行多次处理整合，利用桑基图呈现主要能源使用结构。"
  },
  "清洁能源": {
    "10": "双柱呈现太阳能发电与风力发电产值变化，折线呈现太阳能电池产值，鼠标悬停，查看该年具体数据。根据《新时代的中国能源发展》白皮书，",
    "20": "我国能源节约和消费结构优化成效显著。党的十八大以来，以能源消费年均2.8%的增长支撑了国民经济年均7%的增长。",
    "30": "2019年单位国内生产总值能耗较2012年下降24.4%，累计节能约",
    "40": "12.7亿吨标准煤。能源消费结构向清洁低碳加快转变，2019年，天然气、水电、核电、风电等清洁能源",
    "54": "占能源消费总量比重达到23.4%，比2012年提高8.9个百分点，提前完成到2020年非化石能源占比达到15%左右的目标。"
  },
  "个人碳系数": {
    "10": "居民消费产生的碳排放主要包括两个方面：一是生活中的能源消费造成的直接碳排放，如驾驶燃油汽车等；",
    "20": "二是生活中消费产品和服务造成的间接碳排放，比如饮用瓶装饮料等。2020年",
    "30":"碳足迹完成的《大型城市居民消费低碳潜力分析》发现，如果在衣食住行等方面实践低碳消费，",
    "39":"个人年均减排潜力超过1吨，十分可观。您可以通过观看动画视频，对项目及其前景进行深入了解。"
  },
  "植物碳汇库": {
    "10": "植物碳汇与实现碳中和密不可分，对比不同植物碳汇，得出性价比最高的树种，以单位碳储量",
    "18": "以及保存率为基础，展示减碳适宜植物。鼠标悬停。可查看该植物每平米的碳收集量。"
  },
  "每一千千卡食品的碳排放量":{
    "10":"在所有肉质食品中，牛肉和牛奶生产是畜牧业碳排放的主要来源，两者的排放量分别占畜牧业排放总量的41％",
    "20":"和20％。对于大众，我们可以定量准备饮食，吃多少准备多少。据联合国粮农组织（FAO）统计，",
    "30":"全球每年食物浪费量约为16亿吨，占到食物生产总量的三分之一。 全球每年因食物浪费和处理",
    "40":"产生二氧化碳当量温室气体排放达35亿吨。与此同时，用植物性食物取代动物性食物不仅可以改善营养、",
    "50":"延长寿命，还可以使温室气体的排放减少高达84%。更有数据表明，吃1千克牛肉等于排放36.5千克",
    "62":"二氧化碳；而吃同等分量的果蔬，二氧化碳排放量仅为该数值的1/9。所以多吃素，少吃肉，不仅有益身体健康，还能减少碳排放量。"

  },
  "全球粮食生产碳排放量":{
    "10":"农业粮食系统的碳/温室气体排放是指农场生产活动（作物和牲畜）、土地利用变化以及生产前和生产后过程产生的排放。",
    "20":"前两部分是农业用地产生的排放，而第三部分是指供应链过程中的排放，包括运输、加工和投入品制造，",
    "30":"以及家庭消费和废物。2021年，联合国粮农组织（(UN FAO) 在COP26气候峰会中发布报告称，过去30年，",
    "40":"全球农业和粮食生产产生的温室气体排放量增加了17%，而在2019年，全球人为排放量为540亿吨",
    "47":"二氧化碳当量，其中170亿吨二氧化碳当量，即31%，来自农粮系统。"

  },
  "食物供应链的碳排放":{
    "10":"此处上方为信息导视图，下方为3D堆叠图展示不同食物的供应链碳排。联合国粮农组织发布的",
    "20":"一项合作研究显现，世界粮食体系占全球人为温室气体排放量的三分之一以上。虽然粮食生产阶段",
    "26":"在温室气体排放量中的所占比重有所下降，但粮食分配阶段的排放比重在增加。"
  }
};

const L2DwidgetConfig = {
  model: {
    jsonPath:
      "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
    scale: 1,
  },
  // // "display": { "position": "left", "width": 150, "height": 300, "hOffset": 0, "vOffset": -20 },
  // "display": {
  //     "superSample": 2,
  //     "width": 200,
  //     "height": 400,
  //     "position": "right",
  //     "hOffset": 0,
  //     "vOffset": 0
  // },
  dialog: {
    enable: true,
    hitokoto: false,
    script: {
      //触摸到class='star'对象
      //   "hover .column":
      //     "星星在天上而你在我心里 (*/ω＼*)星星在天上而你在我心里 (*/ω＼*)星星在天上而你在我心里 (*/ω＼*)",
      //触摸到身体
      //   "tap body": "害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
      //触摸到头部
      //   "tap face": "~~",
    },
  },
  // "mobile": { "show": true, "scale": 0.5 },
  // "react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 },
};

const page = location.pathname.split("/").pop().split(".")[0];
console.log(page);
switch (page) {
  case "second":
    L2DwidgetConfig.display = { position: "left", hOffset: 300, vOffset: 40 };
    break;
  case "zhengce":
  case "zhengcee":
    L2DwidgetConfig.display = { position: "left", hOffset:10, vOffset: 380 };
    break;
  case "qiye":
    L2DwidgetConfig.display = { position: "left", hOffset:50, vOffset: 380 };
    break;
  default:
    break;
}

L2Dwidget.init(L2DwidgetConfig);

const L2DwidgetStyle = document.createElement("style");
L2DwidgetStyle.innerHTML = `.live2d-widget-dialog-container {
    height: unset !important;
    z-index: 999;
}
#live2d-widget {
    pointer-events: all !important;
}
.need_speak_dom {
  cursor: pointer;
}`;
document.querySelector("head").appendChild(L2DwidgetStyle);

const globalAudio = new Audio();

globalAudio.addEventListener("error", () => {
  // console.log(error)
  // L2Dwidget.alert(`当前标题对应的音频文件可能不存在，请检查～`);
});

globalAudio.addEventListener("ended", () => {
  // console.log(error)
  // L2Dwidget.alert(`当前标题对应的音频文件可能不存在，请检查～`);
  globalAudio.src = "";
});

globalAudio.addEventListener("timeupdate", () => {
  if (globalAudio.src.split(".").pop() !== "mp3") return;
  const context = decodeURIComponent(
    globalAudio.src.split("/").pop().split(".")[0]
  );
  if (!context) return;
  if (context === '华夏碳绘') return;
  // 获取对应的json文件
  const subtitleInfo = subtitle[context];
  if (!subtitleInfo) {
    L2Dwidget.alert(`当前正在讲解${context}`);
  } else {
    // alert对应秒数范围内的内容
    const currentTime = globalAudio.currentTime;
    let currentMax = Object.keys(subtitleInfo).find((key) => key > currentTime);
    let currentContext = subtitleInfo[currentMax];
    currentContext && L2Dwidget.alert(currentContext);
  }
});

// 每隔一秒判断live2d-widget是否已经挂载
const globalTimer = setInterval(() => {
  if (document.querySelector("#live2d-widget")) {
    clearInterval(globalTimer);
    console.log("live2d-widget已经挂载");
    document.querySelector("#live2d-widget").addEventListener("click", () => {
      if (!globalAudio.src) return;
      console.log(globalAudio.src);
      // 如果音频正在播放，暂停
      if (!globalAudio.paused) {
        globalAudio.pause();
        setTimeout(() => {
          L2Dwidget.alert("讲解暂停啦~");
        }, 200);
      } else {
        globalAudio.play();
      }
    });
  } else {
    console.log("live2d-widget未挂载");
  }
}, 1000);

function onTitleMouseDown(e) {
  if (!e.target) return;
  if (!e.target.innerText && !e.target.dataset.content) return;
  const target = e.target;
  const context = target.dataset.content || target.innerText;
  globalAudio.pause();

  if (!context) return;

  try {
    globalAudio.src = `/audios/${context}.mp3`;
    globalAudio.play();
  } catch (error) {
    L2Dwidget.alert(`${context}.mp3可能不存在，请检查～`);
  }
}

[...document.querySelectorAll(".need_speak_dom")].forEach((dom) => {
  dom.addEventListener("click", onTitleMouseDown);
});

[...document.querySelectorAll("a")].forEach((dom) => {
  dom.addEventListener("click", () => {
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.src = "";
    }
  });
});
