//1.旭日图
(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .hezi'));
    var data = [
        {
            name: '环保行业',
            itemStyle: { color: '#187a2f' },
            children: [
                { name: '2016', value: 1, itemStyle: { color:'rgb(142, 182, 70)' } ,
                children:[{name:'5.1万亿元',value:1,itemStyle:{color: 'rgb(142, 182, 70)'}}]},
                { name: '2017', value: 1, itemStyle: { color: '#a2b029' } ,
                children:[{name:'5.8万亿元',value:1,itemStyle:{color: '#a2b029'}}]},
                { name: '2018', value: 1, itemStyle: { color: 'rgb(94, 154, 128)' } ,
                children:[{name:'7.3万亿元',value:1,itemStyle:{color: 'rgb(94, 154, 128)'}}]},
                { name: '2019', value: 1, itemStyle: { color: '#62aa3c' } ,
                children:[{name:'7.5万亿元',value:1,itemStyle:{color: '#62aa3c'}}]},
                { name: '2020', value: 1, itemStyle: { color: '#3aa255' } ,
                children:[{name:'7.9万亿元',value:1,itemStyle:{color: '#3aa255'}}]},
                { name: '2021', value: 1, itemStyle: { color: '#03a653' } ,
                children:[{name:'8.7万亿元',value:1,itemStyle:{color: '#03a653'}}]},
                { name: '2022', value: 1, itemStyle: { color: '#718933' } ,
                children:[{name:'10万亿元',value:1,itemStyle:{color: '#718933'}}]},
            ],
        },   
        {
            name: '环保设备行业',
            itemStyle: { color: '#da1d23' },
            children: [
                { name: '2016', value: 1, itemStyle: { color: 'rgb(224, 113, 156)' } ,
                children:[{name:'3327亿元',value:1,itemStyle:{color: 'rgb(224, 113, 156)'}}]},
                { name: '2017', value: 1, itemStyle: { color: 'rgb(231, 91, 104)' } ,
                children:[{name:'3438.1亿元',value:1,itemStyle:{color: 'rgb(231, 91, 104)'}}]},
                { name: '2018', value: 1, itemStyle: { color: 'rgb(212, 90, 89)' } ,
                children:[{name:'3559亿元',value:1,itemStyle:{color: 'rgb(212, 90, 89)'}}]},
                { name: '2019', value: 1, itemStyle: { color: '#dd4c51' } ,
                children:[{name:'3673.4亿元',value:1,itemStyle:{color: '#dd4c51'}}]},
                { name: '2020', value:1, itemStyle: { color: '#c94a44' } ,
                children:[{name:'3789.4亿元',value:1,itemStyle:{color: '#c94a44'}}]},
                { name: '2021', value: 1, itemStyle: { color: '#a5446f' } ,
                children:[{name:'3905.4亿元',value:1,itemStyle:{color: '#a5446f'}}]},
                { name: '2022', value: 1, itemStyle: { color: '#e73451' } ,
                children:[{name:'4033.8亿元',value:1,itemStyle:{color: '#e73451'}}]},
            ],
        },
        {
            name: '环保治理投资',
            itemStyle: { color: '#e65832' },
            children: [
                { name: '2016', value: 1, itemStyle: { color: 'rgb(223, 189, 126)' } ,
                children:[{name:'9220亿元',value:1,itemStyle:{color: 'rgb(223,189,126)'}}]},
                { name: '2017', value:1, itemStyle: { color: 'rgb(201, 73, 48)' } ,
                children:[{name:'9539亿元',value:1,itemStyle:{color: 'rgb(201, 73, 48)'}}]},
                { name: '2018', value:1, itemStyle: { color: 'rgb(190, 134, 99)' } ,
                children:[{name:'9921亿元',value:1,itemStyle:{color: 'rgb(190, 134, 99)'}}]},
                { name: '2019', value:1, itemStyle: { color: 'rgb(221, 175, 97)' } ,
                children:[{name:'10288亿元',value:1,itemStyle:{color: 'rgb(221, 175, 97)'}}]},
                { name: '2020', value: 1, itemStyle: { color: 'rgb(187, 118, 76)' } ,
                children:[{name:'10654亿元',value:1,itemStyle:{color: 'rgb(187, 118, 76)'}}]},
                { name: '2021', value: 1, itemStyle: { color: 'rgb(199, 136, 105)' } ,
                children:[{name:'11021亿元',value:1,itemStyle:{color: 'rgb(199, 136, 105)'}}]},
                { name: '2022', value: 1, itemStyle: { color: 'rgb(176, 151, 51)' } ,
                children:[{name:'11836亿元',value:1,itemStyle:{color: 'rgb(176, 151, 51)'}}]},
            ],
        },
    ];
    option = {
        title: {
            text: '环保市场规模',
            top:'5%',
            left:'6%',
            textStyle: {
                color:'#E0FFFF',
                fontSize: 23,
                align: 'center',
                fontWeight:500
            },
        },
        series: {
            type: 'sunburst',
            data: data,
            radius: [0, '95%'],
            sort: null,
    
            emphasis: {
                focus: 'ancestor',
            },
    
            levels: [
                {},
                {
                    r0: '15%',
                    r: '35%',
                    itemStyle: {
                        borderWidth: 2,
                    },
                    label: {
                        rotate: 'tangential',
                    },
                },
                {
                    r0: '35%',
                    r: '70%',
                    label: {
                        align: 'right',
                    },
                },
                {
                    r0: '70%',
                    r: '72%',
                    label: {
                        position: 'outside',
                        padding: 3,
                        silent: false,
                    },
                    itemStyle: {
                        borderWidth: 3,
                    },
                },
            ],
        },
    };  
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();
    });  
  })();
//2.饼图
(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .shanxing'));
    var color = ['#ff4343', '#f69846', '#f6d54a', '#45dbf7', '#f69846', '#44aff0', '#4777f5', '#5045f6', '#ad46f3', '#f845f1'];
    let names = ["固废处理", "水污染防治", "大气污染防治", "环境监测", "土壤修复", "其他"];
    let data1 = [46.7, 36, 9.6, 5.9, 1.5, 0.3]
    let list = []
    let total = 0
    for (let i in data1) {
        total += data1[i]
    }   
    let placeHolderStyle = {
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
    };
    
    let rich = {
        white: {
            align: 'center',
            padding: [3, 0]
        }
    };
    
    for (let i in data1) {
        list.push({
            value: data1[i],
            name: names[i],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i],
                    color: color[i]
                }
            }
        }, {
            value: total / 30,
            name: '',
            itemStyle: placeHolderStyle
        })
    }  
    let func = (params) => {
        let percent = ((params.value / total) * 100).toFixed(1)
        let name = params.name.replace(/\n/g, '')
        if (params.name !== '') {
            return name + '\n{white|' + percent + '%}'
        } else {
            return ''
        }
    } 
    option = {
        backgroundColor: 'transparent',
        title: {
            text: '环保项目类型',
            left: '30',
            top:'30',
            textStyle:{
                color:'#E0FFFF',
                fontSize:23,
                fontWeight:500
            } 
          },
        tooltip: {
            show: false
        },
        legend: {
            orient: 'vertical',
            data: names,
            icon: 'circle',
            right: '5px',
            top: '10px',
            textStyle: {
                color: '#fff',
                fontSize: 15
            }
        },
        series: [{
                name: '',
                type: 'pie',
                clockWise: false,
                startAngle: '120',
                center: ['50%', '50%'],
                radius: ['50%', '51%'],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: func,
                            rich: rich
                        },
                        labelLine: {
                            length: 15,
                            length2: 15,
                            show: true,
                            color: '#00ffff'
                        }
                    }
                },
                data: list,
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function(idx) {
                    return idx * 50;
                }
            },
            {
                name: '',
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['49%', '49%'],
                itemStyle: {
                    color: 'transparant'
                },
                startAngle: '10',
                data: [{
                    value: total,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                            formatter: '{c|{c}} {b|条记录}',
                            rich: {
                                c: {
                                    color: 'rgb(98,137,169)',
                                    fontSize: 50,
                                    fontWeight: 'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: 'rgb(98,137,169)',
                                    fontSize: 40,
                                    lineHeight: 5
                                }
                            },
                            textStyle: {
                                fontSize: 28,
                                fontWeight: 'bold'
                            },
                            position: 'center'
                        }
                    }
                }]
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
  