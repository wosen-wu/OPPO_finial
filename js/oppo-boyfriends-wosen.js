/**
 * Created by Administrator on 2018/1/23.
 */
window.onload=function(){
    /*这是顶部的固定浮动显示和隐藏*/
    $(document).scroll(function(){   //页面加载时，获取滚动条初始高度
        var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
        /*console.log(distance); //打印滚动条不同高度的位置的值*/
        if(distance >=710) {  //当滚动条高度为0时
            $("#xf-Head").css("display","none");
            //移除某某css
        }else {
            $("#xf-Head").css("display","block");  //添加某某css
        }
    });
    /*这是点击放大事件*/
    /*这是文字弹出效果*/
    /*$(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        }
    });*/
    /*图片点击效果，视频点击效果*/
    $(".close").click(function(){
        console.log(this);
        $('.modal').slideUp();
        $('.modal-backdrop').removeClass();
        $(".modal-open").removeClass();
    });
    /*图片点击*/
    $(".cnt li a .real").click(sco);
    function sco(){
        $(".motai").css("display","block");
        console.log($(this));
        var a=$(this).attr('src');
        $(".motaiimg").attr("src",a);
        $(".caption").html=$(this).attr("alt");
    }
    function closeimg(){
        $(".motai").css("display","none");
    }
    $(".closeimg").click(closeimg);


    /*这是轮播拖拽效果 */
        var $slider = $('.xf-slider1');
        var $icons = $('.xf-icons');
        var $li = $slider.children('li');
        var $click1=$(".left");
        var $click2=$(".right");
        var WIDTH = $li.width();
        var SIZE = $li.size();
        /*$slider.append($li.first().clone());*/
        //console.log(WIDTH + '-' + SIZE);
        var ox,mx,ux,sumx,scroll,i=0,bool=false,staut=true;
        $li.find('a').click(function(){
            //阻止轮播元素的默认点击事件
            return false;
        });

        $slider.mousedown(function(e){
            //鼠标左键轮播区域
            if(e.target.tagName == 'IMG' && e.button == 0){
                //左键图片
                staut = true;
                //初始化拖拽,状态为true,可以触发点击事件
                sumx = 0;
                //初始化鼠标偏移为0
                bool = true;
                //记录左键状态
                ox = e.pageX;
                //记录鼠标初始坐标
                scroll = $slider.parent().scrollLeft();
                //记录初始轮播水平滚动偏移
                e.preventDefault();
                //阻止鼠标点击默认事件
            }
        });
        $slider.mousemove(function(e){
            //鼠标在轮播区域移动
            if(bool){//左键状态
                staut = false;
                //已经拖拽,状态为false,不再触发点击事件
                mx = e.pageX;
                //记录鼠标实时坐标
                sumx = ox - mx;
                //记录鼠标坐标偏移
                $slider.parent().scrollLeft(scroll+sumx);
            }
        });
        $slider.mouseout(function(e){
            //鼠标离开轮播区域
            if(bool){
                //左键状态
                staut = true;
                //已经拖拽,但是离开了轮播区域,
                //状态为true,可以触发点击事件
                bool = false;//释放左键状态
                sumx > 0 && i < SIZE && i++;//下一个
                sumx < 0 && i > 0 && i--;//上一个
                $slider.parent().stop().animate({scrollLeft:i*WIDTH},300,function(){
                    if(i == SIZE){
                        i = 0;
                        $slider.parent().scrollLeft(0);
                    }
                    $icons.find('.curr').removeClass('curr').end().children().eq(i).addClass('curr');
                });//完成拖拽
            }
        });
        $slider.mouseup(function(e){
            //鼠标释放,完成click事件
            bool = false;
            //释放左键状态
            if(staut && e.button == 0){
                //没有拖拽或者拖拽失效,且是左键,触发点击事件
                window.location.href = $(e.target).parent().attr('href');
                //触发点击事件
            }else if(!staut && e.button == 0){
                //成功拖拽,且是左键
                sumx > 0 && i < SIZE && i++;//下一个
                sumx < 0 && i > 0 && i--;//上一个
                $slider.parent().stop().animate({scrollLeft:i*WIDTH},300,function(){
                    if(i == SIZE){
                        //最后一个
                        i = 0;
                        $slider.parent().scrollLeft(0);//归位
                    }
                    $icons.find('.curr').removeClass('curr').end().children().eq(i).addClass('curr');
                });//完成拖拽
            }
        });
        /*左右耳朵点击*/
        $click1.click(function(e){
            setSlider();

        });
        $click2.click(function(e){
            setSlider2();

        });
        function setSlider2(){
            i < SIZE && i++;//下一个
            var a=-284;
            $slider.parent().stop().animate({scrollLeft:i*WIDTH},300,function(){
                if(i== SIZE){//最后一个
                    i = 0;
                    $slider.parent().scrollLeft(0-a);
                }
                $icons.find('.curr').removeClass('curr').end().children().eq(i).addClass('curr');
            });//完成拖拽
        }
        function setSlider(){
            i < SIZE && i++;//下一个
            $slider.parent().stop().animate({scrollLeft:i*WIDTH},300,function(){
                if(i == SIZE){//最后一个
                    i = 0;
                    $slider.parent().scrollLeft(0);
                }
                $icons.find('.curr').removeClass('curr').end().children().eq(i).addClass('curr');
            });//完成拖拽
        }
        /*点击下面的原点*/
        $(".xf-icons span").click(function(){
            var sidex=$(this).index();
            $slider.parent().animate({scrollLeft:sidex*WIDTH},300,function(){
                /*if(i == SIZE){//最后一个
                 i = 0;
                 $slider.parent().scrollLeft(0);
                 }*/
            })//完成拖拽
            $(this).siblings().removeClass('curr');
            $(this).addClass('curr');

        });
        var timer = setInterval(function(){
         setSlider();
         },3000);
        $slider.hover(function(){
         if(timer){
         clearInterval(timer);
         timer = null;
         }
         },function(){
         timer = setInterval(function(){
         setSlider();
         },3000);
         });
        $(window).resize(function(){
            WIDTH = $li.width();
            $slider.parent().scrollLeft(i*WIDTH);//归位
            //console.log(WIDTH + '-' + i);
        });
};