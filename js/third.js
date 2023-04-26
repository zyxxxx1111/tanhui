//1.盒须图
(function () {
    var myChart= echarts.init(document.querySelector('.zhui .hexv'));
    var getdata = [
        [60.64,56.9,49.31,123.46,157.79,60.27],
        [77.47,78.99,86.71,169.11,251.32,64.42],
        [95.58,98.05,161.89,232.69,394.88,136.37],
        [88.98,143.93,229.16,251.8,500.6,139.12],
        [70.61,137.72,275.97,282.36,568.98,125.67],
    ]
    var getname=['1999','2004','2009','2014','2019'];
    option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '50',
            right: '20',
            top:'30',
            bottom:'40',
        },
        xAxis: {
            type: 'category',
            data: getname,
            axisLabel: {
                color: '#777777',
                textStyle: {
                    fontSize: '13'
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#333333',
                }
            },
            splitLine: {
                show: false
            }
        },
    
        yAxis: {
            type: 'value',
            name:'百万吨',
            nameTextStyle: {
                color: '#777777',
                fontSize: 13,
                padding:[0,0,0,60]
            },
            axisLabel: {
                color: '#777777',
                textStyle: {
                    fontSize: '13'
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#333333',
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#D1D1D1',
                },
            }
    
        },
        series: [{
                name: 'boxplot',
                type: 'boxplot',
                data: getdata,
                itemStyle: {
                    normal: {
                        borderColor: '#4B96F3',
                        borderWidth: 2,
                        // color: '#B8D8FF',
                        color:'rgb(211, 234, 243)'
                    }
                },
            
                    tooltip: {
                        trigger: 'item',
                        axisPointer: {
                            type: 'shadow'
                        },
                        textStyle: {
                          fontWeight: 600 // 字体大小
                        },
                        formatter: function(param) {
                            var arr = [
                                {name: '重庆', value: param.data[6]},
                                {name: '广东', value: param.data[5]},
                                {name: '湖北', value: param.data[4]},
                                {name: '福建', value: param.data[3]},
                                {name: '天津', value: param.data[2]},
                                {name: '北京', value: param.data[1]}
                            ];
                            arr.sort((a, b) => b.value - a.value);
                            var str = '';
                            for (let i = 0; i < arr.length; i++) {
                                str += arr[i].name + '：' + arr[i].value + ' 百万吨<br/>';
                            }
                            return str;
                        }
                    },    
            }]
        };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    });  
  })();
//2.圆角环形图
(function(){
    var myChart= echarts.init(document.querySelector('.temp .liang'));
const colors =  ['#3c90ff', '#fff225', 'rgb(238, 102, 102)', '#33ffbb', 'rgb(233, 191, 245)', '#ff9c3c', '#657aff', '#ffffff', '#ffab66', '#7cff33']
const series = [
  { value: 1461.50, name: '北京' },
            { value: 920.10, name: '天津' },
            { value: 847.00, name: '福建' },
            { value: 7827.60, name: '湖北' },
            { value: 7755.10 , name: '广东' },
            { value: 869.00 , name: '重庆' }
]
const centerX = '40%'
const angle = 0

function total() {
    let count = 0
    series.forEach(o => {
        count += o.value
    })
    return count
}

function getCirlPoint(x0, y0, r, angle) {
    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
    return {
        x: x1,
        y: y1
    }
}

function _pie1() {
    let data = []
    series.forEach((o, i) => {
        o.itemStyle = {
            normal: {
                borderWidth: 1,
                shadowBlur: 20,
                borderRadius: 20,
                borderColor: colors[i],
                shadowColor: colors[i]
            }
        }
        data.push(o, {
            value: total / 50,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        })
    })
    return data
}

option = {
    //backgroundColor: '#0E1327',
    fontSize: 16,
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff'
        },
        backgroundColor: 'rgba(16, 32, 40, 0.88)',
        borderRadius: 4,
        borderColor: '#20749e',
        formatter: params => {
            return params.marker + params.name + ': ' + params.value+'万吨'
        }
    },
    color: colors,
    legend: [
        {
            orient: 'vertical',
    top: '-2%',
           right: '40%',
            itemGap: 20,
            itemWidth: 14,
            itemHeight: 14,
            // top: 'center',
            textStyle: {
                color: '#fff'
            },
            data: series.slice(0, 2)
        },
        {
          orient: 'vertical',
  top: '-2%',
       left: '15%',
          itemGap: 20,
          itemWidth: 14,
          itemHeight: 14,
          // top: 'center',
          textStyle: {
              color: '#fff'
          },
          data: series.slice(2, 4)
      },
      {
        orient: 'vertical',
top: '-2%',
       right: '15%',
        itemGap: 20,
        itemWidth: 14,
        itemHeight: 14,
        // top: 'center',
        textStyle: {
            color: '#fff'
        },
        data: series.slice(4,7)
    }
],
    series: [
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['60%', '70%'],
            center: ['50%', '60%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                }
            },
            emphasis: {
                      label: {
                        show: true,
                        //textAlign:'center',
                        //position:['90%', '90%'],
                        // left:'50%',
                        // top:'50%',
                        fontSize: 20,
                        fontWeight: 'bold'
                      }
                    },
            data: _pie1()
        },
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                return {
                    type: 'arc',
                    shape: {
                        // cx: api.getWidth() / 2,
                        cx: centerX,
                        cy: api.getHeight() / 2,
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.45,
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((360 + angle) * Math.PI) / 180
                    },
                    style: {
                        stroke: {
                            type: 'linear',
                            x: 1,
                            y: 0.5,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'transparent' // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: '#00eaff' // 100% 处的颜色
                                }
                            ]
                        },
                        fill: 'transparent',
                        lineWidth: 1
                    },
                    // style: api.style(),
                    silent: true
                }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            data: [0]
        },
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: (params, api) => {
                // let x0 = api.getWidth() / 2
                let x0 = centerX
                let y0 = api.getHeight() / 2
                let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.45
                let point = getCirlPoint(x0, y0, r, -95 + angle)
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 2.5
                    },
                    style: {
                        stroke: '#00eaff', //绿
                        fill: '#00eaff'
                    },
                    silent: true
                }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            data: [0]
        }
    ]
};
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//3.轮播饼图
(function () {
  var myChart= echarts.init(document.querySelector('.zymc .liange'));
  option = {
    //backgroundColor: '#0c1e55',

   color: ['#00a0fc', '#ffe400', 'rgb(227, 111, 107)', 'rgb(51, 255, 187)','rgb(123,104,238)', '#ec561b', '#ffa500', '#dddf00', '#b23aee', '#50b332'],

    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff'
        },
        backgroundColor: 'rgba(16, 32, 40, 0.88)',
        borderRadius: 4,
        borderColor: '#20749e',
         formatter: "{b} : {c} 万元"
        //formatter: "   企业数：{c}"
    },
    legend: { // 图例-图上面的分类
        //orient: 'vertical',
        left: "3%",
        //   icon: 'rect',//长方形
        icon: 'circle',
        top: "2%",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
       data: ['北京', '天津', '福建', '湖北','广东','重庆' ],
        // right: '56%',
        textStyle: {
            fontSize: 14,
            color: '#a6cde8',
            lineHeight: 49
        },
        formatter: function(name) {
            return "" + name + ""
        },
        padding: [2, 2]
    },
    grid: {
        top: '10%',
        left: '13%',
        right: '10%',
        bottom: '6%',
        containLabel: true
    },

    series: [{
        label: {
            normal: {
                    formatter: '{b|{b}：} {per|{d}%} ',
                    rich: {
                    }
                },
            emphasis: {
                show: true,
            }
        },
        // labelLine: {
        //     normal: {
        //         show: false
        //     }
        // },
        name: '碳交易额',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        startAngle:120, //起始角度
        data:[{ value: 90577.70, name: '北京' },
                              { value: 20103.60, name: '天津' },
                              { value:17138.00, name: '福建' },
                              { value: 168834.70 , name: '湖北' },
                              { value: 159065.60  , name: '广东' },
                              { value: 5309.50 , name: '重庆' }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
          labelLine: {
            normal: {
                length: 5,
                length2: 1,
                smooth: true,
            }
        },
    }]
};

 autoFn(option.legend.data.length)
    function autoFn(leng){
             var that = this
            //轮播效果
            var currentIndex = -1
           
            //  let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
            var dataLen =leng

            that.timer = setInterval(() => {
                //  计时器增加
                that.ai++

                if (that.ai == dataLen) {
                    that.ai = 1
                }
                 console.log(dataLen)
                // 取消之前高亮的图形
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
                currentIndex = (currentIndex + 1) % dataLen
                // 高亮当前图形
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
                // 显示 tooltip
              myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
            }, 1000)
    };
  myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      });
})();
//4.折柱图
(function () {
    var myChart = echarts.init(document.querySelector('.tuxing'));
    let dataC1 = [
        0.002569022,
        0.002354284,
        0.001960926,
        0.001625146,
        0.001536878,
        0.001404674,
        0.001250674,
        0.001135893,
        0.00103065,
        0.00094529,
        0.00088318,
        0.000860586,
        0.000805205,
        0.000737662,
        0.000744766,
        0.000738754,
        0.000640788
        ];
let xData = ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
var fontColor = '#30eee9';
option = {
    backgroundColor: 'transparent',
    grid: {
        left: '15%',
        right: '2%',
        top: '10%',
        bottom: '15%',
    },
     legend: {
        data:['单位GDP的碳排放'],
        textStyle:{
             color:'#A9DDEE',
        },
       
        orient: 'horizontal',
        icon: 'rect',
        top: '5',
        right: '5%',
        itemGap: 10,
        itemWidth: 20,
        itemHeight: 12,
     },
        
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#57617B',
            },
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //顶头显示
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
    
        axisTick: {
            show: false,
            // alignWithLabel: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        axisLabel: {
            fontSize: 12,
        },
        data: xData,
    },
    yAxis: {
        name: '',
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dotted',
                color: '#3585d5',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 10,
        },
       boundaryGap: false,
    },
    series: [
        {
            name: '单位GDP的碳排放',
            type: 'line',
            stack: '总量',
            smooth: true,
            symbol: 'none',
            showSymbol: true,
            symbolSize: 80,
            itemStyle: {
                normal: {
                    color: '#71bd27',
                    lineStyle: {
                        color: '#71bd27',
                        width: 3,
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0.4,
                                color: 'rgba(240, 250, 230,0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(240, 250, 230,0.9)',
                            },
                        ]),
                    },
                },
            },
            // markPoint: {
            //     itemStyle: {
            //         normal: {
            //             color: 'red',
            //         },
            //     },
            // },
            data: dataC1,
        },
    ],
};
myChart.setOption(option);
window.addEventListener('resize',function(){
myChart.resize();
});
})();
 //5.中国地图
(function(){
  var myChart = echarts.init(document.querySelector('.chart'));
          var option = {
            //   title: {  //标题样式
            //       text: '中国地图',
            //       x: "center",
            //       textStyle: {
            //           fontSize: 18,
            //           color: "black"
            //       },
            //   },
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
                          return params.name + ' : ' + (isNaN(params.value) ? '暂无数据': parseFloat(params.value)+'百万吨');
                      }
                  }
              },
              visualMap: {//视觉映射组件
                  top: '65%',
                  left: '10%',
                  min: 0,
                  max: 1700.04,
                  //text: ['High', 'Low'],
                  realtime: false,  //拖拽时，是否实时更新
                  calculable: false,  //是否显示拖拽用的手柄
                  inRange: {
                      color: ['lightskyblue', '#ffff99', '#ff9966']
                    //   color: ['rgb(173,216,230)', 'rgb(135,206,235)', 'rgb(100,149,237)']
                  }
              },
              series: [
                  {
                      name: '模拟数据',
                      type: 'map',
                      mapType: 'china',
                      roam: false,//是否开启鼠标缩放和平移漫游
                      itemStyle: {//地图区域的多边形 图形样式
                          normal: {//是图形在默认状态下的样式
                              label: {
                                  show: true,//是否显示标签
                                  textStyle: {
                                      color: "black"
                                  }
                              }
                          },
                          zoom:3.5,  //地图缩放比例,默认为1
                          emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                              label: {show: true}
                          }
                      },
                      top: "1%",//组件距离容器的距离
                      bottom:"1.5%",
                      data: [
                          {name: '北京', value: 70.61},
                          {name: '天津', value: 137.72},
                          {name: '上海', value: 159.50},
                          {name: '重庆', value: 125.67},
                          {name: '河北', value: 593.43},
                          {name: '河南', value: 464},
                          {name: '云南', value: 172.11},
                          {name: '辽宁', value: 628.03},
                          {name: '黑龙江', value: 341.14},
                          {name: '湖南', value: 242.06},
                          {name: '安徽', value: 398.96},
                          {name: '山东', value: 1244.71},
                          {name: '新疆', value: 519.31},
                          {name: '江苏', value: 636.58},
                          {name: '浙江', value: 419.15},
                          {name: '江西', value: 186.18},
                          {name: '湖北', value: 282.36},
                          {name: '广西', value: 229.59},
                          {name: '甘肃', value: 185.44},
                          {name: '山西', value: 1700.04},
                          {name: '内蒙古', value: 972.79},
                          {name: '陕西', value: 611.59},
                          {name: '吉林', value: 197.77},
                          {name: '福建', value: 275.97},
                          {name: '贵州', value: 289.24},
                          {name: '广东', value: 568.98},
                          {name: '青海', value: 45.28},
                          {name: '贵州', value: 289.24},
                          {name: '西藏', value: NaN},
                          {name: '四川', value: 276.56},
                          {name: '宁夏', value: 251.9},
                          {name: '辽宁', value: 628.03},
                          {name: '黑龙江', value: 341.14},
                          {name: '云南', value: 172.11},
                          {name: '海南', value: 66.1},
                          {name: '台湾', value: NaN},
                          {name: '香港', value: NaN},
                          {name: '澳门', value: NaN}
                      ]
                  }
              ]
          };
       
    myChart.setOption(option);
    window.addEventListener('resize',function(){
    myChart.resize();
  });
})();
//6.预测折线图
(function(){
    var myChart = echarts.init(document.querySelector('.yuce'));
    option = {
        backgroundColor: 'transparent',
        title: {
            text: "中国年总碳排放量预测",
            left: "278px",
            top: "10px",
            textStyle: {
                color: "#fff",
                fontSize: 15,
                fontWeight: '500'
            }
        },
        color: ['#FFA18E', '#5AD8A6'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                },
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        grid: {
            left: '25',
            right: '25',
            bottom: '14',
            top: '40',
            containLabel: true
        },
        legend: {
            data: ['过去', '预测'],
            right: '20px',
            top: '10px',
            icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
            textStyle: {
                color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: ['1920',
                '1921',
                '1922',
                '1923',
                '1924',
                '1925',
                '1926',
                '1927',
                '1928',
                '1929',
                '1930',
                '1931',
                '1932',
                '1933',
                '1934',
                '1935',
                '1936',
                '1937',
                '1938',
                '1939',
                '1940',
                '1941',
                '1942',
                '1943',
                '1944',
                '1945',
                '1946',
                '1947',
                '1948',
                '1949',
                '1950',
                '1951',
                '1952',
                '1953',
                '1954',
                '1955',
                '1956',
                '1957',
                '1958',
                '1959',
                '1960',
                '1961',
                '1962',
                '1963',
                '1964',
                '1965',
                '1966',
                '1967',
                '1968',
                '1969',
                '1970',
                '1971',
                '1972',
                '1973',
                '1974',
                '1975',
                '1976',
                '1977',
                '1978',
                '1979',
                '1980',
               '1981',
                '1982',
                '1983',
                '1984',
                '1985',
                '1986',
                '1987',
                '1988',
                '1989',
                '1990',
                '1991',
                '1992',
                '1993',
                '1994',
                '1995',
                '1996',
                '1997',
                '1998',
                '1999',
                '2000',
                '2001',
                '2002',
                '2003',
                '2004',
                '2005',
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024',
                '2025',
                '2026',
                '2027',
                '2028',
                '2029',
                '2030',
                '2031',
                '2032',
                '2033',
                '2034',
                '2035',
                '2036',
                '2037',
                '2038',
                '2039',
                '2040',
                '2041',
                '2042',
                '2043',
                '2044',
                '2045',
                '2046',
                '2047',
                '2048',
                '2049',
                '2050',
                '2051',
                '2052',
                '2053',
                '2054',
                '2055',
                '2056',
                '2057',
                '2058',
                '2059',
                '2060'
                ],
            splitLine: {
                show: false
            },
            axisTick: {
                show: true,
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
        },
        yAxis: {
            type: 'value',
            // max: '100',
            // max: max_value>=100? max_value + 100: max_value+10,
            // max: max_value > 100 ? max_value * 2 : max_value + 10,
            // interval: 10,
            // nameLocation: "center",
            name:'单位：吨',
            nameTextStyle:{
                color:'#fff'
            },
            axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: 12
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#F3F4F4'
                }
            },
            axisLine: {
                show: false
            },
        },
        series: [
            {
                name: '过去',
                type: 'line',
                smooth: true,
                data: [40278456.00 ,
                    38762732.00, 
                    39971524.00 ,
                    46517556.00 ,
                    48846084.00 ,
                    45954840.00 ,
                    43660164.00 ,
                    45808580.00 ,
                    47591444.00 ,
                    48281828.00 ,
                    49558456.00 ,
                    51904660.00 ,
                    50269150.00 ,
                    54111180.00 ,
                    62382628.00 ,
                    72645970.00 ,
                    75477250.00 ,
                    70968650.00 ,
                    61365520.00 ,
                    74426990.00,
                    90790530.00 ,
                    113978570.00 ,
                    127613384.00 ,
                    108994540.00 ,
                    103003570.00 ,
                    55892210.00 ,
                    36107050.00 ,
                    41836136.00 ,
                    38400104.00 ,
                    62081100.00 ,
                    78835290.00 ,
                    102115210.00 ,
                    127999330.00 ,
                    133782880.00 ,
                    160877400.00 ,
                    190521460.00 ,
                    215823980.00 ,
                    255784960.00 ,
                    524617060.00 ,
                    720151550.00 ,
                    798799940.00 ,
                    570630200.00 ,
                    459618080.00 ,
                    456779460.00 ,
                    460637100.00 ,
                    500286370.00 ,
                    549459260.00 ,
                    460225900.00 ,
                    495506560.00 ,
                    607683300.00 ,
                    807952640.00 ,
                    909209700.00 ,
                    968645570.00 ,
                    1008292600.00 ,
                    1028099840.00 ,
                    1183215000.00 ,
                    1226421200.00 ,
                    1340831100.00 ,
                    1492777900.00 ,
                    1525661200.00 ,
                    1494495900.00 ,
                    1476487800.00 ,
                    1606585000.00 ,
                    1694216800.00 ,
                    1844828000.00 ,
                    1998083000.00 ,
                    2104213400.00 ,
                    2257738500.00 ,
                    2425893600.00 ,
                    2463654400.00 ,
                    2484854800.00 ,
                    2606096100.00 ,
                    2730787600.00 ,
                    2921651000.00 ,
                    3100002000.00 ,
                    3357909000.00 ,
                    3503233500.00 ,
                    3510169000.00 ,
                    3360455400.00 ,
                    3552842000.00 ,
                    3644464000.00 ,
                    3723730700.00 ,
                    4112459000.00 ,
                    4827446000.00 ,
                    5223755000.00 ,
                    5876555300.00 ,
                    6488804000.00 ,
                    6978611700.00 ,
                    7496832000.00 ,
                    7886532600.00 ,
                    8616653000.00 ,
                    9528556000.00 ,
                    9779281000.00 ,
                    9956309000.00 ,
                    9998621000.00 ,
                    9866905000.00 ,
                    9764980000.00 ,
                    10011107000.00 ,
                    10353877000.00 ,
                    10740996000.00 ,
                    10956213000.00 ,
                    11472369000.00 
                    ],
                   
                    },
            {
                name: '预测',
                type: 'line',
                smooth: true,
                data: [,,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,, ,,,,,,,,,,,
                    11166402300.00 ,
10896846900.00 ,
10400834600.00 ,
9970982390.00 ,
9836992330.00 ,
10050746900.00 ,
10367329600.00 ,
10694257900.00 ,
11033965700.00 ,
11327692300.00 ,
11368876800.00 ,
11039343700.00 ,
10502563000.00 ,
9996490920.00 ,
9776815880.00 ,
9924814280.00 ,
10247643000.00 ,
10583233400.00 ,
10919582400.00 ,
11255796500.00 ,
11476530500.00 ,
11344373400.00 ,
10859689200.00 ,
10282109200.00 ,
9873968670.00 ,
9827267850.00 ,
10091054800.00 ,
10422257700.00 ,
10749095600.00 ,
11083847800.00 ,
11394552400.00 ,
11485376300.00 ,
11190563600.00 ,
10636263400.00 ,
10097325000.00 ,
9818566530.00 ,
9917537970.00 ,
10225032200.00 ,
10549462900.00 

                    ],
                    itemStyle:{
                        color:function(params) { if (params.dataIndex === 110 || params.dataIndex === 140) { return '#DC143C'; }// 更改为您想要的颜色 
                         else { return '#5AD8A6'; } } } 
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
