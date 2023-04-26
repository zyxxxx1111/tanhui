//1.折线图
(function(){
    var myChart= echarts.init(document.querySelector('.panel .hangye'));
    option = {
      tooltip: {
        trigger: 'axis',
        position: function (point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], '10%'];
        },
        extraCssText: 'width:4.2rem; height:3.5rem;',
        formatter: function (params) {
          var result = params[0].name +"年"+ "<br>";
          params.forEach(function (item) {
              if (item.value) {
                  result += item.marker +" " + item.seriesName + " : " + item.value + "亿吨</br>";
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
      grid: {
        left: '2%',
        right: '2%',
        bottom: '10%',
        top:'7%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1990','1991','1992','1993',
        '1994','1995','1996','1997','1998','1999','2000','2001','2002',
        '2003','2004','2005','2006','2007','2008','2009','2010','2011',
        '2012','2013','2014','2015','2016','2017','2018','2019' 
      ]
      },
      yAxis: {
        type: 'value',
        axisLabel: {formatter: '{value}亿吨'}
      },
      animation: true,
      animationDuration: 17000,
      series: [
        {
          data: this.data,
          type: "line",
          smooth: true,
          endLabel: {
            show: true
          }
        }
      ],
      series: [
        {
          name: '电和热',
          type: 'line',
          //stack: 'Total',
          color:'#e9bae8',
          data: [85.92,87.32,88.92,89.41,90.37,92.29, 95.83,98.54,100.81,101.32,105.55,108.17,110.04,116.23,120.09,
            123.84,128.77,134.44,134.71,132.57,141.50,147.56,150.55,153.23,152.69,149.93,150.14,153.47,158.03,157.62
            ],
            symbol:'triangle',
            symbolSize:8,
            //lineStyle:{width:0.1}
        },
        {
          name: '运输',
          type: 'line',
          //stack: 'Total',
          color: '#3dc5e7',
          symbol:'diamond',
          symbolSize:8,
          data: [46.10,46.49,47.53,47.94,48.91,50.24,52.32,53.09,54.34,55.95,57.73,58.04,59.54,60.79,63.62,65.02,66.54,68.61,
            68.66,67.26,70.13,71.24,71.80,73.69,74.93,77.25,78.72,80.72,82.07,82.22]
        },
        {
          name: '制造与建筑',
          type: 'line',
          color: '#2aa12d',
          symbol:'circle',
          symbolSize:8,
          data: [39.54,38.76,37.43,36.94,37.11,39.37,38.27,38.53,38.53,36.95,38.74,38.92,38.91,
            40.76,45.07,49.25,51.71,54.44,55.59,55.41,60.82,63.10,63.34,63.63,64.08,63.25,61.40,
            60.83,61.80,62.54]
        },
        {
            name: '建筑物',
            type: 'line',
            //stack: 'Total',
            color:'#feda66',
            symbol:'rectangle',
          symbolSize:8,
            data: [25.97,26.22,25.14,25.73,24.91,25.65,26.33,26.10,24.62,25.32,25.24,25.49,25.48,
              26.33,26.74,26.74,26.42,26.40,27.05,26.54,27.08,26.55,25.99,27.12,26.59,26.92,27.32,
              27.96,28.33, 27.94]
          },
          {
            name: '工业',
            type: 'line',
            //stack: 'Total',
            color: '#8bc77b',
            symbol:'diamond',
          symbolSize:8,
            data: [4.99,5.13,5.34,5.56,5.93,6.27,6.39,6.59,6.55,6.85,7.18,7.48,7.89,8.48,9.07,
              9.60,10.48,11.23,11.39,11.71,12.48,13.43,13.78,14.39,14.94,14.37,14.79,15.01,
              15.67,16.09]
          },
          {
            name: '土地利用的变化和林业',
            type: 'line',
            color: '#e492d0',
          symbol:'circle',
          symbolSize:4,
            data: [16.68,16.68,16.68,16.68,16.69,16.74,15.21,22.11,16.55,15.58,15.06,12.28,16.02,13.31,16.05,14.00,16.95,12.70,
              12.62,15.65,12.76,2.01,2.11,1.94,4.60,4.83,10.80,10.46,11.93,3.61]
          },
          {
            name: '其它燃料燃烧',
            type: 'line',
            //stack: 'Total',
            color: '#98c0fd',
            symbol:'triangle',
            symbolSize:4,
            data: [7.58,.59,6.75,6.89,6.61,6.12,5.41,5.88,5.62,5.73,5.14,5.26,5.27,5.45,5.79,
              6.00,6.09,6.12,6.18,6.07,6.22,6.08,6.31,6.38,6.33,6.27,6.27,6.26,6.14,5.89]
          },
          {
            name: '逸散性排放',
            type: 'line',
            color: '#fb7f10',
            symbol:'rectangle',
            symbolSize:4,
            data: [2.65,2.80,2.69,2.76,2.83,2.96,3.15,3.12,3.03,2.95,3.14,3.04,2.88,3.24,3.08,3.25,3.06,
              2.92,2.78,2.82,2.62,2.67,2.69,2.64,2.73,2.77,2.80,2.65,2.73,2.83]
          }   
      ],
      dataZoom: [
        {
          type: "slider",
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: 35,
          bottom: 1,
          textStyle:{
            color:"rgb(204,215,215,0.25)"
          }
        }
      ]
    };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//2.雷达图
(function(){
    var myChart= echarts.init(document.querySelector('.renjun .huafen'));
    var option = {
        legend: {
          data: '人均二氧化碳排放'
        },
      //   tooltip: {
      //     position: function (point, params, dom, rect, size) {
      //         // 固定在顶部
      //         return [point[0], '10%'];}
      // },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '土地利用的变化和林业', max: 1},
            { name: '电和热', max: 2.04},
            { name: '运输', max: 2.04},
            { name: '航空和航运', max: 1 },
            { name: '制造与建筑', max: 1.5 },
            { name: '建筑物', max: 1 },
            { name: '工业', max: 1 },
            { name: '逸散性排放', max: 1 }
          ]
        }, 
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [0.18, 2.04, 1.07, 0.17,0.81,0.36,0.21,0.04],
                name: '人均二氧化碳排放',
                itemStyle: {//雷达图每一个焦点的样式
                    normal: {
                      color: "rgba(53,171,200,1)",
                      lineStyle: {
                         color: "rgba(53,171,200,1)",
                      },
                      shadowColor:'#35F3FF',
                      shadowBlur:20,
                    },
                  },
                  areaStyle:{
                    normal:{
                      color:'rgba(53,171,200,1)',
                    }
                  }
                }
            ]
          }
        ]  
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//3.面积图
(function(){
    var myChart= echarts.init(document.querySelector('.nengyuan .chartt'));
    var option = {
        tooltip: {
          trigger: 'axis',
          // axisPointer: {
          //   type: 'cross',
          //   label: {
          //     backgroundColor: '#6a7985'
          //   }
          // },
          formatter(a) {
            let res = '';

            let sum = 0;

            a.forEach((item, index) => {
              if (index === 0) {
                res += a[0].name +"年"+ "<br>";
              }
              sum += item.value;
              res += item.marker +" " + item.seriesName + " : " + item.value + "亿吨</br>";
              if (index === a.length - 1) {
                res += "合计 :"+sum.toFixed(2)+"亿吨";
              }
            });
            return res;
         },
      //   //  textStyle:{
      //   //     fontWeight: 550,
      //   //     textShadowColor: 'transparent'
      //   //  },
      //    textStyle: {
      //     // fontWeight:550,
      //     color: '#fff',
      //     fontSize: 16
      // },
      // backgroundColor: 'rgba(16, 32, 40, 0.88)',
      // borderRadius: 4,
      // borderColor: '#20749e',
        },
        legend: {
          data: ['煤', '油', '气', '水泥','燃烧', '其它行业'],
          textStyle:{
            color:'white'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1990','1991','1992','1993',
            '1994','1995','1996','1997','1998','1999','2000','2001','2002',
            '2003','2004','2005','2006','2007','2008','2009','2010','2011',
            '2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {formatter: '{value}亿吨'}
          }
        ],
        series: [
          {
            name: '煤',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            color:'#e9bae8',
            emphasis: {
              focus: 'series'
            },
            data: [86.89,86.04,83.99,85.01,85.49,87.94,90.16,89.68,87.26,88.55,92.03,92.55,96.79,105.18,108.72,115.43,121.89,
              127.76,131.93,130.16,139.27,147.37,149.23,150.24,150.52,147.10,143.61,145.07,147.47,147.26,141.75,149.80
              ],
              showSymbol: false
          },
          {
            name: '油',
            type: 'line',
            stack: 'Total',
            color:'#3dc5e7',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [92.49,97.23,92.26,92.33,92.66,93.64,96.43,97.87,98.83,101.12,103.02,103.91,103.86,106.80,
              110.43,111.39,112.46,112.84,112.51,109.97,113.60,113.88,115.42,116.26,116.79,119.30,120.24,
              122.43,122.66,123.46,111.92,118.37
              ],
              showSymbol: false
          },
          {
            name: '气',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [38.33,39.10,39.58,40.67,41.02,42.10,43.96,44.12,
              44.84,
              46.22,
              47.31,
              47.74,
              49.06,
              50.81,
              52.57,
              53.81,
              55.07,
              56.94,
              58.64,
              57.52,
              61.95,
              63.67,
              65.01,
              65.43,
              66.55,
              67.88,
              69.74,
              71.45,
              75.30,
              76.48,
              75.56,
              79.22
              ],
              showSymbol: false
          },
          {
            name: '水泥',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [4.94,
              5.08,
              5.29,
              5.52,
              5.88,
              6.22,
              6.35,
              6.61,
              6.59,
              6.91,
              7.22,
              7.54,
              7.96,
              8.52,
              9.11,
              9.64,
              10.52,
              11.29,
              11.44,
              11.76,
              12.55,
              13.50,
              13.85,
              14.44,
              15.00,
              14.44,
              14.88,
              15.08,
              15.69,
              16.18,
              16.38,
              16.73
              ],
              showSymbol: false
          },
          {
            name: '燃烧',
            type: 'line',
            stack:'Total',
            color:'#e88886',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [2.68,
              2.83,
              2.50,
              2.44,
              2.48,
              2.45,
              2.47,
              2.51,
              2.40,
              2.33,
              2.79,
              2.81,
              2.99,
              2.99,
              3.24,
              3.45,
              3.47,
              3.64,
              3.74,
              3.79,
              3.82,
              3.70,
              3.80,
              3.88,
              3.88,
              3.84,
              3.78,
              3.92,
              4.12,
              4.39,
              4.08,
              4.17
              ],
              showSymbol: false
          },
          {
            name: '其它行业',
            type: 'line',
            stack: 'Total',
            color:'#feda66',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [2.25,
              2.17,
              2.17,
              2.17,
              2.17,
              2.24,
              2.22,
              2.24,
              2.20,
              2.19,
              2.16,
              2.13,
              2.16,
              2.20,
              2.31,
              2.42,
              2.53,
              2.59,
              2.60,
              2.44,
              2.46,
              2.75,
              2.76,
              2.94,
              3.05,
              3.03,
              3.00,
              3.02,
              3.02,
              3.07,
              2.96,
              2.96
              ],
              showSymbol: false
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//4.堆叠条形图
(function(){
    var myChart= echarts.init(document.querySelector('.nengyuant .chartr'));
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          },
          textStyle: {
            color: '#fff',
            fontSize: 16
        },
        backgroundColor: 'rgba(16, 32, 40, 0.88)',
        borderRadius: 4,
        borderColor: '#20749e',
        },
        legend: {
            textStyle:{
                color:'white'
              }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max:16,
          axisLabel: {formatter: '{value}吨'}
        },
        yAxis: {
          type: 'category',
          data: ['澳大利亚', '美国', '德国', '加拿大', '中国', '英国', '法国','世界','瑞典','巴西','西班牙']
        },
        series: [
          {
            name: '煤',
            type: 'bar',
            stack: 'total',
            color:'#e9bae8',
            label: {
              show: false,
              textStyle:{fontSize:10,color:'black'}
            },
            emphasis: {
              focus: 'series'
            },
            data: [5.82, 2.97, 2.76, 1.15, 5.58, 0.35, 0.45,1.89,0.53,0.39,0.32]
          },
          {
            name: '油',
            type: 'bar',
            stack: 'total',
            color:'#feda66',
            label: {
              show: true,
              textStyle:{fontSize:10}
            },
            emphasis: {
              focus: 'series'
            },
            data: [5.37,6.63,2.98,6.33,1.2,2.29,2.79,1.50,2.54,2.80,1.39]
          },
          {
            name: '气',
            type: 'bar',
            stack: 'total',
            color:'#8bc77b',
            label: {
              show: true,
              textStyle:{fontSize:10}
            },
            emphasis: {
              focus: 'series'
            },
            data: [2.98,4.86,2.08,6.17,0.54,2.36,1.33,1,0.14,1.41,0.35]
          },
          {
            name: '燃烧',
            type: 'bar',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.67,0.2,0.02,0.42,0.01,0.05,0.03,0.05,0.04,0.08,0.07]
          },
          {
            name: '水泥',
            type: 'bar',
            stack: 'total',
            color:'skyblue',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.11,0.12,0.16,0.17,0.6,0.06,0.09,0.21,0.12,0.11,0.18]
          },
          {
            name: '其他行业',
            type: 'bar',
            color:'#fb7f10',
            stack: 'total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.14,0.08,0.09,0.05,0.12,0.04,0.06,0.04,0.05,0.03,0.06]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//5.世界地图
(function(){
  var myChart = echarts.init(document.querySelector('.ditu .tanpai'));
        let nameMap = {
            Afghanistan: '阿富汗',
            Singapore: '新加坡',
            Angola: '安哥拉',
            Albania: '阿尔巴尼亚',
            'United Arab Emirates': '阿联酋',
            Argentina: '阿根廷',
            Armenia: '亚美尼亚',
            'French Southern and Antarctic Lands':
                '法属南半球和南极领地',
            Australia: '澳大利亚',
            Austria: '奥地利',
            Azerbaijan: '阿塞拜疆',
            Burundi: '布隆迪',
            Belgium: '比利时',
            Benin: '贝宁',
            'Burkina Faso': '布基纳法索',
            Bangladesh: '孟加拉国',
            Bulgaria: '保加利亚',
            'The Bahamas': '巴哈马',
            'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
            Belarus: '白俄罗斯',
            Belize: '伯利兹',
            Bermuda: '百慕大',
            Bolivia: '玻利维亚',
            Brazil: '巴西',
            Brunei: '文莱',
            Bhutan: '不丹',
            Botswana: '博茨瓦纳',
            'Central African Republic': '中非共和国',
            Canada: '加拿大',
            Switzerland: '瑞士',
            Chile: '智利',
            China: '中国',
            'Ivory Coast': '象牙海岸',
            Cameroon: '喀麦隆',
            'Democratic Republic of the Congo': '刚果民主共和国',
            'Republic of the Congo': '刚果共和国',
            Colombia: '哥伦比亚',
            'Costa Rica': '哥斯达黎加',
            Cuba: '古巴',
            'Northern Cyprus': '北塞浦路斯',
            Cyprus: '塞浦路斯',
            'Czech Republic': '捷克共和国',
            Germany: '德国',
            Djibouti: '吉布提',
            Denmark: '丹麦',
            'Dominican Republic': '多明尼加共和国',
            Algeria: '阿尔及利亚',
            Ecuador: '厄瓜多尔',
            Egypt: '埃及',
            Eritrea: '厄立特里亚',
            Spain: '西班牙',
            Estonia: '爱沙尼亚',
            Ethiopia: '埃塞俄比亚',
            Finland: '芬兰',
            Fiji: '斐济',
            'Falkland Islands': '福克兰群岛',
            France: '法国',
            Gabon: '加蓬',
            'United Kingdom': '英国',
            Georgia: '格鲁吉亚',
            Ghana: '加纳',
            Guinea: '几内亚',
            Gambia: '冈比亚',
            'Guinea Bissau': '几内亚比绍',
            Greece: '希腊',
            Greenland: '格陵兰',
            Guatemala: '危地马拉',
            'French Guiana': '法属圭亚那',
            Guyana: '圭亚那',
            Honduras: '洪都拉斯',
            Croatia: '克罗地亚',
            Haiti: '海地',
            Hungary: '匈牙利',
            Indonesia: '印度尼西亚',
            India: '印度',
            Ireland: '爱尔兰',
            Iran: '伊朗',
            Iraq: '伊拉克',
            Iceland: '冰岛',
            Israel: '以色列',
            Italy: '意大利',
            Jamaica: '牙买加',
            Jordan: '约旦',
            Japan: '日本',
            Kazakhstan: '哈萨克斯坦',
            Kenya: '肯尼亚',
            Kyrgyzstan: '吉尔吉斯斯坦',
            Cambodia: '柬埔寨',
            Kosovo: '科索沃',
            Kuwait: '科威特',
            Laos: '老挝',
            Lebanon: '黎巴嫩',
            Liberia: '利比里亚',
            Libya: '利比亚',
            'Sri Lanka': '斯里兰卡',
            Lesotho: '莱索托',
            Lithuania: '立陶宛',
            Luxembourg: '卢森堡',
            Latvia: '拉脱维亚',
            Morocco: '摩洛哥',
            Moldova: '摩尔多瓦',
            Madagascar: '马达加斯加',
            Mexico: '墨西哥',
            Macedonia: '马其顿',
            Mali: '马里',
            Myanmar: '缅甸',
            Montenegro: '黑山',
            Mongolia: '蒙古',
            Mozambique: '莫桑比克',
            Mauritania: '毛里塔尼亚',
            Malawi: '马拉维',
            Malaysia: '马来西亚',
            Namibia: '纳米比亚',
            'New Caledonia': '新喀里多尼亚',
            Niger: '尼日尔',
            Nigeria: '尼日利亚',
            Nicaragua: '尼加拉瓜',
            Netherlands: '荷兰',
            Norway: '挪威',
            Nepal: '尼泊尔',
            'New Zealand': '新西兰',
            Oman: '阿曼',
            Pakistan: '巴基斯坦',
            Panama: '巴拿马',
            Peru: '秘鲁',
            Philippines: '菲律宾',
            'Papua New Guinea': '巴布亚新几内亚',
            Poland: '波兰',
            'Puerto Rico': '波多黎各',
            'North Korea': '北朝鲜',
            Portugal: '葡萄牙',
            Paraguay: '巴拉圭',
            Qatar: '卡塔尔',
            Romania: '罗马尼亚',
            Russia: '俄罗斯',
            Rwanda: '卢旺达',
            'Western Sahara': '西撒哈拉',
            'Saudi Arabia': '沙特阿拉伯',
            Sudan: '苏丹',
            'South Sudan': '南苏丹',
            Senegal: '塞内加尔',
            'Solomon Islands': '所罗门群岛',
            'Sierra Leone': '塞拉利昂',
            'El Salvador': '萨尔瓦多',
            Somaliland: '索马里兰',
            Somalia: '索马里',
            'Republic of Serbia': '塞尔维亚',
            Suriname: '苏里南',
            Slovakia: '斯洛伐克',
            Slovenia: '斯洛文尼亚',
            Sweden: '瑞典',
            Swaziland: '斯威士兰',
            Syria: '叙利亚',
            Chad: '乍得',
            Togo: '多哥',
            Thailand: '泰国',
            Tajikistan: '塔吉克斯坦',
            Turkmenistan: '土库曼斯坦',
            'East Timor': '东帝汶',
            'Trinidad and Tobago': '特里尼达和多巴哥',
            Tunisia: '突尼斯',
            Turkey: '土耳其',
            'United Republic of Tanzania': '坦桑尼亚',
            Uganda: '乌干达',
            Ukraine: '乌克兰',
            Uruguay: '乌拉圭',
            'United States': '美国',
            Uzbekistan: '乌兹别克斯坦',
            Venezuela: '委内瑞拉',
            Vietnam: '越南',
            Vanuatu: '瓦努阿图',
            'West Bank': '西岸',
            Yemen: '也门',
            'South Africa': '南非',
            Zambia: '赞比亚',
            Korea: '韩国',
            Tanzania: '坦桑尼亚',
            Zimbabwe: '津巴布韦',
            Congo: '刚果',
            'Central African Rep.': '中非',
            Serbia: '塞尔维亚',
            'Bosnia and Herz.': '波黑',
            'Czech Rep.': '捷克',
            'W. Sahara': '西撒哈拉',
            'Lao PDR': '老挝',
            'Dem.Rep.Korea': '朝鲜',
            'Falkland Is.': '福克兰群岛',
            'Timor-Leste': '东帝汶',
            'Solomon Is.': '所罗门群岛',
            Palestine: '巴勒斯坦',
            'N. Cyprus': '北塞浦路斯',
            Aland: '奥兰群岛',
            'Fr. S. Antarctic Lands': '法属南半球和南极陆地',
            Mauritius: '毛里求斯',
            Comoros: '科摩罗',
            'Eq. Guinea': '赤道几内亚',
            'Guinea-Bissau': '几内亚比绍',
            'Dominican Rep.': '多米尼加',
            'Saint Lucia': '圣卢西亚',
            Dominica: '多米尼克',
            'Antigua and Barb.': '安提瓜和巴布达',
            'U.S. Virgin Is.': '美国原始岛屿',
            Montserrat: '蒙塞拉特',
            Grenada: '格林纳达',
            Barbados: '巴巴多斯',
            Samoa: '萨摩亚',
            Bahamas: '巴哈马',
            'Cayman Is.': '开曼群岛',
            'Faeroe Is.': '法罗群岛',
            'IsIe of Man': '马恩岛',
            Malta: '马耳他共和国',
            Jersey: '泽西',
            'Cape Verde': '佛得角共和国',
            'Turks and Caicos Is.': '特克斯和凯科斯群岛',
            'St. Vin. and Gren.': '圣文森特和格林纳丁斯'
        }
        option = {
            tooltip: {
                trigger: 'item',
                textStyle: {
                  color: '#fff'
              },
              backgroundColor: 'rgba(16, 32, 40, 0.88)',
              borderRadius: 4,
              borderColor: '#20749e',
                formatter: function (params) {
                    console.log(params)
                    if (params.name) {
                        return params.name + ' : ' + (isNaN(params.value) ?'暂无数据' : (params.value)+'百万吨');
                    }
                }
            },
            // 视觉映射组件
            visualMap: {
              bottom : 50,
              right : 15,
              type : 'piecewise',
              splitNumber : 8,
                 pieces : [
                { gte : 6000 , color : 'rgb(227, 82, 65)' },
                { gt : 1000 , lte : 6000 , color : 'rgb(61,197,231)' },
                { gt : 500 , lte : 1000, color : '#e9bae8' },
                { gt : 100 , lte : 500 , color : 'rgb(132, 228, 221)' },
                { gt : 0 , lte : 100, color : 'rgb(254,221,139 )' }
                // 255,165,151 #e9bae8 254, 221, 139
            ],
          //   pieces : [
          //     { gte : 6000 , color : 'rgb(227, 82, 65)' },
          //     { gt : 1000 , lte : 6000 , color : 'rgb(61, 197, 231)' },
          //     { gt : 500 , lte : 1000, color : 'rgb(255, 206, 129)' },
          //     { gt : 200, lte :500 , color : 'rgb(255, 240, 146)' },
          //     { gt : 100 , lte : 200 , color : 'rgb(153, 213, 236)' },
          //     { gt : 0 , lte : 100, color : 'rgb(167, 219, 224 )' }
          //     // 255,165,151 #e9bae8 254, 221, 139
          // ],
            //text:'单位：百万吨',
            textStyle:{
              color:'#fff'
            }
            },
            series: [
                {
                    name: 'Annual CO₂ emissions/million·t',
                    type: 'map',
                    mapType: 'world',
                    roam: true,
                    zoom: 2,
                    itemStyle: {
                        areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                        borderWidth: 0.5, // 描边线宽 为 0 时无描边
                        borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                        borderType: 'solid', // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                        emphasis: {label: {show: true}}
                    },
                    label: {
                        show: false // 是否显示对应地名
                    },
                    data: [
                        {name: '阿富汗', value: 11.87},
                        {name: '阿尔巴尼亚', value: 4.62},
                        {name: '阿尔及利亚', value: 176.27},
                        {name: '赤道几内亚', value: 5.22},
                        {name: '安哥拉', value: 21.36},
                        {name: '安提瓜和巴布达', value: 0.47},
                        {name: '阿根廷', value: 186.45},
                        {name: '澳大利亚', value: 391.19},
                        {name: '奥地利', value: 64.63},
                        {name: '阿塞拜疆', value: 38.49},
                        {name: '巴哈马', value: 2.39},
                        {name: '孟加拉国', value: 93.18},
                        {name: '巴巴多斯', value: 1.13},
                        {name: '白俄罗斯', value: 59.6},
                        {name: '比利时', value: 95.72},
                        {name: '伯利兹', value: 0.69},
                        {name: '马其顿', value: 6.85},
                        {name: '贝宁', value: 7.76},
                        {name: '塞拉利昂', value: 1.3},
                          {name: '百慕大', value: 0.55},
                          {name: '波黑', value: 13.57},
                          {name: '不丹', value:1.52},
                          {name: '玻利维亚', value: 23.32},
                          {name: '波斯尼亚和黑塞哥维那', value: 13.57},
                          {name: '博茨瓦纳', value:6.5},
                          {name: '巴西', value: 488.88},
                          {name: '文莱', value: 10.48},
                          {name: '保加利亚', value: 42.56},
                          {name: '布基纳法索', value: 5.7},
                          {name: '布隆迪', value: 0.69},
                          {name: '柬埔寨', value: 19.03},
                          {name: '喀麦隆', value: 9.3},
                          {name: '加拿大', value: 545.63},
                          {name: '佛得角共和国', value: 0.67},
                          {name: '中非共和国', value: 0.23},
                          {name: '乍得', value: 1.94},
                          {name: '智利', value: 85.45},
                          {name: '中国', value: 11472.37},
                          {name: '中非', value: 0.23},
                          {name: '刚果', value: 7.46},
                          {name: '哥伦比亚', value: 91.7},
                          {name: '科摩罗', value: 0.3},
                          {name: '刚果民主共和国', value: 2.61},
                          {name: '刚果共和国', value: 2.61},
                          {name: '哥斯达黎加', value: 7.82},
                          {name: '克罗地亚', value: 17.7},
                          {name: '亚美尼亚', value: 6.81},
                          {name: '古巴', value: 22.06},
                          {name: '塞浦路斯', value: 7.6},
                          {name: '西撒哈拉', value: 5.6},
                          {name: '捷克共和国', value: 97.14},
                          {name: '捷克', value: 90.2},
                          {name:'多米尼加',value:28.92},
                          {name: '丹麦', value: 29.58},
                          {name: '吉布提', value: 0.38},
                          {name: '多明尼加共和国', value: 28.92},
                          {name: '厄瓜多尔', value: 41.32},
                          {name: '埃及', value: 249.62},
                          {name: '萨尔瓦多', value: 7.2},
                            {name: '厄立特里亚', value: 0.82},
                            {name: '爱沙尼亚', value:10.45},
                            {name: '埃塞俄比亚', value: 17.79},
                            {name: '法罗群岛', value: 0.7},
                            {name: '斐济', value:1.47},
                            {name: '芬兰', value: 37.6},
                            {name: '法国', value: 305.96},
                            {name: '法属圭亚那', value: 0.65},
                            {name: '加蓬', value: 5.71},
                            {name: '冈比亚', value: 0.66},
                            {name: '格鲁吉亚', value: 11.01},
                            {name: '德国', value: 674.75},
                            {name: '加纳', value: 21.31},
                            {name: '希腊', value: 56.31},
                            {name: '格陵兰', value: 0.51},
                            {name: '格林纳达', value: 0.32},
                            {name: '危地马拉', value: 20.33},
                            {name: '几内亚', value:4.84},
                            {name: '几内亚比绍', value: 0.35},
                            {name: '圭亚那', value: 3.09},
                            {name: '海地', value:2.88},
                            {name: '洪都拉斯', value: 10.9},
                            {name: '匈牙利', value: 48.45},
                            {name: '冰岛', value: 3.37},
                            {name: '印度', value: 2709.68},
                            {name: '印度尼西亚', value: 619.28},
                            {name: '伊朗', value: 748.88},
                            {name: '伊拉克', value: 185.58},
                            {name: '爱尔兰', value: 37.54},
                            {name: '以色列', value: 54.53},
                            {name: '意大利', value: 328.69},
                            {name: '牙买加', value: 7.69},
                            {name: '日本', value: 1067.4},
                            {name: '约旦', value: 25.59},
                            {name: '哈萨克斯坦', value: 276.68},
                            {name: '肯尼亚', value: 19.88},
                            {name: '科索沃', value: 5.64},
                            {name: '科威特', value: 106.13},
                            {name: '吉尔吉斯斯坦', value: 9.31},
                            {name: '老挝', value: 20.78},
                            {name: '拉脱维亚', value:7.27},
                            {name: '黎巴嫩', value: 24.96},
                            {name: '莱索托', value: 2.28},
                            {name: '利比里亚', value:1.2},
                            {name: '利比亚', value: 74.53},
                            {name: '立陶宛', value: 13.88},
                            {name: '卢森堡', value: 8.35},
                            {name: '马达加斯加', value: 4.24},
                            {name: '马拉维', value: 1.55},
                            {name: '马来西亚', value: 256.05},
                            {name: '马里', value: 4.17},
                            {name: '马耳他共和国', value: 1.72},
                            {name: '毛里塔尼亚', value:4.12 },
                            {name: '毛里求斯', value: 4.47},
                            {name: '墨西哥', value: 407.21},       
                            {name: '摩尔多瓦', value: 5.6},
                            {name: '蒙古', value: 50.32},
                            {name: '黑山', value: 1.75},
                            {name: '蒙塞拉特', value: 0.02},
                            {name: '摩洛哥', value: 70.58},
                            {name: '莫桑比克', value: 7.16},
                            {name: '纳米比亚', value:4.01},
                            {name: '缅甸', value: 36.31},
                            {name: '尼泊尔', value: 14.17},
                            {name: '荷兰', value:141.05},
                            {name: '新喀里多尼亚', value: 5.5},
                            {name: '新西兰', value: 33.79},
                            {name: '尼加拉瓜', value: 5.06},
                            {name: '尼日尔', value: 2.7},
                            {name: '尼日利亚', value: 136.99},
                            {name: '北朝鲜', value: 56.38},
                            {name: '挪威', value: 40.92},
                            {name: '阿曼', value: 80.99},
                            {name: '巴基斯坦', value:229.51},
                            {name: '巴勒斯坦', value: 3.09},
                            {name: '巴拿马', value: 13.03},
                            {name: '巴布亚新几内亚', value: 8.51},
                            {name: '巴拉圭', value: 8.58},
                            {name: '秘鲁', value: 56.28},
                            {name: '菲律宾', value: 144.26},
                            {name: '罗马尼亚', value: 79.33},
                            {name: '波兰', value: 328.58},
                            {name: '葡萄牙', value:40.8},
                            {name: '卡塔尔', value: 95.67},
                            {name: '俄罗斯', value: 1755.55},
                            {name: '卢旺达', value:1.75},
                            {name: '圣卢西亚', value: 0.49},
                            {name: '萨摩亚', value: 0.29},
                            {name: '沙特阿拉伯', value: 672.38},
                            {name: '塞内加尔', value: 13.6},
                            {name: '塞尔维亚', value: 30.87},
                            {name: '新加坡', value: 32.51},
                            {name: '斯洛伐克', value: 35.31},
                            {name: '斯洛文尼亚', value: 12.55},
                            {name: '所罗门群岛', value:0.32},
                            {name: '索马里', value: 0.61},
                            {name: '南非', value: 435.93},
                            {name: '韩国', value: 616.08},
                            {name: '南苏丹', value: 1.58},
                            {name: '西班牙', value: 233.65},
                            {name: '斯里兰卡', value: 20.78},
                            {name: '东帝汶', value: 0.74},
                            {name: '苏丹', value: 21.04},
                            {name: '苏里南', value:2.79},
                            {name: '瑞典', value: 35.85},
                            {name: '瑞士', value: 34.93},
                            {name: '叙利亚', value:27},
                            {name: '塔吉克斯坦', value:10.34},
                            {name: '坦桑尼亚', value: 13.06},
                            {name: '泰国', value: 278.5},
                            {name: '多哥', value: 2.34},
                            {name: '特里尼达和多巴哥', value: 36.12},
                            {name: '突尼斯', value: 56.38},
                            {name: '土耳其', value: 40.92},
                            {name: '土库曼斯坦', value: 80.99},
                            {name: '特克斯和凯科斯群岛', value:0.34},
                            {name: '乌干达', value: 5.78},
                            {name: '乌克兰', value: 201.86},
                            {name: '阿联酋', value: 204.09},
                            {name: '英国', value:346.77},
                            {name: '美国', value: 5007.34},
                            {name: '乌拉圭', value: 6.74},
                            {name: '乌兹别克斯坦', value: 121.63},
                            {name: '瓦努阿图', value: 0.17},
                            {name: '委内瑞拉', value: 79.75},
                            {name: '越南', value: 326.01},
                            {name: '也门', value: 12.48},
                            {name: '赞比亚', value:7.68},
                            {name: '津巴布韦', value:11.3}
                    ],
                    nameMap: nameMap
                }
            ]
        };
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
