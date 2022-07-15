    var genereChart = echarts.init(document.getElementById('graficogenere'), "vintage", {
        renderer: 'canvas'
    });
    option = {
        aria: {
            show: true
        },
        roam: false,
        nodeClick: false,
        title: {},
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // Try 'horizontal'
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        series: [{
            type: 'treemap',
            stillShowZeroSum: false,
            data: [{
                value: 11496,
                name: 'uomini',
                percentage: 92.67,
                label: {
                    align: 'left',
                    offset: [10, 20],
                    show: true,
                    formatter: function(params) {
                        return [
                            params.data.name,
                            params.data.percentage + '%',
                            params.data.value
                        ].join('\n');
                    },
                    fontFamily: 'DM Sans',
                    fontSize: '17',
                    position: 'insideTopLeft',
                    overflow: 'truncate',
                    color: "#002254"
                }
            }, {
                value: 908,
                name: 'donne',
                percentage: 7.33,
                label: {
                    align: 'left',
                    offset: [10, 20],
                    show: true,
                    formatter: function(params) {
                        return [
                            params.data.name,
                            params.data.percentage + '%',
                            params.data.value
                        ].join('\n');
                    },
                    fontFamily: 'DM Sans',
                    fontSize: '17',
                    position: 'insideTopLeft',
                    overflow: 'truncate',
                    color: "#002254"
                }
            }]
        }]
    };

    // Display the chart using the configuration items and data just specified.
    genereChart.setOption(option);
    window.onresize = function() {
        genereChart.resize();
    };