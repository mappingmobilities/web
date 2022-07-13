var xhr = new XMLHttpRequest();
// Assume the theme name is "vintage".
$.getJSON('data/mappingmobilitiestheme.json', function(themeJSON) {
    echarts.registerTheme('vintage', JSON.parse(themeJSON));
    var chart = echarts.init(dom, 'vintage');
});