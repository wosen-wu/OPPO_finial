/**
 * Created by Administrator on 2018/1/19.
 */
$(function () {
    //---------iframe�ײ��߶�����Ӧ
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
    /*  -----------------------------------ͷ������-----------------------------------*/
    /*����li��������*/
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
    /*��ȡ��Ļ�ߴ磬��nav�����ֲ������Ļ�Ŀ��*/
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

    /*��ת���м*/
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
    /*  ��ת��ͷ*/
    $('#title-openMenu2').click(function () {
        $(this).toggleClass('isOpen');
    });
    /* ���м�����һ��li�ĵ���¼�*/
    $("#title-openMenu2").click(function () {
        if ($(window).outerWidth() <= 768) {
            $(".zsx_lt_bot").slideToggle();
            $('.topLi').css('height', $(window).outerHeight() - $('#zsx_navTop .myNavHead').outerHeight())
        }
    });
    /*  �������м��һ��li��bug*/
    $(window).resize(function () {
        if ($(window).outerWidth() > 768) {
            $(".zsx_lt_bot").hide();
            $('#title-openMenu').hide();
        } else {
            $('#title-openMenu').show();
            $('#title-openMenu2').show();
        }
    });

    /*  -----------------------------------ͷ����������-----------------------------------*/


    /*  -----------------------------------��ҳЧ����ʼ-----------------------------------*/
    var index = 0;//ȫ�ֱ�������������
    var sclnum = 0;//��Ҫ�����еġ�����ֹ��ι����¼�����/*ÿ�ι������ʱ���Ǻܡ��ײС���һ���ӹ����ܴ�һ�����ȣ�������һС��һС���������������͵����˹�����ʱ����δ���onmousewheel�¼���*/
    var done = true;
    /*��Ҫ�����еġ����������� var done=true ,scrollFunc�¼����һ�����ж�doneΪtrueʱ��������,��������.animate֮ǰ��֮��done=false(�Ӵ�,�¼���Ч)
     animate����һ��callback,ʹdone=true(Ҳ���Ƕ�������,�¼��������Ч)��Ҳ���ǲ�дdone��ôscrollFunc�¼�ֻ��ִ��һ�Ρ�*/

    //��������
    function numFix(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

    //  ��ͼƬ�趨��
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

    //  ÿ��һ���¼������С��������Ӧʽ
    setInterval(set, 50);

    //��Ļ�ı��Сʱ�������¼�,������ҳ�������ط��ı��С֮��marginֵ���ֲ��
    //��Ϊ���ö�ʱ�������Կ��Բ��õ���resize�¼�
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

    //  ��li�������ñ���ͼƬ����ÿ��li���section��������
    $('#lx_img_wrap li').not('.lxFoot').each(function (i) {
        $(this).css({
            //���ܶ�д��backgroundһ������
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


    //������ر仯
    function go(n) {

        if (index < $('#lx_img_wrap li').length - 2 && done) {//�������һҳ��ʱ��
            index += n;
            if (index == -1) {
                //��һ�ŵ�ʱ��index����Ϊ0�����Ҳ���ִ������Ķ���
                index = 0;
            } else {
                sclnum++;//����һ��
                done = false;

                //ֻ���ڹ��ֹ���һ��ʱ��ִ������ġ�
                if (sclnum == 1) {
                    //���½�����
                    if (n == 1) {//���¹�
                        $('#lx_page_text').css({
                            bottom: '0',
                            opacity: 0
                        }).animate({
                            bottom: '4.5%',
                            opacity: 1
                        }, 1000, 'linear');
                    } else {//���Ϲ�
                        $('#lx_page_text').css({
                            bottom: '20%',
                            opacity: 0
                        }).animate({
                            bottom: '4.5%',
                            opacity: 1
                        }, 1000);
                    }
                    //���½�����
                    $('#curCounter').stop().animate({'top': -n * 100 + '%'}, 400, 'linear', function () {
                        //˭����animate�������ûص��������ڵ�thisָ��˭
                        $(this).text(numFix(index + 1)).css('top', n * 100 + '%').animate({
                            'top': '0'
                        }, 600, 'linear')
                    });
                    //$('#curCounter').css('transform','translate3d(0px, 35px, 0px)' );
                    //ͼƬ�л�
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: -index * set()
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//����Ϊ0
                    });
                }
            }
        } else if (index == $('#lx_img_wrap li').length - 2 && done) {
            index += n;
            sclnum++;//����һ��
            done = false;

            //ֻ���ڹ��ֹ���һ��ʱ��ִ������ġ�
            if (sclnum == 1) {
                if (n == 1) {
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: '-=' + setIframeHeight(document.getElementById('external-frame'))
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//����Ϊ0
                    });

                } else {

                    $('#lx_page_text').css({
                        bottom: '20%',
                        opacity: 0
                    }).animate({
                        bottom: '4.5%',
                        opacity: 1
                    }, 1000);

                    //���½�����
                    $('#curCounter').stop().animate({'top': -n * 100 + '%'}, 400, 'linear', function () {
                        //˭����animate�������ûص��������ڵ�thisָ��˭
                        $(this).text(numFix(index + 1)).css('top', n * 100 + '%').animate({
                            'top': '0'
                        }, 600, 'linear')
                    });

                    //ͼƬ�л�
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: -index * set()
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//����Ϊ0
                    });

                }
            }

        } else if (index == $('#lx_img_wrap li').length - 1 && done) {
            //index += n;
            sclnum++;//����һ��
            done = false;

            //ֻ���ڹ��ֹ���һ��ʱ��ִ������ġ�
            if (sclnum == 1) {
                if (n == 1) {
                    /*$('#lx_img_wrap ul').stop().animate({
                     marginTop: '-=' + setIframeHeight(document.getElementById('external-frame'))
                     }, 1000, function () {
                     done = true;
                     sclnum = 0;//����Ϊ0
                     });*/

                    done = true;
                    sclnum = 0;

                } else {
                    index = $('#lx_img_wrap li').length - 2;
                    $('#lx_img_wrap ul').stop().animate({
                        marginTop: '+=' + setIframeHeight(document.getElementById('external-frame'))
                    }, 1000, function () {
                        done = true;
                        sclnum = 0;//����Ϊ0
                    });
                }
            }
        }/*else if (index == $('#lx_img_wrap li').length && done){
            index = $('#lx_img_wrap li').length - 2;
            $('#lx_img_wrap ul').stop().animate({
                marginTop: '+=' + setIframeHeight(document.getElementById('external-frame'))
            }, 1000, function () {
                done = true;
                sclnum = 0;//����Ϊ0
            });
        }*/

            console.log(index);
    }


    //�����¼�����
    function scrollFunc(e) {
        e = e || window.event; //��e��ֵevent����
        if (e.wheelDelta) {//IE/Opera/Chrome ���ʱִ��
            if (e.wheelDelta <= -120) {//�жϹ����Ƿ��¹�
                go(1);
            } else if (e.wheelDelta >= 120) {//�жϹ����Ƿ����Ϲ���
                go(-1);
            }
        } else if (e.detail) {//��� ���ʱִ��
            if (e.detail >= 3) {//�������¹���ʱ
                go(1);
            } else if (e.detail <= -3) {//�жϹ����Ƿ����Ϲ���
                go(-1);
            }
        }

    }

    //ע���¼�
    //���������¼��󶨷�ʽ
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //������������¼���ʽ ��IE/Opera/Chrome
    window.onmousewheel = document.onmousewheel = scrollFunc;

    //����ղ��¼�
    $('#favorBtn').click(function () {
        $(this).find('img').attr('src', '../imgs/lx/icon-favor-active.png');
    });

    //�������ͼƬ�ɰ�
    $('#openMenu').click(function () {
        $(this).toggleClass('isOpen');//ͼ�����ʽ

        $('#zsx_navTop').toggle();

        if ($(this).hasClass('isOpen')) {
            $('.imgHead').css('visibility', 'visible');//�㿪ʱ��ʾ��������hide��show
            //�̶�����ͼƬ
            $('#lx_slideIn').css({
                'background': 'url("../imgs/lx/' + numFix(index + 1) + '.jpg")',
                backgroundPosition: ' center center',
                backgroundSize: 'cover'
            }).show(0, function () {
                //��bottom��λ��ʵ�ִ����滮����Ч��
                $('.myImg>div').slideDown(1000);
            });
            //ͨ�������ķ�ʽ����αԪ��
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

    //����л�ͼƬ
    $('.myImg').click(function () {

        $(window).scrollTop(0);
        //������ʽ
        $('#openMenu').removeClass('isOpen');//���������
        $('#lx_myMenus .menus-btn').show();//�������ʾ
        $('#lx_slideIn').removeClass('on').css('background', '');//ȥ�����񱳾�
        $('.myImg>div').slideUp(600, function () {//��������div����
            //�ٽ������ɰ�����
            $('#lx_slideIn').hide();
        });

        $('#zsx_navTop').show();
        //�ٽ�����Ӧ������
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

        //��ǰindex�������������Ա�


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

