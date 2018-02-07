
    /*  -----------------------------------头部导航-----------------------------------*/
    /*经过li出下拉框*/
    /* if($(window).width()<=768){
     $("#zsx_navTop").css("background-color","transparent");
     /!*  $(".topLi").css("height", $(window).outerHeight()+50);
     $(".topLi").css("width", $(window).outerWidth());*!/
     /!*  $(".topLi").css("background", "#fff");*!/
     /!*  $(".topLi").css("z-index","4");*!/
     }else{
     $("#zsx_navTop").css("background-color","transparent");
     /!*  $(".topLi").css("background", "transparent");
     $(".topLi").css("z-index","0");*!/
     }*/
$(".xians").mouseenter(function(){
    if($(window).outerWidth()>768) {
        $("#zsx_navTop").css("background", "#fff");
        $(".zsx_hoVer").show().stop().animate({
            opacity: 1
        }, 500);
        $(".zsx_boxShadw").show();
        $(".zsx_boxShadw").animate({
            opacity:.2
        },10);
        $(".zsx_boxShadw").css("z-index","3")
    }else{
        $("#zsx_navTop").css("background", "transparent");
        $(".zsx_boxShadw").hide();
        /*  $(".zsx_hoVer").hide();*/
    }
});
$(".xians").mouseleave(function(){
    if($(window).outerWidth()>768){
        $("#zsx_navTop").css("background", "transparent");
        $(".zsx_hoVer").animate({
            opacity: 0
        },500,function(){
            $(".zsx_hoVer").hide();
            /*   $("#zsx_navTop").css("background", "transparent")*/
        })
        $(".zsx_boxShadw").animate({
            opacity:0
        },10);
        $(".zsx_boxShadw").css("z-index","0")
    }else{
        /*  $(".topLi").css("background", "transparent");
         $(".topLi").css("z-index","4");*/
        $(".zsx_hoVer").hide();
        $(".zsx_boxShadw").animate({
            opacity:.0
        },10);
        $(".zsx_boxShadw").css("z-index","3")
    }
});
/*获取屏幕尺寸，让nav的遮罩层等于屏幕的宽高*/
$(window).resize(function () {
    $(".zsx_boxShadw").css("height",$(window).outerHeight());
});
$(".zsx_navToprigh ul li").hover(function () {
    $(this).find("img:eq(0)").stop().animate({
        top:"-6"
    },400);
    $(this).find("img:eq(1)").stop().animate({
        top:"-14"
    },400);
}, function () {
    $(this).find("img:eq(0),img:eq(1)").stop().animate({
        top:"-10"
    },400);
});

/*旋转面包屑*/
var flage=0
$('#openMenu').click(function(){
    if($(window).width()<768){
        $("#openMenu > i").addClass("actv6");
        if(flage==0){
            $(".navbar-header>.zsxActiv").addClass("actv4");
            $("#openMenu").addClass("zsxAct");
            /*  $(".navbar-nav > li a").css("color","#333");*/
            $(this).removeClass('isOpen');
            $("html").css('overflow-y','hidden');
            /* $("#zsx_navTop").toggleClass('zsx_bg');*/
            $(".zsx_lt_bot").slideUp();
            $(this).toggleClass('isOpen');
            $(".container").css("background","#fff");
            flage=1;
        }else{
            $(".navbar-header>.zsxActiv").removeClass("actv4");
            $(this).addClass('isOpen');
            $("html").css('overflow-y','auto')
            /* $("#zsx_navTop").toggleClass('zsx_bg');*/
            $(".zsx_lt_bot").slideUp();
            $(this).toggleClass('isOpen');
            setTimeout(function () {
                $(".container").css("background","none");
            },300);

            flage=0;
        }
    }
})
/*  旋转箭头*/
$('#openMenu2').click(function(){
    if($(window).width()<765){
        $(this).toggleClass('isOpen');
    }
})
/* 面包屑里面第一个li的点击事件*/
var zsXar=0;
$("#openMenu2").click(function () {
    if(zsXar==0){
        if($(window).outerWidth()<=768){
            $("html").css('overflow-y','auto');
            $(".zsx_lt_bot").slideToggle();
        }
        zsXar=1;
    }else{
        if($(window).outerWidth()<=768){
            $("html").css('overflow-y','hidden');
            $(".zsx_lt_bot").slideToggle();
        }
        zsXar=0;
    }
});
/*  调整面包屑第一个li的bug*/
$(window).resize(function () {
    if($(window).outerWidth()>768){
        $(".zsx_lt_bot").hide();
        $('#openMenu').hide();
    }else{
        $('#openMenu').show();
        $('#openMenu2').show();
    }
});
/*  -----------------------------------头部导航结束-----------------------------------*/

/*  banner渐变圆环
 */
var flag=0;
var index=0;
var x=0;
var circle;
$(".zsx_BtnWrap ul li").click(function () {
    x=$(this).index();
    console.log(x);
    circle.setAttribute('stroke-dasharray','0 100%');
    index=0;
    change();

});
$(".zsx_text").eq(2).css("opacity","0");
$(".zsx_text").eq(2).css("left","65%");
function change(){
    /* if($(window).width()<768){
     $("#zsx_navTop").css("background-color","#fff");
     $("#zsx_navTop").css("z-index","999");
     $("#zsx_navTop").css("height",$(window).height());
     }*/
    index+=0.01;
    circle = $(".zsx_yd")[x];
    var percent = index;
    var perimeter = Math.PI * 2 * 170;
    circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter *   (1- percent));
    if(index>=1){
        index=0;
        circle.setAttribute('stroke-dasharray','0 100%');
        x++;
    }
    if(x==2){
        $("#openMenu > i").addClass("actv5");
        zsx_vdo.play();
        if($(window).width()>768){
            $(".navbar-nav > li").addClass("actv");
            $(".navbar-header>.zsxActiv").addClass("actv3");
            $(".navbar-nav > li").eq(0).hover(function () {
                    $(".navbar-nav > li").removeClass("actv");
                    $(".navbar-header .zsxActiv").removeClass("actv3");
                    $(".navbar-nav > li").addClass("actv2");
                    $(".navbar-header .zsxActiv").addClass("actv4");
                    /*   $(".navbar-nav > li").rem("actv2");*/
                },
                function () {
                    $(".navbar-nav > li").removeClass("actv2");
                    $(".navbar-header>.zsxActiv").removeClass("actv4");
                    $(".navbar-nav > li").addClass("actv");
                    $(".navbar-header>.zsxActiv").addClass("actv3");
                }
            );
            /*   $(".navbar-nav > li a").css("color","#fff");
             $(".navbar-nav > li").eq(0).hover(function () {
             $(this).siblings().find("a").css("color","#000");
             /!*    $(".navbar-nav > li a").css("color","#000");*!/
             }
             );*/
            $(".zsx_text").eq(2).animate({
                opacity: 1,
                left: "24%"
            },1300);

        }else{
            $(".navbar-header>.zsxActiv").addClass("actv3");
            /*  $(".navbar-nav > li a").css("color","#333");*/
            $(".zsx_text").eq(2).animate({
                opacity: 1,
                left: "12%"
            },1300);
            $("#openMenu > i").addClass("actv5")
        }
        /*$("#zsx_navTop").css("background","#fff")*/
    }else{
        if($(window).width()<768){
            $("#openMenu > i").removeClass("actv5");
            $("#zsx_navTop").css("background","transparent");
        }
        /* $(".navbar-nav > li a").css("color","#000");*/
        /*$("#zsx_navTop").css("background","transparent");*/
        //actv2
        /* $(".navbar-nav > li ").addClass("actv2");*/
        /* $(".navbar-nav > li a").css("color","#333");*/
        $(".navbar-header>.zsxActiv").removeClass("actv3");
        $(".navbar-nav > li").removeClass("actv");
    }
    if(x>=5){
        x=0
    }
    /* if(x==2){
     if($(window).width()>768){
     $(".navbar-nav > li a").css("color","#fff");
     $(".icon").css("fill","#fff");
     $(".navbar-nav > li").eq(0).hover(function(){
     $(this).parent().find("a").css("color","#000");
     $(".icon").css("fill","#333");
     }, function(){
     $(this).parent().find("a").css("color","#fff");
     $(".icon").css("fill","#000");
     }
     );
     /!*  $(".navbar-nav > li > a").css("color","#fff");*!/
     zsx_vdo.play();
     $(".zsx_text").eq(2).animate({
     opacity: 1,
     left: "25%"
     },1300);
     }else{
     $(".navbar-nav > li a").css("color","#fff");
     $(".icon").css("fill","#fff");
     $(".open-menu-bar").css("background-color","#fff");
     $(".navbar-nav > li").eq(0).hover(function(){
     $(this).parent().find("a").css("color","#000");
     $(".icon").css("fill","#333");
     }, function(){
     $(this).parent().find("a").css("color","#fff");
     $(".icon").css("fill","#000");
     }
     );
     /!*  $(".navbar-nav > li > a").css("color","#fff");*!/
     zsx_vdo.play();
     $(".zsx_text").eq(2).animate({
     opacity: 1,
     left: "2%"
     },1300);
     }
     }else{
     $(".open-menu-bar").css("background-color","#000");
     $(".navbar-nav > li a").css("color","#000");
     $(".icon").css("fill","#333");
     /!* $(".navbar-nav > li > a").css("color","#333");*!/
     }*/
    $("#zsx_banner_inner")[0].style.left=x*(-100)+"%";
}

change();
setInterval(change,100);
/*banner里面的文本zindex*/
$(".zsx_text").css("z-index","1");
/*banner尺寸*/
var hei=$(window).height();
var wid=$(window).width();
$(window).resize(function () {
    hei=$(window).height();
    wid=$(window).width();
    $(".zsx_banner").css("height",hei);
    $(".zsx_vdo").attr("height",hei);
    $("#zsx_banner_inner").css("height",hei);
    $("#zsx_banner_inner>div").css("height",hei);
    $("#zsx_banner_inner").css("width",wid*5);
    $("#zsx_banner_inner>div").css("width",wid);
    /*  $(".zsx_ban1").css("width",wid);
     $(".zsx_ban1").css("height",hei);
     $(".zsx_ban2").css("width",wid);
     $(".zsx_ban2").css("height",hei);
     $(".zsx_ban3").css("width",wid);
     $(".zsx_ban3").css("height",hei);
     $(".zsx_ban4").css("width",wid);
     $(".zsx_ban4").css("height",hei);
     $(".zsx_ban5").css("width",wid);
     $(".zsx_ban5").css("height",hei);*/
})
$(".zsx_banner").css("height",hei);
$(".zsx_vdo").attr("height",hei);

$("#zsx_banner_inner").css("height",hei);
$("#zsx_banner_inner>div").css("height",hei);
$("#zsx_banner_inner").css("width",wid*5);
$("#zsx_banner_inner>div").css("width",wid);
/*   $(".zsx_ban1").css("width",wid);
 $(".zsx_ban1").css("height",hei);
 $(".zsx_ban2").css("width",wid);
 $(".zsx_ban2").css("height",hei);
 $(".zsx_ban3").css("width",w
 id);
 $(".zsx_ban3").css("height",hei);
 $(".zsx_ban4").css("width",wid);
 $(".zsx_ban4").css("height",hei);
 $(".zsx_ban5").css("width",wid);
 $(".zsx_ban5").css("height",hei);*/

/*底部*/
function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};
