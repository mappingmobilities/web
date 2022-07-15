var partenzedestinazioniChart = echarts.init(document.getElementById('partenzedestinazioni'), "moretti");
partenzedestinazioniChart.showLoading();
$.getJSON('data/partenze_destinazioni.json', function(graph) {

    partenzedestinazioniChart.hideLoading();

    option_partenzedestinazioni = {
        title: {},
        tooltip: {},
        animationDurationUpdate: 6000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'sankey',
            orient: 'vertical',
            data: graph.nodes,
            links: graph.links,
            roam: true,
            emphasis: {
                focus: 'adjacency'
            }
        }]
    };
    partenzedestinazioniChart.setOption(option_partenzedestinazioni);
});


window.addEventListener('resize', partenzedestinazioniChart.resize);