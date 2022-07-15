   var distribuzioneta = echarts.init(document.getElementById('distribuzioneta'), "mappingmobilities");
   option_distribuzioneta = {
       title: {},
       grid: {
           show: false
       },
       singleAxis: {
           //top: 50,
           //bottom: 50,
           axisTick: {
               show: false,
           },
           axisLabel: {},
           type: 'time',
           axisPointer: {
               animation: true,
               label: {
                   show: false
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
       xAxis: {
           axisLine: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisLabel: {
               show: false
           },
           axisTick: {
               show: false
           }
       },
       yAxis: {
           axisLine: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisLabel: {
               show: false
           },
           axisTick: {
               show: false
           }
       },
       area: {
           enabled: true
       },
       legend: {
           orient: 'vertical',
           right: 10,
           top: 'center',
           show: false
       },
       tooltip: {
           show: true
       },
       dataset: {
           source: [
               ['eta', 'uomini', 'donne'],
               [0, 70, 7],
               [1, 0, 0],
               [2, 0, 0],
               [3, 0, 0],
               [4, 0, 0],
               [5, 0, 0],
               [6, 0, 0],
               [7, 0, 0],
               [8, 0, 0],
               [9, 3, 1],
               [10, 6, 1],
               [11, 10, 1],
               [12, 0, 0],
               [13, 45, 1],
               [14, 114, 10],
               [15, 149, 12],
               [16, 218, 25],
               [17, 376, 19],
               [18, 501, 23],
               [19, 518, 30],
               [20, 565, 39],
               [21, 463, 41],
               [22, 429, 36],
               [23, 440, 51],
               [24, 449, 45],
               [25, 445, 33],
               [26, 432, 40],
               [27, 373, 28],
               [28, 357, 35],
               [29, 271, 27],
               [30, 295, 25],
               [31, 267, 26],
               [32, 263, 20],
               [33, 249, 20],
               [34, 200, 20],
               [35, 189, 12],
               [36, 170, 17],
               [37, 216, 17],
               [38, 187, 9],
               [39, 181, 18],
               [40, 165, 13],
               [41, 170, 14],
               [42, 159, 12],
               [43, 152, 13],
               [44, 165, 15],
               [45, 145, 12],
               [46, 126, 5],
               [47, 117, 8],
               [48, 147, 7],
               [49, 117, 9],
               [50, 107, 15],
               [51, 107, 12],
               [52, 117, 10],
               [53, 104, 4],
               [54, 96, 6],
               [55, 79, 11],
               [56, 82, 6],
               [57, 70, 2],
               [58, 64, 6],
               [59, 43, 1],
               [60, 55, 3],
               [61, 39, 4],
               [62, 43, 4],
               [63, 32, 2],
               [64, 27, 2],
               [65, 26, 1],
               [66, 24, 1],
               [67, 22, 2],
               [68, 11, 2],
               [69, 18, 1],
               [70, 0, 0],
               [71, 20, 3],
               [72, 9, 1],
               [73, 4, 1],
               [74, 6, 1],
               [75, 0, 0],
               [76, 5, 1]
           ]
       },
       xAxis: {
           type: 'category'
       },
       yAxis: {},
       series: [{
           type: 'bar',
           stack: 'x',
           itemStyle: {
               color: "#D34343",
               opacity: 0.5
           },
           decal: {
               dashArrayX: 5
           }
       }, {
           type: 'bar',
           stack: 'x',
           itemStyle: {
               color: "#002254",
               opacity: 0.5
           }
       }]
   };
   distribuzioneta.setOption(option_distribuzioneta);
   window.onresize = function() {
       distribuzioneta.resize();
   };