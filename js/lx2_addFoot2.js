/**
 * Created by Administrator on 2018/1/19.
 */
$(function () {
    //---------iframe底部高度自适应
    function setIframeHeight(iframe) {
        if (iframe) {
            var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
                iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
            }
        }

        return iframe.height;
    }

    setIframeHeight(document.getElementById('external-frame'));
    /*  -----------------------------------头部导航-----------------------------------*/
    /*经过li出下拉框*/
    $(".xians").mouseenter(function () {
        if ($(window).outerWidth() > 768) {
            $("#zsx_navTop").addClass('active').css("transition", "");
            $(".zsx_hoVer").show().stop().animate({
                opacity: 1
            }, 500);
            $(".zsx_boxShadw").animate({
                opacity: .2
            }, 10);
            $(".zsx_boxShadw").css("z-index", "3")
        }
    });
    $(".xians").mouseleave(function () {
        $("#zsx_navTop").removeClass('active').css("transition", "all 1s");
        $(".zsx_hoVer").animate({
            opacity: 0
        }, 500, function () {
            $(".zsx_hoVer").hide();

        });
        $(".zsx_boxShadw").animate({
            opacity: 0
        }, 10);
        $(".zsx_boxShadw").css("z-index", "0")
    });
    /*获取屏幕尺寸，让nav的遮罩层等于屏幕的宽高*/
    /*$(window).resize(function () {
        setIframeHeight(document.getElementById('external-frame'));
    });*/


    $(".zsx_navToprigh ul li").hover(function () {
        $(this).find("img:eq(0)").stop().animate({
            top: "-6"
        }, 400);
        $(this).find("img:eq(1)").stop().animate({
            top: "-14"
        }, 400);
    }, function () {
        $(this).find("img:eq(0),img:eq(1)").stop().animate({
            top: "-10"
        }, 400);
    });

    /*旋转面包屑*/
    $('#title-openMenu').click(function () {
        $(this).toggleClass('isOpen');
        $('#zsx_navTop').toggleClass('mySlide');
        $('#mySlideBox').css('height', $(window).outerHeight()).slideToggle();

        if ($(this).hasClass('isOpen')) {

            $('#topLi').slideDown(1000, function () {
                console.log(111111);
            });
        } else {
            $(".zsx_lt_bot").hide();
        }
    });
    /*  旋转箭头*/
    $('#title-openMenu2').click(function () {
        $(this).toggleClass('isOpen');
    });
    /* 面包屑里面第一个li的点击事件*/
    $("#title-openMenu2").click(function () {
        if ($(window).outerWidth() <= 768) {
            $(".zsx_lt_bot").slideToggle();
            $('.topLi').css('height', $(window).outerHeight() - $('#zsx_navTop .myNavHead').outerHeight())
        }
    });
    /*  调整面包屑第一个li的bug*/
    $(window).resize(function () {
        if ($(window).outerWidth() > 768) {
            $(".zsx_lt_bot").hide();
            $('#title-openMenu').hide();
        } else {
            $('#title-openMenu').show();
            $('#title-openMenu2').show();
        }
    });

    /*  -----------------------------------头部导航结束-----------------------------------*/


    /*  -----------------------------------主页效果开始-----------------------------------*/
    var index = 0;//全局变量：控制索引
    var sclnum = 0;//重要必须有的。。防止多次滚动事件发生/*每次滚动鼠标时都是很“凶残”的一下子滚动很大一个幅度，而不是一小格一小格的慢慢滚动，这就导致了滚动的时候会多次触发onmousewheel事件，*/
    var done = true;
    /*重要必须有的。。做个变量 var done=true ,scrollFunc事件里第一步就判断done为true时继续运行,否则跳出.animate之前或之后done=false(从此,事件无效)
     animate增加一个callback,使done=true(也就是动画结束,事件会继续有效)。也就是不写done那么scrollFunc事件只会执行一次。*/

    //修正数字
    function numFix(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

    //  给图片设定高
    function set() {
        var pagewin = $(window).width();
        var pagehei = $(window).height();
        $('#lx_img_wrap li').not('.lxFoot').css({
            //"width": pagewin,
            "height": pagehei
//                marginTop: -index * pagehei
        });

        return pagehei;
    }

    //  每隔一段事件重设大小，符合响应式
    setInterval(set, 50);

    //屏幕改变大小时触发的事件,避免网页在其他地方改变大小之后，margin值出现差错
    //因为启用定时器，所以可以不用调用resize事件
    $(window).resize(function () {
        $('#lx_img_wrap ul').not('.lxFoot').css({
            marginTop: -index * set()
        });
        if ($(window).width() > 768) {
            $('#lx_myMenus .menus-btn-share').show();
        } else {
            $('#lx_myMenus .menus-btn-share').hide();
        }
    });

    //  给li设置设置背景图片，给每个li里的section设置字体
    $('#lx_img_wrap li').not('.lxFoot').each(function (i) {
        $(this).css({
            //不能都写在background一个里面
            background: 'url("../imgs/lx/' + numFix(i + 1) + '.jpg")',
            backgroundPosition: ' center center',
            backgroundSize: 'cover'
        });
        $('.myImg').eq(i).find('div').css({
            background: 'url("../imgs/lx/' + numFix(i + 1) + '.jpg")',
            backgroundPosition: ' center center',
            backgroundSize: 'cover'
        });
        $('.myImg>section').eq(i).text(i + 1);
    });


    //滚动相关变化
    function go(n) {

        if (index < $('#lx_img_wrap li').length - 2 && done) {//不在最后一页的时候
            index += n;
            if (index == -1) {
                //第一张的时候将index重置为0，并且不再执行下面的动作
                index = 0;
            } else {
                sclnum++;//滚动一次
                done = false;

                //只有在滚轮滚动一次时才执行下面的。
                if (sclnum == 1) {
                    //左下角文字
                    if (n == 1) {//向下滚
                        $('#lx_page_text').css({
                            bottom: '0',
                            opacity: 0
                        }).animate({
                            bottom: '4.5%',
                            opacity: 1
                        }, 1000, 'linear');
                    } else {//向上滚
                        $('#lx_page_text').css({
                            bottom: '20%',
                            opacity: 0
                        }).animate({
                            bottom: '4.5%',
                            opacity: 1
                        }, 1000);
                    }
                    //右下角数字
                    $('#curCounter').stop().animate({'top': -n * 100 + '%'}, 400, 'linear', function () {
                        //谁调用animate方法，该回调函数体内的this指向谁
                        $(this).text(numFix(index + 1)).css('top', n * 100 + '%').animate({
                            'top': '0'
                        }, 600, 'linear')
                    });
                    //$('#curCounter').css('transform','translate3d(0px, 35px, 0px)' );
                    //图片切换
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: -index * set()
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//重置为0
                    });
                }
            }
        } else if (index == $('#lx_img_wrap li').length - 2 && done) {
            index += n;
            sclnum++;//滚动一次
            done = false;

            //只有在滚轮滚动一次时才执行下面的。
            if (sclnum == 1) {
                if (n == 1) {
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: '-=' + setIframeHeight(document.getElementById('external-frame'))
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//重置为0
                    });

                } else {

                    $('#lx_page_text').css({
                        bottom: '20%',
                        opacity: 0
                    }).animate({
                        bottom: '4.5%',
                        opacity: 1
                    }, 1000);

                    //右下角数字
                    $('#curCounter').stop().animate({'top': -n * 100 + '%'}, 400, 'linear', function () {
                        //谁调用animate方法，该回调函数体内的this指向谁
                        $(this).text(numFix(index + 1)).css('top', n * 100 + '%').animate({
                            'top': '0'
                        }, 600, 'linear')
                    });

                    //图片切换
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: -index * set()
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//重置为0
                    });

                }
            }

        } else if (index == $('#lx_img_wrap li').length - 1 && done) {
            //index += n;
            sclnum++;//滚动一次
            done = false;

            //只有在滚轮滚动一次时才执行下面的。
            if (sclnum == 1) {
                if (n == 1) {
                    /*$('#lx_img_wrap ul').stop().animate({
                     marginTop: '-=' + setIframeHeight(document.getElementById('external-frame'))
                     }, 1000, function () {
                     done = true;
                     sclnum = 0;//重置为0
                     });*/

                    done = true;
                    sclnum = 0;

                } else {
                    index = $('#lx_img_wrap li').length - 2;
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: '+=' + setIframeHeight(document.getElementById('external-frame'))
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//重置为0
                    });
                }
            }
        }/*else if (index == $('#lx_img_wrap li').length && done){
            index = $('#lx_img_wrap li').length - 2;
            $('#lx_img_wrap ul').stop().animate({
                marginTop: '+=' + setIframeHeight(document.getElementById('external-frame'))
            }, 1000, function () {
                done = true;
                sclnum = 0;//重置为0
            });
        }*/

            console.log(index);
    }


    //滚动事件函数
    function scrollFunc(e) {
        e = e || window.event; //给e赋值event对象
        if (e.wheelDelta) {//IE/Opera/Chrome 情况时执行
            if (e.wheelDelta <= -120) {//判断滚轮是否下滚
                go(1);
            } else if (e.wheelDelta >= 120) {//判断滚轮是否往上滚动
                go(-1);
            }
        } else if (e.detail) {//火狐 情况时执行
            if (e.detail >= 3) {//滚轮往下滚动时
                go(1);
            } else if (e.detail <= -3) {//判断滚轮是否往上滚动
                go(-1);
            }
        }

    }

    //注册事件
    //火狐浏览的事件绑定方式
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //其他浏览器绑定事件方式 如IE/Opera/Chrome
    window.onmousewheel = document.onmousewheel = scrollFunc;

    //点击收藏事件
    $('#favorBtn').click(function () {
        $(this).find('img').attr('src', '../imgs/lx/icon-favor-active.png');
    });

    //点击出现图片蒙版
    $('#openMenu').click(function () {
        $(this).toggleClass('isOpen');//图标变样式

        $('#zsx_navTop').toggle();

        if ($(this).hasClass('isOpen')) {
            $('.imgHead').css('visibility', 'visible');//点开时显示，不能用hide和show
            //固定背景图片
            $('#lx_slideIn').css({
                'background': 'url("../imgs/lx/' + numFix(index + 1) + '.jpg")',
                backgroundPosition: ' center center',
                backgroundSize: 'cover'
            }).show(0, function () {
                //用bottom定位，实现从下面划出的效果
                $('.myImg>div').slideDown(1000);
            });
            //通过添加类的方式操作伪元素
            $('#lx_slideIn').addClass('on');
            $('#lx_myMenus .menus-btn').hide();

        } else {
            $('.myImg>div').slideUp(1000, function () {
                $('#lx_slideIn').hide();
            });
            $('.imgHead').css('visibility', 'hidden');
            $('#lx_slideIn').removeClass('on');
            $('#lx_myMenus .menus-btn').show();
            if ($(window).width() >= 769) {
                $('#lx_myMenus .menus-btn-share').show();
            } else {
                $('#lx_myMenus .menus-btn-share').hide();
            }


        }
    });

    //点击切换图片
    $('.myImg').click(function () {

        $(window).scrollTop(0);
        //其他样式
        $('#openMenu').removeClass('isOpen');//变回三条杠
        $('#lx_myMenus .menus-btn').show();//下面的显示
        $('#lx_slideIn').removeClass('on').css('background', '');//去除定格背景
        $('.myImg>div').slideUp(600, function () {//先让所有div收齐
            //再将整个蒙版隐藏
            $('#lx_slideIn').hide();
        });

        $('#zsx_navTop').show();
        //再进行相应的设置
        if (index == $(this).index() - 1) {
            return
        } else if (index < $(this).index() - 1) {
            index = $(this).index() - 2;
            $('#lx_img_wrap ul').css('margin-top', -index * set());
            go(1);
        } else {
            index = $(this).index();
            $('#lx_img_wrap ul').css('margin-top', -index * set());
            go(-1);
        }

        //当前index与点击的序列数对比


    });

    $(window).rhuiSwipe('swipeUp', function () {
        console.log(1);
        go(1)
    });

    $(window).rhuiSwipe('swipeDown', function () {
        console.log(-1);
        go(-1)
    });

});

