/**
 * Created by pactera on 2017/7/21.
 */
//点击显示下级菜单
// var isOpen=true;
// $('.openMenu').click(function () {
//     if(isOpen){
//         $(this).children('ul').show();
//         $(this).css('border-left','3px solid #d02516');
//         isOpen=false;
//     }else {
//         $(this).children('ul').hide();
//         $(this).css('border-left','none');
//         isOpen=true;
//     }
// });

//判断页签名称是否为潜客类型，是否显示下级菜单
// (function(){
//     var tabWord=$('.breadcrumb').children('li').text();
//     if(tabWord=='潜客搜索'||tabWord=='潜客画像'){
//         $('.openMenu').children('ul').show();
//         $('.openMenu').css('border-left','3px solid #d02516');
//     }else{
//         $('.openMenu').children('ul').hide();
//         $('.openMenu').css('border-left','none');
//     }
// })();

//解决表格加载过程错位问题
setTimeout(function () {
    $('#showTable').css('opacity',1);
},1);