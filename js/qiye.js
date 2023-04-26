(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .heziyi'));
    var data = [
    
        {name:"北京",value:3000.0,tooltip: '华能高碑店电厂捕集项目：3000吨/年'},
       
        {name:"吉林",value:351000.0,tooltip:'中石油吉林油田EOR项目：35万吨/年<br/>华能长春热电厂捕集项目：1000吨/年'},
       
        {name:"天津",value:100000.0,tooltip:'华能绿色煤电IGCC电厂碳捕集项目：10万吨/年'},
       
        {name:"山东",value:1000000.0,tooltip:'中石化齐鲁石油化工EOR项目：100万吨/年'},
       
        {name:"河南",value:100000.0,tooltip:'中石化华东油田EOR项目：10万吨/年'},
       
        {name:"上海",value:120000.0,tooltip:'华能石洞口电厂捕集示范项目：12吨/年'},
       
        {name:"安徽",value:50000.0,tooltip:'安徽海螺集团水泥窑烟气CO2捕集纯化项目：5万吨/年'},
       
        {name:"浙江",value:70000.0,tooltip:'中海油丽水36-1气田CO2分离项目：5万吨/年<br/>华润海丰电厂碳捕集测试平台CO2加氢制甲醇：2万吨/年'},
       
        {name:"重庆",value:10000.0,tooltip:'中电投重庆双槐电厂碳捕集示范项目矿：1万吨/年'},
       
        {name:"陕西",value:450000.0,tooltip:'延长石油煤化工CO2捕集与驱油示范项目：30万吨/年<br/>国华锦界电厂燃烧后CO2捕集与封存全流程示范项目：15万吨/年'},
       
        {name:"新疆",value:4600000.0,tooltip:'新疆油田EOR项目：60万吨/年<br/>广汇能源碳捕集、管理及驱油一体化项目：300万吨/年<br/>通源石油CCUS一体化示范项目：100万吨/年'
        },
       
        {name:"宁夏",value:400000.0,tooltip:'国家能源集团煤制油CCS项目：40万吨/年'},
       
        {name:"甘肃",value:1500000.0,tooltip:'华能陇东基地先进低能耗碳捕集工程：150万吨/年'} 
       ];
   
       var geoCoordMap = {
   
       "北京":[116.40,39.90],
       "吉林":[125.32,43.90],
       "天津":[117.20,39.12],
       "山东":[116.98,36.67],
       "河南":[113.62,34.75],
       "上海":[121.47,31.23],
       "安徽":[117.25,31.83],
       "浙江":[120.15,30.28],
       "重庆":[106.55,29.57],
       "陕西":[108.93,34.27],
       "新疆":[87.62,43.82],
       "宁夏":[106.28,38.47],
       "甘肃":[103.82,36.07]
   };
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                tooltip: data[i].tooltip
            });
        }
    }
    return res;
};

var convertData1 = function (data){
    var res1 = [];
    for (var i = 0;i < data.length; i++){
        var geoCoord = geoCoordMap[data[i].name];
        geoCoord.pop();
        if (geoCoord){
            res1.push(geoCoord.concat(data[i].value));
        }
    }
    return res1;
}
   
       var option = {
           title:{
               text:'捕碳规模',
               subtext:'13个城市',
               x:'center',
               y:'top',
               textStyle:{
                   color:'#E0FFFF',
                   fontSize:'23',
                   fontWeight:'400'
               },
               subtextStyle:{
                fontSize:'15',
               }
           },
        tooltip:{
            textStyle: {
                color: '#fff'
            },
            backgroundColor: 'rgba(16, 32, 40, 0.88)',
            borderRadius: 4,
            borderColor: '#20749e',
            formatter: function(params) {
                return params.tooltip;
            }
        },
           toolbox:{},
        //    legend:{
        //        x:'left',
        //        y:'top'
        //    },
           visualMap:{
               min:3000,
               max:4600000,
               show:true,
               inRange: {
                // color: ['#ffa07a','#fa8072','#dc143c','#ff0000']
                color: ['#FF9966','#FF6347','#FF0000']
            }
               },
           geo:{
               map:'china',
               roam:true,
               show:true,
           },
           series:[
               {
                   type:'heatmap',
                   coordinateSystem:'geo',
                   data:convertData(data),
                   name:'热力图'
               },
               {
                   type:'scatter',
                   coordinateSystem:'geo',
                   data:convertData(data),
                   name:'点'
               }
           ],
       };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    });  
  })();
(function () {
    var myChart= echarts.init(document.querySelector('.hezier'));
    let XData = ['2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']
    let valueData = {
        jfsbs: [405.5,379.1,345.1,365.1,416.1,437.1,432.4,513.3,479.3,330],
        md: [1.8,7.5,33.1,50.7,77.7,125.6,120.6,136.7,157.5,688.7],
        znhbl: [,316.67,341.33 ,53.17,53.25, 61.65,-3.98,13.35,15.22,337.27],
    }
    var option = {
        title: {
            text: '新能源汽车/燃油车',
            left: '170',
            top:'10',
            textStyle:{
                color:'#E0FFFF',
                fontSize:21,
                fontWeight:500
            } 
          },
                 tooltip: {
                   trigger: 'axis',
                   axisPointer: { // 坐标轴指示器，坐标轴触发有效
                     type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                     shadowStyle: {
                         shadowColor: 'rgba(60, 161, 246, 0.43)',
                         shadowBlur: 10
                     }
                   },
                   backgroundColor: '#FFFFFF',
                   borderColor: 'rgba(60, 161, 246, 0.43)',
                   borderWidth: 1,
                   shadowColor: ' rgba(111, 193, 253, 0.35)',
                   shadowBlur: 10,
                   formatter: function (params) {
                         // return params.value;
                         let strName1 = params[0].seriesName
                         let value1 = params[0].value
                         let strName2 = params[1].seriesName
                         let value2 = params[1].value
                         let strName3 = params[2].seriesName
                         let value3 = params[2].value
                         return '<div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 106px;">燃油车销量</span><span style="color:#5DB6FB">'+value1+'万辆</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 106px;">新能源汽车销量</span><span style="color:rgb(151, 201, 54)">'+value2+'万辆</span></div><div><span style="color:rgba(36, 36, 36, 1);display: inline-block;width: 136px;">新能源汽车同比增长</span><span style="color:rgb(230, 120, 88)">'+value3+'%</span></div>'
                   },
                   textStyle: {
                        rich: {
                         name: {
                             color: "rgba(36, 36, 36, 1)",
                             fontSize: 13,
                             align: 'center'
                         },
                         percent: {
                             fontFamily: 'DIN',
                             fontWeight: 500,
                             fontSize: 22,
                             color: '#1D91F5',
                             align: 'center'
                         },
                     }
                   }
                 },
                 grid: {
                     left: '2%',
                     right: '2%',
                     bottom: '2%',
                     top:'18%',
                     containLabel: true
                 },
                 legend: {
                     right: '4%',
                     top:'8%',
                     textStyle: {
                         color: "#666666",
                         fontSize: 14
                     },
                     itemWidth: 12,
                     itemHeight: 12,
                     itemGap: 25,
                 },
                 xAxis: {
                     type: 'category',
                     data: XData,
                    axisLine: {
                         lineStyle: {
                             color: '#cdd5e2'
                         }
                     },
                     axisLabel: {
                         textStyle: {
                             color: "#666666"
                         }
                     },
                 },
                 yAxis: [{
                         type: 'value',
                         name:'（万辆）',
                         nameTextStyle:{ color: "#666666"},
                         axisLabel: {                
                             textStyle: {
                                 color: "#666666"
                             }}    ,
                         axisLine: {
                             lineStyle: {
                                 color: '#cdd5e2'
                             }
                         },
                         splitLine: {
                             show: true,
                             lineStyle: {
                                 color: 'rgba(193, 207, 220, 1)'
                             }
                         },
                     },
                     {
                         type: "value",
                         nameTextStyle: {
                             color: "#666666"
                         },
                         position: "right",
                         axisLine: {
                             lineStyle: {
                                 color: '#cdd5e2'
                             }
                         },
                         splitLine: {
                             show: false,
                         },
                         axisLabel: {
                             show: true,
                             formatter: "{value} %", //右侧Y轴文字显示
                             textStyle: {
                                 color: "#666666"
                             }
                         }
                     }
                 ],
                 series: [{
                     name: '燃油车销量',
                     type: 'bar',
                     barWidth: '12px',
                     itemStyle: {
                         normal: {
                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                     offset: 0,
                                     color: 'rgba(123, 200, 255, 1)'
                                 }, {
                                     offset: 1,
                                     color: 'rgba(53, 157, 245, 1)'
                                 }]),
                                 barBorderRadius: 6,
                             }
                     },
                     data: valueData.jfsbs
                 },
                     {
                         name: '新能源汽车销量',
                         type: 'bar',
                         barWidth: '12px',
                         itemStyle: {
                             normal: {
                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                     offset: 0,
                                     color: 'rgba(171, 218, 83, 1)'
                                 }, {
                                     offset: 1,
                                     color: 'rgba(132, 186, 27, 1)'
                                 }]),
                                 barBorderRadius: 6,
                             }
 
                         },
                         data: valueData.md
                     },{
                         name: "新能源汽车同比增长",
                         type: "line",
                         yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                         smooth: false, //平滑曲线显示
                         symbol: "emptycircle", //标记的图形为实心圆
                         symbolSize: 9, //标记的大小
                         itemStyle: {
                             normal: {
                                 color: 'rgba(255, 119, 74, 1)',
                                 borderColor: 'rgba(255, 119, 74, 1)',  //圆点透明 边框
                                 borderWidth: 2
                             },
                         },
                         lineStyle: {
                             color: "RGBA(255, 131, 90, 0.9)"
                         },
                         data: valueData.znhbl
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