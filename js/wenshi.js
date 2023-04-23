(function () {
    var myChart= echarts.init(document.querySelector('.zhuti .hezi'));
    option = {
        grid: {
            top: '1%',
            left:'5%',
            right:'5%',
            bottom: '1%'
          },
          tooltip: {
            trigger: "item",
            formatter: "{b} : {c} 公斤",
            axisPointer: {
              type: "shadow",
              label: {
                show: true
              }
            }
          },
        legend: {
          bottom: 10,
          textStyle:{
            color:'white'
          }
        },
        series: [
          {
            name: '每1000千卡食品的温室气体排放量',
            type: 'pie',
            height:'100%',
            width:'100%',
            radius: [50, 250],
            center: ['50%', '45%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
                // { value: 99.48, name: "牛肉（牛群）" },
                // { value: 46.65, name: "黑巧克力" },
                        { value: 12.53, name: "羊肉" },
                        { value: 12.20, name: "牛肉（奶牛群）" },
                        { value:11.00, name: "西红柿" },
                        { value: 7.61, name: "鱼（养殖）" },
                        { value: 6.17, name: "奶酪" },
                        { value: 5.34, name: "禽肉" },
                        { value: 5.25, name: "牛奶" },
                        { value: 5.15, name: "猪肉" },
                        { value: 3.24, name: "蛋" },
                        { value: 1.43, name: "香蕉" },
                        { value: 1.36, name: "木薯" },
                        { value: 1.22, name: "柑橘类水果" },
                        { value: 1.20, name: "米" },
                        { value: 1.17, name: "根菜类"}
                    //  { value: 0.95, name: "燕麦粥" },
                    //     { value: 0.90, name: "苹果" },
                    //     { value: 0.83, name: "棕榈油" },
                    //      { value: 0.63, name: "土豆" },
                    //      { value: 0.59, name: "小麦和黑麦" },
                    //     { value: 0.56, name: "花生" },
                    //     { value: 0.52, name: "其它豆类" },
                    //     { value: 0.38, name: "玉米" },
                    //     { value: 0.28, name: "豌豆" },
                    //    { value: 0.07, name: "坚果" }    
            ],
            labelLine: {
                normal: {
                  length: 5,
                //   length2: 35,
                  lineStyle: {
                    width: 1
                  }
                }
              }

          }
        ]
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