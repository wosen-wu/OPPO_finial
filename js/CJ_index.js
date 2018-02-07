window.onload=function () {
    $('html,body').stop().animate({
        scrollTop:0
    },1);
    $('.banner1_fontLeft').css('left','35px');
    $('.banner1_fontRgt').css('left','708px');
    setTimeout("$('.fiPhone1').addClass('trans')",700);
};

//-------------------------导航部分-----
$('.headMenu ul li').hover(function () {
    $(this).siblings().children('a').removeClass('active');
    $(this).children('a').addClass('active');
});

//-------------------------滚动事件-----
    var movH;
    var op;
    var st=796;
    var t=0;
    var srt=0;
    // console.log(window.innerHeight);
        scro();
    $(window).scroll(scro);
    $(window).resize(scro);
        function scro() {
            srt = $(this).scrollTop();
            movH = -$(this).scrollTop() / 1.5;
            op = 1 - srt / 300;
            if (movH < -345) {
                movH = -345
            }
            $('.banner1_fontLeft,.banner1_fontRgt,.banner1_fontLeft2,.banner1_fontRgt2').css({
                'transform': 'translate(0px,' + movH + 'px)',
                opacity: op
            });
            // console.log($('.banner1_fontLeft').css('top'));

            //scroll到一定值,banner大图自动变定位属性，跟随滚动
            // console.log($('.CJ_banner1').height());
            // console.log($('.fiPhone1').css('top'));
            // console.log($(window).width());
              if ($(window).width() >= 768 && $(window).width() < 1025) {
                  console.log(111);
                  if (srt < 236.8) {
                      $('.fiPhone1_md').css({
                          'position': 'fixed',
                          top: 126 + 'px'
                      })
                  }
                  else {
                      $('.fiPhone1_md').css({
                          'position': 'absolute',
                          top: 362.8 + 'px'
                      });
                  }
              }
            if ($(window).width() >= 1025) {
                if (srt < 339.8) {
                    $('.fiPhone1').css({
                        'position': 'fixed',
                        left: '50%',
                        top: 181 + 'px'
                    })
                }
                else {
                    $('.fiPhone1').css({
                        'position': 'absolute',
                        left: '50%',
                        top: 520.8 + 'px'
                    });
                }
            }


            //导航变黑
            if (srt > $('.CJ_special').offset().top - 62 && srt < $('.CJ_backCamera').offset().top - 62) {
                $('header').addClass('black');
            } else {
                $('header').removeClass('black');
            }


            //滚动到相应模块  描述文字和图片渐显示
            $('.wraper .descWrap').each(function () {
                console.log($(window).height());
                if (($(this).offset().top - $(window).height()-200) < srt) {
                    tran($(this));
                    // window.onmousewheel = document.onmousewheel = scrollFunc;

                } else {
                    untran($(this));
                }
            });

              //图片上下浮动
            $('.wraper>figure').each(function () {
                if (srt > $(this).offset().top - window.innerHeight && srt < $(this).offset().top + $(this).height()) {
                    fd($(this));
                }
            });


            //记录上次滚动完的scrollTop值
            t = srt;
        }

//-----------------sec描述过渡----
//过渡函数
   function tran(node) {
       node.children().addClass('animate');
       node.prevAll().addClass('trans');
   }
   function untran(node) {
       node.children().removeClass('animate');
       node.prevAll().removeClass('trans');
   }




/*//img浮动函数
var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            //事件
            index+=2;
            console.log(index);
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            //事件
            index-=2;
            console.log(index);
        }
    }
};*/
var index=0;
function fd(node) {
/*   if(t>srt){
       //向上滑动
       index+=3;
   }else {
       //向下滑动
       index-=3;
   }*/
    index=srt+window.innerHeight-node.offset().top;
    // console.log(index/20);
    node.css({
        transform: 'translate(0,' + (-index/13) + 'px)'
        // transform: 'translate(0,' + index + 'px)'
    });
};
/*function banUp() {
    var H = $('.CJ_banner1').height() - $('.fiPhone1').height() - 111;
    // console.log(H);
    console.log(Top);
    if (srt >H - Top) {
        $('.fiPhone1').css({
            'position': 'absolute',
            left: '50%',
            top: H + 'px'
        });
    }
    if (srt <= H - Top) {
            $('.fiPhone1').css({
                'position': 'fixed',
                left: '50%',
                top: Top + 'px'
            });
        }
}*/


