    var genereChart = echarts.init(document.getElementById('graficogenere'), "mappingmobilities", {
        renderer: 'canvas'
    });
    option = {
        aria: {
            show: true
        },
        colorAlpha: [0.5, 0.5],
        roam: false,
        nodeClick: false,
        title: {},
        tooltip: {
            trigger: 'item'
        },
        itemStyle: {
            color: "#D34343",
            opacity: 0.5
        },
        legend: {
            // Try 'horizontal'
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        series: [{
            itemStyle: {
                color: "#D34343",
                opacity: 0.5
            },
            roam: false,
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
                },
                itemStyle: {
                    color: "#D34343",
                    opacity: 0.5
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
                    color: "#D34343"
                },
                itemStyle: {
                    color: "#002254",
                    opacity: 0.1
                }
            }]
        }]
    };

    // Display the chart using the configuration items and data just specified.
    genereChart.setOption(option);
    window.onresize = function() {
        genereChart.resize();
    };