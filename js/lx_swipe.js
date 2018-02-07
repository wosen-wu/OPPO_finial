/**
 * Created by Administrator on 2018/1/21.
 */
/**
 * @author accountwcx@qq.com
 * http://git.oschina.net/accountwcx/rhui
 *
 * swipe�¼�������swipeLeft��swipeRight��swipeUp��swipeDown��
 * ���÷���
 * Rhui.mobile.swipeLeft(el, callback, options)
 * Rhui.mobile.swipeRight(el, callback, options)
 * Rhui.mobile.swipeUp(el, callback, options)
 * Rhui.mobile.swipeDown(el, callback, options)
 * ���ʹ��jQuery�����÷���
 * $(el).rhuiSwipe('swipeLeft', callback, options);
 * $(el).rhuiSwipe('swipeRight', callback, options);
 * $(el).rhuiSwipe('swipeUp', callback, options);
 * $(el).rhuiSwipe('swipeDown', callback, options);
 */
(function(window, $){
    var Rhui = window.Rhui || {};
    window.Rhui = Rhui;
    Rhui.mobile = (function(){
        var touch = {
            distance: 30,  //�������룬�����þ��봥��swipe�¼�����λ���ء�
            duration: 1000 //����ʱ����������ʱ�䲻����swipe����λ���롣
        };

        /**
         * ���¼�
         * @param  el        �����¼���Ԫ��
         * @param  swipe     �¼����ƣ���ѡֵΪswipeLeft,swipeRight,swipeUp,swipeDown
         * @param  callback  �¼��ص�����
         * @param  isStopPropagation   �Ƿ�ֹͣð�ݣ�trueΪֹͣð��
         * @param  isPreventDefault    �Ƿ���ֹĬ���¼���trueΪ��ֹĬ���¼�
         * @param  triggerOnMove       swipe�¼������ִ�����ʽ��һ������touchmove�����У�ֻҪ���㻬������������������
         *                             һ������touchend�У����뻬�������жϣ�������㻬�����봥����
         *                             Ĭ������touchend�д�����
         */
        function bindSwipe(el, swipe, callback, triggerOnMove, isStopPropagation, isPreventDefault){
            var startPoint, endPoint, timer;

            /**
             * ���㻬������
             * ���ȸ���x�����y���򻬶��ĳ��Ⱦ�������x������y������¼���
             * Ȼ�����жϾ���Ļ�������
             * ����������벻���������жϷ���
             */
            function swipeDirection(x1, y1, x2, y2){
                var diffX = x1 - x2,
                    diffY = y1 - y2,
                    absX = Math.abs(diffX),
                    absY = Math.abs(diffY),
                    swipe;

                if(absX >= absY){
                    if(absX >= touch.distance){
                        swipe = diffX > 0 ? 'swipeLeft' : 'swipeRight';
                    }
                }else{
                    if(absY >= touch.distance){
                        swipe = diffY > 0 ? 'swipeUp' : 'swipeDown';
                    }
                }

                return swipe;
            }

            // ������λ�������
            function clearSwipe(){
                startPoint = undefined;
                endPoint = undefined;

                if(timer !== undefined){
                    clearTimeout(timer);
                    timer = undefined;
                }
            }

            /**
             * �ж��Ƿ�����������������������ִ��swipe�¼�
             * @param  el     {HTMLElement}  Ԫ��
             * @param  event  {Event}        Touchԭʼ�¼�
             * @param  return ���ִ�����¼����ͷ���true��
             */
            function execSwipe(el, event){
                if(startPoint && endPoint && swipeDirection(startPoint.x, startPoint.y, endPoint.x, endPoint.y) === swipe){
                    callback.call(el, event);
                    return true;
                }
            }

            el.addEventListener('touchstart', function(event){
                var self = this, touchPoint = event.touches[0];

                if(isStopPropagation){
                    event.stopPropagation();
                }

                if(isPreventDefault){
                    event.preventDefault();
                }

                startPoint = {
                    x: Math.floor(touchPoint.clientX),
                    y: Math.floor(touchPoint.clientY)
                };

                timer = setTimeout(function(){
                    //�����ʱ����ձ���touch����
                    clearSwipe();
                }, touch.duration);
            });

            el.addEventListener('touchmove', function(event){
                var self = this, touchPoint = event.touches[0];

                if(isStopPropagation){
                    event.stopPropagation();
                }

                if(isPreventDefault){
                    event.preventDefault();
                }

                if(startPoint){
                    endPoint = {
                        x: Math.floor(touchPoint.clientX),
                        y: Math.floor(touchPoint.clientY)
                    };

                    //ִ��swipe�¼��жϣ��Ƿ���ϴ����¼�
                    if(triggerOnMove){
                        if(execSwipe(self, event)){
                            clearSwipe();
                        }
                    }
                }
            });

            el.addEventListener('touchend', function(event){
                if(isStopPropagation){
                    event.stopPropagation();
                }

                if(isPreventDefault){
                    event.preventDefault();
                }

                execSwipe(self, event);
                //�������touch����
                clearSwipe();
            });
        }

        /**
         * @param  el        {HTMLElement}  HTMLԪ��
         * @param  callback  {Function}     �¼��ص�����
         * @param  options   {Object}       ��ѡ����
         *                   isStopPropagation  {Boolean}  �Ƿ�ֹͣð�ݣ�trueΪֹͣð��
         *                   isPreventDefault   {Boolean}  �Ƿ���ֹĬ���¼���trueΪ��ֹĬ���¼�
         *                   triggerOnMove      {Boolean}
         *                                       swipe�¼������ִ�����ʽ��һ������touchmove�����У�ֻҪ���㻬������������������
         *                                       һ������touchend�У����뻬�������жϣ�������㻬�����봥����
         *                                       Ĭ��ֵΪfalse����touchend�д�����
         */
        touch.swipeLeft = function(el, callback, options){
            if(options){
                bindSwipe(el, 'swipeLeft', callback, options.triggerOnMove, options.isStopPropagation, options.isPreventDefault);
            }else{
                bindSwipe(el, 'swipeLeft', callback);
            }

        };

        touch.swipeRight = function(el, callback, options){
            if(options){
                bindSwipe(el, 'swipeRight', callback, options.triggerOnMove, options.isStopPropagation, options.isPreventDefault);
            }else{
                bindSwipe(el, 'swipeRight', callback);
            }
        };

        touch.swipeUp = function(el, callback, options){
            if(options){
                bindSwipe(el, 'swipeUp', callback, options.triggerOnMove, options.isStopPropagation, options.isPreventDefault);
            }else{
                bindSwipe(el, 'swipeUp', callback);
            }
        };

        touch.swipeDown = function(el, callback, options){
            if(options){
                bindSwipe(el, 'swipeDown', callback, options.triggerOnMove, options.isStopPropagation, options.isPreventDefault);
            }else{
                bindSwipe(el, 'swipeDown', callback);
            }
        };

        return touch;
    })();

    // ע��jquery����
    if($ && $.fn){
        $.fn.extend({
            /**
             * ģ��touch swipe�¼���֧����ʽ���á�
             * @param   name      {String}    swipe�¼����ƣ�ֵ��swipLeft��swipeRight��swipeUp��swipeDown��
             * @param   callback  {Function}  swipe�¼��ص�����
             * @param   opts      {Object}    ��ѡ����
             *                                isStopPropagation  {Boolean}  �Ƿ�ֹͣð�ݣ�trueΪֹͣð��
             *                                isPreventDefault   {Boolean}  �Ƿ���ֹĬ���¼���trueΪ��ֹĬ���¼�
             *                                triggerOnMove      {Boolean}  swipe�¼������ִ�����ʽ��һ������touchmove�����У�ֻҪ���㻬������������������
             *                                                              һ������touchend�У����뻬�������жϣ�������㻬�����봥����
             *                                                              Ĭ��ֵΪfalse����touchend�д�����
             */
            rhuiSwipe: function(name, callback, opts){
                var fnSwipe = Rhui.mobile[name];

                if(this.length > 0 && fnSwipe){
                    this.each(function(){
                        fnSwipe(this, callback, opts);
                    });
                }

                return this;
            }
        });
    }
})(window, $);