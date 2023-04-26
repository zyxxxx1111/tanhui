//1.5度
(function () {
  var myChart= echarts.init(document.querySelector('.zheyi'));
  const backgroundColor = 'transparent';
  const color = ['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05']; //2个以上的series就需要用到color数组
  const title = {
    text: '1.5摄氏度',
    textStyle: {
      color: '#fff',
      fontSize: 16,
    },
    padding: 0,
    top: 15,
    left: 160,
  };
  const legend = {
    //data，就是取得每个series里面的name属性。
    show: false,
    orient: 'horizontal',
    icon: 'circle', //图例形状
    padding: 0,
    top: 35,
    right: 460,
    itemWidth: 14, //小圆点宽度
    itemHeight: 14, // 小圆点高度
    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
      fontSize: 14,
      color: '#ffffff',
    },
  };
  const tooltip = {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  };
  let seriesData = [
    { name: '达峰于2023', data: [423.32,
    384.09,
    308.68,
    232.26,
    167.65,
    117.60,
    80.79,
    54.63,
    36.48,
    24.11,
    15.80,
    10.29,
    6.66,
    4.28,
    2.75,
    1.75,
    1.11,
    0.71,
    0.45,
    0.28,
    0.18,
    0.11,
    0.07
    ] },
    { name: '达峰于2024', data: [384.10,423.32,
      359.82,
      255.44,
      166.22,
      102.74,
      61.37,
      35.78,
      20.49,
      11.57,
      6.46,
      3.57,
      1.96,
      1.07,
      0.58,
      0.31,
      0.17,
      0.09,
      0.05,
      0.03,
      0.01,
      0.01,
      0.00
      ] },
    { name: '达峰于2025', data: [308.70,359.80,423.32,
      305.56,
      163.35,
      77.38,
      34.32,
      14.61,
      6.04,
      2.45,
      0.98,
      0.38,
      0.15,
      0.06,
      0.02,
      0.01,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00
      ] },
    { name: '达峰于2026', data: [232.3,255.4,305.6,423.32,
      154.52,
      30.07,
      4.89,
      0.73,
      0.10,
      0.01,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00,
      0.00
      ] }
  ];
  const commonConfigFn = (index) => {
    return {
      type: 'line',
      smooth: true,
      symbol: 'none', //空心小圆点。线条小圆点形状
      symbolSize: 6, //小圆点大小
      itemStyle: {
        //还是小圆点设置
      },
  
      label: {
        show: false, //不显示小圆点上的label文字
      },
      lineStyle: {
        width: 1, //线条设置
       
      },
  
      areaStyle: {
        //填充线条下面的面积区域颜色。（areaStyle只是锦上添花）
        opacity: 0.2,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: color[index], // 上处的颜色
            },
            {
              offset: 1,
              color: 'transparent', // 下处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    };
  };
  
  seriesData = seriesData.map((item, index) => ({ ...item, ...commonConfigFn(index) }));
  option = {
    backgroundColor,
    color,
    title,
    tooltip,
    legend,
    grid: {
      top: '10%',
      left: '1%',
      right: '3%',
      bottom: '5%',
      containLabel: true,
    },
  
    xAxis: {
      show: true, //显示x轴+x轴label文字
      type: 'category',
      boundaryGap: false, //从Y轴出发，这个false很好的
      axisLine: {
        show: true, //显示x坐标轴轴线
        lineStyle: {
          color: 'rgba(255,255,255,.4)',
        },
      },
      axisTick: {
        show: false, //不显示x坐标1cm刻度
      },
      axisLabel: {
        color: '#ffffff', //x轴label文字颜色
      },
      splitLine: {
        show: false, //不显示grid竖向分割线
      },
  
      data: [2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030,
        2031,
        2032,
        2033,
        2034,
        2035,
        2036,
        2037,
        2038,
        2039,
        2040,
        2041,
        2042,
        2043,
        2044,
        2045
        ],
    },
    yAxis: {
      type: 'value',
      name: "亿吨",
      nameTextStyle:{
        color:'#fff'
      },
      axisLabel: {
        color: '#ffffff',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.4)',
        },
      },
      splitLine: {
        show: false, //不显示grid水平分割线
      },
    },
  
    series: seriesData,
  };
  
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  });  
})();
//2度
(function () {
  var myChart= echarts.init(document.querySelector('.zheer'));
  const backgroundColor = 'transparent';
  const color = ['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05','pink']; //2个以上的series就需要用到color数组
  const title = {
    text: '2摄氏度',
    textStyle: {
      color: '#fff',
      fontSize: 16,
    },
    padding: 0,
    top: 15,
    left: 185,
  };
  const legend = {
    //data，就是取得每个series里面的name属性。
    show: false,
    orient: 'horizontal',
    icon: 'circle', //图例形状
    padding: 0,
    top: 35,
    right: 460,
    itemWidth: 14, //小圆点宽度
    itemHeight: 14, // 小圆点高度
    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
      fontSize: 14,
      color: '#ffffff',
    },
  };
  const tooltip = {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  };
  let seriesData = [
    { name: '达峰于2023', data: [423.32,
      421.91,
      417.43,
      410.42,
      401.38,
      390.72,
      378.79,
      365.91,
      352.34,
      338.30,
      323.99,
      309.55,
      295.12,
      280.83,
      266.75,
      252.95,
      239.51,
      226.47,
      213.85,
      201.70,
      190.01,
      178.82,
      168.11,
      157.90,
      148.18,
      138.94,
      130.18,
      121.88,
      114.02,
      106.61,
      99.61,
      93.01,
      86.80
      
    ] },
    { name: '达峰于2024', data: [421.9,423.32,
      421.46,
      416.33,
      408.56,
      398.67,
      387.12,
      374.31,
      360.57,
      346.17,
      331.35,
      316.32,
      301.24,
      286.25,
      271.46,
      256.96,
      242.82,
      229.10,
      215.85,
      203.09,
      190.85,
      179.13,
      167.95,
      157.31,
      147.20,
      137.62,
      128.55,
      119.99,
      111.91,
      104.29,
      97.13,
      90.41,
      84.10
      
      ] },
    { name: '达峰于2025', data: [417.4,421.5,423.32,
      421.27,
      415.65,
      407.17,
      396.44,
      383.97,
      370.20,
      355.50,
      340.17,
      324.48,
      308.64,
      292.83,
      277.18,
      261.82,
      246.84,
      232.31,
      218.27,
      204.78,
      191.85,
      179.51,
      167.76,
      156.60,
      146.03,
      136.04,
      126.61,
      117.74,
      109.39,
      101.56,
      94.22,
      87.35,
      80.93
      
      ] },
    { name: '达峰于2026', data: [410.4,416.3,421.3,423.32,
      421.06,
      414.87,
      405.58,
      393.89,
      380.39,
      365.55,
      349.80,
      333.47,
      316.84,
      300.15,
      283.57,
      267.26,
      251.33,
      235.88,
      220.97,
      206.66,
      192.97,
      179.92,
      167.54,
      155.81,
      144.73,
      134.30,
      124.49,
      115.29,
      106.67,
      98.61,
      91.09,
      84.07,
      77.54
      
      ] },
      { name: '达峰于2027', data: [410.4,408.6,415.7,421.1,423.32,
        420.80,
        413.96,
        403.75,
        390.97,
        376.30,
        360.28,
        343.37,
        325.95,
        308.32,
        290.73,
        273.36,
        256.38,
        239.90,
        224.00,
        208.76,
        194.21,
        180.39,
        167.29,
        154.93,
        143.30,
        132.38,
        122.16,
        112.61,
        103.70,
        95.41,
        87.70,
        80.55,
        73.93
        ] },
        { name: '达峰于2028', data: [390.7,398.7,407.2,414.9,420.8,423.32,
          420.50,
          412.89,
          401.61,
          387.60,
          371.61,
          354.27,
          336.09,
          317.49,
          298.79,
          280.25,
          262.09,
          244.44,
          227.43,
          211.14,
          195.62,
          180.91,
          167.02,
          153.96,
          141.71,
          130.27,
          119.60,
          109.67,
          100.46,
          91.93,
          84.04,
          76.77,
          70.06 
          ] },
          { name: '达峰于2029', data: [378.8,387.1,396.4,405.6,414.0,420.5,423.32,
            420.15,
            411.63,
            399.11,
            383.67,
            366.18,
            347.37,
            327.80,
            307.92,
            288.09,
            268.59,
            249.62,
            231.33,
            213.84,
            197.21,
            181.50,
            166.71,
            152.87,
            139.94,
            127.91,
            116.76,
            106.44,
            96.92,
            88.15,
            80.08,
            72.69,
            65.91
            ] }
  ];
  const commonConfigFn = (index) => {
    return {
      type: 'line',
      smooth: true,
      //symbol: 'emptyCircle', 空心小圆点。线条小圆点形状
      symbol:'none',
      symbolSize: 6, //小圆点大小
      itemStyle: {
//还是小圆点设置
      },
  
      label: {
        show: false, //不显示小圆点上的label文字
      },
      lineStyle: {
        width: 1, //线条设置
       
      },
  
      areaStyle: {
        //填充线条下面的面积区域颜色。（areaStyle只是锦上添花）
        opacity: 0.2,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: color[index], // 上处的颜色
            },
            {
              offset: 1,
              color: 'transparent', // 下处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    };
  };
  
  seriesData = seriesData.map((item, index) => ({ ...item, ...commonConfigFn(index) }));
  option = {
    backgroundColor,
    color,
    title,
    tooltip,
    legend,
    grid: {
      top: '10%',
      left: '1%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
  
    xAxis: {
      show: true, //显示x轴+x轴label文字
      type: 'category',
      boundaryGap: false, //从Y轴出发，这个false很好的
      axisLine: {
        show: true, //显示x坐标轴轴线
        lineStyle: {
          color: 'rgba(255,255,255,.4)',
        },
      },
      axisTick: {
        show: false, //不显示x坐标1cm刻度
      },
      axisLabel: {
        color: '#ffffff', //x轴label文字颜色
      },
      splitLine: {
        show: false, //不显示grid竖向分割线
      },
  
      data: [2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030,
        2031,
        2032,
        2033,
        2034,
        2035,
        2036,
        2037,
        2038,
        2039,
        2040,
        2041,
        2042,
        2043,
        2044,
        2045,
        2046,
        2047,
        2048,
        2049,
        2050,
        2051,
        2052,
        2053,
        2054,
        2055
        ],
    },
    yAxis: {
      type: 'value',
      name: "亿吨",
      nameTextStyle:{
        color:'#fff'
      },
      axisLabel: {
        color: '#ffffff',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.4)',
        },
      },
      splitLine: {
        show: false, //不显示grid水平分割线
      },
    },
  
    series: seriesData,
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