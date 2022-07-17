var partenzedestinazioniChart = echarts.init(document.getElementById('partenzedestinazioni'), "moretti");
partenzedestinazioniChart.showLoading();
var cicciola;

$.getJSON('data/partenze_destinazioni.json', function(graph) {

    partenzedestinazioniChart.hideLoading();

    option_partenzedestinazioni = {
        title: {},
        tooltip: {
            trigger: "item",
            lineStyle: {
                emphasis: {
                    lineStyle: {
                        opacity: 1
                    }
                }
            }
        },
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
        nodename = params.data.name;
        links = option_partenzedestinazioni.series[0].links;
        new_links = Array();
        for (i = 0; i < links.length; i++) {
            link = links[i];
            if (link.source == nodename || link.target == nodename) {
                link.lineStyle.opacity = 1;
            } else {
                link.lineStyle.opacity = 0;
            }
            new_links.push(link);
        }
        option_partenzedestinazioni.series[0].links = new_links;
        partenzedestinazioniChart.setOption(option_partenzedestinazioni);
    });
});


window.addEventListener('resize', partenzedestinazioniChart.resize);