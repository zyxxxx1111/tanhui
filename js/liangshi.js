(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .hezi'));
    var colorList = [ 'rgba(248, 201, 109, 1)','rgba(255,192,203,1)'];
    // , 'rgba(138, 122, 209, 1)', 'rgba(28, 187, 210, 1)'
    var __COUNT__ = 1;
    let __DEFDATA__ = [
        {
            code: '410100',
            dw: '%',
            name: '零售',
            pcode: 1,
            value: 3,
        },
        {
            code: '410200',
            dw: '%',
            name: '包装',
            pcode: 1,
            value: 5,
        },
        {
            code: '410300',
            dw: '%',
            name: '运输',
            pcode: 1,
            value: 6,
        },
        {
            code: '410400',
            dw: '%',
            name: '食品加工',
            pcode: 1,
            value: 4,
        },
        {
            code: '410500',
            dw: '%',
            name: '牲畜和鱼类养殖场',
            pcode: 1,
            value: 30,
        },
        {
            code: '410600',
            dw: '%',
            name: '动物饲料作物',
            pcode: 1,
            value: 6,
        },
        {
            code: '410700',
            dw: '%',
            name: '人类食物中的农作物',
            pcode: 1,
            value: 21,
        },
        {
            code: '410600',
            dw: '%',
            name: '人类食物的土地使用',
            pcode: 1,
            value: 8,
        },
        {
            code: '410700',
            dw: '%',
            name: '牲畜土地利用',
            pcode: 1,
            value: 16,
        },
        {
            code: '410700',
            dw: '%',
            name: '野生捕鱼业',
            pcode: 1,
            value: 1,
        },
        {
            code: 2,
            dw: '',
            name: '非食物',
            pcode: '74%',
            value: 284.6,    
    }     
    ];
    let __DEFIND__ = 0;
    
    option = {
        color: [ 'rgba(248, 201, 109, 1)','rgba(250,128,114,1)'],
        grid: {
            top: '13%',
            left:'13%',
            right:'13%',
            bottom: '13%'
          },
        tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                var data = params.data;
                return data.name + ': ' + data.value+'%';
            },
            textStyle: {
                color: '#fff'
            },
            backgroundColor: 'rgba(16, 32, 40, 0.88)',
            borderRadius: 4,
            borderColor: '#20749e',
        },
        legend: {
            type: 'scroll',
            icon: 'rect',
            orient: 'vertical',
            top: '56%',
            right: '1%',
            itemGap: 12,
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                color: '#088AD5',
                fontSize: 14,
            },
            data: [
                {
                    code: '410100',
                    dw: '%',
                    name: '零售',
                    pcode: 1,
                    value: 3,
                },
                {
                    code: '410200',
                    dw: '%',
                    name: '包装',
                    pcode: 1,
                    value: 5,
                },
                {
                    code: '410300',
                    dw: '%',
                    name: '运输',
                    pcode: 1,
                    value: 6,
                },
                {
                    code: '410400',
                    dw: '%',
                    name: '食品加工',
                    pcode: 1,
                    value: 4,
                },
                {
                    code: '410500',
                    dw: '%',
                    name: '牲畜和鱼类养殖场',
                    pcode: 1,
                    value: 30,
                },
                {
                    code: '410600',
                    dw: '%',
                    name: '动物饲料作物',
                    pcode: 1,
                    value: 6,
                },
                {
                    code: '410700',
                    dw: '%',
                    name: '人类食物中的农作物',
                    pcode: 1,
                    value: 21,
                },
                {
                    code: '410600',
                    dw: '%',
                    name: '人类食物的土地使用',
                    pcode: 1,
                    value: 8,
                },
                {
                    code: '410700',
                    dw: '%',
                    name: '牲畜土地利用',
                    pcode: 1,
                    value: 16,
                },
                {
                    code: '410700',
                    dw: '%',
                    name: '野生捕鱼业',
                    pcode: 1,
                    value: 1,
                }
            ]
        },
        series: [
            {
                name: '',
                type: 'pie',
                // center: ['32%', '50%'],
                center: ['45%', '75%'],
                radius: [0, '40%'],
                startAngle:135, //起始角度
                label: {
                    color: '#383874',
                    fontSize: 14,
                    fontWeight: 'bold',
                    position: 'inner',
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 2,
                    },
                },
               
                data: [
                    {
                        code: 1,
                        dw: '',
                        name: '食物',
                        pcode: '26%',
                        value: 100,
                    },
                    {
                        code: 2,
                        dw: '',
                        name: '非食物',
                        pcode: '74%',
                        value: 284.6,
                    }
                ],
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        var data = params.data;
                        var percent = data.pcode;
                        return data.name + ': ' + percent;
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    backgroundColor: 'rgba(16, 32, 40, 0.88)',
                    borderRadius: 4,
                    borderColor: '#20749e',
                }
            },
            {
                name: '各方面占比',
                type: 'pie',
                center: ['45%', '75%'],
                radius: ['46%', '120%'],
                startAngle:135, //起始角度
                label: {
                    show: true,
                    interval: 0,
                    rotate: 10,//值>0向右倾斜，值<0则向左倾斜
                    textStyle:{
                        color:'#fff',
                        fontSize:12
                    }
                },
                labelLine: {
                    show: false,
                },
                itemStyle: {
                    color: function (params) {
                        let _rgb_ = colorList[__DEFIND__].slice(0, 20);
    
                        if (params.dataIndex == __COUNT__ - 1) {
                            return colorList[__DEFIND__];
                        }
                        if (params.dataIndex >= __COUNT__) {
                            return _rgb_ + (1 - (params.dataIndex - __COUNT__ + 1) * 0.1) + ')';
                        }
                        return colorList[params.dataIndex];
                    },
                },
                data: __DEFDATA__,
            },
        ],
    }; 
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    });  
  })();
document.querySelector(".icon-home2").addEventListener("click", function () {
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