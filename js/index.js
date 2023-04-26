//1.追赶图
(function () {
    var myChart = echarts.init(document.querySelector(".zhuigan .cchart"));
    const updateFrequency = 1000;
    const dimension = 0;
    const countryColors = {
      Australia: "#00008b",
      Brazil: "#f00",
      Canada: "#ffde00",
      China: "#002a8f",
      France: "#003580",
      Germany: "#ed2939",
      India: "#ed2939",
      SouthAfrica: "#003897",
      Spain: "#f93",
      Sweden: "#bc002d",
      UnitedKingdom: "#024fa2",
      UnitedStates: "#024fa2",
    };
    const chineseCountryList = {
      Australia: "澳大利亚",
      Brazil: "巴西",
      Canada: "加拿大",
      China: "中国",
      France: "法国",
      Germany: "德国",
      India: "印度",
      SouthAfrica: "南非",
      Spain: "西班牙",
      Sweden: "瑞士",
      UnitedKingdom: "英国",
      UnitedStates: "美国",
    };
    //读取json
    $.when(
      $.getJSON("./data/data.json"),
      $.getJSON("./data/life-expectancy-table.json")
    ).done(function (res0, res1) {
      // 年份
      let yearList = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015, 2016, 2017, 2018, 2019, 2020, 2021];
  
      //国家
      let CountryList = [
        "Australia",
        "Brazil",
        "Canada",
        "China",
        "France",
        "Germany",
        "India",
        "SouthAfrica",
        "Spain",
        "Sweden",
        "UnitedKingdom",
        "UnitedStates",
      ];
      //数据集
      let dataList = [
        [
          2.783,2.811,2.851,2.891,2.941,3.051,3.12,3.2,3.34,3.43,3.5,3.57,3.62,3.69,3.83,3.86,
          3.92,4,4.04,4.07,4.05,4.04,4.06,3.98,3.94,4.02,4.11,4.14,4.16,4.16,4,3.91
        ],
        [
          2.191,2.29,2.34,2.44,2.54,2.69,2.89,3.07,3.17,3.27,3.4,3.46,3.48,3.45,3.61,
          3.64,3.69,3.91,4.13,3.9,4.4,4.63,	4.98,	5.32,	5.58,	5.29,	4.93,	4.97,	4.77,	4.75	,4.42,	4.89

        ],
        [
          4.583 	 ,4.50 	 ,4.64 	 ,4.64 	 ,4.79 	 ,4.91 	 ,5.08 	 ,5.22 	 ,5.30 	 ,5.44 	 ,5.67 
           ,5.59 	 ,5.64 	 ,5.81 	 ,5.80 	 ,5.75 	 ,5.68 	 ,5.94 	 ,5.77 	 ,5.44 	 ,5.57 	
            ,5.67 	 ,5.68 	 ,5.73 	 ,5.70 	 ,5.74 	 ,5.61 	 ,5.72 	 ,5.84 	 ,5.85 	 ,5.35 	 ,5.46 

        ],
        [
          24.851 	 ,26.06 	 ,27.31 	 ,29.22 	 ,31.00 	 ,33.58 	 ,35.03 	 ,35.10 	 ,33.60 	 ,35.53 	 ,36.44 	 ,37.24 
          	 ,41.12 	 ,48.27 	 ,52.24 	 ,58.77 	 ,64.89 	 ,69.79 	 ,74.97 	 ,78.87 	 ,86.17 	 ,95.29 	 ,97.79 	 ,99.56 
             	 ,99.99 	 ,98.67 	 ,97.65 	 ,100.11 	 ,103.54 	 ,107.41 	 ,109.56 	 ,114.72 

        ],
        [
          3.93 	 ,4.18 	 ,4.07 	 ,3.88 	 ,3.82 	 ,3.86 	 ,4.01 	
           ,3.94 	 ,4.14 	 ,4.12 	 ,4.07 	 ,4.12 	 ,4.08 	 ,4.13 	 ,4.14 	 ,
           4.16 	 ,4.06 	 ,3.97 	 ,3.91 	 ,3.71 	 ,3.77 	 ,3.55 	 ,3.57 	 ,3.59 	 ,
           3.27 	 ,3.32 	 ,3.34 	 ,3.37 	 ,3.23 	 ,3.16 	 ,2.80 	 ,3.06 

        ],
        [
          10.52 	 ,10.14 	 ,9.66 	 ,9.56 	 ,9.39 	 ,9.39 	 ,9.59 	 ,9.31 	 ,9.23 	 ,8.95 	 ,8.99 	 ,9.16 	 ,8.99 	 ,9.01 	 ,8.87 	 ,8.66 	 ,8.78 	 ,8.51 	 ,8.55 	 ,7.90 	 ,8.33 	 ,8.09 	 ,8.14 	 ,8.31 	 ,7.92 	 ,7.96 	 ,8.00 	 ,7.86 	 ,7.54 	 ,7.07 	 ,6.39 	 ,6.75 

        ],
        [
          5.78 	 ,6.15 	 ,6.55 	 ,6.77 	 ,7.16 	 ,7.61 	 ,8.25 	 ,8.59 	 ,8.77 	 ,9.51 	 ,9.78 	 ,9.92 	 ,10.22 	 ,10.59 	 ,11.25 	 ,11.85 	 ,12.59 	 ,13.57 	 ,14.62 	 ,16.11 	 ,16.76 	 ,17.78 	 ,19.63 	 ,20.37 	 ,21.87 	 ,22.71 	 ,23.84 	 ,24.35 	 ,26.00 	 ,26.26 	 ,24.45 	 ,27.10 

        ],
        [
          3.13 	 ,3.26 	 ,3.01 	 ,3.20 	 ,3.39 	 ,3.62 	 ,3.64 	 ,3.85 	 ,3.77 	 ,3.75 	 ,3.78 	 ,3.71 	 ,3.56 	 ,4.04 	 ,4.49 	 ,4.16 	 ,4.47 	 ,4.65 	 ,4.95 	 ,4.80 	 ,4.63 	 ,4.66 	 ,4.59 	 ,4.59 	 ,4.72 	 ,4.46 	 ,4.57 	 ,4.39 	 ,4.35 	 ,4.67 	 ,4.36 	 ,4.36 

        ],
        [
          2.31 	 ,2.41 	 ,2.50 	 ,2.41 	 ,2.54 	 ,2.68 	 ,2.55 	 ,2.68 	 ,2.76 	 ,3.00 	 ,3.12 	 ,3.14 	 ,3.34 	 ,3.38 	 ,3.55 	 ,3.70 	 ,3.61 	 ,3.69 	 ,3.37 	 ,2.98 	 ,2.84 	 ,2.85 	 ,2.79 	 ,2.53 	 ,2.55 	 ,2.72 	 ,2.61 	 ,2.75 	 ,2.70 	 ,2.52 	 ,2.13 	 ,2.34 

        ],
        [ 0.58 	 ,0.58 	 ,0.58 	 ,0.58 	 ,0.60 	 ,0.60 	 ,0.64 	 ,0.58 	 ,0.59 	 ,0.56 	 ,0.55 	 ,0.56 	 ,0.57 	 ,0.57 	 ,0.57 	 ,0.54 	 ,0.54 	 ,0.53 	 ,0.51 	 ,0.47 	 ,0.53 	 ,0.49 	 ,0.47 	 ,0.45 	 ,0.43 	 ,0.44 	 ,0.43 	 ,0.43 	 ,0.42 	 ,0.41 	 ,0.37 	 ,0.36 
        ],
        [
          6.02 	 ,6.09 	 ,5.94 	 ,5.80 	 ,5.74 	 ,5.66 	 ,5.87 	 ,5.63 	 ,5.69 	 ,5.62 	 ,5.69 	 ,5.78 	 ,5.60 	 ,5.72 	 ,5.73 	 ,5.70 	 ,5.68 	 ,5.60 	 ,5.45 	 ,4.94 	 ,5.12 	 ,4.70 	 ,4.87 	 ,4.78 	 ,4.39 	 ,4.22 	 ,3.99 	 ,3.87 	 ,3.80 	 ,3.65 	 ,3.26 	 ,3.47 

        ],
        [
          51.22 	 ,50.65 	 ,51.75 	 ,52.74 	 ,53.66 	 ,54.28 	 ,56.16 	 ,56.92 	 ,57.37 	 ,58.10 	 ,60.16 	 ,59.12 	 ,59.53 	 ,60.16 	 ,61.18 	 ,61.38 	 ,60.57 	 ,61.35 	 ,59.19 	 ,54.83 	 ,56.81 	 ,55.47 	 ,53.45 	 ,54.81 	 ,55.29 	 ,53.77 	 ,52.52 	 ,52.11 	 ,53.77 	 ,52.59 	 ,47.16 	 ,50.07 

        ]
      ];
      const flags = res0[0];
      //获得该国的国旗
      function getFlag(countryName) {
        if (!countryName) {
          return "";
        }
        return (
          flags.find(function (item) {
            return item.name === countryName;
          }) || {}
        ).emoji;
      }
  
      let data = [];
      for (let j = 0; j < dataList.length; j++) {
        data.push(dataList[j][0]);
      }
      console.log(data);
      // 配置信息
      option = {
        grid: {
          left: 65,
          right: 90,
          top: 20,
          bottom: 70
        },
        xAxis: {
          type: "value",
          max: "dataMax",
          name: "排量（亿吨）",
          splitNumber: 3,
          axisLabel: {
            interval: 0,
            rotate: 40, //值>0向右倾斜，值<0则向左倾斜
          },
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: CountryList,
          max: 11,
          // 左侧标签设置
          axisLabel: {
            show: true,
            fontSize: 10,
            // formatter: function (param) {
            //   return chineseCountryList[param];
            // },
            formatter: function (value) {
              return chineseCountryList[value] + "{" + value + "|}";
            },
            rich: {
              Australia: {
                backgroundColor: { image: "./images/flagIcon/au.svg" },
              },
              Brazil: { backgroundColor: { image: "./images/flagIcon/br.svg" } },
              Canada: { backgroundColor: { image: "./images/flagIcon/ca.svg" } },
              China: { backgroundColor: { image: "./images/flagIcon/cn.svg" } },
              France: { backgroundColor: { image: "./images/flagIcon/fr.svg" } },
              Germany: { backgroundColor: { image: "./images/flagIcon/de.svg" } },
              India: { backgroundColor: { image: "./images/flagIcon/in.svg" } },
              SouthAfrica: {
                backgroundColor: { image: "./images/flagIcon/za.svg" },
              },
              Spain: { backgroundColor: { image: "./images/flagIcon/es.svg" } },
              Sweden: { backgroundColor: { image: "./images/flagIcon/se.svg" } },
              UnitedKingdom: {
                backgroundColor: { image: "./images/flagIcon/gb.svg" },
              },
              UnitedStates: {
                backgroundColor: { image: "./images/flagIcon/us.svg" },
              },
            },
          },
          // 动画设置
          animationDuration:150,
          animationDurationUpdate: 200,
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: "column",
            type: "bar",
            data: data,
            itemStyle: {
              color: function (param) {
                return countryColors[param.name] || "#5470c6";
              },
            },
            encode: {
              x: dimension,
              y: 3,
            },
            label: {
              show: true,
              precision: 1,
              position: "right",
              valueAnimation: true,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
            },
          },
        ],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
        graphic: {
          elements: [
            {
              type: "text",
              right: 40,
              bottom: 10,
              // 年份
              style: {
                text: yearList[0],
                font: "bolder 80px monospace",
                fill: "rgba(100, 100, 100, 0.5)",
              },
              z: 100,
            },
          ],
        },
      };
      //初始化dom
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
      let startIndex = 0;
      for (let i = startIndex; i < yearList.length; ++i) {
        (function (i) {
          setTimeout(function () {
            updateYear(i);
          }, (i - startIndex) * updateFrequency);
        })(i);
      }
      // 更新每年的数据
      function updateYear(i) {
        let source = [];
        for (let j = 0; j < dataList.length; j++) {
          source.push(dataList[j][i]);
        }
        option.series[0].data= source;
        option.graphic.elements[0].style.text = yearList[i];
        myChart.setOption(option);
      }
    });
  })();

//2.折线图
(function(){
    var myChart= echarts.init(document.querySelector('.temp .zhexian'));
    option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          var result = params[0].name +"年"+ "<br>";
          params.forEach(function (item) {
              if (item.value) {
                  result += item.marker +" " + item.seriesName + " : " + item.value + "℃</br>";
              } else {
                  result += item.marker +" " + item.seriesName + " :  - </br>";
              }
          });
          return result;
        },
        textStyle:{
          fontWeight: 550,
          textShadowColor: 'transparent'
       }
      },
      legend: {
        data: ['长期平均温度', '平均水平', '短期平均温度'],
        textStyle:{
          //color:'#4c9bfd'
          color:'#FFFAFA'
        },
        left:'0%',
        top:"-1%"
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top:'12%',
        containLabel: true
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1970', '1971', '1972', '1973', '1974', '1975', 
        '1976','1977','1978','1979','1980','1981','1982','1983','1984',
        '1985','1986','1987','1988','1989','1990','1991','1992','1993',
        '1994','1995','1996','1997','1998','1999','2000','2001','2002',
        '2003','2004','2005','2006','2007','2008','2009','2010','2011',
        '2012','2013','2014','2015','2016','2017','2018','2019','2020',
        '2021','2022'
      ]
      },
      yAxis: {
        type: 'value',
        axisLabel: {formatter: '{value}℃'}
      },
      series: [
        {
          name: '长期平均温度',
          type: 'line',
          //stack: 'Total',
          color:'rgb(232, 121, 116)',
          // color:'rgb(237, 63, 53)',
          data: [-0.04,-0.17,
            -0.06,0.09,-0.14,-0.07,-0.18,0.15,
            0.05,0.12,0.23,0.29,0.07,0.26,0.08,
            0.08,0.13,0.27,0.32,0.21,0.40,0.37,
            0.16,0.20,0.27,0.41,0.31,0.45,0.61,
            0.36,0.36,0.52,0.57,0.58,0.50,0.64,
            0.60,0.62,0.50,0.63,0.71,0.57,0.61,
            0.66,0.71,0.86,0.96,0.88,0.79,0.93,
            0.96,0.80,0.84]
        },
        {
          name: '平均水平',
          type: 'line',
          //stack: 'Total',
          // color: 'rgb(204, 168, 114)',
          color:'rgb(133, 184, 27)',
          data: [-0.09,-0.21,-0.09,0.05,
            -0.17,-0.11,-0.22,0.10,0.01,0.09,0.20,
            0.25,0.03,0.22,0.05,0.05,0.10,0.24,
            0.28,0.18,0.36,0.34,0.12,0.17,0.23,
            0.38,0.28,0.42,0.58,0.32,0.33,0.49,
            0.54,0.54,0.47,0.61,0.57,0.59,0.47,
            0.60,0.68,0.54,0.58,0.62,0.67,0.83,
            0.93,0.85,0.76,0.89,0.92,0.76,0.80
            ]
        },
        {
          name: '短期平均温度',
          type: 'line',
          // color: 'skyblue',
          color:'rgb(0, 135, 211)',
          // color:'rgb(0, 218, 237)',
          data: [-0.13,-0.24,
            -0.13,0.01,-0.21,-0.15,-0.26,0.06,
            -0.03,0.06,0.16,0.22,-0.01,0.19,
            0.01,0.02,0.06,0.21,0.25,0.14,0.32,
            0.30,0.09,0.13,0.20,0.34,0.24,0.39,
            0.54,0.29,0.30,0.46,0.51,0.51,0.43,
            0.58,0.54,0.56,0.43,0.57,0.65,0.51,
            0.54,0.59,0.64,0.79,0.90,0.81,0.73,
            0.86,0.89,0.73,0.77
            ]
        }
      ],
      dataZoom: [
        {
          type: "slider",
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: 49,
          bottom: 1,
          textStyle:{
            color:"rgb(204,215,215,0.25)"
          }
        },
      ]
    };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();

//4.滚动字幕
(function () {
  var box = document.querySelector(".jianjie");
  var l1 = document.querySelector(".content");
  var l2 = document.querySelector(".fakecontent");
  l2.innerHTML = l1.innerHTML; //克隆list1的数据，使得list2和list1的数据一样
  function scrollup() {
    if (box.scrollTop >= l1.offsetHeight) {
      //滚动条距离顶部的值恰好等于list1的高度时，达到滚动临界点，此时将让scrollTop=0,让list1回到初始位置，实现无缝滚动
      box.scrollTop = 0;
    } else {
      box.scrollTop++;
    }
  }
  var scrollMove = setInterval(scrollup, 30); //数值越大，滚动速度越慢
  //鼠标经过时，滚动停止
  box.onmouseover = function () {
    clearInterval(scrollMove);
  };
  //鼠标离开时，滚动继续
  box.onmouseout = function () {
    scrollMove = setInterval(scrollup, 30);
  };
})();
//5.词云图
(function () {
  var myChart= echarts.init(document.querySelector('.zymc .mingci'));
  //跳转代码
myChart.on('click', function(params) {
  console.log(params.name);
  window.open(params.data.url);
  // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
});

var colorList = [[
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
  '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
  ],
  [
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
  '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
  ],
  [
  '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
  '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
  '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
  '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
  ]][2];

option = {
  // 图表标题
  title: {
      show:false,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
      x: 'left',        // 水平安放位置，默认为左对齐，可选为：
                        // 'center' ¦ 'left' ¦ 'right'
                        // ¦ {number}（x坐标，单位px）
      y: 'top',             // 垂直安放位置，默认为全图顶端，可选为：
                        // 'top' ¦ 'bottom' ¦ 'center'
                        // ¦ {number}（y坐标，单位px）
      //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
      backgroundColor: 'transparent',
      borderColor: '#ccc',    // 标题边框颜色
      borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
      padding: 1,             // 标题内边距，单位px，默认各方向内边距为5，
                              // 接受数组分别设定上右下左边距，同css
      itemGap: 1,            // 主副标题纵向间隔，单位px，默认为10，
      textStyle: {
          fontSize: 15,
          fontWeight: 'bolder',
          color: '#333'        // 主标题文字颜色
      },
      subtextStyle: {
          color: '#aaa'        // 副标题文字颜色
      }
  },
  backgroundColor: 'transparent',
  tooltip: {},
  animationDurationUpdate: function(idx) {
      // 越往后的数据延迟越大
      return idx * 100;
  },
  animationEasingUpdate: 'bounceIn',
  color: ['#fff', '#fff', '#fff'],
  series: [{
      type: 'graph',
      layout: 'force',
      force: {
          repulsion: 100,
          edgeLength: 10
      },//改默认出现几个圆
      roam: true,
      label: {
          normal: {
              show: true
          }
      },
      textStyle:{
        color:'#fff'
      },
      data: [{
          "name": "碳排放",
          "value": 651,
          "symbolSize": 54,
          "draggable": true,
          "itemStyle": { "normal": { "shadowBlur": 100, "shadowColor": colorList[0], "color":colorList[0] } }, 
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
        "url":'https://baike.baidu.com/item/%E6%B8%A9%E5%AE%A4%E6%B0%94%E4%BD%93%E6%8E%92%E6%94%BE?fromtitle=%E7%A2%B3%E6%8E%92%E6%94%BE&fromid=3994758&fromModule=lemma_search-box' },
       {
          "name": "碳排放交易",
          "value": 257,
          "symbolSize": 21.3,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[1],
                  "color": colorList[1]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":"https://baike.baidu.com/item/%E7%A2%B3%E6%8E%92%E6%94%BE%E4%BA%A4%E6%98%93?fromModule=lemma_search-box"
      }, {
          "name": "碳交易",
          "value": 617,
          "symbolSize": 51,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[2],
                  "color": colorList[2]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E4%BA%A4%E6%98%93?fromModule=lemma_search-box'
      }, {
          "name": "碳中和",
          "value": 2136,
          "symbolSize": 157,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[3],
                  "color": colorList[3]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E4%B8%AD%E5%92%8C/1019566?fromModule=lemma-qiyi_sense-lemma'
      }, {
          "name": "碳达峰",
          "value": 1336,
          "symbolSize": 111,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[4],
                  "color": colorList[4]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E8%BE%BE%E5%B3%B0?fromModule=lemma_search-box'
      }, {
          "name": "碳汇",
          "value": 766,
          "symbolSize": 63.3,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[5],
                  "color": colorList[5]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E6%B1%87?fromModule=lemma_search-box'
      }, {
          "name": "气候变化",
          "value": 926,
          "symbolSize": 27.9,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[6],
                  "color": colorList[6]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":"https://baike.baidu.com/item/%E6%B0%94%E5%80%99%E5%8F%98%E5%8C%96/22377?fromModule=lemma_search-box"
      }, {
          "name": "巴黎协定",
          "value": 517,
          "symbolSize": 42.9,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[7],
                  "color": colorList[7]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E5%B7%B4%E9%BB%8E%E5%8D%8F%E5%AE%9A/19138374?fromModule=lemma_search-box'
      }, {
          "name": "温室效应",
          "value": 902,
          "symbolSize": 75,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[8],
                  "color": colorList[8]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":"https://baike.baidu.com/item/%E6%B8%A9%E5%AE%A4%E6%95%88%E5%BA%94/138447?fromModule=lemma_search-box"
      }, {
          "name": "全球变暖",
          "value": 664,
          "symbolSize":54.9,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[9],
                  "color": colorList[9]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E5%85%A8%E7%90%83%E6%B0%94%E5%80%99%E5%8F%98%E6%9A%96/1034504?fromModule=lemma_search-box&fromtitle=%E5%85%A8%E7%90%83%E5%8F%98%E6%9A%96&fromid=2647011'
      }, {
          "name": "低碳建筑",
          "value": 137,
          "symbolSize": 11.4,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[10],
                  "color": colorList[10]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E4%BD%8E%E7%A2%B3%E5%BB%BA%E7%AD%91/3811746?fromModule=lemma-qiyi_sense-lemma'
      }, {
          "name": "CCER",
          "value": 670,
          "symbolSize": 55.5,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[11],
                  "color": colorList[11]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/ccer/60709993?fromModule=lemma-qiyi_sense-lemma'
      }, {
          "name": "碳排放量",
          "value": 159,
          "symbolSize": 13.2,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[12],
                  "color": colorList[12]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E6%8E%92%E6%94%BE%E9%87%8F?fromModule=lemma_search-box'
      }, {
          "name": "双碳",
          "value": 1438,
          "symbolSize":120,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[13],
                  "color": colorList[13]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E5%8F%8C%E7%A2%B3/57996712?fromModule=lemma-qiyi_sense-lemma'
      }, {
          "name": "新能源规划",
          "value": 35,
          "symbolSize":3,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[14],
                  "color": colorList[14]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E6%96%B0%E8%83%BD%E6%BA%90%E8%A7%84%E5%88%92?fromModule=lemma_search-box'
      }, {
          "name": "碳排放计算器",
          "value": 96,
          "symbolSize":7.95,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[15],
                  "color": colorList[15]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E8%AE%A1%E7%AE%97%E5%99%A8/8085943?fromModule=search-result_lemma-recommend'
      }, {
          "name": "碳排放管理师",
          "value": 516,
          "symbolSize": 42.9,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[16],
                  "color": colorList[16]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%A2%B3%E6%8E%92%E6%94%BE%E7%AE%A1%E7%90%86%E5%B8%88?fromModule=lemma_search-box'
      }, {
          "name": "可再生能源",
          "value": 568,
          "symbolSize": 48,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[17],
                  "color": colorList[17]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E5%86%8D%E7%94%9F%E8%83%BD%E6%BA%90/5898604?fromModule=lemma_search-box&fromtitle=%E5%8F%AF%E5%86%8D%E7%94%9F%E8%83%BD%E6%BA%90&fromid=32545'
      }, {
          "name": "气候大会",
          "value": 100,
          "symbolSize": 8.28,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[18],
                  "color": colorList[18]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url":'https://baike.baidu.com/item/%E7%AC%AC21%E5%B1%8A%E8%81%94%E5%90%88%E5%9B%BD%E6%B0%94%E5%80%99%E5%8F%98%E5%8C%96%E5%A4%A7%E4%BC%9A/18862811?fromModule=search-result_lemma-recommend'
      }, {
          "name": "工业废气",
          "value": 137,
          "symbolSize": 11.37,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[19],
                  "color": colorList[19]
              }
          },
          "label": { "normal": { "textStyle": { "color": "#fff" } } },
          "url": "https://baike.baidu.com/item/%E5%B7%A5%E4%B8%9A%E5%BA%9F%E6%B0%94?fromModule=lemma_search-box"
      }]
  }]
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

    


