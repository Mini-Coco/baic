function reloadGraph(temp){
    if ("messageTatal"==temp) {
        getMessageTatal_customerValue();
    }else if ("basicMessage"==temp) {
        
    }else if ("customerValue"==temp) {
        customerValue_costGraph();
        customerValue_customerGauge();
    }else if ("interestPreference"==temp) {
        interest_destination_pie();
        interest_produceLevel_pie();
        interest_travelWay_pie();
        interestPreference_countryScale();
    }else if ("marketCharacter"==temp) {
        marketCharacter_proIntroGraph();
    }else if ("relationNetwork"==temp) {
        onceTravelRelationGraph()
    }
}

 
function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}
/*信息总览  ---  客户价值*/
function getMessageTatal_customerValue(){

    var messageTatal_customerValue_bar = echarts.init(document.getElementById("messageTatal_customerValue_bar"));
    var messageTatal_customerValue_option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
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

        color:["#908ca5","#fbcd78"],
        grid:{
            //x:'10',
            y:'40',
            borderWidth:0
        },
        calculable : true,
        legend: {
            y:'bottom',
            data:['消费金额','消费次数']
        },
        xAxis : [
            {
                type : 'category',
                splitLine:false,
                data : ['2011','2012','2013','2014','2015']
            }
        ],
        yAxis : [
            {
                type : 'value',
                show : false,
                splitLine:false,
               // name : '水量',
                axisLabel : {
                  //  formatter: '{value} ml'
                    formatter: '{value}'
                }
            },
            {
                show:false,
                type : 'value',
                splitLine:false,
             //   name : '温度',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : [
            {
                name:'消费金额',
                type:'bar',
              //  barWidth:15,
                barGap:'10%',
                itemStyle:{
                    normal:{
                        label:{
                            show: true,
                            position: 'top'

                        }
                    },
                    emphasis: {
                   
                    }
                },
                data:[23000, 30000, 10000, 16000, 40000]
            },
            {
                name:'消费次数',
                type:'bar',
                yAxisIndex: 1,
              //  barWidth:15,
                barGap:'10',
                itemStyle:{
                    normal:{
                        label:{
                            show: true,
                            position:'top'
                        }
                    },
                    emphasis: {
                   
                    }
                },
                data:[2, 3, 2, 3, 5]
            }
        ]
    };
                        
    messageTatal_customerValue_bar.setOption(messageTatal_customerValue_option);
}
/*客户价值  --客户流失率*/
function customerValue_customerGauge(){

    var customerValue_customerGauge_bar = echarts.init(document.getElementById("customerValue_customerGauge"));
    var customerValue_customerGauge_option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
  
        series : [
            {
                name:'业务指标',
                type:'gauge',
                radius:[0, '98%'] ,
                center:['45%', '52%'], 
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: [
                            [0.2, '#2ec7c9'],
                            [0.8, '#5ab1ef'],
                            [1, '#d87a80']
                        ],
                        shadowColor : '#fff', //默认透明
                        width:10
                    }
                },    
                axisTick:{
                    show: true,
                    splitNumber: 10,
                    length :16,
                    lineStyle: {
                        color: 'auto',
                        width: 1,
                        type: 'solid'
                    }
                },            
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                     //   width:3,
                        color: 'auto'
                       // shadowColor : '#fff', //默认透明
                       // shadowBlur: 10
                    }
                },     
                title:{
                    show : true,
                    offsetCenter: [0, '-36%'],
                    textStyle: {
                        color: '#333',
                        fontSize : 12
                    }
                }, 
                pointer:{
                   // length : '80%',
                    width : 4,
                    color : 'auto'
                },      

                detail : {
                    formatter:'{value}%',
                    width: 200,
                    //height: 200,
                    textStyle: {
                        color: 'auto',
                        fontSize : 22
                    }
                },
                data:[{value: 30.18, name: '客户流失概率'}]
            }
        ]
    };
                        
    customerValue_customerGauge_bar.setOption(customerValue_customerGauge_option);
}
/*客户价值  --柱状图、折线图混搭*/
function customerValue_costGraph(){
    var customerValue_costBarGraph = echarts.init(document.getElementById("customerValue_costBarGraph"));
    var customerValue_costBarGraph_option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
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
        /*color:["#6EC3C9","#635BA2","#F5B16D","#205AA7","#00A06B","#B7B7B7"
        ],*/
        color:["#908ca5","#fbcd78"],
        grid:{
            x:'50',
            y:'60',
            x2:'50',
            y2:'80',
            borderWidth:0
        },
        calculable : true,
        legend: {
            y:'bottom',
            data:['消费金额','消费次数']
        },
        xAxis : [
            {
                type : 'category',
                splitLine:false,
                data : ['2011','2012','2013','2014','2015']
            }
        ],
        yAxis : [
            {
                type : 'value',
                show : false,
                splitLine:false,
               // name : '水量',
                axisLabel : {
                  //  formatter: '{value} ml'
                    formatter: '{value}'
                }
            },
            {
                show:false,
                type : 'value',
                splitLine:false,
             //   name : '温度',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : [
            {
                name:'消费金额',
                type:'bar',
              //  barWidth:15,
                barGap:'10%',
                itemStyle:{
                    normal:{
                        label:{
                            show: true,
                            position: 'top'

                        }
                    },
                    emphasis: {
                   
                    }
                },
                data:[23000, 30000, 10000, 16000, 40000]
            },
            {
                name:'消费次数',
                type:'bar',
                yAxisIndex: 1,
              //  barWidth:15,
                barGap:'10',
                itemStyle:{
                    normal:{
                        label:{
                            show: true,
                            position:'top'
                        }
                    },
                    emphasis: {
                   
                    }
                },
                data:[2, 3, 2, 3, 5]
            }
        ]
    };
    customerValue_costBarGraph.setOption(customerValue_costBarGraph_option);
}

/*兴趣偏好*/
    /*目的地*/
function interest_destination_pie(){
    var interest_destination_pie = echarts.init(document.getElementById("interestPreference_destination_pie"));
    var interest_destination_pie_option = {
        title : {
            text: '目的地',
            x:'center',
            textStyle:{
                fontSize:10,
                fontWeight:'normal'
            }
        },
        color:["#3bd8ad","#f3f3f3","rgb(237,235,225)","rgb(203,203,168)",
        "rgb(156,162,170)"
        ],
        calculable : false,
        series : [
            {
                name:'访问来源',
                type:'pie',

                clockWise:false,
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            position : 'center',
                            textStyle : {
                                fontSize : '16',
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
                    {value:335, name:'出境游'},
                    {value:310, name:'国内游'}
                ]
            }
        ]
    };
    interest_destination_pie.setOption(interest_destination_pie_option);

}
    /*产品档次*/
function interest_produceLevel_pie(){

    var interest_produceLevel_pie = echarts.init(document.getElementById("interestPreference_produceLevel_pie"));
    var interest_produceLevel_pie_option = {
        title : {
            text: '产品档次',
            x:'center',
            textStyle:{
                fontSize:10,
                fontWeight:'normal'
            }
        },
        
        color:["#c3bed4","#4a5980","#f2f2f2","rgb(203,203,168)",
        "rgb(156,162,170)"
        ],

        calculable : false,
        series : [
            {
                name:'产品档次',
                type:'pie',
                clockWise:false,
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            position : 'center',
                            textStyle : {
                                fontSize : '16',
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
                    {value:335, name:'豪华'},
                    {value:310, name:'普通'},
                    {value:234, name:'大众'}
                ]
            }
        ]
    };
    interest_produceLevel_pie.setOption(interest_produceLevel_pie_option);
}

    /*出游方式*/
function interest_travelWay_pie(){
    var interest_travelWay_pie = echarts.init(document.getElementById("interestPreference_travelWay_pie"));
    var interest_travelWay_pie_option = {
        title : {
            text: '出游方式',
            x:'center',
            textStyle:{
                fontSize:10,
                fontWeight:'normal'
            }
        },
        
        color:["#ddf0ee","#f2f2f2","rgb(237,235,225)","rgb(203,203,168)",
        "rgb(156,162,170)"
        ],
        calculable : false,
        series : [
            {
                name:'出游方式',
                type:'pie',
                clockWise:false,
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            position : 'center',
                            textStyle : {
                                fontSize : '16',
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
                    {value:335, name:'跟团游'},
                    {value:234, name:'自由行'}
                ]
            }
        ]
    };
    interest_travelWay_pie.setOption(interest_travelWay_pie_option);
}

    /*各国出游比例*/
function interestPreference_countryScale(){
    var interestPreference_countryScale = echarts.init(document.getElementById("interestPreference_countryScale"));
    var interestPreference_countryScale_option = {
        tooltip: {
            trigger: 'item'
        },
        calculable: true,
        grid: {
            borderWidth: 0,
            x: 40,
            y: 10,
            x2: 40,
            y2: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick :{
                    show:false
                },
                show: true,
                splitLine:0,
                data: ['欧洲', '东南亚', '日韩', '美洲', '中东']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine:0,
                show: false
            }
        ],
        series: [
            {
                name: '统计',
                type: 'bar',
                barWidth:40,
                itemStyle: {
                    normal: {
                        barBorderRadius:[5,5,0,0],
                        color: function(params) {
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
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
                data: [12,21,10,4,12,5,6,5,25,23,7]
            }
        ]
    };
             
    interestPreference_countryScale.setOption(interestPreference_countryScale_option);
}


/*各国出游比例*/
function marketCharacter_proIntroGraph(){
    var marketCharacter_proIntroGraph = echarts.init(document.getElementById("marketCharacter_proIntroGraph"));
    var marketCharacter_proIntroGraph_option ={
  
    tooltip : {
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        trigger: 'axis'
    },
    
    calculable : true,
    legend: {
          data:['价格','星级'],
         // orient:'vertical',
          x:'left',
          y:'top'
    },

    toolbox: {
        show : true,
        feature : {
           // mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    dataZoom: {
        show: true,
        start : 10,
        end : 50
    },
    xAxis : [
        {
            type : 'category',
            splitLine:{show:false},
            axisTick:{show:false},
            data : ['2016-09-01','2016-09-02','2016-09-03','2016-09-04','2016-09-05','2016-09-06',
            '2016-09-07','2016-09-08','2016-09-09','2016-09-10','2016-09-11','2016-09-12',
            '2016-09-13','2016-09-14','2016-09-15','2016-09-16','2016-09-17','2016-09-18',
            '2016-09-19','2016-09-20']
        }
    ],
   
    grid:{
        x:50,
        y:50,
        x2:40,
        y2:60,
        borderWidth:0
    },
    
    yAxis : [
        {
            type : 'value',
            name : '',
            splitLine:{show:false},
            axisLabel : {
                formatter: '{value}万元'
            }
        },
        {
            type : 'value',
            name : '',
            splitLine:{show:false},
            axisLabel : {
                formatter: '{value}☆'
            }
        }
    ],
    series : [

        {
            name:'价格',
            type:'bar',
            itemStyle: {
                normal: {
                    barBorderRadius:[5,5,0,0],
                    color:['#b7a3df']
                }
            },
            data:[2.0, 4.9, 3.0, 2.2, 1.6,2.0, 4.9, 3.0, 2.2, 1.6,2.0, 4.9, 3.0, 2.2, 1.6,2.0, 4.9, 3.0, 2.2, 1.6]
        },
        {
            name:'星级',
            type:'line',
            yAxisIndex: 1,
            symbol:'emptyCircle',
            smooth:true,
            itemStyle: {
                normal: {
                    barBorderRadius:[5,5,0,0],
                    color:['#62d4d5']
                }
            },
            data:[2.0, 5, 4, 3, 2,2.0, 5, 4, 3, 2,2.0, 5, 4, 3, 2,2.0, 5, 4, 3, 2]
        }
        
    ]
}; /*{
    title : {
        text: '产品推荐TOP5',
        x:'center',
        textStyle:{
            fontSize:16,
            fontWeight:'normal'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    legend: {
        data:['价格','星级'],
      orient:'vertical',
      x:'right',
      y:'bottom'
      //y:250
      
    },
    xAxis : [
        {
            type : 'category',
            data : ['中东','欧洲','美国','日韩','东南亚']
        }
    ],
    color:["rgb(194,240,229)","rgb(211,196,235)"],
    grid:{
        x:50,
        y:50,
        x2:90,
        y2:30,
    },
    yAxis : [
        {
            type : 'value',
            name : '',
            axisLabel : {
                formatter: '{value} 万元'
            }
        },
        {
            type : 'value',
            name : '',
            axisLabel : {
                formatter: '{value}☆'
            }
        }
    ],
    series : [

        {
            name:'价格',
            type:'bar',
            data:[2.0, 4.9, 3.0, 2.2, 1.6,]
        },
        {
            name:'星级',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 5, 4, 3, 2,]
        }
    ]
};*/
             
    marketCharacter_proIntroGraph.setOption(marketCharacter_proIntroGraph_option);
}
/*各国出游比例*/
function onceTravelRelationGraph(){
    var onceTravelRelation = echarts.init(document.getElementById("onceTravelRelation"));
    var onceTravelRelation_option = {
        title : {
            text: '',
            subtext: '',
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        legend: {
            x: 'right',
            y:'bottom',
            data:['家人','朋友','邻居','同事'],
           orient:'vertical'
        },
        color:['#f4f35b','#23d19c','#afe4e8','#a3f2c3','#62b4ee'],
        series : [
            {
                type:'force',
                name : "人物关系",
                ribbonType: false,
                categories : [
                    {
                        name: '人物'
                    },
                    {
                        name: '家人'
                    },
                    {
                        name:'朋友'
                    },
                    {
                        name:'邻居'
                    },
                    {
                        name:'同事'
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        },
                        nodeStyle : {
                            brushType : 'both',
                            borderColor : 'rgba(255,215,0,0.4)',
                            borderWidth : 1
                        },
                        linkStyle: {
                            type: 'curve'
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle : {
                            //r: 30
                        },
                        linkStyle : {}
                    }
                },
                useWorker: false,
                minRadius : 15,
                maxRadius : 25,
                gravity: 1.1,

                draggable:false,
                scaling: 1.1,
              //  roam: 'move',
                nodes:[
                    {category:0, name: '王美丽', value : 10},
                    {category:1, name: '黄小鸭',value : 2},
                    {category:1, name: '家人A',value : 3},
                    {category:1, name: '张三丰',value : 3},
                    {category:2, name: '朋友D',value : 5},
                    {category:2, name: '朋友C',value : 8},
                    {category:2, name: '朋友E',value : 9},
                    {category:3, name: '邻居1',value : 4},
                    {category:3, name: '邻居2',value : 1},
                    {category:4, name: '同事1',value : 1},
                    {category:4, name: '同事2',value : 10}
                ],
                links : [
                    {source : '黄小鸭', target : '王美丽', weight :1, name: '家人'},
                    {source : '家人A', target : '王美丽', weight : 2, name: '家人'},
                    {source : '张三丰', target : '王美丽', weight : 1, name: '家人'},
                    {source : '朋友D', target : '王美丽', weight : 2},
                    {source : '朋友C', target : '王美丽', weight : 3, name: ''},
                    {source : '奥巴马', target : '王美丽', weight : 1},
                    {source : '朋友E', target : '王美丽', weight : 6, name: ''},
                    {source : '邻居1', target : '王美丽', weight : 1, name: ''},
                    {source : '邻居2', target : '王美丽', weight : 1},
                    {source : '同事1', target : '王美丽', weight : 1},
                    {source : '同事2', target : '王美丽', weight : 1},
                    {source : '黄小鸭', target : '邻居1', weight : 1},
                    {source : '黄小鸭', target : '朋友E', weight : 1},
                    {source : '邻居2', target : '同事1', weight : 1},
                    {source : '朋友C', target : '朋友D', weight : 1},
                    {source : '朋友C', target : '张三丰', weight : 6}
                ]
            }
        ]
    };

             
    onceTravelRelation.setOption(onceTravelRelation_option);
}


$(function(){
    reloadGraph("messageTatal")
})

