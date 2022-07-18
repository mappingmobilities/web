var partenzedestinazioniChart = echarts.init(document.getElementById('partenzedestinazioni'), "moretti");
partenzedestinazioniChart.showLoading();
var ciccy;
$.getJSON('data/partenze_destinazioni.json', function(graph) {

    partenzedestinazioniChart.hideLoading();

    option_partenzedestinazioni = {
        title: {},
        tooltip: {
            formatter: function(params) {
                nodename = params.data.name;
                links = option_partenzedestinazioni.series[0].links;
                from = nodename;
                to = "";
                totale = 0;
                for (i = 0; i < links.length; i++) {
                    link = links[i];
                    if (link.source == nodename || link.target == nodename) {
                        if (link.source == nodename) {
                            m = link.target;
                        } else {
                            m = link.source;
                        }
                        m = m + ": " + link.weights;
                        totale += link.weights;
                        to += "<br/>" + m;
                    }
                }
                return from + "<br/>totale " + totale + "<br/>" + to; // + ': ' + params.label.rotate;
            },
            textStyle: {
                fontFamily: 'DM Sans',
                fontSize: 12,
                color: '#002254'
            },
            backgroundColor: '#FBEFE5',
            opacity: 0.3,
            trigger: "item",
            lineStyle: {
                emphasis: {
                    lineStyle: {
                        opacity: 1
                    }
                }
            }
        },
        left: "auto",
        right: "auto",
        bottom: "auto",
        top: "auto",
        animationDurationUpdate: 6000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'sankey',
            orient: 'vertical',
            data: graph.nodes,
            links: graph.links,
            selectedMode: false,
            roam: false,
            draggable: false,
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
        nodename = params.data.name;
        links = option_partenzedestinazioni.series[0].links;
        new_links = Array();
        for (i = 0; i < links.length; i++) {
            link = links[i];
            if (link.source == nodename || link.target == nodename) {
                link.lineStyle.opacity = 0.5;
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