   var distribuzioneta = echarts.init(document.getElementById('distribuzioneta'), "mappingmobilities");
   var decals_eta = [{
       color: 'rgba(211, 67, 67, 0.05)',
       backgroundColor: '#FBEFE5',
       dashArrayX: [1, 1],
       dashArrayY: [1, 1]
   }, {
       color: 'rgba(0, 34, 84, 0.05);',
       backgroundColor: '#FBEFE5',
       dashArrayX: [1, 1],
       dashArrayY: [1, 1]
   }];
   option_distribuzioneta = {
       title: {},
       singleAxis: {
           //top: 50,
           //bottom: 50,
           axisTick: {
               show: true,
           },
           axisLabel: {},
           type: 'time',
           axisPointer: {
               animation: true,
               label: {
                   show: true
               }
           },
           splitLine: {
               show: true,
               lineStyle: {
                   type: 'dashed',
                   opacity: 0.2
               }
           }
       },
       aria: {
           enabled: true,
           decal: {
               show: false,
               decals: decals_eta
           }
       },
       legend: {
           //orient: 'vertical',
           //right: 10,
           //top: 'center',
           show: false
       },
       tooltip: {
           show: true
       },
       barWidth: '90%',
       barGap: '30%',
       dataset: {
           source: [
               ['eta', 'donne', 'uomini'],
               [0, 7, 70],
               [1, 0, 0],
               [2, 0, 0],
               [3, 0, 0],
               [4, 0, 0],
               [5, 0, 0],
               [6, 0, 0],
               [7, 0, 0],
               [8, 0, 0],
               [9, 1, 3],
               [10, 1, 6],
               [11, 1, 10],
               [12, 0, 0],
               [13, 1, 45],
               [14, 10, 114],
               [15, 12, 149],
               [16, 25, 218],
               [17, 19, 376],
               [18, 23, 501],
               [19, 30, 518],
               [20, 39, 565],
               [21, 41, 463],
               [22, 36, 429],
               [23, 51, 440],
               [24, 45, 449],
               [25, 33, 445],
               [26, 40, 432],
               [27, 28, 373],
               [28, 35, 357],
               [29, 27, 271],
               [30, 25, 295],
               [31, 26, 267],
               [32, 20, 263],
               [33, 20, 249],
               [34, 20, 200],
               [35, 12, 189],
               [36, 17, 170],
               [37, 17, 216],
               [38, 9, 187],
               [39, 18, 181],
               [40, 13, 165],
               [41, 14, 170],
               [42, 12, 159],
               [43, 13, 152],
               [44, 15, 165],
               [45, 12, 145],
               [46, 5, 126],
               [47, 8, 117],
               [48, 7, 147],
               [49, 8, 117],
               [50, 15, 107],
               [51, 12, 107],
               [52, 10, 117],
               [53, 4, 104],
               [54, 6, 96],
               [55, 11, 79],
               [56, 6, 82],
               [57, 2, 70],
               [58, 6, 64],
               [59, 1, 43],
               [60, 3, 55],
               [61, 4, 39],
               [62, 4, 43],
               [63, 2, 32],
               [64, 2, 27],
               [65, 1, 26],
               [66, 1, 24],
               [67, 2, 22],
               [68, 2, 11],
               [69, 1, 18],
               [70, 0, 0],
               [71, 3, 20],
               [72, 1, 9],
               [73, 1, 4],
               [74, 1, 6],
               [75, 0, 0],
               [76, 5, 1]
           ]
       },
       xAxis: {
           type: 'category',
           show: true,
           axisLine: {
               show: true
           },
           axisTick: {
               show: true
           },
           axisLabel: {
               show: true,
               interval: 9
           }
       },
       yAxis: {},
       series: [{
           type: 'bar',
           stack: 'x',
           itemStyle: {
               color: "#002254",
               opacity: 0.7,
               borderWidth: 2
           }
       }, {
           type: 'bar',
           stack: 'x',
           itemStyle: {
               color: "#D34343",
               opacity: 0.7,
               borderWidth: 2
           }
       }]
   };
   distribuzioneta.setOption(option_distribuzioneta);
   window.onresize = function() {
       distribuzioneta.resize();
   };