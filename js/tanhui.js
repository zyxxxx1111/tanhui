(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .hezi'));
    option = {
       backgroundColor: 'transparent',
       color: ['#6DDEBD','#D27CBD', '#5470C7', '#D4AC31', '#91CC75',
               '#FAC858','#EE6666','#F5A8F6','#FA9898','#73C0DE',
               '#3BA272','#FC8452','#A164BC'],
       // color: ['#6DDEBD','#cd4692', '#9658c3', '#6c6be2', '#01aebf', '#18b794'],
       tooltip: {
         trigger: 'item',
         textStyle: {
          color: '#fff',
          fontSize: 16
      },
      backgroundColor: 'rgba(16, 32, 40, 0.88)',
      borderRadius: 4,
      borderColor: '#20749e',
          formatter: function (params) {
            return params.name+'<br/>'+'单位面积碳储量：'+params.value+'(t·hm-2)'+'<br/>'+'保存率：'+params.data.ttt+'%'
          },
        // formatter: "{a} <br/>{b} : {c}t·hm-2<br/>保存率:{e}",
       },
        grid: {
         left: '5%',
         right: '2%',
         bottom: '-10%',
         top: '5%',
         height: '70%',
         // containLabel: true
       },
       legend: {
         data: ['马尾松',
            '台湾罗汉松',
            '小叶竹柏',
            '长叶竹柏',
            '乐昌含笑',
           '火力楠',
           '山桂花',
            "灰木莲",
            '紫玉兰',
            "阴香",
            "黄樟",
           "红锥",
            "黎蒴",
            "白栎",
            '枫香',
            '米老排',
            '红花荷',
            '木荷',
            '红荷',
           '五月茶',
           '山乌桕',
            "秋枫",
           '降香黄檀',
            "海南红豆",
            "大叶相思",
            "厚荚相思",
            "海红豆",
            "格木",
           "尖叶杜英",
            "中华杜英",
            "山杜英",
            "锡兰橄榄",
            "绢毛杜英",
            "南酸枣",
            "楝叶吴茱萸",
            "小叶榄仁",
            "莫氏榄仁",
           "油榄仁",
            "水蒲桃",
            "海南蒲桃",
           "西南桦",
            "海芒果",
            "青皮",
            "石梓",
           "银桦",
         "翻白叶树",
          "鸭脚木",
           "大花五桠果",
            "杨梅",
            "红花玉蕊",
           "大叶紫薇",
            "海南菜豆树"
            ],
         orient: 'vertical',
         right: '2%',
         top: '0%',
         itemWidth: 15,
         itemHeight: 10,
         itemGap:5,
         textStyle: {
           color: '#',
           fontSize: 16
         }
       },
       series: [
         {
           name: '单位面积碳储量以及保存率',
           type: 'pie',
           clockwise: true, //时针方向
           startAngle: 110, //线文字间距
           radius: '80%', //外圈圆，两个就有内圈圆
           center: ['40%', '50%'],
           //  hoverAnimation: false,
           data: [
             {
               value: 110.34,
               name: '马尾松',
               ttt:'95'
             },
             {
               value: 7.27,
               name: '台湾罗汉松',
               ttt:'65'
             },
             {
               value: 20.32,
               name: '小叶竹柏',
               ttt:'90'
             },
             {
               value: 20.5,
               name: '长叶竹柏',
               ttt:'90'
             },
             {
               value: 84.69,
               name: '乐昌含笑',
               ttt:'80'
             },
             {
               value: 31.33,
               name: '火力楠',
               ttt:'80'
             },
             {
               value: 84.77,
               name: '山桂花',
               ttt:'80'
             },
             {
               value: 106.78,
               name: '灰木莲',
               ttt:'90'
             },
             {
               value: 7.44,
               name: '紫玉兰',
               ttt:'55'
             },
             {
               value: 71.25,
               name: '阴香',
               ttt:'90'
             },
             {
               value: 54.14,
               name: '黄樟',
               ttt:'85'
             },
             {
               value: 93.97,
               name: '红锥',
               ttt:'90'
             },
             {
               value: 117.79,
               name: '黎蒴',
               ttt:'98'
             },
             {
                value: 71.4,
                name: '白栎',
                ttt:'96'
              },
              {
                value: 37.98,
                name: '枫香',
                ttt:'95'
              },
              {
                value: 58.19,
                name: '米老排',
                ttt:'80'
              },
              {
                value: 29.24,
                name: '红花荷',
                ttt:'65'
              },
              {
                value: 52.75,
                name: '木荷',
                ttt:'95'
              },
              {
                value: 102.04,
                name: '红荷',
                ttt:'95'
              },
              {
                value: 25.74,
                name: '五月茶',
                ttt:'95'
              },
              {
                value: 64.67,
                name: '山乌桕',
                ttt:'97'
              },
              {
                value: 8.75,
                name: '秋枫',
                ttt:'30'
              },
              {
                value: 26.04,
                name: '降香黄檀',
                ttt:'95'
              },
              {
                value: 52.55,
                name: '海南红豆',
                ttt:'70'
              },
              {
                value: 122.98,
                name: '大叶相思',
                ttt:'98'
              },
              {
                value: 145.75,
                name: '厚荚相思',
                ttt:'95'
              },
              {
                value: 37.81,
                name: '海红豆',
                ttt:'90'
              },
              {
                value: 34.45,
                name: '格木',
                ttt:'98'
              },
              {
                value: 56.26,
                name: '尖叶杜英',
                ttt:'92'
              },
              {
                value: 21.83,
                name: '中华杜英',
                ttt:'60'
              },
              {
                value: 78.07,
                name: '山杜英',
                ttt:'90'
              },
              {
                value: 67.41,
                name: '锡兰橄榄',
                ttt:'92'
              },{
                value: 73.64,
                name: '绢毛杜英',
                ttt:'95'
              },{
                value:121.69,
                name: '南酸枣',
                ttt:'95'
              },{
                value: 62.85,
                name: '楝叶吴茱萸',
                ttt:'80'
              },{
                value: 33.76,
                name: '小叶榄仁',
                ttt:'95'
              },{
                value: 31.55,
                name: '莫氏榄仁',
                ttt:'85'
              },{
                value: 29.92,
                name: '油榄仁',
                ttt:'85'
              },{
                value: 49.56,
                name: '水蒲桃',
                ttt:'80'
              },{
                value: 43.8,
                name: '海南蒲桃',
                ttt:'98'
              },
              {
                value: 65.9,
                name: '西南桦',
                ttt:'70'
              },{
                value: 41.93,
                name: '海芒果',
                ttt:'75'
              },{
                value: 33.6,
                name: '青皮',
                ttt:'85'
              },{
                value: 88.08,
                name: '石梓',
                ttt:'80'
              },{
                value: 38.77,
                name: '银桦',
                ttt:'85'
              },{
                value: 72.29,
                name: '翻白叶树',
                ttt:'98'
              },
              {
                value: 17.91,
                name: '鸭脚木',
                ttt:'35'
              },{
                value: 29.8,
                name: '大花五桠果',
                ttt:'60'
              },{
                value: 40.25,
                name: '杨梅',
                ttt:'80'
              },{
                value: 41.47,
                name: '红花玉蕊',
                ttt:'90'
              },{
                value: 63.99,
                name: '大叶紫薇',
                ttt:'92'
              },
              {
                value: 40.4,
                name: '海南菜豆树',
                ttt:'75'
              }
           ],
           label: {
             show: true,
             position: 'outside', //标签的位置
             formatter: '{a|{b}：({c})}\n{hr|}',
            // formatter: '{b}',
             textStyle:{
                color:'rgb(255,250,250)'
             },
             rich: {
               //可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果
               // hr: {
               //     backgroundColor: 't',
               //     borderRadius: 100,
               //     width: 0,
               //     height: 10,
               //     padding: [3, 3, 0, -16],
               //     shadowColor: '#1c1b3a',
               //     shadowBlur: 1,
               //     shadowOffsetX: '0',
               //     shadowOffsetY: '2',
               // },
               a: {
                 // color:'#1AC9A2',
                 // lineHeight: 10
                 //  padding: [-35, 15, -20, 5],
               }
             }
           },
           labelLine: {
             normal: {
               length: 10,
               length2: 35,
               lineStyle: {
                 width: 1
               }
             }
           }
         }
       ]
     }
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    });  
  })();
document.querySelector(".caida").addEventListener("click", function () {
    // document.querySelector("#ddList").setAttribute("style", "display: block");
    $('#ddList').toggle();
  });
  document.querySelector(".caidan").addEventListener("click", function () {
    // document.querySelector("#ddList").setAttribute("style", "display: block");
    $('#dddList').toggle();
  });
  document.querySelector(".caidann").addEventListener("click", function () {
    // document.querySelector("#ddList").setAttribute("style", "display: block");
    $('#ddddList').toggle();
  });