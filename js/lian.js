(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .hezi'));
    // mock 数据
const dataArr = {
    xdata: ['牛肉（牛群）', '黑巧克力', '羊肉和牛肉', '牛肉（奶牛群）', '咖啡', '虾（养殖）','奶酪','鱼（养殖）','猪肉','禽肉','棕榈油','橄榄油','蛋'],
    result: [
        { name: '土地利用变化', data: [23.24
            ,25.81
           ,0.65
            ,1.27
            ,3.82
            ,0.33
            ,4.47
            ,1.19
            ,2.24
            ,3.51
            ,2.76
            ,-0.32
            ,0.71
            ] },
        { name: '农场', data: [56.23,
            6.69,
            27.03,
            21.92,
            10.75,
            13.45,
            13.10,
            8.06,
            2.48,
            0.93,
            1.88,
            3.67,
            1.32
            ] },
        { name: '动物饲料', data: [2.68,
            0,
            3.28,
            3.50,
            0,
            4.03,
            2.35,
            1.83,
            4.30,
            2.45,
            0,
            0,
            2.20,
            0
            ] },
        { name: '加工', data: [1.81,
            0.33,
            1.54,
            1.55,
            0.61,
            0,
            0.74,
            0.04,
            0.42,
            0.61,
            1.13,
            0.57,
            0,
            0.07
            ] },
        { name: '运输', data: [0.49,
            0.11,
            0.68,
            0.59,
            0.13,
            0.33,
            0.14,
            0.25,
            0.50,
            0.38,
            0.19,
            0.41,
            0.08,
            0.10
            ] },
        { name: '零售', data: [0.23,
            0.04,
            0.30,
            0.25,
            0.05,
            0.35,
            0.33,
            0.09,
            0.28,
            0.24,
            0.04,
            0.04,
            0.04,
            0.06
            ] },
        { name: '包装', data: [0.35,
            0,
            0,
            0.37,
            1.69,
            0.54,
            0.17,
            0.14,
            0.43,
            0,
            0.79,
            0.74,
            0.16,
            0.08
            ] },
        { name: '损失', data: [14.44,
            0,
            0,
            3.85,
            11.47,
            7.83,
            2.58,
            2.03,
            1.66,
            0,
            0.55,
            0.32,
            0.15,
            0.61
            ] }
    ]
}
// 头部菱形
const diamondData = dataArr.result.reduce((pre, cur, index) => {
    pre[index] = cur.data.map((el, id) => el + ( pre[index - 1] ? pre[index - 1][id] : 0))
    return pre
}, [])

// color
const color = [
    [{ offset: 0, color: "#FCDB00", }, { offset: 0.5, color: "#FCDB00", }, { offset: 0.5, color: "#F7B500", }, { offset: 1, color: "#F7B500", }],
    [{ offset: 0, color: "#7297FF", }, { offset: 0.5, color: "#7297FF", }, { offset: 0.5, color: "#364BEC", }, { offset: 1, color: "#364BEC", }],
    [{ offset: 0, color: "#00C4FF", }, { offset: 0.5, color: "#00C4FF", }, { offset: 0.5, color: "#0091FF", }, { offset: 1, color: "#0091FF", }],
    [{ offset: 0, color: "#79EDDC", }, { offset: 0.5, color: "#79EDDC", }, { offset: 0.5, color: "#44D7B6", }, { offset: 1, color: "#44D7B6", }],
    [{ offset: 0, color: "#D72552", }, { offset: 0.5, color: "#D72552", }, { offset: 0.5, color: "#F572A4", }, { offset: 1, color: "#F572A4", }],
    [{ offset: 0, color: "#FA6400", }, { offset: 0.5, color: "#FA6400", }, { offset: 0.5, color: "#FD9D00", }, { offset: 1, color: "#FD9D00", }], 
    [{ offset: 0, color: "#B620E0", }, { offset: 0.5, color: "#B620E0", }, { offset: 0.5, color: "#EC66FF", }, { offset: 1, color: "#EC66FF", }],
    [{ offset: 0, color: "#6236FF", }, { offset: 0.5, color: "#6236FF", }, { offset: 0.5, color: "#9B66FF", }, { offset: 1, color: "#9B66FF", }],
]

// series
let series = dataArr.result.reduce((p, c, i, array) => {
    p.push({
        z: i + 1,
        stack: '总量',
        type: 'bar',
        name: c.name,
        barGap: '-100%',
        barWidth: 30,
        data: c.data,
        itemStyle:{ color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[i] } },
    },{
        z: i + 10,
        type: 'pictorialBar',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [30, 10],
        data: diamondData[i],
        itemStyle: { color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[i] } },
        tooltip: { show: false },
    })

    // 是否最后一个了？
    if (p.length  === (array.length) * 2) {
        p.push({
            z: array.length * 2,
            type: "pictorialBar",
            symbolPosition: "start",
            data: dataArr.result[0].data,
            symbol: "diamond",
            symbolOffset: ["0%", "50%"],
            symbolSize: [30, 10],
            itemStyle: { color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[0]} },
            tooltip: { show: false },
        })
        return p
    }

    return p
}, [])

// tooltip
const tooltip = { trigger: "axis" }

// legend
const legend = {
    data: dataArr.result.map(item => item.name),
    textStyle: { fontSize: 14, color: '#fff'},
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    bottom: '0.2%',
}
// grid
const grid = { top: '10%', left: '10%', right: '3%', bottom: '17%'}

// xAxis
const xAxis = { 
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgb(255,255,255,0.5)' } },
    axisLabel: {
        textStyle: { fontSize: 10, color: '#fff'  },
        interval: 0,
        rotate: 40, //值>0向右倾斜，值<0则向左倾斜
      },
    data: dataArr.xdata
}

// yAxis
const yAxis = [{ 
    splitLine: { lineStyle: { color: 'rgb(255,255,255,0.5)' } },
    axisLine: { show: false, },
    axisLabel: { textStyle: { fontSize: 15, color: '#fff' } ,formatter: '{value}公斤'},
}]

// 渲染
option = { tooltip, xAxis, yAxis, series, grid, legend, backgroundColor:'transparent' }
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