var genereChart = echarts.init(document.getElementById('graficogenere'), "mappingmobilities");
var option_genere;
var decals = [{
    color: 'rgba(211, 67, 67, 0.05)',
    backgroundColor: '#FBEFE5',
    dashArrayX: [1, 1],
    dashArrayY: [1, 1]
}, {
    color: 'rgba(0, 34, 84, 0.05);',
    backgroundColor: '#FBEFE5',
    dashArrayX: [1, 1],
    dashArrayY: [1, 1]
}];

option_genere = {
    aria: {
        enabled: true,
        decal: {
            show: true,
            decals: decals
        }
    },
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
    selectedMode: false,
    breadcrumb: {
        show: false
    },
    series: [{
        type: 'treemap',
        breadcrumb: {
            show: false
        },
        roam: false,
        nodeClick: false,
        data: [{
                name: 'uomini',
                value: 11496,
                percentage: 92.67,
                itemStyle: {
                    color: '#FBEFE5',
                    borderColor: "#D34343",
                    borderWidth: 2
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
                colorAlpha: 1,
                value: 908,
                name: 'donne',
                percentage: 7.33,
                itemStyle: {
                    //color: "rgba(0, 34, 84, 1)",
                    color: 'white',
                    borderWidth: 2,
                    borderColor: "#002254",
                    opacity: 1
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
                    color: "#002254"
                },
            }
        ]
    }]
};

option_genere && genereChart.setOption(option_genere);
window.addEventListener('resize', genereChart.resize);