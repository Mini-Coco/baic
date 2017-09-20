function reloadGroupInfoGraph(temp){
    if ("groupInfo_1"==temp) {
        groupInfo_age_graph();
        groupInfo_edutation_graph();
        groupInfo_income_graph();
    }else if ("groupInfo_2"==temp) {
        groupInfo_job_graph();
        groupInfo_area_graph();
    }else if ("groupInfo_3"==temp) {
        groupInfo_destination_graph();
        groupInfo_level_graph();
        groupInfo_custom_graph();
        groupInfo_travelWay_graph();
        groupInfo_CJdestination();
    }
}

/* 学历*/
function groupInfo_edutation_graph(){
    var groupInfo_edutation = echarts.init(document.getElementById("groupInfo_edutation"));
    var groupInfo_edutation_option = {
        title : {
            text: '',
            x:'center',
            textStyle:{
                fontSize:14,
                fontWeight:'normal'
            }
        },
        tooltip : {
            show:false,
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        
        color:["#db4d5d","#f6c76b","#20b4a6","#455765",
        "rgb(156,162,170)"
        ],
        toolbox: {
            show :false
        },
        calculable : false,
        series : [
            {
                name:'学历',
                type:'pie',
              //  clockWise:false,
                radius : '65%',
                legendHoverLink:false,
                center: ['50%', '55%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                          position:'outer', 
                          //distance:0.7,
                          textStyle:{
                            color:'#333'
                          },
                          /*formatter : function (params) {                         
                              return (params.percent - 0).toFixed(0) + '%'
                            }*/
                          //  formatter: "{b} : {c} ({d}%)"
                          formatter: "{b}:\n {d}% "
                        },
                        labelLine : {
                            show : true
                        }
                    
                    },
                    emphasis : {
                        label : {
                              show : true,
                              textStyle:{
                                color:'#FFFFFF'
                              },
                              formatter: "{b} :{d}%"
                        }
                    }
              
                },
                data:[
                    {value:40, name:'初中及以下'},
                    {value:30, name:'高中或高职'},
                    {value:20, name:'本科及大专'},
                    {value:10, name:'硕士及以上'}
                ]
            }
        ]
    };
    groupInfo_edutation.setOption(groupInfo_edutation_option);

}


/*收入水平*/
function groupInfo_income_graph(){

    var groupInfo_income = echarts.init(document.getElementById("groupInfo_income"));
    var groupInfo_income_option = {
        title : {
            text: '',
            x:'center',
            textStyle:{
                fontSize:14,
                fontWeight:'normal'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        calculable : true,
        grid:{
            borderWidth:0,
            x:70,
            y:30,
            x2:30,
            y2:30
        },
        xAxis : [
            {
                type : 'category',
                splitLine:true,
                data : ['50后','60后','70后','80后','90后','00后'],
                axisTick :{
                    show:false
                },
                boundaryGap: [0.2, 0.2],
                axisLine :{
                    lineStyle:{
                        color: '#232323',
                        width: 1
                    }   
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                show : true,
                splitLine:false,
                boundaryGap: [0,0.2],
               
                axisLabel : {
                
                   formatter: '{value}%'

                },
                axisTick :{
                    inside:true,
                    show:true
                },
                axisLine :{
                    lineStyle:{
                        color: '#232323',
                        width: 1
                    }   
                }
            }
        ],

                
        series : [
            {
                name:'',
                type:'bar',
                barWidth:20,
                data:[30, 20, 15, 20, 10,5],
                itemStyle: {
                    normal: {
                        
                        color:'#facf70',
                        
                        label:{
                            show: true,
                            position:'top',
                            formatter: '{c}%'
                        }   
                    },
                    emphasis: {
                    }
                }
            }
        ]
    };
                        
    groupInfo_income.setOption(groupInfo_income_option);
}

/*年龄*/
function groupInfo_age_graph(){

    var groupInfo_age = echarts.init(document.getElementById("groupInfo_age"));
    var groupInfo_age_option = {
        title : {
            text: '',
            x:'center',
            textStyle:{
                fontSize:14,
                fontWeight:'normal'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        calculable : true,
        grid:{
            borderWidth:0,
            x:70,
            y:30,
            x2:30,
            y2:30
        },
        xAxis : [
            {
                type : 'category',
                splitLine:true,
                data : ['50后','60后','70后','80后','90后','00后'],
                axisTick :{
                    show:false
                },
                boundaryGap: [0.2, 0.2],
                axisLine :{
                    lineStyle:{
                        color: '#232323',
                        width: 1
                    }   
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                show : true,
                splitLine:false,
                boundaryGap: [0,0.2],
               // name : '水量',
                axisLabel : {
                  //  formatter: '{value} ml'
                   formatter: '{value}%'

                },
                axisTick :{
                    inside:true,
                    show:true
                },
                axisLine :{
                    lineStyle:{
                        color: '#232323',
                        width: 1
                    }   
                }
            }
        ],

                
        series : [
            {
                name:'年龄比例',
                type:'bar',
                barWidth:20,
                data:[30, 20, 15, 20, 10,5],
                itemStyle: {
                    normal: {
                        color:'#8e8d9f',
                        label:{
                            show: true,
                            position:'top',
                            formatter: '{c}%'
                        }   
                    },
                    emphasis: {
                    }
                }
            }
        ]
    };
                        
    groupInfo_age.setOption(groupInfo_age_option);
}


/* 职业*/
function groupInfo_job_graph(){
    var groupInfo_job = echarts.init(document.getElementById("groupInfo_job"));
    var groupInfo_job_option = {
    title : {
        text: '',
        x:'center',
        textStyle:{
            fontSize:14,
            fontWeight:'normal'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show:false,
        data:['2011年', '2012年']
    },
    /*color:["#6EC3C9","#635BA2","#F5B16D","#205AA7","#00A06B","#B7B7B7"
        ],*/
        color:["rgb(113,174,145)","rgb(191,199,196)","rgb(237,235,225)","rgb(203,203,168)",
        "rgb(156,162,170)"
        ],
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {show:false,
        type : 'value'
       //     boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            splitLine:{
                show:false
            },
            data : ['政府工作人员','企事业管理人员','专业技术人员','私营企业主','服务、销售商贸人员','工人','教师','学生','军人','农民','退休人员']
        }
    ],
    grid:{
        borderWidth:0
    },
    series : [
        {
            name:'2011年',
            type:'bar',
            barWidth:20,
            itemStyle: {
                normal: {
                    color: 'rgb(110, 195, 201)',
                  
                    label : {
                        show: false,
                     //   position: 'top',
                        formatter:" {c}%" ,
                   
                    }
                }
           },
          
            data:[5, 10, 15, 10, 10, 5,7,8,10,15,5]
        }
    ]
};
    groupInfo_job.setOption(groupInfo_job_option);
}

/* 区域构成*/
function groupInfo_area_graph(){
    var groupInfo_area = echarts.init(document.getElementById("groupInfo_area"));
    var groupInfo_area_option = {
    title : {
        text: '',
        x:'center',
        textStyle:{
            fontSize:14,
            fontWeight:'normal'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{c}"
    },
   
    dataRange: {
      show:true,
        min: 0,
        max: 2500,
        x: 'right',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    series : [
        {
            name: '项目1',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '重庆',value: Math.round(Math.random()*1000)},
                {name: '河北',value: Math.round(Math.random()*1000)},
                {name: '河南',value: Math.round(Math.random()*1000)},
                {name: '云南',value: Math.round(Math.random()*1000)},
                {name: '辽宁',value: Math.round(Math.random()*1000)},
                {name: '黑龙江',value: Math.round(Math.random()*1000)},
                {name: '湖南',value: Math.round(Math.random()*1000)},
                {name: '安徽',value: Math.round(Math.random()*1000)},
                {name: '山东',value: Math.round(Math.random()*1000)},
                {name: '新疆',value: Math.round(Math.random()*1000)},
                {name: '江苏',value: Math.round(Math.random()*1000)},
                {name: '浙江',value: Math.round(Math.random()*1000)},
                {name: '江西',value: Math.round(Math.random()*1000)},
                {name: '湖北',value: Math.round(Math.random()*1000)},
                {name: '广西',value: Math.round(Math.random()*1000)},
                {name: '甘肃',value: Math.round(Math.random()*1000)},
                {name: '山西',value: Math.round(Math.random()*1000)},
                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                {name: '陕西',value: Math.round(Math.random()*1000)},
                {name: '吉林',value: Math.round(Math.random()*1000)},
                {name: '福建',value: Math.round(Math.random()*1000)},
                {name: '贵州',value: Math.round(Math.random()*1000)},
                {name: '广东',value: Math.round(Math.random()*1000)},
                {name: '青海',value: Math.round(Math.random()*1000)},
                {name: '西藏',value: Math.round(Math.random()*1000)},
                {name: '四川',value: Math.round(Math.random()*1000)},
                {name: '宁夏',value: Math.round(Math.random()*1000)},
                {name: '海南',value: Math.round(Math.random()*1000)},
                {name: '台湾',value: Math.round(Math.random()*1000)},
                {name: '香港',value: Math.round(Math.random()*1000)},
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ]
        },
        {
            name: '项目2',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '重庆',value: Math.round(Math.random()*1000)},
                {name: '河北',value: Math.round(Math.random()*1000)},
                {name: '安徽',value: Math.round(Math.random()*1000)},
                {name: '新疆',value: Math.round(Math.random()*1000)},
                {name: '浙江',value: Math.round(Math.random()*1000)},
                {name: '江西',value: Math.round(Math.random()*1000)},
                {name: '山西',value: Math.round(Math.random()*1000)},
                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                {name: '吉林',value: Math.round(Math.random()*1000)},
                {name: '福建',value: Math.round(Math.random()*1000)},
                {name: '广东',value: Math.round(Math.random()*1000)},
                {name: '西藏',value: Math.round(Math.random()*1000)},
                {name: '四川',value: Math.round(Math.random()*1000)},
                {name: '宁夏',value: Math.round(Math.random()*1000)},
                {name: '香港',value: Math.round(Math.random()*1000)},
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ]
        },
        {
            name: '项目3',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '广东',value: Math.round(Math.random()*1000)},
                {name: '台湾',value: Math.round(Math.random()*1000)},
                {name: '香港',value: Math.round(Math.random()*1000)},
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ]
        }
    ]
};
                    
    groupInfo_area.setOption(groupInfo_area_option);
}

/* 目的地*/
function groupInfo_destination_graph(){
    var groupInfo_destination = echarts.init(document.getElementById("groupInfo_destination"));
    var groupInfo_destination_option = {
    timeline : {
        lineStyle:{
            color: '#1890cd',
            width: 1,
            type: 'dashed'
        },
        checkpointStyle:{
            symbol : 'auto',
            symbolSize : 'auto',
            color : 'auto'
        },
        controlStyle:{
            itemSize: 15,
            itemGap: 5,
            normal : {
                color : '#1d93d0'
            }
        },
        x:20,
        x2:20,
        type:'number',
        data : [
              '2013', '2014', '2015', '2016',
            { name:'累计', symbol:'emptyStar6', symbolSize:8 }
        ],
        label : { 
            show: true,
            interval:1,
            rotate: 0
           /* formatter : function(s) {
             //   return s.slice(0, 9);
              return s
            }*/
        }
    },
    options : [
        {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show :false
            },
            calculable : false,
            clockWise:false,
            radius : ['50%', '70%'],
            legend: {
                show :true,
                orient : 'vertical',
                x : 'right',
                y : 'center',
                data:['出境','国内']
            },
            color:['#95be86','#e1dfe0'],
            series : [
                {
                    name:'目的地',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    itemStyle : {
                        normal : {
                            label : {
                                show : false,
                                position : 'center',
                                textStyle : {
                                    fontSize : '12',
                                    fontWeight : 'bold'
                                }
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '16',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:40 ,  name:'出境'},
                        {value:60,  name:'国内'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'目的地',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:50 ,  name:'出境'},
                        {value:50,  name:'国内'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'目的地',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:45 ,  name:'出境'},
                        {value:55,  name:'国内'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'目的地',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:30 ,  name:'出境'},
                        {value:70,  name:'国内'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'目的地',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:40 ,  name:'出境'},
                        {value:60,  name:'国内'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'目的地',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:35 ,  name:'出境'},
                        {value:65,  name:'国内'}
                    ]
                }
            ]
        }
    ]
};

    groupInfo_destination.setOption(groupInfo_destination_option);
}

/* 产品档次*/
function groupInfo_level_graph(){
    var groupInfo_level = echarts.init(document.getElementById("groupInfo_level"));
    var groupInfo_level_option = {
    timeline : {
        lineStyle:{
            color: '#1890cd',
            width: 1,
            type: 'dashed'
        },
        checkpointStyle:{
            symbol : 'auto',
            symbolSize : 'auto',
            color : 'auto'
        },
        controlStyle:{
            itemSize: 15,
            itemGap: 5,
            normal : {
                color : '#1d93d0'
            }
        },
        x:20,
        x2:20,
        type:'number',
        data : [
              '2013', '2014', '2015', '2016',
            { name:'累计', symbol:'emptyStar6', symbolSize:8 }
        ],
        label : { 
            show: true,
            interval:1,
            rotate: 0
           /* formatter : function(s) {
             //   return s.slice(0, 9);
              return s
            }*/
        }
    },
    options : [
        {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show :false
            },
            calculable : false,
            clockWise:false,
            radius : ['50%', '70%'],
            legend: {
                show :true,
                orient : 'vertical',
                x : 'right',
                y : 'center',
                data:['大众','豪华','精选']
            },
            color:['#e2e0e1','#db4d5d','#f5c36a'],
            series : [
                {
                    name:'产品档次',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],

                    itemStyle : {
                        normal : {
                            label : {
                                show : false,
                                position : 'center',
                                textStyle : {
                                    fontSize : '12',
                                    fontWeight : 'bold'
                                }
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '16',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:40 ,  name:'大众'},
                        {value:60,  name:'豪华'},
                        {value:60,  name:'精选'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'产品档次',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:40 ,  name:'大众'},
                        {value:30,  name:'豪华'},
                        {value:60,  name:'精选'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'产品档次',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:20 ,  name:'大众'},
                        {value:60,  name:'豪华'},
                        {value:60,  name:'精选'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'产品档次',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:40 ,  name:'大众'},
                        {value:60,  name:'豪华'},
                        {value:40,  name:'精选'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'产品档次',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:40 ,  name:'大众'},
                        {value:60,  name:'豪华'},
                        {value:70,  name:'精选'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'产品档次',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:40 ,  name:'大众'},
                        {value:70,  name:'豪华'},
                        {value:60,  name:'精选'}
                    ]
                }
            ]
        }
    ]
};
    groupInfo_level.setOption(groupInfo_level_option);
}

/*消费水平*/
function groupInfo_custom_graph(){

    var groupInfo_custom = echarts.init(document.getElementById("groupInfo_custom"));
    var groupInfo_custom_option = {
    tooltip: {
        trigger: 'item'
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        x:40,
        y: 80,
        x2:40,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            splitLine:{show:false},
            data: ['高档', '经济', '豪华', '中档']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: '消费水平',
            type: 'bar',
            barWidth:30,
            itemStyle: {
                normal: {
                    barBorderRadius:[5,5,0,0],
                    color: function(params) {
                        var colorList = [
                          '#2d928e','#95be86','#ffdb00','#db4d5d','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            },
            data: [20,40,15,35]
        }
    ]
};
                    
                        
    groupInfo_custom.setOption(groupInfo_custom_option);
}


/* 出游方式*/
function groupInfo_travelWay_graph(){
    var groupInfo_travelWay = echarts.init(document.getElementById("groupInfo_travelWay"));
    var groupInfo_travelWay_option = {
    timeline : {
        lineStyle:{
            color: '#1890cd',
            width: 1,
            type: 'dashed'
        },
        checkpointStyle:{
            symbol : 'auto',
            symbolSize : 'auto',
            color : 'auto'
        },
        controlStyle:{
            itemSize: 15,
            itemGap: 5,
            normal : {
                color : '#1d93d0'
            }
        },
        x:20,
        x2:20,
        type:'number',
        data : [
              '2013', '2014', '2015', '2016',
            { name:'累计', symbol:'emptyStar6', symbolSize:8 }
        ],
        label : {
            formatter : function(s) {
             //   return s.slice(0, 9);
              return s
            }
        }
    },
    options : [
        {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show :false
            },
            calculable : false,
            clockWise:false,
            radius : ['50%', '70%'],
            legend: {
                show :true,
                orient : 'vertical',
                x : 'right',
                y : 'center',
                data:['自由行','跟团游']
            },
            color:['#e1dfe0','#2f9490'],
            series : [
                {
                    name:'出游方式',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    itemStyle : {
                        normal : {
                            label : {
                                show : false,
                                position : 'center',
                                textStyle : {
                                    fontSize : '12',
                                    fontWeight : 'bold'
                                }
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '16',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:40 ,  name:'自由行'},
                        {value:60,  name:'跟团游'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'出游方式',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:50 ,  name:'自由行'},
                        {value:50,  name:'跟团游'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'出游方式',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:45 ,  name:'自由行'},
                        {value:55,  name:'跟团游'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'出游方式',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:30 ,  name:'自由行'},
                        {value:70,  name:'跟团游'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'出游方式',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:40 ,  name:'自由行'},
                        {value:60,  name:'跟团游'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'出游方式',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius : ['50%', '70%'],


                    data:[
                        {value:35 ,  name:'自由行'},
                        {value:65,  name:'跟团游'}
                    ]
                }
            ]
        }
    ]
};
    groupInfo_travelWay.setOption(groupInfo_travelWay_option);
}


/* 出游频率*/
function groupInfo_travelRate_graph(){
    var groupInfo_travelRate = echarts.init(document.getElementById("groupInfo_travelRate"));
    var groupInfo_travelRate_option = {
        title : {
            text: '出游频率',
            x:'center',
            textStyle:{
                fontSize:14,
                fontWeight:'normal'
            }
        },
        tooltip : {
            show:false,
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            show :false,
            orient : 'vertical',
            x : 'left',
            data:[]
        },
        /*color:["#6EC3C9","#635BA2","#F5B16D","#205AA7","#00A06B","#B7B7B7"
        ],*/
        color:["rgb(113,174,145)","rgb(191,199,196)","rgb(237,235,225)","rgb(203,203,168)",
        "rgb(156,162,170)"
        ],
        toolbox: {
            show :false
        },
        calculable : false,
        series : [
            {
                name:'出游频率',
                type:'pie',
              //  clockWise:false,
                radius : '65%',
                legendHoverLink:false,
                center: ['50%', '55%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                          position:'inner', 
                          /*formatter : function (params) {                         
                              return (params.percent - 0).toFixed(0) + '%'
                            }*/
                          //  formatter: "{b} : {c} ({d}%)"
                          formatter: "{b} :{d}%"
                        },
                        labelLine : {
                            show : false
                        }
                    
                    },
                    emphasis : {
                        label : {
                            show : true,
                           formatter: "{b} :{d}%"
                        }
                    }
              
                },
                data:[
                    {value:30, name:'高'},
                    {value:20, name:'中'},
                    {value:50, name:'低'}
                ]
            }
        ]
    };
    groupInfo_travelRate.setOption(groupInfo_travelRate_option);
}
    /*出境目的地*/
function groupInfo_CJdestination(){
    var groupInfo_CJdestination = echarts.init(document.getElementById("groupInfo_CJdestination"));
    
  /*  require('echarts/util/mapData/params').params.continent = {
        getGeoJson: function (callback) {
            $.getJSON('js/plugins/echarts/continent_geo.json',callback);
        }
    }*/
    echarts.util.mapData.params.params.continent = {
        getGeoJson: function (callback) {
            $.getJSON('js/plugins/echarts/continent_geo.json',callback);
        }
    };
    var groupInfo_CJdestination_option = {
    title : {
        text : ''
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params){
            var value = params.value + '人次 （' + (params.value/500).toFixed(2) + '%）';
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    dataRange: {
        show:false,
        min: 0,
        max: 10000,
        text:['热', '冷'],
        splitNumber:0,
        color: ['#db4d5d','#f5c36a','#95be86','#5aba95','#2d928e']
    },

    series : [
        {
            name: '出境目的地',
            type: 'map',
            mapType: 'continent', // 自定义扩展图表类型
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '亚洲', value: 9967.69},
                {name: '大洋洲', value: 5592.09},
                {name: '欧洲', value: 7583.62},
                {name: '北美洲', value:6631.63},
                {name: '南美洲', value: 5510.41},
                {name: '非洲', value: 22.5837}
            ],
            // 文本位置修正
            textFixed : {
                '大洋洲' : [165, 0],
                '非洲' : [10, -30],
                '北美洲' : [20, 0],
                '南美洲' : [0, -10],
                '亚洲' : [20, -30],
                '欧洲' : [200, -10],
            }
        }
    ]
};
    groupInfo_CJdestination.setOption(groupInfo_CJdestination_option);
}

$(function(){
    reloadGroupInfoGraph('groupInfo_1');
})

