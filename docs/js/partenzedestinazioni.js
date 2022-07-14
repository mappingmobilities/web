var partenzedestinazioniChart = echarts.init(document.getElementById('partenzedestinazioni'), "moretti");
partenzedestinazioniChart.showLoading();
$.getJSON('data/partenze_destinazioni.json', function(graph) {

    partenzedestinazioniChart.hideLoading();

    option_partenzedestinazioni = {
        title: {},
        tooltip: {},
        legend: [{
            data: graph.categories.map(function(a) {
                return a.name;
            })
        }],
        animationDurationUpdate: 6000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'sankey',
            orient: 'vertical',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                focus: 'adjacency',
                label: {
                    position: 'right',
                    show: true
                },
                lineStyle: {
                    width: 10
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 12],
            edgeLabel: {
                fontSize: 10
            }
        }]
    };
    partenzedestinazioniChart.setOption(option_partenzedestinazioni);
});


window.addEventListener('resize', partenzedestinazioniChart.resize);