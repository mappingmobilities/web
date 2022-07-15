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
                      echarts.registerTheme('moretti', {
                          "color": [
                              "#c3c1c4",
                              "#9da2af",
                              "#65748e"
                          ],
                          "backgroundColor": "#002254",
                          "textStyle": {},
                          "title": {
                              "textStyle": {
                                  "color": "#fbefe5"
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
                              "symbol": "emptyCircle",
                              "smooth": false
                          },
                          "radar": {
                              "itemStyle": {
                                  "borderWidth": 1
                              },
                              "lineStyle": {
                                  "width": 2
                              },
                              "symbolSize": 4,
                              "symbol": "emptyCircle",
                              "smooth": false
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
                                  "width": 1,
                                  "color": "#aaa"
                              },
                              "symbolSize": 4,
                              "symbol": "emptyCircle",
                              "smooth": false,
                              "color": [
                                  "#c3c1c4",
                                  "#9da2af",
                                  "#65748e"
                              ],
                              "label": {
                                  "color": "#fbefe5"
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
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisTick": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisLabel": {
                                  "show": true,
                                  "color": "#fbefe5"
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
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisTick": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisLabel": {
                                  "show": true,
                                  "color": "#fbefe5"
                              },
                              "splitLine": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": [
                                          "#ffffff"
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
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisTick": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisLabel": {
                                  "show": true,
                                  "color": "#fbefe5"
                              },
                              "splitLine": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": [
                                          "#ffffff"
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
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisTick": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": "#ffffff"
                                  }
                              },
                              "axisLabel": {
                                  "show": true,
                                  "color": "#fbefe5"
                              },
                              "splitLine": {
                                  "show": true,
                                  "lineStyle": {
                                      "color": [
                                          "#ffffff"
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
                                  "borderColor": "#fbefe5"
                              },
                              "emphasis": {
                                  "iconStyle": {
                                      "borderColor": "#ffffff"
                                  }
                              }
                          },
                          "legend": {
                              "textStyle": {
                                  "color": "#fbefe5"
                              }
                          },
                          "tooltip": {
                              "axisPointer": {
                                  "lineStyle": {
                                      "color": "#ffffff",
                                      "width": 1
                                  },
                                  "crossStyle": {
                                      "color": "#ffffff",
                                      "width": 1
                                  }
                              }
                          },
                          "timeline": {
                              "lineStyle": {
                                  "color": "#ffffff",
                                  "width": 1
                              },
                              "itemStyle": {
                                  "color": "#c3c1c4",
                                  "borderWidth": 1
                              },
                              "controlStyle": {
                                  "color": "#ffffff",
                                  "borderColor": "#ffffff",
                                  "borderWidth": "1"
                              },
                              "checkpointStyle": {
                                  "color": "#65748e",
                                  "borderColor": "#929eb5"
                              },
                              "label": {
                                  "color": "#fbefe5"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "color": "#ffffff"
                                  },
                                  "controlStyle": {
                                      "color": "#ffffff",
                                      "borderColor": "#ffffff",
                                      "borderWidth": "1"
                                  },
                                  "label": {
                                      "color": "#fbefe5"
                                  }
                              }
                          },
                          "visualMap": {
                              "color": [
                                  "#c3c1c4",
                                  "#9da2af",
                                  "#65748e"
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
                                  "color": "#fbefe5"
                              },
                              "emphasis": {
                                  "label": {
                                      "color": "#fbefe5"
                                  }
                              }
                          }
                      });
                  }));