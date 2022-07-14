 var mappaoriginiChart = echarts.init(document.getElementById('mappaorigini'), 'moretti');
 mappaoriginiChart.showLoading();
 $.get('data/comunita_valle.json', function(trentinoJson) {
     mappaoriginiChart.hideLoading();
     echarts.registerMap('TRENTINO', trentinoJson, {

     });
     option = {
         tooltip: {
             trigger: 'item',
             showDelay: 2,
             transitionDuration: 0.3
         },
         visualMap: {
             min: 5, //0.5, //5,
             max: 3500, //30, //3500,
             inRange: {
                 color: ['#002254', '#c3c1c4', '#9da2af', '#4e515a']
             },
             text: ['Massimo', 'Minimo'],
             //calculable: true,
             visible: false,
             type: 'piecewise'
         },
         select: {
             disabled: true,
         },
         series: [{
             mapValueCalculation: 'average',
             type: 'map',
             roam: false,
             map: 'TRENTINO',
             emphasis: {
                 disabled: true,
             },
             data: [{
                 name: 'Giudicarie',
                 value: 12, //0.10 //12
             }, {
                 name: 'Alta Valsugana e Bersntol',
                 value: 3319 //27.98 //
             }, {
                 name: 'Altopiano della Paganella',
                 value: 301 //3.30 //
             }, {
                 name: 'Piana Rotaliana',
                 value: 518 //4.37 //
             }, {
                 name: 'Val di Sole',
                 value: 57 //0.48 //
             }, {
                 name: 'Vallagarina',
                 value: 33 //0.28 //
             }, {
                 name: 'Val di Fiemme',
                 value: 9 //0.08 //
             }, {
                 name: 'Primiero',
                 value: 59 //0.50 //
             }, {
                 name: 'Val di Cembra',
                 value: 1996 ///16.83 //
             }, {
                 name: 'Valle dei Laghi',
                 value: 1045 //8.81 //
             }, {
                 name: "Valle delĺ'Adige",
                 value: 2920 //24.62 //
             }, {
                 name: 'Val di Non',
                 value: 1322 //11.14, //,
             }, {
                 name: 'Valsugana e Tesino',
                 value: 93 //0.78 //
             }, {
                 name: 'Valle di Cembra',
                 value: 34 //0.29 // 
             }, {
                 name: 'Altipiani Cimbri',
                 value: 13 //0.11 //
             }, {
                 name: 'Alto Garda e Ledro',
                 value: 22 //0.19 //
             }, {
                 name: 'Val di Fassa',
                 value: 19 //0.16 //
             }]
         }]
     };
     mappaoriginiChart.setOption(option);
     window.addEventListener('resize', mappaoriginiChart.resize);

 });