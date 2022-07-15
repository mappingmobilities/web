    var mestieriChart = echarts.init(document.getElementById('graficomestieri'), 'vintage');
    option = {
        roam: false,
        nodeClick: false,
        series: [{
            type: 'treemap',
            tooltip: {
                formatter: function(info) {
                    var value = info.value;
                    var treePathInfo = info.treePathInfo;
                    var treePath = [];
                    for (var i = 1; i < treePathInfo.length; i++) {
                        treePath.push(treePathInfo[i].name);
                    }
                    return [
                        '<div class="tooltip-title">' +
                        formatUtil.encodeHTML(treePath.join('/')) +
                        '</div>',
                        'total: ' + formatUtil.addCommas(value)
                    ].join('');
                }
            },
            data: [{
                    name: 'precario',
                    value: 8857,
                    percentage: 74.2,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                },
                {
                    name: 'agricoltura e allevamento',
                    value: 752,
                    percentage: 6.3,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                },
                {
                    name: 'artigianale',
                    value: 752,
                    percentage: 6.3,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'manuale',
                    value: 522,
                    percentage: 4.3,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
                        borderWidth: 1
                    },
                }, {
                    name: 'commercio',
                    value: 393,
                    percentage: 3.3,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'altro',
                    value: 226,
                    percentage: 1.89,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                },
                {
                    name: 'intellettuale e tecnico',
                    value: 161,
                    percentage: 1.34,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                },
                {
                    name: 'domestico',
                    value: 128,
                    percentage: 1.07,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'artistico',
                    value: 36,
                    percentage: 0.30,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'militare',
                    value: 33,
                    percentage: 0.27,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'impiegatizio',
                    value: 33,
                    percentage: 0.27,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'ecclesiastico',
                    value: 27,
                    percentage: 0.27,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }, {
                    name: 'sanitario',
                    value: 16,
                    percentage: 0.13,
                    itemStyle: {
                        color: '#FBEFE5',
                        borderColor: "#002254",
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
                        color: "#002254"
                    }
                }
            ]
        }]
    };

    mestieriChart.setOption(option);
    window.addEventListener('resize', mestieriChart.resize);