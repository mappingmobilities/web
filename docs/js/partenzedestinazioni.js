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
            roam: false,
            emphasis: {
                focus: 'adjacency'
            },
            label: {
                show: true,
                position: 'bottom',
                rotate: 90,
                verticalAlign: 'left',
                distance: 30,
                fontFamily: 'DM Sans',
                color: "#FBEFE5",
                fontSize: 17
            },
            itemStyle: {
                opacity: 0
            },
            lineStyle: {
                color: "#002254",
                curveness: 0,
                opacity: 0.75,
                width: 1
            },
            emphasis: {
                lineStyle: {
                    opacity: 0.75,
                    color: "#FBEFE5"
                }
            }
        }]
    };
    partenzedestinazioniChart.setOption(option_partenzedestinazioni);
});


window.addEventListener('resize', partenzedestinazioniChart.resize);