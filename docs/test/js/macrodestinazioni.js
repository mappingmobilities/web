var macrodestinazioniChart = echarts.init(document.getElementById('macrodestinazioni'), "mappingmobilities");
var option_macrodestinazioni;

option_macrodestinazioni = {
    legend: {
        show: false
    },
    tooltip: {
        show: false
    },
    label: {
        show: false
    },
    emphasis: {
        disabled: true
    },
    select: {
        disabled: false
    },
    selectedMode: 'false',
    leafDepth: 0,
    series: [{
        type: 'treemap',
        breadcrumb: {
            show: false
        },
        roam: false,
        nodeClick: false,
        data: [{
                name: 'Interna',
                value: 6756,
                percentage: 38.7,
                colorAlpha: 0,
                itemStyle: {
                    color: '#FBEFE5',
                    borderColor: "#D34343",
                    borderWidth: 1
                },
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
                }
            },
            {
                name: 'Europa',
                value: 9895,
                percentage: 56.7,
                itemStyle: {
                    color: '#FBEFE5',
                    borderColor: "#D34343",
                    borderWidth: 1
                },
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
            }, {
                name: 'Extra Europa',
                value: 798,
                percentage: 4.6,
                itemStyle: {
                    color: '#FBEFE5',
                    borderColor: "#D34343",
                    borderWidth: 1
                },
                label: {
                    align: 'right',
                    show: true,
                    offset: [-10, -20],
                    formatter: function(params) {
                        return [
                            params.data.name,
                            params.data.percentage + '%',
                            params.data.value
                        ].join('\n');
                    },
                    fontFamily: 'DM Sans',
                    fontSize: '17',
                    position: 'bottom',
                    verticalAlign: 'none',
                    overflow: 'none',
                    padding: -30,
                    color: "#D34343"
                },
            }
        ]
    }]
};

option_macrodestinazioni && macrodestinazioniChart.setOption(option_macrodestinazioni);
window.addEventListener('resize', macrodestinazioniChart.resize);
