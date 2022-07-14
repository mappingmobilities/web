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
                              "#9da2af",
                              "#c3c1c4",
                              "#3f5578"
                          ],
                          "backgroundColor": "#002254",
                          "textStyle": {},
                          "title": {
                              "textStyle": {
                                  "color": "#fbefe5"
                              },
                              "subtextStyle": {
                                  "color": "#fbefe5"
                              }
                          },
                          "line": {
                              "itemStyle": {
                                  "borderWidth": "3"
                              },
                              "lineStyle": {
                                  "width": "4"
                              },
                              "symbolSize": "8",
                              "symbol": "emptyCircle",
                              "smooth": false
                          },
                          "radar": {
                              "itemStyle": {
                                  "borderWidth": "3"
                              },
                              "lineStyle": {
                                  "width": "4"
                              },
                              "symbolSize": "8",
                              "symbol": "emptyCircle",
                              "smooth": false
                          },
                          "bar": {
                              "itemStyle": {
                                  "barBorderWidth": "0",
                                  "barBorderColor": "#ffffff"
                              }
                          },
                          "pie": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "scatter": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "boxplot": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "parallel": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "sankey": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "funnel": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "gauge": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              }
                          },
                          "candlestick": {
                              "itemStyle": {
                                  "color": "#e6a0d2",
                                  "color0": "transparent",
                                  "borderColor": "#e6a0d2",
                                  "borderColor0": "#3fb1e3",
                                  "borderWidth": "2"
                              }
                          },
                          "graph": {
                              "itemStyle": {
                                  "borderWidth": "0",
                                  "borderColor": "#ffffff"
                              },
                              "lineStyle": {
                                  "width": "2",
                                  "color": "#ffffff"
                              },
                              "symbolSize": "8",
                              "symbol": "emptyCircle",
                              "smooth": false,
                              "color": [
                                  "#9da2af",
                                  "#c3c1c4",
                                  "#3f5578"
                              ],
                              "label": {
                                  "color": "#fbefe5"
                              }
                          },
                          "map": {
                              "itemStyle": {
                                  "areaColor": "#eeeeee",
                                  "borderColor": "#aaaaaa",
                                  "borderWidth": 0.5
                              },
                              "label": {
                                  "color": "#ffffff"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "areaColor": "rgba(63,177,227,0.25)",
                                      "borderColor": "#3fb1e3",
                                      "borderWidth": 1
                                  },
                                  "label": {
                                      "color": "#3fb1e3"
                                  }
                              }
                          },
                          "geo": {
                              "itemStyle": {
                                  "areaColor": "#eeeeee",
                                  "borderColor": "#aaaaaa",
                                  "borderWidth": 0.5
                              },
                              "label": {
                                  "color": "#ffffff"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "areaColor": "rgba(63,177,227,0.25)",
                                      "borderColor": "#3fb1e3",
                                      "borderWidth": 1
                                  },
                                  "label": {
                                      "color": "#3fb1e3"
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
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#bfda33"
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
                                          "rgba(250,250,250,0.05)",
                                          "rgba(200,200,200,0.02)"
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
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#bfda33"
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
                                          "rgba(250,250,250,0.05)",
                                          "rgba(200,200,200,0.02)"
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
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#bfda33"
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
                                          "rgba(250,250,250,0.05)",
                                          "rgba(200,200,200,0.02)"
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
                                  "show": false,
                                  "lineStyle": {
                                      "color": "#bfda33"
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
                                          "rgba(250,250,250,0.05)",
                                          "rgba(200,200,200,0.02)"
                                      ]
                                  }
                              }
                          },
                          "toolbox": {
                              "iconStyle": {
                                  "borderColor": "#999999"
                              },
                              "emphasis": {
                                  "iconStyle": {
                                      "borderColor": "#666666"
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
                                      "width": "2"
                                  },
                                  "crossStyle": {
                                      "color": "#ffffff",
                                      "width": "2"
                                  }
                              }
                          },
                          "timeline": {
                              "lineStyle": {
                                  "color": "#ffffff",
                                  "width": "2"
                              },
                              "itemStyle": {
                                  "color": "#626c91",
                                  "borderWidth": "1"
                              },
                              "controlStyle": {
                                  "color": "#626c91",
                                  "borderColor": "#ffffff",
                                  "borderWidth": "2"
                              },
                              "checkpointStyle": {
                                  "color": "#3fb1e3",
                                  "borderColor": "#3fb1e3"
                              },
                              "label": {
                                  "color": "#fbefe5"
                              },
                              "emphasis": {
                                  "itemStyle": {
                                      "color": "#626c91"
                                  },
                                  "controlStyle": {
                                      "color": "#626c91",
                                      "borderColor": "#ffffff",
                                      "borderWidth": "2"
                                  },
                                  "label": {
                                      "color": "#fbefe5"
                                  }
                              }
                          },
                          "visualMap": {
                              "color": [
                                  "#2a99c9",
                                  "#afe8ff"
                              ]
                          },
                          "dataZoom": {
                              "backgroundColor": "rgba(255,255,255,0)",
                              "dataBackgroundColor": "rgba(222,222,222,1)",
                              "fillerColor": "rgba(114,230,212,0.25)",
                              "handleColor": "#cccccc",
                              "handleSize": "100%",
                              "textStyle": {
                                  "color": "#999999"
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