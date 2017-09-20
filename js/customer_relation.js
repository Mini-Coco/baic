 /*

function showChild(textObj){
    $(textObj).siblings(".tootip").show();
}
function hideChild(textObj){

    $(textObj).siblings(".tootip").hide();

}
function drawCustomerRelation(){
    var  cr_str ='<svg xmlns="http://www.w3.org/2000/svg" version="1.1">'+
            '<g >'+
               ' <circle cx="200" cy="250" r="170" stroke="#d8e9ec" stroke-width="10" fill="#fff" />'+
                '<circle cx="200" cy="250" r="130" stroke="#b9e0e5" stroke-width="10" fill="#fff" />'+
                '<circle cx="200" cy="250" r="90" stroke="#51a3ae" stroke-width="10" fill="#fff" />'+
                '<circle cx="200" cy="250" r="60" stroke="#abd6df" stroke-width="10" fill="#abd6df" />'+
                '<circle cx="200" cy="250" r="40" stroke="#2883b0" stroke-width="0" fill="#2883b0" />'+
                '<image xlink:href="img/wangmeili.png" width="35" height="47" x="182" y="225"/>'+
            '</g>'+
            '<g>'+
                '<circle cx="200" cy="200" r="26" stroke="#f5ab01" stroke-width="8" fill="#fff"  onmouseover="showChild(this)" onmouseleave="hideChild(this)" />'+
                '<text x="184" y="204" style="font-size:12px;" fill="#f5ab01" onmouseover="showChild(this)">黄小鸭</text>'+
                '<g class="tootip">'+ 
                    '<image xlink:href="img/icon/relationNetwork_BG_t.png" width="190" height="110" x="108" y="60"/>'+
                    '<text x="120" y="90" style="fill:#fff;" >'+
                        '<tspan x="120" y="85" style="font-size:12px;" >关系</tspan>'+
                        '<tspan x="120" y="100" style="font-size:12px;" >角色</tspan>'+
                        '<tspan x="150" y="95" style="font-size:16px;" >女儿</tspan>'+
                    '</text>'+
                    '<text x="120" y="90" style="fill:#fff;" >'+
                        '<tspan x="200" y="85" style="font-size:12px;" >关系</tspan>'+
                        '<tspan x="200" y="100" style="font-size:12px;" >级别</tspan>'+
                        '<tspan x="230" y="95" style="font-size:16px;" >等级2</tspan>'+
                    '</text>'+
                    '<text x="130" y="90" style="fill:#fff;" >'+
                        '<tspan x="120" y="130" style="font-size:12px;" >综合</tspan>'+
                        '<tspan x="120" y="145" style="font-size:12px;" >价值</tspan>'+ 
                    '</text>'+
                    '<image xlink:href="img/icon/star/3.png" width="102" height="27" x="150" y="120"/>'+
                    
                '</g>'+

            '</g>'+
            '<g>'+
                '<circle cx="300" cy="300" r="26" stroke="#f5ab01" stroke-width="8" fill="#fff" />'+
                '<text x="284" y="304" style="font-size:12px;" fill="#f5ab01" >张三丰</text>'+
            '</g>'+
            '<g>'+
                '<circle cx="180" cy="330" r="26" stroke="#f5ab01" stroke-width="8" fill="#f5ab01" />'+
                '<text x="164" y="334" style="font-size:12px;" fill="#fff" >朋友A</text>'+
            '</g>'+
            '<g>'+
                '<circle cx="330" cy="180" r="26" stroke="#f5ab01" stroke-width="8" fill="#f5ab01" />'+
                '<text x="314" y="184" style="font-size:12px;" fill="#fff" >朋友B</text>'+
            '</g>'+
            '<g>'+
                '<circle cx="56" cy="380" r="20" stroke="#f8d47d" stroke-width="8" fill="#f8d47d" />'+
                '<text x="50" y="384" style="font-size:10px;" fill="#fff" >同事E</text>'+
            '</g>'+
            '<g>'+
                '<circle cx="460" cy="250" r="20" stroke="#f8d47d" stroke-width="8" fill="#f8d47d" />'+
                '<text x="446" y="254" style="font-size:10px;" fill="#fff" >同事F</text>'+
            '</g>'+
            '<g>'+
                '<circle cx="40" cy="210" r="20" stroke="#f8d47d" stroke-width="8" fill="#f8d47d" />'+
                '<text x="24" y="214" style="font-size:10px;" fill="#fff" >同事J</text>'+
            '</g>'+
            '<g>'+
                '<circle cx="270" cy="70" r="20" stroke="#f8d47d" stroke-width="8" fill="#f8d47d" />'+
                '<text x="254" y="74" style="font-size:10px;" fill="#fff" >同事H</text>'+
            '</g>'+
        '</svg>';
      //setCircleDirection();
     
    $("#customerRelationGraph").html(cr_str);
}
*/

function showChild(textObj){
    $("#"+textObj).show();
}
function hideChild(){

    $(".tootip").hide();

}
function createCircleObject(cx,cy,r,name){
    var circleObj = new Object();
    circleObj.cx = cx;
    circleObj.cy = cy;
    circleObj.r = r;
    circleObj.name = name;
    return circleObj;
}



var randomTemp1 = 0;
var randomTemp2 = 0;
var circle_str = '';
function setCircleDirection(){
    randomTemp1 = (Math.random().toString().substring(2,3))%2;  //获取小数点后第一个数组
    randomTemp2 = (Math.random().toString().substring(2,3))%2;  //获取小数点后第一个数组
    if (randomTemp1==0) {
        randomTemp1=-1;
    }
    if (randomTemp2==0) {
        randomTemp2=-1;
    }
}

function drawCustomerRelation(){
   /*R最远关系为150*/
    var arrObj = [{name:'黄小鸭',role:'女儿',level:'等级2',mulValue:3,relation:20},
                {name:'黄小鸭2',role:'女儿2',level:'等级2',mulValue:3,relation:40},
                {name:'黄小鸭3',role:'女儿3',level:'等级2',mulValue:3,relation:60},
                {name:'黄小鸭3',role:'女儿3',level:'等级2',mulValue:3,relation:80},
                {name:'黄小鸭3',role:'女儿3',level:'等级2',mulValue:3,relation:100},
                {name:'黄小鸭3',role:'女儿3',level:'等级2',mulValue:3,relation:120},
                {name:'黄小鸭3',role:'女儿3',level:'等级2',mulValue:3,relation:150}];
    var circleArr =[];

    circle_str = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" onmouseover="hideChild2()">'+
            '<g >'+
               ' <circle cx="200" cy="250" r="170" stroke="#d8e9ec" stroke-width="10" fill="#fff" />'+
                '<circle cx="200" cy="250" r="130" stroke="#b9e0e5" stroke-width="10" fill="#fff" />'+
                '<circle cx="200" cy="250" r="90" stroke="#51a3ae" stroke-width="10" fill="#fff" />'+
                '<circle cx="200" cy="250" r="60" stroke="#abd6df" stroke-width="10" fill="#abd6df" />'+
                '<circle cx="200" cy="250" r="40" stroke="#2883b0" stroke-width="0" fill="#2883b0" />'+
                '<image xlink:href="img/wangmeili.png" width="35" height="47" x="182" y="225"/>'+
            '</g>';
    for (var i = 0; i < arrObj.length; i++) {
        setCircleDirection();
        var relation = arrObj[i].relation;
        var name = arrObj[i].name;
        var x_relation = Math.random()*relation;
        var x = 200 - x_relation*randomTemp1;
        var y = 250 - (Math.sqrt(relation*relation - x_relation*x_relation))*randomTemp2;
        var r = 26;

       // console.log('x='+x);
       // console.log('y='+y);
        circle_str +='<g >';
        for (var m = 0; m < circleArr.length; m++) {
            var changbian = 0;
            var shuangR = 0;
            changbian = Math.sqrt((circleArr[m].cx-x)*(circleArr[m].cx-x)+(circleArr[m].cy-y)*(circleArr[m].cy-y))
            shuangR = circleArr[m].r + r;
            if (changbian<shuangR) {

                setCircleDirection();
                x_relation = Math.random()*relation;
                x = 200 - x_relation*randomTemp1;
                y = 250 - (Math.sqrt(relation*relation - x_relation*x_relation))*randomTemp2;

                m=-1;
            }

           /* console.log("changbian:"+changbian);
            console.log("shuangR:"+shuangR);*/
        }
        circle_str +='<circle cx="'+x+'" cy="'+y+'" r="26" stroke="#f5ab01" stroke-width="0" fill="#f5ab01"  onmouseover="showChild(&quot;tootip_'+(i+1)+'&quot;)" onmouseleave="hideChild()"  />'+
                '<text x="'+(x-16)+'" y="'+(y+4)+'" style="font-size:12px;" fill="#fff"  onmouseover="showChild(&quot;tootip_'+(i+1)+'&quot;)" onmouseleave="hideChild2()"  >'+name+'</text>';
           

        var newCircleObj = createCircleObject(x,y,r,name);
        circleArr[i]=newCircleObj;
        circle_str +='</g>';


    }

    //拼接tootip
    for (var i = 0; i < circleArr.length; i++) {
        var x=circleArr[i].cx;
        var y=circleArr[i].cy;
        var name=circleArr[i].name;

        circle_str +='<g id="tootip_'+(i+1)+'" class="tootip">'+ 
                '<image xlink:href="img/icon/relationNetwork_BG_t.png" width="130" height="65" x="'+(x-65)+'" y="'+(y-90)+'"/>'+
                '<text x="'+x+'" y="'+y+'" style="fill:#fff;" >'+
                    '<tspan x="'+(x-50)+'" y="'+(y-70)+'" style="font-size:10px;" >关系角色:</tspan>'+
                    '<tspan x="'+(x)+'" y="'+(y-70)+'" style="font-size:10px;" >女儿</tspan>'+
                '</text>'+
                '<text x="'+x+'" y="'+(y+15)+'" style="fill:#fff;" >'+
                    '<tspan x="'+(x-50)+'" y="'+(y-55)+'" style="font-size:10px;" >关系级别:</tspan>'+
                    '<tspan x="'+(x)+'" y="'+(y-55)+'" style="font-size:10px;" >等级2</tspan>'+
                '</text>'+
                '<text x="'+x+'" y="'+(y+30)+'" style="fill:#fff;" >'+
                    '<tspan x="'+(x-50)+'" y="'+(y-40)+'" style="font-size:10px;" >综合价值:</tspan>'+
                   '</text>'+ 
                '<image xlink:href="img/icon/star/3.png" width="70" height="20" x="'+(x-2)+'" y="'+(y-52)+'"/>'+
                                
            '</g>';
    }
    circle_str +='</svg>';
    $("#customerRelationGraph").html(circle_str);
}
drawCustomerRelation();

