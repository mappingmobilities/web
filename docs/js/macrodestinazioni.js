    var macrodestinazioniChart = echarts.init(document.getElementById('macrodestinazioni'), "vintage", {
        renderer: 'canvas',
        useDirtyRect: false
    });

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
        selectedMode: 'false',
        series: [{
            type: 'treemap',
            roam: false,
            nodeClick: false,
            data: [{
                    name: 'Interna',
                    value: 6756,
                    percentage: 39,
                    colorAlpha: 0,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#D34343",
                        borderWidth: 1
                    },
                    label: {
                        align: 'left',
                        offset: [30, 40],
                        show: true,
                        formatter: '{b} {c} {@percentage}%',
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
                    percentage: 57,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#D34343",
                        borderWidth: 1
                    },
                    label: {
                        align: 'left',
                        show: true,
                        formatter: '{b} {c} {@percentage}%',
                        fontFamily: 'DM Sans',
                        fontSize: '17',
                        position: 'insideTopLeft',
                        overflow: 'truncate',
                        color: "#D34343"
                    },
                }, {
                    name: 'Extra Europa',
                    value: 798,
                    percentage: 4,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#D34343",
                        borderWidth: 1
                    },
                    label: {
                        show: true,
                        formatter: '{b} {c} {@percentage}%',
                        fontFamily: 'DM Sans',
                        fontSize: '17',
                        position: 'bottom',
                        overflow: 'truncate',
                        color: "#D34343"
                    },
                }
            ]
        }]
    };

    option_macrodestinazioni && macrodestinazioniChart.setOption(option_macrodestinazioni);
    window.addEventListener('resize', macrodestinazioniChart.resize);