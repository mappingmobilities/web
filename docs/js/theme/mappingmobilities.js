                  (function(root, factory) {
                      if (typeof define === 'function' && define.amd) {
                          // AMD. Register as an anonymous module.
                          define(['exports', 'echarts'], factory);
                      } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
                          // CommonJS
                          factory(exports, require('echarts'));
                      } else {
                          // Browser globals
                          factory({}, root.echarts);
                      }
                  }(this, function(exports, echarts) {
                      var log = function(msg) {
                          if (typeof console !== 'undefined') {
                              console && console.error && console.error(msg);
                          }
                      };
                      if (!echarts) {
                          log('ECharts is not Loaded');
                          return;
                      }
                      echarts.registerTheme('mappingmobilities', {
                          "color": [
                              "#d34343",
                              "#002254"
                          ],
                          "backgroundColor": "#fbefe5",
                          "textStyle": {},
                          "title": {
                              "textStyle": {
                                  "color": "#002254"
                              },
                              "subtextStyle": {
                                  "color": "#aaaaaa"
                              }
                          },
                          "line": {
                              "itemStyle": {
                                  "borderWidth": 1
                              },
                              "lineStyle": {
                                  "width": 2
                              },
                              "symbolSize": 4,
                              "symbol": "circle",
                              "smooth": true
                          },
                          "radar": {
                              "itemStyle": {
                                  "borderWidth": 1
                              },
                              "lineStyle": {
                                  "width": 2
                              },
                              "symbolSize": 4,
                              "symbol": "circle",
                              "smooth": true
                          },
                          "bar": {
                              "itemStyle": {
                                  "barBorderWidth": "1",
                                  "barBorderColor": "#ffffff"
                              }
                          },
                          "pie": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "scatter": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "boxplot": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "parallel": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "sankey": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "funnel": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "gauge": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "candlestick": {
                              "itemStyle": {
                                  "color": "#c23531",
                                  "color0": "#314656",
                                  "borderColor": "#c23531",
                                  "borderColor0": "#314656",
                                  "borderWidth": 1
                              }
                          },
                          "graph": {
                              "itemStyle": {
                                  "borderWidth": "1",
                                  "borderColor": "#ffffff"
                              },
                              "lineStyle": {
                                  "width": "1",
                                  "color": "#9e9696"
                              },
                              "symbolSize": 4,
                              "symbol": "circle",
                              "smooth": true,
                              "color": [
                                  "#d34343",
                                  "#002254"
                              ],
                              "label": {
                                  "color": "#002254"
                              }
                          },
                          "map": {
                              "itemStyle": {
                                  "areaColor": "#eeeeee",
                                  "borderColor": "#444444",
                                  "borderWidth": 0.5
                              },
                              "label": {
                                  "color": "#000000"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "areaColor": "rgba(255,215,0,0.8)",
                                      "borderColor": "#444444",
                                      "borderWidth": 1
                                  },
                                  "label": {
                                      "color": "rgb(100,0,0)"
                                  }
                              }
                          },
                          "geo": {
                              "itemStyle": {
                                  "areaColor": "#eeeeee",
                                  "borderColor": "#444444",
                                  "borderWidth": 0.5
                              },
                              "label": {
                                  "color": "#000000"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "areaColor": "rgba(255,215,0,0.8)",
                                      "borderColor": "#444444",
                                      "borderWidth": 1
                                  },
                                  "label": {
                                      "color": "rgb(100,0,0)"
                                  }
                              }
                          },
                          "categoryAxis": {
                              "axisLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisTick": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisLabel": {
                                  "show": false,
                                  "color": "#333"
                              },
                              "splitLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": [
                                          "#ccc"
                                      ]
                                  }
                              },
                              "splitArea": {
                                  "show": false,
                                  "areaStyle": {
                                      "color": [
                                          "rgba(250,250,250,0.3)",
                                          "rgba(200,200,200,0.3)"
                                      ]
                                  }
                              }
                          },
                          "valueAxis": {
                              "axisLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisTick": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisLabel": {
                                  "show": false,
                                  "color": "#333"
                              },
                              "splitLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": [
                                          "#ccc"
                                      ]
                                  }
                              },
                              "splitArea": {
                                  "show": false,
                                  "areaStyle": {
                                      "color": [
                                          "rgba(250,250,250,0.3)",
                                          "rgba(200,200,200,0.3)"
                                      ]
                                  }
                              }
                          },
                          "logAxis": {
                              "axisLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisTick": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisLabel": {
                                  "show": false,
                                  "color": "#333"
                              },
                              "splitLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": [
                                          "#ccc"
                                      ]
                                  }
                              },
                              "splitArea": {
                                  "show": false,
                                  "areaStyle": {
                                      "color": [
                                          "rgba(250,250,250,0.3)",
                                          "rgba(200,200,200,0.3)"
                                      ]
                                  }
                              }
                          },
                          "timeAxis": {
                              "axisLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisTick": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#333"
                                  }
                              },
                              "axisLabel": {
                                  "show": false,
                                  "color": "#333"
                              },
                              "splitLine": {
                                  "show": false,
                                  "lineStyle": {
                                      "color": [
                                          "#ccc"
                                      ]
                                  }
                              },
                              "splitArea": {
                                  "show": false,
                                  "areaStyle": {
                                      "color": [
                                          "rgba(250,250,250,0.3)",
                                          "rgba(200,200,200,0.3)"
                                      ]
                                  }
                              }
                          },
                          "toolbox": {
                              "iconStyle": {
                                  "borderColor": "#002254"
                              },
                              "emphasis": {
                                  "iconStyle": {
                                      "borderColor": "rgba(223,112,27,0.27)"
                                  }
                              }
                          },
                          "legend": {
                              "textStyle": {
                                  "color": "#002254"
                              }
                          },
                          "tooltip": {
                              "axisPointer": {
                                  "lineStyle": {
                                      "color": "#cccccc",
                                      "width": 1
                                  },
                                  "crossStyle": {
                                      "color": "#cccccc",
                                      "width": 1
                                  }
                              }
                          },
                          "timeline": {
                              "lineStyle": {
                                  "color": "#ffffff",
                                  "width": "0"
                              },
                              "itemStyle": {
                                  "color": "#002254",
                                  "borderWidth": "1"
                              },
                              "controlStyle": {
                                  "color": "#002254",
                                  "borderColor": "#002254",
                                  "borderWidth": "1"
                              },
                              "checkpointStyle": {
                                  "color": "#e43c59",
                                  "borderColor": "#ffffff"
                              },
                              "label": {
                                  "color": "#002254"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "color": "#dd1b44"
                                  },
                                  "controlStyle": {
                                      "color": "#002254",
                                      "borderColor": "#002254",
                                      "borderWidth": "1"
                                  },
                                  "label": {
                                      "color": "#002254"
                                  }
                              }
                          },
                          "visualMap": {
                              "color": [
                                  "#d34343",
                                  "#002254",
                                  "#c3c1c4"
                              ]
                          },
                          "dataZoom": {
                              "backgroundColor": "rgba(47,69,84,0)",
                              "dataBackgroundColor": "rgba(47,69,84,0.3)",
                              "fillerColor": "rgba(167,183,204,0.4)",
                              "handleColor": "#a7b7cc",
                              "handleSize": "100%",
                              "textStyle": {
                                  "color": "#333333"
                              }
                          },
                          "markPoint": {
                              "label": {
                                  "color": "#002254"
                              },
                              "emphasis": {
                                  "label": {
                                      "color": "#002254"
                                  }
                              }
                          }
                      });
                  }));