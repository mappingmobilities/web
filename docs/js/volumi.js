var volumiChart = echarts.init(document.getElementById('volumi'), "moretti");
/*, {
        renderer: 'canvas',
        useDirtyRect: false
    });
*/
var option_volumi;

option_volumi = {
    backgroundColor: '#FBEFE5', // 
    grid: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontFamily: 'DM Sans',
            fontSize: 17,
            color: '#002254'
        },
        backgroundColor: '#FBEFE5',
        opacity: 0.5,
        formatter: function(params) {
            scrivimi = params;
            anno = 0;
            toprint = "";
            totale = 0;
            for (i = 0; i < params.length; i++) {
                values = params[i];
                anno = values.data[0];
                npassaporti = parseInt(values.data[1]);
                totale = totale + npassaporti;
                if (npassaporti > 0) {
                    stato = values.data[2];
                    toprint += stato + ": " + npassaporti + "<br/>";
                }
            }
            header = "<p class='small'>" + totale + " passaporti rilasciati<br/> nell'" + anno + "<br/><br/>";
            return header + toprint + "</p>";
        },
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#D34343',
                width: 1,
                type: 'dotted',
                opacity: 0.5
            }
        }
    },
    emphasis: {
        shadowBlur: 10,
    },
    label: {
        show: true
    },
    legend: {
        type: 'scroll',
        itemWidth: 4,
        itemHeight: 4,
        orient: 'horizontal',
        data: ["Africa", "America", "Asia",
            "Austria", "Austria-Ungheria", "Bosnia Erzegovina",
            "Europa", "Esteri d'Europa", "Francia", "Germania",
            "Italia", "Svizzera", "Turchia", "Ungheria"
        ],
        textStyle: {
            fontFamily: 'DM Sans',
            fontSize: 8,
            color: '#002254'
        },
        padding: [370, 0, 0, 0]
    },
    singleAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            color: "#D34343",
            fontSize: 17,
            fontFamily: 'DM Sans',
            fontWeight: 400,
            lineHeight: 5
        },
        type: 'time',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                opacity: 1,
                color: '#FBEFE5',
                width: 1,
                z: 1,
            }
        }
    },
    series: [{
        type: 'themeRiver',
        z: 100,
        colorBy: 'series',
        label: {
            show: false
        },
        itemStyle: {
            color: "#D34343"
        },
        singleAxisIndex: 0,
        selectedMode: 'series',
        data: [
            ['1878', 0, 'Africa'],
            ['1879', 0, 'Africa'],
            ['1880', 0, 'Africa'],
            ['1881', 0, 'Africa'],
            ['1882', 3, 'Africa'],
            ['1883', 0, 'Africa'],
            ['1884', 0, 'Africa'],
            ['1885', 0, 'Africa'],
            ['1886', 0, 'Africa'],
            ['1887', 0, 'Africa'],
            ['1888', 0, 'Africa'],
            ['1889', 7, 'Africa'],
            ['1890', 0, 'Africa'],
            ['1891', 3, 'Africa'],
            ['1892', 1, 'Africa'],
            ['1893', 1, 'Africa'],
            ['1894', 2, 'Africa'],
            ['1895', 1, 'Africa'],
            ['1896', 0, 'Africa'],
            ['1897', 0, 'Africa'],
            ['1898', 2, 'Africa'],
            ['1899', 1, 'Africa'],
            ['1900', 0, 'Africa'],
            ['1878', 2, 'America'],
            ['1879', 10, 'America'],
            ['1880', 10, 'America'],
            ['1881', 12, 'America'],
            ['1882', 54, 'America'],
            ['1883', 19, 'America'],
            ['1884', 3, 'America'],
            ['1885', 9, 'America'],
            ['1886', 13, 'America'],
            ['1887', 11, 'America'],
            ['1888', 62, 'America'],
            ['1889', 270, 'America'],
            ['1890', 193, 'America'],
            ['1891', 172, 'America'],
            ['1892', 32, 'America'],
            ['1893', 31, 'America'],
            ['1894', 21, 'America'],
            ['1895', 41, 'America'],
            ['1896', 25, 'America'],
            ['1897', 20, 'America'],
            ['1898', 11, 'America'],
            ['1899', 15, 'America'],
            ['1900', 9, 'America'],
            ['1878', 0, 'Asia'],
            ['1879', 1, 'Asia'],
            ['1880', 1, 'Asia'],
            ['1881', 1, 'Asia'],
            ['1882', 2, 'Asia'],
            ['1883', 0, 'Asia'],
            ['1884', 1, 'Asia'],
            ['1885', 1, 'Asia'],
            ['1886', 1, 'Asia'],
            ['1887', 0, 'Asia'],
            ['1888', 0, 'Asia'],
            ['1889', 9, 'Asia'],
            ['1890', 2, 'Asia'],
            ['1891', 2, 'Asia'],
            ['1892', 1, 'Asia'],
            ['1893', 0, 'Asia'],
            ['1894', 2, 'Asia'],
            ['1895', 2, 'Asia'],
            ['1896', 1, 'Asia'],
            ['1897', 0, 'Asia'],
            ['1898', 2, 'Asia'],
            ['1899', 1, 'Asia'],
            ['1900', 1, 'Asia'],
            ['1878', 9, 'Austria'],
            ['1879', 4, 'Austria'],
            ['1880', 8, 'Austria'],
            ['1881', 6, 'Austria'],
            ['1882', 460, 'Austria'],
            ['1883', 103, 'Austria'],
            ['1884', 38, 'Austria'],
            ['1885', 17, 'Austria'],
            ['1886', 12, 'Austria'],
            ['1887', 18, 'Austria'],
            ['1888', 43, 'Austria'],
            ['1889', 377, 'Austria'],
            ['1890', 397, 'Austria'],
            ['1891', 911, 'Austria'],
            ['1892', 179, 'Austria'],
            ['1893', 258, 'Austria'],
            ['1894', 232, 'Austria'],
            ['1895', 233, 'Austria'],
            ['1896', 101, 'Austria'],
            ['1897', 71, 'Austria'],
            ['1898', 56, 'Austria'],
            ['1899', 52, 'Austria'],
            ['1900', 26, 'Austria'],
            ['1878', 202, 'Austria-Ungheria'],
            ['1879', 170, 'Austria-Ungheria'],
            ['1880', 199, 'Austria-Ungheria'],
            ['1881', 192, 'Austria-Ungheria'],
            ['1882', 622, 'Austria-Ungheria'],
            ['1883', 243, 'Austria-Ungheria'],
            ['1884', 65, 'Austria-Ungheria'],
            ['1885', 58, 'Austria-Ungheria'],
            ['1886', 54, 'Austria-Ungheria'],
            ['1887', 30, 'Austria-Ungheria'],
            ['1888', 269, 'Austria-Ungheria'],
            ['1889', 1187, 'Austria-Ungheria'],
            ['1890', 889, 'Austria-Ungheria'],
            ['1891', 794, 'Austria-Ungheria'],
            ['1892', 376, 'Austria-Ungheria'],
            ['1893', 306, 'Austria-Ungheria'],
            ['1894', 216, 'Austria-Ungheria'],
            ['1895', 194, 'Austria-Ungheria'],
            ['1896', 328, 'Austria-Ungheria'],
            ['1897', 316, 'Austria-Ungheria'],
            ['1898', 252, 'Austria-Ungheria'],
            ['1899', 227, 'Austria-Ungheria'],
            ['1900', 193, 'Austria-Ungheria'],
            ['1878', 61, 'Bosnia Erzegovina'],
            ['1879', 13, 'Bosnia Erzegovina'],
            ['1880', 5, 'Bosnia Erzegovina'],
            ['1881', 2, 'Bosnia Erzegovina'],
            ['1882', 18, 'Bosnia Erzegovina'],
            ['1883', 21, 'Bosnia Erzegovina'],
            ['1884', 1, 'Bosnia Erzegovina'],
            ['1885', 1, 'Bosnia Erzegovina'],
            ['1886', 0, 'Bosnia Erzegovina'],
            ['1887', 0, 'Bosnia Erzegovina'],
            ['1888', 3, 'Bosnia Erzegovina'],
            ['1889', 12, 'Bosnia Erzegovina'],
            ['1890', 4, 'Bosnia Erzegovina'],
            ['1891', 4, 'Bosnia Erzegovina'],
            ['1892', 4, 'Bosnia Erzegovina'],
            ['1893', 2, 'Bosnia Erzegovina'],
            ['1894', 0, 'Bosnia Erzegovina'],
            ['1895', 0, 'Bosnia Erzegovina'],
            ['1896', 1, 'Bosnia Erzegovina'],
            ['1897', 0, 'Bosnia Erzegovina'],
            ['1898', 3, 'Bosnia Erzegovina'],
            ['1899', 0, 'Bosnia Erzegovina'],
            ['1900', 0, 'Bosnia Erzegovina'],
            ['1878', 28, 'Europa'],
            ['1879', 24, 'Europa'],
            ['1880', 34, 'Europa'],
            ['1881', 35, 'Europa'],
            ['1882', 52, 'Europa'],
            ['1883', 50, 'Europa'],
            ['1884', 41, 'Europa'],
            ['1885', 39, 'Europa'],
            ['1886', 41, 'Europa'],
            ['1887', 86, 'Europa'],
            ['1888', 598, 'Europa'],
            ['1889', 1358, 'Europa'],
            ['1890', 1244, 'Europa'],
            ['1891', 548, 'Europa'],
            ['1892', 221, 'Europa'],
            ['1893', 215, 'Europa'],
            ['1894', 214, 'Europa'],
            ['1895', 306, 'Europa'],
            ['1896', 243, 'Europa'],
            ['1897', 193, 'Europa'],
            ['1898', 159, 'Europa'],
            ['1899', 172, 'Europa'],
            ['1900', 155, 'Europa'],
            ['1878', 5, "Esteri d'Europa"],
            ['1879', 2, "Esteri d'Europa"],
            ['1880', 13, "Esteri d'Europa"],
            ['1881', 38, "Esteri d'Europa"],
            ['1882', 20, "Esteri d'Europa"],
            ['1883', 12, "Esteri d'Europa"],
            ['1884', 5, "Esteri d'Europa"],
            ['1885', 2, "Esteri d'Europa"],
            ['1886', 0, "Esteri d'Europa"],
            ['1887', 8, "Esteri d'Europa"],
            ['1888', 10, "Esteri d'Europa"],
            ['1889', 175, "Esteri d'Europa"],
            ['1890', 15, "Esteri d'Europa"],
            ['1891', 13, "Esteri d'Europa"],
            ['1892', 13, "Esteri d'Europa"],
            ['1893', 1, "Esteri d'Europa"],
            ['1894', 1, "Esteri d'Europa"],
            ['1895', 2, "Esteri d'Europa"],
            ['1896', 1, "Esteri d'Europa"],
            ['1897', 0, "Esteri d'Europa"],
            ['1898', 1, "Esteri d'Europa"],
            ['1899', 0, "Esteri d'Europa"],
            ['1900', 0, "Esteri d'Europa"],
            ['1878', 10, 'Francia'],
            ['1879', 8, 'Francia'],
            ['1880', 7, 'Francia'],
            ['1881', 8, 'Francia'],
            ['1882', 299, 'Francia'],
            ['1883', 142, 'Francia'],
            ['1884', 8, 'Francia'],
            ['1885', 0, 'Francia'],
            ['1886', 2, 'Francia'],
            ['1887', 2, 'Francia'],
            ['1888', 52, 'Francia'],
            ['1889', 109, 'Francia'],
            ['1890', 50, 'Francia'],
            ['1891', 73, 'Francia'],
            ['1892', 16, 'Francia'],
            ['1893', 54, 'Francia'],
            ['1894', 12, 'Francia'],
            ['1895', 4, 'Francia'],
            ['1896', 4, 'Francia'],
            ['1897', 2, 'Francia'],
            ['1898', 1, 'Francia'],
            ['1899', 1, 'Francia'],
            ['1900', 1, 'Francia'],
            ['1878', 78, 'Germania'],
            ['1879', 71, 'Germania'],
            ['1880', 67, 'Germania'],
            ['1881', 60, 'Germania'],
            ['1882', 768, 'Germania'],
            ['1883', 202, 'Germania'],
            ['1884', 20, 'Germania'],
            ['1885', 15, 'Germania'],
            ['1886', 19, 'Germania'],
            ['1887', 10, 'Germania'],
            ['1888', 173, 'Germania'],
            ['1889', 853, 'Germania'],
            ['1890', 417, 'Germania'],
            ['1891', 865, 'Germania'],
            ['1892', 342, 'Germania'],
            ['1893', 289, 'Germania'],
            ['1894', 163, 'Germania'],
            ['1895', 144, 'Germania'],
            ['1896', 121, 'Germania'],
            ['1897', 60, 'Germania'],
            ['1898', 48, 'Germania'],
            ['1899', 52, 'Germania'],
            ['1900', 19, 'Germania'],
            ['1878', 75, 'Italia'],
            ['1879', 77, 'Italia'],
            ['1880', 87, 'Italia'],
            ['1881', 67, 'Italia'],
            ['1882', 346, 'Italia'],
            ['1883', 181, 'Italia'],
            ['1884', 41, 'Italia'],
            ['1885', 22, 'Italia'],
            ['1886', 18, 'Italia'],
            ['1887', 28, 'Italia'],
            ['1888', 115, 'Italia'],
            ['1889', 401, 'Italia'],
            ['1890', 163, 'Italia'],
            ['1891', 242, 'Italia'],
            ['1892', 89, 'Italia'],
            ['1893', 93, 'Italia'],
            ['1894', 74, 'Italia'],
            ['1895', 60, 'Italia'],
            ['1896', 39, 'Italia'],
            ['1897', 36, 'Italia'],
            ['1898', 17, 'Italia'],
            ['1899', 18, 'Italia'],
            ['1900', 8, 'Italia'],
            ['1878', 13, 'Svizzera'],
            ['1879', 28, 'Svizzera'],
            ['1880', 26, 'Svizzera'],
            ['1881', 24, 'Svizzera'],
            ['1882', 364, 'Svizzera'],
            ['1883', 122, 'Svizzera'],
            ['1884', 14, 'Svizzera'],
            ['1885', 3, 'Svizzera'],
            ['1886', 5, 'Svizzera'],
            ['1887', 2, 'Svizzera'],
            ['1888', 77, 'Svizzera'],
            ['1889', 232, 'Svizzera'],
            ['1890', 95, 'Svizzera'],
            ['1891', 93, 'Svizzera'],
            ['1892', 53, 'Svizzera'],
            ['1893', 75, 'Svizzera'],
            ['1894', 30, 'Svizzera'],
            ['1895', 26, 'Svizzera'],
            ['1896', 21, 'Svizzera'],
            ['1897', 22, 'Svizzera'],
            ['1898', 9, 'Svizzera'],
            ['1899', 13, 'Svizzera'],
            ['1900', 8, 'Svizzera'],
            ['1878', 0, 'Turchia'],
            ['1879', 1, 'Turchia'],
            ['1880', 1, 'Turchia'],
            ['1881', 0, 'Turchia'],
            ['1882', 5, 'Turchia'],
            ['1883', 6, 'Turchia'],
            ['1884', 0, 'Turchia'],
            ['1885', 0, 'Turchia'],
            ['1886', 0, 'Turchia'],
            ['1887', 0, 'Turchia'],
            ['1888', 1, 'Turchia'],
            ['1889', 0, 'Turchia'],
            ['1890', 2, 'Turchia'],
            ['1891', 3, 'Turchia'],
            ['1892', 0, 'Turchia'],
            ['1893', 1, 'Turchia'],
            ['1894', 0, 'Turchia'],
            ['1895', 0, 'Turchia'],
            ['1896', 0, 'Turchia'],
            ['1897', 0, 'Turchia'],
            ['1898', 0, 'Turchia'],
            ['1899', 0, 'Turchia'],
            ['1900', 0, 'Turchia'],
            ['1878', 0, 'Ungheria'],
            ['1879', 1, 'Ungheria'],
            ['1880', 1, 'Ungheria'],
            ['1881', 0, 'Ungheria'],
            ['1882', 323, 'Ungheria'],
            ['1883', 76, 'Ungheria'],
            ['1884', 1, 'Ungheria'],
            ['1885', 0, 'Ungheria'],
            ['1886', 1, 'Ungheria'],
            ['1887', 0, 'Ungheria'],
            ['1888', 0, 'Ungheria'],
            ['1889', 59, 'Ungheria'],
            ['1890', 42, 'Ungheria'],
            ['1891', 7, 'Ungheria'],
            ['1892', 5, 'Ungheria'],
            ['1893', 86, 'Ungheria'],
            ['1894', 83, 'Ungheria'],
            ['1895', 82, 'Ungheria'],
            ['1896', 11, 'Ungheria'],
            ['1897', 6, 'Ungheria'],
            ['1898', 3, 'Ungheria'],
            ['1899', 2, 'Ungheria'],
            ['1900', 1, 'Ungheria']
        ]
    }]
};
var cicciola;

if (option_volumi && typeof option_volumi === 'object') {
    volumiChart.setOption(option_volumi);
    volumiChart.on('mouseover', function(params) {
        // Print name in console
        cicciola = params;
        console.log(option_volumi.series[0].data[params.dataIndex][2]);
    });
}

window.addEventListener('resize', volumiChart.resize); // Resize chart on window resizewi.