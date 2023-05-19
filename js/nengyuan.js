//1.桑基图
(function () {
  var myChart= echarts.init(document.querySelector('.zhuti .hezi'));
  option = {
    // grid: {
    //   top: 100,
    //   left:25,
    //   right:5,
    //   bottom: 10
    // },
    title: {
      text: '主要能源（2021）',
      left: '25',
      top:'10',
      textStyle:{
          color:'#E0FFFF',
          fontSize:23
      } 
    },
    // color:['#e9bae8',
    
    //  '#2aa12d',
    //  '#8bc77b',
    //  '#feda66',
    //  '#c92123',
    //  '#e88886',
    //  '#feda66'
    //  ],
    color:['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05','#8bc77b'],
    tooltip: { trigger: 'item', triggerOn: 'mousemove',
    textStyle: {
      color: '#fff'
  },
  backgroundColor: 'rgba(16, 32, 40, 0.88)',
  borderRadius: 4,
  borderColor: '#20749e',
     formatter: function(params)
     { let source = params.data.name; let value = params.value; let target=params.target;
       let unit = ""; if(source == "原煤" || source == "原油" || source == "汽油" || source == "煤油" || source == "柴油" || source == "焦炭"||target == "固体" || target== "液体"){ unit = "万吨"; }
        else if(source == "天然气" || source == "煤气"||target == "气体"){ unit = "亿立方米"; } 
        else if(source == "风力发电" || source == "火力发电" || source == "水力发电" || source == "核能发电" || source == "太阳能发电" || source == "太阳能电池" || source == "电能"){ unit = "亿千瓦时"; }  
       return params.name + " : " + value + unit; }
      },
    animation: false,
    series: [
      {
        type: 'sankey',
        bottom: '5%',
        top:'8%',
        right:'9%',
        nodeWidth: 55,
        nodeGap: 30,
        draggable:false,
        emphasis: {
          focus: 'adjacency'
        },
        data: [
          { name: '电能' },
          { name: '原煤' },
          { name: '原油' },
          { name: '天然气' },
          { name: '煤气' },
          { name: '汽油' },
          { name: '煤油' },
          { name: '柴油' },
          { name: '焦炭' },
          { name: '固体' },
          { name: '气体' },
          { name: '液体' },
          { name: '风力发电' },
          { name: '火力发电' },
          { name: '水力发电' },
          { name: '核能发电' },
          { name: '太阳能发电' },
          { name: '太阳能电池' },
          { name: '一次能源' },
          { name: '二次能源' }
        ],
        links: [
           { source: '电能', target: '火力发电', value: 58531.3},
          { source: '电能', target: '风力发电', value: 6867.2},
          { source: '电能', target: '水力发电', value: 12020},
          { source: '电能', target: '核能发电', value:4177.8},
          { source: '电能', target: '太阳能发电', value:2289.99},
          { source: '电能', target: '太阳能电池', value:3.43642},

           { source: '焦炭', target: '固体', value:47343.6},
          { source: '原煤', target: '固体', value: 449583.9},
          { source: '原油', target: '液体', value: 20466.7},
          { source: '天然气', target: '气体', value: 2177.9 },
          { source: '汽油', target: '液体', value:14535.6},
          { source: '煤油', target: '液体', value: 2949.1},
          { source: '柴油', target: '液体', value:19125.7 },
          { source: '煤气', target: '气体', value: 16003.6},
          { source: '一次能源', target: '原煤', value: 449583.9},
          { source: '一次能源', target: '原油', value: 20466.7},
          { source: '一次能源', target: '天然气', value: 2177.9 },
          { source: '二次能源', target: '汽油', value:14535.6},
          { source: '二次能源', target: '煤油', value: 2949.1},
          { source: '二次能源', target: '柴油', value:19125.7 },
          { source: '二次能源', target: '煤气', value: 16003.6},
          { source: '二次能源', target: '电能', value:83889.7 },
          { source: '二次能源', target: '焦炭', value:47343.6},
        ],
        focusNodeAdjacency: 'allEdges',
        itemStyle: {
          borderWidth: 0,
        },
        label: {
          fontSize:14,
          position: 'bottom',
          color:'#fff'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.5
        }
      }
    ]
  };
  console.log(JSON.stringify(option))
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  });  
})();
//2.折柱图
(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .shanxing'));
    option = {
        backgroundColor:'transparent',
        title: {
          text: '清洁能源',
          left: '25',
          top:'10',
          textStyle:{
              color:'#E0FFFF',
              fontSize:23
          } 
        },
      
       grid: {
              top: 100,
              left:50,
              right:50,
              bottom: 100
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true
                }
              },
            //   formatter: function (value, index) {
            //     if (index === 0) {
            //         return value + ' 万千瓦时';
            //     } else if (index === 1) {
            //         return value + ' 亿千瓦时';
            //     } else {
            //         return value + ' 万千瓦时';
            //     }
            // },
            //   textStyle: {
            //     color: '#fff'
            // },
            // backgroundColor: 'rgba(16, 32, 40, 0.88)',
            // borderRadius: 4,
            // borderColor: '#20749e',
            },
           
            legend: {
              data: ["太阳能电池（光伏电池）", "太阳能发电",'风力发电'],
              // top: "15%",
              top: 40,
              right: 10,
              textStyle: {
                color: "#ffffff"
              }
            },
            "dataZoom": [{
            "show": true,
            "height": 30,
            "xAxisIndex": [
                0
            ],
            bottom: 30,
            "start": 10,
            "end": 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle:{
                color:"#d3dee5",
                
            },
               textStyle:{
                color:"#fff"},
               borderColor:"#90979c"
            
            
        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
            xAxis: {
               data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              //data: this.mydata.data.name,
              axisLine: {
                // show: true, //隐藏X轴轴线
                lineStyle: {
                  color: "#c0c3cd"
                }
              },
              axisTick: {
                show: true //隐藏X轴刻度
              },
              axisLabel: {
                show: true,
                textStyle: {
                  // color: "#c0c3cd" //X轴文字颜色
                }
              }
            },
            yAxis: [
              {
                type: "value",
                name: "累计产量(万千瓦时)",
                nameTextStyle: {
                  //color: "#ebf8ac",
                  fontSize:10  
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: true
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: "#c0c3cd"
                  }
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    // color: "#ebf8ac"
                  }
                }
              },
              {
                type: "value",
                name: "累计产量(亿千瓦时)",
                nameTextStyle: {
                  color: "#c0c3cd",
                  fontSize:10     
                },
                position: "right",
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  formatter: "{value}", //右侧Y轴文字显示
                  textStyle: {
                    color: "#c0c3cd"
                  }
                }
              },
              {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                splitArea: {
                  show: true,
                  areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                  }
                }
              }
            ],
            series: [
              {
                name: "太阳能电池（光伏电池）",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: false, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 5, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  normal: {
                    color: "#FEBE36",
                    borderWidth: 20,
                    shadowColor: "rgba(72,216,191, 0.3)",
                    shadowBlur: 100,
                    borderColor: "rgba(255,255,255,0.5)"
                  }
                  // color: "#FEBE36",
                  // borderWidth: 3,
                  // borderColor: "rgba(255,255,255,0.5)"
                },
                lineStyle: {
                  color: "rgba(255,255,255,0.5)"
                },
                areaStyle: {
                  color: "rgba(5,140,255, 0.2)"
                },
                data: [7681,
                  9453.9,
                  9605.3,
                  12862.1,
                  15728.6,
                  23405.4,
                  34364.2,
                  ]
              },
              {
                name: "太阳能发电",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        // color: "rgb(241, 171, 120)"
                        color:'#FF69B4'
                      },
                      {
                        offset: 1,
                        color: "rgb(232, 136, 134)"
                      }
                    ])
                  }
                },
                data: [393.63,
                  647.51,
                  894.45,
                  1172.15,
                  1420.98,
                  1836.64,
                  2289.99
                  ]
              },
              {
                name: "风力发电",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#00FFE3"
                      },
                      {
                        offset: 1,
                        color: "#4693EC"
                      }
                    ])    
                  }
                },
                data: [2113.2,
                  2695.4,
                  3253.2,
                  3577.4,
                  4146,
                  5667,
                  6867.2
                  ]
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

