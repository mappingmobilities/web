var partenzedestinazioniChart = echarts.init(document.getElementById('partenzedestinazioni'), "moretti");
partenzedestinazioniChart.showLoading();
var cicciola;

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
            selectedMode: false,
            roam: false,
            nodeGap: 1,
            label: {
                show: true,
                position: 'left',
                rotate: 90,
                verticalAlign: 'right',
                distance: 0,
                fontFamily: 'DM Sans',
                color: "#FBEFE5",
                fontSize: 17
            },
            itemStyle: {
                opacity: 0
            },
            lineStyle: {
                color: "#FBEFE5",
                curveness: 0,
                opacity: 0,
                width: 1
            }
        }]
    };
    partenzedestinazioniChart.setOption(option_partenzedestinazioni);
    partenzedestinazioniChart.on('mouseover', function(params) {
        // Print name in console
        cicciola = params;

        console.log(params.dataIndex);
    });
});


window.addEventListener('resize', partenzedestinazioniChart.resize);