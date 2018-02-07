/**
 * Created by DELL on 2018/1/18.
 */
!function(e,t) {
    var i=function() {
            t(e.lazySizes),e.removeEventListener("lazyunveilread",i,!0)
        }
        ;
    t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?i():e.addEventListener("lazyunveilread",i,!0)
}
(window,function(e,t,i) {
        "use strict";
        var r=t.documentElement;
        i.getCustomMedias=function() {
            var e=/['"]/g,r=/\s*\|\s*/
            g,n=/^([a-z0-9_-]+)\s*:\s*(.+)$/i,a=function(t,i) {
                return((getComputedStyle(t,i)|| {
                    getPropertyValue:function() {
                    }
                }).getPropertyValue("content")||"none").replace(e,"").trim()
            }
                ,s=function(e,t) {
                e.split(r).forEach(function(e) {
                        e.match(n)&&(t[RegExp.$1]=RegExp.$2)
                    }
                )
            }
            ;
            return function(e,r) {
                return e=e||i.cfg.customMedia,r=r||t.querySelector("html"),s(a(r,":before"),e),s(a(r,":after"),e),e
            }
        }(),i.updateCustomMedia=function() {
            var e,t,n,a=r.querySelectorAll("source[media][data-media][srcset]");
            for(i.getCustomMedias(),e=0,t=a.length;
                t>e;
                e++)(n=i.cfg.customMedia[a[e].getAttribute("data-media")||a[e].getAttribute("media")])&&a[e].setAttribute("media",n);
            for(e=0,t=(a=r.querySelector("source[media][data-media][srcset] ~ img")).length;
                t>e;
                e++)i.uP(a[e]);
            i.autoSizer.checkElems()
        }
            ,i.getCustomMedias()
    }
),function(e,t) {
    var i=t(e,e.document);
    e.lazySizes=i,"object"==typeof module&&module.exports&&(module.exports=i)
}
(window,function(e,t) {
        "use strict";
        if(t.getElementsByClassName) {
            var i,r,n=t.documentElement,a=e.Date,s=e.HTMLPictureElement,o="addEventListener",l="getAttribute",u=e[o],p=e.setTimeout,c=e.requestAnimationFrame||p,d=e.requestIdleCallback,h=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],m= {
                }
                ,g=Array.prototype.forEach,v=function(e,t) {
                    return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[l]("class")||"")&&m[t]
                }
                ,y=function(e,t) {
                    v(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)
                }
                ,_=function(e,t) {
                    var i;
                    (i=v(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(i," "))
                }
                ,x=function(e,t,i) {
                    var r=i?o:"removeEventListener";
                    i&&x(e,t),f.forEach(function(i) {
                            e[r](i,t)
                        }
                    )
                }
                ,w=function(e,r,n,a,s) {
                    var o=t.createEvent("CustomEvent");
                    return n||(n= {
                    }
                    ),n.instance=i,o.initCustomEvent(r,!a,!s,n),e.dispatchEvent(o),o
                }
                ,b=function(t,i) {
                    var n;
                    !s&&(n=e.picturefill||r.pf)?n( {
                            reevaluate:!0,elements:[t]
                        }
                    ):i&&i.src&&(t.src=i.src)
                }
                ,T=function(e,t) {
                    return(getComputedStyle(e,null)|| {
                    }
                    )[t]
                }
                ,C=function(e,t,i) {
                    for(i=i||e.offsetWidth;
                        i<r.minSize&&t&&!e._lazysizesWidth;
                    )i=t.offsetWidth,t=t.parentNode;
                    return i
                }
                ,S=function() {
                    var e,i,r=[],n=[],a=r,s=function() {
                            var t=a;
                            for(a=r.length?n:r,e=!0,i=!1;
                                t.length;
                            )t.shift()();
                            e=!1
                        }
                        ,o=function(r,n) {
                            e&&!n?r.apply(this,arguments):(a.push(r),i||(i=!0,(t.hidden?p:c)(s)))
                        }
                        ;
                    return o._lsFlush=s,o
                }
                (),P=function(e,t) {
                    return t?function() {
                        S(e)
                    }
                        :function() {
                        var t=this,i=arguments;
                        S(function() {
                                e.apply(t,i)
                            }
                        )
                    }
                },k=function(e) {
                    var t,i=0,r=666,n=function() {
                            t=!1,i=a.now(),e()
                        }
                        ,s=d?function() {
                            d(n, {
                                    timeout:r
                                }
                            ),666!==r&&(r=666)
                        }
                            :P(function() {
                                p(n)
                            }
                            ,!0);
                    return function(e) {
                        var n;
                        (e=!0===e)&&(r=44),t||(t=!0,0>(n=125-(a.now()-i))&&(n=0),e||9>n&&d?s():p(s,n))
                    }
                },M=function(e) {
                    var t,i,r=function() {
                            t=null,e()
                        }
                        ,n=function() {
                            var e=a.now()-i;
                            99>e?p(n,99-e):(d||r)(r)
                        }
                        ;
                    return function() {
                        i=a.now(),t||(t=p(n,99))
                    }
                },E=function() {
                    var s,c,d,f,m,C,E,A,D,O,N,L,R,I,B=/^img$/i,H=/^iframe$/i,F="onscroll"in e&&!/glebot/.test(navigator.userAgent),X=0,j=0,Y=-1,q=function(e) {
                            j--,e&&e.target&&x(e.target,q),(!e||0>j||!e.target)&&(j=0)
                        }
                        ,W=function(e,i) {
                            var r,a=e,s="hidden"==T(t.body,"visibility")||"hidden"!=T(e,"visibility");
                            for(A-=i,N+=i,D-=i,O+=i;
                                s&&(a=a.offsetParent)&&a!=t.body&&a!=n;
                            )(s=(T(a,"opacity")||1)>0)&&"visible"!=T(a,"overflow")&&(r=a.getBoundingClientRect(),s=O>r.left&&D<r.right&&N>r.top-1&&A<r.bottom+1);
                            return s
                        }
                        ,G=function() {
                            var e,a,o,u,p,d,h,m,g,v=i.elements;
                            if((f=r.loadMode)&&8>j&&(e=v.length)) {
                                a=0,Y++,null==R&&("expand"in r||(r.expand=n.clientHeight>500&&n.clientWidth>500?500:370),L=r.expand,R=L*r.expFactor),R>X&&1>j&&Y>2&&f>2&&!t.hidden?(X=R,Y=0):X=f>1&&Y>1&&6>j?L:0;
                                for(;
                                    e>a;
                                    a++)if(v[a]&&!v[a]._lazyRace)if(F)if((m=v[a][l]("data-expand"))&&(d=1*m)||(d=X),g!==d&&(C=innerWidth+d*I,E=innerHeight+d,h=-1*d,g=d),o=v[a].getBoundingClientRect(),(N=o.bottom)>=h&&(A=o.top)<=E&&(O=o.right)>=h*I&&(D=o.left)<=C&&(N||O||D||A)&&(r.loadHidden||"hidden"!=T(v[a],"visibility"))&&(c&&3>j&&!m&&(3>f||4>Y)||W(v[a],d))) {
                                    if(ee(v[a]),p=!0,j>9)break
                                }
                                else!p&&c&&!u&&4>j&&4>Y&&f>2&&(s[0]||r.preloadAfterLoad)&&(s[0]||!m&&(N||O||D||A||"auto"!=v[a][l](r.sizesAttr)))&&(u=s[0]||v[a]);
                                else ee(v[a]);
                                u&&!p&&ee(u)
                            }
                        },V=k(G),$=function(e) {
                            y(e.target,r.loadedClass),_(e.target,r.loadingClass),x(e.target,Z),w(e.target,"lazyloaded")
                        }
                        ,U=P($),Z=function(e) {
                            U( {
                                    target:e.target
                                }
                            )
                        }
                        ,K=function(e,t) {
                            try {
                                e.contentWindow.location.replace(t)
                            }
                            catch(i) {
                                e.src=t
                            }
                        },Q=function(e) {
                            var t,i=e[l](r.srcsetAttr);
                            (t=r.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i)
                        }
                        ,J=P(function(e,t,i,n,a) {
                                var s,o,u,c,f,m;
                                (f=w(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(i?y(e,r.autosizesClass):e.setAttribute("sizes",n)),o=e[l](r.srcsetAttr),s=e[l](r.srcAttr),a&&(u=e.parentNode,c=u&&h.test(u.nodeName||"")),m=t.firesLoad||"src"in e&&(o||s||c),f= {
                                    target:e
                                }
                                    ,m&&(x(e,q,!0),clearTimeout(d),d=p(q,2500),y(e,r.loadingClass),x(e,Z,!0)),c&&g.call(u.getElementsByTagName("source"),Q),o?e.setAttribute("srcset",o):s&&!c&&(H.test(e.nodeName)?K(e,s):e.src=s),a&&(o||c)&&b(e, {
                                        src:s
                                    }
                                )),e._lazyRace&&delete e._lazyRace,_(e,r.lazyClass),S(function() {
                                        (!m||e.complete&&e.naturalWidth>1)&&(m?q(f):j--,$(f))
                                    }
                                    ,!0)
                            }
                        ),ee=function(e) {
                            var t,i=B.test(e.nodeName),n=i&&(e[l](r.sizesAttr)||e[l]("sizes")),a="auto"==n;
                            (!a&&c||!i||!e[l]("src")&&!e.srcset||e.complete||v(e,r.errorClass))&&(t=w(e,"lazyunveilread").detail,a&&z.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,J(e,t,a,n,i))
                        }
                        ,te=function() {
                            if(!c) {
                                if(a.now()-m<999)return void p(te,999);
                                var e=M(function() {
                                        r.loadMode=3,V()
                                    }
                                );
                                c=!0,r.loadMode=3,V(),u("scroll",function() {
                                        3==r.loadMode&&(r.loadMode=2),e()
                                    }
                                    ,!0)
                            }
                        };
                    return {
                        _:function() {
                            m=a.now(),i.elements=t.getElementsByClassName(r.lazyClass),s=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),I=r.hFac,u("scroll",V,!0),u("resize",V,!0),e.MutationObserver?new MutationObserver(V).observe(n, {
                                    childList:!0,subtree:!0,attributes:!0
                                }
                            ):(n[o]("DOMNodeInserted",V,!0),n[o]("DOMAttrModified",V,!0),setInterval(V,999)),u("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e) {
                                    t[o](e,V,!0)
                                }
                            ),/d$|^c/.test(t.readyState)?te():(u("load",te),t[o]("DOMContentLoaded",V),p(te,2e4)),i.elements.length?(G(),S._lsFlush()):V()
                        }
                        ,checkElems:V,unveil:ee
                    }
                }(),z=function() {
                    var e,i=P(function(e,t,i,r) {
                                var n,a,s;
                                if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),h.test(t.nodeName||""))for(n=t.getElementsByTagName("source"),a=0,s=n.length;
                                                                                                                    s>a;
                                                                                                                    a++)n[a].setAttribute("sizes",r);
                                i.detail.dataAttr||b(e,i.detail)
                            }
                        ),n=function(e,t,r) {
                            var n,a=e.parentNode;
                            a&&(r=C(e,a,r),(n=w(e,"lazybeforesizes", {
                                    width:r,dataAttr:!!t
                                }
                            )).defaultPrevented||(r=n.detail.width)&&r!==e._lazysizesWidth&&i(e,a,n,r))
                        }
                        ,a=M(function() {
                                var t,i=e.length;
                                if(i)for(t=0;
                                         i>t;
                                         t++)n(e[t])
                            }
                        );
                    return {
                        _:function() {
                            e=t.getElementsByClassName(r.autosizesClass),u("resize",a)
                        }
                        ,checkElems:a,updateElem:n
                    }
                }(),A=function() {
                    A.i||(A.i=!0,z._(),E._())
                }
                ;
            return function() {
                var t,i= {
                        lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia: {
                        }
                        ,init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0
                    }
                    ;
                r=e.lazySizesConfig||e.lazysizesConfig|| {
                }
                ;
                for(t in i)t in r||(r[t]=i[t]);
                e.lazySizesConfig=r,p(function() {
                        r.init&&A()
                    }
                )
            }
            (),i= {
                cfg:r,autoSizer:z,loader:E,init:A,uP:b,aC:y,rC:_,hC:v,fire:w,gW:C,rAF:S
            }
        }
    }
);
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(e) {
                var t=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,i=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,r=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,n=/[cLlsS]/g,a="CustomEase only accepts Cubic Bezier data.",s=function(e,t,i,r,n,a,o,l,u,p,c) {
                        var d,h=(e+i)/2,f=(t+r)/2,m=(i+n)/2,g=(r+a)/2,v=(n+o)/2,y=(a+l)/2,_=(h+m)/2,x=(f+g)/2,w=(m+v)/2,b=(g+y)/2,T=(_+w)/2,C=(x+b)/2,S=o-e,P=l-t,k=Math.abs((i-o)*P-(r-l)*S),M=Math.abs((n-o)*P-(a-l)*S);
                        return p||(p=[ {
                            x:e,y:t
                        }
                            , {
                                x:o,y:l
                            }
                        ],c=1),p.splice(c||p.length-1,0, {
                                x:T,y:C
                            }
                        ),(k+M)*(k+M)>u*(S*S+P*P)&&(d=p.length,s(e,t,h,f,_,x,T,C,u,p,c),s(T,C,w,b,v,y,o,l,u,p,c+1+(p.length-d))),p
                    }
                    ,o=function(e) {
                        var t,n,s,o,l,u,p,c,d,h,f,m=(e+"").replace(r,function(e) {
                                    var t=+e;
                                    return t<1e-4&&t>-1e-4?0:t
                                }
                            ).match(i)||[],g=[],v=0,y=0,_=m.length,x=2;
                        for(t=0;
                            t<_;
                            t++)if(d=o,isNaN(m[t])?l=(o=m[t].toUpperCase())!==m[t]:t--,n=+m[t+1],s=+m[t+2],l&&(n+=v,s+=y),t||(p=n,c=s),"M"===o)u&&u.length<8&&(g.length-=1,x=0),v=p=n,y=c=s,u=[n,s],x=2,g.push(u),t+=2,o="L";
                        else if("C"===o)u||(u=[0,0]),u[x++]=n,u[x++]=s,l||(v=y=0),u[x++]=v+1*m[t+3],u[x++]=y+1*m[t+4],u[x++]=v+=1*m[t+5],u[x++]=y+=1*m[t+6],t+=6;
                        else if("S"===o)"C"===d||"S"===d?(h=v-u[x-4],f=y-u[x-3],u[x++]=v+h,u[x++]=y+f):(u[x++]=v,u[x++]=y),u[x++]=n,u[x++]=s,l||(v=y=0),u[x++]=v+=1*m[t+3],u[x++]=y+=1*m[t+4],t+=4;
                        else {
                            if("L"!==o&&"Z"!==o)throw a;
                            "Z"===o&&(n=p,s=c,u.closed=!0),("L"===o||Math.abs(v-n)>.5||Math.abs(y-s)>.5)&&(u[x++]=v+(n-v)/3,u[x++]=y+(s-y)/3,u[x++]=v+2*(n-v)/3,u[x++]=y+2*(s-y)/3,u[x++]=n,u[x++]=s,"L"===o&&(t+=2)),v=n,y=s
                        }
                        return g[0]
                    }
                    ,l=function(e) {
                        var t,i=e.length,r=999999999999;
                        for(t=1;
                            t<i;
                            t+=6)+e[t]<r&&(r=+e[t]);
                        return r
                    }
                    ,u=function(e,t,i) {
                        i||0===i||(i=Math.max(+e[e.length-1],+e[1]));
                        var r,n=-1*+e[0],a=-i,s=e.length,o=1/(+e[s-2]+n),u=-t||(Math.abs(+e[s-1]-+e[1])<.01*(+e[s-2]-+e[0])?l(e)+a:+e[s-1]+a);
                        for(u=u?1/u:-o,r=0;
                            r<s;
                            r+=2)e[r]=(+e[r]+n)*o,e[r+1]=(+e[r+1]+a)*u
                    }
                    ,p=function(e) {
                        var t=this.lookup[e*this.l|0]||this.lookup[this.l-1];
                        return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy
                    }
                    ,c=function(t,i,r) {
                        this._calcEnd=!0,this.id=t,t&&(e.map[t]=this),this.getRatio=p,this.setData(i,r)
                    }
                    ,d=c.prototype=new e;
                return d.constructor=c,d.setData=function(e,i) {
                    var r,l,p,c,d,h,f,m,g,v,y=(e=e||"0,0,1,1").match(t),_=1,x=[];
                    if(i=i|| {
                        }
                            ,v=i.precision||1,this.data=e,this.lookup=[],this.points=x,this.fast=v<=1,(n.test(e)||-1!==e.indexOf("M")&&-1===e.indexOf("C"))&&(y=o(e)),4===(r=y.length))y.unshift(0,0),y.push(1,1),r=8;
                    else if((r-2)%6)throw a;
                    for(0==+y[0]&&1==+y[r-2]||u(y,i.height,i.originY),this.rawBezier=y,c=2;
                        c<r;
                        c+=6)l= {
                        x:+y[c-2],y:+y[c-1]
                    }
                        ,p= {
                        x:+y[c+4],y:+y[c+5]
                    }
                        ,x.push(l,p),s(l.x,l.y,+y[c],+y[c+1],+y[c+2],+y[c+3],p.x,p.y,1/(2e5*v),x,x.length-1);
                    for(r=x.length,c=0;
                        c<r;
                        c++)f=x[c],m=x[c-1]||f,f.x>m.x||m.y!==f.y&&m.x===f.x||f===m?(m.cx=f.x-m.x,m.cy=f.y-m.y,m.n=f,m.nx=f.x,this.fast&&c>1&&Math.abs(m.cy/m.cx-x[c-2].cy/x[c-2].cx)>2&&(this.fast=!1),m.cx<_&&(m.cx?_=m.cx:(m.cx=.001,c===r-1&&(m.x-=.001,_=Math.min(_,.001),this.fast=!1)))):(x.splice(c--,1),r--);
                    if(r=1/_+1|0,this.l=r,d=1/r,h=0,f=x[0],this.fast) {
                        for(c=0;
                            c<r;
                            c++)g=c*d,f.nx<g&&(f=x[++h]),l=f.y+(g-f.x)/f.cx*f.cy,this.lookup[c]= {
                            x:g,cx:d,y:l,cy:0,nx:9
                        }
                            ,c&&(this.lookup[c-1].cy=l-this.lookup[c-1].y);
                        this.lookup[r-1].cy=x[x.length-1].y-l
                    }
                    else {
                        for(c=0;
                            c<r;
                            c++)f.nx<c*d&&(f=x[++h]),this.lookup[c]=f;
                        h<x.length-1&&(this.lookup[c-1]=x[x.length-2])
                    }
                    return this._calcEnd=1!==x[x.length-1].y||0!==x[0].y,this
                }
                    ,d.getRatio=p,d.getSVGData=function(e) {
                    return c.getSVGData(this,e)
                }
                    ,c.create=function(e,t,i) {
                    return new c(e,t,i)
                }
                    ,c.version="0.2.1",c.bezierToPoints=s,c.get=function(t) {
                    return e.map[t]
                }
                    ,c.getSVGData=function(t,i) {
                    var r,n,a,s,o,l,u,p,c,d,h=(i=i|| {
                        }
                        ).width||100,f=i.height||100,m=i.x||0,g=(i.y||0)+f,v=i.path;
                    if(i.invert&&(f=-f,g=0),(t=t.getRatio?t:e.map[t]||console.log("No ease found: ",t)).rawBezier) {
                        for(r=[],u=t.rawBezier.length,a=0;
                            a<u;
                            a+=2)r.push((1e3*(m+t.rawBezier[a]*h)|0)/1e3+","+(1e3*(g+t.rawBezier[a+1]*-f)|0)/1e3);
                        r[0]="M"+r[0],r[1]="C"+r[1]
                    }
                    else for(r=["M"+m+","+g],s=1/(u=Math.max(5,200*(i.precision||1))),p=5/(u+=2),c=(1e3*(m+s*h)|0)/1e3,n=((d=(1e3*(g+t.getRatio(s)*-f)|0)/1e3)-g)/(c-m),a=2;
                             a<u;
                             a++)o=(1e3*(m+a*s*h)|0)/1e3,l=(1e3*(g+t.getRatio(a*s)*-f)|0)/1e3,(Math.abs((l-d)/(o-c)-n)>p||a===u-1)&&(r.push(c+","+d),n=(l-d)/(o-c)),c=o,d=l;
                    return v&&("string"==typeof v?document.querySelector(v):v).setAttribute("d",r.join(" ")),r.join(" ")
                }
                    ,c
            }
            ,!0)
    }
),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e) {
    "use strict";
    var t=function() {
            return(_gsScope.GreenSockGlobals||_gsScope).CustomEase
        }
        ;
    "function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=t())
}
(),((_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window)._gsQueue||(_gsScope._gsQueue=[])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,i) {
                var r=function(e) {
                        var t,i=[],r=e.length;
                        for(t=0;
                            t!==r;
                            i.push(e[t++]));
                        return i
                    }
                    ,n=function(e,t,i) {
                        var r,n,a=e.cycle;
                        for(r in a)n=a[r],e[r]="function"==typeof n?n(i,t[i]):n[i%n.length];
                        delete e.cycle
                    }
                    ,a=function(e,t,r) {
                        i.call(this,e,t,r),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=a.prototype.render
                    }
                    ,s=1e-10,o=i._internals,l=o.isSelector,u=o.isArray,p=a.prototype=i.to( {
                        }
                        ,.1, {
                        }
                    ),c=[];
                a.version="1.19.0",p.constructor=a,p.kill()._gc=!1,a.killTweensOf=a.killDelayedCallsTo=i.killTweensOf,a.getTweensOf=i.getTweensOf,a.lagSmoothing=i.lagSmoothing,a.ticker=i.ticker,a.render=i.render,p.invalidate=function() {
                    return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)
                }
                    ,p.updateTo=function(e,t) {
                    var r,n=this.ratio,a=this.vars.immediateRender||e.immediateRender;
                    t&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));
                    for(r in e)this.vars[r]=e[r];
                    if(this._initted||a)if(t)this._initted=!1,a&&this.render(0,!0,!0);
                    else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998) {
                        var s=this._totalTime;
                        this.render(0,!0,!1),this._initted=!1,this.render(s,!0,!1)
                    }
                    else if(this._initted=!1,this._init(),this._time>0||a)for(var o,l=1/(1-n),u=this._firstPT;
                                                                              u;
                    )o=u.s+u.c,u.c*=l,u.s=o-u.c,u=u._next;
                    return this
                }
                    ,p.render=function(e,t,i) {
                    this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();
                    var r,n,a,l,u,p,c,d,h=this._dirty?this.totalDuration():this._totalDuration,f=this._time,m=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;
                    if(e>=h-1e-7?(this._totalTime=h,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(e=0),(0>y||0>=e&&e>=-1e-7||y===s&&"isPause"!==this.data)&&y!==e&&(i=!0,y>s&&(n="onReverseComplete")),this._rawPrevTime=d=!t||e||y===e?e:s)):1e-7>e?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===v&&y>0)&&(n="onReverseComplete",r=this._reversed),0>e&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=d=!t||e||y===e?e:s)),this._initted||(i=!0)):(this._totalTime=this._time=e,0!==this._repeat&&(l=v+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&e>=m&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!=(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:this._time<0&&(this._time=0)),this._easeType?(u=this._time/v,p=this._easeType,c=this._easePower,(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),1===p?this.ratio=1-u:2===p?this.ratio=u:this._time/v<.5?this.ratio=u/2:this.ratio=1-u/2):this.ratio=this._ease.getRatio(this._time/v)),f!==this._time||i||g!==this._cycle) {
                        if(!this._initted) {
                            if(this._init(),!this._initted||this._gc)return;
                            if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=f,this._totalTime=m,this._rawPrevTime=y,this._cycle=g,o.lazyTweens.push(this),void(this._lazy=[e,t]);
                            this._time&&!r?this.ratio=this._ease.getRatio(this._time/v):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))
                        }
                        for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==f&&e>=0&&(this._active=!0),0===m&&(2===this._initted&&e>0&&this._init(),this._startAt&&(e>=0?this._startAt.render(e,t,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(t||this._callback("onStart"))),a=this._firstPT;
                            a;
                        )a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;
                        this._onUpdate&&(0>e&&this._startAt&&this._startTime&&this._startAt.render(e,t,i),t||(this._totalTime!==m||n)&&this._callback("onUpdate")),this._cycle!==g&&(t||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),n&&(!this._gc||i)&&(0>e&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(e,t,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[n]&&this._callback(n),0===v&&this._rawPrevTime===s&&d!==s&&(this._rawPrevTime=0))
                    }
                    else m!==this._totalTime&&this._onUpdate&&(t||this._callback("onUpdate"))
                }
                    ,a.to=function(e,t,i) {
                    return new a(e,t,i)
                }
                    ,a.from=function(e,t,i) {
                    return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new a(e,t,i)
                }
                    ,a.fromTo=function(e,t,i,r) {
                    return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new a(e,t,r)
                }
                    ,a.staggerTo=a.allTo=function(e,t,s,o,p,d,h) {
                    o=o||0;
                    var f,m,g,v,y=0,_=[],x=s.cycle,w=s.startAt&&s.startAt.cycle;
                    for(u(e)||("string"==typeof e&&(e=i.selector(e)||e),l(e)&&(e=r(e))),e=e||[],0>o&&((e=r(e)).reverse(),o*=-1),f=e.length-1,g=0;
                        f>=g;
                        g++) {
                        m= {
                        }
                        ;
                        for(v in s)m[v]=s[v];
                        if(x&&(n(m,e,g),null!=m.duration&&(t=m.duration,delete m.duration)),w) {
                            w=m.startAt= {
                            }
                            ;
                            for(v in s.startAt)w[v]=s.startAt[v];
                            n(m.startAt,e,g)
                        }
                        m.delay=y+(m.delay||0),g===f&&p&&(m.onComplete=function() {
                            s.onComplete&&s.onComplete.apply(s.onCompleteScope||this,arguments),p.apply(h||s.callbackScope||this,d||c)
                        }
                        ),_[g]=new a(e[g],t,m),y+=o
                    }
                    return _
                }
                    ,a.staggerFrom=a.allFrom=function(e,t,i,r,n,s,o) {
                    return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,a.staggerTo(e,t,i,r,n,s,o)
                }
                    ,a.staggerFromTo=a.allFromTo=function(e,t,i,r,n,s,o,l) {
                    return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,a.staggerTo(e,t,r,n,s,o,l)
                }
                    ,a.delayedCall=function(e,t,i,r,n) {
                    return new a(t,0, {
                            delay:e,onComplete:t,onCompleteParams:i,callbackScope:r,onReverseComplete:t,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0
                        }
                    )
                }
                    ,a.set=function(e,t) {
                    return new a(e,0,t)
                }
                    ,a.isTweening=function(e) {
                    return i.getTweensOf(e,!0).length>0
                }
                ;
                var d=function(e,t) {
                        for(var r=[],n=0,a=e._first;
                            a;
                        )a instanceof i?r[n++]=a:(t&&(r[n++]=a),r=r.concat(d(a,t)),n=r.length),a=a._next;
                        return r
                    }
                    ,h=a.getAllTweens=function(t) {
                        return d(e._rootTimeline,t).concat(d(e._rootFramesTimeline,t))
                    }
                    ;
                a.killAll=function(e,i,r,n) {
                    null==i&&(i=!0),null==r&&(r=!0);
                    var a,s,o,l=h(0!=n),u=l.length,p=i&&r&&n;
                    for(o=0;
                        u>o;
                        o++)s=l[o],(p||s instanceof t||(a=s.target===s.vars.onComplete)&&r||i&&!a)&&(e?s.totalTime(s._reversed?0:s.totalDuration()):s._enabled(!1,!1))
                }
                    ,a.killChildTweensOf=function(e,t) {
                    if(null!=e) {
                        var n,s,p,c,d,h=o.tweenLookup;
                        if("string"==typeof e&&(e=i.selector(e)||e),l(e)&&(e=r(e)),u(e))for(c=e.length;
                                                                                            --c>-1;
                        )a.killChildTweensOf(e[c],t);
                        else {
                            n=[];
                            for(p in h)for(s=h[p].target.parentNode;
                                           s;
                            )s===e&&(n=n.concat(h[p].tweens)),s=s.parentNode;
                            for(d=n.length,c=0;
                                d>c;
                                c++)t&&n[c].totalTime(n[c].totalDuration()),n[c]._enabled(!1,!1)
                        }
                    }
                }
                ;
                var f=function(e,i,r,n) {
                        i=!1!==i,r=!1!==r;
                        for(var a,s,o=h(n=!1!==n),l=i&&r&&n,u=o.length;
                            --u>-1;
                        )s=o[u],(l||s instanceof t||(a=s.target===s.vars.onComplete)&&r||i&&!a)&&s.paused(e)
                    }
                    ;
                return a.pauseAll=function(e,t,i) {
                    f(!0,e,t,i)
                }
                    ,a.resumeAll=function(e,t,i) {
                    f(!1,e,t,i)
                }
                    ,a.globalTimeScale=function(t) {
                    var r=e._rootTimeline,n=i.ticker.time;
                    return arguments.length?(t=t||s,r._startTime=n-(n-r._startTime)*r._timeScale/t,r=e._rootFramesTimeline,n=i.ticker.frame,r._startTime=n-(n-r._startTime)*r._timeScale/t,r._timeScale=e._rootTimeline._timeScale=t,t):r._timeScale
                }
                    ,p.progress=function(e,t) {
                    return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),t):this._time/this.duration()
                }
                    ,p.totalProgress=function(e,t) {
                    return arguments.length?this.totalTime(this.totalDuration()*e,t):this._totalTime/this.totalDuration()
                }
                    ,p.time=function(e,t) {
                    return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!=(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time
                }
                    ,p.duration=function(t) {
                    return arguments.length?e.prototype.duration.call(this,t):this._duration
                }
                    ,p.totalDuration=function(e) {
                    return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)
                }
                    ,p.repeat=function(e) {
                    return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat
                }
                    ,p.repeatDelay=function(e) {
                    return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay
                }
                    ,p.yoyo=function(e) {
                    return arguments.length?(this._yoyo=e,this):this._yoyo
                }
                    ,a
            }
            ,!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,i) {
                var r=function(e) {
                    t.call(this,e),this._labels= {
                    }
                        ,this.autoRemoveChildren=!0===this.vars.autoRemoveChildren,this.smoothChildTiming=!0===this.vars.smoothChildTiming,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;
                    var i,r,n=this.vars;
                    for(r in n)i=n[r],l(i)&&-1!==i.join("").indexOf(" {
                    self
                }
                ")&&(n[r]=this._swapSelfInParams(i));
                l(n.tweens)&&this.add(n.tweens,0,n.align,n.stagger)
            }
            ,n=1e-10,a=i._internals,s=r._internals= {
            }
            ,o=a.isSelector,l=a.isArray,u=a.lazyTweens,p=a.lazyRender,c=_gsScope._gsDefine.globals,d=function(e) {
                var t,i= {
                    }
                    ;
                for(t in e)i[t]=e[t];
                return i
            }
            ,h=function(e,t,i) {
                var r,n,a=e.cycle;
                for(r in a)n=a[r],e[r]="function"==typeof n?n.call(t[i],i):n[i%n.length];
                delete e.cycle
            }
            ,f=s.pauseCallback=function() {
            }
            ,m=function(e) {
                var t,i=[],r=e.length;
                for(t=0;
                    t!==r;
                    i.push(e[t++]));
                return i
            }
            ,g=r.prototype=new t;
        return r.version="1.19.0",g.constructor=r,g.kill()._gc=g._forcingPlayhead=g._hasPause=!1,g.to=function(e,t,r,n) {
            var a=r.repeat&&c.TweenMax||i;
            return t?this.add(new a(e,t,r),n):this.set(e,r,n)
        }
            ,g.from=function(e,t,r,n) {
            return this.add((r.repeat&&c.TweenMax||i).from(e,t,r),n)
        }
            ,g.fromTo=function(e,t,r,n,a) {
            var s=n.repeat&&c.TweenMax||i;
            return t?this.add(s.fromTo(e,t,r,n),a):this.set(e,n,a)
        }
            ,g.staggerTo=function(e,t,n,a,s,l,u,p) {
            var c,f,g=new r( {
                    onComplete:l,onCompleteParams:u,callbackScope:p,smoothChildTiming:this.smoothChildTiming
                }
            ),v=n.cycle;
            for("string"==typeof e&&(e=i.selector(e)||e),o(e=e||[])&&(e=m(e)),0>(a=a||0)&&((e=m(e)).reverse(),a*=-1),f=0;
                f<e.length;
                f++)(c=d(n)).startAt&&(c.startAt=d(c.startAt),c.startAt.cycle&&h(c.startAt,e,f)),v&&(h(c,e,f),null!=c.duration&&(t=c.duration,delete c.duration)),g.to(e[f],t,c,f*a);
            return this.add(g,s)
        }
            ,g.staggerFrom=function(e,t,i,r,n,a,s,o) {
            return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(e,t,i,r,n,a,s,o)
        }
            ,g.staggerFromTo=function(e,t,i,r,n,a,s,o,l) {
            return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,this.staggerTo(e,t,r,n,a,s,o,l)
        }
            ,g.call=function(e,t,r,n) {
            return this.add(i.delayedCall(0,e,t,r),n)
        }
            ,g.set=function(e,t,r) {
            return r=this._parseTimeOrLabel(r,0,!0),null==t.immediateRender&&(t.immediateRender=r===this._time&&!this._paused),this.add(new i(e,0,t),r)
        }
            ,r.exportRoot=function(e,t) {
            null==(e=e|| {
            }
            ).smoothChildTiming&&(e.smoothChildTiming=!0);
            var n,a,s=new r(e),o=s._timeline;
            for(null==t&&(t=!0),o._remove(s,!0),s._startTime=0,s._rawPrevTime=s._time=s._totalTime=o._time,n=o._first;
                n;
            )a=n._next,t&&n instanceof i&&n.target===n.vars.onComplete||s.add(n,n._startTime-n._delay),n=a;
            return o.add(s,0),s
        }
            ,g.add=function(n,a,s,o) {
            var u,p,c,d,h,f;
            if("number"!=typeof a&&(a=this._parseTimeOrLabel(a,0,!0,n)),!(n instanceof e)) {
                if(n instanceof Array||n&&n.push&&l(n)) {
                    for(s=s||"normal",o=o||0,u=a,p=n.length,c=0;
                        p>c;
                        c++)l(d=n[c])&&(d=new r( {
                            tweens:d
                        }
                    )),this.add(d,u),"string"!=typeof d&&"function"!=typeof d&&("sequence"===s?u=d._startTime+d.totalDuration()/d._timeScale:"start"===s&&(d._startTime-=d.delay())),u+=o;
                    return this._uncache(!0)
                }
                if("string"==typeof n)return this.addLabel(n,a);
                if("function"!=typeof n)throw"Cannot add "+n+" into the timeline;
                it is not a tween, timeline, function, or string.";
                n=i.delayedCall(0,n)
            }
            if(t.prototype.add.call(this,n,a),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(h=this,f=h.rawTime()>n._startTime;
                                                                                                                                         h._timeline;
            )f&&h._timeline.smoothChildTiming?h.totalTime(h._totalTime,!0):h._gc&&h._enabled(!0,!1),h=h._timeline;
            return this
        }
            ,g.remove=function(t) {
            if(t instanceof e) {
                this._remove(t,!1);
                var i=t._timeline=t.vars.useFrames?e._rootFramesTimeline:e._rootTimeline;
                return t._startTime=(t._paused?t._pauseTime:i._time)-(t._reversed?t.totalDuration()-t._totalTime:t._totalTime)/t._timeScale,this
            }
            if(t instanceof Array||t&&t.push&&l(t)) {
                for(var r=t.length;
                    --r>-1;
                )this.remove(t[r]);
                return this
            }
            return"string"==typeof t?this.removeLabel(t):this.kill(null,t)
        }
            ,g._remove=function(e,i) {
            t.prototype._remove.call(this,e,i);
            var r=this._last;
            return r?this._time>r._startTime+r._totalDuration/r._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this
        }
            ,g.append=function(e,t) {
            return this.add(e,this._parseTimeOrLabel(null,t,!0,e))
        }
            ,g.insert=g.insertMultiple=function(e,t,i,r) {
            return this.add(e,t||0,i,r)
        }
            ,g.appendMultiple=function(e,t,i,r) {
            return this.add(e,this._parseTimeOrLabel(null,t,!0,e),i,r)
        }
            ,g.addLabel=function(e,t) {
            return this._labels[e]=this._parseTimeOrLabel(t),this
        }
            ,g.addPause=function(e,t,r,n) {
            var a=i.delayedCall(0,f,r,n||this);
            return a.vars.onComplete=a.vars.onReverseComplete=t,a.data="isPause",this._hasPause=!0,this.add(a,e)
        }
            ,g.removeLabel=function(e) {
            return delete this._labels[e],this
        }
            ,g.getLabelTime=function(e) {
            return null!=this._labels[e]?this._labels[e]:-1
        }
            ,g._parseTimeOrLabel=function(t,i,r,n) {
            var a;
            if(n instanceof e&&n.timeline===this)this.remove(n);
            else if(n&&(n instanceof Array||n.push&&l(n)))for(a=n.length;
                                                              --a>-1;
            )n[a]instanceof e&&n[a].timeline===this&&this.remove(n[a]);
            if("string"==typeof i)return this._parseTimeOrLabel(i,r&&"number"==typeof t&&null==this._labels[i]?t-this.duration():0,r);
            if(i=i||0,"string"!=typeof t||!isNaN(t)&&null==this._labels[t])null==t&&(t=this.duration());
            else {
                if(-1===(a=t.indexOf("=")))return null==this._labels[t]?r?this._labels[t]=this.duration()+i:i:this._labels[t]+i;
                i=parseInt(t.charAt(a-1)+"1",10)*Number(t.substr(a+1)),t=a>1?this._parseTimeOrLabel(t.substr(0,a-1),0,r):this.duration()
            }
            return Number(t)+i
        }
            ,g.seek=function(e,t) {
            return this.totalTime("number"==typeof e?e:this._parseTimeOrLabel(e),!1!==t)
        }
            ,g.stop=function() {
            return this.paused(!0)
        }
            ,g.gotoAndPlay=function(e,t) {
            return this.play(e,t)
        }
            ,g.gotoAndStop=function(e,t) {
            return this.pause(e,t)
        }
            ,g.render=function(e,t,i) {
            this._gc&&this._enabled(!0,!1);
            var r,a,s,o,l,c,d,h=this._dirty?this.totalDuration():this._totalDuration,f=this._time,m=this._startTime,g=this._timeScale,v=this._paused;
            if(e>=h-1e-7)this._totalTime=this._time=h,this._reversed||this._hasPausedChild()||(a=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=e&&e>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===n)&&this._rawPrevTime!==e&&this._first&&(l=!0,this._rawPrevTime>n&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:n,e=h+1e-4;
            else if(1e-7>e)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==n&&(this._rawPrevTime>0||0>e&&this._rawPrevTime>=0))&&(o="onReverseComplete",a=this._reversed),0>e)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=a=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=e;
            else {
                if(this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:n,0===e&&a)for(r=this._first;
                                                                                                   r&&0===r._startTime;
                )r._duration||(a=!1),r=r._next;
                e=0,this._initted||(l=!0)
            }
            else {
                if(this._hasPause&&!this._forcingPlayhead&&!t) {
                    if(e>=f)for(r=this._first;
                                r&&r._startTime<=e&&!c;
                    )r._duration||"isPause"!==r.data||r.ratio||0===r._startTime&&0===this._rawPrevTime||(c=r),r=r._next;
                    else for(r=this._last;
                             r&&r._startTime>=e&&!c;
                    )r._duration||"isPause"===r.data&&r._rawPrevTime>0&&(c=r),r=r._prev;
                    c&&(this._time=e=c._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))
                }
                this._totalTime=this._time=this._rawPrevTime=e
            }
            if(this._time!==f&&this._first||i||l||c) {
                if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&e>0&&(this._active=!0),0===f&&this.vars.onStart&&(0===this._time&&this._duration||t||this._callback("onStart")),(d=this._time)>=f)for(r=this._first;
                                                                                                                                                                                                                                        r&&(s=r._next,d===this._time&&(!this._paused||v));
                )(r._active||r._startTime<=d&&!r._paused&&!r._gc)&&(c===r&&this.pause(),r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,i):r.render((e-r._startTime)*r._timeScale,t,i)),r=s;
                else for(r=this._last;
                         r&&(s=r._prev,d===this._time&&(!this._paused||v));
                ) {
                    if(r._active||r._startTime<=f&&!r._paused&&!r._gc) {
                        if(c===r) {
                            for(c=r._prev;
                                c&&c.endTime()>this._time;
                            )c.render(c._reversed?c.totalDuration()-(e-c._startTime)*c._timeScale:(e-c._startTime)*c._timeScale,t,i),c=c._prev;
                            c=null,this.pause()
                        }
                        r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,i):r.render((e-r._startTime)*r._timeScale,t,i)
                    }
                    r=s
                }
                this._onUpdate&&(t||(u.length&&p(),this._callback("onUpdate"))),o&&(this._gc||(m===this._startTime||g!==this._timeScale)&&(0===this._time||h>=this.totalDuration())&&(a&&(u.length&&p(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[o]&&this._callback(o)))
            }
        },g._hasPausedChild=function() {
            for(var e=this._first;
                e;
            ) {
                if(e._paused||e instanceof r&&e._hasPausedChild())return!0;
                e=e._next
            }
            return!1
        }
            ,g.getChildren=function(e,t,r,n) {
            n=n||-9999999999;
            for(var a=[],s=this._first,o=0;
                s;
            )s._startTime<n||(s instanceof i?!1!==t&&(a[o++]=s):(!1!==r&&(a[o++]=s),!1!==e&&(a=a.concat(s.getChildren(!0,t,r)),o=a.length))),s=s._next;
            return a
        }
            ,g.getTweensOf=function(e,t) {
            var r,n,a=this._gc,s=[],o=0;
            for(a&&this._enabled(!0,!0),n=(r=i.getTweensOf(e)).length;
                --n>-1;
            )(r[n].timeline===this||t&&this._contains(r[n]))&&(s[o++]=r[n]);
            return a&&this._enabled(!1,!0),s
        }
            ,g.recent=function() {
            return this._recent
        }
            ,g._contains=function(e) {
            for(var t=e.timeline;
                t;
            ) {
                if(t===this)return!0;
                t=t.timeline
            }
            return!1
        }
            ,g.shiftChildren=function(e,t,i) {
            i=i||0;
            for(var r,n=this._first,a=this._labels;
                n;
            )n._startTime>=i&&(n._startTime+=e),n=n._next;
            if(t)for(r in a)a[r]>=i&&(a[r]+=e);
            return this._uncache(!0)
        }
            ,g._kill=function(e,t) {
            if(!e&&!t)return this._enabled(!1,!1);
            for(var i=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),r=i.length,n=!1;
                --r>-1;
            )i[r]._kill(e,t)&&(n=!0);
            return n
        }
            ,g.clear=function(e) {
            var t=this.getChildren(!1,!0,!0),i=t.length;
            for(this._time=this._totalTime=0;
                --i>-1;
            )t[i]._enabled(!1,!1);
            return!1!==e&&(this._labels= {
            }
            ),this._uncache(!0)
        }
            ,g.invalidate=function() {
            for(var t=this._first;
                t;
            )t.invalidate(),t=t._next;
            return e.prototype.invalidate.call(this)
        }
            ,g._enabled=function(e,i) {
            if(e===this._gc)for(var r=this._first;
                                r;
            )r._enabled(e,!0),r=r._next;
            return t.prototype._enabled.call(this,e,i)
        }
            ,g.totalTime=function(t,i,r) {
            this._forcingPlayhead=!0;
            var n=e.prototype.totalTime.apply(this,arguments);
            return this._forcingPlayhead=!1,n
        }
            ,g.duration=function(e) {
            return arguments.length?(0!==this.duration()&&0!==e&&this.timeScale(this._duration/e),this):(this._dirty&&this.totalDuration(),this._duration)
        }
            ,g.totalDuration=function(e) {
            if(!arguments.length) {
                if(this._dirty) {
                    for(var t,i,r=0,n=this._last,a=999999999999;
                        n;
                    )t=n._prev,n._dirty&&n.totalDuration(),n._startTime>a&&this._sortChildren&&!n._paused?this.add(n,n._startTime-n._delay):a=n._startTime,n._startTime<0&&!n._paused&&(r-=n._startTime,this._timeline.smoothChildTiming&&(this._startTime+=n._startTime/this._timeScale),this.shiftChildren(-n._startTime,!1,-9999999999),a=0),(i=n._startTime+n._totalDuration/n._timeScale)>r&&(r=i),n=t;
                    this._duration=this._totalDuration=r,this._dirty=!1
                }
                return this._totalDuration
            }
            return e&&this.totalDuration()?this.timeScale(this._totalDuration/e):this
        }
            ,g.paused=function(t) {
            if(!t)for(var i=this._first,r=this._time;
                      i;
            )i._startTime===r&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;
            return e.prototype.paused.apply(this,arguments)
        }
            ,g.usesFrames=function() {
            for(var t=this._timeline;
                t._timeline;
            )t=t._timeline;
            return t===e._rootFramesTimeline
        }
            ,g.rawTime=function() {
            return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale
        }
            ,r
    }
    ,!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(e,t,i) {
        var r=function(t) {
                e.call(this,t),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._dirty=!0
            }
            ,n=1e-10,a=t._internals,s=a.lazyTweens,o=a.lazyRender,l=_gsScope._gsDefine.globals,u=new i(null,null,1,0),p=r.prototype=new e;
        return p.constructor=r,p.kill()._gc=!1,r.version="1.19.0",p.invalidate=function() {
            return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),e.prototype.invalidate.call(this)
        }
            ,p.addCallback=function(e,i,r,n) {
            return this.add(t.delayedCall(0,e,r,n),i)
        }
            ,p.removeCallback=function(e,t) {
            if(e)if(null==t)this._kill(null,e);
            else for(var i=this.getTweensOf(e,!1),r=i.length,n=this._parseTimeOrLabel(t);
                     --r>-1;
                )i[r]._startTime===n&&i[r]._enabled(!1,!1);
            return this
        }
            ,p.removePause=function(t) {
            return this.removeCallback(e._internals.pauseCallback,t)
        }
            ,p.tweenTo=function(e,i) {
            i=i|| {
            }
            ;
            var r,n,a,s= {
                    ease:u,useFrames:this.usesFrames(),immediateRender:!1
                }
                ,o=i.repeat&&l.TweenMax||t;
            for(n in i)s[n]=i[n];
            return s.time=this._parseTimeOrLabel(e),r=Math.abs(Number(s.time)-this._time)/this._timeScale||.001,a=new o(this,r,s),s.onStart=function() {
                a.target.paused(!0),a.vars.time!==a.target.time()&&r===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&a._callback("onStart")
            }
                ,a
        }
            ,p.tweenFromTo=function(e,t,i) {
            i=i|| {
            }
                ,e=this._parseTimeOrLabel(e),i.startAt= {
                onComplete:this.seek,onCompleteParams:[e],callbackScope:this
            }
                ,i.immediateRender=!1!==i.immediateRender;
            var r=this.tweenTo(t,i);
            return r.duration(Math.abs(r.vars.time-e)/this._timeScale||.001)
        }
            ,p.render=function(e,t,i) {
            this._gc&&this._enabled(!0,!1);
            var r,a,l,u,p,c,d,h,f=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,g=this._time,v=this._totalTime,y=this._startTime,_=this._timeScale,x=this._rawPrevTime,w=this._paused,b=this._cycle;
            if(e>=f-1e-7)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,u="onComplete",p=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=e&&e>=-1e-7||0>x||x===n)&&x!==e&&this._first&&(p=!0,x>n&&(u="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:n,this._yoyo&&0!=(1&this._cycle)?this._time=e=0:(this._time=m,e=m+1e-4);
            else if(1e-7>e)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==g||0===m&&x!==n&&(x>0||0>e&&x>=0)&&!this._locked)&&(u="onReverseComplete",a=this._reversed),0>e)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(p=a=!0,u="onReverseComplete"):x>=0&&this._first&&(p=!0),this._rawPrevTime=e;
            else {
                if(this._rawPrevTime=m||!t||e||this._rawPrevTime===e?e:n,0===e&&a)for(r=this._first;
                                                                                      r&&0===r._startTime;
                )r._duration||(a=!1),r=r._next;
                e=0,this._initted||(p=!0)
            }
            else if(0===m&&0>x&&(p=!0),this._time=this._rawPrevTime=e,this._locked||(this._totalTime=e,0!==this._repeat&&(c=m+this._repeatDelay,this._cycle=this._totalTime/c>>0,0!==this._cycle&&this._cycle===this._totalTime/c&&e>=v&&this._cycle--,this._time=this._totalTime-this._cycle*c,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?(this._time=m,e=m+1e-4):this._time<0?this._time=e=0:e=this._time)),this._hasPause&&!this._forcingPlayhead&&!t) {
                if((e=this._time)>=g)for(r=this._first;
                                         r&&r._startTime<=e&&!d;
                )r._duration||"isPause"!==r.data||r.ratio||0===r._startTime&&0===this._rawPrevTime||(d=r),r=r._next;
                else for(r=this._last;
                         r&&r._startTime>=e&&!d;
                )r._duration||"isPause"===r.data&&r._rawPrevTime>0&&(d=r),r=r._prev;
                d&&(this._time=e=d._startTime,this._totalTime=e+this._cycle*(this._totalDuration+this._repeatDelay))
            }
            if(this._cycle!==b&&!this._locked) {
                var T=this._yoyo&&0!=(1&b),C=T===(this._yoyo&&0!=(1&this._cycle)),S=this._totalTime,P=this._cycle,k=this._rawPrevTime,M=this._time;
                if(this._totalTime=b*m,this._cycle<b?T=!T:this._totalTime+=m,this._time=g,this._rawPrevTime=0===m?x-1e-4:x,this._cycle=b,this._locked=!0,g=T?0:m,this.render(g,t,0===m),t||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),g!==this._time)return;
                if(C&&(g=T?m+1e-4:-1e-4,this.render(g,!0,!1)),this._locked=!1,this._paused&&!w)return;
                this._time=M,this._totalTime=S,this._cycle=P,this._rawPrevTime=k
            }
            if(this._time!==g&&this._first||i||p||d) {
                if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==v&&e>0&&(this._active=!0),0===v&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||t||this._callback("onStart")),(h=this._time)>=g)for(r=this._first;
                                                                                                                                                                                                                                                       r&&(l=r._next,h===this._time&&(!this._paused||w));
                )(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(d===r&&this.pause(),r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,i):r.render((e-r._startTime)*r._timeScale,t,i)),r=l;
                else for(r=this._last;
                         r&&(l=r._prev,h===this._time&&(!this._paused||w));
                ) {
                    if(r._active||r._startTime<=g&&!r._paused&&!r._gc) {
                        if(d===r) {
                            for(d=r._prev;
                                d&&d.endTime()>this._time;
                            )d.render(d._reversed?d.totalDuration()-(e-d._startTime)*d._timeScale:(e-d._startTime)*d._timeScale,t,i),d=d._prev;
                            d=null,this.pause()
                        }
                        r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,i):r.render((e-r._startTime)*r._timeScale,t,i)
                    }
                    r=l
                }
                this._onUpdate&&(t||(s.length&&o(),this._callback("onUpdate"))),u&&(this._locked||this._gc||(y===this._startTime||_!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(a&&(s.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[u]&&this._callback(u)))
            }
            else v!==this._totalTime&&this._onUpdate&&(t||this._callback("onUpdate"))
        }
            ,p.getActive=function(e,t,i) {
            null==e&&(e=!0),null==t&&(t=!0),null==i&&(i=!1);
            var r,n,a=[],s=this.getChildren(e,t,i),o=0,l=s.length;
            for(r=0;
                l>r;
                r++)(n=s[r]).isActive()&&(a[o++]=n);
            return a
        }
            ,p.getLabelAfter=function(e) {
            e||0!==e&&(e=this._time);
            var t,i=this.getLabelsArray(),r=i.length;
            for(t=0;
                r>t;
                t++)if(i[t].time>e)return i[t].name;
            return null
        }
            ,p.getLabelBefore=function(e) {
            null==e&&(e=this._time);
            for(var t=this.getLabelsArray(),i=t.length;
                --i>-1;
            )if(t[i].time<e)return t[i].name;
            return null
        }
            ,p.getLabelsArray=function() {
            var e,t=[],i=0;
            for(e in this._labels)t[i++]= {
                time:this._labels[e],name:e
            }
            ;
            return t.sort(function(e,t) {
                    return e.time-t.time
                }
            ),t
        }
            ,p.progress=function(e,t) {
            return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-e:e)+this._cycle*(this._duration+this._repeatDelay),t):this._time/this.duration()
        }
            ,p.totalProgress=function(e,t) {
            return arguments.length?this.totalTime(this.totalDuration()*e,t):this._totalTime/this.totalDuration()
        }
            ,p.totalDuration=function(t) {
            return arguments.length?-1!==this._repeat&&t?this.timeScale(this.totalDuration()/t):this:(this._dirty&&(e.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)
        }
            ,p.time=function(e,t) {
            return arguments.length?(this._dirty&&this.totalDuration(),e>this._duration&&(e=this._duration),this._yoyo&&0!=(1&this._cycle)?e=this._duration-e+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(e+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(e,t)):this._time
        }
            ,p.repeat=function(e) {
            return arguments.length?(this._repeat=e,this._uncache(!0)):this._repeat
        }
            ,p.repeatDelay=function(e) {
            return arguments.length?(this._repeatDelay=e,this._uncache(!0)):this._repeatDelay
        }
            ,p.yoyo=function(e) {
            return arguments.length?(this._yoyo=e,this):this._yoyo
        }
            ,p.currentLabel=function(e) {
            return arguments.length?this.seek(e,!0):this.getLabelBefore(this._time+1e-8)
        }
            ,r
    }
    ,!0),function() {
    var e=180/Math.PI,t=[],i=[],r=[],n= {
        }
        ,a=_gsScope._gsDefine.globals,s=function(e,t,i,r) {
            i===r&&(i=r-(r-t)/1e6),e===t&&(t=e+(i-e)/1e6),this.a=e,this.b=t,this.c=i,this.d=r,this.da=r-e,this.ca=i-e,this.ba=t-e
        }
        ,o=function(e,t,i,r) {
            var n= {
                    a:e
                }
                ,a= {
                }
                ,s= {
                }
                ,o= {
                    c:r
                }
                ,l=(e+t)/2,u=(t+i)/2,p=(i+r)/2,c=(l+u)/2,d=(u+p)/2,h=(d-c)/8;
            return n.b=l+(e-l)/4,a.b=c+h,n.c=a.a=(n.b+a.b)/2,a.c=s.a=(c+d)/2,s.b=d-h,o.b=p+(r-p)/4,s.c=o.a=(s.b+o.b)/2,[n,a,s,o]
        }
        ,l=function(e,n,a,s,l) {
            var u,p,c,d,h,f,m,g,v,y,_,x,w,b=e.length-1,T=0,C=e[0].a;
            for(u=0;
                b>u;
                u++)h=e[T],p=h.a,c=h.d,d=e[T+1].d,l?(_=t[u],x=i[u],w=(x+_)*n*.25/(s?.5:r[u]||.5),f=c-(c-p)*(s?.5*n:0!==_?w/_:0),m=c+(d-c)*(s?.5*n:0!==x?w/x:0),g=c-(f+((m-f)*(3*_/(_+x)+.5)/4||0))):(f=c-(c-p)*n*.5,m=c+(d-c)*n*.5,g=c-(f+m)/2),f+=g,m+=g,h.c=v=f,h.b=0!==u?C:C=h.a+.6*(h.c-h.a),h.da=c-p,h.ca=v-p,h.ba=C-p,a?(y=o(p,C,v,c),e.splice(T,1,y[0],y[1],y[2],y[3]),T+=4):T++,C=m;
            (h=e[T]).b=C,h.c=C+.4*(h.d-C),h.da=h.d-h.a,h.ca=h.c-h.a,h.ba=C-h.a,a&&(y=o(h.a,C,h.c,h.d),e.splice(T,1,y[0],y[1],y[2],y[3]))
        }
        ,u=function(e,r,n,a) {
            var o,l,u,p,c,d,h=[];
            if(a)for(e=[a].concat(e),l=e.length;
                     --l>-1;
            )"string"==typeof(d=e[l][r])&&"="===d.charAt(1)&&(e[l][r]=a[r]+Number(d.charAt(0)+d.substr(2)));
            if(0>(o=e.length-2))return h[0]=new s(e[0][r],0,0,e[-1>o?0:1][r]),h;
            for(l=0;
                o>l;
                l++)u=e[l][r],p=e[l+1][r],h[l]=new s(u,0,0,p),n&&(c=e[l+2][r],t[l]=(t[l]||0)+(p-u)*(p-u),i[l]=(i[l]||0)+(c-p)*(c-p));
            return h[l]=new s(e[l][r],0,0,e[l+1][r]),h
        }
        ,p=function(e,a,s,o,p,c) {
            var d,h,f,m,g,v,y,_,x= {
                }
                ,w=[],b=c||e[0];
            p="string"==typeof p?","+p+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==a&&(a=1);
            for(h in e[0])w.push(h);
            if(e.length>1) {
                for(_=e[e.length-1],y=!0,d=w.length;
                    --d>-1;
                )if(h=w[d],Math.abs(b[h]-_[h])>.05) {
                    y=!1;
                    break
                }
                y&&(e=e.concat(),c&&e.unshift(c),e.push(e[1]),c=e[e.length-3])
            }
            for(t.length=i.length=r.length=0,d=w.length;
                --d>-1;
            )h=w[d],n[h]=-1!==p.indexOf(","+h+","),x[h]=u(e,h,n[h],c);
            for(d=t.length;
                --d>-1;
            )t[d]=Math.sqrt(t[d]),i[d]=Math.sqrt(i[d]);
            if(!o) {
                for(d=w.length;
                    --d>-1;
                )if(n[h])for(f=x[w[d]],v=f.length-1,m=0;
                             v>m;
                             m++)g=f[m+1].da/i[m]+f[m].da/t[m]||0,r[m]=(r[m]||0)+g*g;
                for(d=r.length;
                    --d>-1;
                )r[d]=Math.sqrt(r[d])
            }
            for(d=w.length,m=s?4:1;
                --d>-1;
            )h=w[d],f=x[h],l(f,a,s,o,n[h]),y&&(f.splice(0,m),f.splice(f.length-m,m));
            return x
        }
        ,c=function(e,t,i) {
            var r,n,a,o,l,u,p,c,d,h,f,m= {
                }
                ,g="cubic"===(t=t||"soft")?3:2,v="soft"===t,y=[];
            if(v&&i&&(e=[i].concat(e)),null==e||e.length<g+1)throw"invalid Bezier data";
            for(d in e[0])y.push(d);
            for(u=y.length;
                --u>-1;
            ) {
                for(m[d=y[u]]=l=[],h=0,c=e.length,p=0;
                    c>p;
                    p++)r=null==i?e[p][d]:"string"==typeof(f=e[p][d])&&"="===f.charAt(1)?i[d]+Number(f.charAt(0)+f.substr(2)):Number(f),v&&p>1&&c-1>p&&(l[h++]=(r+l[h-2])/2),l[h++]=r;
                for(c=h-g+1,h=0,p=0;
                    c>p;
                    p+=g)r=l[p],n=l[p+1],a=l[p+2],o=2===g?0:l[p+3],l[h++]=f=3===g?new s(r,n,a,o):new s(r,(2*n+r)/3,(2*n+a)/3,a);
                l.length=h
            }
            return m
        }
        ,d=function(e,t,i) {
            for(var r,n,a,s,o,l,u,p,c,d,h,f=1/i,m=e.length;
                --m>-1;
            )for(d=e[m],a=d.a,s=d.d-a,o=d.c-a,l=d.b-a,r=n=0,p=1;
                 i>=p;
                 p++)u=f*p,c=1-u,r=n-(n=(u*u*s+3*c*(u*o+c*l))*u),h=m*i+p-1,t[h]=(t[h]||0)+r*r
        }
        ,h=function(e,t) {
            var i,r,n,a,s=[],o=[],l=0,u=0,p=(t=t>>0||6)-1,c=[],h=[];
            for(i in e)d(e[i],s,t);
            for(n=s.length,r=0;
                n>r;
                r++)l+=Math.sqrt(s[r]),a=r%t,h[a]=l,a===p&&(u+=l,a=r/t>>0,c[a]=h,o[a]=u,l=0,h=[]);
            return {
                length:u,lengths:o,segments:c
            }
        },f=_gsScope._gsDefine.plugin( {
                propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(e,t,i) {
                    this._target=e,t instanceof Array&&(t= {
                        values:t
                    }
                    ),this._func= {
                    }
                        ,this._mod= {
                    }
                        ,this._props=[],this._timeRes=null==t.timeResolution?6:parseInt(t.timeResolution,10);
                    var r,n,a,s,o,l=t.values||[],u= {
                        }
                        ,d=l[0],f=t.autoRotate||i.vars.orientToBezier;
                    this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",!0===f?0:Number(f)||0]]:null;
                    for(r in d)this._props.push(r);
                    for(a=this._props.length;
                        --a>-1;
                    )r=this._props[a],this._overwriteProps.push(r),n=this._func[r]="function"==typeof e[r],u[r]=n?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),o||u[r]!==l[0][r]&&(o=u);
                    if(this._beziers="cubic"!==t.type&&"quadratic"!==t.type&&"soft"!==t.type?p(l,isNaN(t.curviness)?1:t.curviness,!1,"thruBasic"===t.type,t.correlate,o):c(l,t.type,u),this._segCount=this._beziers[r].length,this._timeRes) {
                        var m=h(this._beziers,this._timeRes);
                        this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length
                    }
                    if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),a=f.length;
                                              --a>-1;
                    ) {
                        for(s=0;
                            3>s;
                            s++)r=f[a][s],this._func[r]="function"==typeof e[r]&&e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)];
                        r=f[a][2],this._initialRotations[a]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)
                    }
                    return this._startRatio=i.vars.runBackwards?1:0,!0
                }
                ,set:function(t) {
                    var i,r,n,a,s,o,l,u,p,c,d=this._segCount,h=this._func,f=this._target,m=t!==this._startRatio;
                    if(this._timeRes) {
                        if(p=this._lengths,c=this._curSeg,t*=this._length,n=this._li,t>this._l2&&d-1>n) {
                            for(u=d-1;
                                u>n&&(this._l2=p[++n])<=t;
                            );
                            this._l1=p[n-1],this._li=n,this._curSeg=c=this._segments[n],this._s2=c[this._s1=this._si=0]
                        }
                        else if(t<this._l1&&n>0) {
                            for(;
                                n>0&&(this._l1=p[--n])>=t;
                            );
                            0===n&&t<this._l1?this._l1=0:n++,this._l2=p[n],this._li=n,this._curSeg=c=this._segments[n],this._s1=c[(this._si=c.length-1)-1]||0,this._s2=c[this._si]
                        }
                        if(i=n,t-=this._l1,n=this._si,t>this._s2&&n<c.length-1) {
                            for(u=c.length-1;
                                u>n&&(this._s2=c[++n])<=t;
                            );
                            this._s1=c[n-1],this._si=n
                        }
                        else if(t<this._s1&&n>0) {
                            for(;
                                n>0&&(this._s1=c[--n])>=t;
                            );
                            0===n&&t<this._s1?this._s1=0:n++,this._s2=c[n],this._si=n
                        }
                        o=(n+(t-this._s1)/(this._s2-this._s1))*this._prec||0
                    }
                    else i=0>t?0:t>=1?d-1:d*t>>0,o=(t-i*(1/d))*d;
                    for(r=1-o,n=this._props.length;
                        --n>-1;
                    )a=this._props[n],s=this._beziers[a][i],l=(o*o*s.da+3*r*(o*s.ca+r*s.ba))*o+s.a,this._mod[a]&&(l=this._mod[a](l,f)),h[a]?f[a](l):f[a]=l;
                    if(this._autoRotate) {
                        var g,v,y,_,x,w,b,T=this._autoRotate;
                        for(n=T.length;
                            --n>-1;
                        )a=T[n][2],w=T[n][3]||0,b=!0===T[n][4]?1:e,s=this._beziers[T[n][0]],g=this._beziers[T[n][1]],s&&g&&(s=s[i],g=g[i],v=s.a+(s.b-s.a)*o,_=s.b+(s.c-s.b)*o,v+=(_-v)*o,_+=(s.c+(s.d-s.c)*o-_)*o,y=g.a+(g.b-g.a)*o,x=g.b+(g.c-g.b)*o,y+=(x-y)*o,x+=(g.c+(g.d-g.c)*o-x)*o,l=m?Math.atan2(x-y,_-v)*b+w:this._initialRotations[n],this._mod[a]&&(l=this._mod[a](l,f)),h[a]?f[a](l):f[a]=l)
                    }
                }
            }
        ),m=f.prototype;
    f.bezierThrough=p,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(e,t,i) {
        return new s(e,(2*t+e)/3,(2*t+i)/3,i)
    }
        ,f._cssRegister=function() {
        var e=a.CSSPlugin;
        if(e) {
            var t=e._internals,i=t._parseToProxy,r=t._setPluginRatio,n=t.CSSPropTween;
            t._registerComplexSpecialProp("bezier", {
                parser:function(e,t,a,s,o,l) {
                    t instanceof Array&&(t= {
                        values:t
                    }
                    ),l=new f;
                    var u,p,c,d=t.values,h=d.length-1,m=[],g= {
                        }
                        ;
                    if(0>h)return o;
                    for(u=0;
                        h>=u;
                        u++)c=i(e,d[u],s,o,l,h!==u),m[u]=c.end;
                    for(p in t)g[p]=t[p];
                    return g.values=m,o=new n(e,"bezier",0,0,c.pt,2),o.data=c,o.plugin=l,o.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(u=!0===g.autoRotate?0:Number(g.autoRotate),g.autoRotate=null!=c.end.left?[["left","top","rotation",u,!1]]:null!=c.end.x&&[["x","y","rotation",u,!1]]),g.autoRotate&&(s._transform||s._enableTransforms(!1),c.autoRotate=s._target._gsTransform,c.proxy.rotation=c.autoRotate.rotation||0,s._overwriteProps.push("rotation")),l._onInitTween(c.proxy,g,s._tween),o
                }
            })
        }
    },m._mod=function(e) {
        for(var t,i=this._overwriteProps,r=i.length;
            --r>-1;
        )(t=e[i[r]])&&"function"==typeof t&&(this._mod[i[r]]=t)
    }
        ,m._kill=function(e) {
        var t,i,r=this._props;
        for(t in this._beziers)if(t in e)for(delete this._beziers[t],delete this._func[t],i=r.length;
                                             --i>-1;
        )r[i]===t&&r.splice(i,1);
        if(r=this._autoRotate)for(i=r.length;
                                  --i>-1;
        )e[r[i][2]]&&r.splice(i,1);
        return this._super._kill.call(this,e)
    }
}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(e,t) {
        var i,r,n,a,s=function() {
                e.call(this,"css"),this._overwriteProps.length=0,this.setRatio=s.prototype.setRatio
            }
            ,o=_gsScope._gsDefine.globals,l= {
            }
            ,u=s.prototype=new e("css");
        u.constructor=s,s.version="1.19.0",s.API=2,s.defaultTransformPerspective=0,s.defaultSkewType="compensated",s.defaultSmoothOrigin=!0,u="px",s.suffixMap= {
            top:u,right:u,bottom:u,left:u,width:u,height:u,fontSize:u,padding:u,margin:u,perspective:u,lineHeight:""
        }
        ;
        var p,c,d,h,f,m,g,v,y=/(?:\-|\.|\b)(\d|\.|e\-)+/g,_=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,x=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,w=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,b=/(?:\d|\-|\+|=|#|\.)*/
        g,T=/opacity *= *([^)]*)/i,C=/opacity:([^;
	]*)/i,S=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,M=/-([a-z])/gi,E=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,z=function(e,t) {
            return t.toUpperCase()
        }
            ,A=/(?:Left|Right|Width)/i,D=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,N=/,(?=[^\)]*(?:\(|$))/gi,L=/[\s,\(]/i,R=Math.PI/180,I=180/Math.PI,B= {
        }
            ,H=document,F=function(e) {
            return H.createElementNS?H.createElementNS("http://www.w3.org/1999/xhtml",e):H.createElement(e)
        }
            ,X=F("div"),j=F("img"),Y=s._internals= {
            _specialProps:l
        }
            ,q=navigator.userAgent,W=function() {
            var e=q.indexOf("Android"),t=F("a");
            return d=-1!==q.indexOf("Safari")&&-1===q.indexOf("Chrome")&&(-1===e||Number(q.substr(e+8,1))>3),f=d&&Number(q.substr(q.indexOf("Version/")+8,1))<6,h=-1!==q.indexOf("Firefox"),(/MSIE ([0-9] {
                1,
            }
            [\.0-9] {
                0,
            }
            )/.exec(q)||/Trident\/.*rv:([0-9] {
                1,
            }
            [\.0-9] {
                0,
            }
            )/.exec(q))&&(m=parseFloat(RegExp.$1)),!!t&&(t.style.cssText="top:1px;
            opacity:.55;
            ",/^0.55/.test(t.style.opacity))
        }
        (),G=function(e) {
            return T.test("string"==typeof e?e:(e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100:1
        }
            ,V=function(e) {
            window.console&&console.log(e)
        }
            ,$="",U="",Z=function(e,t) {
            var i,r,n=(t=t||X).style;
            if(void 0!==n[e])return e;
            for(e=e.charAt(0).toUpperCase()+e.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;
                --r>-1&&void 0===n[i[r]+e];
            );
            return r>=0?(U=3===r?"ms":i[r],$="-"+U.toLowerCase()+"-",U+e):null
        }
            ,K=H.defaultView?H.defaultView.getComputedStyle:function() {
        }
            ,Q=s.getStyle=function(e,t,i,r,n) {
            var a;
            return W||"opacity"!==t?(!r&&e.style[t]?a=e.style[t]:(i=i||K(e))?a=i[t]||i.getPropertyValue(t)||i.getPropertyValue(t.replace(k,"-$1").toLowerCase()):e.currentStyle&&(a=e.currentStyle[t]),null==n||a&&"none"!==a&&"auto"!==a&&"auto auto"!==a?a:n):G(e)
        }
            ,J=Y.convertToPixels=function(e,i,r,n,a) {
            if("px"===n||!n)return r;
            if("auto"===n||!r)return 0;
            var o,l,u,p=A.test(i),c=e,d=X.style,h=0>r,f=1===r;
            if(h&&(r=-r),f&&(r*=100),"%"===n&&-1!==i.indexOf("border"))o=r/100*(p?e.clientWidth:e.clientHeight);
            else {
                if(d.cssText="border:0 solid red;
                    position:"+Q(e,"position")+";
                line-height:0;
                ","%"!==n&&c.appendChild&&"v"!==n.charAt(0)&&"rem"!==n)d[p?"borderLeftWidth":"borderTopWidth"]=r+n;
            else {
                    if(c=e.parentNode||H.body,l=c._gsCache,u=t.ticker.frame,l&&p&&l.time===u)return l.width*r/100;
                    d[p?"width":"height"]=r+n
                }
                c.appendChild(X),o=parseFloat(X[p?"offsetWidth":"offsetHeight"]),c.removeChild(X),p&&"%"===n&&!1!==s.cacheWidths&&(l=c._gsCache=c._gsCache|| {
                }
                    ,l.time=u,l.width=o/r*100),0!==o||a||(o=J(e,i,r,n,!0))
            }
            return f&&(o/=100),h?-o:o
        }
            ,ee=Y.calculateOffset=function(e,t,i) {
            if("absolute"!==Q(e,"position",i))return 0;
            var r="left"===t?"Left":"Top",n=Q(e,"margin"+r,i);
            return e["offset"+r]-(J(e,t,parseFloat(n),n.replace(b,""))||0)
        }
            ,te=function(e,t) {
            var i,r,n,a= {
                }
                ;
            if(t=t||K(e,null))if(i=t.length)for(;
                --i>-1;
            )(-1===(n=t[i]).indexOf("-transform")||Me===n)&&(a[n.replace(M,z)]=t.getPropertyValue(n));
            else for(i in t)(-1===i.indexOf("Transform")||ke===i)&&(a[i]=t[i]);
            else if(t=e.currentStyle||e.style)for(i in t)"string"==typeof i&&void 0===a[i]&&(a[i.replace(M,z)]=t[i]);
            return W||(a.opacity=G(e)),r=Xe(e,t,!1),a.rotation=r.rotation,a.skewX=r.skewX,a.scaleX=r.scaleX,a.scaleY=r.scaleY,a.x=r.x,a.y=r.y,ze&&(a.z=r.z,a.rotationX=r.rotationX,a.rotationY=r.rotationY,a.scaleZ=r.scaleZ),a.filters&&delete a.filters,a
        }
            ,ie=function(e,t,i,r,n) {
            var a,s,o,l= {
                }
                ,u=e.style;
            for(s in i)"cssText"!==s&&"length"!==s&&isNaN(s)&&(t[s]!==(a=i[s])||n&&n[s])&&-1===s.indexOf("Origin")&&("number"==typeof a||"string"==typeof a)&&(l[s]="auto"!==a||"left"!==s&&"top"!==s?""!==a&&"auto"!==a&&"none"!==a||"string"!=typeof t[s]||""===t[s].replace(w,"")?a:0:ee(e,s),void 0!==u[s]&&(o=new ve(u,s,u[s],o)));
            if(r)for(s in r)"className"!==s&&(l[s]=r[s]);
            return {
                difs:l,firstMPT:o
            }
        },re= {
            width:["Left","Right"],height:["Top","Bottom"]
        }
            ,ne=["marginLeft","marginRight","marginTop","marginBottom"],ae=function(e,t,i) {
            if("svg"===(e.nodeName+"").toLowerCase())return(i||K(e))[t]||0;
            if(e.getBBox&&Be(e))return e.getBBox()[t]||0;
            var r=parseFloat("width"===t?e.offsetWidth:e.offsetHeight),n=re[t],a=n.length;
            for(i=i||K(e,null);
                --a>-1;
            )r-=parseFloat(Q(e,"padding"+n[a],i,!0))||0,r-=parseFloat(Q(e,"border"+n[a]+"Width",i,!0))||0;
            return r
        }
            ,se=function(e,t) {
            if("contain"===e||"auto"===e||"auto auto"===e)return e+" ";
            (null==e||""===e)&&(e="0 0");
            var i,r=e.split(" "),n=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":r[0],a=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":r[1];
            if(r.length>3&&!t) {
                for(r=e.split(", ").join(",").split(","),e=[],i=0;
                    i<r.length;
                    i++)e.push(se(r[i]));
                return e.join(",")
            }
            return null==a?a="center"===n?"50%":"0":"center"===a&&(a="50%"),("center"===n||isNaN(parseFloat(n))&&-1===(n+"").indexOf("="))&&(n="50%"),e=n+" "+a+(r.length>2?" "+r[2]:""),t&&(t.oxp=-1!==n.indexOf("%"),t.oyp=-1!==a.indexOf("%"),t.oxr="="===n.charAt(1),t.oyr="="===a.charAt(1),t.ox=parseFloat(n.replace(w,"")),t.oy=parseFloat(a.replace(w,"")),t.v=e),t||e
        }
            ,oe=function(e,t) {
            return"function"==typeof e&&(e=e(v,g)),"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2)):parseFloat(e)-parseFloat(t)||0
        }
            ,le=function(e,t) {
            return"function"==typeof e&&(e=e(v,g)),null==e?t:"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2))+t:parseFloat(e)||0
        }
            ,ue=function(e,t,i,r) {
            var n,a,s,o,l;
            return"function"==typeof e&&(e=e(v,g)),null==e?o=t:"number"==typeof e?o=e:(n=360,a=e.split("_"),l="="===e.charAt(1),s=(l?parseInt(e.charAt(0)+"1",10)*parseFloat(a[0].substr(2)):parseFloat(a[0]))*(-1===e.indexOf("rad")?1:I)-(l?0:t),a.length&&(r&&(r[i]=t+s),-1!==e.indexOf("short")&&(s%=n)!=s%(n/2)&&(s=0>s?s+n:s-n),-1!==e.indexOf("_cw")&&0>s?s=(s+9999999999*n)%n-(s/n|0)*n:-1!==e.indexOf("ccw")&&s>0&&(s=(s-9999999999*n)%n-(s/n|0)*n)),o=t+s),1e-6>o&&o>-1e-6&&(o=0),o
        }
            ,pe= {
            aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]
        }
            ,ce=function(e,t,i) {
            return 255*(1>6*(e=0>e?e+1:e>1?e-1:e)?t+(i-t)*e*6:.5>e?i:2>3*e?t+(i-t)*(2/3-e)*6:t)+.5|0
        }
            ,de=s.parseColor=function(e,t) {
            var i,r,n,a,s,o,l,u,p,c,d;
            if(e)if("number"==typeof e)i=[e>>16,e>>8&255,255&e];
            else {
                if(","===e.charAt(e.length-1)&&(e=e.substr(0,e.length-1)),pe[e])i=pe[e];
                else if("#"===e.charAt(0))4===e.length&&(r=e.charAt(1),n=e.charAt(2),a=e.charAt(3),e="#"+r+r+n+n+a+a),e=parseInt(e.substr(1),16),i=[e>>16,e>>8&255,255&e];
                else if("hsl"===e.substr(0,3))if(i=d=e.match(y),t) {
                    if(-1!==e.indexOf("="))return e.match(_)
                }
                else s=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,n=.5>=l?l*(o+1):l+o-l*o,r=2*l-n,i.length>3&&(i[3]=Number(e[3])),i[0]=ce(s+1/3,r,n),i[1]=ce(s,r,n),i[2]=ce(s-1/3,r,n);
                else i=e.match(y)||pe.transparent;
                i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))
            }
            else i=pe.black;
            return t&&!d&&(r=i[0]/255,n=i[1]/255,a=i[2]/255,u=Math.max(r,n,a),p=Math.min(r,n,a),l=(u+p)/2,u===p?s=o=0:(c=u-p,o=l>.5?c/(2-u-p):c/(u+p),s=u===r?(n-a)/c+(a>n?6:0):u===n?(a-r)/c+2:(r-n)/c+4,s*=60),i[0]=s+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i
        }
            ,he=function(e,t) {
            var i,r,n,a=e.match(fe)||[],s=0,o=a.length?"":e;
            for(i=0;
                i<a.length;
                i++)r=a[i],n=e.substr(s,e.indexOf(r,s)-s),s+=n.length+r.length,3===(r=de(r,t)).length&&r.push(1),o+=n+(t?"hsla("+r[0]+","+r[1]+"%,"+r[2]+"%,"+r[3]:"rgba("+r.join(","))+")";
            return o+e.substr(s)
        }
            ,fe="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f] {
        3
    }
) {
    1,2
}
\\b";
for(u in pe)fe+="|"+u+"\\b";
fe=new RegExp(fe+")","gi"),s.colorStringFilter=function(e) {
    var t,i=e[0]+e[1];
    fe.test(i)&&(t=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),e[0]=he(e[0],t),e[1]=he(e[1],t)),fe.lastIndex=0
}
    ,t.defaultStringFilter||(t.defaultStringFilter=s.colorStringFilter);
var me=function(e,t,i,r) {
        if(null==e)return function(e) {
            return e
        }
            ;
        var n,a=t?(e.match(fe)||[""])[0]:"",s=e.split(a).join("").match(x)||[],o=e.substr(0,e.indexOf(s[0])),l=")"===e.charAt(e.length-1)?")":"",u=-1!==e.indexOf(" ")?" ":",",p=s.length,c=p>0?s[0].replace(y,""):"";
        return p?n=t?function(e) {
            var t,d,h,f;
            if("number"==typeof e)e+=c;
            else if(r&&N.test(e)) {
                for(f=e.replace(N,"|").split("|"),h=0;
                    h<f.length;
                    h++)f[h]=n(f[h]);
                return f.join(",")
            }
            if(t=(e.match(fe)||[a])[0],d=e.split(t).join("").match(x)||[],h=d.length,p>h--)for(;
                ++h<p;
            )d[h]=i?d[(h-1)/2|0]:s[h];
            return o+d.join(u)+u+t+l+(-1!==e.indexOf("inset")?" inset":"")
        }
            :function(e) {
            var t,a,d;
            if("number"==typeof e)e+=c;
            else if(r&&N.test(e)) {
                for(a=e.replace(N,"|").split("|"),d=0;
                    d<a.length;
                    d++)a[d]=n(a[d]);
                return a.join(",")
            }
            if(t=e.match(x)||[],d=t.length,p>d--)for(;
                ++d<p;
            )t[d]=i?t[(d-1)/2|0]:s[d];
            return o+t.join(u)+l
        }
            :function(e) {
            return e
        }
    },ge=function(e) {
        return e=e.split(","),function(t,i,r,n,a,s,o) {
            var l,u=(i+"").split(" ");
            for(o= {
            }
                    ,l=0;
                4>l;
                l++)o[e[l]]=u[l]=u[l]||u[(l-1)/2>>0];
            return n.parse(t,o,a,s)
        }
    },ve=(Y._setPluginRatio=function(e) {
        this.plugin.setRatio(e);
        for(var t,i,r,n,a,s=this.data,o=s.proxy,l=s.firstMPT;
            l;
        )t=o[l.v],l.r?t=Math.round(t):1e-6>t&&t>-1e-6&&(t=0),l.t[l.p]=t,l=l._next;
        if(s.autoRotate&&(s.autoRotate.rotation=s.mod?s.mod(o.rotation,this.t):o.rotation),1===e||0===e)for(l=s.firstMPT,a=1===e?"e":"b";
                                                                                                            l;
        ) {
            if((i=l.t).type) {
                if(1===i.type) {
                    for(n=i.xs0+i.s+i.xs1,r=1;
                        r<i.l;
                        r++)n+=i["xn"+r]+i["xs"+(r+1)];
                    i[a]=n
                }
            }else i[a]=i.s+i.xs0;
            l=l._next
        }
    },function(e,t,i,r,n) {
        this.t=e,this.p=t,this.v=i,this.r=n,r&&(r._prev=this,this._next=r)
    }
    ),ye=(Y._parseToProxy=function(e,t,i,r,n,a) {
        var s,o,l,u,p,c=r,d= {
            }
            ,h= {
            }
            ,f=i._transform,m=B;
        for(i._transform=null,B=t,r=p=i.parse(e,t,r,n),B=m,a&&(i._transform=f,c&&(c._prev=null,c._prev&&(c._prev._next=null)));
            r&&r!==c;
        ) {
            if(r.type<=1&&(o=r.p,h[o]=r.s+r.c,d[o]=r.s,a||(u=new ve(r,"s",o,u,r.r),r.c=0),1===r.type))for(s=r.l;
                                                                                                          --s>0;
            )l="xn"+s,o=r.p+"_"+l,h[o]=r.data[l],d[o]=r[l],a||(u=new ve(r,l,o,u,r.rxp[l]));
            r=r._next
        }
        return {
            proxy:d,end:h,firstMPT:u,pt:p
        }
    },Y.CSSPropTween=function(e,t,r,n,s,o,l,u,p,c,d) {
        this.t=e,this.p=t,this.s=r,this.c=n,this.n=l||t,e instanceof ye||a.push(this.n),this.r=u,this.type=o||0,p&&(this.pr=p,i=!0),this.b=void 0===c?r:c,this.e=void 0===d?r+n:d,s&&(this._next=s,s._prev=this)
    }
    ),_e=function(e,t,i,r,n,a) {
        var s=new ye(e,t,i,r-i,n,-1,a);
        return s.b=i,s.e=s.xs0=r,s
    }
    ,xe=s.parseComplex=function(e,t,i,r,n,a,o,l,u,c) {
        i=i||a||"","function"==typeof r&&(r=r(v,g)),o=new ye(e,t,0,0,o,c?2:1,null,!1,l,i,r),r+="",n&&fe.test(r+i)&&(r=[i,r],s.colorStringFilter(r),i=r[0],r=r[1]);
        var d,h,f,m,x,w,b,T,C,S,P,k,M,E=i.split(", ").join(",").split(" "),z=r.split(", ").join(",").split(" "),A=E.length,D=!1!==p;
        for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(E=E.join(" ").replace(N,", ").split(" "),z=z.join(" ").replace(N,", ").split(" "),A=E.length),A!==z.length&&(E=(a||"").split(" "),A=E.length),o.plugin=u,o.setRatio=c,fe.lastIndex=0,d=0;
            A>d;
            d++)if(m=E[d],x=z[d],(T=parseFloat(m))||0===T)o.appendXtra("",T,oe(x,T),x.replace(_,""),D&&-1!==x.indexOf("px"),!0);
        else if(n&&fe.test(m))k=x.indexOf(")")+1,k=")"+(k?x.substr(k):""),M=-1!==x.indexOf("hsl")&&W,m=de(m,M),x=de(x,M),(C=m.length+x.length>6)&&!W&&0===x[3]?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(z[d]).join("transparent")):(W||(C=!1),M?o.appendXtra(C?"hsla(":"hsl(",m[0],oe(x[0],m[0]),",",!1,!0).appendXtra("",m[1],oe(x[1],m[1]),"%,",!1).appendXtra("",m[2],oe(x[2],m[2]),C?"%,":"%"+k,!1):o.appendXtra(C?"rgba(":"rgb(",m[0],x[0]-m[0],",",!0,!0).appendXtra("",m[1],x[1]-m[1],",",!0).appendXtra("",m[2],x[2]-m[2],C?",":k,!0),C&&(m=m.length<4?1:m[3],o.appendXtra("",m,(x.length<4?1:x[3])-m,k,!1))),fe.lastIndex=0;
        else if(w=m.match(y)) {
            if(!(b=x.match(_))||b.length!==w.length)return o;
            for(f=0,h=0;
                h<w.length;
                h++)P=w[h],S=m.indexOf(P,f),o.appendXtra(m.substr(f,S-f),Number(P),oe(b[h],P),"",D&&"px"===m.substr(S+P.length,2),0===h),f=S+P.length;
            o["xs"+o.l]+=m.substr(f)
        }
        else o["xs"+o.l]+=o.l||o["xs"+o.l]?" "+x:x;
        if(-1!==r.indexOf("=")&&o.data) {
            for(k=o.xs0+o.data.s,d=1;
                d<o.l;
                d++)k+=o["xs"+d]+o.data["xn"+d];
            o.e=k+o["xs"+d]
        }
        return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o
    }
    ,we=9;
for((u=ye.prototype).l=u.pr=0;
    --we>0;
)u["xn"+we]=0,u["xs"+we]="";
u.xs0="",u._next=u._prev=u.xfirst=u.data=u.plugin=u.setRatio=u.rxp=null,u.appendXtra=function(e,t,i,r,n,a) {
    var s=this,o=s.l;
    return s["xs"+o]+=a&&(o||s["xs"+o])?" "+e:e||"",i||0===o||s.plugin?(s.l++,s.type=s.setRatio?2:1,s["xs"+s.l]=r||"",o>0?(s.data["xn"+o]=t+i,s.rxp["xn"+o]=n,s["xn"+o]=t,s.plugin||(s.xfirst=new ye(s,"xn"+o,t,i,s.xfirst||s,0,s.n,n,s.pr),s.xfirst.xs0=0),s):(s.data= {
        s:t+i
    }
        ,s.rxp= {
    }
        ,s.s=t,s.c=i,s.r=n,s)):(s["xs"+o]+=t+(r||""),s)
}
;
var be=function(e,t) {
        t=t|| {
        }
            ,this.p=t.prefix?Z(e)||e:e,l[e]=l[this.p]=this,this.format=t.formatter||me(t.defaultValue,t.color,t.collapsible,t.multi),t.parser&&(this.parse=t.parser),this.clrs=t.color,this.multi=t.multi,this.keyword=t.keyword,this.dflt=t.defaultValue,this.pr=t.priority||0
    }
    ,Te=Y._registerComplexSpecialProp=function(e,t,i) {
        "object"!=typeof t&&(t= {
            parser:i
        }
        );
        var r,n=e.split(","),a=t.defaultValue;
        for(i=i||[a],r=0;
            r<n.length;
            r++)t.prefix=0===r&&t.prefix,t.defaultValue=i[r]||a,new be(n[r],t)
    }
    ,Ce=Y._registerPluginProp=function(e) {
        if(!l[e]) {
            var t=e.charAt(0).toUpperCase()+e.substr(1)+"Plugin";
            Te(e, {
                parser:function(e,i,r,n,a,s,u) {
                    var p=o.com.greensock.plugins[t];
                    return p?(p._cssRegister(),l[r].parse(e,i,r,n,a,s,u)):(V("Error: "+t+" js file not loaded."),a)
                }
            })
        }
    };
(u=be.prototype).parseComplex=function(e,t,i,r,n,a) {
    var s,o,l,u,p,c,d=this.keyword;
    if(this.multi&&(N.test(i)||N.test(t)?(o=t.replace(N,"|").split("|"),l=i.replace(N,"|").split("|")):d&&(o=[t],l=[i])),l) {
        for(u=l.length>o.length?l.length:o.length,s=0;
            u>s;
            s++)t=o[s]=o[s]||this.dflt,i=l[s]=l[s]||this.dflt,d&&(p=t.indexOf(d),c=i.indexOf(d),p!==c&&(-1===c?o[s]=o[s].split(d).join(""):-1===p&&(o[s]+=" "+d)));
        t=o.join(", "),i=l.join(", ")
    }
    return xe(e,this.p,t,i,this.clrs,this.dflt,r,this.pr,n,a)
}
    ,u.parse=function(e,t,i,r,a,s,o) {
    return this.parseComplex(e.style,this.format(Q(e,this.p,n,!1,this.dflt)),this.format(t),a,s)
}
    ,s.registerSpecialProp=function(e,t,i) {
    Te(e, {
            parser:function(e,r,n,a,s,o,l) {
                var u=new ye(e,n,0,0,s,2,n,!1,i);
                return u.plugin=o,u.setRatio=t(e,r,a._tween,n),u
            }
            ,priority:i
        }
    )
}
    ,s.useSVGTransformAttr=d||h;
var Se,Pe="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ke=Z("transform"),Me=$+"transform",Ee=Z("transformOrigin"),ze=null!==Z("perspective"),Ae=Y.Transform=function() {
        this.perspective=parseFloat(s.defaultTransformPerspective)||0,this.force3D=!(!1===s.defaultForce3D||!ze)&&(s.defaultForce3D||"auto")
    }
    ,De=window.SVGElement,Oe=function(e,t,i) {
        var r,n=H.createElementNS("http://www.w3.org/2000/svg",e),a=/([a-z])([A-Z])/g;
        for(r in i)n.setAttributeNS(null,r.replace(a,"$1-$2").toLowerCase(),i[r]);
        return t.appendChild(n),n
    }
    ,Ne=H.documentElement,Le=function() {
        var e,t,i,r=m||/Android/i.test(q)&&!window.chrome;
        return H.createElementNS&&!r&&(e=Oe("svg",Ne),t=Oe("rect",e, {
                width:100,height:50,x:100
            }
        ),i=t.getBoundingClientRect().width,t.style[Ee]="50% 50%",t.style[ke]="scaleX(0.5)",r=i===t.getBoundingClientRect().width&&!(h&&ze),Ne.removeChild(e)),r
    }
    (),Re=function(e,t,i,r,n,a) {
        var o,l,u,p,c,d,h,f,m,g,v,y,_,x,w=e._gsTransform,b=Fe(e,!0);
        w&&(_=w.xOrigin,x=w.yOrigin),(!r||(o=r.split(" ")).length<2)&&(h=e.getBBox(),t=se(t).split(" "),o=[(-1!==t[0].indexOf("%")?parseFloat(t[0])/100*h.width:parseFloat(t[0]))+h.x,(-1!==t[1].indexOf("%")?parseFloat(t[1])/100*h.height:parseFloat(t[1]))+h.y]),i.xOrigin=p=parseFloat(o[0]),i.yOrigin=c=parseFloat(o[1]),r&&b!==He&&(d=b[0],h=b[1],f=b[2],m=b[3],g=b[4],v=b[5],y=d*m-h*f,l=p*(m/y)+c*(-f/y)+(f*v-m*g)/y,u=p*(-h/y)+c*(d/y)-(d*v-h*g)/y,p=i.xOrigin=o[0]=l,c=i.yOrigin=o[1]=u),w&&(a&&(i.xOffset=w.xOffset,i.yOffset=w.yOffset,w=i),n||!1!==n&&!1!==s.defaultSmoothOrigin?(l=p-_,u=c-x,w.xOffset+=l*b[0]+u*b[2]-l,w.yOffset+=l*b[1]+u*b[3]-u):w.xOffset=w.yOffset=0),a||e.setAttribute("data-svg-origin",o.join(" "))
    }
    ,Ie=function(e) {
        try {
            return e.getBBox()
        }
        catch(e) {
        }
    },Be=function(e) {
        return!!(De&&e.getBBox&&e.getCTM&&Ie(e)&&(!e.parentNode||e.parentNode.getBBox&&e.parentNode.getCTM))
    }
    ,He=[1,0,0,1,0,0],Fe=function(e,t) {
        var i,r,n,a,s,o,l=e._gsTransform||new Ae,u=e.style;
        if(ke?r=Q(e,Me,null,!0):e.currentStyle&&(r=e.currentStyle.filter.match(D),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&ke&&((o="none"===K(e).display)||!e.parentNode)&&(o&&(a=u.display,u.display="block"),e.parentNode||(s=1,Ne.appendChild(e)),r=Q(e,Me,null,!0),i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,a?u.display=a:o&&We(u,"display"),s&&Ne.removeChild(e)),(l.svg||e.getBBox&&Be(e))&&(i&&-1!==(u[ke]+"").indexOf("matrix")&&(r=u[ke],i=0),n=e.getAttribute("transform"),i&&n&&(-1!==n.indexOf("matrix")?(r=n,i=0):-1!==n.indexOf("translate")&&(r="matrix(1,0,0,1,"+n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return He;
        for(n=(r||"").match(y)||[],we=n.length;
            --we>-1;
        )a=Number(n[we]),n[we]=(s=a-(a|=0))?(1e5*s+(0>s?-.5:.5)|0)/1e5+a:a;
        return t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n
    }
    ,Xe=Y.getTransform=function(e,i,r,n) {
        if(e._gsTransform&&r&&!n)return e._gsTransform;
        var a,o,l,u,p,c,d=r?e._gsTransform||new Ae:new Ae,h=d.scaleX<0,f=1e5,m=ze?parseFloat(Q(e,Ee,i,!1,"0 0 0").split(" ")[2])||d.zOrigin||0:0,g=parseFloat(s.defaultTransformPerspective)||0;
        if(d.svg=!(!e.getBBox||!Be(e)),d.svg&&(Re(e,Q(e,Ee,i,!1,"50% 50%")+"",d,e.getAttribute("data-svg-origin")),Se=s.useSVGTransformAttr||Le),(a=Fe(e))!==He) {
            if(16===a.length) {
                var v,y,_,x,w,b=a[0],T=a[1],C=a[2],S=a[3],P=a[4],k=a[5],M=a[6],E=a[7],z=a[8],A=a[9],D=a[10],O=a[12],N=a[13],L=a[14],R=a[11],B=Math.atan2(M,D);
                d.zOrigin&&(L=-d.zOrigin,O=z*L-a[12],N=A*L-a[13],L=D*L+d.zOrigin-a[14]),d.rotationX=B*I,B&&(x=Math.cos(-B),w=Math.sin(-B),v=P*x+z*w,y=k*x+A*w,_=M*x+D*w,z=P*-w+z*x,A=k*-w+A*x,D=M*-w+D*x,R=E*-w+R*x,P=v,k=y,M=_),B=Math.atan2(-C,D),d.rotationY=B*I,B&&(x=Math.cos(-B),w=Math.sin(-B),v=b*x-z*w,y=T*x-A*w,_=C*x-D*w,A=T*w+A*x,D=C*w+D*x,R=S*w+R*x,b=v,T=y,C=_),B=Math.atan2(T,b),d.rotation=B*I,B&&(x=Math.cos(-B),w=Math.sin(-B),b=b*x+P*w,y=T*x+k*w,k=T*-w+k*x,M=C*-w+M*x,T=y),d.rotationX&&Math.abs(d.rotationX)+Math.abs(d.rotation)>359.9&&(d.rotationX=d.rotation=0,d.rotationY=180-d.rotationY),d.scaleX=(Math.sqrt(b*b+T*T)*f+.5|0)/f,d.scaleY=(Math.sqrt(k*k+A*A)*f+.5|0)/f,d.scaleZ=(Math.sqrt(M*M+D*D)*f+.5|0)/f,d.rotationX||d.rotationY?d.skewX=0:(d.skewX=P||k?Math.atan2(P,k)*I+d.rotation:d.skewX||0,Math.abs(d.skewX)>90&&Math.abs(d.skewX)<270&&(h?(d.scaleX*=-1,d.skewX+=d.rotation<=0?180:-180,d.rotation+=d.rotation<=0?180:-180):(d.scaleY*=-1,d.skewX+=d.skewX<=0?180:-180))),d.perspective=R?1/(0>R?-R:R):0,d.x=O,d.y=N,d.z=L,d.svg&&(d.x-=d.xOrigin-(d.xOrigin*b-d.yOrigin*P),d.y-=d.yOrigin-(d.yOrigin*T-d.xOrigin*k))
            }
            else if(!ze||n||!a.length||d.x!==a[4]||d.y!==a[5]||!d.rotationX&&!d.rotationY) {
                var H=a.length>=6,F=H?a[0]:1,X=a[1]||0,j=a[2]||0,Y=H?a[3]:1;
                d.x=a[4]||0,d.y=a[5]||0,l=Math.sqrt(F*F+X*X),u=Math.sqrt(Y*Y+j*j),p=F||X?Math.atan2(X,F)*I:d.rotation||0,c=j||Y?Math.atan2(j,Y)*I+p:d.skewX||0,Math.abs(c)>90&&Math.abs(c)<270&&(h?(l*=-1,c+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,c+=0>=c?180:-180)),d.scaleX=l,d.scaleY=u,d.rotation=p,d.skewX=c,ze&&(d.rotationX=d.rotationY=d.z=0,d.perspective=g,d.scaleZ=1),d.svg&&(d.x-=d.xOrigin-(d.xOrigin*F+d.yOrigin*j),d.y-=d.yOrigin-(d.xOrigin*X+d.yOrigin*Y))
            }
            d.zOrigin=m;
            for(o in d)d[o]<2e-5&&d[o]>-2e-5&&(d[o]=0)
        }
        return r&&(e._gsTransform=d,d.svg&&(Se&&e.style[ke]?t.delayedCall(.001,function() {
                We(e.style,ke)
            }
        ):!Se&&e.getAttribute("transform")&&t.delayedCall(.001,function() {
                e.removeAttribute("transform")
            }
        ))),d
    }
    ,je=function(e) {
        var t,i,r=this.data,n=-r.rotation*R,a=n+r.skewX*R,s=1e5,o=(Math.cos(n)*r.scaleX*s|0)/s,l=(Math.sin(n)*r.scaleX*s|0)/s,u=(Math.sin(a)*-r.scaleY*s|0)/s,p=(Math.cos(a)*r.scaleY*s|0)/s,c=this.t.style,d=this.t.currentStyle;
        if(d) {
            i=l,l=-u,u=-i,t=d.filter,c.filter="";
            var h,f,g=this.t.offsetWidth,v=this.t.offsetHeight,y="absolute"!==d.position,_="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+u+", M22="+p,x=r.x+g*r.xPercent/100,w=r.y+v*r.yPercent/100;
            if(null!=r.ox&&(h=(r.oxp?g*r.ox*.01:r.ox)-g/2,f=(r.oyp?v*r.oy*.01:r.oy)-v/2,x+=h-(h*o+f*l),w+=f-(h*u+f*p)),y?(h=g/2,f=v/2,_+=", Dx="+(h-(h*o+f*l)+x)+", Dy="+(f-(h*u+f*p)+w)+")"):_+=", sizingMethod='auto expand')",-1!==t.indexOf("DXImageTransform.Microsoft.Matrix(")?c.filter=t.replace(O,_):c.filter=_+" "+t,(0===e||1===e)&&1===o&&0===l&&0===u&&1===p&&(y&&-1===_.indexOf("Dx=0, Dy=0")||T.test(t)&&100!==parseFloat(RegExp.$1)||-1===t.indexOf(t.indexOf("Alpha"))&&c.removeAttribute("filter")),!y) {
                var C,S,P,k=8>m?1:-1;
                for(h=r.ieOffsetX||0,f=r.ieOffsetY||0,r.ieOffsetX=Math.round((g-((0>o?-o:o)*g+(0>l?-l:l)*v))/2+x),r.ieOffsetY=Math.round((v-((0>p?-p:p)*v+(0>u?-u:u)*g))/2+w),we=0;
                    4>we;
                    we++)S=ne[we],C=d[S],i=-1!==C.indexOf("px")?parseFloat(C):J(this.t,S,parseFloat(C),C.replace(b,""))||0,P=i!==r[S]?2>we?-r.ieOffsetX:-r.ieOffsetY:2>we?h-r.ieOffsetX:f-r.ieOffsetY,c[S]=(r[S]=Math.round(i-P*(0===we||2===we?1:k)))+"px"
            }
        }
    }
    ,Ye=Y.set3DTransformRatio=Y.setTransformRatio=function(e) {
        var t,i,r,n,a,s,o,l,u,p,c,d,f,m,g,v,y,_,x,w,b,T,C,S=this.data,P=this.t.style,k=S.rotation,M=S.rotationX,E=S.rotationY,z=S.scaleX,A=S.scaleY,D=S.scaleZ,O=S.x,N=S.y,L=S.z,I=S.svg,B=S.perspective,H=S.force3D;
        if(!((1!==e&&0!==e||"auto"!==H||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&H||L||B||E||M||1!==D)||Se&&I||!ze)k||S.skewX||I?(k*=R,T=S.skewX*R,C=1e5,t=Math.cos(k)*z,n=Math.sin(k)*z,i=Math.sin(k-T)*-A,a=Math.cos(k-T)*A,T&&"simple"===S.skewType&&(y=Math.tan(T-S.skewY*R),y=Math.sqrt(1+y*y),i*=y,a*=y,S.skewY&&(y=Math.tan(S.skewY*R),y=Math.sqrt(1+y*y),t*=y,n*=y)),I&&(O+=S.xOrigin-(S.xOrigin*t+S.yOrigin*i)+S.xOffset,N+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)+S.yOffset,Se&&(S.xPercent||S.yPercent)&&(m=this.t.getBBox(),O+=.01*S.xPercent*m.width,N+=.01*S.yPercent*m.height),(m=1e-6)>O&&O>-m&&(O=0),m>N&&N>-m&&(N=0)),x=(t*C|0)/C+","+(n*C|0)/C+","+(i*C|0)/C+","+(a*C|0)/C+","+O+","+N+")",I&&Se?this.t.setAttribute("transform","matrix("+x):P[ke]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+x):P[ke]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+z+",0,0,"+A+","+O+","+N+")";
        else {
            if(h&&((m=1e-4)>z&&z>-m&&(z=D=2e-5),m>A&&A>-m&&(A=D=2e-5),!B||S.z||S.rotationX||S.rotationY||(B=0)),k||S.skewX)k*=R,g=t=Math.cos(k),v=n=Math.sin(k),S.skewX&&(k-=S.skewX*R,g=Math.cos(k),v=Math.sin(k),"simple"===S.skewType&&(y=Math.tan((S.skewX-S.skewY)*R),y=Math.sqrt(1+y*y),g*=y,v*=y,S.skewY&&(y=Math.tan(S.skewY*R),y=Math.sqrt(1+y*y),t*=y,n*=y))),i=-v,a=g;
            else {
                if(!(E||M||1!==D||B||I))return void(P[ke]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+O+"px,"+N+"px,"+L+"px)"+(1!==z||1!==A?" scale("+z+","+A+")":""));
                t=a=1,i=n=0
            }
            u=1,r=s=o=l=p=c=0,d=B?-1/B:0,f=S.zOrigin,m=1e-6,w=",",b="0",(k=E*R)&&(g=Math.cos(k),v=Math.sin(k),o=-v,p=d*-v,r=t*v,s=n*v,u=g,d*=g,t*=g,n*=g),(k=M*R)&&(g=Math.cos(k),v=Math.sin(k),y=i*g+r*v,_=a*g+s*v,l=u*v,c=d*v,r=i*-v+r*g,s=a*-v+s*g,u*=g,d*=g,i=y,a=_),1!==D&&(r*=D,s*=D,u*=D,d*=D),1!==A&&(i*=A,a*=A,l*=A,c*=A),1!==z&&(t*=z,n*=z,o*=z,p*=z),(f||I)&&(f&&(O+=r*-f,N+=s*-f,L+=u*-f+f),I&&(O+=S.xOrigin-(S.xOrigin*t+S.yOrigin*i)+S.xOffset,N+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)+S.yOffset),m>O&&O>-m&&(O=b),m>N&&N>-m&&(N=b),m>L&&L>-m&&(L=0)),x=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",x+=(m>t&&t>-m?b:t)+w+(m>n&&n>-m?b:n)+w+(m>o&&o>-m?b:o),x+=w+(m>p&&p>-m?b:p)+w+(m>i&&i>-m?b:i)+w+(m>a&&a>-m?b:a),M||E||1!==D?(x+=w+(m>l&&l>-m?b:l)+w+(m>c&&c>-m?b:c)+w+(m>r&&r>-m?b:r),x+=w+(m>s&&s>-m?b:s)+w+(m>u&&u>-m?b:u)+w+(m>d&&d>-m?b:d)+w):x+=",0,0,0,0,1,0,",x+=O+w+N+w+L+w+(B?1+-L/B:1)+")",P[ke]=x
        }
    };
(u=Ae.prototype).x=u.y=u.z=u.skewX=u.skewY=u.rotation=u.rotationX=u.rotationY=u.zOrigin=u.xPercent=u.yPercent=u.xOffset=u.yOffset=0,u.scaleX=u.scaleY=u.scaleZ=1,Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
        parser:function(e,t,i,r,a,o,l) {
            if(r._lastParsedTransform===l)return a;
            r._lastParsedTransform=l;
            var u;
            "function"==typeof l[i]&&(u=l[i],l[i]=t);
            var p,c,d,h,f,m,y,_,x,w=e._gsTransform,b=e.style,T=Pe.length,C=l,S= {
                }
                ,P="transformOrigin",k=Xe(e,n,!0,C.parseTransform),M=C.transform&&("function"==typeof C.transform?C.transform(v,g):C.transform);
            if(r._transform=k,M&&"string"==typeof M&&ke)c=X.style,c[ke]=M,c.display="block",c.position="absolute",H.body.appendChild(X),p=Xe(X,null,!1),k.svg&&(m=k.xOrigin,y=k.yOrigin,p.x-=k.xOffset,p.y-=k.yOffset,(C.transformOrigin||C.svgOrigin)&&(M= {
            }
                ,Re(e,se(C.transformOrigin),M,C.svgOrigin,C.smoothOrigin,!0),m=M.xOrigin,y=M.yOrigin,p.x-=M.xOffset-k.xOffset,p.y-=M.yOffset-k.yOffset),(m||y)&&(_=Fe(X,!0),p.x-=m-(m*_[0]+y*_[2]),p.y-=y-(m*_[1]+y*_[3]))),H.body.removeChild(X),p.perspective||(p.perspective=k.perspective),null!=C.xPercent&&(p.xPercent=le(C.xPercent,k.xPercent)),null!=C.yPercent&&(p.yPercent=le(C.yPercent,k.yPercent));
            else if("object"==typeof C) {
                if(p= {
                        scaleX:le(null!=C.scaleX?C.scaleX:C.scale,k.scaleX),scaleY:le(null!=C.scaleY?C.scaleY:C.scale,k.scaleY),scaleZ:le(C.scaleZ,k.scaleZ),x:le(C.x,k.x),y:le(C.y,k.y),z:le(C.z,k.z),xPercent:le(C.xPercent,k.xPercent),yPercent:le(C.yPercent,k.yPercent),perspective:le(C.transformPerspective,k.perspective)
                    }
                        ,null!=(f=C.directionalRotation))if("object"==typeof f)for(c in f)C[c]=f[c];
                else C.rotation=f;
                "string"==typeof C.x&&-1!==C.x.indexOf("%")&&(p.x=0,p.xPercent=le(C.x,k.xPercent)),"string"==typeof C.y&&-1!==C.y.indexOf("%")&&(p.y=0,p.yPercent=le(C.y,k.yPercent)),p.rotation=ue("rotation"in C?C.rotation:"shortRotation"in C?C.shortRotation+"_short":"rotationZ"in C?C.rotationZ:k.rotation-k.skewY,k.rotation-k.skewY,"rotation",S),ze&&(p.rotationX=ue("rotationX"in C?C.rotationX:"shortRotationX"in C?C.shortRotationX+"_short":k.rotationX||0,k.rotationX,"rotationX",S),p.rotationY=ue("rotationY"in C?C.rotationY:"shortRotationY"in C?C.shortRotationY+"_short":k.rotationY||0,k.rotationY,"rotationY",S)),p.skewX=ue(C.skewX,k.skewX-k.skewY),(p.skewY=ue(C.skewY,k.skewY))&&(p.skewX+=p.skewY,p.rotation+=p.skewY)
            }
            for(ze&&null!=C.force3D&&(k.force3D=C.force3D,h=!0),k.skewType=C.skewType||k.skewType||s.defaultSkewType,(d=k.force3D||k.z||k.rotationX||k.rotationY||p.z||p.rotationX||p.rotationY||p.perspective)||null==C.scale||(p.scaleZ=1);
                --T>-1;
            )x=Pe[T],((M=p[x]-k[x])>1e-6||-1e-6>M||null!=C[x]||null!=B[x])&&(h=!0,a=new ye(k,x,k[x],M,a),x in S&&(a.e=S[x]),a.xs0=0,a.plugin=o,r._overwriteProps.push(a.n));
            return M=C.transformOrigin,k.svg&&(M||C.svgOrigin)&&(m=k.xOffset,y=k.yOffset,Re(e,se(M),p,C.svgOrigin,C.smoothOrigin),a=_e(k,"xOrigin",(w?k:p).xOrigin,p.xOrigin,a,P),a=_e(k,"yOrigin",(w?k:p).yOrigin,p.yOrigin,a,P),(m!==k.xOffset||y!==k.yOffset)&&(a=_e(k,"xOffset",w?m:k.xOffset,k.xOffset,a,P),a=_e(k,"yOffset",w?y:k.yOffset,k.yOffset,a,P)),M=Se?null:"0px 0px"),(M||ze&&d&&k.zOrigin)&&(ke?(h=!0,x=Ee,M=(M||Q(e,x,n,!1,"50% 50%"))+"",a=new ye(b,x,0,0,a,-1,P),a.b=b[x],a.plugin=o,ze?(c=k.zOrigin,M=M.split(" "),k.zOrigin=(M.length>2&&(0===c||"0px"!==M[2])?parseFloat(M[2]):c)||0,a.xs0=a.e=M[0]+" "+(M[1]||"50%")+" 0px",a=new ye(k,"zOrigin",0,0,a,-1,a.n),a.b=c,a.xs0=a.e=k.zOrigin):a.xs0=a.e=M):se(M+"",k)),h&&(r._transformType=k.svg&&Se||!d&&3!==this._transformType?2:3),u&&(l[i]=u),a
        }
        ,prefix:!0
    }
),Te("boxShadow", {
        defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"
    }
),Te("borderRadius", {
        defaultValue:"0px",parser:function(e,t,i,a,s,o) {
            t=this.format(t);
            var l,u,p,c,d,h,f,m,g,v,y,_,x,w,b,T,C=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],S=e.style;
            for(g=parseFloat(e.offsetWidth),v=parseFloat(e.offsetHeight),l=t.split(" "),u=0;
                u<C.length;
                u++)this.p.indexOf("border")&&(C[u]=Z(C[u])),-1!==(d=c=Q(e,C[u],n,!1,"0px")).indexOf(" ")&&(c=d.split(" "),d=c[0],c=c[1]),h=p=l[u],f=parseFloat(d),_=d.substr((f+"").length),(x="="===h.charAt(1))?(m=parseInt(h.charAt(0)+"1",10),h=h.substr(2),m*=parseFloat(h),y=h.substr((m+"").length-(0>m?1:0))||""):(m=parseFloat(h),y=h.substr((m+"").length)),""===y&&(y=r[i]||_),y!==_&&(w=J(e,"borderLeft",f,_),b=J(e,"borderTop",f,_),"%"===y?(d=w/g*100+"%",c=b/v*100+"%"):"em"===y?(T=J(e,"borderLeft",1,"em"),d=w/T+"em",c=b/T+"em"):(d=w+"px",c=b+"px"),x&&(h=parseFloat(d)+m+y,p=parseFloat(c)+m+y)),s=xe(S,C[u],d+" "+c,h+" "+p,!1,"0px",s);
            return s
        }
        ,prefix:!0,formatter:me("0px 0px 0px 0px",!1,!0)
    }
),Te("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
        defaultValue:"0px",parser:function(e,t,i,r,a,s) {
            return xe(e.style,i,this.format(Q(e,i,n,!1,"0px 0px")),this.format(t),!1,"0px",a)
        }
        ,prefix:!0,formatter:me("0px 0px",!1,!0)
    }
),Te("backgroundPosition", {
        defaultValue:"0 0",parser:function(e,t,i,r,a,s) {
            var o,l,u,p,c,d,h="background-position",f=n||K(e,null),g=this.format((f?m?f.getPropertyValue(h+"-x")+" "+f.getPropertyValue(h+"-y"):f.getPropertyValue(h):e.currentStyle.backgroundPositionX+" "+e.currentStyle.backgroundPositionY)||"0 0"),v=this.format(t);
            if(-1!==g.indexOf("%")!=(-1!==v.indexOf("%"))&&v.split(",").length<2&&(d=Q(e,"backgroundImage").replace(E,""))&&"none"!==d) {
                for(o=g.split(" "),l=v.split(" "),j.setAttribute("src",d),u=2;
                    --u>-1;
                )g=o[u],(p=-1!==g.indexOf("%"))!==(-1!==l[u].indexOf("%"))&&(c=0===u?e.offsetWidth-j.width:e.offsetHeight-j.height,o[u]=p?parseFloat(g)/100*c+"px":parseFloat(g)/c*100+"%");
                g=o.join(" ")
            }
            return this.parseComplex(e.style,g,v,a,s)
        }
        ,formatter:se
    }
),Te("backgroundSize", {
    defaultValue:"0 0",formatter:function(e) {
        return e+="",se(-1===e.indexOf(" ")?e+" "+e:e)
    }
}),Te("perspective", {
        defaultValue:"0px",prefix:!0
    }
),Te("perspectiveOrigin", {
        defaultValue:"50% 50%",prefix:!0
    }
),Te("transformStyle", {
        prefix:!0
    }
),Te("backfaceVisibility", {
        prefix:!0
    }
),Te("userSelect", {
        prefix:!0
    }
),Te("margin", {
        parser:ge("marginTop,marginRight,marginBottom,marginLeft")
    }
),Te("padding", {
        parser:ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }
),Te("clip", {
    defaultValue:"rect(0px,0px,0px,0px)",parser:function(e,t,i,r,a,s) {
        var o,l,u;
        return 9>m?(l=e.currentStyle,u=8>m?" ":",",o="rect("+l.clipTop+u+l.clipRight+u+l.clipBottom+u+l.clipLeft+")",t=this.format(t).split(",").join(u)):(o=this.format(Q(e,this.p,n,!1,this.dflt)),t=this.format(t)),this.parseComplex(e.style,o,t,a,s)
    }
}),Te("textShadow", {
        defaultValue:"0px 0px 0px #999",color:!0,multi:!0
    }
),Te("autoRound,strictUnits", {
    parser:function(e,t,i,r,n) {
        return n
    }
}),Te("border", {
    defaultValue:"0px solid #000",parser:function(e,t,i,r,a,s) {
        var o=Q(e,"borderTopWidth",n,!1,"0px"),l=this.format(t).split(" "),u=l[0].replace(b,"");
        return"px"!==u&&(o=parseFloat(o)/J(e,"borderTopWidth",1,u)+u),this.parseComplex(e.style,this.format(o+" "+Q(e,"borderTopStyle",n,!1,"solid")+" "+Q(e,"borderTopColor",n,!1,"#000")),l.join(" "),a,s)
    }
    ,color:!0,formatter:function(e) {
        var t=e.split(" ");
        return t[0]+" "+(t[1]||"solid")+" "+(e.match(fe)||["#000"])[0]
    }
}),Te("borderWidth", {
        parser:ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }
),Te("float,cssFloat,styleFloat", {
    parser:function(e,t,i,r,n,a) {
        var s=e.style,o="cssFloat"in s?"cssFloat":"styleFloat";
        return new ye(s,o,0,0,n,-1,i,!1,0,s[o],t)
    }
});
var qe=function(e) {
        var t,i=this.t,r=i.filter||Q(this.data,"filter")||"",n=this.s+this.c*e|0;
        100===n&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),t=!Q(this.data,"filter")):(i.filter=r.replace(S,""),t=!0)),t||(this.xn1&&(i.filter=r=r||"alpha(opacity="+n+")"),-1===r.indexOf("pacity")?0===n&&this.xn1||(i.filter=r+" alpha(opacity="+n+")"):i.filter=r.replace(T,"opacity="+n))
    }
    ;
Te("opacity,alpha,autoAlpha", {
    defaultValue:"1",parser:function(e,t,i,r,a,s) {
        var o=parseFloat(Q(e,"opacity",n,!1,"1")),l=e.style,u="autoAlpha"===i;
        return"string"==typeof t&&"="===t.charAt(1)&&(t=("-"===t.charAt(0)?-1:1)*parseFloat(t.substr(2))+o),u&&1===o&&"hidden"===Q(e,"visibility",n)&&0!==t&&(o=0),W?a=new ye(l,"opacity",o,t-o,a):(a=new ye(l,"opacity",100*o,100*(t-o),a),a.xn1=u?1:0,l.zoom=1,a.type=2,a.b="alpha(opacity="+a.s+")",a.e="alpha(opacity="+(a.s+a.c)+")",a.data=e,a.plugin=s,a.setRatio=qe),u&&(a=new ye(l,"visibility",0,0,a,-1,null,!1,0,0!==o?"inherit":"hidden",0===t?"hidden":"inherit"),a.xs0="inherit",r._overwriteProps.push(a.n),r._overwriteProps.push(i)),a
    }
});
var We=function(e,t) {
        t&&(e.removeProperty?(("ms"===t.substr(0,2)||"webkit"===t.substr(0,6))&&(t="-"+t),e.removeProperty(t.replace(k,"-$1").toLowerCase())):e.removeAttribute(t))
    }
    ,Ge=function(e) {
        if(this.t._gsClassPT=this,1===e||0===e) {
            this.t.setAttribute("class",0===e?this.b:this.e);
            for(var t=this.data,i=this.t.style;
                t;
            )t.v?i[t.p]=t.v:We(i,t.p),t=t._next;
            1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)
        }
        else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)
    }
    ;
Te("className", {
    parser:function(e,t,r,a,s,o,l) {
        var u,p,c,d,h,f=e.getAttribute("class")||"",m=e.style.cssText;
        if(s=a._classNamePT=new ye(e,r,0,0,s,2),s.setRatio=Ge,s.pr=-11,i=!0,s.b=f,p=te(e,n),c=e._gsClassPT) {
            for(d= {
            }
                    ,h=c.data;
                h;
            )d[h.p]=1,h=h._next;
            c.setRatio(1)
        }
        return e._gsClassPT=s,s.e="="!==t.charAt(1)?t:f.replace(new RegExp("(?:\\s|^)"+t.substr(2)+"(?![\\w-])"),"")+("+"===t.charAt(0)?" "+t.substr(2):""),e.setAttribute("class",s.e),u=ie(e,p,te(e),l,d),e.setAttribute("class",f),s.data=u.firstMPT,e.style.cssText=m,s=s.xfirst=a.parse(e,u.difs,s,o)
    }
});
var Ve=function(e) {
    if((1===e||0===e)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data) {
        var t,i,r,n,a,s=this.t.style,o=l.transform.parse;
        if("all"===this.e)s.cssText="",n=!0;
        else for(t=this.e.split(" ").join("").split(","),r=t.length;
                 --r>-1;
        )i=t[r],l[i]&&(l[i].parse===o?n=!0:i="transformOrigin"===i?Ee:l[i].p),We(s,i);
        n&&(We(s,ke),(a=this.t._gsTransform)&&(a.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))
    }
};
for(Te("clearProps", {
    parser:function(e,t,r,n,a) {
        return a=new ye(e,r,0,0,a,2),a.setRatio=Ve,a.e=t,a.pr=-10,a.data=n._tween,i=!0,a
    }
}),u="bezier,throwProps,physicsProps,physics2D".split(","),we=u.length;
    we--;
)Ce(u[we]);
(u=s.prototype)._firstPT=u._lastParsedTransform=u._transform=null,u._onInitTween=function(e,t,o,u) {
    if(!e.nodeType)return!1;
    this._target=g=e,this._tween=o,this._vars=t,v=u,p=t.autoRound,i=!1,r=t.suffixMap||s.suffixMap,n=K(e,""),a=this._overwriteProps;
    var h,m,y,_,x,w,b,T,S,P=e.style;
    if(c&&""===P.zIndex&&("auto"===(h=Q(e,"zIndex",n))||""===h)&&this._addLazySet(P,"zIndex",0),"string"==typeof t&&(_=P.cssText,h=te(e,n),P.cssText=_+";
        "+t,h=ie(e,h,te(e)).difs,!W&&C.test(t)&&(h.opacity=parseFloat(RegExp.$1)),t=h,P.cssText=_),t.className?this._firstPT=m=l.className.parse(e,t.className,"className",this,null,null,t):this._firstPT=m=this.parse(e,t,null),this._transformType) {
    for(S=3===this._transformType,ke?d&&(c=!0,""===P.zIndex&&("auto"===(b=Q(e,"zIndex",n))||""===b)&&this._addLazySet(P,"zIndex",0),f&&this._addLazySet(P,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(S?"visible":"hidden"))):P.zoom=1,y=m;
        y&&y._next;
    )y=y._next;
    T=new ye(e,"transform",0,0,null,2),this._linkCSSP(T,null,y),T.setRatio=ke?Ye:je,T.data=this._transform||Xe(e,n,!0),T.tween=o,T.pr=-1,a.pop()
}
if(i) {
    for(;
        m;
    ) {
        for(w=m._next,y=_;
            y&&y.pr>m.pr;
        )y=y._next;
        (m._prev=y?y._prev:x)?m._prev._next=m:_=m,(m._next=y)?y._prev=m:x=m,m=w
    }
    this._firstPT=_
}
return!0
}
,u.parse=function(e,t,i,a) {
    var s,o,u,c,d,h,f,m,y,_,x=e.style;
    for(s in t)"function"==typeof(h=t[s])&&(h=h(v,g)),(o=l[s])?i=o.parse(e,h,s,this,i,a,t):(d=Q(e,s,n)+"",y="string"==typeof h,"color"===s||"fill"===s||"stroke"===s||-1!==s.indexOf("Color")||y&&P.test(h)?(y||(h=de(h),h=(h.length>3?"rgba(":"rgb(")+h.join(",")+")"),i=xe(x,s,d,h,!0,"transparent",i,0,a)):y&&L.test(h)?i=xe(x,s,d,h,!0,null,i,0,a):(u=parseFloat(d),f=u||0===u?d.substr((u+"").length):"",(""===d||"auto"===d)&&("width"===s||"height"===s?(u=ae(e,s,n),f="px"):"left"===s||"top"===s?(u=ee(e,s,n),f="px"):(u="opacity"!==s?0:1,f="")),(_=y&&"="===h.charAt(1))?(c=parseInt(h.charAt(0)+"1",10),h=h.substr(2),c*=parseFloat(h),m=h.replace(b,"")):(c=parseFloat(h),m=y?h.replace(b,""):""),""===m&&(m=s in r?r[s]:f),h=c||0===c?(_?c+u:c)+m:t[s],f!==m&&""!==m&&(c||0===c)&&u&&(u=J(e,s,u,f),"%"===m?(u/=J(e,s,100,"%")/100,!0!==t.strictUnits&&(d=u+"%")):"em"===m||"rem"===m||"vw"===m||"vh"===m?u/=J(e,s,1,m):"px"!==m&&(c=J(e,s,c,m),m="px"),_&&(c||0===c)&&(h=c+u+m)),_&&(c+=u),!u&&0!==u||!c&&0!==c?void 0!==x[s]&&(h||h+""!="NaN"&&null!=h)?(i=new ye(x,s,c||u||0,0,i,-1,s,!1,0,d,h),i.xs0="none"!==h||"display"!==s&&-1===s.indexOf("Style")?h:d):V("invalid "+s+" tween value: "+t[s]):(i=new ye(x,s,u,c-u,i,0,s,!1!==p&&("px"===m||"zIndex"===s),0,d,h),i.xs0=m))),a&&i&&!i.plugin&&(i.plugin=a);
    return i
}
    ,u.setRatio=function(e) {
    var t,i,r,n=this._firstPT;
    if(1!==e||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(e||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;
        n;
    ) {
        if(t=n.c*e+n.s,n.r?t=Math.round(t):1e-6>t&&t>-1e-6&&(t=0),n.type)if(1===n.type)if(2===(r=n.l))n.t[n.p]=n.xs0+t+n.xs1+n.xn1+n.xs2;
        else if(3===r)n.t[n.p]=n.xs0+t+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3;
        else if(4===r)n.t[n.p]=n.xs0+t+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3+n.xn3+n.xs4;
        else if(5===r)n.t[n.p]=n.xs0+t+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3+n.xn3+n.xs4+n.xn4+n.xs5;
        else {
            for(i=n.xs0+t+n.xs1,r=1;
                r<n.l;
                r++)i+=n["xn"+r]+n["xs"+(r+1)];
            n.t[n.p]=i
        }
        else-1===n.type?n.t[n.p]=n.xs0:n.setRatio&&n.setRatio(e);
        else n.t[n.p]=t+n.xs0;
        n=n._next
    }
    else for(;
            n;
        )2!==n.type?n.t[n.p]=n.b:n.setRatio(e),n=n._next;
    else for(;
        n;
    ) {
        if(2!==n.type)if(n.r&&-1!==n.type)if(t=Math.round(n.s+n.c),n.type) {
            if(1===n.type) {
                for(r=n.l,i=n.xs0+t+n.xs1,r=1;
                    r<n.l;
                    r++)i+=n["xn"+r]+n["xs"+(r+1)];
                n.t[n.p]=i
            }
        }else n.t[n.p]=t+n.xs0;
        else n.t[n.p]=n.e;
        else n.setRatio(e);
        n=n._next
    }
},u._enableTransforms=function(e) {
    this._transform=this._transform||Xe(this._target,n,!0),this._transformType=this._transform.svg&&Se||!e&&3!==this._transformType?2:3
}
;
var $e=function(e) {
        this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)
    }
    ;
u._addLazySet=function(e,t,i) {
    var r=this._firstPT=new ye(e,t,0,0,this._firstPT,2);
    r.e=i,r.setRatio=$e,r.data=this
}
    ,u._linkCSSP=function(e,t,i,r) {
    return e&&(t&&(t._prev=e),e._next&&(e._next._prev=e._prev),e._prev?e._prev._next=e._next:this._firstPT===e&&(this._firstPT=e._next,r=!0),i?i._next=e:r||null!==this._firstPT||(this._firstPT=e),e._next=t,e._prev=i),e
}
    ,u._mod=function(e) {
    for(var t=this._firstPT;
        t;
    )"function"==typeof e[t.p]&&e[t.p]===Math.round&&(t.r=1),t=t._next
}
    ,u._kill=function(t) {
    var i,r,n,a=t;
    if(t.autoAlpha||t.alpha) {
        a= {
        }
        ;
        for(r in t)a[r]=t[r];
        a.opacity=1,a.autoAlpha&&(a.visibility=1)
    }
    for(t.className&&(i=this._classNamePT)&&((n=i.xfirst)&&n._prev?this._linkCSSP(n._prev,i._next,n._prev._prev):n===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,n._prev),this._classNamePT=null),i=this._firstPT;
        i;
    )i.plugin&&i.plugin!==r&&i.plugin._kill&&(i.plugin._kill(t),r=i.plugin),i=i._next;
    return e.prototype._kill.call(this,a)
}
;
var Ue=function(e,t,i) {
        var r,n,a,s;
        if(e.slice)for(n=e.length;
                       --n>-1;
        )Ue(e[n],t,i);
        else for(r=e.childNodes,n=r.length;
                 --n>-1;
        )a=r[n],s=a.type,a.style&&(t.push(te(a)),i&&i.push(a)),1!==s&&9!==s&&11!==s||!a.childNodes.length||Ue(a,t,i)
    }
    ;
return s.cascadeTo=function(e,i,r) {
    var n,a,s,o,l=t.to(e,i,r),u=[l],p=[],c=[],d=[],h=t._internals.reservedProps;
    for(e=l._targets||l.target,Ue(e,p,d),l.render(i,!0,!0),Ue(e,c),l.render(0,!0,!0),l._enabled(!0),n=d.length;
        --n>-1;
    )if((a=ie(d[n],p[n],c[n])).firstMPT) {
        a=a.difs;
        for(s in r)h[s]&&(a[s]=r[s]);
        o= {
        }
        ;
        for(s in a)o[s]=p[n][s];
        u.push(t.fromTo(d[n],i,o,a))
    }
    return u
}
    ,e.activate([s]),s
}
,!0),function() {
    var e=function(e) {
            for(;
                e;
            )e.f||e.blob||(e.m=Math.round),e=e._next
        }
        ,t=_gsScope._gsDefine.plugin( {
            propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(e,t,i) {
                return this._tween=i,!0
            }
        }).prototype;
    t._onInitAllProps=function() {
        for(var t,i,r,n=this._tween,a=n.vars.roundProps.join?n.vars.roundProps:n.vars.roundProps.split(","),s=a.length,o= {
            }
                ,l=n._propLookup.roundProps;
            --s>-1;
        )o[a[s]]=Math.round;
        for(s=a.length;
            --s>-1;
        )for(t=a[s],i=n._firstPT;
             i;
        )r=i._next,i.pg?i.t._mod(o):i.n===t&&(2===i.f&&i.t?e(i.t._firstPT):(this._add(i.t,t,i.s,i.c),r&&(r._prev=i._prev),i._prev?i._prev._next=r:n._firstPT===i&&(n._firstPT=r),i._next=i._prev=null,n._propLookup[t]=l)),i=r;
        return!1
    }
        ,t._add=function(e,t,i,r) {
        this._addTween(e,t,i,i+r,t,Math.round),this._overwriteProps.push(t)
    }
}(),_gsScope._gsDefine.plugin( {
    propName:"attr",API:2,version:"0.6.0",init:function(e,t,i,r) {
        var n,a;
        if("function"!=typeof e.setAttribute)return!1;
        for(n in t)"function"==typeof(a=t[n])&&(a=a(r,e)),this._addTween(e,"setAttribute",e.getAttribute(n)+"",a+"",n,!1,n),this._overwriteProps.push(n);
        return!0
    }
}),_gsScope._gsDefine.plugin( {
    propName:"directionalRotation",version:"0.3.0",API:2,init:function(e,t,i,r) {
        "object"!=typeof t&&(t= {
            rotation:t
        }
        ),this.finals= {
        }
        ;
        var n,a,s,o,l,u,p=!0===t.useRadians?2*Math.PI:360;
        for(n in t)"useRadians"!==n&&("function"==typeof(o=t[n])&&(o=o(r,e)),u=(o+"").split("_"),a=u[0],s=parseFloat("function"!=typeof e[n]?e[n]:e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]()),o=this.finals[n]="string"==typeof a&&"="===a.charAt(1)?s+parseInt(a.charAt(0)+"1",10)*Number(a.substr(2)):Number(a)||0,l=o-s,u.length&&(-1!==(a=u.join("_")).indexOf("short")&&(l%=p)!=l%(p/2)&&(l=0>l?l+p:l-p),-1!==a.indexOf("_cw")&&0>l?l=(l+9999999999*p)%p-(l/p|0)*p:-1!==a.indexOf("ccw")&&l>0&&(l=(l-9999999999*p)%p-(l/p|0)*p)),(l>1e-6||-1e-6>l)&&(this._addTween(e,n,s,s+l,n),this._overwriteProps.push(n)));
        return!0
    }
    ,set:function(e) {
        var t;
        if(1!==e)this._super.setRatio.call(this,e);
        else for(t=this._firstPT;
                 t;
        )t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next
    }
})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(e) {
        var t,i,r,n=_gsScope.GreenSockGlobals||_gsScope,a=n.com.greensock,s=2*Math.PI,o=Math.PI/2,l=a._class,u=function(t,i) {
                var r=l("easing."+t,function() {
                    }
                    ,!0),n=r.prototype=new e;
                return n.constructor=r,n.getRatio=i,r
            }
            ,p=e.register||function() {
                }
            ,c=function(e,t,i,r,n) {
                var a=l("easing."+e, {
                        easeOut:new t,easeIn:new i,easeInOut:new r
                    }
                    ,!0);
                return p(a,e),a
            }
            ,d=function(e,t,i) {
                this.t=e,this.v=t,i&&(this.next=i,i.prev=this,this.c=i.v-t,this.gap=i.t-e)
            }
            ,h=function(t,i) {
                var r=l("easing."+t,function(e) {
                        this._p1=e||0===e?e:1.70158,this._p2=1.525*this._p1
                    }
                    ,!0),n=r.prototype=new e;
                return n.constructor=r,n.getRatio=i,n.config=function(e) {
                    return new r(e)
                }
                    ,r
            }
            ,f=c("Back",h("BackOut",function(e) {
                    return(e-=1)*e*((this._p1+1)*e+this._p1)+1
                }
            ),h("BackIn",function(e) {
                    return e*e*((this._p1+1)*e-this._p1)
                }
            ),h("BackInOut",function(e) {
                    return(e*=2)<1?.5*e*e*((this._p2+1)*e-this._p2):.5*((e-=2)*e*((this._p2+1)*e+this._p2)+2)
                }
            )),m=l("easing.SlowMo",function(e,t,i) {
                    t=t||0===t?t:.7,null==e?e=.7:e>1&&(e=1),this._p=1!==e?t:0,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=!0===i
                }
                ,!0),g=m.prototype=new e;
        return g.constructor=m,g.getRatio=function(e) {
            var t=e+(.5-e)*this._p;
            return e<this._p1?this._calcEnd?1-(e=1-e/this._p1)*e:t-(e=1-e/this._p1)*e*e*e*t:e>this._p3?this._calcEnd?1-(e=(e-this._p3)/this._p1)*e:t+(e-t)*(e=(e-this._p3)/this._p1)*e*e*e:this._calcEnd?1:t
        }
            ,m.ease=new m(.7,.7),g.config=m.config=function(e,t,i) {
            return new m(e,t,i)
        }
            ,t=l("easing.SteppedEase",function(e) {
                e=e||1,this._p1=1/e,this._p2=e+1
            }
            ,!0),g=t.prototype=new e,g.constructor=t,g.getRatio=function(e) {
            return 0>e?e=0:e>=1&&(e=.999999999),(this._p2*e>>0)*this._p1
        }
            ,g.config=t.config=function(e) {
            return new t(e)
        }
            ,i=l("easing.RoughEase",function(t) {
                for(var i,r,n,a,s,o,l=(t=t|| {
                    }
                    ).taper||"none",u=[],p=0,c=0|(t.points||20),h=c,f=!1!==t.randomize,m=!0===t.clamp,g=t.template instanceof e?t.template:null,v="number"==typeof t.strength?.4*t.strength:.4;
                    --h>-1;
                )i=f?Math.random():1/c*h,r=g?g.getRatio(i):i,"none"===l?n=v:"out"===l?(a=1-i,n=a*a*v):"in"===l?n=i*i*v:.5>i?(a=2*i,n=a*a*.5*v):(a=2*(1-i),n=a*a*.5*v),f?r+=Math.random()*n-.5*n:h%2?r+=.5*n:r-=.5*n,m&&(r>1?r=1:0>r&&(r=0)),u[p++]= {
                    x:i,y:r
                }
                ;
                for(u.sort(function(e,t) {
                        return e.x-t.x
                    }
                ),o=new d(1,1,null),h=c;
                    --h>-1;
                )s=u[h],o=new d(s.x,s.y,o);
                this._prev=new d(0,0,0!==o.t?o:o.next)
            }
            ,!0),g=i.prototype=new e,g.constructor=i,g.getRatio=function(e) {
            var t=this._prev;
            if(e>t.t) {
                for(;
                    t.next&&e>=t.t;
                )t=t.next;
                t=t.prev
            }
            else for(;
                t.prev&&e<=t.t;
            )t=t.prev;
            return this._prev=t,t.v+(e-t.t)/t.gap*t.c
        }
            ,g.config=function(e) {
            return new i(e)
        }
            ,i.ease=new i,c("Bounce",u("BounceOut",function(e) {
                return 1/2.75>e?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375
            }
        ),u("BounceIn",function(e) {
                return(e=1-e)<1/2.75?1-7.5625*e*e:2/2.75>e?1-(7.5625*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.5625*(e-=2.25/2.75)*e+.9375):1-(7.5625*(e-=2.625/2.75)*e+.984375)
            }
        ),u("BounceInOut",function(e) {
                var t=.5>e;
                return e=t?1-2*e:2*e-1,e=1/2.75>e?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,t?.5*(1-e):.5*e+.5
            }
        )),c("Circ",u("CircOut",function(e) {
                return Math.sqrt(1-(e-=1)*e)
            }
        ),u("CircIn",function(e) {
                return-(Math.sqrt(1-e*e)-1)
            }
        ),u("CircInOut",function(e) {
                return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)
            }
        )),r=function(t,i,r) {
            var n=l("easing."+t,function(e,t) {
                    this._p1=e>=1?e:1,this._p2=(t||r)/(1>e?e:1),this._p3=this._p2/s*(Math.asin(1/this._p1)||0),this._p2=s/this._p2
                }
                ,!0),a=n.prototype=new e;
            return a.constructor=n,a.getRatio=i,a.config=function(e,t) {
                return new n(e,t)
            }
                ,n
        }
            ,c("Elastic",r("ElasticOut",function(e) {
                return this._p1*Math.pow(2,-10*e)*Math.sin((e-this._p3)*this._p2)+1
            }
            ,.3),r("ElasticIn",function(e) {
                return-this._p1*Math.pow(2,10*(e-=1))*Math.sin((e-this._p3)*this._p2)
            }
            ,.3),r("ElasticInOut",function(e) {
                return(e*=2)<1?this._p1*Math.pow(2,10*(e-=1))*Math.sin((e-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*(e-=1))*Math.sin((e-this._p3)*this._p2)*.5+1
            }
            ,.45)),c("Expo",u("ExpoOut",function(e) {
                return 1-Math.pow(2,-10*e)
            }
        ),u("ExpoIn",function(e) {
                return Math.pow(2,10*(e-1))-.001
            }
        ),u("ExpoInOut",function(e) {
                return(e*=2)<1?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*(e-1)))
            }
        )),c("Sine",u("SineOut",function(e) {
                return Math.sin(e*o)
            }
        ),u("SineIn",function(e) {
                return 1-Math.cos(e*o)
            }
        ),u("SineInOut",function(e) {
                return-.5*(Math.cos(Math.PI*e)-1)
            }
        )),l("easing.EaseLookup", {
            find:function(t) {
                return e.map[t]
            }
        },!0),p(n.SlowMo,"SlowMo","ease,"),p(i,"RoughEase","ease,"),p(t,"SteppedEase","ease,"),f
    }
    ,!0)
}
),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e,t) {
    "use strict";
    var i= {
        }
        ,r=e.GreenSockGlobals=e.GreenSockGlobals||e;
    if(!r.TweenLite) {
        var n,a,s,o,l,u=function(e) {
                var t,i=e.split("."),n=r;
                for(t=0;
                    t<i.length;
                    t++)n[i[t]]=n=n[i[t]]|| {
                }
                ;
                return n
            }
            ,p=u("com.greensock"),c=1e-10,d=function(e) {
                var t,i=[],r=e.length;
                for(t=0;
                    t!==r;
                    i.push(e[t++]));
                return i
            }
            ,h=function() {
            }
            ,f=function() {
                var e=Object.prototype.toString,t=e.call([]);
                return function(i) {
                    return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&e.call(i)===t)
                }
            }(),m= {
            }
            ,g=function(n,a,s,o) {
                this.sc=m[n]?m[n].sc:[],m[n]=this,this.gsClass=null,this.func=s;
                var l=[];
                this.check=function(p) {
                    for(var c,d,h,f,v,y=a.length,_=y;
                        --y>-1;
                    )(c=m[a[y]]||new g(a[y],[])).gsClass?(l[y]=c.gsClass,_--):p&&c.sc.push(this);
                    if(0===_&&s) {
                        if(d=("com.greensock."+n).split("."),h=d.pop(),f=u(d.join("."))[h]=this.gsClass=s.apply(s,l),o)if(r[h]=i[h]=f,!(v="undefined"!=typeof module&&module.exports)&&"function"==typeof define&&define.amd)define((e.GreenSockAMDPath?e.GreenSockAMDPath+"/":"")+n.split(".").pop(),[],function() {
                                return f
                            }
                        );
                        else if(v)if(n===t) {
                            module.exports=i[t]=f;
                            for(y in i)f[y]=i[y]
                        }
                        else i[t]&&(i[t][h]=f);
                        for(y=0;
                            y<this.sc.length;
                            y++)this.sc[y].check()
                    }
                },this.check(!0)
            }
            ,v=e._gsDefine=function(e,t,i,r) {
                return new g(e,t,i,r)
            }
            ,y=p._class=function(e,t,i) {
                return t=t||function() {
                }
                    ,v(e,[],function() {
                        return t
                    }
                    ,i),t
            }
            ;
        v.globals=r;
        var _=[0,0,1,1],x=y("easing.Ease",function(e,t,i,r) {
                    this._func=e,this._type=i||0,this._power=r||0,this._params=t?_.concat(t):_
                }
                ,!0),w=x.map= {
            }
            ,b=x.register=function(e,t,i,r) {
                for(var n,a,s,o,l=t.split(","),u=l.length,c=(i||"easeIn,easeOut,easeInOut").split(",");
                    --u>-1;
                )for(a=l[u],n=r?y("easing."+a,null,!0):p.easing[a]|| {
                }
                         ,s=c.length;
                     --s>-1;
                )o=c[s],w[a+"."+o]=w[o+a]=n[o]=e.getRatio?e:e[o]||new e
            }
            ;
        for((s=x.prototype)._calcEnd=!1,s.getRatio=function(e) {
            if(this._func)return this._params[0]=e,this._func.apply(null,this._params);
            var t=this._type,i=this._power,r=1===t?1-e:2===t?e:.5>e?2*e:2*(1-e);
            return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===t?1-r:2===t?r:.5>e?r/2:1-r/2
        }
                ,a=(n=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;
            --a>-1;
        )s=n[a]+",Power"+a,b(new x(null,null,1,a),s,"easeOut",!0),b(new x(null,null,2,a),s,"easeIn"+(0===a?",easeNone":"")),b(new x(null,null,3,a),s,"easeInOut");
        w.linear=p.easing.Linear.easeIn,w.swing=p.easing.Quad.easeInOut;
        var T=y("events.EventDispatcher",function(e) {
                this._listeners= {
                }
                    ,this._eventTarget=e||this
            }
        );
        (s=T.prototype).addEventListener=function(e,t,i,r,n) {
            n=n||0;
            var a,s,u=this._listeners[e],p=0;
            for(this!==o||l||o.wake(),null==u&&(this._listeners[e]=u=[]),s=u.length;
                --s>-1;
            )(a=u[s]).c===t&&a.s===i?u.splice(s,1):0===p&&a.pr<n&&(p=s+1);
            u.splice(p,0, {
                    c:t,s:i,up:r,pr:n
                }
            )
        }
            ,s.removeEventListener=function(e,t) {
            var i,r=this._listeners[e];
            if(r)for(i=r.length;
                     --i>-1;
            )if(r[i].c===t)return void r.splice(i,1)
        }
            ,s.dispatchEvent=function(e) {
            var t,i,r,n=this._listeners[e];
            if(n)for((t=n.length)>1&&(n=n.slice(0)),i=this._eventTarget;
                     --t>-1;
            )(r=n[t])&&(r.up?r.c.call(r.s||i, {
                        type:e,target:i
                    }
                ):r.c.call(r.s||i))
        }
        ;
        var C=e.requestAnimationFrame,S=e.cancelAnimationFrame,P=Date.now||function() {
                    return(new Date).getTime()
                }
            ,k=P();
        for(a=(n=["ms","moz","webkit","o"]).length;
            --a>-1&&!C;
        )C=e[n[a]+"RequestAnimationFrame"],S=e[n[a]+"CancelAnimationFrame"]||e[n[a]+"CancelRequestAnimationFrame"];
        y("Ticker",function(e,t) {
                var i,r,n,a,s,u=this,p=P(),d=!(!1===t||!C)&&"auto",f=500,m=33,g=function(e) {
                        var t,o,l=P()-k;
                        l>f&&(p+=l-m),k+=l,u.time=(k-p)/1e3,t=u.time-s,(!i||t>0||!0===e)&&(u.frame++,s+=t+(t>=a?.004:a-t),o=!0),!0!==e&&(n=r(g)),o&&u.dispatchEvent("tick")
                    }
                    ;
                T.call(u),u.time=u.frame=0,u.tick=function() {
                    g(!0)
                }
                    ,u.lagSmoothing=function(e,t) {
                    f=e||1/c,m=Math.min(t,f,0)
                }
                    ,u.sleep=function() {
                    null!=n&&(d&&S?S(n):clearTimeout(n),r=h,n=null,u===o&&(l=!1))
                }
                    ,u.wake=function(e) {
                    null!==n?u.sleep():e?p+=-k+(k=P()):u.frame>10&&(k=P()-f+5),r=0===i?h:d&&C?C:function(e) {
                        return setTimeout(e,1e3*(s-u.time)+1|0)
                    }
                        ,u===o&&(l=!0),g(2)
                }
                    ,u.fps=function(e) {
                    return arguments.length?(i=e,a=1/(i||60),s=this.time+a,void u.wake()):i
                }
                    ,u.useRAF=function(e) {
                    return arguments.length?(u.sleep(),d=e,void u.fps(i)):d
                }
                    ,u.fps(e),setTimeout(function() {
                        "auto"===d&&u.frame<5&&"hidden"!==document.visibilityState&&u.useRAF(!1)
                    }
                    ,1500)
            }
        ),(s=p.Ticker.prototype=new p.events.EventDispatcher).constructor=p.Ticker;
        var M=y("core.Animation",function(e,t) {
            if(this.vars=t=t|| {
                }
                    ,this._duration=this._totalDuration=e||0,this._delay=Number(t.delay)||0,this._timeScale=1,this._active=!0===t.immediateRender,this.data=t.data,this._reversed=!0===t.reversed,V) {
                l||o.wake();
                var i=this.vars.useFrames?G:V;
                i.add(this,i._time),this.vars.paused&&this.paused(!0)
            }
        });
        o=M.ticker=new p.Ticker,(s=M.prototype)._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1;
        var E=function() {
                l&&P()-k>2e3&&o.wake(),setTimeout(E,2e3)
            }
            ;
        E(),s.play=function(e,t) {
            return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)
        }
            ,s.pause=function(e,t) {
            return null!=e&&this.seek(e,t),this.paused(!0)
        }
            ,s.resume=function(e,t) {
            return null!=e&&this.seek(e,t),this.paused(!1)
        }
            ,s.seek=function(e,t) {
            return this.totalTime(Number(e),!1!==t)
        }
            ,s.restart=function(e,t) {
            return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,!1!==t,!0)
        }
            ,s.reverse=function(e,t) {
            return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)
        }
            ,s.render=function(e,t,i) {
        }
            ,s.invalidate=function() {
            return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this
        }
            ,s.isActive=function() {
            var e,t=this._timeline,i=this._startTime;
            return!t||!this._gc&&!this._paused&&t.isActive()&&(e=t.rawTime())>=i&&e<i+this.totalDuration()/this._timeScale
        }
            ,s._enabled=function(e,t) {
            return l||o.wake(),this._gc=!e,this._active=this.isActive(),!0!==t&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1
        }
            ,s._kill=function(e,t) {
            return this._enabled(!1,!1)
        }
            ,s.kill=function(e,t) {
            return this._kill(e,t),this
        }
            ,s._uncache=function(e) {
            for(var t=e?this:this.timeline;
                t;
            )t._dirty=!0,t=t.timeline;
            return this
        }
            ,s._swapSelfInParams=function(e) {
            for(var t=e.length,i=e.concat();
                --t>-1;
            )" {
            self
        }
        "===e[t]&&(i[t]=this);
        return i
    }
    ,s._callback=function(e) {
        var t=this.vars,i=t[e],r=t[e+"Params"],n=t[e+"Scope"]||t.callbackScope||this;
        switch(r?r.length:0) {
            case 0:i.call(n);
                break;
            case 1:i.call(n,r[0]);
                break;
            case 2:i.call(n,r[0],r[1]);
                break;
            default:i.apply(n,r)
        }
    },s.eventCallback=function(e,t,i,r) {
        if("on"===(e||"").substr(0,2)) {
            var n=this.vars;
            if(1===arguments.length)return n[e];
            null==t?delete n[e]:(n[e]=t,n[e+"Params"]=f(i)&&-1!==i.join("").indexOf(" {
            self
        }
        ")?this._swapSelfInParams(i):i,n[e+"Scope"]=r),"onUpdate"===e&&(this._onUpdate=t)
    }
    return this
}
    ,s.delay=function(e) {
    return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay
}
    ,s.duration=function(e) {
    return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==e&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)
}
    ,s.totalDuration=function(e) {
    return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration
}
    ,s.time=function(e,t) {
    return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time
}
    ,s.totalTime=function(e,t,i) {
    if(l||o.wake(),!arguments.length)return this._totalTime;
    if(this._timeline) {
        if(0>e&&!i&&(e+=this.totalDuration()),this._timeline.smoothChildTiming) {
            this._dirty&&this.totalDuration();
            var r=this._totalDuration,n=this._timeline;
            if(e>r&&!i&&(e=r),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?r-e:e)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;
                n._timeline;
            )n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline
        }
        this._gc&&this._enabled(!0,!1),(this._totalTime!==e||0===this._duration)&&(N.length&&U(),this.render(e,t,!1),N.length&&U())
    }
    return this
}
    ,s.progress=s.totalProgress=function(e,t) {
    var i=this.duration();
    return arguments.length?this.totalTime(i*e,t):i?this._time/i:this.ratio
}
    ,s.startTime=function(e) {
    return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime
}
    ,s.endTime=function(e) {
    return this._startTime+(0!=e?this.totalDuration():this.duration())/this._timeScale
}
    ,s.timeScale=function(e) {
    if(!arguments.length)return this._timeScale;
    if(e=e||c,this._timeline&&this._timeline.smoothChildTiming) {
        var t=this._pauseTime,i=t||0===t?t:this._timeline.totalTime();
        this._startTime=i-(i-this._startTime)*this._timeScale/e
    }
    return this._timeScale=e,this._uncache(!1)
}
    ,s.reversed=function(e) {
    return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed
}
    ,s.paused=function(e) {
    if(!arguments.length)return this._paused;
    var t,i,r=this._timeline;
    return e!=this._paused&&r&&(l||e||o.wake(),t=r.rawTime(),i=t-this._pauseTime,!e&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=e?t:null,this._paused=e,this._active=this.isActive(),!e&&0!==i&&this._initted&&this.duration()&&(t=r.smoothChildTiming?this._totalTime:(t-this._startTime)/this._timeScale,this.render(t,t===this._totalTime,!0))),this._gc&&!e&&this._enabled(!0,!1),this
}
;
var z=y("core.SimpleTimeline",function(e) {
        M.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0
    }
);
(s=z.prototype=new M).constructor=z,s.kill()._gc=!1,s._first=s._last=s._recent=null,s._sortChildren=!1,s.add=s.insert=function(e,t,i,r) {
    var n,a;
    if(e._startTime=Number(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),n=this._last,this._sortChildren)for(a=e._startTime;
                                                                                                                                                                                                                                                                              n&&n._startTime>a;
    )n=n._prev;
    return n?(e._next=n._next,n._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=n,this._recent=e,this._timeline&&this._uncache(!0),this
}
    ,s._remove=function(e,t) {
    return e.timeline===this&&(t||e._enabled(!1,!0),e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),e._next=e._prev=e.timeline=null,e===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this
}
    ,s.render=function(e,t,i) {
    var r,n=this._first;
    for(this._totalTime=this._time=this._rawPrevTime=e;
        n;
    )r=n._next,(n._active||e>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(e-n._startTime)*n._timeScale,t,i):n.render((e-n._startTime)*n._timeScale,t,i)),n=r
}
    ,s.rawTime=function() {
    return l||o.wake(),this._totalTime
}
;
var A=y("TweenLite",function(t,i,r) {
            if(M.call(this,i,r),this.render=A.prototype.render,null==t)throw"Cannot tween a null target.";
            this.target=t="string"!=typeof t?t:A.selector(t)||t;
            var n,a,s,o=t.jquery||t.length&&t!==e&&t[0]&&(t[0]===e||t[0].nodeType&&t[0].style&&!t.nodeType),l=this.vars.overwrite;
            if(this._overwrite=l=null==l?W[A.defaultOverwrite]:"number"==typeof l?l>>0:W[l],(o||t instanceof Array||t.push&&f(t))&&"number"!=typeof t[0])for(this._targets=s=d(t),this._propLookup=[],this._siblings=[],n=0;
                                                                                                                                                             n<s.length;
                                                                                                                                                             n++)(a=s[n])?"string"!=typeof a?a.length&&a!==e&&a[0]&&(a[0]===e||a[0].nodeType&&a[0].style&&!a.nodeType)?(s.splice(n--,1),this._targets=s=s.concat(d(a))):(this._siblings[n]=Z(a,this,!1),1===l&&this._siblings[n].length>1&&Q(a,this,null,1,this._siblings[n])):"string"==typeof(a=s[n--]=A.selector(a))&&s.splice(n+1,1):s.splice(n--,1);
            else this._propLookup= {
            }
                ,this._siblings=Z(t,this,!1),1===l&&this._siblings.length>1&&Q(t,this,null,1,this._siblings);
            (this.vars.immediateRender||0===i&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-c,this.render(Math.min(0,-this._delay)))
        }
        ,!0),D=function(t) {
        return t&&t.length&&t!==e&&t[0]&&(t[0]===e||t[0].nodeType&&t[0].style&&!t.nodeType)
    }
    ,O=function(e,t) {
        var i,r= {
            }
            ;
        for(i in e)q[i]||i in t&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!X[i]||X[i]&&X[i]._autoCSS)||(r[i]=e[i],delete e[i]);
        e.css=r
    }
    ;
(s=A.prototype=new M).constructor=A,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=s._lazy=!1,A.version="1.19.0",A.defaultEase=s._ease=new x(null,null,1,1),A.defaultOverwrite="auto",A.ticker=o,A.autoSleep=120,A.lagSmoothing=function(e,t) {
    o.lagSmoothing(e,t)
}
    ,A.selector=e.$||e.jQuery||function(t) {
    var i=e.$||e.jQuery;
    return i?(A.selector=i,i(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)
}
;
var N=[],L= {
    }
    ,R=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,I=function(e) {
        for(var t,i=this._firstPT;
            i;
        )t=i.blob?e?this.join(""):this.start:i.c*e+i.s,i.m?t=i.m(t,this._target||i.t):1e-6>t&&t>-1e-6&&(t=0),i.f?i.fp?i.t[i.p](i.fp,t):i.t[i.p](t):i.t[i.p]=t,i=i._next
    }
    ,B=function(e,t,i,r) {
        var n,a,s,o,l,u,p,c=[e,t],d=0,h="",f=0;
        for(c.start=e,i&&(i(c),e=c[0],t=c[1]),c.length=0,n=e.match(R)||[],a=t.match(R)||[],r&&(r._next=null,r.blob=1,c._firstPT=c._applyPT=r),l=a.length,o=0;
            l>o;
            o++)p=a[o],u=t.substr(d,t.indexOf(p,d)-d),h+=u||!o?u:",",d+=u.length,f?f=(f+1)%5:"rgba("===u.substr(-5)&&(f=1),p===n[o]||n.length<=o?h+=p:(h&&(c.push(h),h=""),s=parseFloat(n[o]),c.push(s),c._firstPT= {
            _next:c._firstPT,t:c,p:c.length-1,s:s,c:("="===p.charAt(1)?parseInt(p.charAt(0)+"1",10)*parseFloat(p.substr(2)):parseFloat(p)-s)||0,f:0,m:f&&4>f?Math.round:0
        }
        ),d+=p.length;
        return(h+=t.substr(d))&&c.push(h),c.setRatio=I,c
    }
    ,H=function(e,t,i,r,n,a,s,o,l) {
        "function"==typeof r&&(r=r(l||0,e));
        var u,p,c="get"===i?e[t]:i,d=typeof e[t],h="string"==typeof r&&"="===r.charAt(1),f= {
                t:e,p:t,s:c,f:"function"===d,pg:0,n:n||t,m:a?"function"==typeof a?a:Math.round:0,pr:0,c:h?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-c||0
            }
            ;
        return"number"!==d&&("function"===d&&"get"===i&&(p=t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3),f.s=c=s?e[p](s):e[p]()),"string"==typeof c&&(s||isNaN(c))?(f.fp=s,u=B(c,r,o||A.defaultStringFilter,f),f= {
            t:u,p:"setRatio",s:0,c:1,f:2,pg:0,n:n||t,pr:0,m:0
        }
        ):h||(f.s=parseFloat(c),f.c=parseFloat(r)-f.s||0)),f.c?((f._next=this._firstPT)&&(f._next._prev=f),this._firstPT=f,f):void 0
    }
    ,F=A._internals= {
        isArray:f,isSelector:D,lazyTweens:N,blobDif:B
    }
    ,X=A._plugins= {
    }
    ,j=F.tweenLookup= {
    }
    ,Y=0,q=F.reservedProps= {
        ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1
    }
    ,W= {
        none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0
    }
    ,G=M._rootFramesTimeline=new z,V=M._rootTimeline=new z,$=30,U=F.lazyRender=function() {
        var e,t=N.length;
        for(L= {
        }
            ;
            --t>-1;
        )(e=N[t])&&!1!==e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0),e._lazy=!1);
        N.length=0
    }
    ;
V._startTime=o.time,G._startTime=o.frame,V._active=G._active=!0,setTimeout(U,1),M._updateRoot=A.render=function() {
    var e,t,i;
    if(N.length&&U(),V.render((o.time-V._startTime)*V._timeScale,!1,!1),G.render((o.frame-G._startTime)*G._timeScale,!1,!1),N.length&&U(),o.frame>=$) {
        $=o.frame+(parseInt(A.autoSleep,10)||120);
        for(i in j) {
            for(e=(t=j[i].tweens).length;
                --e>-1;
            )t[e]._gc&&t.splice(e,1);
            0===t.length&&delete j[i]
        }
        if((!(i=V._first)||i._paused)&&A.autoSleep&&!G._first&&1===o._listeners.tick.length) {
            for(;
                i&&i._paused;
            )i=i._next;
            i||o.sleep()
        }
    }
}
    ,o.addEventListener("tick",M._updateRoot);
var Z=function(e,t,i) {
        var r,n,a=e._gsTweenID;
        if(j[a||(e._gsTweenID=a="t"+Y++)]||(j[a]= {
                target:e,tweens:[]
            }
            ),t&&(r=j[a].tweens,r[n=r.length]=t,i))for(;
            --n>-1;
        )r[n]===t&&r.splice(n,1);
        return j[a].tweens
    }
    ,K=function(e,t,i,r) {
        var n,a,s=e.vars.onOverwrite;
        return s&&(n=s(e,t,i,r)),(s=A.onOverwrite)&&(a=s(e,t,i,r)),!1!==n&&!1!==a
    }
    ,Q=function(e,t,i,r,n) {
        var a,s,o,l;
        if(1===r||r>=4) {
            for(l=n.length,a=0;
                l>a;
                a++)if((o=n[a])!==t)o._gc||o._kill(null,e,t)&&(s=!0);
            else if(5===r)break;
            return s
        }
        var u,p=t._startTime+c,d=[],h=0,f=0===t._duration;
        for(a=n.length;
            --a>-1;
        )(o=n[a])===t||o._gc||o._paused||(o._timeline!==t._timeline?(u=u||J(t,0,f),0===J(o,u,f)&&(d[h++]=o)):o._startTime<=p&&o._startTime+o.totalDuration()/o._timeScale>p&&((f||!o._initted)&&p-o._startTime<=2e-10||(d[h++]=o)));
        for(a=h;
            --a>-1;
        )if(o=d[a],2===r&&o._kill(i,e,t)&&(s=!0),2!==r||!o._firstPT&&o._initted) {
            if(2!==r&&!K(o,t))continue;
            o._enabled(!1,!1)&&(s=!0)
        }
        return s
    }
    ,J=function(e,t,i) {
        for(var r=e._timeline,n=r._timeScale,a=e._startTime;
            r._timeline;
        ) {
            if(a+=r._startTime,n*=r._timeScale,r._paused)return-100;
            r=r._timeline
        }
        return(a/=n)>t?a-t:i&&a===t||!e._initted&&2*c>a-t?c:(a+=e.totalDuration()/e._timeScale/n)>t+c?0:a-t-c
    }
    ;
s._init=function() {
    var e,t,i,r,n,a,s=this.vars,o=this._overwrittenProps,l=this._duration,u=!!s.immediateRender,p=s.ease;
    if(s.startAt) {
        this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n= {
        }
        ;
        for(r in s.startAt)n[r]=s.startAt[r];
        if(n.overwrite=!1,n.immediateRender=!0,n.lazy=u&&!1!==s.lazy,n.startAt=n.delay=null,this._startAt=A.to(this.target,0,n),u)if(this._time>0)this._startAt=null;
        else if(0!==l)return
    }
    else if(s.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;
    else {
        0!==this._time&&(u=!1),i= {
        }
        ;
        for(r in s)q[r]&&"autoCSS"!==r||(i[r]=s[r]);
        if(i.overwrite=0,i.data="isFromStart",i.lazy=u&&!1!==s.lazy,i.immediateRender=u,this._startAt=A.to(this.target,0,i),u) {
            if(0===this._time)return
        }
        else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)
    }
    if(this._ease=p=p?p instanceof x?p:"function"==typeof p?new x(p,s.easeParams):w[p]||A.defaultEase:A.defaultEase,s.easeParams instanceof Array&&p.config&&(this._ease=p.config.apply(p,s.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(a=this._targets.length,e=0;
                                                                                                                                                                                                                                                                                                                a>e;
                                                                                                                                                                                                                                                                                                                e++)this._initProps(this._targets[e],this._propLookup[e]= {
            }
            ,this._siblings[e],o?o[e]:null,e)&&(t=!0);
    else t=this._initProps(this.target,this._propLookup,this._siblings,o,0);
    if(t&&A._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),s.runBackwards)for(i=this._firstPT;
                                                                                                                                               i;
    )i.s+=i.c,i.c=-i.c,i=i._next;
    this._onUpdate=s.onUpdate,this._initted=!0
}
    ,s._initProps=function(t,i,r,n,a) {
    var s,o,l,u,p,c;
    if(null==t)return!1;
    L[t._gsTweenID]&&U(),this.vars.css||t.style&&t!==e&&t.nodeType&&X.css&&!1!==this.vars.autoCSS&&O(this.vars,t);
    for(s in this.vars)if(c=this.vars[s],q[s])c&&(c instanceof Array||c.push&&f(c))&&-1!==c.join("").indexOf(" {
    self
}
")&&(this.vars[s]=c=this._swapSelfInParams(c,this));
else if(X[s]&&(u=new X[s])._onInitTween(t,this.vars[s],this,a)) {
    for(this._firstPT=p= {
        _next:this._firstPT,t:u,p:"setRatio",s:0,c:1,f:1,n:s,pg:1,pr:u._priority,m:0
    }
            ,o=u._overwriteProps.length;
        --o>-1;
    )i[u._overwriteProps[o]]=this._firstPT;
    (u._priority||u._onInitAllProps)&&(l=!0),(u._onDisable||u._onEnable)&&(this._notifyPluginsOfEnabled=!0),p._next&&(p._next._prev=p)
}
else i[s]=H.call(this,t,s,"get",c,s,0,null,this.vars.stringFilter,a);
return n&&this._kill(n,t)?this._initProps(t,i,r,n,a):this._overwrite>1&&this._firstPT&&r.length>1&&Q(t,this,i,this._overwrite,r)?(this._kill(i,t),this._initProps(t,i,r,n,a)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(L[t._gsTweenID]=!0),l)
}
,s.render=function(e,t,i) {
    var r,n,a,s,o=this._time,l=this._duration,u=this._rawPrevTime;
    if(e>=l-1e-7)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(e=0),(0>u||0>=e&&e>=-1e-7||u===c&&"isPause"!==this.data)&&u!==e&&(i=!0,u>c&&(n="onReverseComplete")),this._rawPrevTime=s=!t||e||u===e?e:c);
    else if(1e-7>e)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&u>0)&&(n="onReverseComplete",r=this._reversed),0>e&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(u>=0&&(u!==c||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=s=!t||e||u===e?e:c)),this._initted||(i=!0);
    else if(this._totalTime=this._time=e,this._easeType) {
        var p=e/l,d=this._easeType,h=this._easePower;
        (1===d||3===d&&p>=.5)&&(p=1-p),3===d&&(p*=2),1===h?p*=p:2===h?p*=p*p:3===h?p*=p*p*p:4===h&&(p*=p*p*p*p),this.ratio=1===d?1-p:2===d?p:.5>e/l?p/2:1-p/2
    }
    else this.ratio=this._ease.getRatio(e/l);
    if(this._time!==o||i) {
        if(!this._initted) {
            if(this._init(),!this._initted||this._gc)return;
            if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=u,N.push(this),void(this._lazy=[e,t]);
            this._time&&!r?this.ratio=this._ease.getRatio(this._time/l):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))
        }
        for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&e>=0&&(this._active=!0),0===o&&(this._startAt&&(e>=0?this._startAt.render(e,t,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(t||this._callback("onStart"))),a=this._firstPT;
            a;
        )a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;
        this._onUpdate&&(0>e&&this._startAt&&-1e-4!==e&&this._startAt.render(e,t,i),t||(this._time!==o||r||i)&&this._callback("onUpdate")),n&&(!this._gc||i)&&(0>e&&this._startAt&&!this._onUpdate&&-1e-4!==e&&this._startAt.render(e,t,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[n]&&this._callback(n),0===l&&this._rawPrevTime===c&&s!==c&&(this._rawPrevTime=0))
    }
},s._kill=function(e,t,i) {
    if("all"===e&&(e=null),null==e&&(null==t||t===this.target))return this._lazy=!1,this._enabled(!1,!1);
    t="string"!=typeof t?t||this._targets||this.target:A.selector(t)||t;
    var r,n,a,s,o,l,u,p,c,d=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;
    if((f(t)||D(t))&&"number"!=typeof t[0])for(r=t.length;
                                               --r>-1;
    )this._kill(e,t[r],i)&&(l=!0);
    else {
        if(this._targets) {
            for(r=this._targets.length;
                --r>-1;
            )if(t===this._targets[r]) {
                o=this._propLookup[r]|| {
                }
                    ,this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[r]=e?this._overwrittenProps[r]|| {
                }
                    :"all";
                break
            }
        }else {
            if(t!==this.target)return!1;
            o=this._propLookup,n=this._overwrittenProps=e?this._overwrittenProps|| {
            }
                :"all"
        }
        if(o) {
            if(u=e||o,p=e!==n&&"all"!==n&&e!==o&&("object"!=typeof e||!e._tempKill),i&&(A.onOverwrite||this.vars.onOverwrite)) {
                for(a in u)o[a]&&(c||(c=[]),c.push(a));
                if((c||!e)&&!K(this,i,t,c))return!1
            }
            for(a in u)(s=o[a])&&(d&&(s.f?s.t[s.p](s.s):s.t[s.p]=s.s,l=!0),s.pg&&s.t._kill(u)&&(l=!0),s.pg&&0!==s.t._overwriteProps.length||(s._prev?s._prev._next=s._next:s===this._firstPT&&(this._firstPT=s._next),s._next&&(s._next._prev=s._prev),s._next=s._prev=null),delete o[a]),p&&(n[a]=1);
            !this._firstPT&&this._initted&&this._enabled(!1,!1)
        }
    }return l
}
    ,s.invalidate=function() {
    return this._notifyPluginsOfEnabled&&A._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets? {
    }
        :[],M.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-c,this.render(Math.min(0,-this._delay))),this
}
    ,s._enabled=function(e,t) {
    if(l||o.wake(),e&&this._gc) {
        var i,r=this._targets;
        if(r)for(i=r.length;
                 --i>-1;
        )this._siblings[i]=Z(r[i],this,!0);
        else this._siblings=Z(this.target,this,!0)
    }
    return M.prototype._enabled.call(this,e,t),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&A._onPluginEvent(e?"_onEnable":"_onDisable",this)
}
    ,A.to=function(e,t,i) {
    return new A(e,t,i)
}
    ,A.from=function(e,t,i) {
    return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new A(e,t,i)
}
    ,A.fromTo=function(e,t,i,r) {
    return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new A(e,t,r)
}
    ,A.delayedCall=function(e,t,i,r,n) {
    return new A(t,0, {
            delay:e,onComplete:t,onCompleteParams:i,callbackScope:r,onReverseComplete:t,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0
        }
    )
}
    ,A.set=function(e,t) {
    return new A(e,0,t)
}
    ,A.getTweensOf=function(e,t) {
    if(null==e)return[];
    e="string"!=typeof e?e:A.selector(e)||e;
    var i,r,n,a;
    if((f(e)||D(e))&&"number"!=typeof e[0]) {
        for(i=e.length,r=[];
            --i>-1;
        )r=r.concat(A.getTweensOf(e[i],t));
        for(i=r.length;
            --i>-1;
        )for(a=r[i],n=i;
             --n>-1;
        )a===r[n]&&r.splice(i,1)
    }
    else for(r=Z(e).concat(),i=r.length;
             --i>-1;
    )(r[i]._gc||t&&!r[i].isActive())&&r.splice(i,1);
    return r
}
    ,A.killTweensOf=A.killDelayedCallsTo=function(e,t,i) {
    "object"==typeof t&&(i=t,t=!1);
    for(var r=A.getTweensOf(e,t),n=r.length;
        --n>-1;
    )r[n]._kill(i,e)
}
;
var ee=y("plugins.TweenPlugin",function(e,t) {
        this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=ee.prototype
    }
    ,!0);
if(s=ee.prototype,ee.version="1.19.0",ee.API=2,s._firstPT=null,s._addTween=H,s.setRatio=I,s._kill=function(e) {
        var t,i=this._overwriteProps,r=this._firstPT;
        if(null!=e[this._propName])this._overwriteProps=[];
        else for(t=i.length;
                 --t>-1;
        )null!=e[i[t]]&&i.splice(t,1);
        for(;
            r;
        )null!=e[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;
        return!1
    }
        ,s._mod=s._roundProps=function(e) {
        for(var t,i=this._firstPT;
            i;
        )(t=e[this._propName]||null!=i.n&&e[i.n.split(this._propName+"_").join("")])&&"function"==typeof t&&(2===i.f?i.t._applyPT.m=t:i.m=t),i=i._next
    }
        ,A._onPluginEvent=function(e,t) {
        var i,r,n,a,s,o=t._firstPT;
        if("_onInitAllProps"===e) {
            for(;
                o;
            ) {
                for(s=o._next,r=n;
                    r&&r.pr>o.pr;
                )r=r._next;
                (o._prev=r?r._prev:a)?o._prev._next=o:n=o,(o._next=r)?r._prev=o:a=o,o=s
            }
            o=t._firstPT=n
        }
        for(;
            o;
        )o.pg&&"function"==typeof o.t[e]&&o.t[e]()&&(i=!0),o=o._next;
        return i
    }
        ,ee.activate=function(e) {
        for(var t=e.length;
            --t>-1;
        )e[t].API===ee.API&&(X[(new e[t])._propName]=e[t]);
        return!0
    }
        ,v.plugin=function(e) {
        if(!(e&&e.propName&&e.init&&e.API))throw"illegal plugin definition.";
        var t,i=e.propName,r=e.priority||0,n=e.overwriteProps,a= {
                init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"
            }
            ,s=y("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function() {
                    ee.call(this,i,r),this._overwriteProps=n||[]
                }
                ,!0===e.global),o=s.prototype=new ee(i);
        o.constructor=s,s.API=e.API;
        for(t in a)"function"==typeof e[t]&&(o[a[t]]=e[t]);
        return s.version=e.version,ee.activate([s]),s
    }
        ,n=e._gsQueue) {
    for(a=0;
        a<n.length;
        a++)n[a]();
    for(s in m)m[s].func||e.console.log("GSAP encountered missing dependency: "+s)
}
l=!1
}
}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax"),function(e,t) {
    function i(e) {
        var t=e.length,i=oe.type(e);
        return!oe.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===i||"function"!==i&&(0===t||"number"==typeof t&&t>0&&t-1 in e)))
    }
    function r(e) {
        var t=be[e]= {
            }
            ;
        return oe.each(e.match(ue)||[],function(e,i) {
                t[i]=!0
            }
        ),t
    }
    function n(e,i,r,n) {
        if(oe.acceptData(e)) {
            var a,s,o=oe.expando,l="string"==typeof i,u=e.nodeType,p=u?oe.cache:e,c=u?e[o]:e[o]&&o;
            if(c&&p[c]&&(n||p[c].data)||!l||r!==t)return c||(u?e[o]=c=Q.pop()||oe.guid++:c=o),p[c]||(p[c]= {
            }
                ,u||(p[c].toJSON=oe.noop)),("object"==typeof i||"function"==typeof i)&&(n?p[c]=oe.extend(p[c],i):p[c].data=oe.extend(p[c].data,i)),a=p[c],n||(a.data||(a.data= {
            }
            ),a=a.data),r!==t&&(a[oe.camelCase(i)]=r),l?null==(s=a[i])&&(s=a[oe.camelCase(i)]):s=a,s
        }
    }function a(e,t,i) {
        if(oe.acceptData(e)) {
            var r,n,a,s=e.nodeType,l=s?oe.cache:e,u=s?e[oe.expando]:oe.expando;
            if(l[u]) {
                if(t&&(a=i?l[u]:l[u].data)) {
                    oe.isArray(t)?t=t.concat(oe.map(t,oe.camelCase)):t in a?t=[t]:(t=oe.camelCase(t),t=t in a?[t]:t.split(" "));
                    for(r=0,n=t.length;
                        n>r;
                        r++)delete a[t[r]];
                    if(!(i?o:oe.isEmptyObject)(a))return
                }
                (i||(delete l[u].data,o(l[u])))&&(s?oe.cleanData([e],!0):oe.support.deleteExpando||l!=l.window?delete l[u]:l[u]=null)
            }
        }
    }
    function s(e,i,r) {
        if(r===t&&1===e.nodeType) {
            var n="data-"+i.replace(Ce,"-$1").toLowerCase();
            if("string"==typeof(r=e.getAttribute(n))) {
                try {
                    r="true"===r||"false"!==r&&("null"===r?null:+r+""===r?+r:Te.test(r)?oe.parseJSON(r):r)
                }
                catch(e) {
                }
                oe.data(e,i,r)
            }
            else r=t
        }
        return r
    }
    function o(e) {
        var t;
        for(t in e)if(("data"!==t||!oe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;
        return!0
    }
    function l() {
        return!0
    }
    function u() {
        return!1
    }
    function p(e,t) {
        do {
            e=e[t]
        }
        while(e&&1!==e.nodeType);
        return e
    }
    function c(e,t,i) {
        if(t=t||0,oe.isFunction(t))return oe.grep(e,function(e,r) {
                return!!t.call(e,r,e)===i
            }
        );
        if(t.nodeType)return oe.grep(e,function(e) {
                return e===t===i
            }
        );
        if("string"==typeof t) {
            var r=oe.grep(e,function(e) {
                    return 1===e.nodeType
                }
            );
            if(je.test(t))return oe.filter(t,r,!i);
            t=oe.filter(t,r)
        }
        return oe.grep(e,function(e) {
                return oe.inArray(e,t)>=0===i
            }
        )
    }
    function d(e) {
        var t=We.split("|"),i=e.createDocumentFragment();
        if(i.createElement)for(;
            t.length;
        )i.createElement(t.pop());
        return i
    }
    function h(e,t) {
        return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))
    }
    function f(e) {
        var t=e.getAttributeNode("type");
        return e.type=(t&&t.specified)+"/"+e.type,e
    }
    function m(e) {
        var t=rt.exec(e.type);
        return t?e.type=t[1]:e.removeAttribute("type"),e
    }
    function g(e,t) {
        for(var i,r=0;
            null!=(i=e[r]);
            r++)oe._data(i,"globalEval",!t||oe._data(t[r],"globalEval"))
    }
    function v(e,t) {
        if(1===t.nodeType&&oe.hasData(e)) {
            var i,r,n,a=oe._data(e),s=oe._data(t,a),o=a.events;
            if(o) {
                delete s.handle,s.events= {
                }
                ;
                for(i in o)for(r=0,n=o[i].length;
                               n>r;
                               r++)oe.event.add(t,i,o[i][r])
            }
            s.data&&(s.data=oe.extend( {
                }
                ,s.data))
        }
    }function y(e,t) {
        var i,r,n;
        if(1===t.nodeType) {
            if(i=t.nodeName.toLowerCase(),!oe.support.noCloneEvent&&t[oe.expando]) {
                n=oe._data(t);
                for(r in n.events)oe.removeEvent(t,r,n.handle);
                t.removeAttribute(oe.expando)
            }
            "script"===i&&t.text!==e.text?(f(t).text=e.text,m(t)):"object"===i?(t.parentNode&&(t.outerHTML=e.outerHTML),oe.support.html5Clone&&e.innerHTML&&!oe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===i&&et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===i?t.defaultSelected=t.selected=e.defaultSelected:("input"===i||"textarea"===i)&&(t.defaultValue=e.defaultValue)
        }
    }function _(e,i) {
        var r,n,a=0,s=typeof e.getElementsByTagName!==G?e.getElementsByTagName(i||"*"):typeof e.querySelectorAll!==G?e.querySelectorAll(i||"*"):t;
        if(!s)for(s=[],r=e.childNodes||e;
                  null!=(n=r[a]);
                  a++)!i||oe.nodeName(n,i)?s.push(n):oe.merge(s,_(n,i));
        return i===t||i&&oe.nodeName(e,i)?oe.merge([e],s):s
    }
    function x(e) {
        et.test(e.type)&&(e.defaultChecked=e.checked)
    }
    function w(e,t) {
        if(t in e)return t;
        for(var i=t.charAt(0).toUpperCase()+t.slice(1),r=t,n=bt.length;
            n--;
        )if((t=bt[n]+i)in e)return t;
        return r
    }
    function b(e,t) {
        return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)
    }
    function T(e,t) {
        for(var i,r,n,a=[],s=0,o=e.length;
            o>s;
            s++)(r=e[s]).style&&(a[s]=oe._data(r,"olddisplay"),i=r.style.display,t?(a[s]||"none"!==i||(r.style.display=""),""===r.style.display&&b(r)&&(a[s]=oe._data(r,"olddisplay",k(r.nodeName)))):a[s]||(n=b(r),(i&&"none"!==i||!n)&&oe._data(r,"olddisplay",n?i:oe.css(r,"display"))));
        for(s=0;
            o>s;
            s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?a[s]||"":"none"));
        return e
    }
    function C(e,t,i) {
        var r=mt.exec(t);
        return r?Math.max(0,r[1]-(i||0))+(r[2]||"px"):t
    }
    function S(e,t,i,r,n) {
        for(var a=i===(r?"border":"content")?4:"width"===t?1:0,s=0;
            4>a;
            a+=2)"margin"===i&&(s+=oe.css(e,i+wt[a],!0,n)),r?("content"===i&&(s-=oe.css(e,"padding"+wt[a],!0,n)),"margin"!==i&&(s-=oe.css(e,"border"+wt[a]+"Width",!0,n))):(s+=oe.css(e,"padding"+wt[a],!0,n),"padding"!==i&&(s+=oe.css(e,"border"+wt[a]+"Width",!0,n)));
        return s
    }
    function P(e,t,i) {
        var r=!0,n="width"===t?e.offsetWidth:e.offsetHeight,a=lt(e),s=oe.support.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,a);
        if(0>=n||null==n) {
            if((0>(n=ut(e,t,a))||null==n)&&(n=e.style[t]),gt.test(n))return n;
            r=s&&(oe.support.boxSizingReliable||n===e.style[t]),n=parseFloat(n)||0
        }
        return n+S(e,t,i||(s?"border":"content"),r,a)+"px"
    }
    function k(e) {
        var t=V,i=yt[e];
        return i||("none"!==(i=M(e,t))&&i||(ot=(ot||oe("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),(t=(ot[0].contentWindow||ot[0].contentDocument).document).write("<!doctype html><html><body>"),t.close(),i=M(e,t),ot.detach()),yt[e]=i),i
    }
    function M(e,t) {
        var i=oe(t.createElement(e)).appendTo(t.body),r=oe.css(i[0],"display");
        return i.remove(),r
    }
    function E(e,t,i,r) {
        var n;
        if(oe.isArray(t))oe.each(t,function(t,n) {
                i||Ct.test(e)?r(e,n):E(e+"["+("object"==typeof n?t:"")+"]",n,i,r)
            }
        );
        else if(i||"object"!==oe.type(t))r(e,t);
        else for(n in t)E(e+"["+n+"]",t[n],i,r)
    }
    function z(e) {
        return function(t,i) {
            "string"!=typeof t&&(i=t,t="*");
            var r,n=0,a=t.toLowerCase().match(ue)||[];
            if(oe.isFunction(i))for(;
                r=a[n++];
            )"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(i)):(e[r]=e[r]||[]).push(i)
        }
    }function A(e,i,r,n) {
        function a(l) {
            var u;
            return s[l]=!0,oe.each(e[l]||[],function(e,l) {
                    var p=l(i,r,n);
                    return"string"!=typeof p||o||s[p]?o?!(u=p):t:(i.dataTypes.unshift(p),a(p),!1)
                }
            ),u
        }
        var s= {
            }
            ,o=e===Xt;
        return a(i.dataTypes[0])||!s["*"]&&a("*")
    }
    function D(e,i) {
        var r,n,a=oe.ajaxSettings.flatOptions|| {
                }
            ;
        for(n in i)i[n]!==t&&((a[n]?e:r||(r= {
        }
        ))[n]=i[n]);
        return r&&oe.extend(!0,e,r),e
    }
    function O(e,i,r) {
        var n,a,s,o,l=e.contents,u=e.dataTypes,p=e.responseFields;
        for(o in p)o in r&&(i[p[o]]=r[o]);
        for(;
            "*"===u[0];
        )u.shift(),a===t&&(a=e.mimeType||i.getResponseHeader("Content-Type"));
        if(a)for(o in l)if(l[o]&&l[o].test(a)) {
            u.unshift(o);
            break
        }
        if(u[0]in r)s=u[0];
        else {
            for(o in r) {
                if(!u[0]||e.converters[o+" "+u[0]]) {
                    s=o;
                    break
                }
                n||(n=o)
            }
            s=s||n
        }
        return s?(s!==u[0]&&u.unshift(s),r[s]):t
    }
    function N(e,t) {
        var i,r,n,a,s= {
            }
            ,o=0,l=e.dataTypes.slice(),u=l[0];
        if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l[1])for(n in e.converters)s[n.toLowerCase()]=e.converters[n];
        for(;
            r=l[++o];
        )if("*"!==r) {
            if("*"!==u&&u!==r) {
                if(!(n=s[u+" "+r]||s["* "+r]))for(i in s)if((a=i.split(" "))[1]===r&&(n=s[u+" "+a[0]]||s["* "+a[0]])) {
                    !0===n?n=s[i]:!0!==s[i]&&(r=a[0],l.splice(o--,0,r));
                    break
                }
                if(!0!==n)if(n&&e.throws)t=n(t);
                else try {
                        t=n(t)
                    }
                    catch(e) {
                        return {
                            state:"parsererror",error:n?e:"No conversion from "+u+" to "+r
                        }
                    }
            }
            u=r
        }
        return {
            state:"success",data:t
        }
    }function L() {
        try {
            return new e.XMLHttpRequest
        }
        catch(e) {
        }
    }function R() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        }
        catch(e) {
        }
    }function I() {
        return setTimeout(function() {
                Ut=t
            }
        ),Ut=oe.now()
    }
    function B(e,t) {
        oe.each(t,function(t,i) {
                for(var r=(ti[t]||[]).concat(ti["*"]),n=0,a=r.length;
                    a>n;
                    n++)if(r[n].call(e,t,i))return
            }
        )
    }
    function H(e,t,i) {
        var r,n,a=0,s=ei.length,o=oe.Deferred().always(function() {
                    delete l.elem
                }
            ),l=function() {
                if(n)return!1;
                for(var t=Ut||I(),i=Math.max(0,u.startTime+u.duration-t),r=1-(i/u.duration||0),a=0,s=u.tweens.length;
                    s>a;
                    a++)u.tweens[a].run(r);
                return o.notifyWith(e,[u,r,i]),1>r&&s?i:(o.resolveWith(e,[u]),!1)
            }
            ,u=o.promise( {
                elem:e,props:oe.extend( {
                    }
                    ,t),opts:oe.extend(!0, {
                    specialEasing: {
                    }
                },i),originalProperties:t,originalOptions:i,startTime:Ut||I(),duration:i.duration,tweens:[],createTween:function(t,i) {
                    var r=oe.Tween(e,u.opts,t,i,u.opts.specialEasing[t]||u.opts.easing);
                    return u.tweens.push(r),r
                }
                ,stop:function(t) {
                    var i=0,r=t?u.tweens.length:0;
                    if(n)return this;
                    for(n=!0;
                        r>i;
                        i++)u.tweens[i].run(1);
                    return t?o.resolveWith(e,[u,t]):o.rejectWith(e,[u,t]),this
                }
            }),p=u.props;
        for(F(p,u.opts.specialEasing);
            s>a;
            a++)if(r=ei[a].call(u,e,p,u.opts))return r;
        return B(u,p),oe.isFunction(u.opts.start)&&u.opts.start.call(e,u),oe.fx.timer(oe.extend(l, {
                elem:e,anim:u,queue:u.opts.queue
            }
        )),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function F(e,t) {
        var i,r,n,a,s;
        for(n in e)if(r=oe.camelCase(n),a=t[r],i=e[n],oe.isArray(i)&&(a=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),(s=oe.cssHooks[r])&&"expand"in s) {
            i=s.expand(i),delete e[r];
            for(n in i)n in e||(e[n]=i[n],t[n]=a)
        }
        else t[r]=a
    }
    function X(e,t,i,r,n) {
        return new X.prototype.init(e,t,i,r,n)
    }
    function j(e,t) {
        var i,r= {
                height:e
            }
            ,n=0;
        for(t=t?1:0;
            4>n;
            n+=2-t)i=wt[n],r["margin"+i]=r["padding"+i]=e;
        return t&&(r.opacity=r.width=e),r
    }
    function Y(e) {
        return oe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)
    }
    var q,W,G=typeof t,V=e.document,$=e.location,U=e.jQuery,Z=e.$,K= {
        }
        ,Q=[],J="1.9.1",ee=Q.concat,te=Q.push,ie=Q.slice,re=Q.indexOf,ne=K.toString,ae=K.hasOwnProperty,se=J.trim,oe=function(e,t) {
            return new oe.fn.init(e,t,W)
        }
        ,le=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ue=/\S+/g,pe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ce=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,de=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,he=/^[\],: {
	}
\s]*$/,fe=/(?:^|:|,)(?:\s*\[)+/g,me=/\\(?:["\\\/bfnrt]|u[\da-fA-F] {
        4
}
)/g,ge=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,ve=/^-ms-/,ye=/-([\da-z])/gi,_e=function(e,t) {
    return t.toUpperCase()
}
    ,xe=function(e) {
    (V.addEventListener||"load"===e.type||"complete"===V.readyState)&&(we(),oe.ready())
}
    ,we=function() {
    V.addEventListener?(V.removeEventListener("DOMContentLoaded",xe,!1),e.removeEventListener("load",xe,!1)):(V.detachEvent("onreadystatechange",xe),e.detachEvent("onload",xe))
}
;
oe.fn=oe.prototype= {
    jquery:J,constructor:oe,init:function(e,i,r) {
        var n,a;
        if(!e)return this;
        if("string"==typeof e) {
            if(!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ce.exec(e))||!n[1]&&i)return!i||i.jquery?(i||r).find(e):this.constructor(i).find(e);
            if(n[1]) {
                if(i=i instanceof oe?i[0]:i,oe.merge(this,oe.parseHTML(n[1],i&&i.nodeType?i.ownerDocument||i:V,!0)),de.test(n[1])&&oe.isPlainObject(i))for(n in i)oe.isFunction(this[n])?this[n](i[n]):this.attr(n,i[n]);
                return this
            }
            if((a=V.getElementById(n[2]))&&a.parentNode) {
                if(a.id!==n[2])return r.find(e);
                this.length=1,this[0]=a
            }
            return this.context=V,this.selector=e,this
        }
        return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))
    }
    ,selector:"",length:0,size:function() {
        return this.length
    }
    ,toArray:function() {
        return ie.call(this)
    }
    ,get:function(e) {
        return null==e?this.toArray():0>e?this[this.length+e]:this[e]
    }
    ,pushStack:function(e) {
        var t=oe.merge(this.constructor(),e);
        return t.prevObject=this,t.context=this.context,t
    }
    ,each:function(e,t) {
        return oe.each(this,e,t)
    }
    ,ready:function(e) {
        return oe.ready.promise().done(e),this
    }
    ,slice:function() {
        return this.pushStack(ie.apply(this,arguments))
    }
    ,first:function() {
        return this.eq(0)
    }
    ,last:function() {
        return this.eq(-1)
    }
    ,eq:function(e) {
        var t=this.length,i=+e+(0>e?t:0);
        return this.pushStack(i>=0&&t>i?[this[i]]:[])
    }
    ,map:function(e) {
        return this.pushStack(oe.map(this,function(t,i) {
                return e.call(t,i,t)
            }
        ))
    }
    ,end:function() {
        return this.prevObject||this.constructor(null)
    }
    ,push:te,sort:[].sort,splice:[].splice
}
    ,oe.fn.init.prototype=oe.fn,oe.extend=oe.fn.extend=function() {
    var e,i,r,n,a,s,o=arguments[0]|| {
            }
        ,l=1,u=arguments.length,p=!1;
    for("boolean"==typeof o&&(p=o,o=arguments[1]|| {
    }
        ,l=2),"object"==typeof o||oe.isFunction(o)||(o= {
    }
    ),u===l&&(o=this,--l);
        u>l;
        l++)if(null!=(a=arguments[l]))for(n in a)e=o[n],r=a[n],o!==r&&(p&&r&&(oe.isPlainObject(r)||(i=oe.isArray(r)))?(i?(i=!1,s=e&&oe.isArray(e)?e:[]):s=e&&oe.isPlainObject(e)?e: {
    }
        ,o[n]=oe.extend(p,s,r)):r!==t&&(o[n]=r));
    return o
}
    ,oe.extend( {
    noConflict:function(t) {
        return e.$===oe&&(e.$=Z),t&&e.jQuery===oe&&(e.jQuery=U),oe
    }
    ,isReady:!1,readyWait:1,holdReady:function(e) {
        e?oe.readyWait++:oe.ready(!0)
    }
    ,ready:function(e) {
        if(!0===e?!--oe.readyWait:!oe.isReady) {
            if(!V.body)return setTimeout(oe.ready);
            oe.isReady=!0,!0!==e&&--oe.readyWait>0||(q.resolveWith(V,[oe]),oe.fn.trigger&&oe(V).trigger("ready").off("ready"))
        }
    },isFunction:function(e) {
        return"function"===oe.type(e)
    }
    ,isArray:Array.isArray||function(e) {
        return"array"===oe.type(e)
    }
    ,isWindow:function(e) {
        return null!=e&&e==e.window
    }
    ,isNumeric:function(e) {
        return!isNaN(parseFloat(e))&&isFinite(e)
    }
    ,type:function(e) {
        return null==e?e+"":"object"==typeof e||"function"==typeof e?K[ne.call(e)]||"object":typeof e
    }
    ,isPlainObject:function(e) {
        if(!e||"object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;
        try {
            if(e.constructor&&!ae.call(e,"constructor")&&!ae.call(e.constructor.prototype,"isPrototypeOf"))return!1
        }
        catch(e) {
            return!1
        }
        var i;
        for(i in e);
        return i===t||ae.call(e,i)
    }
    ,isEmptyObject:function(e) {
        var t;
        for(t in e)return!1;
        return!0
    }
    ,error:function(e) {
        throw Error(e)
    }
    ,parseHTML:function(e,t,i) {
        if(!e||"string"!=typeof e)return null;
        "boolean"==typeof t&&(i=t,t=!1),t=t||V;
        var r=de.exec(e),n=!i&&[];
        return r?[t.createElement(r[1])]:(r=oe.buildFragment([e],t,n),n&&oe(n).remove(),oe.merge([],r.childNodes))
    }
    ,parseJSON:function(i) {
        return e.JSON&&e.JSON.parse?e.JSON.parse(i):null===i?i:"string"==typeof i&&(i=oe.trim(i))&&he.test(i.replace(me,"@").replace(ge,"]").replace(fe,""))?Function("return "+i)():(oe.error("Invalid JSON: "+i),t)
    }
    ,parseXML:function(i) {
        var r,n;
        if(!i||"string"!=typeof i)return null;
        try {
            e.DOMParser?(n=new DOMParser,r=n.parseFromString(i,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(i))
        }
        catch(e) {
            r=t
        }
        return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+i),r
    }
    ,noop:function() {
    }
    ,globalEval:function(t) {
        t&&oe.trim(t)&&(e.execScript||function(t) {
            e.eval.call(e,t)
        }
        )(t)
    }
    ,camelCase:function(e) {
        return e.replace(ve,"ms-").replace(ye,_e)
    }
    ,nodeName:function(e,t) {
        return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
    }
    ,each:function(e,t,r) {
        var n=0,a=e.length,s=i(e);
        if(r) {
            if(s)for(;
                a>n&&!1!==t.apply(e[n],r);
                n++);
            else for(n in e)if(!1===t.apply(e[n],r))break
        }
        else if(s)for(;
            a>n&&!1!==t.call(e[n],n,e[n]);
            n++);
        else for(n in e)if(!1===t.call(e[n],n,e[n]))break;
        return e
    }
    ,trim:se&&!se.call("\ufeff? ")?function(e) {
        return null==e?"":se.call(e)
    }
        :function(e) {
        return null==e?"":(e+"").replace(pe,"")
    }
    ,makeArray:function(e,t) {
        var r=t||[];
        return null!=e&&(i(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):te.call(r,e)),r
    }
    ,inArray:function(e,t,i) {
        var r;
        if(t) {
            if(re)return re.call(t,e,i);
            for(r=t.length,i=i?0>i?Math.max(0,r+i):i:0;
                r>i;
                i++)if(i in t&&t[i]===e)return i
        }
        return-1
    }
    ,merge:function(e,i) {
        var r=i.length,n=e.length,a=0;
        if("number"==typeof r)for(;
            r>a;
            a++)e[n++]=i[a];
        else for(;
            i[a]!==t;
        )e[n++]=i[a++];
        return e.length=n,e
    }
    ,grep:function(e,t,i) {
        var r,n=[],a=0,s=e.length;
        for(i=!!i;
            s>a;
            a++)r=!!t(e[a],a),i!==r&&n.push(e[a]);
        return n
    }
    ,map:function(e,t,r) {
        var n,a=0,s=e.length,o=[];
        if(i(e))for(;
            s>a;
            a++)null!=(n=t(e[a],a,r))&&(o[o.length]=n);
        else for(a in e)null!=(n=t(e[a],a,r))&&(o[o.length]=n);
        return ee.apply([],o)
    }
    ,guid:1,proxy:function(e,i) {
        var r,n,a;
        return"string"==typeof i&&(a=e[i],i=e,e=a),oe.isFunction(e)?(r=ie.call(arguments,2),n=function() {
            return e.apply(i||this,r.concat(ie.call(arguments)))
        }
            ,n.guid=e.guid=e.guid||oe.guid++,n):t
    }
    ,access:function(e,i,r,n,a,s,o) {
        var l=0,u=e.length,p=null==r;
        if("object"===oe.type(r)) {
            a=!0;
            for(l in r)oe.access(e,i,l,r[l],!0,s,o)
        }
        else if(n!==t&&(a=!0,oe.isFunction(n)||(o=!0),p&&(o?(i.call(e,n),i=null):(p=i,i=function(e,t,i) {
                return p.call(oe(e),i)
            }
            )),i))for(;
            u>l;
            l++)i(e[l],r,o?n:n.call(e[l],l,i(e[l],r)));
        return a?e:p?i.call(e):u?i(e[0],r):s
    }
    ,now:function() {
        return(new Date).getTime()
    }
}),oe.ready.promise=function(t) {
    if(!q)if(q=oe.Deferred(),"complete"===V.readyState)setTimeout(oe.ready);
    else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xe,!1),e.addEventListener("load",xe,!1);
    else {
        V.attachEvent("onreadystatechange",xe),e.attachEvent("onload",xe);
        var i=!1;
        try {
            i=null==e.frameElement&&V.documentElement
        }
        catch(e) {
        }
        i&&i.doScroll&&function e() {
            if(!oe.isReady) {
                try {
                    i.doScroll("left")
                }
                catch(t) {
                    return setTimeout(e,50)
                }
                we(),oe.ready()
            }
        }()
    }
    return q.promise(t)
}
    ,oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t) {
        K["[object "+t+"]"]=t.toLowerCase()
    }
),W=oe(V);
var be= {
    }
    ;
oe.Callbacks=function(e) {
    var i,n,a,s,o,l,u=[],p=!(e="string"==typeof e?be[e]||r(e):oe.extend( {
                }
                ,e)).once&&[],c=function(t) {
            for(n=e.memory&&t,a=!0,o=l||0,l=0,s=u.length,i=!0;
                u&&s>o;
                o++)if(!1===u[o].apply(t[0],t[1])&&e.stopOnFalse) {
                n=!1;
                break
            }
            i=!1,u&&(p?p.length&&c(p.shift()):n?u=[]:d.disable())
        }
        ,d= {
            add:function() {
                if(u) {
                    var t=u.length;
                    (function t(i) {
                        oe.each(i,function(i,r) {
                                var n=oe.type(r);
                                "function"===n?e.unique&&d.has(r)||u.push(r):r&&r.length&&"string"!==n&&t(r)
                            }
                        )
                    }
                    )(arguments),i?s=u.length:n&&(l=t,c(n))
                }
                return this
            }
            ,remove:function() {
                return u&&oe.each(arguments,function(e,t) {
                        for(var r;
                            (r=oe.inArray(t,u,r))>-1;
                        )u.splice(r,1),i&&(s>=r&&s--,o>=r&&o--)
                    }
                ),this
            }
            ,has:function(e) {
                return e?oe.inArray(e,u)>-1:!(!u||!u.length)
            }
            ,empty:function() {
                return u=[],this
            }
            ,disable:function() {
                return u=p=n=t,this
            }
            ,disabled:function() {
                return!u
            }
            ,lock:function() {
                return p=t,n||d.disable(),this
            }
            ,locked:function() {
                return!p
            }
            ,fireWith:function(e,t) {
                return t=t||[],t=[e,t.slice?t.slice():t],!u||a&&!p||(i?p.push(t):c(t)),this
            }
            ,fire:function() {
                return d.fireWith(this,arguments),this
            }
            ,fired:function() {
                return!!a
            }
        };
    return d
}
    ,oe.extend( {
    Deferred:function(e) {
        var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],i="pending",r= {
                state:function() {
                    return i
                }
                ,always:function() {
                    return n.done(arguments).fail(arguments),this
                }
                ,then:function() {
                    var e=arguments;
                    return oe.Deferred(function(i) {
                            oe.each(t,function(t,a) {
                                    var s=a[0],o=oe.isFunction(e[t])&&e[t];
                                    n[a[1]](function() {
                                            var e=o&&o.apply(this,arguments);
                                            e&&oe.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[s+"With"](this===r?i.promise():this,o?[e]:arguments)
                                        }
                                    )
                                }
                            ),e=null
                        }
                    ).promise()
                }
                ,promise:function(e) {
                    return null!=e?oe.extend(e,r):r
                }
            },n= {
            }
            ;
        return r.pipe=r.then,oe.each(t,function(e,a) {
                var s=a[2],o=a[3];
                r[a[1]]=s.add,o&&s.add(function() {
                        i=o
                    }
                    ,t[1^e][2].disable,t[2][2].lock),n[a[0]]=function() {
                    return n[a[0]+"With"](this===n?r:this,arguments),this
                }
                    ,n[a[0]+"With"]=s.fireWith
            }
        ),r.promise(n),e&&e.call(n,n),n
    }
    ,when:function(e) {
        var t,i,r,n=0,a=ie.call(arguments),s=a.length,o=1!==s||e&&oe.isFunction(e.promise)?s:0,l=1===o?e:oe.Deferred(),u=function(e,i,r) {
            return function(n) {
                i[e]=this,r[e]=arguments.length>1?ie.call(arguments):n,r===t?l.notifyWith(i,r):--o||l.resolveWith(i,r)
            }
        };
        if(s>1)for(t=Array(s),i=Array(s),r=Array(s);
                   s>n;
                   n++)a[n]&&oe.isFunction(a[n].promise)?a[n].promise().done(u(n,r,a)).fail(l.reject).progress(u(n,i,t)):--o;
        return o||l.resolveWith(r,a),l.promise()
    }
}),oe.support=function() {
    var t,i,r,n,a,s,o,l,u,p,c=V.createElement("div");
    if(c.setAttribute("className","t"),c.innerHTML=" <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=c.getElementsByTagName("*"),r=c.getElementsByTagName("a")[0],!i||!r||!i.length)return {
    }
        ;
    o=(a=V.createElement("select")).appendChild(V.createElement("option")),n=c.getElementsByTagName("input")[0],r.style.cssText="top:1px;
    float:left;
    opacity:.5",t= {
    getSetAttribute:"t"!==c.className,leadingWhitespace:3===c.firstChild.nodeType,tbody:!c.getElementsByTagName("tbody").length,htmlSerialize:!!c.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!n.value,optSelected:o.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1
}
    ,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,a.disabled=!0,t.optDisabled=!o.disabled;
try {
    delete c.test
}
catch(e) {
    t.deleteExpando=!1
}
(n=V.createElement("input")).setAttribute("value",""),t.input=""===n.getAttribute("value"),n.value="t",n.setAttribute("type","radio"),t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),(s=V.createDocumentFragment()).appendChild(n),t.appendChecked=n.checked,t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,c.attachEvent&&(c.attachEvent("onclick",function() {
        t.noCloneEvent=!1
    }
),c.cloneNode(!0).click());
for(p in {
    submit:!0,change:!0,focusin:!0
}
    )c.setAttribute(l="on"+p,"t"),t[p+"Bubbles"]=l in e||!1===c.attributes[l].expando;
return c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===c.style.backgroundClip,oe(function() {
        var i,r,n,a="padding:0;
        margin:0;
        border:0;
        display:block;
        box-sizing:content-box;
        -moz-box-sizing:content-box;
        -webkit-box-sizing:content-box;
        ",s=V.getElementsByTagName("body")[0];
        s&&(i=V.createElement("div"),i.style.cssText="border:0;
        width:0;
        height:0;
        position:absolute;
        top:0;
        left:-9999px;
        margin-top:1px",s.appendChild(i).appendChild(c),c.innerHTML="<table><tr><td></td><td>t</td></tr></table>",n=c.getElementsByTagName("td"),n[0].style.cssText="padding:0;
        margin:0;
        border:0;
        display:none",u=0===n[0].offsetHeight,n[0].style.display="",n[1].style.display="none",t.reliableHiddenOffsets=u&&0===n[0].offsetHeight,c.innerHTML="",c.style.cssText="box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
        padding:1px;
        border:1px;
        display:block;
        width:4px;
        margin-top:1%;
        position:absolute;
        top:1%;
        ",t.boxSizing=4===c.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(c,null)|| {
    }
).top,t.boxSizingReliable="4px"===(e.getComputedStyle(c,null)|| {
    width:"4px"
}
).width,r=c.appendChild(V.createElement("div")),r.style.cssText=c.style.cssText=a,r.style.marginRight=r.style.width="0",c.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)|| {
}
).marginRight)),typeof c.style.zoom!==G&&(c.innerHTML="",c.style.cssText=a+"width:1px;
padding:1px;
display:inline;
zoom:1",t.inlineBlockNeedsLayout=3===c.offsetWidth,c.style.display="block",c.innerHTML="<div></div>",c.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==c.offsetWidth,t.inlineBlockNeedsLayout&&(s.style.zoom=1)),s.removeChild(i),i=c=n=r=null)
}
),i=a=s=o=r=n=null,t
}
();
var Te=/(?:\ {
    [\s\S]*\
}
|\[[\s\S]*\])$/,Ce=/([A-Z])/g;
oe.extend( {
    cache: {
    }
    ,expando:"jQuery"+(J+Math.random()).replace(/\D/g,""),noData: {
        embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0
    }
    ,hasData:function(e) {
        return!!(e=e.nodeType?oe.cache[e[oe.expando]]:e[oe.expando])&&!o(e)
    }
    ,data:function(e,t,i) {
        return n(e,t,i)
    }
    ,removeData:function(e,t) {
        return a(e,t)
    }
    ,_data:function(e,t,i) {
        return n(e,t,i,!0)
    }
    ,_removeData:function(e,t) {
        return a(e,t,!0)
    }
    ,acceptData:function(e) {
        if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;
        var t=e.nodeName&&oe.noData[e.nodeName.toLowerCase()];
        return!t||!0!==t&&e.getAttribute("classid")===t
    }
}),oe.fn.extend( {
    data:function(e,i) {
        var r,n,a=this[0],o=0,l=null;
        if(e===t) {
            if(this.length&&(l=oe.data(a),1===a.nodeType&&!oe._data(a,"parsedAttrs"))) {
                for(r=a.attributes;
                    r.length>o;
                    o++)(n=r[o].name).indexOf("data-")||(n=oe.camelCase(n.slice(5)),s(a,n,l[n]));
                oe._data(a,"parsedAttrs",!0)
            }
            return l
        }
        return"object"==typeof e?this.each(function() {
                oe.data(this,e)
            }
        ):oe.access(this,function(i) {
                return i===t?a?s(a,e,oe.data(a,e)):null:(this.each(function() {
                        oe.data(this,e,i)
                    }
                ),t)
            }
            ,null,i,arguments.length>1,null,!0)
    }
    ,removeData:function(e) {
        return this.each(function() {
                oe.removeData(this,e)
            }
        )
    }
}),oe.extend( {
    queue:function(e,i,r) {
        var n;
        return e?(i=(i||"fx")+"queue",n=oe._data(e,i),r&&(!n||oe.isArray(r)?n=oe._data(e,i,oe.makeArray(r)):n.push(r)),n||[]):t
    }
    ,dequeue:function(e,t) {
        t=t||"fx";
        var i=oe.queue(e,t),r=i.length,n=i.shift(),a=oe._queueHooks(e,t);
        "inprogress"===n&&(n=i.shift(),r--),a.cur=n,n&&("fx"===t&&i.unshift("inprogress"),delete a.stop,n.call(e,function() {
                oe.dequeue(e,t)
            }
            ,a)),!r&&a&&a.empty.fire()
    }
    ,_queueHooks:function(e,t) {
        var i=t+"queueHooks";
        return oe._data(e,i)||oe._data(e,i, {
                    empty:oe.Callbacks("once memory").add(function() {
                            oe._removeData(e,t+"queue"),oe._removeData(e,i)
                        }
                    )
                }
            )
    }
}),oe.fn.extend( {
    queue:function(e,i) {
        var r=2;
        return"string"!=typeof e&&(i=e,e="fx",r--),r>arguments.length?oe.queue(this[0],e):i===t?this:this.each(function() {
                var t=oe.queue(this,e,i);
                oe._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&oe.dequeue(this,e)
            }
        )
    }
    ,dequeue:function(e) {
        return this.each(function() {
                oe.dequeue(this,e)
            }
        )
    }
    ,delay:function(e,t) {
        return e=oe.fx?oe.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,i) {
            var r=setTimeout(t,e);
            i.stop=function() {
                clearTimeout(r)
            }
        })
    }
    ,clearQueue:function(e) {
        return this.queue(e||"fx",[])
    }
    ,promise:function(e,i) {
        var r,n=1,a=oe.Deferred(),s=this,o=this.length,l=function() {
                --n||a.resolveWith(s,[s])
            }
            ;
        for("string"!=typeof e&&(i=e,e=t),e=e||"fx";
            o--;
        )(r=oe._data(s[o],e+"queueHooks"))&&r.empty&&(n++,r.empty.add(l));
        return l(),a.promise(i)
    }
});
var Se,Pe,ke=/[\t\r\n]/g,Me=/\r/g,Ee=/^(?:input|select|textarea|button|object)$/i,ze=/^(?:a|area)$/i,Ae=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,De=/^(?:checked|selected)$/i,Oe=oe.support.getSetAttribute,Ne=oe.support.input;
oe.fn.extend( {
    attr:function(e,t) {
        return oe.access(this,oe.attr,e,t,arguments.length>1)
    }
    ,removeAttr:function(e) {
        return this.each(function() {
                oe.removeAttr(this,e)
            }
        )
    }
    ,prop:function(e,t) {
        return oe.access(this,oe.prop,e,t,arguments.length>1)
    }
    ,removeProp:function(e) {
        return e=oe.propFix[e]||e,this.each(function() {
            try {
                this[e]=t,delete this[e]
            }
            catch(e) {
            }
        })
    }
    ,addClass:function(e) {
        var t,i,r,n,a,s=0,o=this.length,l="string"==typeof e&&e;
        if(oe.isFunction(e))return this.each(function(t) {
                oe(this).addClass(e.call(this,t,this.className))
            }
        );
        if(l)for(t=(e||"").match(ue)||[];
                 o>s;
                 s++)if(i=this[s],r=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(ke," "):" ")) {
                for(a=0;
                    n=t[a++];
                )0>r.indexOf(" "+n+" ")&&(r+=n+" ");
                i.className=oe.trim(r)
            }
        return this
    }
    ,removeClass:function(e) {
        var t,i,r,n,a,s=0,o=this.length,l=0===arguments.length||"string"==typeof e&&e;
        if(oe.isFunction(e))return this.each(function(t) {
                oe(this).removeClass(e.call(this,t,this.className))
            }
        );
        if(l)for(t=(e||"").match(ue)||[];
                 o>s;
                 s++)if(i=this[s],r=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(ke," "):"")) {
                for(a=0;
                    n=t[a++];
                )for(;
                    r.indexOf(" "+n+" ")>=0;
                )r=r.replace(" "+n+" "," ");
                i.className=e?oe.trim(r):""
            }
        return this
    }
    ,toggleClass:function(e,t) {
        var i=typeof e,r="boolean"==typeof t;
        return oe.isFunction(e)?this.each(function(i) {
                oe(this).toggleClass(e.call(this,i,this.className,t),t)
            }
        ):this.each(function() {
                if("string"===i)for(var n,a=0,s=oe(this),o=t,l=e.match(ue)||[];
                                    n=l[a++];
                )o=r?o:!s.hasClass(n),s[o?"addClass":"removeClass"](n);
                else(i===G||"boolean"===i)&&(this.className&&oe._data(this,"__className__",this.className),this.className=this.className||!1===e?"":oe._data(this,"__className__")||"")
            }
        )
    }
    ,hasClass:function(e) {
        for(var t=" "+e+" ",i=0,r=this.length;
            r>i;
            i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(ke," ").indexOf(t)>=0)return!0;
        return!1
    }
    ,val:function(e) {
        var i,r,n,a=this[0];
        return arguments.length?(n=oe.isFunction(e),this.each(function(i) {
                var a,s=oe(this);
                1===this.nodeType&&(null==(a=n?e.call(this,i,s.val()):e)?a="":"number"==typeof a?a+="":oe.isArray(a)&&(a=oe.map(a,function(e) {
                        return null==e?"":e+""
                    }
                )),(r=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&r.set(this,a,"value")!==t||(this.value=a))
            }
        )):a?(r=oe.valHooks[a.type]||oe.valHooks[a.nodeName.toLowerCase()])&&"get"in r&&(i=r.get(a,"value"))!==t?i:"string"==typeof(i=a.value)?i.replace(Me,""):null==i?"":i:void 0
    }
}),oe.extend( {
    valHooks: {
        option: {
            get:function(e) {
                var t=e.attributes.value;
                return!t||t.specified?e.value:e.text
            }
        },select: {
            get:function(e) {
                for(var t,i,r=e.options,n=e.selectedIndex,a="select-one"===e.type||0>n,s=a?null:[],o=a?n+1:r.length,l=0>n?o:a?n:0;
                    o>l;
                    l++)if(!(!(i=r[l]).selected&&l!==n||(oe.support.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&oe.nodeName(i.parentNode,"optgroup"))) {
                    if(t=oe(i).val(),a)return t;
                    s.push(t)
                }
                return s
            }
            ,set:function(e,t) {
                var i=oe.makeArray(t);
                return oe(e).find("option").each(function() {
                        this.selected=oe.inArray(oe(this).val(),i)>=0
                    }
                ),i.length||(e.selectedIndex=-1),i
            }
        }
    }
    ,attr:function(e,i,r) {
        var n,a,s,o=e.nodeType;
        if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===G?oe.prop(e,i,r):((a=1!==o||!oe.isXMLDoc(e))&&(i=i.toLowerCase(),n=oe.attrHooks[i]||(Ae.test(i)?Pe:Se)),r===t?n&&a&&"get"in n&&null!==(s=n.get(e,i))?s:(typeof e.getAttribute!==G&&(s=e.getAttribute(i)),null==s?t:s):null!==r?n&&a&&"set"in n&&(s=n.set(e,r,i))!==t?s:(e.setAttribute(i,r+""),r):(oe.removeAttr(e,i),t))
    }
    ,removeAttr:function(e,t) {
        var i,r,n=0,a=t&&t.match(ue);
        if(a&&1===e.nodeType)for(;
            i=a[n++];
        )r=oe.propFix[i]||i,Ae.test(i)?!Oe&&De.test(i)?e[oe.camelCase("default-"+i)]=e[r]=!1:e[r]=!1:oe.attr(e,i,""),e.removeAttribute(Oe?i:r)
    }
    ,attrHooks: {
        type: {
            set:function(e,t) {
                if(!oe.support.radioValue&&"radio"===t&&oe.nodeName(e,"input")) {
                    var i=e.value;
                    return e.setAttribute("type",t),i&&(e.value=i),t
                }
            }
        }
    },propFix: {
        tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"
    }
    ,prop:function(e,i,r) {
        var n,a,s=e.nodeType;
        if(e&&3!==s&&8!==s&&2!==s)return(1!==s||!oe.isXMLDoc(e))&&(i=oe.propFix[i]||i,a=oe.propHooks[i]),r!==t?a&&"set"in a&&(n=a.set(e,r,i))!==t?n:e[i]=r:a&&"get"in a&&null!==(n=a.get(e,i))?n:e[i]
    }
    ,propHooks: {
        tabIndex: {
            get:function(e) {
                var i=e.getAttributeNode("tabindex");
                return i&&i.specified?parseInt(i.value,10):Ee.test(e.nodeName)||ze.test(e.nodeName)&&e.href?0:t
            }
        }
    }
}),Pe= {
    get:function(e,i) {
        var r=oe.prop(e,i),n="boolean"==typeof r&&e.getAttribute(i),a="boolean"==typeof r?Ne&&Oe?null!=n:De.test(i)?e[oe.camelCase("default-"+i)]:!!n:e.getAttributeNode(i);
        return a&&!1!==a.value?i.toLowerCase():t
    }
    ,set:function(e,t,i) {
        return!1===t?oe.removeAttr(e,i):Ne&&Oe||!De.test(i)?e.setAttribute(!Oe&&oe.propFix[i]||i,i):e[oe.camelCase("default-"+i)]=e[i]=!0,i
    }
},Ne&&Oe||(oe.attrHooks.value= {
    get:function(e,i) {
        var r=e.getAttributeNode(i);
        return oe.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
    }
    ,set:function(e,i,r) {
        return oe.nodeName(e,"input")?(e.defaultValue=i,t):Se&&Se.set(e,i,r)
    }
}),Oe||(Se=oe.valHooks.button= {
    get:function(e,i) {
        var r=e.getAttributeNode(i);
        return r&&("id"===i||"name"===i||"coords"===i?""!==r.value:r.specified)?r.value:t
    }
    ,set:function(e,i,r) {
        var n=e.getAttributeNode(r);
        return n||e.setAttributeNode(n=e.ownerDocument.createAttribute(r)),n.value=i+="","value"===r||i===e.getAttribute(r)?i:t
    }
},oe.attrHooks.contenteditable= {
    get:Se.get,set:function(e,t,i) {
        Se.set(e,""!==t&&t,i)
    }
},oe.each(["width","height"],function(e,i) {
        oe.attrHooks[i]=oe.extend(oe.attrHooks[i], {
            set:function(e,r) {
                return""===r?(e.setAttribute(i,"auto"),r):t
            }
        })
    }
)),oe.support.hrefNormalized||(oe.each(["href","src","width","height"],function(e,i) {
        oe.attrHooks[i]=oe.extend(oe.attrHooks[i], {
            get:function(e) {
                var r=e.getAttribute(i,2);
                return null==r?t:r
            }
        })
    }
),oe.each(["href","src"],function(e,t) {
        oe.propHooks[t]= {
            get:function(e) {
                return e.getAttribute(t,4)
            }
        }
    }
)),oe.support.style||(oe.attrHooks.style= {
    get:function(e) {
        return e.style.cssText||t
    }
    ,set:function(e,t) {
        return e.style.cssText=t+""
    }
}),oe.support.optSelected||(oe.propHooks.selected=oe.extend(oe.propHooks.selected, {
    get:function(e) {
        var t=e.parentNode;
        return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
    }
})),oe.support.enctype||(oe.propFix.enctype="encoding"),oe.support.checkOn||oe.each(["radio","checkbox"],function() {
        oe.valHooks[this]= {
            get:function(e) {
                return null===e.getAttribute("value")?"on":e.value
            }
        }
    }
),oe.each(["radio","checkbox"],function() {
        oe.valHooks[this]=oe.extend(oe.valHooks[this], {
            set:function(e,i) {
                return oe.isArray(i)?e.checked=oe.inArray(oe(e).val(),i)>=0:t
            }
        })
    }
);
var Le=/^(?:input|select|textarea)$/i,Re=/^key/,Ie=/^(?:mouse|contextmenu)|click/,Be=/^(?:focusinfocus|focusoutblur)$/,He=/^([^.]*)(?:\.(.+)|)$/;
oe.event= {
    global: {
    }
    ,add:function(e,i,r,n,a) {
        var s,o,l,u,p,c,d,h,f,m,g,v=oe._data(e);
        if(v) {
            for(r.handler&&(u=r,r=u.handler,a=u.selector),r.guid||(r.guid=oe.guid++),(o=v.events)||(o=v.events= {
            }
            ),(c=v.handle)||(c=v.handle=function(e) {
                return typeof oe===G||e&&oe.event.triggered===e.type?t:oe.event.dispatch.apply(c.elem,arguments)
            }
                ,c.elem=e),l=(i=(i||"").match(ue)||[""]).length;
                l--;
            )s=He.exec(i[l])||[],f=g=s[1],m=(s[2]||"").split(".").sort(),p=oe.event.special[f]|| {
            }
                ,f=(a?p.delegateType:p.bindType)||f,p=oe.event.special[f]|| {
            }
                ,d=oe.extend( {
                    type:f,origType:g,data:n,handler:r,guid:r.guid,selector:a,needsContext:a&&oe.expr.match.needsContext.test(a),namespace:m.join(".")
                }
                ,u),(h=o[f])||(h=o[f]=[],h.delegateCount=0,p.setup&&!1!==p.setup.call(e,n,m,c)||(e.addEventListener?e.addEventListener(f,c,!1):e.attachEvent&&e.attachEvent("on"+f,c))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),oe.event.global[f]=!0;
            e=null
        }
    },remove:function(e,t,i,r,n) {
        var a,s,o,l,u,p,c,d,h,f,m,g=oe.hasData(e)&&oe._data(e);
        if(g&&(p=g.events)) {
            for(u=(t=(t||"").match(ue)||[""]).length;
                u--;
            )if(o=He.exec(t[u])||[],h=m=o[1],f=(o[2]||"").split(".").sort(),h) {
                for(c=oe.event.special[h]|| {
                }
                        ,d=p[h=(r?c.delegateType:c.bindType)||h]||[],o=o[2]&&RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=a=d.length;
                    a--;
                )s=d[a],!n&&m!==s.origType||i&&i.guid!==s.guid||o&&!o.test(s.namespace)||r&&r!==s.selector&&("**"!==r||!s.selector)||(d.splice(a,1),s.selector&&d.delegateCount--,c.remove&&c.remove.call(e,s));
                l&&!d.length&&(c.teardown&&!1!==c.teardown.call(e,f,g.handle)||oe.removeEvent(e,h,g.handle),delete p[h])
            }
            else for(h in p)oe.event.remove(e,h+t[u],i,r,!0);
            oe.isEmptyObject(p)&&(delete g.handle,oe._removeData(e,"events"))
        }
    },trigger:function(i,r,n,a) {
        var s,o,l,u,p,c,d,h=[n||V],f=ae.call(i,"type")?i.type:i,m=ae.call(i,"namespace")?i.namespace.split("."):[];
        if(l=c=n=n||V,3!==n.nodeType&&8!==n.nodeType&&!Be.test(f+oe.event.triggered)&&(f.indexOf(".")>=0&&(m=f.split("."),f=m.shift(),m.sort()),o=0>f.indexOf(":")&&"on"+f,i=i[oe.expando]?i:new oe.Event(f,"object"==typeof i&&i),i.isTrigger=!0,i.namespace=m.join("."),i.namespace_re=i.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,i.result=t,i.target||(i.target=n),r=null==r?[i]:oe.makeArray(r,[i]),p=oe.event.special[f]|| {
            }
                ,a||!p.trigger||!1!==p.trigger.apply(n,r))) {
            if(!a&&!p.noBubble&&!oe.isWindow(n)) {
                for(u=p.delegateType||f,Be.test(u+f)||(l=l.parentNode);
                    l;
                    l=l.parentNode)h.push(l),c=l;
                c===(n.ownerDocument||V)&&h.push(c.defaultView||c.parentWindow||e)
            }
            for(d=0;
                (l=h[d++])&&!i.isPropagationStopped();
            )i.type=d>1?u:p.bindType||f,(s=(oe._data(l,"events")|| {
            }
            )[i.type]&&oe._data(l,"handle"))&&s.apply(l,r),(s=o&&l[o])&&oe.acceptData(l)&&s.apply&&!1===s.apply(l,r)&&i.preventDefault();
            if(i.type=f,!(a||i.isDefaultPrevented()||p._default&&!1!==p._default.apply(n.ownerDocument,r)||"click"===f&&oe.nodeName(n,"a")||!oe.acceptData(n)||!o||!n[f]||oe.isWindow(n))) {
                (c=n[o])&&(n[o]=null),oe.event.triggered=f;
                try {
                    n[f]()
                }
                catch(e) {
                }
                oe.event.triggered=t,c&&(n[o]=c)
            }
            return i.result
        }
    },dispatch:function(e) {
        e=oe.event.fix(e);
        var i,r,n,a,s,o=[],l=ie.call(arguments),u=(oe._data(this,"events")|| {
                }
                )[e.type]||[],p=oe.event.special[e.type]|| {
                }
            ;
        if(l[0]=e,e.delegateTarget=this,!p.preDispatch||!1!==p.preDispatch.call(this,e)) {
            for(o=oe.event.handlers.call(this,e,u),i=0;
                (a=o[i++])&&!e.isPropagationStopped();
            )for(e.currentTarget=a.elem,s=0;
                 (n=a.handlers[s++])&&!e.isImmediatePropagationStopped();
            )(!e.namespace_re||e.namespace_re.test(n.namespace))&&(e.handleObj=n,e.data=n.data,(r=((oe.event.special[n.origType]|| {
                }
                ).handle||n.handler).apply(a.elem,l))!==t&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));
            return p.postDispatch&&p.postDispatch.call(this,e),e.result
        }
    },handlers:function(e,i) {
        var r,n,a,s,o=[],l=i.delegateCount,u=e.target;
        if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;
            u!=this;
            u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)) {
                for(a=[],s=0;
                    l>s;
                    s++)n=i[s],r=n.selector+" ",a[r]===t&&(a[r]=n.needsContext?oe(r,this).index(u)>=0:oe.find(r,this,null,[u]).length),a[r]&&a.push(n);
                a.length&&o.push( {
                        elem:u,handlers:a
                    }
                )
            }
        return i.length>l&&o.push( {
                elem:this,handlers:i.slice(l)
            }
        ),o
    }
    ,fix:function(e) {
        if(e[oe.expando])return e;
        var t,i,r,n=e.type,a=e,s=this.fixHooks[n];
        for(s||(this.fixHooks[n]=s=Ie.test(n)?this.mouseHooks:Re.test(n)?this.keyHooks: {
        }
        ),r=s.props?this.props.concat(s.props):this.props,e=new oe.Event(a),t=r.length;
            t--;
        )i=r[t],e[i]=a[i];
        return e.target||(e.target=a.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e
    }
    ,props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {
    }
    ,keyHooks: {
        props:"char charCode key keyCode".split(" "),filter:function(e,t) {
            return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
        }
    },mouseHooks: {
        props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,i) {
            var r,n,a,s=i.button,o=i.fromElement;
            return null==e.pageX&&null!=i.clientX&&(n=e.target.ownerDocument||V,a=n.documentElement,r=n.body,e.pageX=i.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=i.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?i.toElement:o),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
        }
    },special: {
        load: {
            noBubble:!0
        }
        ,click: {
            trigger:function() {
                return oe.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
            }
        },focus: {
            trigger:function() {
                if(this!==V.activeElement&&this.focus)try {
                    return this.focus(),!1
                }
                catch(e) {
                }
            },delegateType:"focusin"
        }
        ,blur: {
            trigger:function() {
                return this===V.activeElement&&this.blur?(this.blur(),!1):t
            }
            ,delegateType:"focusout"
        }
        ,beforeunload: {
            postDispatch:function(e) {
                e.result!==t&&(e.originalEvent.returnValue=e.result)
            }
        }
    }
    ,simulate:function(e,t,i,r) {
        var n=oe.extend(new oe.Event,i, {
            type:e,isSimulated:!0,originalEvent: {
            }
        });
        r?oe.event.trigger(n,null,t):oe.event.dispatch.call(t,n),n.isDefaultPrevented()&&i.preventDefault()
    }
},oe.removeEvent=V.removeEventListener?function(e,t,i) {
    e.removeEventListener&&e.removeEventListener(t,i,!1)
}
    :function(e,t,i) {
    var r="on"+t;
    e.detachEvent&&(typeof e[r]===G&&(e[r]=null),e.detachEvent(r,i))
}
    ,oe.Event=function(e,i) {
    return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?l:u):this.type=e,i&&oe.extend(this,i),this.timeStamp=e&&e.timeStamp||oe.now(),this[oe.expando]=!0,t):new oe.Event(e,i)
}
    ,oe.Event.prototype= {
    isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function() {
        var e=this.originalEvent;
        this.isDefaultPrevented=l,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
    }
    ,stopPropagation:function() {
        var e=this.originalEvent;
        this.isPropagationStopped=l,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
    }
    ,stopImmediatePropagation:function() {
        this.isImmediatePropagationStopped=l,this.stopPropagation()
    }
},oe.each( {
        mouseenter:"mouseover",mouseleave:"mouseout"
    }
    ,function(e,t) {
        oe.event.special[e]= {
            delegateType:t,bindType:t,handle:function(e) {
                var i,r=this,n=e.relatedTarget,a=e.handleObj;
                return(!n||n!==r&&!oe.contains(r,n))&&(e.type=a.origType,i=a.handler.apply(this,arguments),e.type=t),i
            }
        }
    }
),oe.support.submitBubbles||(oe.event.special.submit= {
    setup:function() {
        return!oe.nodeName(this,"form")&&(oe.event.add(this,"click._submit keypress._submit",function(e) {
                    var i=e.target,r=oe.nodeName(i,"input")||oe.nodeName(i,"button")?i.form:t;
                    r&&!oe._data(r,"submitBubbles")&&(oe.event.add(r,"submit._submit",function(e) {
                            e._submit_bubble=!0
                        }
                    ),oe._data(r,"submitBubbles",!0))
                }
            ),t)
    }
    ,postDispatch:function(e) {
        e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&oe.event.simulate("submit",this.parentNode,e,!0))
    }
    ,teardown:function() {
        return!oe.nodeName(this,"form")&&(oe.event.remove(this,"._submit"),t)
    }
}),oe.support.changeBubbles||(oe.event.special.change= {
    setup:function() {
        return Le.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(oe.event.add(this,"propertychange._change",function(e) {
                "checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
            }
        ),oe.event.add(this,"click._change",function(e) {
                this._just_changed&&!e.isTrigger&&(this._just_changed=!1),oe.event.simulate("change",this,e,!0)
            }
        )),!1):(oe.event.add(this,"beforeactivate._change",function(e) {
                var t=e.target;
                Le.test(t.nodeName)&&!oe._data(t,"changeBubbles")&&(oe.event.add(t,"change._change",function(e) {
                        !this.parentNode||e.isSimulated||e.isTrigger||oe.event.simulate("change",this.parentNode,e,!0)
                    }
                ),oe._data(t,"changeBubbles",!0))
            }
        ),t)
    }
    ,handle:function(e) {
        var i=e.target;
        return this!==i||e.isSimulated||e.isTrigger||"radio"!==i.type&&"checkbox"!==i.type?e.handleObj.handler.apply(this,arguments):t
    }
    ,teardown:function() {
        return oe.event.remove(this,"._change"),!Le.test(this.nodeName)
    }
}),oe.support.focusinBubbles||oe.each( {
        focus:"focusin",blur:"focusout"
    }
    ,function(e,t) {
        var i=0,r=function(e) {
                oe.event.simulate(t,e.target,oe.event.fix(e),!0)
            }
            ;
        oe.event.special[t]= {
            setup:function() {
                0==i++&&V.addEventListener(e,r,!0)
            }
            ,teardown:function() {
                0==--i&&V.removeEventListener(e,r,!0)
            }
        }
    }
),oe.fn.extend( {
    on:function(e,i,r,n,a) {
        var s,o;
        if("object"==typeof e) {
            "string"!=typeof i&&(r=r||i,i=t);
            for(s in e)this.on(s,i,r,e[s],a);
            return this
        }
        if(null==r&&null==n?(n=i,r=i=t):null==n&&("string"==typeof i?(n=r,r=t):(n=r,r=i,i=t)),!1===n)n=u;
        else if(!n)return this;
        return 1===a&&(o=n,n=function(e) {
            return oe().off(e),o.apply(this,arguments)
        }
            ,n.guid=o.guid||(o.guid=oe.guid++)),this.each(function() {
                oe.event.add(this,e,n,r,i)
            }
        )
    }
    ,one:function(e,t,i,r) {
        return this.on(e,t,i,r,1)
    }
    ,off:function(e,i,r) {
        var n,a;
        if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,oe(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;
        if("object"==typeof e) {
            for(a in e)this.off(a,i,e[a]);
            return this
        }
        return(!1===i||"function"==typeof i)&&(r=i,i=t),!1===r&&(r=u),this.each(function() {
                oe.event.remove(this,e,r,i)
            }
        )
    }
    ,bind:function(e,t,i) {
        return this.on(e,null,t,i)
    }
    ,unbind:function(e,t) {
        return this.off(e,null,t)
    }
    ,delegate:function(e,t,i,r) {
        return this.on(t,e,i,r)
    }
    ,undelegate:function(e,t,i) {
        return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)
    }
    ,trigger:function(e,t) {
        return this.each(function() {
                oe.event.trigger(e,t,this)
            }
        )
    }
    ,triggerHandler:function(e,i) {
        var r=this[0];
        return r?oe.event.trigger(e,i,r,!0):t
    }
}),function(e,t) {
    function i(e) {
        return ce.test(e+"")
    }
    function r() {
        var e,t=[];
        return e=function(i,r) {
            return t.push(i+=" ")>b.cacheLength&&delete e[t.shift()],e[i]=r
        }
    }function n(e) {
        return e[I]=!0,e
    }
    function a(e) {
        var t=E.createElement("div");
        try {
            return e(t)
        }
        catch(e) {
            return!1
        }
        finally {
            t=null
        }
    }function s(e,t,i,r) {
        var n,a,s,o,l,c,d,h,f,m;
        if((t?t.ownerDocument||t:B)!==E&&M(t),t=t||E,i=i||[],!e||"string"!=typeof e)return i;
        if(1!==(o=t.nodeType)&&9!==o)return[];
        if(!A&&!r) {
            if(n=de.exec(e))if(s=n[1]) {
                if(9===o) {
                    if(!(a=t.getElementById(s))||!a.parentNode)return i;
                    if(a.id===s)return i.push(a),i
                }
                else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&L(t,a)&&a.id===s)return i.push(a),i
            }
            else {
                if(n[2])return U.apply(i,Z.call(t.getElementsByTagName(e),0)),i;
                if((s=n[3])&&H.getByClassName&&t.getElementsByClassName)return U.apply(i,Z.call(t.getElementsByClassName(s),0)),i
            }
            if(H.qsa&&!D.test(e)) {
                if(d=!0,h=I,f=t,m=9===o&&e,1===o&&"object"!==t.nodeName.toLowerCase()) {
                    for(c=u(e),(d=t.getAttribute("id"))?h=d.replace(me,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=c.length;
                        l--;
                    )c[l]=h+p(c[l]);
                    f=pe.test(e)&&t.parentNode||t,m=c.join(",")
                }
                if(m)try {
                    return U.apply(i,Z.call(f.querySelectorAll(m),0)),i
                }
                catch(e) {
                }
                finally {
                    d||t.removeAttribute("id")
                }
            }
        }
        return y(e.replace(re,"$1"),t,i,r)
    }
    function o(e,t) {
        var i=t&&e,r=i&&(~t.sourceIndex||G)-(~e.sourceIndex||G);
        if(r)return r;
        if(i)for(;
            i=i.nextSibling;
        )if(i===t)return-1;
        return e?1:-1
    }
    function l(e) {
        return n(function(t) {
                return t=+t,n(function(i,r) {
                        for(var n,a=e([],i.length,t),s=a.length;
                            s--;
                        )i[n=a[s]]&&(i[n]=!(r[n]=i[n]))
                    }
                )
            }
        )
    }
    function u(e,t) {
        var i,r,n,a,o,l,u,p=Y[e+" "];
        if(p)return t?0:p.slice(0);
        for(o=e,l=[],u=b.preFilter;
            o;
        ) {
            (!i||(r=ne.exec(o)))&&(r&&(o=o.slice(r[0].length)||o),l.push(n=[])),i=!1,(r=ae.exec(o))&&(i=r.shift(),n.push( {
                    value:i,type:r[0].replace(re," ")
                }
            ),o=o.slice(i.length));
            for(a in b.filter)!(r=ue[a].exec(o))||u[a]&&!(r=u[a](r))||(i=r.shift(),n.push( {
                    value:i,type:a,matches:r
                }
            ),o=o.slice(i.length));
            if(!i)break
        }
        return t?o.length:o?s.error(e):Y(e,l).slice(0)
    }
    function p(e) {
        for(var t=0,i=e.length,r="";
            i>t;
            t++)r+=e[t].value;
        return r
    }
    function c(e,t,i) {
        var r=t.dir,n=i&&"parentNode"===r,a=X++;
        return t.first?function(t,i,a) {
            for(;
                t=t[r];
            )if(1===t.nodeType||n)return e(t,i,a)
        }
            :function(t,i,s) {
            var o,l,u,p=F+" "+a;
            if(s) {
                for(;
                    t=t[r];
                )if((1===t.nodeType||n)&&e(t,i,s))return!0
            }
            else for(;
                t=t[r];
            )if(1===t.nodeType||n)if(u=t[I]||(t[I]= {
                    }
                    ),(l=u[r])&&l[0]===p) {
                    if(!0===(o=l[1])||o===w)return!0===o
                }
                else if(l=u[r]=[p],l[1]=e(t,i,s)||w,!0===l[1])return!0
        }
    }function d(e) {
        return e.length>1?function(t,i,r) {
            for(var n=e.length;
                n--;
            )if(!e[n](t,i,r))return!1;
            return!0
        }
            :e[0]
    }
    function h(e,t,i,r,n) {
        for(var a,s=[],o=0,l=e.length,u=null!=t;
            l>o;
            o++)(a=e[o])&&(!i||i(a,r,n))&&(s.push(a),u&&t.push(o));
        return s
    }
    function f(e,t,i,r,a,s) {
        return r&&!r[I]&&(r=f(r)),a&&!a[I]&&(a=f(a,s)),n(function(n,s,o,l) {
                var u,p,c,d=[],f=[],m=s.length,g=n||v(t||"*",o.nodeType?[o]:o,[]),y=!e||!n&&t?g:h(g,d,e,o,l),_=i?a||(n?e:m||r)?[]:s:y;
                if(i&&i(y,_,o,l),r)for(u=h(_,f),r(u,[],o,l),p=u.length;
                                       p--;
                )(c=u[p])&&(_[f[p]]=!(y[f[p]]=c));
                if(n) {
                    if(a||e) {
                        if(a) {
                            for(u=[],p=_.length;
                                p--;
                            )(c=_[p])&&u.push(y[p]=c);
                            a(null,_=[],u,l)
                        }
                        for(p=_.length;
                            p--;
                        )(c=_[p])&&(u=a?K.call(n,c):d[p])>-1&&(n[u]=!(s[u]=c))
                    }
                }else _=h(_===s?_.splice(m,_.length):_),a?a(null,s,_,l):U.apply(s,_)
            }
        )
    }
    function m(e) {
        for(var t,i,r,n=e.length,a=b.relative[e[0].type],s=a||b.relative[" "],o=a?1:0,l=c(function(e) {
                return e===t
            }
            ,s,!0),u=c(function(e) {
                return K.call(t,e)>-1
            }
            ,s,!0),h=[function(e,i,r) {
            return!a&&(r||i!==k)||((t=i).nodeType?l(e,i,r):u(e,i,r))
        }
        ];
            n>o;
            o++)if(i=b.relative[e[o].type])h=[c(d(h),i)];
        else {
            if((i=b.filter[e[o].type].apply(null,e[o].matches))[I]) {
                for(r=++o;
                    n>r&&!b.relative[e[r].type];
                    r++);
                return f(o>1&&d(h),o>1&&p(e.slice(0,o-1)).replace(re,"$1"),i,r>o&&m(e.slice(o,r)),n>r&&m(e=e.slice(r)),n>r&&p(e))
            }
            h.push(i)
        }
        return d(h)
    }
    function g(e,t) {
        var i=0,r=t.length>0,a=e.length>0,o=function(n,o,l,u,p) {
                var c,d,f,m=[],g=0,v="0",y=n&&[],_=null!=p,x=k,T=n||a&&b.find.TAG("*",p&&o.parentNode||o),C=F+=null==x?1:Math.random()||.1;
                for(_&&(k=o!==E&&o,w=i);
                    null!=(c=T[v]);
                    v++) {
                    if(a&&c) {
                        for(d=0;
                            f=e[d++];
                        )if(f(c,o,l)) {
                            u.push(c);
                            break
                        }
                        _&&(F=C,w=++i)
                    }
                    r&&((c=!f&&c)&&g--,n&&y.push(c))
                }
                if(g+=v,r&&v!==g) {
                    for(d=0;
                        f=t[d++];
                    )f(y,m,o,l);
                    if(n) {
                        if(g>0)for(;
                            v--;
                        )y[v]||m[v]||(m[v]=$.call(u));
                        m=h(m)
                    }
                    U.apply(u,m),_&&!n&&m.length>0&&g+t.length>1&&s.uniqueSort(u)
                }
                return _&&(F=C,k=x),y
            }
            ;
        return r?n(o):o
    }
    function v(e,t,i) {
        for(var r=0,n=t.length;
            n>r;
            r++)s(e,t[r],i);
        return i
    }
    function y(e,t,i,r) {
        var n,a,s,o,l,c=u(e);
        if(!r&&1===c.length) {
            if((a=c[0]=c[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&!A&&b.relative[a[1].type]) {
                if(!(t=b.find.ID(s.matches[0].replace(ve,ye),t)[0]))return i;
                e=e.slice(a.shift().value.length)
            }
            for(n=ue.needsContext.test(e)?0:a.length;
                n--&&(s=a[n],!b.relative[o=s.type]);
            )if((l=b.find[o])&&(r=l(s.matches[0].replace(ve,ye),pe.test(a[0].type)&&t.parentNode||t))) {
                if(a.splice(n,1),!(e=r.length&&p(a)))return U.apply(i,Z.call(r,0)),i;
                break
            }
        }return S(e,c)(r,t,A,i,pe.test(e)),i
    }
    function _() {
    }
    var x,w,b,T,C,S,P,k,M,E,z,A,D,O,N,L,R,I="sizzle"+-new Date,B=e.document,H= {
        }
        ,F=0,X=0,j=r(),Y=r(),q=r(),W=typeof t,G=1<<31,V=[],$=V.pop,U=V.push,Z=V.slice,K=V.indexOf||function(e) {
                for(var t=0,i=this.length;
                    i>t;
                    t++)if(this[t]===e)return t;
                return-1
            }
        ,Q="[\\x20\\t\\r\\n\\f]",J="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ee=J.replace("w","w#"),te="\\["+Q+"*("+J+")"+Q+"*(?:([*^$|!~]?=)"+Q+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ee+")|)|)"+Q+"*\\]",ie=":("+J+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+te.replace(3,8)+")*)|.*)\\)|)",re=RegExp("^"+Q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Q+"+$","g"),ne=RegExp("^"+Q+"*,"+Q+"*"),ae=RegExp("^"+Q+"*([\\x20\\t\\r\\n\\f>+~])"+Q+"*"),se=RegExp(ie),le=RegExp("^"+ee+"$"),ue= {
            ID:RegExp("^#("+J+")"),CLASS:RegExp("^\\.("+J+")"),NAME:RegExp("^\\[name=['\"]?("+J+")['\"]?\\]"),TAG:RegExp("^("+J.replace("w","w*")+")"),ATTR:RegExp("^"+te),PSEUDO:RegExp("^"+ie),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Q+"*(even|odd|(([+-]|)(\\d*)n|)"+Q+"*(?:([+-]|)"+Q+"*(\\d+)|))"+Q+"*\\)|)","i"),needsContext:RegExp("^"+Q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Q+"*((?:-\\d)?\\d*)"+Q+"*\\)|)(?=[^-]|$)","i")
        }
        ,pe=/[\x20\t\r\n\f]*[+~]/,ce=/^[^ {
    ]+\ {
    \s*\[native code/,de=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,he=/^(?:input|select|textarea|button)$/i,fe=/^h\d$/i,me=/'|\\/g,ge=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,ve=/\\([\da-fA-F] {
            1,6
        }
        [\x20\t\r\n\f]?|.)/g,ye=function(e,t) {
            var i="0x"+t-65536;
            return i!==i?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(55296|i>>10,56320|1023&i)
        }
        ;
        try {
            Z.call(B.documentElement.childNodes,0)[0].nodeType
        }
        catch(e) {
            Z=function(e) {
                for(var t,i=[];
                    t=this[e++];
                )i.push(t);
                return i
            }
        }C=s.isXML=function(e) {
            var t=e&&(e.ownerDocument||e).documentElement;
            return!!t&&"HTML"!==t.nodeName
        }
            ,M=s.setDocument=function(e) {
            var r=e?e.ownerDocument||e:B;
            return r!==E&&9===r.nodeType&&r.documentElement?(E=r,z=r.documentElement,A=C(r),H.tagNameNoComments=a(function(e) {
                    return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length
                }
            ),H.attributes=a(function(e) {
                    e.innerHTML="<select></select>";
                    var t=typeof e.lastChild.getAttribute("multiple");
                    return"boolean"!==t&&"string"!==t
                }
            ),H.getByClassName=a(function(e) {
                    return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!e.getElementsByClassName||!e.getElementsByClassName("e").length)&&(e.lastChild.className="e",2===e.getElementsByClassName("e").length)
                }
            ),H.getByName=a(function(e) {
                    e.id=I+0,e.innerHTML="<a name='"+I+"'></a><div name='"+I+"'></div>",z.insertBefore(e,z.firstChild);
                    var t=r.getElementsByName&&r.getElementsByName(I).length===2+r.getElementsByName(I+0).length;
                    return H.getIdNotName=!r.getElementById(I),z.removeChild(e),t
                }
            ),b.attrHandle=a(function(e) {
                    return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==W&&"#"===e.firstChild.getAttribute("href")
                }
            )? {
            }
                : {
                href:function(e) {
                    return e.getAttribute("href",2)
                }
                ,type:function(e) {
                    return e.getAttribute("type")
                }
            },H.getIdNotName?(b.find.ID=function(e,t) {
                if(typeof t.getElementById!==W&&!A) {
                    var i=t.getElementById(e);
                    return i&&i.parentNode?[i]:[]
                }
            },b.filter.ID=function(e) {
                var t=e.replace(ve,ye);
                return function(e) {
                    return e.getAttribute("id")===t
                }
            }):(b.find.ID=function(e,i) {
                if(typeof i.getElementById!==W&&!A) {
                    var r=i.getElementById(e);
                    return r?r.id===e||typeof r.getAttributeNode!==W&&r.getAttributeNode("id").value===e?[r]:t:[]
                }
            },b.filter.ID=function(e) {
                var t=e.replace(ve,ye);
                return function(e) {
                    var i=typeof e.getAttributeNode!==W&&e.getAttributeNode("id");
                    return i&&i.value===t
                }
            }),b.find.TAG=H.tagNameNoComments?function(e,i) {
                return typeof i.getElementsByTagName!==W?i.getElementsByTagName(e):t
            }
                :function(e,t) {
                var i,r=[],n=0,a=t.getElementsByTagName(e);
                if("*"===e) {
                    for(;
                        i=a[n++];
                    )1===i.nodeType&&r.push(i);
                    return r
                }
                return a
            }
                ,b.find.NAME=H.getByName&&function(e,i) {
                return typeof i.getElementsByName!==W?i.getElementsByName(name):t
            }
                ,b.find.CLASS=H.getByClassName&&function(e,i) {
                return typeof i.getElementsByClassName===W||A?t:i.getElementsByClassName(e)
            }
                ,O=[],D=[":focus"],(H.qsa=i(r.querySelectorAll))&&(a(function(e) {
                    e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||D.push("\\["+Q+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||D.push(":checked")
                }
            ),a(function(e) {
                    e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&D.push("[*^$]="+Q+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||D.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),D.push(",.*:")
                }
            )),(H.matchesSelector=i(N=z.matchesSelector||z.mozMatchesSelector||z.webkitMatchesSelector||z.oMatchesSelector||z.msMatchesSelector))&&a(function(e) {
                    H.disconnectedMatch=N.call(e,"div"),N.call(e,"[s!='']:x"),O.push("!=",ie)
                }
            ),D=RegExp(D.join("|")),O=RegExp(O.join("|")),L=i(z.contains)||z.compareDocumentPosition?function(e,t) {
                var i=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
                return e===r||!(!r||1!==r.nodeType||!(i.contains?i.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
            }
                :function(e,t) {
                if(t)for(;
                    t=t.parentNode;
                )if(t===e)return!0;
                return!1
            }
                ,R=z.compareDocumentPosition?function(e,t) {
                var i;
                return e===t?(P=!0,0):(i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&i||e.parentNode&&11===e.parentNode.nodeType?e===r||L(B,e)?-1:t===r||L(B,t)?1:0:4&i?-1:1:e.compareDocumentPosition?-1:1
            }
                :function(e,t) {
                var i,n=0,a=e.parentNode,s=t.parentNode,l=[e],u=[t];
                if(e===t)return P=!0,0;
                if(!a||!s)return e===r?-1:t===r?1:a?-1:s?1:0;
                if(a===s)return o(e,t);
                for(i=e;
                    i=i.parentNode;
                )l.unshift(i);
                for(i=t;
                    i=i.parentNode;
                )u.unshift(i);
                for(;
                    l[n]===u[n];
                )n++;
                return n?o(l[n],u[n]):l[n]===B?-1:u[n]===B?1:0
            }
                ,P=!1,[0,0].sort(R),H.detectDuplicates=P,E):E
        }
            ,s.matches=function(e,t) {
            return s(e,null,null,t)
        }
            ,s.matchesSelector=function(e,t) {
            if((e.ownerDocument||e)!==E&&M(e),t=t.replace(ge,"='$1']"),!(!H.matchesSelector||A||O&&O.test(t)||D.test(t)))try {
                var i=N.call(e,t);
                if(i||H.disconnectedMatch||e.document&&11!==e.document.nodeType)return i
            }
            catch(e) {
            }
            return s(t,E,null,[e]).length>0
        }
            ,s.contains=function(e,t) {
            return(e.ownerDocument||e)!==E&&M(e),L(e,t)
        }
            ,s.attr=function(e,t) {
            var i;
            return(e.ownerDocument||e)!==E&&M(e),A||(t=t.toLowerCase()),(i=b.attrHandle[t])?i(e):A||H.attributes?e.getAttribute(t):((i=e.getAttributeNode(t))||e.getAttribute(t))&&!0===e[t]?t:i&&i.specified?i.value:null
        }
            ,s.error=function(e) {
            throw Error("Syntax error, unrecognized expression: "+e)
        }
            ,s.uniqueSort=function(e) {
            var t,i=[],r=1,n=0;
            if(P=!H.detectDuplicates,e.sort(R),P) {
                for(;
                    t=e[r];
                    r++)t===e[r-1]&&(n=i.push(r));
                for(;
                    n--;
                )e.splice(i[n],1)
            }
            return e
        }
            ,T=s.getText=function(e) {
            var t,i="",r=0,n=e.nodeType;
            if(n) {
                if(1===n||9===n||11===n) {
                    if("string"==typeof e.textContent)return e.textContent;
                    for(e=e.firstChild;
                        e;
                        e=e.nextSibling)i+=T(e)
                }
                else if(3===n||4===n)return e.nodeValue
            }
            else for(;
                t=e[r];
                r++)i+=T(t);
            return i
        }
            ,b=s.selectors= {
            cacheLength:50,createPseudo:n,match:ue,find: {
            }
            ,relative: {
                ">": {
                    dir:"parentNode",first:!0
                }
                ," ": {
                    dir:"parentNode"
                }
                ,"+": {
                    dir:"previousSibling",first:!0
                }
                ,"~": {
                    dir:"previousSibling"
                }
            },preFilter: {
                ATTR:function(e) {
                    return e[1]=e[1].replace(ve,ye),e[3]=(e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
                }
                ,CHILD:function(e) {
                    return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||s.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&s.error(e[0]),e
                }
                ,PSEUDO:function(e) {
                    var t,i=!e[5]&&e[2];
                    return ue.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:i&&se.test(i)&&(t=u(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))
                }
            },filter: {
                TAG:function(e) {
                    return"*"===e?function() {
                        return!0
                    }
                        :(e=e.replace(ve,ye).toLowerCase(),function(t) {
                        return t.nodeName&&t.nodeName.toLowerCase()===e
                    }
                    )
                }
                ,CLASS:function(e) {
                    var t=j[e+" "];
                    return t||(t=RegExp("(^|"+Q+")"+e+"("+Q+"|$)"))&&j(e,function(e) {
                                return t.test(e.className||typeof e.getAttribute!==W&&e.getAttribute("class")||"")
                            }
                        )
                }
                ,ATTR:function(e,t,i) {
                    return function(r) {
                        var n=s.attr(r,e);
                        return null==n?"!="===t:!t||(n+="","="===t?n===i:"!="===t?n!==i:"^="===t?i&&0===n.indexOf(i):"*="===t?i&&n.indexOf(i)>-1:"$="===t?i&&n.slice(-i.length)===i:"~="===t?(" "+n+" ").indexOf(i)>-1:"|="===t&&(n===i||n.slice(0,i.length+1)===i+"-"))
                    }
                },CHILD:function(e,t,i,r,n) {
                    var a="nth"!==e.slice(0,3),s="last"!==e.slice(-4),o="of-type"===t;
                    return 1===r&&0===n?function(e) {
                        return!!e.parentNode
                    }
                        :function(t,i,l) {
                        var u,p,c,d,h,f,m=a!==s?"nextSibling":"previousSibling",g=t.parentNode,v=o&&t.nodeName.toLowerCase(),y=!l&&!o;
                        if(g) {
                            if(a) {
                                for(;
                                    m;
                                ) {
                                    for(c=t;
                                        c=c[m];
                                    )if(o?c.nodeName.toLowerCase()===v:1===c.nodeType)return!1;
                                    f=m="only"===e&&!f&&"nextSibling"
                                }
                                return!0
                            }
                            if(f=[s?g.firstChild:g.lastChild],s&&y) {
                                for(h=(u=(p=g[I]||(g[I]= {
                                }
                                ))[e]||[])[0]===F&&u[1],d=u[0]===F&&u[2],c=h&&g.childNodes[h];
                                    c=++h&&c&&c[m]||(d=h=0)||f.pop();
                                )if(1===c.nodeType&&++d&&c===t) {
                                    p[e]=[F,h,d];
                                    break
                                }
                            }else if(y&&(u=(t[I]||(t[I]= {
                                }
                                ))[e])&&u[0]===F)d=u[1];
                            else for(;
                                    (c=++h&&c&&c[m]||(d=h=0)||f.pop())&&((o?c.nodeName.toLowerCase()!==v:1!==c.nodeType)||!++d||(y&&((c[I]||(c[I]= {
                                    }
                                    ))[e]=[F,d]),c!==t));
                                );
                            return(d-=n)===r||0==d%r&&d/r>=0
                        }
                    }
                }
                ,PSEUDO:function(e,t) {
                    var i,r=b.pseudos[e]||b.setFilters[e.toLowerCase()]||s.error("unsupported pseudo: "+e);
                    return r[I]?r(t):r.length>1?(i=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,i) {
                            for(var n,a=r(e,t),s=a.length;
                                s--;
                            )n=K.call(e,a[s]),e[n]=!(i[n]=a[s])
                        }
                    ):function(e) {
                        return r(e,0,i)
                    }
                    ):r
                }
            },pseudos: {
                not:n(function(e) {
                    var t=[],i=[],r=S(e.replace(re,"$1"));
                    return r[I]?n(function(e,t,i,n) {
                            for(var a,s=r(e,null,n,[]),o=e.length;
                                o--;
                            )(a=s[o])&&(e[o]=!(t[o]=a))
                        }
                    ):function(e,n,a) {
                        return t[0]=e,r(t,null,a,i),!i.pop()
                    }
                }),has:n(function(e) {
                    return function(t) {
                        return s(e,t).length>0
                    }
                }),contains:n(function(e) {
                    return function(t) {
                        return(t.textContent||t.innerText||T(t)).indexOf(e)>-1
                    }
                }),lang:n(function(e) {
                    return le.test(e||"")||s.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t) {
                        var i;
                        do {
                            if(i=A?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return(i=i.toLowerCase())===e||0===i.indexOf(e+"-")
                        }
                        while((t=t.parentNode)&&1===t.nodeType);
                        return!1
                    }
                }),target:function(t) {
                    var i=e.location&&e.location.hash;
                    return i&&i.slice(1)===t.id
                }
                ,root:function(e) {
                    return e===z
                }
                ,focus:function(e) {
                    return e===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
                }
                ,enabled:function(e) {
                    return!1===e.disabled
                }
                ,disabled:function(e) {
                    return!0===e.disabled
                }
                ,checked:function(e) {
                    var t=e.nodeName.toLowerCase();
                    return"input"===t&&!!e.checked||"option"===t&&!!e.selected
                }
                ,selected:function(e) {
                    return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected
                }
                ,empty:function(e) {
                    for(e=e.firstChild;
                        e;
                        e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;
                    return!0
                }
                ,parent:function(e) {
                    return!b.pseudos.empty(e)
                }
                ,header:function(e) {
                    return fe.test(e.nodeName)
                }
                ,input:function(e) {
                    return he.test(e.nodeName)
                }
                ,button:function(e) {
                    var t=e.nodeName.toLowerCase();
                    return"input"===t&&"button"===e.type||"button"===t
                }
                ,text:function(e) {
                    var t;
                    return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
                }
                ,first:l(function() {
                        return[0]
                    }
                ),last:l(function(e,t) {
                        return[t-1]
                    }
                ),eq:l(function(e,t,i) {
                        return[0>i?i+t:i]
                    }
                ),even:l(function(e,t) {
                        for(var i=0;
                            t>i;
                            i+=2)e.push(i);
                        return e
                    }
                ),odd:l(function(e,t) {
                        for(var i=1;
                            t>i;
                            i+=2)e.push(i);
                        return e
                    }
                ),lt:l(function(e,t,i) {
                        for(var r=0>i?i+t:i;
                            --r>=0;
                        )e.push(r);
                        return e
                    }
                ),gt:l(function(e,t,i) {
                        for(var r=0>i?i+t:i;
                            t>++r;
                        )e.push(r);
                        return e
                    }
                )
            }
        };
        for(x in {
            radio:!0,checkbox:!0,file:!0,password:!0,image:!0
        }
            )b.pseudos[x]=function(e) {
            return function(t) {
                return"input"===t.nodeName.toLowerCase()&&t.type===e
            }
        }(x);
        for(x in {
            submit:!0,reset:!0
        }
            )b.pseudos[x]=function(e) {
            return function(t) {
                var i=t.nodeName.toLowerCase();
                return("input"===i||"button"===i)&&t.type===e
            }
        }(x);
        S=s.compile=function(e,t) {
            var i,r=[],n=[],a=q[e+" "];
            if(!a) {
                for(t||(t=u(e)),i=t.length;
                    i--;
                )(a=m(t[i]))[I]?r.push(a):n.push(a);
                a=q(e,g(n,r))
            }
            return a
        }
            ,b.pseudos.nth=b.pseudos.eq,b.filters=_.prototype=b.pseudos,b.setFilters=new _,M(),s.attr=oe.attr,oe.find=s,oe.expr=s.selectors,oe.expr[":"]=oe.expr.pseudos,oe.unique=s.uniqueSort,oe.text=s.getText,oe.isXMLDoc=s.isXML,oe.contains=s.contains
    }
    (e);
    var Fe=/Until$/,Xe=/^(?:parents|prev(?:Until|All))/,je=/^.[^:#\[\.,]*$/,Ye=oe.expr.match.needsContext,qe= {
            children:!0,contents:!0,next:!0,prev:!0
        }
        ;
    oe.fn.extend( {
        find:function(e) {
            var t,i,r,n=this.length;
            if("string"!=typeof e)return r=this,this.pushStack(oe(e).filter(function() {
                    for(t=0;
                        n>t;
                        t++)if(oe.contains(r[t],this))return!0
                }
            ));
            for(i=[],t=0;
                n>t;
                t++)oe.find(e,this[t],i);
            return i=this.pushStack(n>1?oe.unique(i):i),i.selector=(this.selector?this.selector+" ":"")+e,i
        }
        ,has:function(e) {
            var t,i=oe(e,this),r=i.length;
            return this.filter(function() {
                    for(t=0;
                        r>t;
                        t++)if(oe.contains(this,i[t]))return!0
                }
            )
        }
        ,not:function(e) {
            return this.pushStack(c(this,e,!1))
        }
        ,filter:function(e) {
            return this.pushStack(c(this,e,!0))
        }
        ,is:function(e) {
            return!!e&&("string"==typeof e?Ye.test(e)?oe(e,this.context).index(this[0])>=0:oe.filter(e,this).length>0:this.filter(e).length>0)
        }
        ,closest:function(e,t) {
            for(var i,r=0,n=this.length,a=[],s=Ye.test(e)||"string"!=typeof e?oe(e,t||this.context):0;
                n>r;
                r++)for(i=this[r];
                        i&&i.ownerDocument&&i!==t&&11!==i.nodeType;
            ) {
                if(s?s.index(i)>-1:oe.find.matchesSelector(i,e)) {
                    a.push(i);
                    break
                }
                i=i.parentNode
            }
            return this.pushStack(a.length>1?oe.unique(a):a)
        }
        ,index:function(e) {
            return e?"string"==typeof e?oe.inArray(this[0],oe(e)):oe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
        }
        ,add:function(e,t) {
            var i="string"==typeof e?oe(e,t):oe.makeArray(e&&e.nodeType?[e]:e),r=oe.merge(this.get(),i);
            return this.pushStack(oe.unique(r))
        }
        ,addBack:function(e) {
            return this.add(null==e?this.prevObject:this.prevObject.filter(e))
        }
    }),oe.fn.andSelf=oe.fn.addBack,oe.each( {
        parent:function(e) {
            var t=e.parentNode;
            return t&&11!==t.nodeType?t:null
        }
        ,parents:function(e) {
            return oe.dir(e,"parentNode")
        }
        ,parentsUntil:function(e,t,i) {
            return oe.dir(e,"parentNode",i)
        }
        ,next:function(e) {
            return p(e,"nextSibling")
        }
        ,prev:function(e) {
            return p(e,"previousSibling")
        }
        ,nextAll:function(e) {
            return oe.dir(e,"nextSibling")
        }
        ,prevAll:function(e) {
            return oe.dir(e,"previousSibling")
        }
        ,nextUntil:function(e,t,i) {
            return oe.dir(e,"nextSibling",i)
        }
        ,prevUntil:function(e,t,i) {
            return oe.dir(e,"previousSibling",i)
        }
        ,siblings:function(e) {
            return oe.sibling((e.parentNode|| {
            }
            ).firstChild,e)
        }
        ,children:function(e) {
            return oe.sibling(e.firstChild)
        }
        ,contents:function(e) {
            return oe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:oe.merge([],e.childNodes)
        }
    },function(e,t) {
        oe.fn[e]=function(i,r) {
            var n=oe.map(this,t,i);
            return Fe.test(e)||(r=i),r&&"string"==typeof r&&(n=oe.filter(r,n)),n=this.length>1&&!qe[e]?oe.unique(n):n,this.length>1&&Xe.test(e)&&(n=n.reverse()),this.pushStack(n)
        }
    }),oe.extend( {
        filter:function(e,t,i) {
            return i&&(e=":not("+e+")"),1===t.length?oe.find.matchesSelector(t[0],e)?[t[0]]:[]:oe.find.matches(e,t)
        }
        ,dir:function(e,i,r) {
            for(var n=[],a=e[i];
                a&&9!==a.nodeType&&(r===t||1!==a.nodeType||!oe(a).is(r));
            )1===a.nodeType&&n.push(a),a=a[i];
            return n
        }
        ,sibling:function(e,t) {
            for(var i=[];
                e;
                e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);
            return i
        }
    });
    var We="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ge=/ jQuery\d+="(?:null|\d+)"/g,Ve=RegExp("<(?:"+We+")[\\s/>]","i"),$e=/^\s+/,Ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ze=/<([\w:]+)/,Ke=/<tbody/i,Qe=/<|&#?\w+;
    /,Je=/<(?:script|style|link)/i,et=/^(?:checkbox|radio)$/i,tt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^$|\/(?:java|ecma)script/i,rt=/^true\/(.*)/,nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,at= {
        option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:oe.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
    }
        ,st=d(V).appendChild(V.createElement("div"));
    at.optgroup=at.option,at.tbody=at.tfoot=at.colgroup=at.caption=at.thead,at.th=at.td,oe.fn.extend( {
        text:function(e) {
            return oe.access(this,function(e) {
                    return e===t?oe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))
                }
                ,null,e,arguments.length)
        }
        ,wrapAll:function(e) {
            if(oe.isFunction(e))return this.each(function(t) {
                    oe(this).wrapAll(e.call(this,t))
                }
            );
            if(this[0]) {
                var t=oe(e,this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode&&t.insertBefore(this[0]),t.map(function() {
                        for(var e=this;
                            e.firstChild&&1===e.firstChild.nodeType;
                        )e=e.firstChild;
                        return e
                    }
                ).append(this)
            }
            return this
        }
        ,wrapInner:function(e) {
            return oe.isFunction(e)?this.each(function(t) {
                    oe(this).wrapInner(e.call(this,t))
                }
            ):this.each(function() {
                    var t=oe(this),i=t.contents();
                    i.length?i.wrapAll(e):t.append(e)
                }
            )
        }
        ,wrap:function(e) {
            var t=oe.isFunction(e);
            return this.each(function(i) {
                    oe(this).wrapAll(t?e.call(this,i):e)
                }
            )
        }
        ,unwrap:function() {
            return this.parent().each(function() {
                    oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)
                }
            ).end()
        }
        ,append:function() {
            return this.domManip(arguments,!0,function(e) {
                    (1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)
                }
            )
        }
        ,prepend:function() {
            return this.domManip(arguments,!0,function(e) {
                    (1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)
                }
            )
        }
        ,before:function() {
            return this.domManip(arguments,!1,function(e) {
                    this.parentNode&&this.parentNode.insertBefore(e,this)
                }
            )
        }
        ,after:function() {
            return this.domManip(arguments,!1,function(e) {
                    this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
                }
            )
        }
        ,remove:function(e,t) {
            for(var i,r=0;
                null!=(i=this[r]);
                r++)(!e||oe.filter(e,[i]).length>0)&&(t||1!==i.nodeType||oe.cleanData(_(i)),i.parentNode&&(t&&oe.contains(i.ownerDocument,i)&&g(_(i,"script")),i.parentNode.removeChild(i)));
            return this
        }
        ,empty:function() {
            for(var e,t=0;
                null!=(e=this[t]);
                t++) {
                for(1===e.nodeType&&oe.cleanData(_(e,!1));
                    e.firstChild;
                )e.removeChild(e.firstChild);
                e.options&&oe.nodeName(e,"select")&&(e.options.length=0)
            }
            return this
        }
        ,clone:function(e,t) {
            return e=null!=e&&e,t=null==t?e:t,this.map(function() {
                    return oe.clone(this,e,t)
                }
            )
        }
        ,html:function(e) {
            return oe.access(this,function(e) {
                    var i=this[0]|| {
                            }
                        ,r=0,n=this.length;
                    if(e===t)return 1===i.nodeType?i.innerHTML.replace(Ge,""):t;
                    if(!("string"!=typeof e||Je.test(e)||!oe.support.htmlSerialize&&Ve.test(e)||!oe.support.leadingWhitespace&&$e.test(e)||at[(Ze.exec(e)||["",""])[1].toLowerCase()])) {
                        e=e.replace(Ue,"<$1></$2>");
                        try {
                            for(;
                                n>r;
                                r++)1===(i=this[r]|| {
                            }
                            ).nodeType&&(oe.cleanData(_(i,!1)),i.innerHTML=e);
                            i=0
                        }
                        catch(e) {
                        }
                    }i&&this.empty().append(e)
                }
                ,null,e,arguments.length)
        }
        ,replaceWith:function(e) {
            return oe.isFunction(e)||"string"==typeof e||(e=oe(e).not(this).detach()),this.domManip([e],!0,function(e) {
                    var t=this.nextSibling,i=this.parentNode;
                    i&&(oe(this).remove(),i.insertBefore(e,t))
                }
            )
        }
        ,detach:function(e) {
            return this.remove(e,!0)
        }
        ,domManip:function(e,i,r) {
            e=ee.apply([],e);
            var n,a,s,o,l,u,p=0,c=this.length,d=this,g=c-1,v=e[0],y=oe.isFunction(v);
            if(y||!(1>=c||"string"!=typeof v||oe.support.checkClone)&&tt.test(v))return this.each(function(n) {
                    var a=d.eq(n);
                    y&&(e[0]=v.call(this,n,i?a.html():t)),a.domManip(e,i,r)
                }
            );
            if(c&&(u=oe.buildFragment(e,this[0].ownerDocument,!1,this),n=u.firstChild,1===u.childNodes.length&&(u=n),n)) {
                for(i=i&&oe.nodeName(n,"tr"),s=(o=oe.map(_(u,"script"),f)).length;
                    c>p;
                    p++)a=u,p!==g&&(a=oe.clone(a,!0,!0),s&&oe.merge(o,_(a,"script"))),r.call(i&&oe.nodeName(this[p],"table")?h(this[p],"tbody"):this[p],a,p);
                if(s)for(l=o[o.length-1].ownerDocument,oe.map(o,m),p=0;
                         s>p;
                         p++)a=o[p],it.test(a.type||"")&&!oe._data(a,"globalEval")&&oe.contains(l,a)&&(a.src?oe.ajax( {
                            url:a.src,type:"GET",dataType:"script",async:!1,global:!1,throws:!0
                        }
                    ):oe.globalEval((a.text||a.textContent||a.innerHTML||"").replace(nt,"")));
                u=n=null
            }
            return this
        }
    }),oe.each( {
            appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"
        }
        ,function(e,t) {
            oe.fn[e]=function(e) {
                for(var i,r=0,n=[],a=oe(e),s=a.length-1;
                    s>=r;
                    r++)i=r===s?this:this.clone(!0),oe(a[r])[t](i),te.apply(n,i.get());
                return this.pushStack(n)
            }
        }),oe.extend( {
            clone:function(e,t,i) {
                var r,n,a,s,o,l=oe.contains(e.ownerDocument,e);
                if(oe.support.html5Clone||oe.isXMLDoc(e)||!Ve.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(st.innerHTML=e.outerHTML,st.removeChild(a=st.firstChild)),!(oe.support.noCloneEvent&&oe.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(r=_(a),o=_(e),s=0;
                                                                                                                                                                                                                                                                               null!=(n=o[s]);
                                                                                                                                                                                                                                                                               ++s)r[s]&&y(n,r[s]);
                if(t)if(i)for(o=o||_(e),r=r||_(a),s=0;
                              null!=(n=o[s]);
                              s++)v(n,r[s]);
                else v(e,a);
                return(r=_(a,"script")).length>0&&g(r,!l&&_(e,"script")),r=o=n=null,a
            }
            ,buildFragment:function(e,t,i,r) {
                for(var n,a,s,o,l,u,p,c=e.length,h=d(t),f=[],m=0;
                    c>m;
                    m++)if((a=e[m])||0===a)if("object"===oe.type(a))oe.merge(f,a.nodeType?[a]:a);
                else if(Qe.test(a)) {
                    for(o=o||h.appendChild(t.createElement("div")),l=(Ze.exec(a)||["",""])[1].toLowerCase(),p=at[l]||at._default,o.innerHTML=p[1]+a.replace(Ue,"<$1></$2>")+p[2],n=p[0];
                        n--;
                    )o=o.lastChild;
                    if(!oe.support.leadingWhitespace&&$e.test(a)&&f.push(t.createTextNode($e.exec(a)[0])),!oe.support.tbody)for(n=(a="table"!==l||Ke.test(a)?"<table>"!==p[1]||Ke.test(a)?0:o:o.firstChild)&&a.childNodes.length;
                                                                                                                                n--;
                    )oe.nodeName(u=a.childNodes[n],"tbody")&&!u.childNodes.length&&a.removeChild(u);
                    for(oe.merge(f,o.childNodes),o.textContent="";
                        o.firstChild;
                    )o.removeChild(o.firstChild);
                    o=h.lastChild
                }
                else f.push(t.createTextNode(a));
                for(o&&h.removeChild(o),oe.support.appendChecked||oe.grep(_(f,"input"),x),m=0;
                    a=f[m++];
                )if((!r||-1===oe.inArray(a,r))&&(s=oe.contains(a.ownerDocument,a),o=_(h.appendChild(a),"script"),s&&g(o),i))for(n=0;
                                                                                                                                a=o[n++];
                )it.test(a.type||"")&&i.push(a);
                return o=null,h
            }
            ,cleanData:function(e,t) {
                for(var i,r,n,a,s=0,o=oe.expando,l=oe.cache,u=oe.support.deleteExpando,p=oe.event.special;
                    null!=(i=e[s]);
                    s++)if((t||oe.acceptData(i))&&(n=i[o],a=n&&l[n])) {
                    if(a.events)for(r in a.events)p[r]?oe.event.remove(i,r):oe.removeEvent(i,r,a.handle);
                    l[n]&&(delete l[n],u?delete i[o]:typeof i.removeAttribute!==G?i.removeAttribute(o):i[o]=null,Q.push(n))
                }
            }
        }
    );
    var ot,lt,ut,pt=/alpha\([^)]*\)/i,ct=/opacity\s*=\s*([^)]*)/,dt=/^(top|right|bottom|left)$/,ht=/^(none|table(?!-c[ea]).+)/,ft=/^margin/,mt=RegExp("^("+le+")(.*)$","i"),gt=RegExp("^("+le+")(?!px)[a-z%]+$","i"),vt=RegExp("^([+-])=("+le+")","i"),yt= {
            BODY:"block"
        }
        ,_t= {
            position:"absolute",visibility:"hidden",display:"block"
        }
        ,xt= {
            letterSpacing:0,fontWeight:400
        }
        ,wt=["Top","Right","Bottom","Left"],bt=["Webkit","O","Moz","ms"];
    oe.fn.extend( {
        css:function(e,i) {
            return oe.access(this,function(e,i,r) {
                    var n,a,s= {
                        }
                        ,o=0;
                    if(oe.isArray(i)) {
                        for(a=lt(e),n=i.length;
                            n>o;
                            o++)s[i[o]]=oe.css(e,i[o],!1,a);
                        return s
                    }
                    return r!==t?oe.style(e,i,r):oe.css(e,i)
                }
                ,e,i,arguments.length>1)
        }
        ,show:function() {
            return T(this,!0)
        }
        ,hide:function() {
            return T(this)
        }
        ,toggle:function(e) {
            var t="boolean"==typeof e;
            return this.each(function() {
                    (t?e:b(this))?oe(this).show():oe(this).hide()
                }
            )
        }
    }),oe.extend( {
        cssHooks: {
            opacity: {
                get:function(e,t) {
                    if(t) {
                        var i=ut(e,"opacity");
                        return""===i?"1":i
                    }
                }
            }
        },cssNumber: {
            columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0
        }
        ,cssProps: {
            float:oe.support.cssFloat?"cssFloat":"styleFloat"
        }
        ,style:function(e,i,r,n) {
            if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style) {
                var a,s,o,l=oe.camelCase(i),u=e.style;
                if(i=oe.cssProps[l]||(oe.cssProps[l]=w(u,l)),o=oe.cssHooks[i]||oe.cssHooks[l],r===t)return o&&"get"in o&&(a=o.get(e,!1,n))!==t?a:u[i];
                if("string"===(s=typeof r)&&(a=vt.exec(r))&&(r=(a[1]+1)*a[2]+parseFloat(oe.css(e,i)),s="number"),!(null==r||"number"===s&&isNaN(r)||("number"!==s||oe.cssNumber[l]||(r+="px"),oe.support.clearCloneStyle||""!==r||0!==i.indexOf("background")||(u[i]="inherit"),o&&"set"in o&&(r=o.set(e,r,n))===t)))try {
                    u[i]=r
                }
                catch(e) {
                }
            }
        }
        ,css:function(e,i,r,n) {
            var a,s,o,l=oe.camelCase(i);
            return i=oe.cssProps[l]||(oe.cssProps[l]=w(e.style,l)),(o=oe.cssHooks[i]||oe.cssHooks[l])&&"get"in o&&(s=o.get(e,!0,r)),s===t&&(s=ut(e,i,n)),"normal"===s&&i in xt&&(s=xt[i]),""===r||r?(a=parseFloat(s),!0===r||oe.isNumeric(a)?a||0:s):s
        }
        ,swap:function(e,t,i,r) {
            var n,a,s= {
                }
                ;
            for(a in t)s[a]=e.style[a],e.style[a]=t[a];
            n=i.apply(e,r||[]);
            for(a in t)e.style[a]=s[a];
            return n
        }
    }),e.getComputedStyle?(lt=function(t) {
        return e.getComputedStyle(t,null)
    }
        ,ut=function(e,i,r) {
        var n,a,s,o=r||lt(e),l=o?o.getPropertyValue(i)||o[i]:t,u=e.style;
        return o&&(""!==l||oe.contains(e.ownerDocument,e)||(l=oe.style(e,i)),gt.test(l)&&ft.test(i)&&(n=u.width,a=u.minWidth,s=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=o.width,u.width=n,u.minWidth=a,u.maxWidth=s)),l
    }
    ):V.documentElement.currentStyle&&(lt=function(e) {
        return e.currentStyle
    }
        ,ut=function(e,i,r) {
        var n,a,s,o=r||lt(e),l=o?o[i]:t,u=e.style;
        return null==l&&u&&u[i]&&(l=u[i]),gt.test(l)&&!dt.test(i)&&(n=u.left,a=e.runtimeStyle,(s=a&&a.left)&&(a.left=e.currentStyle.left),u.left="fontSize"===i?"1em":l,l=u.pixelLeft+"px",u.left=n,s&&(a.left=s)),""===l?"auto":l
    }
    ),oe.each(["height","width"],function(e,i) {
            oe.cssHooks[i]= {
                get:function(e,r,n) {
                    return r?0===e.offsetWidth&&ht.test(oe.css(e,"display"))?oe.swap(e,_t,function() {
                            return P(e,i,n)
                        }
                    ):P(e,i,n):t
                }
                ,set:function(e,t,r) {
                    var n=r&&lt(e);
                    return C(0,t,r?S(e,i,r,oe.support.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,n),n):0)
                }
            }
        }
    ),oe.support.opacity||(oe.cssHooks.opacity= {
        get:function(e,t) {
            return ct.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
        }
        ,set:function(e,t) {
            var i=e.style,r=e.currentStyle,n=oe.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=r&&r.filter||i.filter||"";
            i.zoom=1,(t>=1||""===t)&&""===oe.trim(a.replace(pt,""))&&i.removeAttribute&&(i.removeAttribute("filter"),""===t||r&&!r.filter)||(i.filter=pt.test(a)?a.replace(pt,n):a+" "+n)
        }
    }),oe(function() {
            oe.support.reliableMarginRight||(oe.cssHooks.marginRight= {
                get:function(e,i) {
                    return i?oe.swap(e, {
                            display:"inline-block"
                        }
                        ,ut,[e,"marginRight"]):t
                }
            }),!oe.support.pixelPosition&&oe.fn.position&&oe.each(["top","left"],function(e,i) {
                    oe.cssHooks[i]= {
                        get:function(e,r) {
                            return r?(r=ut(e,i),gt.test(r)?oe(e).position()[i]+"px":r):t
                        }
                    }
                }
            )
        }
    ),oe.expr&&oe.expr.filters&&(oe.expr.filters.hidden=function(e) {
        return 0>=e.offsetWidth&&0>=e.offsetHeight||!oe.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||oe.css(e,"display"))
    }
        ,oe.expr.filters.visible=function(e) {
        return!oe.expr.filters.hidden(e)
    }
    ),oe.each( {
            margin:"",padding:"",border:"Width"
        }
        ,function(e,t) {
            oe.cssHooks[e+t]= {
                expand:function(i) {
                    for(var r=0,n= {
                        }
                            ,a="string"==typeof i?i.split(" "):[i];
                        4>r;
                        r++)n[e+wt[r]+t]=a[r]||a[r-2]||a[0];
                    return n
                }
            },ft.test(e)||(oe.cssHooks[e+t].set=C)
        }
    );
    var Tt=/%20/g,Ct=/\[\]$/,St=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;
    oe.fn.extend( {
        serialize:function() {
            return oe.param(this.serializeArray())
        }
        ,serializeArray:function() {
            return this.map(function() {
                    var e=oe.prop(this,"elements");
                    return e?oe.makeArray(e):this
                }
            ).filter(function() {
                    var e=this.type;
                    return this.name&&!oe(this).is(":disabled")&&kt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!et.test(e))
                }
            ).map(function(e,t) {
                    var i=oe(this).val();
                    return null==i?null:oe.isArray(i)?oe.map(i,function(e) {
                        return {
                            name:t.name,value:e.replace(St,"\r\n")
                        }
                    }): {
                        name:t.name,value:i.replace(St,"\r\n")
                    }
                }).get()
        }
    }),oe.param=function(e,i) {
        var r,n=[],a=function(e,t) {
                t=oe.isFunction(t)?t():null==t?"":t,n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
            }
            ;
        if(i===t&&(i=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function() {
                a(this.name,this.value)
            }
        );
        else for(r in e)E(r,e[r],i,a);
        return n.join("&").replace(Tt,"+")
    }
        ,oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t) {
        oe.fn[t]=function(e,i) {
            return arguments.length>0?this.on(t,null,e,i):this.trigger(t)
        }
    }),oe.fn.hover=function(e,t) {
        return this.mouseenter(e).mouseleave(t||e)
    }
    ;
    var Mt,Et,zt=oe.now(),At=/\?/,Dt=/#.*$/,Ot=/([?&])_=[^&]*/
        ,Nt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Lt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Rt=/^(?:GET|HEAD)$/,It=/^\/\//,Bt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Ht=oe.fn.load,Ft= {
        }
        ,Xt= {
        }
        ,jt="*/
    ".concat("*");
    try {
        Et=$.href
    }
    catch(e) {
        (Et=V.createElement("a")).href="",Et=Et.href
    }
    Mt=Bt.exec(Et.toLowerCase())||[],oe.fn.load=function(e,i,r) {
        if("string"!=typeof e&&Ht)return Ht.apply(this,arguments);
        var n,a,s,o=this,l=e.indexOf(" ");
        return l>=0&&(n=e.slice(l,e.length),e=e.slice(0,l)),oe.isFunction(i)?(r=i,i=t):i&&"object"==typeof i&&(s="POST"),o.length>0&&oe.ajax( {
                url:e,type:s,dataType:"html",data:i
            }
        ).done(function(e) {
                a=arguments,o.html(n?oe("<div>").append(oe.parseHTML(e)).find(n):e)
            }
        ).complete(r&&function(e,t) {
                o.each(r,a||[e.responseText,t,e])
            }
        ),this
    }
        ,oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t) {
        oe.fn[t]=function(e) {
            return this.on(t,e)
        }
    }),oe.each(["get","post"],function(e,i) {
        oe[i]=function(e,r,n,a) {
            return oe.isFunction(r)&&(a=a||n,n=r,r=t),oe.ajax( {
                    url:e,type:i,dataType:a,data:r,success:n
                }
            )
        }
    }),oe.extend( {
        active:0,lastModified: {
        }
        ,etag: {
        }
        ,ajaxSettings: {
            url:Et,type:"GET",isLocal:Lt.test(Mt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded;
    charset=UTF-8",accepts: {
    "*":jt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"
}
    ,contents: {
    xml:/xml/,html:/html/,json:/json/
}
,responseFields: {
    xml:"responseXML",text:"responseText"
}
,converters: {
    "* text":e.String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML
}
,flatOptions: {
    url:!0,context:!0
}
},ajaxSetup:function(e,t) {
    return t?D(D(e,oe.ajaxSettings),t):D(oe.ajaxSettings,e)
}
,ajaxPrefilter:z(Ft),ajaxTransport:z(Xt),ajax:function(e,i) {
    function r(e,i,r,n) {
        var a,c,y,_,w,T=i;
        2!==x&&(x=2,l&&clearTimeout(l),p=t,o=n||"",b.readyState=e>0?4:0,r&&(_=O(d,b,r)),e>=200&&300>e||304===e?(d.ifModified&&((w=b.getResponseHeader("Last-Modified"))&&(oe.lastModified[s]=w),(w=b.getResponseHeader("etag"))&&(oe.etag[s]=w)),204===e?(a=!0,T="nocontent"):304===e?(a=!0,T="notmodified"):(a=N(d,_),T=a.state,c=a.data,y=a.error,a=!y)):(y=T,(e||!T)&&(T="error",0>e&&(e=0))),b.status=e,b.statusText=(i||T)+"",a?m.resolveWith(h,[c,T,b]):m.rejectWith(h,[b,T,y]),b.statusCode(v),v=t,u&&f.trigger(a?"ajaxSuccess":"ajaxError",[b,d,a?c:y]),g.fireWith(h,[b,T]),u&&(f.trigger("ajaxComplete",[b,d]),--oe.active||oe.event.trigger("ajaxStop")))
    }
    "object"==typeof e&&(i=e,e=t),i=i|| {
    }
    ;
    var n,a,s,o,l,u,p,c,d=oe.ajaxSetup( {
            }
            ,i),h=d.context||d,f=d.context&&(h.nodeType||h.jquery)?oe(h):oe.event,m=oe.Deferred(),g=oe.Callbacks("once memory"),v=d.statusCode|| {
            }
        ,y= {
        }
        ,_= {
        }
        ,x=0,w="canceled",b= {
            readyState:0,getResponseHeader:function(e) {
                var t;
                if(2===x) {
                    if(!c)for(c= {
                    }
                        ;
                              t=Nt.exec(o);
                    )c[t[1].toLowerCase()]=t[2];
                    t=c[e.toLowerCase()]
                }
                return null==t?null:t
            }
            ,getAllResponseHeaders:function() {
                return 2===x?o:null
            }
            ,setRequestHeader:function(e,t) {
                var i=e.toLowerCase();
                return x||(e=_[i]=_[i]||e,y[e]=t),this
            }
            ,overrideMimeType:function(e) {
                return x||(d.mimeType=e),this
            }
            ,statusCode:function(e) {
                var t;
                if(e)if(2>x)for(t in e)v[t]=[v[t],e[t]];
                else b.always(e[b.status]);
                return this
            }
            ,abort:function(e) {
                var t=e||w;
                return p&&p.abort(t),r(0,t),this
            }
        };
    if(m.promise(b).complete=g.add,b.success=b.done,b.error=b.fail,d.url=((e||d.url||Et)+"").replace(Dt,"").replace(It,Mt[1]+"//"),d.type=i.method||i.type||d.method||d.type,d.dataTypes=oe.trim(d.dataType||"*").toLowerCase().match(ue)||[""],null==d.crossDomain&&(n=Bt.exec(d.url.toLowerCase()),d.crossDomain=!(!n||n[1]===Mt[1]&&n[2]===Mt[2]&&(n[3]||("http:"===n[1]?80:443))==(Mt[3]||("http:"===Mt[1]?80:443)))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=oe.param(d.data,d.traditional)),A(Ft,d,i,b),2===x)return b;
    (u=d.global)&&0==oe.active++&&oe.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Rt.test(d.type),s=d.url,d.hasContent||(d.data&&(s=d.url+=(At.test(s)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=Ot.test(s)?s.replace(Ot,"$1_="+zt++):s+(At.test(s)?"&":"?")+"_="+zt++)),d.ifModified&&(oe.lastModified[s]&&b.setRequestHeader("If-Modified-Since",oe.lastModified[s]),oe.etag[s]&&b.setRequestHeader("If-None-Match",oe.etag[s])),(d.data&&d.hasContent&&!1!==d.contentType||i.contentType)&&b.setRequestHeader("Content-Type",d.contentType),b.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+jt+";
        q=0.01":""):d.accepts["*"]);
    for(a in d.headers)b.setRequestHeader(a,d.headers[a]);
    if(d.beforeSend&&(!1===d.beforeSend.call(h,b,d)||2===x))return b.abort();
    w="abort";
    for(a in {
        success:1,error:1,complete:1
    }
        )b[a](d[a]);
    if(p=A(Xt,d,i,b)) {
        b.readyState=1,u&&f.trigger("ajaxSend",[b,d]),d.async&&d.timeout>0&&(l=setTimeout(function() {
                b.abort("timeout")
            }
            ,d.timeout));
        try {
            x=1,p.send(y,r)
        }
        catch(e) {
            if(!(2>x))throw e;
            r(-1,e)
        }
    }else r(-1,"No Transport");
    return b
}
,getScript:function(e,i) {
    return oe.get(e,t,i,"script")
}
,getJSON:function(e,t,i) {
    return oe.get(e,t,i,"json")
}
}),oe.ajaxSetup( {
        accepts: {
            script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }
        ,contents: {
            script:/(?:java|ecma)script/
        }
        ,converters: {
            "text script":function(e) {
                return oe.globalEval(e),e
            }
        }
    }
),oe.ajaxPrefilter("script",function(e) {
        e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
    }
),oe.ajaxTransport("script",function(e) {
    if(e.crossDomain) {
        var i,r=V.head||oe("head")[0]||V.documentElement;
        return {
            send:function(t,n) {
                (i=V.createElement("script")).async=!0,e.scriptCharset&&(i.charset=e.scriptCharset),i.src=e.url,i.onload=i.onreadystatechange=function(e,t) {
                    (t||!i.readyState||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),i=null,t||n(200,"success"))
                }
                    ,r.insertBefore(i,r.firstChild)
            }
            ,abort:function() {
                i&&i.onload(t,!0)
            }
        }
    }
});
var Yt=[],qt=/(=)\?(?=&|$)|\?\?/;
oe.ajaxSetup( {
    jsonp:"callback",jsonpCallback:function() {
        var e=Yt.pop()||oe.expando+"_"+zt++;
        return this[e]=!0,e
    }
}),oe.ajaxPrefilter("json jsonp",function(i,r,n) {
        var a,s,o,l=!1!==i.jsonp&&(qt.test(i.url)?"url":"string"==typeof i.data&&!(i.contentType||"").indexOf("application/x-www-form-urlencoded")&&qt.test(i.data)&&"data");
        return l||"jsonp"===i.dataTypes[0]?(a=i.jsonpCallback=oe.isFunction(i.jsonpCallback)?i.jsonpCallback():i.jsonpCallback,l?i[l]=i[l].replace(qt,"$1"+a):!1!==i.jsonp&&(i.url+=(At.test(i.url)?"&":"?")+i.jsonp+"="+a),i.converters["script json"]=function() {
            return o||oe.error(a+" was not called"),o[0]
        }
            ,i.dataTypes[0]="json",s=e[a],e[a]=function() {
            o=arguments
        }
            ,n.always(function() {
                e[a]=s,i[a]&&(i.jsonpCallback=r.jsonpCallback,Yt.push(a)),o&&oe.isFunction(s)&&s(o[0]),o=s=t
            }
        ),"script"):t
    }
);
var Wt,Gt,Vt=0,$t=e.ActiveXObject&&function() {
            var e;
            for(e in Wt)Wt[e](t,!0)
        }
    ;
oe.ajaxSettings.xhr=e.ActiveXObject?function() {
    return!this.isLocal&&L()||R()
}
    :L,Gt=oe.ajaxSettings.xhr(),oe.support.cors=!!Gt&&"withCredentials"in Gt,(Gt=oe.support.ajax=!!Gt)&&oe.ajaxTransport(function(i) {
    if(!i.crossDomain||oe.support.cors) {
        var r;
        return {
            send:function(n,a) {
                var s,o,l=i.xhr();
                if(i.username?l.open(i.type,i.url,i.async,i.username,i.password):l.open(i.type,i.url,i.async),i.xhrFields)for(o in i.xhrFields)l[o]=i.xhrFields[o];
                i.mimeType&&l.overrideMimeType&&l.overrideMimeType(i.mimeType),i.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");
                try {
                    for(o in n)l.setRequestHeader(o,n[o])
                }
                catch(e) {
                }
                l.send(i.hasContent&&i.data||null),r=function(e,n) {
                    var o,u,p,c;
                    try {
                        if(r&&(n||4===l.readyState))if(r=t,s&&(l.onreadystatechange=oe.noop,$t&&delete Wt[s]),n)4!==l.readyState&&l.abort();
                        else {
                            c= {
                            }
                                ,o=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(c.text=l.responseText);
                            try {
                                p=l.statusText
                            }
                            catch(e) {
                                p=""
                            }
                            o||!i.isLocal||i.crossDomain?1223===o&&(o=204):o=c.text?200:404
                        }
                    }catch(e) {
                        n||a(-1,e)
                    }
                    c&&a(o,p,c,u)
                }
                    ,i.async?4===l.readyState?setTimeout(r):(s=++Vt,$t&&(Wt||(Wt= {
                }
                    ,oe(e).unload($t)),Wt[s]=r),l.onreadystatechange=r):r()
            }
            ,abort:function() {
                r&&r(t,!0)
            }
        }
    }
});
var Ut,Zt,Kt=/^(?:toggle|show|hide)$/,Qt=RegExp("^(?:([+-])=|)("+le+")([a-z%]*)$","i"),Jt=/queueHooks$/,ei=[function(e,t,i) {
        var r,n,a,s,o,l,u,p,c,d=this,h=e.style,f= {
            }
            ,m=[],g=e.nodeType&&b(e);
        i.queue||(null==(p=oe._queueHooks(e,"fx")).unqueued&&(p.unqueued=0,c=p.empty.fire,p.empty.fire=function() {
            p.unqueued||c()
        }
        ),p.unqueued++,d.always(function() {
                d.always(function() {
                        p.unqueued--,oe.queue(e,"fx").length||p.empty.fire()
                    }
                )
            }
        )),1===e.nodeType&&("height"in t||"width"in t)&&(i.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===oe.css(e,"display")&&"none"===oe.css(e,"float")&&(oe.support.inlineBlockNeedsLayout&&"inline"!==k(e.nodeName)?h.zoom=1:h.display="inline-block")),i.overflow&&(h.overflow="hidden",oe.support.shrinkWrapBlocks||d.always(function() {
                h.overflow=i.overflow[0],h.overflowX=i.overflow[1],h.overflowY=i.overflow[2]
            }
        ));
        for(n in t)if(s=t[n],Kt.exec(s)) {
            if(delete t[n],l=l||"toggle"===s,s===(g?"hide":"show"))continue;
            m.push(n)
        }
        if(a=m.length) {
            "hidden"in(o=oe._data(e,"fxshow")||oe._data(e,"fxshow", {
                }
            ))&&(g=o.hidden),l&&(o.hidden=!g),g?oe(e).show():d.done(function() {
                    oe(e).hide()
                }
            ),d.done(function() {
                    var t;
                    oe._removeData(e,"fxshow");
                    for(t in f)oe.style(e,t,f[t])
                }
            );
            for(n=0;
                a>n;
                n++)r=m[n],u=d.createTween(r,g?o[r]:0),f[r]=o[r]||oe.style(e,r),r in o||(o[r]=u.start,g&&(u.end=u.start,u.start="width"===r||"height"===r?1:0))
        }
    }],ti= {
        "*":[function(e,t) {
            var i,r,n=this.createTween(e,t),a=Qt.exec(t),s=n.cur(),o=+s||0,l=1,u=20;
            if(a) {
                if(i=+a[2],"px"!==(r=a[3]||(oe.cssNumber[e]?"":"px"))&&o) {
                    o=oe.css(n.elem,e,!0)||i||1;
                    do {
                        l=l||".5",o/=l,oe.style(n.elem,e,o+r)
                    }
                    while(l!==(l=n.cur()/s)&&1!==l&&--u)
                }
                n.unit=r,n.start=o,n.end=a[1]?o+(a[1]+1)*i:i
            }
            return n
        }
        ]
    }
    ;
oe.Animation=oe.extend(H, {
    tweener:function(e,t) {
        oe.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
        for(var i,r=0,n=e.length;
            n>r;
            r++)i=e[r],ti[i]=ti[i]||[],ti[i].unshift(t)
    }
    ,prefilter:function(e,t) {
        t?ei.unshift(e):ei.push(e)
    }
}),oe.Tween=X,X.prototype= {
    constructor:X,init:function(e,t,i,r,n,a) {
        this.elem=e,this.prop=i,this.easing=n||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=a||(oe.cssNumber[i]?"":"px")
    }
    ,cur:function() {
        var e=X.propHooks[this.prop];
        return e&&e.get?e.get(this):X.propHooks._default.get(this)
    }
    ,run:function(e) {
        var t,i=X.propHooks[this.prop];
        return this.pos=t=this.options.duration?oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):X.propHooks._default.set(this),this
    }
},X.prototype.init.prototype=X.prototype,X.propHooks= {
    _default: {
        get:function(e) {
            var t;
            return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=oe.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]
        }
        ,set:function(e) {
            oe.fx.step[e.prop]?oe.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[oe.cssProps[e.prop]]||oe.cssHooks[e.prop])?oe.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
        }
    }
}
    ,X.propHooks.scrollTop=X.propHooks.scrollLeft= {
    set:function(e) {
        e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
    }
},oe.each(["toggle","show","hide"],function(e,t) {
    var i=oe.fn[t];
    oe.fn[t]=function(e,r,n) {
        return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(j(t,!0),e,r,n)
    }
}),oe.fn.extend( {
    fadeTo:function(e,t,i,r) {
        return this.filter(b).css("opacity",0).show().end().animate( {
                opacity:t
            }
            ,e,i,r)
    }
    ,animate:function(e,t,i,r) {
        var n=oe.isEmptyObject(e),a=oe.speed(t,i,r),s=function() {
                var t=H(this,oe.extend( {
                    }
                    ,e),a);
                s.finish=function() {
                    t.stop(!0)
                }
                    ,(n||oe._data(this,"finish"))&&t.stop(!0)
            }
            ;
        return s.finish=s,n||!1===a.queue?this.each(s):this.queue(a.queue,s)
    }
    ,stop:function(e,i,r) {
        var n=function(e) {
                var t=e.stop;
                delete e.stop,t(r)
            }
            ;
        return"string"!=typeof e&&(r=i,i=e,e=t),i&&!1!==e&&this.queue(e||"fx",[]),this.each(function() {
                var t=!0,i=null!=e&&e+"queueHooks",a=oe.timers,s=oe._data(this);
                if(i)s[i]&&s[i].stop&&n(s[i]);
                else for(i in s)s[i]&&s[i].stop&&Jt.test(i)&&n(s[i]);
                for(i=a.length;
                    i--;
                )a[i].elem!==this||null!=e&&a[i].queue!==e||(a[i].anim.stop(r),t=!1,a.splice(i,1));
                (t||!r)&&oe.dequeue(this,e)
            }
        )
    }
    ,finish:function(e) {
        return!1!==e&&(e=e||"fx"),this.each(function() {
                var t,i=oe._data(this),r=i[e+"queue"],n=i[e+"queueHooks"],a=oe.timers,s=r?r.length:0;
                for(i.finish=!0,oe.queue(this,e,[]),n&&n.cur&&n.cur.finish&&n.cur.finish.call(this),t=a.length;
                    t--;
                )a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));
                for(t=0;
                    s>t;
                    t++)r[t]&&r[t].finish&&r[t].finish.call(this);
                delete i.finish
            }
        )
    }
}),oe.each( {
    slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn: {
        opacity:"show"
    }
    ,fadeOut: {
        opacity:"hide"
    }
    ,fadeToggle: {
        opacity:"toggle"
    }
},function(e,t) {
    oe.fn[e]=function(e,i,r) {
        return this.animate(t,e,i,r)
    }
}),oe.speed=function(e,t,i) {
    var r=e&&"object"==typeof e?oe.extend( {
            }
            ,e): {
            complete:i||!i&&t||oe.isFunction(e)&&e,duration:e,easing:i&&t||t&&!oe.isFunction(t)&&t
        }
        ;
    return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function() {
        oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)
    }
        ,r
}
    ,oe.easing= {
    linear:function(e) {
        return e
    }
    ,swing:function(e) {
        return.5-Math.cos(e*Math.PI)/2
    }
},oe.timers=[],oe.fx=X.prototype.init,oe.fx.tick=function() {
    var e,i=oe.timers,r=0;
    for(Ut=oe.now();
        i.length>r;
        r++)(e=i[r])()||i[r]!==e||i.splice(r--,1);
    i.length||oe.fx.stop(),Ut=t
}
    ,oe.fx.timer=function(e) {
    e()&&oe.timers.push(e)&&oe.fx.start()
}
    ,oe.fx.interval=13,oe.fx.start=function() {
    Zt||(Zt=setInterval(oe.fx.tick,oe.fx.interval))
}
    ,oe.fx.stop=function() {
    clearInterval(Zt),Zt=null
}
    ,oe.fx.speeds= {
    slow:600,fast:200,_default:400
}
    ,oe.fx.step= {
}
    ,oe.expr&&oe.expr.filters&&(oe.expr.filters.animated=function(e) {
    return oe.grep(oe.timers,function(t) {
            return e===t.elem
        }
    ).length
}
),oe.fn.offset=function(e) {
    if(arguments.length)return e===t?this:this.each(function(t) {
            oe.offset.setOffset(this,e,t)
        }
    );
    var i,r,n= {
            top:0,left:0
        }
        ,a=this[0],s=a&&a.ownerDocument;
    return s?(i=s.documentElement,oe.contains(i,a)?(typeof a.getBoundingClientRect!==G&&(n=a.getBoundingClientRect()),r=Y(s), {
        top:n.top+(r.pageYOffset||i.scrollTop)-(i.clientTop||0),left:n.left+(r.pageXOffset||i.scrollLeft)-(i.clientLeft||0)
    }
    ):n):void 0
}
    ,oe.offset= {
    setOffset:function(e,t,i) {
        var r=oe.css(e,"position");
        "static"===r&&(e.style.position="relative");
        var n,a,s=oe(e),o=s.offset(),l=oe.css(e,"top"),u=oe.css(e,"left"),p= {
            }
            ,c= {
            }
            ;
        ("absolute"===r||"fixed"===r)&&oe.inArray("auto",[l,u])>-1?(c=s.position(),n=c.top,a=c.left):(n=parseFloat(l)||0,a=parseFloat(u)||0),oe.isFunction(t)&&(t=t.call(e,i,o)),null!=t.top&&(p.top=t.top-o.top+n),null!=t.left&&(p.left=t.left-o.left+a),"using"in t?t.using.call(e,p):s.css(p)
    }
},oe.fn.extend( {
    position:function() {
        if(this[0]) {
            var e,t,i= {
                    top:0,left:0
                }
                ,r=this[0];
            return"fixed"===oe.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(i=e.offset()),i.top+=oe.css(e[0],"borderTopWidth",!0),i.left+=oe.css(e[0],"borderLeftWidth",!0)), {
                top:t.top-i.top-oe.css(r,"marginTop",!0),left:t.left-i.left-oe.css(r,"marginLeft",!0)
            }
        }
    }
    ,offsetParent:function() {
        return this.map(function() {
                for(var e=this.offsetParent||V.documentElement;
                    e&&!oe.nodeName(e,"html")&&"static"===oe.css(e,"position");
                )e=e.offsetParent;
                return e||V.documentElement
            }
        )
    }
}),oe.each( {
        scrollLeft:"pageXOffset",scrollTop:"pageYOffset"
    }
    ,function(e,i) {
        var r=/Y/.test(i);
        oe.fn[e]=function(n) {
            return oe.access(this,function(e,n,a) {
                    var s=Y(e);
                    return a===t?s?i in s?s[i]:s.document.documentElement[n]:e[n]:(s?s.scrollTo(r?oe(s).scrollLeft():a,r?a:oe(s).scrollTop()):e[n]=a,t)
                }
                ,e,n,arguments.length,null)
        }
    }),oe.each( {
        Height:"height",Width:"width"
    }
    ,function(e,i) {
        oe.each( {
                padding:"inner"+e,content:i,"":"outer"+e
            }
            ,function(r,n) {
                oe.fn[n]=function(n,a) {
                    var s=arguments.length&&(r||"boolean"!=typeof n),o=r||(!0===n||!0===a?"margin":"border");
                    return oe.access(this,function(i,r,n) {
                            var a;
                            return oe.isWindow(i)?i.document.documentElement["client"+e]:9===i.nodeType?(a=i.documentElement,Math.max(i.body["scroll"+e],a["scroll"+e],i.body["offset"+e],a["offset"+e],a["client"+e])):n===t?oe.css(i,r,o):oe.style(i,r,n,o)
                        }
                        ,i,s?n:t,s,null)
                }
            })
    }
),e.jQuery=e.$=oe,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function() {
        return oe
    }
)
}
(window),function(e) {
    var t=!1;
    if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t) {
        var i=window.Cookies,r=window.Cookies=e();
        r.noConflict=function() {
            return window.Cookies=i,r
        }
    }
}
(function() {
    function e() {
        for(var e=0,t= {
        }
            ;
            e<arguments.length;
            e++) {
            var i=arguments[e];
            for(var r in i)t[r]=i[r]
        }
        return t
    }
    function t(i) {
        function r(t,n,a) {
            var s;
            if("undefined"!=typeof document) {
                if(arguments.length>1) {
                    if("number"==typeof(a=e( {
                                path:"/"
                            }
                            ,r.defaults,a)).expires) {
                        var o=new Date;
                        o.setMilliseconds(o.getMilliseconds()+864e5*a.expires),a.expires=o
                    }
                    a.expires=a.expires?a.expires.toUTCString():"";
                    try {
                        s=JSON.stringify(n),/^[\ {
	\[]/.test(s)&&(n=s)
                    }
                    catch(e) {
                    }
                    n=i.write?i.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);
                    var l="";
                    for(var u in a)a[u]&&(l+=";
                    "+u,!0!==a[u]&&(l+="="+a[u]));
                    return document.cookie=t+"="+n+l
                }
                t||(s= {
                }
                );
                for(var p=document.cookie?document.cookie.split(";
                    "):[],c=/(%[0-9A-Z] {
                    2
            }
        )+/g,d=0;
            d<p.length;
            d++) {
                var h=p[d].split("="),f=h.slice(1).join("=");
                '"'===f.charAt(0)&&(f=f.slice(1,-1));
                try {
                    var m=h[0].replace(c,decodeURIComponent);
                    if(f=i.read?i.read(f,m):i(f,m)||f.replace(c,decodeURIComponent),this.json)try {
                        f=JSON.parse(f)
                    }
                    catch(e) {
                    }
                    if(t===m) {
                        s=f;
                        break
                    }
                    t||(s[m]=f)
                }
                catch(e) {
                }
            }return s
        }
    }return r.set=r,r.get=function(e) {
        return r.call(r,e)
    }
        ,r.getJSON=function() {
        return r.apply( {
                json:!0
            }
            ,[].slice.call(arguments))
    }
        ,r.defaults= {
    }
        ,r.remove=function(t,i) {
        r(t,"",e(i, {
                expires:-1
            }
        ))
    }
        ,r.withConverter=t,r
}
return t(function() {
    }
)
}
),function(e,t,i) {
    function r(e,t) {
        return typeof e===t
    }
    function n(e) {
        var t=C.className,i=w._config.classPrefix||"";
        if(S&&(t=t.baseVal),w._config.enableJSClass) {
            var r=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");
            t=t.replace(r,"$1"+i+"js$2")
        }
        w._config.enableClasses&&(t+=" "+i+e.join(" "+i),S?C.className.baseVal=t:C.className=t)
    }
    function a(e,t) {
        if("object"==typeof e)for(var i in e)b(e,i)&&a(i,e[i]);
        else {
            var r=(e=e.toLowerCase()).split("."),s=w[r[0]];
            if(2==r.length&&(s=s[r[1]]),void 0!==s)return w;
            t="function"==typeof t?t():t,1==r.length?w[r[0]]=t:(!w[r[0]]||w[r[0]]instanceof Boolean||(w[r[0]]=new Boolean(w[r[0]])),w[r[0]][r[1]]=t),n([(t&&0!=t?"":"no-")+r.join("-")]),w._trigger(e,t)
        }
        return w
    }
    function s() {
        return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)
    }
    function o() {
        var e=t.body;
        return e||(e=s(S?"svg":"body"),e.fake=!0),e
    }
    function l(e,i,r,n) {
        var a,l,u,p,c="modernizr",d=s("div"),h=o();
        if(parseInt(r,10))for(;
            r--;
        )u=s("div"),u.id=n?n[r]:c+(r+1),d.appendChild(u);
        return a=s("style"),a.type="text/css",a.id="s"+c,(h.fake?h:d).appendChild(a),h.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=c,h.fake&&(h.style.background="",h.style.overflow="hidden",p=C.style.overflow,C.style.overflow="hidden",C.appendChild(h)),l=i(d,e),h.fake?(h.parentNode.removeChild(h),C.style.overflow=p,C.offsetHeight):d.parentNode.removeChild(d),!!l
    }
    function u(e,t) {
        return!!~(""+e).indexOf(t)
    }
    function p(e) {
        return e.replace(/([A-Z])/g,function(e,t) {
                return"-"+t.toLowerCase()
            }
        ).replace(/^ms-/,"-ms-")
    }
    function c(t,i,r) {
        var n;
        if("getComputedStyle"in e) {
            n=getComputedStyle.call(e,t,i);
            var a=e.console;
            null!==n?r&&(n=n.getPropertyValue(r)):a&&a[a.error?"error":"log"].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")
        }
        else n=!i&&t.currentStyle&&t.currentStyle[r];
        return n
    }
    function d(t,r) {
        var n=t.length;
        if("CSS"in e&&"supports"in e.CSS) {
            for(;
                n--;
            )if(e.CSS.supports(p(t[n]),r))return!0;
            return!1
        }
        if("CSSSupportsRule"in e) {
            for(var a=[];
                n--;
            )a.push("("+p(t[n])+":"+r+")");
            return a=a.join(" or "),l("@supports ("+a+") {
	#modernizr {
                position: absolute;
            }
        }",function(e) {
        return"absolute"==c(e,null,"position")
    }
)
}
return i
}
function h(e) {
    return e.replace(/([a-z])-([a-z])/g,function(e,t,i) {
            return t+i.toUpperCase()
        }
    ).replace(/^-/,"")
}
function f(e,t,n,a) {
    function o() {
        p&&(delete D.style,delete D.modElem)
    }
    if(a=!r(a,"undefined")&&a,!r(n,"undefined")) {
        var l=d(e,n);
        if(!r(l,"undefined"))return l
    }
    for(var p,c,f,m,g,v=["modernizr","tspan","samp"];
        !D.style&&v.length;
    )p=!0,D.modElem=s(v.shift()),D.style=D.modElem.style;
    for(f=e.length,c=0;
        f>c;
        c++)if(m=e[c],g=D.style[m],u(m,"-")&&(m=h(m)),D.style[m]!==i) {
        if(a||r(n,"undefined"))return o(),"pfx"!=t||m;
        try {
            D.style[m]=n
        }
        catch(e) {
        }
        if(D.style[m]!=g)return o(),"pfx"!=t||m
    }
    return o(),!1
}
function m(e,t) {
    return function() {
        return e.apply(t,arguments)
    }
}function g(e,t,i) {
    var n;
    for(var a in e)if(e[a]in t)return!1===i?e[a]:(n=t[e[a]],r(n,"function")?m(n,i||t):n);
    return!1
}
function v(e,t,i,n,a) {
    var s=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+z.join(s+" ")+s).split(" ");
    return r(t,"string")||r(t,"undefined")?f(o,t,n,a):(o=(e+" "+O.join(s+" ")+s).split(" "),g(o,t,i))
}
function y(e,t,r) {
    return v(e,i,i,t,r)
}
var _=[],x= {
        _version:"3.4.0",_config: {
            classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0
        }
        ,_q:[],on:function(e,t) {
            var i=this;
            setTimeout(function() {
                    t(i[e])
                }
                ,0)
        }
        ,addTest:function(e,t,i) {
            _.push( {
                    name:e,fn:t,options:i
                }
            )
        }
        ,addAsyncTest:function(e) {
            _.push( {
                    name:null,fn:e
                }
            )
        }
    },w=function() {
    }
    ;
w.prototype=x,w=new w;
var b,T=[],C=t.documentElement,S="svg"===C.nodeName.toLowerCase();
!function() {
    var e= {
    }
        .hasOwnProperty;
    b=r(e,"undefined")||r(e.call,"undefined")?function(e,t) {
        return t in e&&r(e.constructor.prototype[t],"undefined")
    }
        :function(t,i) {
        return e.call(t,i)
    }
}(),x._l= {
}
    ,x.on=function(e,t) {
    this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout(function() {
            w._trigger(e,w[e])
        }
        ,0)
}
    ,x._trigger=function(e,t) {
    if(this._l[e]) {
        var i=this._l[e];
        setTimeout(function() {
                var e;
                for(e=0;
                    e<i.length;
                    e++)(0,i[e])(t)
            }
            ,0),delete this._l[e]
    }
},w._q.push(function() {
        x.addTest=a
    }
);
var P=function() {
    var t=e.matchMedia||e.msMatchMedia;
    return t?function(e) {
        var i=t(e);
        return i&&i.matches||!1
    }
        :function(t) {
        var i=!1;
        return l("@media "+t+" {
	#modernizr {
            position: absolute;
        }
    }",function(t) {
    i="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position
}
),i
}
}();
x.mq=P,w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),w.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),w.addTest("inlinesvg",function() {
        var e=s("div");
        return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)
    }
),w.addTest("video",function() {
        var e=s("video"),t=!1;
        try {
            (t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg;
            codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4;
            codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm;
            codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm;
            codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL;
            codecs="avc1.42E01E"').replace(/^no$/,""))
        }
        catch(e) {
        }
        return t
    }
),w.addTest("canvas",function() {
        var e=s("canvas");
        return!(!e.getContext||!e.getContext("2d"))
    }
);
var k=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];
x._prefixes=k;
var M=x.testStyles=l;
w.addTest("touchevents",function() {
    var i;
    if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)i=!0;
    else {
        var r=["@media (",k.join("touch-enabled),("),"heartz",")"," {
	#modernizr {
            top:9px;
            position:absolute
        }
    }"].join("");
    M(r,function(e) {
            i=9===e.offsetTop
        }
    )
}
return i
}
);
var E="Moz O ms Webkit",z=x._config.usePrefixes?E.split(" "):[];
x._cssomPrefixes=z;
var A= {
        elem:s("modernizr")
    }
    ;
w._q.push(function() {
        delete A.elem
    }
);
var D= {
        style:A.elem.style
    }
    ;
w._q.unshift(function() {
        delete D.style
    }
);
var O=x._config.usePrefixes?E.toLowerCase().split(" "):[];
x._domPrefixes=O,x.testAllProps=v,x.testAllProps=y,w.addTest("csstransforms",function() {
        return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)
    }
);
var N="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;
w.addTest("supports",N||L),w.addTest("csstransforms3d",function() {
        var e=!!y("perspective","1px",!0),t=w._config.usePrefixes;
        if(e&&(!t||"webkitPerspective"in C.style)) {
            var i;
            w.supports?i="@supports (perspective: 1px)":(i="@media (transform-3d)",t&&(i+=",(-webkit-transform-3d)")),M("#modernizr {
            width:0;
            height:0
        }
        "+(i+=" {
        #modernizr {
                width:7px;
                height:18px;
                margin:0;
                padding:0;
                border:0
            }
        }"),function(t) {
        e=7===t.offsetWidth&&18===t.offsetHeight
    }
)
}
return e
}
),w.addTest("csstransitions",y("transition","all",!0)),w.addTest("cssmask",y("maskRepeat","repeat-x",!0)),function() {
    var e,t,i,n,a,s,o;
    for(var l in _)if(_.hasOwnProperty(l)) {
        if(e=[],(t=_[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;
                                                                                                                         i<t.options.aliases.length;
                                                                                                                         i++)e.push(t.options.aliases[i].toLowerCase());
        for(n=r(t.fn,"function")?t.fn():t.fn,a=0;
            a<e.length;
            a++)s=e[a],1===(o=s.split(".")).length?w[o[0]]=n:(!w[o[0]]||w[o[0]]instanceof Boolean||(w[o[0]]=new Boolean(w[o[0]])),w[o[0]][o[1]]=n),T.push((n?"":"no-")+o.join("-"))
    }
}(),n(T),delete x.addTest,delete x.addAsyncTest;
for(var R=0;
    R<w._q.length;
    R++)w._q[R]();
e.Modernizr=w
}
(window,document),function() {
    "use strict";
    var e,t=function(r,n) {
        function a(e) {
            return Math.floor(e)
        }
        function s() {
            var e=w.params.autoplay,t=w.slides.eq(w.activeIndex);
            t.attr("data-swiper-autoplay")&&(e=t.attr("data-swiper-autoplay")||w.params.autoplay),w.autoplayTimeoutId=setTimeout(function() {
                    w.params.loop?(w.fixLoop(),w._slideNext(),w.emit("onAutoplay",w)):w.isEnd?n.autoplayStopOnLast?w.stopAutoplay():(w._slideTo(0),w.emit("onAutoplay",w)):(w._slideNext(),w.emit("onAutoplay",w))
                }
                ,e)
        }
        function o(t,i) {
            var r=e(t.target);
            if(!r.is(i))if("string"==typeof i)r=r.parents(i);
            else if(i.nodeType) {
                var n;
                return r.parents().each(function(e,t) {
                        t===i&&(n=i)
                    }
                ),n?i:void 0
            }
            if(0!==r.length)return r[0]
        }
        function l(e,t) {
            t=t|| {
            }
            ;
            var i=new(window.MutationObserver||window.WebkitMutationObserver)(function(e) {
                    e.forEach(function(e) {
                            w.onResize(!0),w.emit("onObserverUpdate",w,e)
                        }
                    )
                }
            );
            i.observe(e, {
                    attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData
                }
            ),w.observers.push(i)
        }
        function u(e) {
            e.originalEvent&&(e=e.originalEvent);
            var t=e.keyCode||e.charCode;
            if(!w.params.allowSwipeToNext&&(w.isHorizontal()&&39===t||!w.isHorizontal()&&40===t))return!1;
            if(!w.params.allowSwipeToPrev&&(w.isHorizontal()&&37===t||!w.isHorizontal()&&38===t))return!1;
            if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))) {
                if(37===t||39===t||38===t||40===t) {
                    var i=!1;
                    if(w.container.parents("."+w.params.slideClass).length>0&&0===w.container.parents("."+w.params.slideActiveClass).length)return;
                    var r= {
                            left:window.pageXOffset,top:window.pageYOffset
                        }
                        ,n=window.innerWidth,a=window.innerHeight,s=w.container.offset();
                    w.rtl&&(s.left=s.left-w.container[0].scrollLeft);
                    for(var o=[[s.left,s.top],[s.left+w.width,s.top],[s.left,s.top+w.height],[s.left+w.width,s.top+w.height]],l=0;
                        l<o.length;
                        l++) {
                        var u=o[l];
                        u[0]>=r.left&&u[0]<=r.left+n&&u[1]>=r.top&&u[1]<=r.top+a&&(i=!0)
                    }
                    if(!i)return
                }
                w.isHorizontal()?(37!==t&&39!==t||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===t&&!w.rtl||37===t&&w.rtl)&&w.slideNext(),(37===t&&!w.rtl||39===t&&w.rtl)&&w.slidePrev()):(38!==t&&40!==t||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&w.slideNext(),38===t&&w.slidePrev()),w.emit("onKeyPress",w,t)
            }
        }function p(e) {
            var t=0,i=0,r=0,n=0;
            return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),r=10*t,n=10*i,"deltaY"in e&&(n=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||n)&&e.deltaMode&&(1===e.deltaMode?(r*=40,n*=40):(r*=800,n*=800)),r&&!t&&(t=r<1?-1:1),n&&!i&&(i=n<1?-1:1), {
                spinX:t,spinY:i,pixelX:r,pixelY:n
            }
        }function c(e) {
            e.originalEvent&&(e=e.originalEvent);
            var t=0,i=w.rtl?-1:1,r=p(e);
            if(w.params.mousewheelForceToAxis)if(w.isHorizontal()) {
                if(!(Math.abs(r.pixelX)>Math.abs(r.pixelY)))return;
                t=r.pixelX*i
            }
            else {
                if(!(Math.abs(r.pixelY)>Math.abs(r.pixelX)))return;
                t=r.pixelY
            }
            else t=Math.abs(r.pixelX)>Math.abs(r.pixelY)?-r.pixelX*i:-r.pixelY;
            if(0!==t) {
                if(w.params.mousewheelInvert&&(t=-t),w.params.freeMode) {
                    var n=w.getWrapperTranslate()+t*w.params.mousewheelSensitivity,a=w.isBeginning,s=w.isEnd;
                    if(n>=w.minTranslate()&&(n=w.minTranslate()),n<=w.maxTranslate()&&(n=w.maxTranslate()),w.setWrapperTransition(0),w.setWrapperTranslate(n),w.updateProgress(),w.updateActiveIndex(),(!a&&w.isBeginning||!s&&w.isEnd)&&w.updateClasses(),w.params.freeModeSticky?(clearTimeout(w.mousewheel.timeout),w.mousewheel.timeout=setTimeout(function() {
                                w.slideReset()
                            }
                            ,300)):w.params.lazyLoading&&w.lazy&&w.lazy.load(),w.emit("onScroll",w,e),w.params.autoplay&&w.params.autoplayDisableOnInteraction&&w.stopAutoplay(),0===n||n===w.maxTranslate())return
                }
                else {
                    if((new window.Date).getTime()-w.mousewheel.lastScrollTime>60)if(t<0)if(w.isEnd&&!w.params.loop||w.animating) {
                        if(w.params.mousewheelReleaseOnEdges)return!0
                    }
                    else w.slideNext(),w.emit("onScroll",w,e);
                    else if(w.isBeginning&&!w.params.loop||w.animating) {
                        if(w.params.mousewheelReleaseOnEdges)return!0
                    }
                    else w.slidePrev(),w.emit("onScroll",w,e);
                    w.mousewheel.lastScrollTime=(new window.Date).getTime()
                }
                return e.preventDefault?e.preventDefault():e.returnValue=!1,!1
            }
        }function d(t,i) {
            t=e(t);
            var r,n,a,s=w.rtl?-1:1;
            r=t.attr("data-swiper-parallax")||"0",n=t.attr("data-swiper-parallax-x"),a=t.attr("data-swiper-parallax-y"),n||a?(n=n||"0",a=a||"0"):w.isHorizontal()?(n=r,a="0"):(a=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*i*s+"%":n*i*s+"px",a=a.indexOf("%")>=0?parseInt(a,10)*i+"%":a*i+"px",t.transform("translate3d("+n+", "+a+",0px)")
        }
        function h(e) {
            return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e
        }
        if(!(this instanceof t))return new t(r,n);
        var f= {
            direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow: {
                rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0
            }
            ,flip: {
                slideShadows:!0,limitRotation:!0
            }
            ,cube: {
                slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94
            }
            ,fade: {
                crossFade:!1
            }
            ,parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {
        {index
        }
    }",runCallbacksOnInit:!0
}
    ,m=n&&n.virtualTranslate;
n=n|| {
}
;
var g= {
    }
    ;
for(var v in n)if("object"!=typeof n[v]||null===n[v]||n[v].nodeType||n[v]===window||n[v]===document||void 0!==i&&n[v]instanceof i||"undefined"!=typeof jQuery&&n[v]instanceof jQuery)g[v]=n[v];
else {
    g[v]= {
    }
    ;
    for(var y in n[v])g[v][y]=n[v][y]
}
for(var _ in f)if(void 0===n[_])n[_]=f[_];
else if("object"==typeof n[_])for(var x in f[_])void 0===n[_][x]&&(n[_][x]=f[_][x]);
var w=this;
if(w.params=n,w.originalParams=g,w.classNames=[],void 0!==e&&void 0!==i&&(e=i),(void 0!==e||(e=void 0===i?window.Dom7||window.Zepto||window.jQuery:i))&&(w.$=e,w.currentBreakpoint=void 0,w.getActiveBreakpoint=function() {
        if(!w.params.breakpoints)return!1;
        var e,t=!1,i=[];
        for(e in w.params.breakpoints)w.params.breakpoints.hasOwnProperty(e)&&i.push(e);
        i.sort(function(e,t) {
                return parseInt(e,10)>parseInt(t,10)
            }
        );
        for(var r=0;
            r<i.length;
            r++)(e=i[r])>=window.innerWidth&&!t&&(t=e);
        return t||"max"
    }
        ,w.setBreakpoint=function() {
        var e=w.getActiveBreakpoint();
        if(e&&w.currentBreakpoint!==e) {
            var t=e in w.params.breakpoints?w.params.breakpoints[e]:w.originalParams,i=w.params.loop&&t.slidesPerView!==w.params.slidesPerView;
            for(var r in t)w.params[r]=t[r];
            w.currentBreakpoint=e,i&&w.destroyLoop&&w.reLoop(!0)
        }
    },w.params.breakpoints&&w.setBreakpoint(),w.container=e(r),0!==w.container.length)) {
    if(w.container.length>1) {
        var b=[];
        return w.container.each(function() {
                b.push(new t(this,n))
            }
        ),b
    }
    w.container[0].swiper=w,w.container.data("swiper",w),w.classNames.push(w.params.containerModifierClass+w.params.direction),w.params.freeMode&&w.classNames.push(w.params.containerModifierClass+"free-mode"),w.support.flexbox||(w.classNames.push(w.params.containerModifierClass+"no-flexbox"),w.params.slidesPerColumn=1),w.params.autoHeight&&w.classNames.push(w.params.containerModifierClass+"autoheight"),(w.params.parallax||w.params.watchSlidesVisibility)&&(w.params.watchSlidesProgress=!0),w.params.touchReleaseOnEdges&&(w.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(w.params.effect)>=0&&(w.support.transforms3d?(w.params.watchSlidesProgress=!0,w.classNames.push(w.params.containerModifierClass+"3d")):w.params.effect="slide"),"slide"!==w.params.effect&&w.classNames.push(w.params.containerModifierClass+w.params.effect),"cube"===w.params.effect&&(w.params.resistanceRatio=0,w.params.slidesPerView=1,w.params.slidesPerColumn=1,w.params.slidesPerGroup=1,w.params.centeredSlides=!1,w.params.spaceBetween=0,w.params.virtualTranslate=!0),"fade"!==w.params.effect&&"flip"!==w.params.effect||(w.params.slidesPerView=1,w.params.slidesPerColumn=1,w.params.slidesPerGroup=1,w.params.watchSlidesProgress=!0,w.params.spaceBetween=0,void 0===m&&(w.params.virtualTranslate=!0)),w.params.grabCursor&&w.support.touch&&(w.params.grabCursor=!1),w.wrapper=w.container.children("."+w.params.wrapperClass),w.params.pagination&&(w.paginationContainer=e(w.params.pagination),w.params.uniqueNavElements&&"string"==typeof w.params.pagination&&w.paginationContainer.length>1&&1===w.container.find(w.params.pagination).length&&(w.paginationContainer=w.container.find(w.params.pagination)),"bullets"===w.params.paginationType&&w.params.paginationClickable?w.paginationContainer.addClass(w.params.paginationModifierClass+"clickable"):w.params.paginationClickable=!1,w.paginationContainer.addClass(w.params.paginationModifierClass+w.params.paginationType)),(w.params.nextButton||w.params.prevButton)&&(w.params.nextButton&&(w.nextButton=e(w.params.nextButton),w.params.uniqueNavElements&&"string"==typeof w.params.nextButton&&w.nextButton.length>1&&1===w.container.find(w.params.nextButton).length&&(w.nextButton=w.container.find(w.params.nextButton))),w.params.prevButton&&(w.prevButton=e(w.params.prevButton),w.params.uniqueNavElements&&"string"==typeof w.params.prevButton&&w.prevButton.length>1&&1===w.container.find(w.params.prevButton).length&&(w.prevButton=w.container.find(w.params.prevButton)))),w.isHorizontal=function() {
        return"horizontal"===w.params.direction
    }
        ,w.rtl=w.isHorizontal()&&("rtl"===w.container[0].dir.toLowerCase()||"rtl"===w.container.css("direction")),w.rtl&&w.classNames.push(w.params.containerModifierClass+"rtl"),w.rtl&&(w.wrongRTL="-webkit-box"===w.wrapper.css("display")),w.params.slidesPerColumn>1&&w.classNames.push(w.params.containerModifierClass+"multirow"),w.device.android&&w.classNames.push(w.params.containerModifierClass+"android"),w.container.addClass(w.classNames.join(" ")),w.translate=0,w.progress=0,w.velocity=0,w.lockSwipeToNext=function() {
        w.params.allowSwipeToNext=!1,!1===w.params.allowSwipeToPrev&&w.params.grabCursor&&w.unsetGrabCursor()
    }
        ,w.lockSwipeToPrev=function() {
        w.params.allowSwipeToPrev=!1,!1===w.params.allowSwipeToNext&&w.params.grabCursor&&w.unsetGrabCursor()
    }
        ,w.lockSwipes=function() {
        w.params.allowSwipeToNext=w.params.allowSwipeToPrev=!1,w.params.grabCursor&&w.unsetGrabCursor()
    }
        ,w.unlockSwipeToNext=function() {
        w.params.allowSwipeToNext=!0,!0===w.params.allowSwipeToPrev&&w.params.grabCursor&&w.setGrabCursor()
    }
        ,w.unlockSwipeToPrev=function() {
        w.params.allowSwipeToPrev=!0,!0===w.params.allowSwipeToNext&&w.params.grabCursor&&w.setGrabCursor()
    }
        ,w.unlockSwipes=function() {
        w.params.allowSwipeToNext=w.params.allowSwipeToPrev=!0,w.params.grabCursor&&w.setGrabCursor()
    }
        ,w.setGrabCursor=function(e) {
        w.container[0].style.cursor="move",w.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",w.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",w.container[0].style.cursor=e?"grabbing":"grab"
    }
        ,w.unsetGrabCursor=function() {
        w.container[0].style.cursor=""
    }
        ,w.params.grabCursor&&w.setGrabCursor(),w.imagesToLoad=[],w.imagesLoaded=0,w.loadImage=function(e,t,i,r,n,a) {
        function s() {
            a&&a()
        }
        var o;
        e.complete&&n?s():t?(o=new window.Image,o.onload=s,o.onerror=s,r&&(o.sizes=r),i&&(o.srcset=i),t&&(o.src=t)):s()
    }
        ,w.preloadImages=function() {
        w.imagesToLoad=w.container.find("img");
        for(var e=0;
            e<w.imagesToLoad.length;
            e++)w.loadImage(w.imagesToLoad[e],w.imagesToLoad[e].currentSrc||w.imagesToLoad[e].getAttribute("src"),w.imagesToLoad[e].srcset||w.imagesToLoad[e].getAttribute("srcset"),w.imagesToLoad[e].sizes||w.imagesToLoad[e].getAttribute("sizes"),!0,function() {
                void 0!==w&&null!==w&&w&&(void 0!==w.imagesLoaded&&w.imagesLoaded++,w.imagesLoaded===w.imagesToLoad.length&&(w.params.updateOnImagesReady&&w.update(),w.emit("onImagesReady",w)))
            }
        )
    }
        ,w.autoplayTimeoutId=void 0,w.autoplaying=!1,w.autoplayPaused=!1,w.startAutoplay=function() {
        return void 0===w.autoplayTimeoutId&&!!w.params.autoplay&&!w.autoplaying&&(w.autoplaying=!0,w.emit("onAutoplayStart",w),void s())
    }
        ,w.stopAutoplay=function(e) {
        w.autoplayTimeoutId&&(w.autoplayTimeoutId&&clearTimeout(w.autoplayTimeoutId),w.autoplaying=!1,w.autoplayTimeoutId=void 0,w.emit("onAutoplayStop",w))
    }
        ,w.pauseAutoplay=function(e) {
        w.autoplayPaused||(w.autoplayTimeoutId&&clearTimeout(w.autoplayTimeoutId),w.autoplayPaused=!0,0===e?(w.autoplayPaused=!1,s()):w.wrapper.transitionEnd(function() {
                w&&(w.autoplayPaused=!1,w.autoplaying?s():w.stopAutoplay())
            }
        ))
    }
        ,w.minTranslate=function() {
        return-w.snapGrid[0]
    }
        ,w.maxTranslate=function() {
        return-w.snapGrid[w.snapGrid.length-1]
    }
        ,w.updateAutoHeight=function() {
        var e,t=[],i=0;
        if("auto"!==w.params.slidesPerView&&w.params.slidesPerView>1)for(e=0;
                                                                         e<Math.ceil(w.params.slidesPerView);
                                                                         e++) {
            var r=w.activeIndex+e;
            if(r>w.slides.length)break;
            t.push(w.slides.eq(r)[0])
        }
        else t.push(w.slides.eq(w.activeIndex)[0]);
        for(e=0;
            e<t.length;
            e++)if(void 0!==t[e]) {
            var n=t[e].offsetHeight;
            i=n>i?n:i
        }
        i&&w.wrapper.css("height",i+"px")
    }
        ,w.updateContainerSize=function() {
        var e,t;
        e=void 0!==w.params.width?w.params.width:w.container[0].clientWidth,t=void 0!==w.params.height?w.params.height:w.container[0].clientHeight,0===e&&w.isHorizontal()||0===t&&!w.isHorizontal()||(e=e-parseInt(w.container.css("padding-left"),10)-parseInt(w.container.css("padding-right"),10),t=t-parseInt(w.container.css("padding-top"),10)-parseInt(w.container.css("padding-bottom"),10),w.width=e,w.height=t,w.size=w.isHorizontal()?w.width:w.height)
    }
        ,w.updateSlidesSize=function() {
        w.slides=w.wrapper.children("."+w.params.slideClass),w.snapGrid=[],w.slidesGrid=[],w.slidesSizesGrid=[];
        var e,t=w.params.spaceBetween,i=-w.params.slidesOffsetBefore,r=0,n=0;
        if(void 0!==w.size) {
            "string"==typeof t&&t.indexOf("%")>=0&&(t=parseFloat(t.replace("%",""))/100*w.size),w.virtualSize=-t,w.rtl?w.slides.css( {
                    marginLeft:"",marginTop:""
                }
            ):w.slides.css( {
                    marginRight:"",marginBottom:""
                }
            );
            var s;
            w.params.slidesPerColumn>1&&(s=Math.floor(w.slides.length/w.params.slidesPerColumn)===w.slides.length/w.params.slidesPerColumn?w.slides.length:Math.ceil(w.slides.length/w.params.slidesPerColumn)*w.params.slidesPerColumn,"auto"!==w.params.slidesPerView&&"row"===w.params.slidesPerColumnFill&&(s=Math.max(s,w.params.slidesPerView*w.params.slidesPerColumn)));
            var o,l=w.params.slidesPerColumn,u=s/l,p=u-(w.params.slidesPerColumn*u-w.slides.length);
            for(e=0;
                e<w.slides.length;
                e++) {
                o=0;
                var c=w.slides.eq(e);
                if(w.params.slidesPerColumn>1) {
                    var d,h,f;
                    "column"===w.params.slidesPerColumnFill?(h=Math.floor(e/l),f=e-h*l,(h>p||h===p&&f===l-1)&&++f>=l&&(f=0,h++),d=h+f*s/l,c.css( {
                            "-webkit-box-ordinal-group":d,"-moz-box-ordinal-group":d,"-ms-flex-order":d,"-webkit-order":d,order:d
                        }
                    )):(f=Math.floor(e/u),h=e-f*u),c.css("margin-"+(w.isHorizontal()?"top":"left"),0!==f&&w.params.spaceBetween&&w.params.spaceBetween+"px").attr("data-swiper-column",h).attr("data-swiper-row",f)
                }
                "none"!==c.css("display")&&("auto"===w.params.slidesPerView?(o=w.isHorizontal()?c.outerWidth(!0):c.outerHeight(!0),w.params.roundLengths&&(o=a(o))):(o=(w.size-(w.params.slidesPerView-1)*t)/w.params.slidesPerView,w.params.roundLengths&&(o=a(o)),w.isHorizontal()?w.slides[e].style.width=o+"px":w.slides[e].style.height=o+"px"),w.slides[e].swiperSlideSize=o,w.slidesSizesGrid.push(o),w.params.centeredSlides?(i=i+o/2+r/2+t,0===r&&0!==e&&(i=i-w.size/2-t),0===e&&(i=i-w.size/2-t),Math.abs(i)<.001&&(i=0),n%w.params.slidesPerGroup==0&&w.snapGrid.push(i),w.slidesGrid.push(i)):(n%w.params.slidesPerGroup==0&&w.snapGrid.push(i),w.slidesGrid.push(i),i=i+o+t),w.virtualSize+=o+t,r=o,n++)
            }
            w.virtualSize=Math.max(w.virtualSize,w.size)+w.params.slidesOffsetAfter;
            var m;
            if(w.rtl&&w.wrongRTL&&("slide"===w.params.effect||"coverflow"===w.params.effect)&&w.wrapper.css( {
                        width:w.virtualSize+w.params.spaceBetween+"px"
                    }
                ),w.support.flexbox&&!w.params.setWrapperSize||(w.isHorizontal()?w.wrapper.css( {
                        width:w.virtualSize+w.params.spaceBetween+"px"
                    }
                ):w.wrapper.css( {
                        height:w.virtualSize+w.params.spaceBetween+"px"
                    }
                )),w.params.slidesPerColumn>1&&(w.virtualSize=(o+w.params.spaceBetween)*s,w.virtualSize=Math.ceil(w.virtualSize/w.params.slidesPerColumn)-w.params.spaceBetween,w.isHorizontal()?w.wrapper.css( {
                        width:w.virtualSize+w.params.spaceBetween+"px"
                    }
                ):w.wrapper.css( {
                        height:w.virtualSize+w.params.spaceBetween+"px"
                    }
                ),w.params.centeredSlides)) {
                for(m=[],e=0;
                    e<w.snapGrid.length;
                    e++)w.snapGrid[e]<w.virtualSize+w.snapGrid[0]&&m.push(w.snapGrid[e]);
                w.snapGrid=m
            }
            if(!w.params.centeredSlides) {
                for(m=[],e=0;
                    e<w.snapGrid.length;
                    e++)w.snapGrid[e]<=w.virtualSize-w.size&&m.push(w.snapGrid[e]);
                w.snapGrid=m,Math.floor(w.virtualSize-w.size)-Math.floor(w.snapGrid[w.snapGrid.length-1])>1&&w.snapGrid.push(w.virtualSize-w.size)
            }
            0===w.snapGrid.length&&(w.snapGrid=[0]),0!==w.params.spaceBetween&&(w.isHorizontal()?w.rtl?w.slides.css( {
                    marginLeft:t+"px"
                }
            ):w.slides.css( {
                    marginRight:t+"px"
                }
            ):w.slides.css( {
                    marginBottom:t+"px"
                }
            )),w.params.watchSlidesProgress&&w.updateSlidesOffset()
        }
    },w.updateSlidesOffset=function() {
        for(var e=0;
            e<w.slides.length;
            e++)w.slides[e].swiperSlideOffset=w.isHorizontal()?w.slides[e].offsetLeft:w.slides[e].offsetTop
    }
        ,w.currentSlidesPerView=function() {
        var e,t,i=1;
        if(w.params.centeredSlides) {
            var r,n=w.slides[w.activeIndex].swiperSlideSize;
            for(e=w.activeIndex+1;
                e<w.slides.length;
                e++)w.slides[e]&&!r&&(n+=w.slides[e].swiperSlideSize,i++,n>w.size&&(r=!0));
            for(t=w.activeIndex-1;
                t>=0;
                t--)w.slides[t]&&!r&&(n+=w.slides[t].swiperSlideSize,i++,n>w.size&&(r=!0))
        }
        else for(e=w.activeIndex+1;
                 e<w.slides.length;
                 e++)w.slidesGrid[e]-w.slidesGrid[w.activeIndex]<w.size&&i++;
        return i
    }
        ,w.updateSlidesProgress=function(e) {
        if(void 0===e&&(e=w.translate||0),0!==w.slides.length) {
            void 0===w.slides[0].swiperSlideOffset&&w.updateSlidesOffset();
            var t=-e;
            w.rtl&&(t=e),w.slides.removeClass(w.params.slideVisibleClass);
            for(var i=0;
                i<w.slides.length;
                i++) {
                var r=w.slides[i],n=(t+(w.params.centeredSlides?w.minTranslate():0)-r.swiperSlideOffset)/(r.swiperSlideSize+w.params.spaceBetween);
                if(w.params.watchSlidesVisibility) {
                    var a=-(t-r.swiperSlideOffset),s=a+w.slidesSizesGrid[i];
                    (a>=0&&a<w.size||s>0&&s<=w.size||a<=0&&s>=w.size)&&w.slides.eq(i).addClass(w.params.slideVisibleClass)
                }
                r.progress=w.rtl?-n:n
            }
        }
    }
        ,w.updateProgress=function(e) {
        void 0===e&&(e=w.translate||0);
        var t=w.maxTranslate()-w.minTranslate(),i=w.isBeginning,r=w.isEnd;
        0===t?(w.progress=0,w.isBeginning=w.isEnd=!0):(w.progress=(e-w.minTranslate())/t,w.isBeginning=w.progress<=0,w.isEnd=w.progress>=1),w.isBeginning&&!i&&w.emit("onReachBeginning",w),w.isEnd&&!r&&w.emit("onReachEnd",w),w.params.watchSlidesProgress&&w.updateSlidesProgress(e),w.emit("onProgress",w,w.progress)
    }
        ,w.updateActiveIndex=function() {
        var e,t,i,r=w.rtl?w.translate:-w.translate;
        for(t=0;
            t<w.slidesGrid.length;
            t++)void 0!==w.slidesGrid[t+1]?r>=w.slidesGrid[t]&&r<w.slidesGrid[t+1]-(w.slidesGrid[t+1]-w.slidesGrid[t])/2?e=t:r>=w.slidesGrid[t]&&r<w.slidesGrid[t+1]&&(e=t+1):r>=w.slidesGrid[t]&&(e=t);
        w.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),(i=Math.floor(e/w.params.slidesPerGroup))>=w.snapGrid.length&&(i=w.snapGrid.length-1),e!==w.activeIndex&&(w.snapIndex=i,w.previousIndex=w.activeIndex,w.activeIndex=e,w.updateClasses(),w.updateRealIndex())
    }
        ,w.updateRealIndex=function() {
        w.realIndex=parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index")||w.activeIndex,10)
    }
        ,w.updateClasses=function() {
        w.slides.removeClass(w.params.slideActiveClass+" "+w.params.slideNextClass+" "+w.params.slidePrevClass+" "+w.params.slideDuplicateActiveClass+" "+w.params.slideDuplicateNextClass+" "+w.params.slideDuplicatePrevClass);
        var t=w.slides.eq(w.activeIndex);
        t.addClass(w.params.slideActiveClass),n.loop&&(t.hasClass(w.params.slideDuplicateClass)?w.wrapper.children("."+w.params.slideClass+":not(."+w.params.slideDuplicateClass+')[data-swiper-slide-index="'+w.realIndex+'"]').addClass(w.params.slideDuplicateActiveClass):w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass+'[data-swiper-slide-index="'+w.realIndex+'"]').addClass(w.params.slideDuplicateActiveClass));
        var i=t.next("."+w.params.slideClass).addClass(w.params.slideNextClass);
        w.params.loop&&0===i.length&&(i=w.slides.eq(0)).addClass(w.params.slideNextClass);
        var r=t.prev("."+w.params.slideClass).addClass(w.params.slidePrevClass);
        if(w.params.loop&&0===r.length&&(r=w.slides.eq(-1)).addClass(w.params.slidePrevClass),n.loop&&(i.hasClass(w.params.slideDuplicateClass)?w.wrapper.children("."+w.params.slideClass+":not(."+w.params.slideDuplicateClass+')[data-swiper-slide-index="'+i.attr("data-swiper-slide-index")+'"]').addClass(w.params.slideDuplicateNextClass):w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass+'[data-swiper-slide-index="'+i.attr("data-swiper-slide-index")+'"]').addClass(w.params.slideDuplicateNextClass),r.hasClass(w.params.slideDuplicateClass)?w.wrapper.children("."+w.params.slideClass+":not(."+w.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(w.params.slideDuplicatePrevClass):w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(w.params.slideDuplicatePrevClass)),w.paginationContainer&&w.paginationContainer.length>0) {
            var a,s=w.params.loop?Math.ceil((w.slides.length-2*w.loopedSlides)/w.params.slidesPerGroup):w.snapGrid.length;
            if(w.params.loop?((a=Math.ceil((w.activeIndex-w.loopedSlides)/w.params.slidesPerGroup))>w.slides.length-1-2*w.loopedSlides&&(a-=w.slides.length-2*w.loopedSlides),a>s-1&&(a-=s),a<0&&"bullets"!==w.params.paginationType&&(a=s+a)):a=void 0!==w.snapIndex?w.snapIndex:w.activeIndex||0,"bullets"===w.params.paginationType&&w.bullets&&w.bullets.length>0&&(w.bullets.removeClass(w.params.bulletActiveClass),w.paginationContainer.length>1?w.bullets.each(function() {
                        e(this).index()===a&&e(this).addClass(w.params.bulletActiveClass)
                    }
                ):w.bullets.eq(a).addClass(w.params.bulletActiveClass)),"fraction"===w.params.paginationType&&(w.paginationContainer.find("."+w.params.paginationCurrentClass).text(a+1),w.paginationContainer.find("."+w.params.paginationTotalClass).text(s)),"progress"===w.params.paginationType) {
                var o=(a+1)/s,l=o,u=1;
                w.isHorizontal()||(u=o,l=1),w.paginationContainer.find("."+w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+u+")").transition(w.params.speed)
            }
            "custom"===w.params.paginationType&&w.params.paginationCustomRender&&(w.paginationContainer.html(w.params.paginationCustomRender(w,a+1,s)),w.emit("onPaginationRendered",w,w.paginationContainer[0]))
        }
        w.params.loop||(w.params.prevButton&&w.prevButton&&w.prevButton.length>0&&(w.isBeginning?(w.prevButton.addClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.disable(w.prevButton)):(w.prevButton.removeClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.enable(w.prevButton))),w.params.nextButton&&w.nextButton&&w.nextButton.length>0&&(w.isEnd?(w.nextButton.addClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.disable(w.nextButton)):(w.nextButton.removeClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.enable(w.nextButton))))
    }
        ,w.updatePagination=function() {
        if(w.params.pagination&&w.paginationContainer&&w.paginationContainer.length>0) {
            var e="";
            if("bullets"===w.params.paginationType) {
                for(var t=w.params.loop?Math.ceil((w.slides.length-2*w.loopedSlides)/w.params.slidesPerGroup):w.snapGrid.length,i=0;
                    i<t;
                    i++)e+=w.params.paginationBulletRender?w.params.paginationBulletRender(w,i,w.params.bulletClass):"<"+w.params.paginationElement+' class="'+w.params.bulletClass+'"></'+w.params.paginationElement+">";
                w.paginationContainer.html(e),w.bullets=w.paginationContainer.find("."+w.params.bulletClass),w.params.paginationClickable&&w.params.a11y&&w.a11y&&w.a11y.initPagination()
            }
            "fraction"===w.params.paginationType&&(e=w.params.paginationFractionRender?w.params.paginationFractionRender(w,w.params.paginationCurrentClass,w.params.paginationTotalClass):'<span class="'+w.params.paginationCurrentClass+'"></span> / <span class="'+w.params.paginationTotalClass+'"></span>',w.paginationContainer.html(e)),"progress"===w.params.paginationType&&(e=w.params.paginationProgressRender?w.params.paginationProgressRender(w,w.params.paginationProgressbarClass):'<span class="'+w.params.paginationProgressbarClass+'"></span>',w.paginationContainer.html(e)),"custom"!==w.params.paginationType&&w.emit("onPaginationRendered",w,w.paginationContainer[0])
        }
    },w.update=function(e) {
        function t() {
            w.rtl,w.translate,i=Math.min(Math.max(w.translate,w.maxTranslate()),w.minTranslate()),w.setWrapperTranslate(i),w.updateActiveIndex(),w.updateClasses()
        }
        if(w) {
            w.updateContainerSize(),w.updateSlidesSize(),w.updateProgress(),w.updatePagination(),w.updateClasses(),w.params.scrollbar&&w.scrollbar&&w.scrollbar.set();
            var i;
            e?(w.controller&&w.controller.spline&&(w.controller.spline=void 0),w.params.freeMode?(t(),w.params.autoHeight&&w.updateAutoHeight()):(("auto"===w.params.slidesPerView||w.params.slidesPerView>1)&&w.isEnd&&!w.params.centeredSlides?w.slideTo(w.slides.length-1,0,!1,!0):w.slideTo(w.activeIndex,0,!1,!0))||t()):w.params.autoHeight&&w.updateAutoHeight()
        }
    },w.onResize=function(e) {
        w.params.onBeforeResize&&w.params.onBeforeResize(w),w.params.breakpoints&&w.setBreakpoint();
        var t=w.params.allowSwipeToPrev,i=w.params.allowSwipeToNext;
        w.params.allowSwipeToPrev=w.params.allowSwipeToNext=!0,w.updateContainerSize(),w.updateSlidesSize(),("auto"===w.params.slidesPerView||w.params.freeMode||e)&&w.updatePagination(),w.params.scrollbar&&w.scrollbar&&w.scrollbar.set(),w.controller&&w.controller.spline&&(w.controller.spline=void 0);
        var r=!1;
        if(w.params.freeMode) {
            var n=Math.min(Math.max(w.translate,w.maxTranslate()),w.minTranslate());
            w.setWrapperTranslate(n),w.updateActiveIndex(),w.updateClasses(),w.params.autoHeight&&w.updateAutoHeight()
        }
        else w.updateClasses(),r=("auto"===w.params.slidesPerView||w.params.slidesPerView>1)&&w.isEnd&&!w.params.centeredSlides?w.slideTo(w.slides.length-1,0,!1,!0):w.slideTo(w.activeIndex,0,!1,!0);
        w.params.lazyLoading&&!r&&w.lazy&&w.lazy.load(),w.params.allowSwipeToPrev=t,w.params.allowSwipeToNext=i,w.params.onAfterResize&&w.params.onAfterResize(w)
    }
        ,w.touchEventsDesktop= {
        start:"mousedown",move:"mousemove",end:"mouseup"
    }
        ,window.navigator.pointerEnabled?w.touchEventsDesktop= {
        start:"pointerdown",move:"pointermove",end:"pointerup"
    }
        :window.navigator.msPointerEnabled&&(w.touchEventsDesktop= {
        start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"
    }
    ),w.touchEvents= {
        start:w.support.touch||!w.params.simulateTouch?"touchstart":w.touchEventsDesktop.start,move:w.support.touch||!w.params.simulateTouch?"touchmove":w.touchEventsDesktop.move,end:w.support.touch||!w.params.simulateTouch?"touchend":w.touchEventsDesktop.end
    }
        ,(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===w.params.touchEventsTarget?w.container:w.wrapper).addClass("swiper-wp8-"+w.params.direction),w.initEvents=function(e) {
        var t=e?"off":"on",i=e?"removeEventListener":"addEventListener",r="container"===w.params.touchEventsTarget?w.container[0]:w.wrapper[0],a=w.support.touch?r:document,s=!!w.params.nested;
        if(w.browser.ie)r[i](w.touchEvents.start,w.onTouchStart,!1),a[i](w.touchEvents.move,w.onTouchMove,s),a[i](w.touchEvents.end,w.onTouchEnd,!1);
        else {
            if(w.support.touch) {
                var o=!("touchstart"!==w.touchEvents.start||!w.support.passiveListener||!w.params.passiveListeners)&& {
                            passive:!0,capture:!1
                        }
                    ;
                r[i](w.touchEvents.start,w.onTouchStart,o),r[i](w.touchEvents.move,w.onTouchMove,s),r[i](w.touchEvents.end,w.onTouchEnd,o)
            }
            (n.simulateTouch&&!w.device.ios&&!w.device.android||n.simulateTouch&&!w.support.touch&&w.device.ios)&&(r[i]("mousedown",w.onTouchStart,!1),document[i]("mousemove",w.onTouchMove,s),document[i]("mouseup",w.onTouchEnd,!1))
        }
        window[i]("resize",w.onResize),w.params.nextButton&&w.nextButton&&w.nextButton.length>0&&(w.nextButton[t]("click",w.onClickNext),w.params.a11y&&w.a11y&&w.nextButton[t]("keydown",w.a11y.onEnterKey)),w.params.prevButton&&w.prevButton&&w.prevButton.length>0&&(w.prevButton[t]("click",w.onClickPrev),w.params.a11y&&w.a11y&&w.prevButton[t]("keydown",w.a11y.onEnterKey)),w.params.pagination&&w.params.paginationClickable&&(w.paginationContainer[t]("click","."+w.params.bulletClass,w.onClickIndex),w.params.a11y&&w.a11y&&w.paginationContainer[t]("keydown","."+w.params.bulletClass,w.a11y.onEnterKey)),(w.params.preventClicks||w.params.preventClicksPropagation)&&r[i]("click",w.preventClicks,!0)
    }
        ,w.attachEvents=function() {
        w.initEvents()
    }
        ,w.detachEvents=function() {
        w.initEvents(!0)
    }
        ,w.allowClick=!0,w.preventClicks=function(e) {
        w.allowClick||(w.params.preventClicks&&e.preventDefault(),w.params.preventClicksPropagation&&w.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))
    }
        ,w.onClickNext=function(e) {
        e.preventDefault(),w.isEnd&&!w.params.loop||w.slideNext()
    }
        ,w.onClickPrev=function(e) {
        e.preventDefault(),w.isBeginning&&!w.params.loop||w.slidePrev()
    }
        ,w.onClickIndex=function(t) {
        t.preventDefault();
        var i=e(this).index()*w.params.slidesPerGroup;
        w.params.loop&&(i+=w.loopedSlides),w.slideTo(i)
    }
        ,w.updateClickedSlide=function(t) {
        var i=o(t,"."+w.params.slideClass),r=!1;
        if(i)for(var n=0;
                 n<w.slides.length;
                 n++)w.slides[n]===i&&(r=!0);
        if(!i||!r)return w.clickedSlide=void 0,void(w.clickedIndex=void 0);
        if(w.clickedSlide=i,w.clickedIndex=e(i).index(),w.params.slideToClickedSlide&&void 0!==w.clickedIndex&&w.clickedIndex!==w.activeIndex) {
            var a,s=w.clickedIndex,l="auto"===w.params.slidesPerView?w.currentSlidesPerView():w.params.slidesPerView;
            if(w.params.loop) {
                if(w.animating)return;
                a=parseInt(e(w.clickedSlide).attr("data-swiper-slide-index"),10),w.params.centeredSlides?s<w.loopedSlides-l/2||s>w.slides.length-w.loopedSlides+l/2?(w.fixLoop(),s=w.wrapper.children("."+w.params.slideClass+'[data-swiper-slide-index="'+a+'"]:not(.'+w.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function() {
                        w.slideTo(s)
                    }
                    ,0)):w.slideTo(s):s>w.slides.length-l?(w.fixLoop(),s=w.wrapper.children("."+w.params.slideClass+'[data-swiper-slide-index="'+a+'"]:not(.'+w.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function() {
                        w.slideTo(s)
                    }
                    ,0)):w.slideTo(s)
            }
            else w.slideTo(s)
        }
    };
    var T,C,S,P,k,M,E,z,A,D,O="input, select, textarea, button, video",N=Date.now(),L=[];
    w.animating=!1,w.touches= {
        startX:0,startY:0,currentX:0,currentY:0,diff:0
    }
    ;
    var R,I;
    w.onTouchStart=function(t) {
        if(t.originalEvent&&(t=t.originalEvent),(R="touchstart"===t.type)||!("which"in t)||3!==t.which) {
            if(w.params.noSwiping&&o(t,"."+w.params.noSwipingClass))return void(w.allowClick=!0);
            if(!w.params.swipeHandler||o(t,w.params.swipeHandler)) {
                var i=w.touches.currentX="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,r=w.touches.currentY="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY;
                if(!(w.device.ios&&w.params.iOSEdgeSwipeDetection&&i<=w.params.iOSEdgeSwipeThreshold)) {
                    if(T=!0,C=!1,S=!0,k=void 0,I=void 0,w.touches.startX=i,w.touches.startY=r,P=Date.now(),w.allowClick=!0,w.updateContainerSize(),w.swipeDirection=void 0,w.params.threshold>0&&(z=!1),"touchstart"!==t.type) {
                        var n=!0;
                        e(t.target).is(O)&&(n=!1),document.activeElement&&e(document.activeElement).is(O)&&document.activeElement.blur(),n&&t.preventDefault()
                    }
                    w.emit("onTouchStart",w,t)
                }
            }
        }
    },w.onTouchMove=function(t) {
        if(t.originalEvent&&(t=t.originalEvent),!R||"mousemove"!==t.type) {
            if(t.preventedByNestedSwiper)return w.touches.startX="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,void(w.touches.startY="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY);
            if(w.params.onlyExternal)return w.allowClick=!1,void(T&&(w.touches.startX=w.touches.currentX="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,w.touches.startY=w.touches.currentY="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,P=Date.now()));
            if(R&&w.params.touchReleaseOnEdges&&!w.params.loop)if(w.isHorizontal()) {
                if(w.touches.currentX<w.touches.startX&&w.translate<=w.maxTranslate()||w.touches.currentX>w.touches.startX&&w.translate>=w.minTranslate())return
            }
            else if(w.touches.currentY<w.touches.startY&&w.translate<=w.maxTranslate()||w.touches.currentY>w.touches.startY&&w.translate>=w.minTranslate())return;
            if(R&&document.activeElement&&t.target===document.activeElement&&e(t.target).is(O))return C=!0,void(w.allowClick=!1);
            if(S&&w.emit("onTouchMove",w,t),!(t.targetTouches&&t.targetTouches.length>1)) {
                if(w.touches.currentX="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,w.touches.currentY="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,void 0===k) {
                    var i;
                    w.isHorizontal()&&w.touches.currentY===w.touches.startY||!w.isHorizontal()&&w.touches.currentX===w.touches.startX?k=!1:(i=180*Math.atan2(Math.abs(w.touches.currentY-w.touches.startY),Math.abs(w.touches.currentX-w.touches.startX))/Math.PI,k=w.isHorizontal()?i>w.params.touchAngle:90-i>w.params.touchAngle)
                }
                if(k&&w.emit("onTouchMoveOpposite",w,t),void 0===I&&(w.touches.currentX===w.touches.startX&&w.touches.currentY===w.touches.startY||(I=!0)),T) {
                    if(k)return void(T=!1);
                    if(I) {
                        w.allowClick=!1,w.emit("onSliderMove",w,t),t.preventDefault(),w.params.touchMoveStopPropagation&&!w.params.nested&&t.stopPropagation(),C||(n.loop&&w.fixLoop(),E=w.getWrapperTranslate(),w.setWrapperTransition(0),w.animating&&w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),w.params.autoplay&&w.autoplaying&&(w.params.autoplayDisableOnInteraction?w.stopAutoplay():w.pauseAutoplay()),D=!1,!w.params.grabCursor||!0!==w.params.allowSwipeToNext&&!0!==w.params.allowSwipeToPrev||w.setGrabCursor(!0)),C=!0;
                        var r=w.touches.diff=w.isHorizontal()?w.touches.currentX-w.touches.startX:w.touches.currentY-w.touches.startY;
                        r*=w.params.touchRatio,w.rtl&&(r=-r),w.swipeDirection=r>0?"prev":"next",M=r+E;
                        var a=!0;
                        if(r>0&&M>w.minTranslate()?(a=!1,w.params.resistance&&(M=w.minTranslate()-1+Math.pow(-w.minTranslate()+E+r,w.params.resistanceRatio))):r<0&&M<w.maxTranslate()&&(a=!1,w.params.resistance&&(M=w.maxTranslate()+1-Math.pow(w.maxTranslate()-E-r,w.params.resistanceRatio))),a&&(t.preventedByNestedSwiper=!0),!w.params.allowSwipeToNext&&"next"===w.swipeDirection&&M<E&&(M=E),!w.params.allowSwipeToPrev&&"prev"===w.swipeDirection&&M>E&&(M=E),w.params.threshold>0) {
                            if(!(Math.abs(r)>w.params.threshold||z))return void(M=E);
                            if(!z)return z=!0,w.touches.startX=w.touches.currentX,w.touches.startY=w.touches.currentY,M=E,void(w.touches.diff=w.isHorizontal()?w.touches.currentX-w.touches.startX:w.touches.currentY-w.touches.startY)
                        }
                        w.params.followFinger&&((w.params.freeMode||w.params.watchSlidesProgress)&&w.updateActiveIndex(),w.params.freeMode&&(0===L.length&&L.push( {
                                position:w.touches[w.isHorizontal()?"startX":"startY"],time:P
                            }
                        ),L.push( {
                                position:w.touches[w.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()
                            }
                        )),w.updateProgress(M),w.setWrapperTranslate(M))
                    }
                }
            }
        }
    }
        ,w.onTouchEnd=function(t) {
        if(t.originalEvent&&(t=t.originalEvent),S&&w.emit("onTouchEnd",w,t),S=!1,T) {
            w.params.grabCursor&&C&&T&&(!0===w.params.allowSwipeToNext||!0===w.params.allowSwipeToPrev)&&w.setGrabCursor(!1);
            var i=Date.now(),r=i-P;
            if(w.allowClick&&(w.updateClickedSlide(t),w.emit("onTap",w,t),r<300&&i-N>300&&(A&&clearTimeout(A),A=setTimeout(function() {
                        w&&(w.params.paginationHide&&w.paginationContainer.length>0&&!e(t.target).hasClass(w.params.bulletClass)&&w.paginationContainer.toggleClass(w.params.paginationHiddenClass),w.emit("onClick",w,t))
                    }
                    ,300)),r<300&&i-N<300&&(A&&clearTimeout(A),w.emit("onDoubleTap",w,t))),N=Date.now(),setTimeout(function() {
                        w&&(w.allowClick=!0)
                    }
                    ,0),!T||!C||!w.swipeDirection||0===w.touches.diff||M===E)return void(T=C=!1);
            T=C=!1;
            var n;
            if(n=w.params.followFinger?w.rtl?w.translate:-w.translate:-M,w.params.freeMode) {
                if(n<-w.minTranslate())return void w.slideTo(w.activeIndex);
                if(n>-w.maxTranslate())return void(w.slides.length<w.snapGrid.length?w.slideTo(w.snapGrid.length-1):w.slideTo(w.slides.length-1));
                if(w.params.freeModeMomentum) {
                    if(L.length>1) {
                        var a=L.pop(),s=L.pop(),o=a.position-s.position,l=a.time-s.time;
                        w.velocity=o/l,w.velocity=w.velocity/2,Math.abs(w.velocity)<w.params.freeModeMinimumVelocity&&(w.velocity=0),(l>150||(new window.Date).getTime()-a.time>300)&&(w.velocity=0)
                    }
                    else w.velocity=0;
                    w.velocity=w.velocity*w.params.freeModeMomentumVelocityRatio,L.length=0;
                    var u=1e3*w.params.freeModeMomentumRatio,p=w.velocity*u,c=w.translate+p;
                    w.rtl&&(c=-c);
                    var d,h=!1,f=20*Math.abs(w.velocity)*w.params.freeModeMomentumBounceRatio;
                    if(c<w.maxTranslate())w.params.freeModeMomentumBounce?(c+w.maxTranslate()<-f&&(c=w.maxTranslate()-f),d=w.maxTranslate(),h=!0,D=!0):c=w.maxTranslate();
                    else if(c>w.minTranslate())w.params.freeModeMomentumBounce?(c-w.minTranslate()>f&&(c=w.minTranslate()+f),d=w.minTranslate(),h=!0,D=!0):c=w.minTranslate();
                    else if(w.params.freeModeSticky) {
                        var m,g=0;
                        for(g=0;
                            g<w.snapGrid.length;
                            g+=1)if(w.snapGrid[g]>-c) {
                            m=g;
                            break
                        }
                        c=Math.abs(w.snapGrid[m]-c)<Math.abs(w.snapGrid[m-1]-c)||"next"===w.swipeDirection?w.snapGrid[m]:w.snapGrid[m-1],w.rtl||(c=-c)
                    }
                    if(0!==w.velocity)u=w.rtl?Math.abs((-c-w.translate)/w.velocity):Math.abs((c-w.translate)/w.velocity);
                    else if(w.params.freeModeSticky)return void w.slideReset();
                    w.params.freeModeMomentumBounce&&h?(w.updateProgress(d),w.setWrapperTransition(u),w.setWrapperTranslate(c),w.onTransitionStart(),w.animating=!0,w.wrapper.transitionEnd(function() {
                            w&&D&&(w.emit("onMomentumBounce",w),w.setWrapperTransition(w.params.speed),w.setWrapperTranslate(d),w.wrapper.transitionEnd(function() {
                                    w&&w.onTransitionEnd()
                                }
                            ))
                        }
                    )):w.velocity?(w.updateProgress(c),w.setWrapperTransition(u),w.setWrapperTranslate(c),w.onTransitionStart(),w.animating||(w.animating=!0,w.wrapper.transitionEnd(function() {
                            w&&w.onTransitionEnd()
                        }
                    ))):w.updateProgress(c),w.updateActiveIndex()
                }
                return void((!w.params.freeModeMomentum||r>=w.params.longSwipesMs)&&(w.updateProgress(),w.updateActiveIndex()))
            }
            var v,y=0,_=w.slidesSizesGrid[0];
            for(v=0;
                v<w.slidesGrid.length;
                v+=w.params.slidesPerGroup)void 0!==w.slidesGrid[v+w.params.slidesPerGroup]?n>=w.slidesGrid[v]&&n<w.slidesGrid[v+w.params.slidesPerGroup]&&(y=v,_=w.slidesGrid[v+w.params.slidesPerGroup]-w.slidesGrid[v]):n>=w.slidesGrid[v]&&(y=v,_=w.slidesGrid[w.slidesGrid.length-1]-w.slidesGrid[w.slidesGrid.length-2]);
            var x=(n-w.slidesGrid[y])/_;
            if(r>w.params.longSwipesMs) {
                if(!w.params.longSwipes)return void w.slideTo(w.activeIndex);
                "next"===w.swipeDirection&&(x>=w.params.longSwipesRatio?w.slideTo(y+w.params.slidesPerGroup):w.slideTo(y)),"prev"===w.swipeDirection&&(x>1-w.params.longSwipesRatio?w.slideTo(y+w.params.slidesPerGroup):w.slideTo(y))
            }
            else {
                if(!w.params.shortSwipes)return void w.slideTo(w.activeIndex);
                "next"===w.swipeDirection&&w.slideTo(y+w.params.slidesPerGroup),"prev"===w.swipeDirection&&w.slideTo(y)
            }
        }
    }
        ,w._slideTo=function(e,t) {
        return w.slideTo(e,t,!0,!0)
    }
        ,w.slideTo=function(e,t,i,r) {
        void 0===i&&(i=!0),void 0===e&&(e=0),e<0&&(e=0),w.snapIndex=Math.floor(e/w.params.slidesPerGroup),w.snapIndex>=w.snapGrid.length&&(w.snapIndex=w.snapGrid.length-1);
        var n=-w.snapGrid[w.snapIndex];
        if(w.params.autoplay&&w.autoplaying&&(r||!w.params.autoplayDisableOnInteraction?w.pauseAutoplay(t):w.stopAutoplay()),w.updateProgress(n),w.params.normalizeSlideIndex)for(var a=0;
                                                                                                                                                                                  a<w.slidesGrid.length;
                                                                                                                                                                                  a++)-Math.floor(100*n)>=Math.floor(100*w.slidesGrid[a])&&(e=a);
        return!(!w.params.allowSwipeToNext&&n<w.translate&&n<w.minTranslate()||!w.params.allowSwipeToPrev&&n>w.translate&&n>w.maxTranslate()&&(w.activeIndex||0)!==e||(void 0===t&&(t=w.params.speed),w.previousIndex=w.activeIndex||0,w.activeIndex=e,w.updateRealIndex(),w.rtl&&-n===w.translate||!w.rtl&&n===w.translate?(w.params.autoHeight&&w.updateAutoHeight(),w.updateClasses(),"slide"!==w.params.effect&&w.setWrapperTranslate(n),1):(w.updateClasses(),w.onTransitionStart(i),0===t||w.browser.lteIE9?(w.setWrapperTranslate(n),w.setWrapperTransition(0),w.onTransitionEnd(i)):(w.setWrapperTranslate(n),w.setWrapperTransition(t),w.animating||(w.animating=!0,w.wrapper.transitionEnd(function() {
                w&&w.onTransitionEnd(i)
            }
        ))),0)))
    }
        ,w.onTransitionStart=function(e) {
        void 0===e&&(e=!0),w.params.autoHeight&&w.updateAutoHeight(),w.lazy&&w.lazy.onTransitionStart(),e&&(w.emit("onTransitionStart",w),w.activeIndex!==w.previousIndex&&(w.emit("onSlideChangeStart",w),w.activeIndex>w.previousIndex?w.emit("onSlideNextStart",w):w.emit("onSlidePrevStart",w)))
    }
        ,w.onTransitionEnd=function(e) {
        w.animating=!1,w.setWrapperTransition(0),void 0===e&&(e=!0),w.lazy&&w.lazy.onTransitionEnd(),e&&(w.emit("onTransitionEnd",w),w.activeIndex!==w.previousIndex&&(w.emit("onSlideChangeEnd",w),w.activeIndex>w.previousIndex?w.emit("onSlideNextEnd",w):w.emit("onSlidePrevEnd",w))),w.params.history&&w.history&&w.history.setHistory(w.params.history,w.activeIndex),w.params.hashnav&&w.hashnav&&w.hashnav.setHash()
    }
        ,w.slideNext=function(e,t,i) {
        return w.params.loop?!w.animating&&(w.fixLoop(),w.container[0].clientLeft,w.slideTo(w.activeIndex+w.params.slidesPerGroup,t,e,i)):w.slideTo(w.activeIndex+w.params.slidesPerGroup,t,e,i)
    }
        ,w._slideNext=function(e) {
        return w.slideNext(!0,e,!0)
    }
        ,w.slidePrev=function(e,t,i) {
        return w.params.loop?!w.animating&&(w.fixLoop(),w.container[0].clientLeft,w.slideTo(w.activeIndex-1,t,e,i)):w.slideTo(w.activeIndex-1,t,e,i)
    }
        ,w._slidePrev=function(e) {
        return w.slidePrev(!0,e,!0)
    }
        ,w.slideReset=function(e,t,i) {
        return w.slideTo(w.activeIndex,t,e)
    }
        ,w.disableTouchControl=function() {
        return w.params.onlyExternal=!0,!0
    }
        ,w.enableTouchControl=function() {
        return w.params.onlyExternal=!1,!0
    }
        ,w.setWrapperTransition=function(e,t) {
        w.wrapper.transition(e),"slide"!==w.params.effect&&w.effects[w.params.effect]&&w.effects[w.params.effect].setTransition(e),w.params.parallax&&w.parallax&&w.parallax.setTransition(e),w.params.scrollbar&&w.scrollbar&&w.scrollbar.setTransition(e),w.params.control&&w.controller&&w.controller.setTransition(e,t),w.emit("onSetTransition",w,e)
    }
        ,w.setWrapperTranslate=function(e,t,i) {
        var r=0,n=0;
        w.isHorizontal()?r=w.rtl?-e:e:n=e,w.params.roundLengths&&(r=a(r),n=a(n)),w.params.virtualTranslate||(w.support.transforms3d?w.wrapper.transform("translate3d("+r+"px, "+n+"px, 0px)"):w.wrapper.transform("translate("+r+"px, "+n+"px)")),w.translate=w.isHorizontal()?r:n;
        var s=w.maxTranslate()-w.minTranslate();
        (0===s?0:(e-w.minTranslate())/s)!==w.progress&&w.updateProgress(e),t&&w.updateActiveIndex(),"slide"!==w.params.effect&&w.effects[w.params.effect]&&w.effects[w.params.effect].setTranslate(w.translate),w.params.parallax&&w.parallax&&w.parallax.setTranslate(w.translate),w.params.scrollbar&&w.scrollbar&&w.scrollbar.setTranslate(w.translate),w.params.control&&w.controller&&w.controller.setTranslate(w.translate,i),w.emit("onSetTranslate",w,w.translate)
    }
        ,w.getTranslate=function(e,t) {
        var i,r,n,a;
        return void 0===t&&(t="x"),w.params.virtualTranslate?w.rtl?-w.translate:w.translate:(n=window.getComputedStyle(e,null),window.WebKitCSSMatrix?((r=n.transform||n.webkitTransform).split(",").length>6&&(r=r.split(", ").map(function(e) {
                return e.replace(",",".")
            }
        ).join(", ")),a=new window.WebKitCSSMatrix("none"===r?"":r)):(a=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=a.toString().split(",")),"x"===t&&(r=window.WebKitCSSMatrix?a.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(r=window.WebKitCSSMatrix?a.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),w.rtl&&r&&(r=-r),r||0)
    }
        ,w.getWrapperTranslate=function(e) {
        return void 0===e&&(e=w.isHorizontal()?"x":"y"),w.getTranslate(w.wrapper[0],e)
    }
        ,w.observers=[],w.initObservers=function() {
        if(w.params.observeParents)for(var e=w.container.parents(),t=0;
                                       t<e.length;
                                       t++)l(e[t]);
        l(w.container[0], {
                childList:!1
            }
        ),l(w.wrapper[0], {
                attributes:!1
            }
        )
    }
        ,w.disconnectObservers=function() {
        for(var e=0;
            e<w.observers.length;
            e++)w.observers[e].disconnect();
        w.observers=[]
    }
        ,w.createLoop=function() {
        w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass).remove();
        var t=w.wrapper.children("."+w.params.slideClass);
        "auto"!==w.params.slidesPerView||w.params.loopedSlides||(w.params.loopedSlides=t.length),w.loopedSlides=parseInt(w.params.loopedSlides||w.params.slidesPerView,10),w.loopedSlides=w.loopedSlides+w.params.loopAdditionalSlides,w.loopedSlides>t.length&&(w.loopedSlides=t.length);
        var i,r=[],n=[];
        for(t.each(function(i,a) {
                var s=e(this);
                i<w.loopedSlides&&n.push(a),i<t.length&&i>=t.length-w.loopedSlides&&r.push(a),s.attr("data-swiper-slide-index",i)
            }
        ),i=0;
            i<n.length;
            i++)w.wrapper.append(e(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
        for(i=r.length-1;
            i>=0;
            i--)w.wrapper.prepend(e(r[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
    }
        ,w.destroyLoop=function() {
        w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass).remove(),w.slides.removeAttr("data-swiper-slide-index")
    }
        ,w.reLoop=function(e) {
        var t=w.activeIndex-w.loopedSlides;
        w.destroyLoop(),w.createLoop(),w.updateSlidesSize(),e&&w.slideTo(t+w.loopedSlides,0,!1)
    }
        ,w.fixLoop=function() {
        var e;
        w.activeIndex<w.loopedSlides?(e=w.slides.length-3*w.loopedSlides+w.activeIndex,e+=w.loopedSlides,w.slideTo(e,0,!1,!0)):("auto"===w.params.slidesPerView&&w.activeIndex>=2*w.loopedSlides||w.activeIndex>w.slides.length-2*w.params.slidesPerView)&&(e=-w.slides.length+w.activeIndex+w.loopedSlides,e+=w.loopedSlides,w.slideTo(e,0,!1,!0))
    }
        ,w.appendSlide=function(e) {
        if(w.params.loop&&w.destroyLoop(),"object"==typeof e&&e.length)for(var t=0;
                                                                           t<e.length;
                                                                           t++)e[t]&&w.wrapper.append(e[t]);
        else w.wrapper.append(e);
        w.params.loop&&w.createLoop(),w.params.observer&&w.support.observer||w.update(!0)
    }
        ,w.prependSlide=function(e) {
        w.params.loop&&w.destroyLoop();
        var t=w.activeIndex+1;
        if("object"==typeof e&&e.length) {
            for(var i=0;
                i<e.length;
                i++)e[i]&&w.wrapper.prepend(e[i]);
            t=w.activeIndex+e.length
        }
        else w.wrapper.prepend(e);
        w.params.loop&&w.createLoop(),w.params.observer&&w.support.observer||w.update(!0),w.slideTo(t,0,!1)
    }
        ,w.removeSlide=function(e) {
        w.params.loop&&(w.destroyLoop(),w.slides=w.wrapper.children("."+w.params.slideClass));
        var t,i=w.activeIndex;
        if("object"==typeof e&&e.length) {
            for(var r=0;
                r<e.length;
                r++)t=e[r],w.slides[t]&&w.slides.eq(t).remove(),t<i&&i--;
            i=Math.max(i,0)
        }
        else t=e,w.slides[t]&&w.slides.eq(t).remove(),t<i&&i--,i=Math.max(i,0);
        w.params.loop&&w.createLoop(),w.params.observer&&w.support.observer||w.update(!0),w.params.loop?w.slideTo(i+w.loopedSlides,0,!1):w.slideTo(i,0,!1)
    }
        ,w.removeAllSlides=function() {
        for(var e=[],t=0;
            t<w.slides.length;
            t++)e.push(t);
        w.removeSlide(e)
    }
        ,w.effects= {
        fade: {
            setTranslate:function() {
                for(var e=0;
                    e<w.slides.length;
                    e++) {
                    var t=w.slides.eq(e),i=-t[0].swiperSlideOffset;
                    w.params.virtualTranslate||(i-=w.translate);
                    var r=0;
                    w.isHorizontal()||(r=i,i=0);
                    var n=w.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);
                    t.css( {
                            opacity:n
                        }
                    ).transform("translate3d("+i+"px, "+r+"px, 0px)")
                }
            },setTransition:function(e) {
                if(w.slides.transition(e),w.params.virtualTranslate&&0!==e) {
                    var t=!1;
                    w.slides.transitionEnd(function() {
                        if(!t&&w) {
                            t=!0,w.animating=!1;
                            for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=0;
                                i<e.length;
                                i++)w.wrapper.trigger(e[i])
                        }
                    })
                }
            }
        }
        ,flip: {
            setTranslate:function() {
                for(var t=0;
                    t<w.slides.length;
                    t++) {
                    var i=w.slides.eq(t),r=i[0].progress;
                    w.params.flip.limitRotation&&(r=Math.max(Math.min(i[0].progress,1),-1));
                    var n=-180*r,a=0,s=-i[0].swiperSlideOffset,o=0;
                    if(w.isHorizontal()?w.rtl&&(n=-n):(o=s,s=0,a=-n,n=0),i[0].style.zIndex=-Math.abs(Math.round(r))+w.slides.length,w.params.flip.slideShadows) {
                        var l=w.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),u=w.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");
                        0===l.length&&(l=e('<div class="swiper-slide-shadow-'+(w.isHorizontal()?"left":"top")+'"></div>'),i.append(l)),0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(w.isHorizontal()?"right":"bottom")+'"></div>'),i.append(u)),l.length&&(l[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))
                    }
                    i.transform("translate3d("+s+"px, "+o+"px, 0px) rotateX("+a+"deg) rotateY("+n+"deg)")
                }
            },setTransition:function(t) {
                if(w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),w.params.virtualTranslate&&0!==t) {
                    var i=!1;
                    w.slides.eq(w.activeIndex).transitionEnd(function() {
                        if(!i&&w&&e(this).hasClass(w.params.slideActiveClass)) {
                            i=!0,w.animating=!1;
                            for(var t=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=0;
                                r<t.length;
                                r++)w.wrapper.trigger(t[r])
                        }
                    })
                }
            }
        }
        ,cube: {
            setTranslate:function() {
                var t,i=0;
                w.params.cube.shadow&&(w.isHorizontal()?(0===(t=w.wrapper.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),w.wrapper.append(t)),t.css( {
                        height:w.width+"px"
                    }
                )):0===(t=w.container.find(".swiper-cube-shadow")).length&&(t=e('<div class="swiper-cube-shadow"></div>'),w.container.append(t)));
                for(var r=0;
                    r<w.slides.length;
                    r++) {
                    var n=w.slides.eq(r),a=90*r,s=Math.floor(a/360);
                    w.rtl&&(a=-a,s=Math.floor(-a/360));
                    var o=Math.max(Math.min(n[0].progress,1),-1),l=0,u=0,p=0;
                    r%4==0?(l=4*-s*w.size,p=0):(r-1)%4==0?(l=0,p=4*-s*w.size):(r-2)%4==0?(l=w.size+4*s*w.size,p=w.size):(r-3)%4==0&&(l=-w.size,p=3*w.size+4*w.size*s),w.rtl&&(l=-l),w.isHorizontal()||(u=l,l=0);
                    var c="rotateX("+(w.isHorizontal()?0:-a)+"deg) rotateY("+(w.isHorizontal()?a:0)+"deg) translate3d("+l+"px, "+u+"px, "+p+"px)";
                    if(o<=1&&o>-1&&(i=90*r+90*o,w.rtl&&(i=90*-r-90*o)),n.transform(c),w.params.cube.slideShadows) {
                        var d=w.isHorizontal()?n.find(".swiper-slide-shadow-left"):n.find(".swiper-slide-shadow-top"),h=w.isHorizontal()?n.find(".swiper-slide-shadow-right"):n.find(".swiper-slide-shadow-bottom");
                        0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(w.isHorizontal()?"left":"top")+'"></div>'),n.append(d)),0===h.length&&(h=e('<div class="swiper-slide-shadow-'+(w.isHorizontal()?"right":"bottom")+'"></div>'),n.append(h)),d.length&&(d[0].style.opacity=Math.max(-o,0)),h.length&&(h[0].style.opacity=Math.max(o,0))
                    }
                }if(w.wrapper.css( {
                            "-webkit-transform-origin":"50% 50% -"+w.size/2+"px","-moz-transform-origin":"50% 50% -"+w.size/2+"px","-ms-transform-origin":"50% 50% -"+w.size/2+"px","transform-origin":"50% 50% -"+w.size/2+"px"
                        }
                    ),w.params.cube.shadow)if(w.isHorizontal())t.transform("translate3d(0px, "+(w.width/2+w.params.cube.shadowOffset)+"px, "+-w.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+w.params.cube.shadowScale+")");
                else {
                    var f=Math.abs(i)-90*Math.floor(Math.abs(i)/90),m=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),g=w.params.cube.shadowScale,v=w.params.cube.shadowScale/m,y=w.params.cube.shadowOffset;
                    t.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(w.height/2+y)+"px, "+-w.height/2/v+"px) rotateX(-90deg)")
                }
                var _=w.isSafari||w.isUiWebView?-w.size/2:0;
                w.wrapper.transform("translate3d(0px,0,"+_+"px) rotateX("+(w.isHorizontal()?0:i)+"deg) rotateY("+(w.isHorizontal()?-i:0)+"deg)")
            }
            ,setTransition:function(e) {
                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),w.params.cube.shadow&&!w.isHorizontal()&&w.container.find(".swiper-cube-shadow").transition(e)
            }
        },coverflow: {
            setTranslate:function() {
                for(var t=w.translate,i=w.isHorizontal()?-t+w.width/2:-t+w.height/2,r=w.isHorizontal()?w.params.coverflow.rotate:-w.params.coverflow.rotate,n=w.params.coverflow.depth,a=0,s=w.slides.length;
                    a<s;
                    a++) {
                    var o=w.slides.eq(a),l=w.slidesSizesGrid[a],u=(i-o[0].swiperSlideOffset-l/2)/l*w.params.coverflow.modifier,p=w.isHorizontal()?r*u:0,c=w.isHorizontal()?0:r*u,d=-n*Math.abs(u),h=w.isHorizontal()?0:w.params.coverflow.stretch*u,f=w.isHorizontal()?w.params.coverflow.stretch*u:0;
                    Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(d)<.001&&(d=0),Math.abs(p)<.001&&(p=0),Math.abs(c)<.001&&(c=0);
                    var m="translate3d("+f+"px,"+h+"px,"+d+"px) rotateX("+c+"deg) rotateY("+p+"deg)";
                    if(o.transform(m),o[0].style.zIndex=1-Math.abs(Math.round(u)),w.params.coverflow.slideShadows) {
                        var g=w.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),v=w.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");
                        0===g.length&&(g=e('<div class="swiper-slide-shadow-'+(w.isHorizontal()?"left":"top")+'"></div>'),o.append(g)),0===v.length&&(v=e('<div class="swiper-slide-shadow-'+(w.isHorizontal()?"right":"bottom")+'"></div>'),o.append(v)),g.length&&(g[0].style.opacity=u>0?u:0),v.length&&(v[0].style.opacity=-u>0?-u:0)
                    }
                }w.browser.ie&&(w.wrapper[0].style.perspectiveOrigin=i+"px 50%")
            }
            ,setTransition:function(e) {
                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }
    }
        ,w.lazy= {
        initialImageLoaded:!1,loadImageInSlide:function(t,i) {
            if(void 0!==t&&(void 0===i&&(i=!0),0!==w.slides.length)) {
                var r=w.slides.eq(t),n=r.find("."+w.params.lazyLoadingClass+":not(."+w.params.lazyStatusLoadedClass+"):not(."+w.params.lazyStatusLoadingClass+")");
                !r.hasClass(w.params.lazyLoadingClass)||r.hasClass(w.params.lazyStatusLoadedClass)||r.hasClass(w.params.lazyStatusLoadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function() {
                        var t=e(this);
                        t.addClass(w.params.lazyStatusLoadingClass);
                        var n=t.attr("data-background"),a=t.attr("data-src"),s=t.attr("data-srcset"),o=t.attr("data-sizes");
                        w.loadImage(t[0],a||n,s,o,!1,function() {
                            if(void 0!==w&&null!==w&&w) {
                                if(n?(t.css("background-image",'url("'+n+'")'),t.removeAttr("data-background")):(s&&(t.attr("srcset",s),t.removeAttr("data-srcset")),o&&(t.attr("sizes",o),t.removeAttr("data-sizes")),a&&(t.attr("src",a),t.removeAttr("data-src"))),t.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass),r.find("."+w.params.lazyPreloaderClass+", ."+w.params.preloaderClass).remove(),w.params.loop&&i) {
                                    var e=r.attr("data-swiper-slide-index");
                                    if(r.hasClass(w.params.slideDuplicateClass)) {
                                        var l=w.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+w.params.slideDuplicateClass+")");
                                        w.lazy.loadImageInSlide(l.index(),!1)
                                    }
                                    else {
                                        var u=w.wrapper.children("."+w.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');
                                        w.lazy.loadImageInSlide(u.index(),!1)
                                    }
                                }w.emit("onLazyImageReady",w,r[0],t[0])
                            }
                        }),w.emit("onLazyImageLoad",w,r[0],t[0])
                    }
                )
            }
        },load:function() {
            var t,i=w.params.slidesPerView;
            if("auto"===i&&(i=0),w.lazy.initialImageLoaded||(w.lazy.initialImageLoaded=!0),w.params.watchSlidesVisibility)w.wrapper.children("."+w.params.slideVisibleClass).each(function() {
                    w.lazy.loadImageInSlide(e(this).index())
                }
            );
            else if(i>1)for(t=w.activeIndex;
                            t<w.activeIndex+i;
                            t++)w.slides[t]&&w.lazy.loadImageInSlide(t);
            else w.lazy.loadImageInSlide(w.activeIndex);
            if(w.params.lazyLoadingInPrevNext)if(i>1||w.params.lazyLoadingInPrevNextAmount&&w.params.lazyLoadingInPrevNextAmount>1) {
                var r=w.params.lazyLoadingInPrevNextAmount,n=i,a=Math.min(w.activeIndex+n+Math.max(r,n),w.slides.length),s=Math.max(w.activeIndex-Math.max(n,r),0);
                for(t=w.activeIndex+i;
                    t<a;
                    t++)w.slides[t]&&w.lazy.loadImageInSlide(t);
                for(t=s;
                    t<w.activeIndex;
                    t++)w.slides[t]&&w.lazy.loadImageInSlide(t)
            }
            else {
                var o=w.wrapper.children("."+w.params.slideNextClass);
                o.length>0&&w.lazy.loadImageInSlide(o.index());
                var l=w.wrapper.children("."+w.params.slidePrevClass);
                l.length>0&&w.lazy.loadImageInSlide(l.index())
            }
        },onTransitionStart:function() {
            w.params.lazyLoading&&(w.params.lazyLoadingOnTransitionStart||!w.params.lazyLoadingOnTransitionStart&&!w.lazy.initialImageLoaded)&&w.lazy.load()
        }
        ,onTransitionEnd:function() {
            w.params.lazyLoading&&!w.params.lazyLoadingOnTransitionStart&&w.lazy.load()
        }
    },w.scrollbar= {
        isTouched:!1,setDragPosition:function(e) {
            var t=w.scrollbar,i=(w.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-t.track.offset()[w.isHorizontal()?"left":"top"]-t.dragSize/2,r=-w.minTranslate()*t.moveDivider,n=-w.maxTranslate()*t.moveDivider;
            i<r?i=r:i>n&&(i=n),i=-i/t.moveDivider,w.updateProgress(i),w.setWrapperTranslate(i,!0)
        }
        ,dragStart:function(e) {
            var t=w.scrollbar;
            t.isTouched=!0,e.preventDefault(),e.stopPropagation(),t.setDragPosition(e),clearTimeout(t.dragTimeout),t.track.transition(0),w.params.scrollbarHide&&t.track.css("opacity",1),w.wrapper.transition(100),t.drag.transition(100),w.emit("onScrollbarDragStart",w)
        }
        ,dragMove:function(e) {
            var t=w.scrollbar;
            t.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),w.wrapper.transition(0),t.track.transition(0),t.drag.transition(0),w.emit("onScrollbarDragMove",w))
        }
        ,dragEnd:function(e) {
            var t=w.scrollbar;
            t.isTouched&&(t.isTouched=!1,w.params.scrollbarHide&&(clearTimeout(t.dragTimeout),t.dragTimeout=setTimeout(function() {
                    t.track.css("opacity",0),t.track.transition(400)
                }
                ,1e3)),w.emit("onScrollbarDragEnd",w),w.params.scrollbarSnapOnRelease&&w.slideReset())
        }
        ,draggableEvents:!1!==w.params.simulateTouch||w.support.touch?w.touchEvents:w.touchEventsDesktop,enableDraggable:function() {
            var t=w.scrollbar,i=w.support.touch?t.track:document;
            e(t.track).on(t.draggableEvents.start,t.dragStart),e(i).on(t.draggableEvents.move,t.dragMove),e(i).on(t.draggableEvents.end,t.dragEnd)
        }
        ,disableDraggable:function() {
            var t=w.scrollbar,i=w.support.touch?t.track:document;
            e(t.track).off(t.draggableEvents.start,t.dragStart),e(i).off(t.draggableEvents.move,t.dragMove),e(i).off(t.draggableEvents.end,t.dragEnd)
        }
        ,set:function() {
            if(w.params.scrollbar) {
                var t=w.scrollbar;
                t.track=e(w.params.scrollbar),w.params.uniqueNavElements&&"string"==typeof w.params.scrollbar&&t.track.length>1&&1===w.container.find(w.params.scrollbar).length&&(t.track=w.container.find(w.params.scrollbar)),t.drag=t.track.find(".swiper-scrollbar-drag"),0===t.drag.length&&(t.drag=e('<div class="swiper-scrollbar-drag"></div>'),t.track.append(t.drag)),t.drag[0].style.width="",t.drag[0].style.height="",t.trackSize=w.isHorizontal()?t.track[0].offsetWidth:t.track[0].offsetHeight,t.divider=w.size/w.virtualSize,t.moveDivider=t.divider*(t.trackSize/w.size),t.dragSize=t.trackSize*t.divider,w.isHorizontal()?t.drag[0].style.width=t.dragSize+"px":t.drag[0].style.height=t.dragSize+"px",t.divider>=1?t.track[0].style.display="none":t.track[0].style.display="",w.params.scrollbarHide&&(t.track[0].style.opacity=0)
            }
        },setTranslate:function() {
            if(w.params.scrollbar) {
                var e,t=w.scrollbar,i=(w.translate,t.dragSize);
                e=(t.trackSize-t.dragSize)*w.progress,w.rtl&&w.isHorizontal()?(e=-e)>0?(i=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(i=t.trackSize+e):e<0?(i=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(i=t.trackSize-e),w.isHorizontal()?(w.support.transforms3d?t.drag.transform("translate3d("+e+"px, 0, 0)"):t.drag.transform("translateX("+e+"px)"),t.drag[0].style.width=i+"px"):(w.support.transforms3d?t.drag.transform("translate3d(0px, "+e+"px, 0)"):t.drag.transform("translateY("+e+"px)"),t.drag[0].style.height=i+"px"),w.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function() {
                        t.track[0].style.opacity=0,t.track.transition(400)
                    }
                    ,1e3))
            }
        },setTransition:function(e) {
            w.params.scrollbar&&w.scrollbar.drag.transition(e)
        }
    },w.controller= {
        LinearSpline:function(e,t) {
            var i=function() {
                var e,t,i;
                return function(r,n) {
                    for(t=-1,e=r.length;
                        e-t>1;
                    )r[i=e+t>>1]<=n?t=i:e=i;
                    return e
                }
            }();
            this.x=e,this.y=t,this.lastIndex=e.length-1;
            var r,n;
            this.x.length,this.interpolate=function(e) {
                return e?(n=i(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0
            }
        },getInterpolateFunction:function(e) {
            w.controller.spline||(w.controller.spline=w.params.loop?new w.controller.LinearSpline(w.slidesGrid,e.slidesGrid):new w.controller.LinearSpline(w.snapGrid,e.snapGrid))
        }
        ,setTranslate:function(e,i) {
            function r(t) {
                e=t.rtl&&"horizontal"===t.params.direction?-w.translate:w.translate,"slide"===w.params.controlBy&&(w.controller.getInterpolateFunction(t),a=-w.controller.spline.interpolate(-e)),a&&"container"!==w.params.controlBy||(n=(t.maxTranslate()-t.minTranslate())/(w.maxTranslate()-w.minTranslate()),a=(e-w.minTranslate())*n+t.minTranslate()),w.params.controlInverse&&(a=t.maxTranslate()-a),t.updateProgress(a),t.setWrapperTranslate(a,!1,w),t.updateActiveIndex()
            }
            var n,a,s=w.params.control;
            if(Array.isArray(s))for(var o=0;
                                    o<s.length;
                                    o++)s[o]!==i&&s[o]instanceof t&&r(s[o]);
            else s instanceof t&&i!==s&&r(s)
        }
        ,setTransition:function(e,i) {
            function r(t) {
                t.setWrapperTransition(e,w),0!==e&&(t.onTransitionStart(),t.wrapper.transitionEnd(function() {
                        a&&(t.params.loop&&"slide"===w.params.controlBy&&t.fixLoop(),t.onTransitionEnd())
                    }
                ))
            }
            var n,a=w.params.control;
            if(Array.isArray(a))for(n=0;
                                    n<a.length;
                                    n++)a[n]!==i&&a[n]instanceof t&&r(a[n]);
            else a instanceof t&&i!==a&&r(a)
        }
    },w.hashnav= {
        onHashCange:function(e,t) {
            var i=document.location.hash.replace("#","");
            i!==w.slides.eq(w.activeIndex).attr("data-hash")&&w.slideTo(w.wrapper.children("."+w.params.slideClass+'[data-hash="'+i+'"]').index())
        }
        ,attachEvents:function(t) {
            var i=t?"off":"on";
            e(window)[i]("hashchange",w.hashnav.onHashCange)
        }
        ,setHash:function() {
            if(w.hashnav.initialized&&w.params.hashnav)if(w.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+w.slides.eq(w.activeIndex).attr("data-hash")||"");
            else {
                var e=w.slides.eq(w.activeIndex),t=e.attr("data-hash")||e.attr("data-history");
                document.location.hash=t||""
            }
        },init:function() {
            if(w.params.hashnav&&!w.params.history) {
                w.hashnav.initialized=!0;
                var e=document.location.hash.replace("#","");
                if(e)for(var t=0,i=w.slides.length;
                         t<i;
                         t++) {
                    var r=w.slides.eq(t);
                    if((r.attr("data-hash")||r.attr("data-history"))===e&&!r.hasClass(w.params.slideDuplicateClass)) {
                        var n=r.index();
                        w.slideTo(n,0,w.params.runCallbacksOnInit,!0)
                    }
                }w.params.hashnavWatchState&&w.hashnav.attachEvents()
            }
        },destroy:function() {
            w.params.hashnavWatchState&&w.hashnav.attachEvents(!0)
        }
    },w.history= {
        init:function() {
            if(w.params.history) {
                if(!window.history||!window.history.pushState)return w.params.history=!1,void(w.params.hashnav=!0);
                w.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,w.params.runCallbacksOnInit),w.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))
            }
        },setHistoryPopState:function() {
            w.history.paths=w.history.getPathValues(),w.history.scrollToSlide(w.params.speed,w.history.paths.value,!1)
        }
        ,getPathValues:function() {
            var e=window.location.pathname.slice(1).split("/"),t=e.length;
            return {
                key:e[t-2],value:e[t-1]
            }
        },setHistory:function(e,t) {
            if(w.history.initialized&&w.params.history) {
                var i=w.slides.eq(t),r=this.slugify(i.attr("data-history"));
                window.location.pathname.includes(e)||(r=e+"/"+r),w.params.replaceState?window.history.replaceState(null,null,r):window.history.pushState(null,null,r)
            }
        },slugify:function(e) {
            return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")
        }
        ,scrollToSlide:function(e,t,i) {
            if(t)for(var r=0,n=w.slides.length;
                     r<n;
                     r++) {
                var a=w.slides.eq(r);
                if(this.slugify(a.attr("data-history"))===t&&!a.hasClass(w.params.slideDuplicateClass)) {
                    var s=a.index();
                    w.slideTo(s,e,i)
                }
            }else w.slideTo(0,e,i)
        }
    },w.disableKeyboardControl=function() {
        w.params.keyboardControl=!1,e(document).off("keydown",u)
    }
        ,w.enableKeyboardControl=function() {
        w.params.keyboardControl=!0,e(document).on("keydown",u)
    }
        ,w.mousewheel= {
        event:!1,lastScrollTime:(new window.Date).getTime()
    }
        ,w.params.mousewheelControl&&(w.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function() {
        var e="onwheel"in document;
        if(!e) {
            var t=document.createElement("div");
            t.setAttribute("onwheel","return;
            "),e="function"==typeof t.onwheel
        }
        return!e&&document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e
    }
    ()?"wheel":"mousewheel"),w.disableMousewheelControl=function() {
        if(!w.mousewheel.event)return!1;
        var t=w.container;
        return"container"!==w.params.mousewheelEventsTarged&&(t=e(w.params.mousewheelEventsTarged)),t.off(w.mousewheel.event,c),w.params.mousewheelControl=!1,!0
    }
        ,w.enableMousewheelControl=function() {
        if(!w.mousewheel.event)return!1;
        var t=w.container;
        return"container"!==w.params.mousewheelEventsTarged&&(t=e(w.params.mousewheelEventsTarged)),t.on(w.mousewheel.event,c),w.params.mousewheelControl=!0,!0
    }
        ,w.parallax= {
        setTranslate:function() {
            w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                    d(this,w.progress)
                }
            ),w.slides.each(function() {
                    var t=e(this);
                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            d(this,Math.min(Math.max(t[0].progress,-1),1))
                        }
                    )
                }
            )
        }
        ,setTransition:function(t) {
            void 0===t&&(t=w.params.speed),w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                    var i=e(this),r=parseInt(i.attr("data-swiper-parallax-duration"),10)||t;
                    0===t&&(r=0),i.transition(r)
                }
            )
        }
    },w.zoom= {
        scale:1,currentScale:1,isScaling:!1,gesture: {
            slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:w.params.zoomMax
        }
        ,image: {
            isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart: {
            }
            ,touchesCurrent: {
            }
        },velocity: {
            x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0
        }
        ,getDistanceBetweenTouches:function(e) {
            if(e.targetTouches.length<2)return 1;
            var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,r=e.targetTouches[1].pageX,n=e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(r-t,2)+Math.pow(n-i,2))
        }
        ,onGestureStart:function(t) {
            var i=w.zoom;
            if(!w.support.gestures) {
                if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;
                i.gesture.scaleStart=i.getDistanceBetweenTouches(t)
            }
            i.gesture.slide&&i.gesture.slide.length||(i.gesture.slide=e(this),0===i.gesture.slide.length&&(i.gesture.slide=w.slides.eq(w.activeIndex)),i.gesture.image=i.gesture.slide.find("img, svg, canvas"),i.gesture.imageWrap=i.gesture.image.parent("."+w.params.zoomContainerClass),i.gesture.zoomMax=i.gesture.imageWrap.attr("data-swiper-zoom")||w.params.zoomMax,0!==i.gesture.imageWrap.length)?(i.gesture.image.transition(0),i.isScaling=!0):i.gesture.image=void 0
        }
        ,onGestureChange:function(e) {
            var t=w.zoom;
            if(!w.support.gestures) {
                if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;
                t.gesture.scaleMove=t.getDistanceBetweenTouches(e)
            }
            t.gesture.image&&0!==t.gesture.image.length&&(w.support.gestures?t.scale=e.scale*t.currentScale:t.scale=t.gesture.scaleMove/t.gesture.scaleStart*t.currentScale,t.scale>t.gesture.zoomMax&&(t.scale=t.gesture.zoomMax-1+Math.pow(t.scale-t.gesture.zoomMax+1,.5)),t.scale<w.params.zoomMin&&(t.scale=w.params.zoomMin+1-Math.pow(w.params.zoomMin-t.scale+1,.5)),t.gesture.image.transform("translate3d(0,0,0) scale("+t.scale+")"))
        }
        ,onGestureEnd:function(e) {
            var t=w.zoom;
            !w.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||t.gesture.image&&0!==t.gesture.image.length&&(t.scale=Math.max(Math.min(t.scale,t.gesture.zoomMax),w.params.zoomMin),t.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale("+t.scale+")"),t.currentScale=t.scale,t.isScaling=!1,1===t.scale&&(t.gesture.slide=void 0))
        }
        ,onTouchStart:function(e,t) {
            var i=e.zoom;
            i.gesture.image&&0!==i.gesture.image.length&&(i.image.isTouched||("android"===e.device.os&&t.preventDefault(),i.image.isTouched=!0,i.image.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,i.image.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))
        }
        ,onTouchMove:function(e) {
            var t=w.zoom;
            if(t.gesture.image&&0!==t.gesture.image.length&&(w.allowClick=!1,t.image.isTouched&&t.gesture.slide)) {
                t.image.isMoved||(t.image.width=t.gesture.image[0].offsetWidth,t.image.height=t.gesture.image[0].offsetHeight,t.image.startX=w.getTranslate(t.gesture.imageWrap[0],"x")||0,t.image.startY=w.getTranslate(t.gesture.imageWrap[0],"y")||0,t.gesture.slideWidth=t.gesture.slide[0].offsetWidth,t.gesture.slideHeight=t.gesture.slide[0].offsetHeight,t.gesture.imageWrap.transition(0),w.rtl&&(t.image.startX=-t.image.startX),w.rtl&&(t.image.startY=-t.image.startY));
                var i=t.image.width*t.scale,r=t.image.height*t.scale;
                if(!(i<t.gesture.slideWidth&&r<t.gesture.slideHeight)) {
                    if(t.image.minX=Math.min(t.gesture.slideWidth/2-i/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-r/2,0),t.image.maxY=-t.image.minY,t.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,t.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!t.image.isMoved&&!t.isScaling) {
                        if(w.isHorizontal()&&Math.floor(t.image.minX)===Math.floor(t.image.startX)&&t.image.touchesCurrent.x<t.image.touchesStart.x||Math.floor(t.image.maxX)===Math.floor(t.image.startX)&&t.image.touchesCurrent.x>t.image.touchesStart.x)return void(t.image.isTouched=!1);
                        if(!w.isHorizontal()&&Math.floor(t.image.minY)===Math.floor(t.image.startY)&&t.image.touchesCurrent.y<t.image.touchesStart.y||Math.floor(t.image.maxY)===Math.floor(t.image.startY)&&t.image.touchesCurrent.y>t.image.touchesStart.y)return void(t.image.isTouched=!1)
                    }
                    e.preventDefault(),e.stopPropagation(),t.image.isMoved=!0,t.image.currentX=t.image.touchesCurrent.x-t.image.touchesStart.x+t.image.startX,t.image.currentY=t.image.touchesCurrent.y-t.image.touchesStart.y+t.image.startY,t.image.currentX<t.image.minX&&(t.image.currentX=t.image.minX+1-Math.pow(t.image.minX-t.image.currentX+1,.8)),t.image.currentX>t.image.maxX&&(t.image.currentX=t.image.maxX-1+Math.pow(t.image.currentX-t.image.maxX+1,.8)),t.image.currentY<t.image.minY&&(t.image.currentY=t.image.minY+1-Math.pow(t.image.minY-t.image.currentY+1,.8)),t.image.currentY>t.image.maxY&&(t.image.currentY=t.image.maxY-1+Math.pow(t.image.currentY-t.image.maxY+1,.8)),t.velocity.prevPositionX||(t.velocity.prevPositionX=t.image.touchesCurrent.x),t.velocity.prevPositionY||(t.velocity.prevPositionY=t.image.touchesCurrent.y),t.velocity.prevTime||(t.velocity.prevTime=Date.now()),t.velocity.x=(t.image.touchesCurrent.x-t.velocity.prevPositionX)/(Date.now()-t.velocity.prevTime)/2,t.velocity.y=(t.image.touchesCurrent.y-t.velocity.prevPositionY)/(Date.now()-t.velocity.prevTime)/2,Math.abs(t.image.touchesCurrent.x-t.velocity.prevPositionX)<2&&(t.velocity.x=0),Math.abs(t.image.touchesCurrent.y-t.velocity.prevPositionY)<2&&(t.velocity.y=0),t.velocity.prevPositionX=t.image.touchesCurrent.x,t.velocity.prevPositionY=t.image.touchesCurrent.y,t.velocity.prevTime=Date.now(),t.gesture.imageWrap.transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")
                }
            }
        }
        ,onTouchEnd:function(e,t) {
            var i=e.zoom;
            if(i.gesture.image&&0!==i.gesture.image.length) {
                if(!i.image.isTouched||!i.image.isMoved)return i.image.isTouched=!1,void(i.image.isMoved=!1);
                i.image.isTouched=!1,i.image.isMoved=!1;
                var r=300,n=300,a=i.velocity.x*r,s=i.image.currentX+a,o=i.velocity.y*n,l=i.image.currentY+o;
                0!==i.velocity.x&&(r=Math.abs((s-i.image.currentX)/i.velocity.x)),0!==i.velocity.y&&(n=Math.abs((l-i.image.currentY)/i.velocity.y));
                var u=Math.max(r,n);
                i.image.currentX=s,i.image.currentY=l;
                var p=i.image.width*i.scale,c=i.image.height*i.scale;
                i.image.minX=Math.min(i.gesture.slideWidth/2-p/2,0),i.image.maxX=-i.image.minX,i.image.minY=Math.min(i.gesture.slideHeight/2-c/2,0),i.image.maxY=-i.image.minY,i.image.currentX=Math.max(Math.min(i.image.currentX,i.image.maxX),i.image.minX),i.image.currentY=Math.max(Math.min(i.image.currentY,i.image.maxY),i.image.minY),i.gesture.imageWrap.transition(u).transform("translate3d("+i.image.currentX+"px, "+i.image.currentY+"px,0)")
            }
        },onTransitionEnd:function(e) {
            var t=e.zoom;
            t.gesture.slide&&e.previousIndex!==e.activeIndex&&(t.gesture.image.transform("translate3d(0,0,0) scale(1)"),t.gesture.imageWrap.transform("translate3d(0,0,0)"),t.gesture.slide=t.gesture.image=t.gesture.imageWrap=void 0,t.scale=t.currentScale=1)
        }
        ,toggleZoom:function(t,i) {
            var r=t.zoom;
            if(r.gesture.slide||(r.gesture.slide=t.clickedSlide?e(t.clickedSlide):t.slides.eq(t.activeIndex),r.gesture.image=r.gesture.slide.find("img, svg, canvas"),r.gesture.imageWrap=r.gesture.image.parent("."+t.params.zoomContainerClass)),r.gesture.image&&0!==r.gesture.image.length) {
                var n,a,s,o,l,u,p,c,d,h,f,m,g,v,y,_,x,w;
                void 0===r.image.touchesStart.x&&i?(n="touchend"===i.type?i.changedTouches[0].pageX:i.pageX,a="touchend"===i.type?i.changedTouches[0].pageY:i.pageY):(n=r.image.touchesStart.x,a=r.image.touchesStart.y),r.scale&&1!==r.scale?(r.scale=r.currentScale=1,r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),r.gesture.slide=void 0):(r.scale=r.currentScale=r.gesture.imageWrap.attr("data-swiper-zoom")||t.params.zoomMax,i?(x=r.gesture.slide[0].offsetWidth,w=r.gesture.slide[0].offsetHeight,s=r.gesture.slide.offset().left,o=r.gesture.slide.offset().top,l=s+x/2-n,u=o+w/2-a,d=r.gesture.image[0].offsetWidth,h=r.gesture.image[0].offsetHeight,f=d*r.scale,m=h*r.scale,g=Math.min(x/2-f/2,0),v=Math.min(w/2-m/2,0),y=-g,_=-v,p=l*r.scale,c=u*r.scale,p<g&&(p=g),p>y&&(p=y),c<v&&(c=v),c>_&&(c=_)):(p=0,c=0),r.gesture.imageWrap.transition(300).transform("translate3d("+p+"px, "+c+"px,0)"),r.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+r.scale+")"))
            }
        },attachEvents:function(t) {
            var i=t?"off":"on";
            if(w.params.zoom) {
                var r=(w.slides,!("touchstart"!==w.touchEvents.start||!w.support.passiveListener||!w.params.passiveListeners)&& {
                    passive:!0,capture:!1
                }
                );
                w.support.gestures?(w.slides[i]("gesturestart",w.zoom.onGestureStart,r),w.slides[i]("gesturechange",w.zoom.onGestureChange,r),w.slides[i]("gestureend",w.zoom.onGestureEnd,r)):"touchstart"===w.touchEvents.start&&(w.slides[i](w.touchEvents.start,w.zoom.onGestureStart,r),w.slides[i](w.touchEvents.move,w.zoom.onGestureChange,r),w.slides[i](w.touchEvents.end,w.zoom.onGestureEnd,r)),w[i]("touchStart",w.zoom.onTouchStart),w.slides.each(function(t,r) {
                        e(r).find("."+w.params.zoomContainerClass).length>0&&e(r)[i](w.touchEvents.move,w.zoom.onTouchMove)
                    }
                ),w[i]("touchEnd",w.zoom.onTouchEnd),w[i]("transitionEnd",w.zoom.onTransitionEnd),w.params.zoomToggle&&w.on("doubleTap",w.zoom.toggleZoom)
            }
        },init:function() {
            w.zoom.attachEvents()
        }
        ,destroy:function() {
            w.zoom.attachEvents(!0)
        }
    },w._plugins=[];
    for(var B in w.plugins) {
        var H=w.plugins[B](w,w.params[B]);
        H&&w._plugins.push(H)
    }
    return w.callPlugins=function(e) {
        for(var t=0;
            t<w._plugins.length;
            t++)e in w._plugins[t]&&w._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
    }
        ,w.emitterEventListeners= {
    }
        ,w.emit=function(e) {
        w.params[e]&&w.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
        var t;
        if(w.emitterEventListeners[e])for(t=0;
                                          t<w.emitterEventListeners[e].length;
                                          t++)w.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
        w.callPlugins&&w.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
    }
        ,w.on=function(e,t) {
        return e=h(e),w.emitterEventListeners[e]||(w.emitterEventListeners[e]=[]),w.emitterEventListeners[e].push(t),w
    }
        ,w.off=function(e,t) {
        var i;
        if(e=h(e),void 0===t)return w.emitterEventListeners[e]=[],w;
        if(w.emitterEventListeners[e]&&0!==w.emitterEventListeners[e].length) {
            for(i=0;
                i<w.emitterEventListeners[e].length;
                i++)w.emitterEventListeners[e][i]===t&&w.emitterEventListeners[e].splice(i,1);
            return w
        }
    },w.once=function(e,t) {
        e=h(e);
        var i=function() {
                t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),w.off(e,i)
            }
            ;
        return w.on(e,i),w
    }
        ,w.a11y= {
        makeFocusable:function(e) {
            return e.attr("tabIndex","0"),e
        }
        ,addRole:function(e,t) {
            return e.attr("role",t),e
        }
        ,addLabel:function(e,t) {
            return e.attr("aria-label",t),e
        }
        ,disable:function(e) {
            return e.attr("aria-disabled",!0),e
        }
        ,enable:function(e) {
            return e.attr("aria-disabled",!1),e
        }
        ,onEnterKey:function(t) {
            13===t.keyCode&&(e(t.target).is(w.params.nextButton)?(w.onClickNext(t),w.isEnd?w.a11y.notify(w.params.lastSlideMessage):w.a11y.notify(w.params.nextSlideMessage)):e(t.target).is(w.params.prevButton)&&(w.onClickPrev(t),w.isBeginning?w.a11y.notify(w.params.firstSlideMessage):w.a11y.notify(w.params.prevSlideMessage)),e(t.target).is("."+w.params.bulletClass)&&e(t.target)[0].click())
        }
        ,liveRegion:e('<span class="'+w.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e) {
            var t=w.a11y.liveRegion;
            0!==t.length&&(t.html(""),t.html(e))
        }
        ,init:function() {
            w.params.nextButton&&w.nextButton&&w.nextButton.length>0&&(w.a11y.makeFocusable(w.nextButton),w.a11y.addRole(w.nextButton,"button"),w.a11y.addLabel(w.nextButton,w.params.nextSlideMessage)),w.params.prevButton&&w.prevButton&&w.prevButton.length>0&&(w.a11y.makeFocusable(w.prevButton),w.a11y.addRole(w.prevButton,"button"),w.a11y.addLabel(w.prevButton,w.params.prevSlideMessage)),e(w.container).append(w.a11y.liveRegion)
        }
        ,initPagination:function() {
            w.params.pagination&&w.params.paginationClickable&&w.bullets&&w.bullets.length&&w.bullets.each(function() {
                var t=e(this);
                w.a11y.makeFocusable(t),w.a11y.addRole(t,"button"),w.a11y.addLabel(t,w.params.paginationBulletMessage.replace(/ {
                {index
                }
            }/,t.index()+1))
        }
)
}
,destroy:function() {
    w.a11y.liveRegion&&w.a11y.liveRegion.length>0&&w.a11y.liveRegion.remove()
}
},w.init=function() {
    w.params.loop&&w.createLoop(),w.updateContainerSize(),w.updateSlidesSize(),w.updatePagination(),w.params.scrollbar&&w.scrollbar&&(w.scrollbar.set(),w.params.scrollbarDraggable&&w.scrollbar.enableDraggable()),"slide"!==w.params.effect&&w.effects[w.params.effect]&&(w.params.loop||w.updateProgress(),w.effects[w.params.effect].setTranslate()),w.params.loop?w.slideTo(w.params.initialSlide+w.loopedSlides,0,w.params.runCallbacksOnInit):(w.slideTo(w.params.initialSlide,0,w.params.runCallbacksOnInit),0===w.params.initialSlide&&(w.parallax&&w.params.parallax&&w.parallax.setTranslate(),w.lazy&&w.params.lazyLoading&&(w.lazy.load(),w.lazy.initialImageLoaded=!0))),w.attachEvents(),w.params.observer&&w.support.observer&&w.initObservers(),w.params.preloadImages&&!w.params.lazyLoading&&w.preloadImages(),w.params.zoom&&w.zoom&&w.zoom.init(),w.params.autoplay&&w.startAutoplay(),w.params.keyboardControl&&w.enableKeyboardControl&&w.enableKeyboardControl(),w.params.mousewheelControl&&w.enableMousewheelControl&&w.enableMousewheelControl(),w.params.hashnavReplaceState&&(w.params.replaceState=w.params.hashnavReplaceState),w.params.history&&w.history&&w.history.init(),w.params.hashnav&&w.hashnav&&w.hashnav.init(),w.params.a11y&&w.a11y&&w.a11y.init(),w.emit("onInit",w)
}
    ,w.cleanupStyles=function() {
    w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),w.wrapper.removeAttr("style"),w.slides&&w.slides.length&&w.slides.removeClass([w.params.slideVisibleClass,w.params.slideActiveClass,w.params.slideNextClass,w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),w.paginationContainer&&w.paginationContainer.length&&w.paginationContainer.removeClass(w.params.paginationHiddenClass),w.bullets&&w.bullets.length&&w.bullets.removeClass(w.params.bulletActiveClass),w.params.prevButton&&e(w.params.prevButton).removeClass(w.params.buttonDisabledClass),w.params.nextButton&&e(w.params.nextButton).removeClass(w.params.buttonDisabledClass),w.params.scrollbar&&w.scrollbar&&(w.scrollbar.track&&w.scrollbar.track.length&&w.scrollbar.track.removeAttr("style"),w.scrollbar.drag&&w.scrollbar.drag.length&&w.scrollbar.drag.removeAttr("style"))
}
    ,w.destroy=function(e,t) {
    w.detachEvents(),w.stopAutoplay(),w.params.scrollbar&&w.scrollbar&&w.params.scrollbarDraggable&&w.scrollbar.disableDraggable(),w.params.loop&&w.destroyLoop(),t&&w.cleanupStyles(),w.disconnectObservers(),w.params.zoom&&w.zoom&&w.zoom.destroy(),w.params.keyboardControl&&w.disableKeyboardControl&&w.disableKeyboardControl(),w.params.mousewheelControl&&w.disableMousewheelControl&&w.disableMousewheelControl(),w.params.a11y&&w.a11y&&w.a11y.destroy(),w.params.history&&!w.params.replaceState&&window.removeEventListener("popstate",w.history.setHistoryPopState),w.params.hashnav&&w.hashnav&&w.hashnav.destroy(),w.emit("onDestroy"),!1!==e&&(w=null)
}
    ,w.init(),w
}
};
t.prototype= {
    isSafari:function() {
        var e=window.navigator.userAgent.toLowerCase();
        return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0
    }
    (),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e) {
        return"[object Array]"===Object.prototype.toString.apply(e)
    }
    ,browser: {
        ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function() {
            var e=document.createElement("div");
            return e.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length
        }
        ()
    }
    ,device:function() {
        var e=window.navigator.userAgent,t=e.match(/(Android);
        ?[\s\/]+([\d.]+)?/),i=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!i&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        return {
            ios:i||n||r,android:t
        }
    }(),support: {
        touch:window.Modernizr&&!0===Modernizr.touch||!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch),transforms3d:window.Modernizr&&!0===Modernizr.csstransforms3d||function() {
            var e=document.createElement("div").style;
            return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e
        }
        (),flexbox:function() {
            for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;
                i<t.length;
                i++)if(t[i]in e)return!0
        }
        (),observer:"MutationObserver"in window||"WebkitMutationObserver"in window,passiveListener:function() {
            var e=!1;
            try {
                var t=Object.defineProperty( {
                    }
                    ,"passive", {
                        get:function() {
                            e=!0
                        }
                    });
                window.addEventListener("testPassiveListener",null,t)
            }
            catch(e) {
            }
            return e
        }
        (),gestures:"ongesturestart"in window
    }
    ,plugins: {
    }
};
for(var i=function() {
    var e=function(e) {
            var t=this,i=0;
            for(i=0;
                i<e.length;
                i++)t[i]=e[i];
            return t.length=e.length,this
        }
        ,t=function(t,i) {
            var r=[],n=0;
            if(t&&!i&&t instanceof e)return t;
            if(t)if("string"==typeof t) {
                var a,s,o=t.trim();
                if(o.indexOf("<")>=0&&o.indexOf(">")>=0) {
                    var l="div";
                    for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),(s=document.createElement(l)).innerHTML=t,n=0;
                        n<s.childNodes.length;
                        n++)r.push(s.childNodes[n])
                }
                else for(a=i||"#"!==t[0]||t.match(/[ .<>:~]/)?(i||document).querySelectorAll(t):[document.getElementById(t.split("#")[1])],n=0;
                         n<a.length;
                         n++)a[n]&&r.push(a[n])
            }
            else if(t.nodeType||t===window||t===document)r.push(t);
            else if(t.length>0&&t[0].nodeType)for(n=0;
                                                  n<t.length;
                                                  n++)r.push(t[n]);
            return new e(r)
        }
        ;
    return e.prototype= {
        addClass:function(e) {
            if(void 0===e)return this;
            for(var t=e.split(" "),i=0;
                i<t.length;
                i++)for(var r=0;
                        r<this.length;
                        r++)this[r].classList.add(t[i]);
            return this
        }
        ,removeClass:function(e) {
            for(var t=e.split(" "),i=0;
                i<t.length;
                i++)for(var r=0;
                        r<this.length;
                        r++)this[r].classList.remove(t[i]);
            return this
        }
        ,hasClass:function(e) {
            return!!this[0]&&this[0].classList.contains(e)
        }
        ,toggleClass:function(e) {
            for(var t=e.split(" "),i=0;
                i<t.length;
                i++)for(var r=0;
                        r<this.length;
                        r++)this[r].classList.toggle(t[i]);
            return this
        }
        ,attr:function(e,t) {
            if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;
            for(var i=0;
                i<this.length;
                i++)if(2===arguments.length)this[i].setAttribute(e,t);
            else for(var r in e)this[i][r]=e[r],this[i].setAttribute(r,e[r]);
            return this
        }
        ,removeAttr:function(e) {
            for(var t=0;
                t<this.length;
                t++)this[t].removeAttribute(e);
            return this
        }
        ,data:function(e,t) {
            if(void 0!==t) {
                for(var i=0;
                    i<this.length;
                    i++) {
                    var r=this[i];
                    r.dom7ElementDataStorage||(r.dom7ElementDataStorage= {
                    }
                    ),r.dom7ElementDataStorage[e]=t
                }
                return this
            }
            if(this[0]) {
                var n=this[0].getAttribute("data-"+e);
                return n||(this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0)
            }
        },transform:function(e) {
            for(var t=0;
                t<this.length;
                t++) {
                var i=this[t].style;
                i.webkitTransform=i.MsTransform=i.msTransform=i.MozTransform=i.OTransform=i.transform=e
            }
            return this
        }
        ,transition:function(e) {
            "string"!=typeof e&&(e+="ms");
            for(var t=0;
                t<this.length;
                t++) {
                var i=this[t].style;
                i.webkitTransitionDuration=i.MsTransitionDuration=i.msTransitionDuration=i.MozTransitionDuration=i.OTransitionDuration=i.transitionDuration=e
            }
            return this
        }
        ,on:function(e,i,r,n) {
            function a(e) {
                var n=e.target;
                if(t(n).is(i))r.call(n,e);
                else for(var a=t(n).parents(),s=0;
                         s<a.length;
                         s++)t(a[s]).is(i)&&r.call(a[s],e)
            }
            var s,o,l=e.split(" ");
            for(s=0;
                s<this.length;
                s++)if("function"==typeof i||!1===i)for("function"==typeof i&&(r=arguments[1],n=arguments[2]||!1),o=0;
                                                        o<l.length;
                                                        o++)this[s].addEventListener(l[o],r,n);
            else for(o=0;
                     o<l.length;
                     o++)this[s].dom7LiveListeners||(this[s].dom7LiveListeners=[]),this[s].dom7LiveListeners.push( {
                            listener:r,liveListener:a
                        }
                    ),this[s].addEventListener(l[o],a,n);
            return this
        }
        ,off:function(e,t,i,r) {
            for(var n=e.split(" "),a=0;
                a<n.length;
                a++)for(var s=0;
                        s<this.length;
                        s++)if("function"==typeof t||!1===t)"function"==typeof t&&(i=arguments[1],r=arguments[2]||!1),this[s].removeEventListener(n[a],i,r);
                else if(this[s].dom7LiveListeners)for(var o=0;
                                                      o<this[s].dom7LiveListeners.length;
                                                      o++)this[s].dom7LiveListeners[o].listener===i&&this[s].removeEventListener(n[a],this[s].dom7LiveListeners[o].liveListener,r);
            return this
        }
        ,once:function(e,t,i,r) {
            function n(s) {
                i(s),a.off(e,t,n,r)
            }
            var a=this;
            "function"==typeof t&&(t=!1,i=arguments[1],r=arguments[2]),a.on(e,t,n,r)
        }
        ,trigger:function(e,t) {
            for(var i=0;
                i<this.length;
                i++) {
                var r;
                try {
                    r=new window.CustomEvent(e, {
                            detail:t,bubbles:!0,cancelable:!0
                        }
                    )
                }
                catch(i) {
                    (r=document.createEvent("Event")).initEvent(e,!0,!0),r.detail=t
                }
                this[i].dispatchEvent(r)
            }
            return this
        }
        ,transitionEnd:function(e) {
            function t(a) {
                if(a.target===this)for(e.call(this,a),i=0;
                                       i<r.length;
                                       i++)n.off(r[i],t)
            }
            var i,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],n=this;
            if(e)for(i=0;
                     i<r.length;
                     i++)n.on(r[i],t);
            return this
        }
        ,width:function() {
            return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null
        }
        ,outerWidth:function(e) {
            return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null
        }
        ,height:function() {
            return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null
        }
        ,outerHeight:function(e) {
            return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null
        }
        ,offset:function() {
            if(this.length>0) {
                var e=this[0],t=e.getBoundingClientRect(),i=document.body,r=e.clientTop||i.clientTop||0,n=e.clientLeft||i.clientLeft||0,a=window.pageYOffset||e.scrollTop,s=window.pageXOffset||e.scrollLeft;
                return {
                    top:t.top+a-r,left:t.left+s-n
                }
            }return null
        }
        ,css:function(e,t) {
            var i;
            if(1===arguments.length) {
                if("string"!=typeof e) {
                    for(i=0;
                        i<this.length;
                        i++)for(var r in e)this[i].style[r]=e[r];
                    return this
                }
                if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)
            }
            if(2===arguments.length&&"string"==typeof e) {
                for(i=0;
                    i<this.length;
                    i++)this[i].style[e]=t;
                return this
            }
            return this
        }
        ,each:function(e) {
            for(var t=0;
                t<this.length;
                t++)e.call(this[t],t,this[t]);
            return this
        }
        ,html:function(e) {
            if(void 0===e)return this[0]?this[0].innerHTML:void 0;
            for(var t=0;
                t<this.length;
                t++)this[t].innerHTML=e;
            return this
        }
        ,text:function(e) {
            if(void 0===e)return this[0]?this[0].textContent.trim():null;
            for(var t=0;
                t<this.length;
                t++)this[t].textContent=e;
            return this
        }
        ,is:function(i) {
            if(!this[0])return!1;
            var r,n;
            if("string"==typeof i) {
                var a=this[0];
                if(a===document)return i===document;
                if(a===window)return i===window;
                if(a.matches)return a.matches(i);
                if(a.webkitMatchesSelector)return a.webkitMatchesSelector(i);
                if(a.mozMatchesSelector)return a.mozMatchesSelector(i);
                if(a.msMatchesSelector)return a.msMatchesSelector(i);
                for(r=t(i),n=0;
                    n<r.length;
                    n++)if(r[n]===this[0])return!0;
                return!1
            }
            if(i===document)return this[0]===document;
            if(i===window)return this[0]===window;
            if(i.nodeType||i instanceof e) {
                for(r=i.nodeType?[i]:i,n=0;
                    n<r.length;
                    n++)if(r[n]===this[0])return!0;
                return!1
            }
            return!1
        }
        ,index:function() {
            if(this[0]) {
                for(var e=this[0],t=0;
                    null!==(e=e.previousSibling);
                )1===e.nodeType&&t++;
                return t
            }
        },eq:function(t) {
            if(void 0===t)return this;
            var i,r=this.length;
            return t>r-1?new e([]):t<0?(i=r+t,new e(i<0?[]:[this[i]])):new e([this[t]])
        }
        ,append:function(t) {
            var i,r;
            for(i=0;
                i<this.length;
                i++)if("string"==typeof t) {
                var n=document.createElement("div");
                for(n.innerHTML=t;
                    n.firstChild;
                )this[i].appendChild(n.firstChild)
            }
            else if(t instanceof e)for(r=0;
                                       r<t.length;
                                       r++)this[i].appendChild(t[r]);
            else this[i].appendChild(t);
            return this
        }
        ,prepend:function(t) {
            var i,r;
            for(i=0;
                i<this.length;
                i++)if("string"==typeof t) {
                var n=document.createElement("div");
                for(n.innerHTML=t,r=n.childNodes.length-1;
                    r>=0;
                    r--)this[i].insertBefore(n.childNodes[r],this[i].childNodes[0])
            }
            else if(t instanceof e)for(r=0;
                                       r<t.length;
                                       r++)this[i].insertBefore(t[r],this[i].childNodes[0]);
            else this[i].insertBefore(t,this[i].childNodes[0]);
            return this
        }
        ,insertBefore:function(e) {
            for(var i=t(e),r=0;
                r<this.length;
                r++)if(1===i.length)i[0].parentNode.insertBefore(this[r],i[0]);
            else if(i.length>1)for(var n=0;
                                   n<i.length;
                                   n++)i[n].parentNode.insertBefore(this[r].cloneNode(!0),i[n])
        }
        ,insertAfter:function(e) {
            for(var i=t(e),r=0;
                r<this.length;
                r++)if(1===i.length)i[0].parentNode.insertBefore(this[r],i[0].nextSibling);
            else if(i.length>1)for(var n=0;
                                   n<i.length;
                                   n++)i[n].parentNode.insertBefore(this[r].cloneNode(!0),i[n].nextSibling)
        }
        ,next:function(i) {
            return new e(this.length>0?i?this[0].nextElementSibling&&t(this[0].nextElementSibling).is(i)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])
        }
        ,nextAll:function(i) {
            var r=[],n=this[0];
            if(!n)return new e([]);
            for(;
                n.nextElementSibling;
            ) {
                var a=n.nextElementSibling;
                i?t(a).is(i)&&r.push(a):r.push(a),n=a
            }
            return new e(r)
        }
        ,prev:function(i) {
            return new e(this.length>0?i?this[0].previousElementSibling&&t(this[0].previousElementSibling).is(i)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])
        }
        ,prevAll:function(i) {
            var r=[],n=this[0];
            if(!n)return new e([]);
            for(;
                n.previousElementSibling;
            ) {
                var a=n.previousElementSibling;
                i?t(a).is(i)&&r.push(a):r.push(a),n=a
            }
            return new e(r)
        }
        ,parent:function(e) {
            for(var i=[],r=0;
                r<this.length;
                r++)e?t(this[r].parentNode).is(e)&&i.push(this[r].parentNode):i.push(this[r].parentNode);
            return t(t.unique(i))
        }
        ,parents:function(e) {
            for(var i=[],r=0;
                r<this.length;
                r++)for(var n=this[r].parentNode;
                        n;
            )e?t(n).is(e)&&i.push(n):i.push(n),n=n.parentNode;
            return t(t.unique(i))
        }
        ,find:function(t) {
            for(var i=[],r=0;
                r<this.length;
                r++)for(var n=this[r].querySelectorAll(t),a=0;
                        a<n.length;
                        a++)i.push(n[a]);
            return new e(i)
        }
        ,children:function(i) {
            for(var r=[],n=0;
                n<this.length;
                n++)for(var a=this[n].childNodes,s=0;
                        s<a.length;
                        s++)i?1===a[s].nodeType&&t(a[s]).is(i)&&r.push(a[s]):1===a[s].nodeType&&r.push(a[s]);
            return new e(t.unique(r))
        }
        ,remove:function() {
            for(var e=0;
                e<this.length;
                e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);
            return this
        }
        ,add:function() {
            var e,i,r=this;
            for(e=0;
                e<arguments.length;
                e++) {
                var n=t(arguments[e]);
                for(i=0;
                    i<n.length;
                    i++)r[r.length]=n[i],r.length++
            }
            return r
        }
    },t.fn=e.prototype,t.unique=function(e) {
        for(var t=[],i=0;
            i<e.length;
            i++)-1===t.indexOf(e[i])&&t.push(e[i]);
        return t
    }
        ,t
}
(),r=["jQuery","Zepto","Dom7"],n=0;
    n<r.length;
    n++)window[r[n]]&&function(e) {
    e.fn.swiper=function(i) {
        var r;
        return e(this).each(function() {
                var e=new t(this,i);
                r||(r=e)
            }
        ),r
    }
}(window[r[n]]);
var a;
(a=void 0===i?window.Dom7||window.Zepto||window.jQuery:i)&&("transitionEnd"in a.fn||(a.fn.transitionEnd=function(e) {
    function t(a) {
        if(a.target===this)for(e.call(this,a),i=0;
                               i<r.length;
                               i++)n.off(r[i],t)
    }
    var i,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],n=this;
    if(e)for(i=0;
             i<r.length;
             i++)n.on(r[i],t);
    return this
}
),"transform"in a.fn||(a.fn.transform=function(e) {
    for(var t=0;
        t<this.length;
        t++) {
        var i=this[t].style;
        i.webkitTransform=i.MsTransform=i.msTransform=i.MozTransform=i.OTransform=i.transform=e
    }
    return this
}
),"transition"in a.fn||(a.fn.transition=function(e) {
    "string"!=typeof e&&(e+="ms");
    for(var t=0;
        t<this.length;
        t++) {
        var i=this[t].style;
        i.webkitTransitionDuration=i.MsTransitionDuration=i.msTransitionDuration=i.MozTransitionDuration=i.OTransitionDuration=i.transitionDuration=e
    }
    return this
}
),"outerWidth"in a.fn||(a.fn.outerWidth=function(e) {
    return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null
}
)),window.Swiper=t
}
(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function() {
        "use strict";
        return window.Swiper
    }
);
!function(e) {
    function n(t) {
        if(o[t])return o[t].exports;
        var i=o[t]= {
                exports: {
                }
                ,id:t,loaded:!1
            }
            ;
        return e[t].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports
    }
    var o= {
        }
        ;
    n.m=e,n.c=o,n.p="",n(0)
}
([function(e,n,o) {
    "use strict";
    function t(e) {
        return e&&e.__esModule?e: {
            default:e
        }
    }var i=o(1),r=t(i);
    o(2),o(3);
    var a=o(4),s=t(a),c=o(12),u=t(c);
    (0,r.default)(function() {
            var e=(0,s.default)();
            OPPO_MODULE_FN.common=e;
            (0,u.default)()
        }
    )
}
    ,function(e,n,o) {
        !function(n,o) {
            e.exports=o()
        }
        (0,function() {
            var e,n=[],o=document,t=o.documentElement.doScroll,i=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);
            return i||o.addEventListener("DOMContentLoaded",e=function() {
                    for(o.removeEventListener("DOMContentLoaded",e),i=1;
                        e=n.shift();
                    )e()
                }
            ),function(e) {
                i?setTimeout(e,0):n.push(e)
            }
        })
    }
    ,function(e,n) {
        "use strict";
        !function(e) {
            e.fn.scrollUnique=function() {
                return e(this).each(function() {
                        var n="mousewheel";
                        void 0!==document.mozHidden&&(n="DOMMouseScroll"),e(this).on(n,function(e) {
                                var n=this.scrollTop,o=this.scrollHeight,t=this.clientHeight,i=e.originalEvent.wheelDelta?e.originalEvent.wheelDelta:-(e.originalEvent.detail||0);
                                (i>0&&n<=i||i<0&&o-t-n<=-1*i)&&(this.scrollTop=i>0?0:o,e.preventDefault())
                            }
                        )
                    }
                )
            }
                ,e.extend( {
                trigger:function(n) {
                    var o=void 0;
                    return o=n&&"*"!==n?'[data-trigger*="'+n+'"]':"[data-trigger]",e(o)
                }
            });
            var n=window.navigator.userAgent,o=999,t=void 0,i=void 0;
            n.indexOf("Edge")>-1&&(t="edge",o=n.match(/Edge\/([\d.]+)/)),n.indexOf("Safari")>-1&&(t="safari",o=n.match(/Version\/([\d.]+).*Safari/)?n.match(/Version\/([\d.]+).*Safari/):n.match(/Safari\/([\d.]+)/)),n.indexOf("Chrome")>-1&&(t="chrome",o=n.match(/Chrome\/([\d.]+)/)),n.indexOf("Firefox")>-1&&(t="firefox",o=n.match(/Firefox\/([\d.]+)/)),n.indexOf("Opera")>-1&&(t="opera",o=n.match(/Opera.([\d.]+)/)),n.indexOf("UBrowser")>-1&&(t="uc",o=n.match(/UBrowser\/([\d.]+)/)),n.indexOf("UCBrowser")>-1&&(t="uc",o=n.match(/UCBrowser\/([\d.]+)/)),n.indexOf("HUAWEI")>-1&&(t="huawei",o=n.match(/Version\/([\d.]+)/)),n.indexOf("Windows")>-1&&(i="win"),n.indexOf("Mac OS")>-1&&(i="mac"),n.indexOf("Linux")>-1&&(i="linux"),n.indexOf("MSIE")>-1&&(!0,o=n.match(/MSIE (\d+)./),t="ie"),n.indexOf("Trident/7")>-1&&(!0,t="ie");
            var r= {
                ios:!!n.match(/\(i[^;
            ]+;
            ( U;
            )? CPU.+Mac OS X/),android:n.indexOf("Android")>-1||n.indexOf("Linux")>-1,mobile:!!n.match(/AppleWebKit.*Mobile.*/
            )||!!n.match(/\(i[^;
            ]+;
            ( U;
            )? CPU.+Mac OS X/)||n.indexOf("Android")>-1||!!n.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),weixin:"MicroMessenger"==!!n.match(/MicroMessenger/i),hd:!!function() {
                return window.devicePixelRatio>1||!(!window.matchMedia||!window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches)
            }
            ()
        }
        ;
        for(var a in r)!function(e) {
            r[e]&&Modernizr.addTest(e,function() {
                    return r[e]
                }
            )
        }
        (a);
        t&&Modernizr.addTest(t,function() {
                return!0
            }
        ),i&&Modernizr.addTest(i,function() {
                return!0
            }
        ),"ie"==t&&o[1]<=10&&Modernizr.addTest("lt-10",function() {
                return!0
            }
        ),"ie"==t&&o[1]<10&&Modernizr.addTest("lt-9",function() {
                return!0
            }
        ),Modernizr.browserVersion=o[1],Modernizr.browserName=t
    }
    (jQuery)
}
,function(e,n) {
    "use strict";
    "undefined"==typeof OPPO_MODULE_FN&&(window.OPPO_MODULE_FN= {
    }
    ),"undefined"==typeof OPPO_CONFIG_ATTR&&(window.OPPO_CONFIG_ATTR= {
    }
    )
}
,function(e,n,o) {
    "use strict";
    function t(e) {
        return e&&e.__esModule?e: {
            default:e
        }
    }Object.defineProperty(n,"__esModule", {
            value:!0
        }
    );
    var i=o(5),r=t(i),a=o(9),s=t(a),c=o(10),u=t(c),d=o(11),l=t(d);
    n.default=function() {
        var e= {
            }
            ,n=void 0,o=(0,l.default)(),t=["white","black"],i= {
            }
            ,a=function() {
                var o=e,t=o.mobile,r=o.pc,a=o.$wrap,s=o.$navList,c=o.$menuBtn,u=(o.$productsLinkItem,o.$bagBtn);
                o.$header;
                n.screen()?(void 0===t&&(i.navProductsWap(),e.mobile=!0),e.ismobile=!0,i.domReset(!0),u&&u[0].isopen&&f(!0),s.css("display","none")):(void 0===r&&(i.navProducts(),e.pc=!0),e.ismobile=!1,i.domReset(!1),c&&c[0].isopen&&c.trigger("click.list"),u&&u[0].isopen&&f(!1),s.is(":hidden")&&s.css("display","")),void 0===t&&void 0===r&&(e.main=!!a.hasClass("main"),i.navBagWap(),i.notice())
            }
            ;
        i.navProducts=function() {
            function n(t) {
                if(e.ismobile)return void o();
                p.is(":visible")&&p.width()>100?l.find("a").css( {
                        height:p.width()
                    }
                ):setTimeout(n)
            }
            function o(e) {
                l.find("a").css( {
                        height:""
                    }
                )
            }
            var t=e,i=t.$win,r=t.$header,a=t.$navList,s=t.$productsLink,c=t.$productsMenu,u=t.$queue,d=t.$wrap,l=a.find("ul li"),p=l.first().find("a").find("img").first();
            a.css("display","");
            var h=new TimelineMax( {
                    paused:!0
                }
            );
            h.from(c,.3, {
                    autoAlpha:0
                }
            ).staggerFrom(u,.5, {
                    autoAlpha:0,y:10,ease:Cubic.easeOut
                }
                ,.05,"-=.1"),h.eventCallback("onReverseComplete",function() {
                    TweenMax.set(c, {
                            display:""
                        }
                    ),s[0].isopen=!1
                }
            );
            var m=!1,v=function(n) {
                    m||(!e.ismobile&&h.timeScale(2).reverse(),f(!1),void 0!==e.productsList&&e.productsList.out(),r.removeClass("oh-productslist-show"))
                }
                ;
            s.children("a").on( {
                mouseenter:function(o) {
                    e.ismobile||s[0].isopen||(m=!0,s[0].isopen=!0,TweenMax.set(c, {
                            display:"block"
                        }
                    ),setTimeout(function() {
                            h.timeScale(1).seek(0).play(),f(!0),n()
                        }
                        ,10),d.hasClass("main")&&r.addClass("oh-productslist-show"),void 0!==e.productsList&&e.productsList.in())
                }
                ,mouseleave:function(e) {
                    m=!1,setTimeout(v)
                }
                ,click:function(e) {
                    e.preventDefault()
                }
            }),c.find(".oh-navpro-content").on( {
                mouseenter:function(e) {
                    m=!0
                }
                ,mouseleave:function(e) {
                    m=!1,setTimeout(v)
                }
            }),i.on("resize.imgresize",n),e.animate=h
        }
            ,i.navProductsWap=function() {
            function n(n) {
                n.preventDefault(),c.is(":hidden")&&c.css("display",""),setTimeout(function(e) {
                        return $(".oh-navlist-wrapper").scrollTop(0)
                    }
                    ,500),e.$bagBtn&&e.$bagBtn[0].isopen&&e.$bagBtn.trigger("click.open"),this.isopen?(s.removeClass("openHeaderMenu"),this.isopen=!1,f(!1),h(!1),d&&d[0].isopen&&d.trigger("click.menu"),i.showNotice(!0)):(s.addClass("openHeaderMenu"),this.isopen=!0,f(!0),h(!0),i.showNotice(!1),a.off("click").on("click.navmenulayer",function(e) {
                        t.trigger("click")
                    }
                ))
            }
            function o(e) {
                e.preventDefault(),this.isopen?(u.removeClass("active"),this.isopen=!1):(u.addClass("active"),this.isopen=!0)
            }
            var t=$.trigger("open:navList@mobile"),r=e,a=r.$mask,s=r.$header,c=(r.$nav,r.$navList),u=r.$productsLink,d=u.find(".oh-navitem-link");
            s.on("touchstart touchmove",function(e) {
                    e.stopPropagation()
                }
            ),t.on("click.list",n),d.on("click.menu",o),e.$menuBtn=t
        }
            ,i.navBag=function() {
            function n(n) {
                if(n.preventDefault(),!e.ismobile) {
                    var o=this;
                    o.isopen?(c=!1,u&&clearTimeout(u),u=setTimeout(function() {
                            !c&&(r.removeClass("openNavBag"),o.isopen=!1)
                        }
                        ,100)):(u&&clearTimeout(u),r.addClass("openNavBag"),o.isopen=!0,s[0].isopen=!1,c=!0)
                }
            }function o(n) {
                !e.ismobile&&n.preventDefault()
            }
            function t(n) {
                var o=this;
                e.ismobile||(o.isopen?(c=!1,u&&clearTimeout(u),u=setTimeout(function() {
                        !c&&(r.removeClass("openNavBag"),o.isopen=!1)
                    }
                    ,100)):(u&&clearTimeout(u),o.isopen=!0,e.$bagBtn[0].isopen=!1,c=!0))
            }
            var i=e,r=i.$header,a=i.$nav,s=(i.$bagBtn,a.find("#oh-navpopup-bag")),c=!1,u=null;
            void 0===e.$bagBtn&&(e.$bagBtn=a.find(".oh-nav-link")),e.$bagBtn.on("mouseenter.open mouseleave.open",n).on("click.show",o),s.on("mouseenter.show mouseleave.show",t)
        }
            ,i.navBagWap=function() {
            function o(o) {
                o.preventDefault(),!n.platform()&&o.stopPropagation(),e.$menuBtn&&e.$menuBtn[0].isopen&&e.$menuBtn.trigger("click.list"),this.isopen?(a.removeClass("openNavBag"),this.isopen=!1,i.showNotice(!0),e.ismobile&&f(!1)):(a.addClass("openNavBag"),this.isopen=!0,i.showNotice(!1),e.ismobile&&f(!0),c.off("click").on("click.closeBag",t))
            }
            function t(n) {
                e.$bagBtn[0].isopen&&e.$bagBtn.trigger("click.open")
            }
            var r=e,a=r.$header,s=r.$nav,c=(r.$bagBtn,r.$mask);
            void 0===e.$bagBtn&&(e.$bagBtn=s.find(".oh-nav-link")),m("#oh-navpopup-bag",function(e) {
                    t()
                }
            ),e.$bagBtn.on("touchstart.open click.open",o),document.addEventListener("scroll",t)
        }
            ,i.notice=function(n) {
            var o=!1,t=e,i=t.$notice,a=(new Date).getTime()/1e3,s=i.data("start-time"),c=i.data("end-time");
            if((0,u.default)(i)&&!v((0,r.default)("oc_notice_id"+i.data("id")))&&a>s&&a<c) {
                var d=function(n) {
                    if(n.preventDefault(),o) {
                        var t= {
                                autoAlpha:0
                            }
                            ;
                        e.main||(t= {
                            height:0
                        }
                        ),TweenMax.to(i,.5, {
                            css:t,onComplete:function() {
                                i.hide(),i[0].isshow=!1
                            }
                        }),g((0,r.default)("oc_notice_id"+i.data("id")),!0),l.off(".close")
                    }
                };
                i[0].isshow=!0;
                var l=i.find(".ont-close"),f=i.find(".ont-layer"),p=e.ismobile?44:55,h=e.main?Cubic.easeInOut:Ease.easeLinear,m=e.main?.8:.5;
                i.show(),TweenMax.from(f,m, {
                    y:-p,delay:1,ease:h,onComplete:function() {
                        setTimeout(function(e) {
                                i.addClass("show-notice")
                            }
                            ,100),o=!0
                    }
                }),e.main||(i.css( {
                        height:0
                    }
                ),setTimeout(function(e) {
                        TweenMax.to(i,m, {
                            height:p,delay:1,ease:h,onComplete:function() {
                            }
                        })
                    }
                )),l.off(".close").on("click.close",d)
            }
        },i.showNotice=function(n) {
            var o=e,t=o.$notice;
            (0,u.default)(t)&&(n?t[0].isshow&&t.is(":hidden")&&e.main&&e.ismobile&&t.show():t[0].isshow&&t.is(":visible")&&e.main&&e.ismobile&&t.hide())
        }
            ,i.domReset=function(n) {
            var o=e,t=o.$queue,i=o.$productsMenu,r=o.animate;
            n?[t,i].forEach(function(e) {
                    return e.removeAttr("style")
                }
            ):r&&[t].forEach(function(e) {
                    return e.css("opacity",0)
                }
            )
        }
        ;
        var c=function(n) {
                var o=e,i=o.$header;
                if((0,u.default)(i))return i.hasClass("oh-theme-"+n)||i.addClass("oh-theme-"+n),t.forEach(function(e) {
                        e!==n&&i.removeClass("oh-theme-"+e)
                    }
                ),!0
            }
            ,d=function(n) {
                var o=e,t=o.$header,i=o.$mask,r=o.$win;
                if(o.$html.hasClass("oc-noscroll"))return void i.css( {
                        top:""
                    }
                );
                t.hasClass("show-mask")&&r.scrollTop()<=t.height()?i.css( {
                        top:t.height()-r.scrollTop()
                    }
                ):i.css( {
                        top:""
                    }
                )
            }
            ,f=function(n) {
                var o=e,t=o.$header;
                n?!t.hasClass("show-mask")&&t.addClass("show-mask"):t.hasClass("show-mask")&&t.removeClass("show-mask")
            }
            ,p=function(n) {
                var o=e,t=o.$wrap;
                t.size()<1||($("#oc-top-mask").size()<1&&t.append('<i id="oc-top-mask" />'),n?!t.hasClass("show-mask")&&t.addClass("show-mask"):t.hasClass("show-mask")&&t.removeClass("show-mask"))
            }
            ,h=function(n,o) {
                var t=e,i=t.$doc,r=t.$win,a=t.$html,s=t.$wrap,c=(t.$header,t._winTop,o||"oc-noscroll"),u=n?r.scrollTop():e._winTop,d=i.height();
                n?(a.addClass(c),s.size()>0&&TweenMax.set(s, {
                        height:d,marginTop:-u
                    }
                ),r.scrollTop(0)):(a.removeClass(c),s.size()>0&&TweenMax.set(s, {
                        height:"",marginTop:""
                    }
                ),r.scrollTop(u)),n&&(e._winTop=u)
            }
            ,m=function(e,n) {
                function o(e) {
                    void 0!==n&&t.is(":visible")&&n()
                }
                var t="string"==typeof e?$(e):e;
                t.on("click.stop",function(e) {
                        e.stopPropagation()
                    }
                ),$(document).on("click.outside",o)
            }
            ,v=function(e) {
                return Cookies(e)
            }
            ,g=function(e,n) {
                var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:location.hostname.indexOf("oppo")>-1?"."+location.hostname:location.hostname,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/";
                Cookies.set(e,n, {
                        expires:o,domain:t,path:i
                    }
                )
            }
            ;
        return function() {
            n=(0,s.default)();
            var t=$("#oc-header"),i=t.find(".oh-nav"),r=i.find(".oh-nav-list"),c=r.find(".oh-item-products"),l=$("#oh-navpopup-products"),f=l.find("._queue");
            if(!(0,u.default)(t))return!1;
            t.after('<i id="oc-mask" />');
            var p=$("#oc-mask");
            e= {
                $doc:$(document),$win:$(window),$html:$("html"),$notice:$("#oc-notice"),$wrap:$("#oc-wrapper"),$header:t,$nav:i,$navList:r,$productsLink:c,$productsMenu:l,$queue:f,$mask:p
            }
                ,a(),window.addEventListener("resize",a),window.addEventListener("scroll",d),o.init()
        }
        (), {
            changeNavTheme:c,openMask:f,openTopMask:p,noscroll:h,outsideScope:m,getCookies:v,setCookies:g
        }
    }
}
,function(e,n,o) {
    !function() {
        var n=o(6),t=o(7).utf8,i=o(8),r=o(7).bin,a=function(e,o) {
                e.constructor==String?e=o&&"binary"===o.encoding?r.stringToBytes(e):t.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());
                for(var s=n.bytesToWords(e),c=8*e.length,u=1732584193,d=-271733879,l=-1732584194,f=271733878,p=0;
                    p<s.length;
                    p++)s[p]=16711935&(s[p]<<8|s[p]>>>24)|4278255360&(s[p]<<24|s[p]>>>8);
                s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;
                for(var h=a._ff,m=a._gg,v=a._hh,g=a._ii,p=0;
                    p<s.length;
                    p+=16) {
                    var w=u,$=d,T=l,b=f;
                    u=h(u,d,l,f,s[p+0],7,-680876936),f=h(f,u,d,l,s[p+1],12,-389564586),l=h(l,f,u,d,s[p+2],17,606105819),d=h(d,l,f,u,s[p+3],22,-1044525330),u=h(u,d,l,f,s[p+4],7,-176418897),f=h(f,u,d,l,s[p+5],12,1200080426),l=h(l,f,u,d,s[p+6],17,-1473231341),d=h(d,l,f,u,s[p+7],22,-45705983),u=h(u,d,l,f,s[p+8],7,1770035416),f=h(f,u,d,l,s[p+9],12,-1958414417),l=h(l,f,u,d,s[p+10],17,-42063),d=h(d,l,f,u,s[p+11],22,-1990404162),u=h(u,d,l,f,s[p+12],7,1804603682),f=h(f,u,d,l,s[p+13],12,-40341101),l=h(l,f,u,d,s[p+14],17,-1502002290),d=h(d,l,f,u,s[p+15],22,1236535329),u=m(u,d,l,f,s[p+1],5,-165796510),f=m(f,u,d,l,s[p+6],9,-1069501632),l=m(l,f,u,d,s[p+11],14,643717713),d=m(d,l,f,u,s[p+0],20,-373897302),u=m(u,d,l,f,s[p+5],5,-701558691),f=m(f,u,d,l,s[p+10],9,38016083),l=m(l,f,u,d,s[p+15],14,-660478335),d=m(d,l,f,u,s[p+4],20,-405537848),u=m(u,d,l,f,s[p+9],5,568446438),f=m(f,u,d,l,s[p+14],9,-1019803690),l=m(l,f,u,d,s[p+3],14,-187363961),d=m(d,l,f,u,s[p+8],20,1163531501),u=m(u,d,l,f,s[p+13],5,-1444681467),f=m(f,u,d,l,s[p+2],9,-51403784),l=m(l,f,u,d,s[p+7],14,1735328473),d=m(d,l,f,u,s[p+12],20,-1926607734),u=v(u,d,l,f,s[p+5],4,-378558),f=v(f,u,d,l,s[p+8],11,-2022574463),l=v(l,f,u,d,s[p+11],16,1839030562),d=v(d,l,f,u,s[p+14],23,-35309556),u=v(u,d,l,f,s[p+1],4,-1530992060),f=v(f,u,d,l,s[p+4],11,1272893353),l=v(l,f,u,d,s[p+7],16,-155497632),d=v(d,l,f,u,s[p+10],23,-1094730640),u=v(u,d,l,f,s[p+13],4,681279174),f=v(f,u,d,l,s[p+0],11,-358537222),l=v(l,f,u,d,s[p+3],16,-722521979),d=v(d,l,f,u,s[p+6],23,76029189),u=v(u,d,l,f,s[p+9],4,-640364487),f=v(f,u,d,l,s[p+12],11,-421815835),l=v(l,f,u,d,s[p+15],16,530742520),d=v(d,l,f,u,s[p+2],23,-995338651),u=g(u,d,l,f,s[p+0],6,-198630844),f=g(f,u,d,l,s[p+7],10,1126891415),l=g(l,f,u,d,s[p+14],15,-1416354905),d=g(d,l,f,u,s[p+5],21,-57434055),u=g(u,d,l,f,s[p+12],6,1700485571),f=g(f,u,d,l,s[p+3],10,-1894986606),l=g(l,f,u,d,s[p+10],15,-1051523),d=g(d,l,f,u,s[p+1],21,-2054922799),u=g(u,d,l,f,s[p+8],6,1873313359),f=g(f,u,d,l,s[p+15],10,-30611744),l=g(l,f,u,d,s[p+6],15,-1560198380),d=g(d,l,f,u,s[p+13],21,1309151649),u=g(u,d,l,f,s[p+4],6,-145523070),f=g(f,u,d,l,s[p+11],10,-1120210379),l=g(l,f,u,d,s[p+2],15,718787259),d=g(d,l,f,u,s[p+9],21,-343485551),u=u+w>>>0,d=d+$>>>0,l=l+T>>>0,f=f+b>>>0
                }
                return n.endian([u,d,l,f])
            }
            ;
        a._ff=function(e,n,o,t,i,r,a) {
            var s=e+(n&o|~n&t)+(i>>>0)+a;
            return(s<<r|s>>>32-r)+n
        }
            ,a._gg=function(e,n,o,t,i,r,a) {
            var s=e+(n&t|o&~t)+(i>>>0)+a;
            return(s<<r|s>>>32-r)+n
        }
            ,a._hh=function(e,n,o,t,i,r,a) {
            var s=e+(n^o^t)+(i>>>0)+a;
            return(s<<r|s>>>32-r)+n
        }
            ,a._ii=function(e,n,o,t,i,r,a) {
            var s=e+(o^(n|~t))+(i>>>0)+a;
            return(s<<r|s>>>32-r)+n
        }
            ,a._blocksize=16,a._digestsize=16,e.exports=function(e,o) {
            if(void 0===e||null===e)throw new Error("Illegal argument "+e);
            var t=n.wordsToBytes(a(e,o));
            return o&&o.asBytes?t:o&&o.asString?r.bytesToString(t):n.bytesToHex(t)
        }
    }()
}
,function(e,n) {
    !function() {
        var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o= {
            rotl:function(e,n) {
                return e<<n|e>>>32-n
            }
            ,rotr:function(e,n) {
                return e<<32-n|e>>>n
            }
            ,endian:function(e) {
                if(e.constructor==Number)return 16711935&o.rotl(e,8)|4278255360&o.rotl(e,24);
                for(var n=0;
                    n<e.length;
                    n++)e[n]=o.endian(e[n]);
                return e
            }
            ,randomBytes:function(e) {
                for(var n=[];
                    e>0;
                    e--)n.push(Math.floor(256*Math.random()));
                return n
            }
            ,bytesToWords:function(e) {
                for(var n=[],o=0,t=0;
                    o<e.length;
                    o++,t+=8)n[t>>>5]|=e[o]<<24-t%32;
                return n
            }
            ,wordsToBytes:function(e) {
                for(var n=[],o=0;
                    o<32*e.length;
                    o+=8)n.push(e[o>>>5]>>>24-o%32&255);
                return n
            }
            ,bytesToHex:function(e) {
                for(var n=[],o=0;
                    o<e.length;
                    o++)n.push((e[o]>>>4).toString(16)),n.push((15&e[o]).toString(16));
                return n.join("")
            }
            ,hexToBytes:function(e) {
                for(var n=[],o=0;
                    o<e.length;
                    o+=2)n.push(parseInt(e.substr(o,2),16));
                return n
            }
            ,bytesToBase64:function(e) {
                for(var o=[],t=0;
                    t<e.length;
                    t+=3)for(var i=e[t]<<16|e[t+1]<<8|e[t+2],r=0;
                             r<4;
                             r++)8*t+6*r<=8*e.length?o.push(n.charAt(i>>>6*(3-r)&63)):o.push("=");
                return o.join("")
            }
            ,base64ToBytes:function(e) {
                e=e.replace(/[^A-Z0-9+\/]/gi,"");
                for(var o=[],t=0,i=0;
                    t<e.length;
                    i=++t%4)0!=i&&o.push((n.indexOf(e.charAt(t-1))&Math.pow(2,-2*i+8)-1)<<2*i|n.indexOf(e.charAt(t))>>>6-2*i);
                return o
            }
        };
        e.exports=o
    }
    ()
}
,function(e,n) {
    var o= {
            utf8: {
                stringToBytes:function(e) {
                    return o.bin.stringToBytes(unescape(encodeURIComponent(e)))
                }
                ,bytesToString:function(e) {
                    return decodeURIComponent(escape(o.bin.bytesToString(e)))
                }
            },bin: {
                stringToBytes:function(e) {
                    for(var n=[],o=0;
                        o<e.length;
                        o++)n.push(255&e.charCodeAt(o));
                    return n
                }
                ,bytesToString:function(e) {
                    for(var n=[],o=0;
                        o<e.length;
                        o++)n.push(String.fromCharCode(e[o]));
                    return n.join("")
                }
            }
        }
        ;
    e.exports=o
}
,function(e,n) {
    function o(e) {
        return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)
    }
    function t(e) {
        return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&o(e.slice(0,0))
    }
    e.exports=function(e) {
        return null!=e&&(o(e)||t(e)||!!e._isBuffer)
    }
},function(e,n) {
    "use strict";
    e.exports=function() {
        return {
            platform:function() {
                return Modernizr.mobile||!1
            }
            ,screen:function() {
                return Modernizr.mq("(max-width: 768px)")
            }
            ,touch:function() {
                return Modernizr.touchevents||!1
            }
        }
    }
},function(e,n) {
    "use strict";
    Object.defineProperty(n,"__esModule", {
            value:!0
        }
    ),n.default=function(e) {
        var n="string"==typeof e?$(e):e;
        return!!(n&&n.length>0)
    }
},function(e,n) {
    "use strict";
    Object.defineProperty(n,"__esModule", {
            value:!0
        }
    ),n.default=function() {
        var e=$("#oh-navbag-cart"),n=$("#oh-navbag-login"),o=function() {
                $.ajax( {
                        url:OPPO_CONFIG_ATTR.auth_check,type:"GET",dataType:"jsonp"
                    }
                ).done(function(e) {
                        t(e)
                    }
                ).fail(function() {
                        i()
                    }
                )
            }
            ,t=function(o) {
                e.find("span").text("购物车 ("+o.cart_number+")"),n.on("click.logout",c).find("span").text("注销"),a(o),$(".repair").length>0&&r(o)
            }
            ,i=function() {
                n.on("click.login",s)
            }
            ,r=function(e) {
                var n=OPPO_CONFIG_ATTR.base_url+"/service/repair"+window.location.search,o=OPPO_CONFIG_ATTR.sso_logout_url+"?callback="+encodeURIComponent(n);
                $(".repair-header-left span").html(e.name),$(".repair-header-left a").attr("href",o),($(".repair-dealer-search").length>0||$(".repair-list").length>0)&&$(".repair-header-right a").attr("href",n).html("返回首页")
            }
            ,a=function e(n) {
                "undefined"!=typeof NTKF_PARAM&&setTimeout(function() {
                        "undefined"==typeof NTKF?e(n):NTKF.im_updatePageInfo( {
                                uid:n.oid,uname:n.name
                            }
                        )
                    }
                    ,300)
            }
            ,s=function() {
                window.location.href=OPPO_CONFIG_ATTR.sso_login_url+"?callback="+encodeURIComponent(window.location.href)
            }
            ,c=function() {
                window.location.href=OPPO_CONFIG_ATTR.sso_logout_url+"?callback="+encodeURIComponent(window.location.href)
            }
            ;
        return {
            init:o,login:s,logout:c,isLogin:function(e,n) {
                return!(!e||!e.status)&&("-100"!==e.status||void(n?window.location.href=OPPO_CONFIG_ATTR.sso_login_url+"?callback="+encodeURIComponent(n):s()))
            }
        }
    }
},function(e,n,o) {
    "use strict";
    function t(e) {
        return e&&e.__esModule?e: {
            default:e
        }
    }Object.defineProperty(n,"__esModule", {
            value:!0
        }
    );
    var i=o(9),r=t(i),a=o(10),s=t(a);
    n.default=function() {
        var e= {
            }
            ,n=void 0,o=function() {
                var o=e,r=o.pc,s=o.mobile;
                n.screen()?(void 0===s&&(t(),e.mobile=!0),e.ismobile=!0,a(!0)):(void 0===r&&(e.pc=!0),e.ismobile=!1,a(!1)),void 0===s&&void 0===r&&i()
            }
            ,t=function() {
                function n(n) {
                    n.preventDefault(),this.isopen?($(this).parent().removeClass("active"),this.isopen=!1):($(this).parent().addClass("active"),this.isopen=!0,e.$directory=$(this))
                }
                e.$footer.find(".of-nav").find(".of-directory dl").each(function(e,o) {
                        $(this).find("dt").on("click.open",n)
                    }
                )
            }
            ,i=function() {
                function o(e) {
                    e.preventDefault(),s.addClass("openModel"),s[0].isopen=!0,n.screen()&&s.addClass("mask-index-top")&&OPPO_MODULE_FN.common.noscroll(!0),setTimeout(function(e) {
                            return l.play()
                        }
                    )
                }
                function t() {
                    s[0].isopen=!1,n.screen()&&s.removeClass("mask-index-top")&&OPPO_MODULE_FN.common.noscroll(!1),setTimeout(function(e) {
                            return l.reverse()
                        }
                    )
                }
                function i(e) {
                    e.preventDefault(),e.stopPropagation(),s[0].isopen&&s.hasClass("openWechat")?t():o(e),s.removeClass("openAlipay").addClass("openWechat")
                }
                function r(n) {
                    e.ismobile||(n.preventDefault(),n.stopPropagation(),s[0].isopen&&s.hasClass("openAlipay")?t():o(n),s.removeClass("openWechat").addClass("openAlipay"))
                }
                var a=e,s=(a.$footer,$(".of-qrcode-model")),c=s.find(".of-qrcode-view"),u=$.trigger("qrcode-wechat"),d=$.trigger("qrcode-alipay"),l=new TimelineMax( {
                        paused:!0
                    }
                );
                l.from(s,.3, {
                        y:15,autoAlpha:0
                    }
                ),u.on("click.qrcode",i),d.on("click.qrcode",r),c.click(function(e) {
                        e.stopPropagation()
                    }
                ),s.click(function(e) {
                        s[0].isopen&&t()
                    }
                ),OPPO_MODULE_FN.common.outsideScope(c,function() {
                        s[0].isopen&&t()
                    }
                )
            }
            ,a=function(n) {
                var o=e,t=o.$directory;
                n||t&&t[0].isopen&&t.trigger("click.open"),t=null
            }
            ;
        return function() {
            n=(0,r.default)();
            var t=$("#oc-footer");
            if(!(0,s.default)(t))return!1;
            e= {
                $footer:t
            }
                ,o(),window.addEventListener("resize",o,!0)
        }
        ()
    }
}]);
!function(e) {
    function t(n) {
        if(i[n])return i[n].exports;
        var o=i[n]= {
                exports: {
                }
                ,id:n,loaded:!1
            }
            ;
        return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports
    }
    var i= {
        }
        ;
    t.m=e,t.c=i,t.p="",t(0)
}
([function(e,t,i) {
    "use strict";
    function n(e) {
        return e&&e.__esModule?e: {
            default:e
        }
    }var o=i(1),a=n(o),r=i(2),s=n(r),u=i(27),d=n(u);
    (0,a.default)(function() {
            (0,d.default)(),(0,s.default)()
        }
    )
}
    ,function(e,t,i) {
        !function(t,i) {
            e.exports=i()
        }
        (0,function() {
            var e,t=[],i=document,n=i.documentElement.doScroll,o=(n?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState);
            return o||i.addEventListener("DOMContentLoaded",e=function() {
                    for(i.removeEventListener("DOMContentLoaded",e),o=1;
                        e=t.shift();
                    )e()
                }
            ),function(e) {
                o?setTimeout(e,0):t.push(e)
            }
        })
    }
    ,function(e,t,i) {
        "use strict";
        function n(e) {
            return e&&e.__esModule?e: {
                default:e
            }
        }Object.defineProperty(t,"__esModule", {
                value:!0
            }
        );
        var o=i(3),a=n(o),r=i(4),s=n(r);
        i(5);
        var u=i(6),d=n(u);
        t.default=function() {
            var e= {
                }
                ,t=void 0,i=["white","black"],n=function() {
                    var i=e,n=i.pc,a=i.mobile,r=i.$high;
                    e.winHeight=$(window).height(),e.winWidth=$(window).width(),t.platform()?(e.ismobile=!0,f(!0),void 0===a&&(u(),e.mobile=!0,r.css( {
                            height:e.winHeight
                        }
                    ))):(e.ismobile=!1,f(!1),void 0===n&&(o(),e.pc=!0,r.css( {
                            height:""
                        }
                    )))
                }
                ,o=function() {
                    void 0===e.curItem&&(e.curItem=0);
                    var t=e,i=t.$highItem,n=t.$paginationWrap,o=(t.curItem,""),a=i.length;
                    i.each(function(e,t) {
                            var i=$(t);
                            0===e&&(i.addClass("jumpin"),c(i),i[0].videoHandle&&i[0].videoHandle.play()),o+='<li class="pagination-item">\n \t\t\t\t\t<a href="#'+e+'">\n \t\t\t\t\t<b></b>\n \t\t\t\t\t<i>\n\t\t\t\t\t\t\t\t\t\t<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"preserveAspectRatio="none"><circle cx="7" cy="7" r="6"/></svg>\n \t\t\t\t\t</i>\n \t\t\t\t\t</a>\n \t\t\t\t\t</li>'
                        }
                    ),a>1&&(n.html(o),r());
                    var s=!1;
                    a>1&&document.addEventListener("lazybeforeunveil",function(e) {
                            $(e.target).hasClass("lazypreload")&&!s&&(s=!0,setTimeout(function(e) {
                                    return i.first().siblings().find(".lazyload").addClass("lazypreload")
                                }
                            ))
                        }
                    )
                }
                ,r=function() {
                    function t() {
                        f=!0,r=r>=o.length-1?0:++r,u.eq(r).trigger("click.pagin")
                    }
                    function i(i) {
                        if(i.preventDefault(),!$(this).hasClass("active")&&e.iscanplay) {
                            clearTimeout(d),clearTimeout(c),e.iscanplay=!1,$(this).addClass("active").siblings().removeClass("active"),r=$(this).index();
                            var n=o.eq(r),a=n.find("._title"),u=n.find("._figure"),p=o.eq(s),v=p.find("._title"),m=p.find("._figure"),g=n.data("theme")||"white",y=n.data("delay")||e.delayTime;
                            l( {
                                    curItem:r,oldItem:s,$cur:n,$cur_title:a,$cur_figure:u,$old:p,$old_title:v,$old_figure:m,isClickEvent:f
                                }
                            ),d=setTimeout(function(e) {
                                    h(g)
                                }
                                ,500),setTimeout(function(t) {
                                    return e.iscanplay=!0
                                }
                                ,500),f=!1,s=r,clearTimeout(c),c=setTimeout(t,y)
                        }
                    }void 0===e.curItem&&(e.curItem=0),void 0===e.iscanplay&&(e.iscanplay=!0);
                    var n=e,o=n.$highItem,a=n.$paginationWrap,r=n.curItem,s=0,u=a.find("li"),d=null,c=null,f=!1;
                    u.on("click.pagin",i),setTimeout(function(e) {
                            return u.eq(r).trigger("click.pagin")
                        }
                        ,h(o.eq(r).data("theme")))
                }
                ,u=function() {
                    var t=e,i=t.$highItem,n=t.$paginationWrap,o=t.curItem,a=0,r=!1,s=[];
                    if(i.each(function() {
                                s.push($(this))
                            }
                        ),!(s.length<=1)) {
                        new Swiper(".high-swiper-container", {
                            speed:600,pagination:".high-swiper-pagination",paginationClickable:!0,loop:!0,autoplay:e.delayTime,autoplayDisableOnInteraction:!1,onSlideChangeStart:function(e) {
                                o=e.realIndex,h(i.eq(o).data("theme")),n.find(".pagination-item").eq(o).addClass("active").siblings().removeClass("active");
                                var t=$(".high-swiper-container").find(".swiper-slide-active"),s=t.find("._title"),u=t.find("._figure"),d=$(".high-swiper-container").find(".swiper-slide-prev"),c=d.find("._title"),f=d.find("._figure");
                                [s,u,c,f].forEach(function(e) {
                                        return e.removeAttr("style")
                                    }
                                ),!r&&o!=a&&l( {
                                        curItem:o,oldItem:a,$cur:t,$cur_title:s,$cur_figure:u,$old:d,$old_title:c,$old_figure:f,isClickEvent:!1
                                    }
                                ),r=!1,a=o
                            }
                            ,onSliderMove:function(e,t) {
                                r=!0
                            }
                            ,paginationBulletRender:function(e,t,i) {
                                return'<li class="pagination-item">\n \t\t<a href="#'+t+'">\n\t \t\t<b></b>\n\t \t\t<i>\n\t \t\t<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"preserveAspectRatio="none"><circle cx="7" cy="7" r="6"/></svg>\n\t \t\t</i>\n \t\t</a>\n \t\t</li>'
                            }
                            ,onAutoplayStart:function(e) {
                                setTimeout(function(t) {
                                        return n.find(".pagination-item").eq(e.realIndex).addClass("active")
                                    }
                                    ,100)
                            }
                            ,onAfterResize:function(e) {
                                setTimeout(function(t) {
                                        return n.find(".pagination-item").eq(e.realIndex).addClass("active")
                                    }
                                )
                            }
                        });
                        n.find(".pagination-item").on("click.stop",function(e) {
                                return e.preventDefault()
                            }
                        )
                    }
                },l=function(t) {
                    var i=e,n=i.easeingIn,o=t.curItem,a=t.oldItem,r=t.$cur,s=t.$cur_title,u=t.$cur_figure,d=t.$old,l=t.$old_title,f=t.$old_figure,h=t.isClickEvent;
                    o>a||h||e.ismobile?(TweenMax.set(s, {
                            x:500,autoAlpha:0
                        }
                    ),TweenMax.set(u, {
                            x:50,scale:.7,transformOrigin:"250% 100%"
                        }
                    ),TweenMax.set(l, {
                            x:0
                        }
                    ),TweenMax.set(f, {
                            x:0,transformOrigin:"-250% 100%"
                        }
                    ),!e.ismobile&&TweenMax.set(r, {
                            x:e.winWidth,display:"block",zIndex:9
                        }
                    ),!e.ismobile&&TweenMax.set(d, {
                            x:0,zIndex:1
                        }
                    ),c(r),setTimeout(function(t) {
                            r[0].videoHandle&&r[0].videoHandle.play(),!e.ismobile&&TweenMax.to(r,1.2, {
                                    x:0,ease:n
                                }
                            ),TweenMax.to(s,e.ismobile?1:.8, {
                                x:0,autoAlpha:1,delay:(e.ismobile,.5),ease:Cubic.easeOut,onComplete:function() {
                                    s.removeAttr("style")
                                }
                            }),TweenMax.to(u,e.ismobile?1:1.2, {
                                x:0,scale:1,ease:n,onComplete:function() {
                                    u.removeAttr("style")
                                }
                            }),!e.ismobile&&TweenMax.to(d,e.ismobile?.8:1.2, {
                                x:-e.winWidth/4,ease:n,onComplete:function() {
                                    d.hide(),l.removeAttr("style"),f.removeAttr("style"),d[0].videoHandle&&d[0].videoHandle.pause()
                                }
                            }),TweenMax.to(l,1, {
                                    x:-500,delay:.3,ease:Cubic.easeOut
                                }
                            ),TweenMax.to(f,1.3, {
                                    x:-50,scale:.8,ease:n
                                }
                            )
                        }
                        ,10)):o<a&&(TweenMax.set(s, {
                            x:-500,autoAlpha:0
                        }
                    ),TweenMax.set(u, {
                            x:-50,scale:.8,transformOrigin:"-250% 100%"
                        }
                    ),TweenMax.set(l, {
                            x:0
                        }
                    ),TweenMax.set(f, {
                            x:0,transformOrigin:"250% 100%"
                        }
                    ),!e.ismobile&&TweenMax.set(r, {
                            x:-e.winWidth,display:"block",zIndex:9
                        }
                    ),!e.ismobile&&TweenMax.set(d, {
                            x:0,zIndex:1
                        }
                    ),c(r),setTimeout(function(t) {
                            r[0].videoHandle&&r[0].videoHandle.play(),!e.ismobile&&TweenMax.to(r,1.2, {
                                    x:0,ease:n
                                }
                            ),TweenMax.to(s,.8, {
                                x:0,autoAlpha:1,delay:.8,ease:Cubic.easeOut,onComplete:function() {
                                    s.removeAttr("style")
                                }
                            }),TweenMax.to(u,1.2, {
                                x:0,scale:1,ease:n,onComplete:function() {
                                    u.removeAttr("style")
                                }
                            }),!e.ismobile&&TweenMax.to(d,1.2, {
                                x:e.winWidth/4,ease:n,onComplete:function() {
                                    d.hide(),f.removeAttr("style"),f.removeAttr("style"),d[0].videoHandle&&d[0].videoHandle.pause()
                                }
                            }),TweenMax.to(l,1, {
                                    x:500,delay:.3,ease:Cubic.easeOut
                                }
                            ),TweenMax.to(f,1.3, {
                                    x:50,scale:.8,ease:n
                                }
                            )
                        }
                        ,10))
                }
                ,c=function(t) {
                    if(!e.ismobile&&Modernizr.video&&void 0!==t.data("video")&&""!=t.data("video")&&void 0===t[0].videoHandle) {
                        var i=t.data("video").split(","),n="banner-item-video"+(t.index()+1),o='<div class="banner-video"><video id="'+n+'">';
                        i.forEach(function(e) {
                                var t="mp4";
                                e.indexOf("webm")>-1&&(t="webm"),e.indexOf("ogg")>-1&&(t="ogg"),o+='<source src="'+e+'" type="video/'+t+'">'
                            }
                        ),o+="</video></div>",t.find(".banner-bg").append(o);
                        var a=new d.default(n);
                        a.execute(),t[0].videoHandle=a
                    }
                },f=function(t) {
                    var i=e,n=(i.$high,i.$highWrap),o=i.$highList,a=i.$highItem,r=(i.$pagination,i.$paginationWrap);
                    t?(n.addClass("high-swiper-container"),o.addClass("swiper-wrapper"),a.addClass("swiper-slide"),r.addClass("high-swiper-pagination")):(n.removeClass("high-swiper-container"),o.removeClass("swiper-wrapper"),a.removeClass("swiper-slide"),r.removeClass("high-swiper-pagination"))
                }
                ,h=function(t) {
                    var n=e,o=n.$high;
                    return OPPO_MODULE_FN.common&&OPPO_MODULE_FN.common.changeNavTheme(t),o.hasClass("ohigh-theme-"+t)||o.addClass("ohigh-theme-"+t),i.forEach(function(e) {
                            e!==t&&o.removeClass("ohigh-theme-"+e)
                        }
                    ),!0
                }
                ;
            return function() {
                t=(0,a.default)();
                var i=$(".oc-high"),o=i.find(".ohigh-wrapper"),r=i.find(".ohw-banner-list"),u=r.find(".banner-item"),d=i.find(".ohw-pagination"),l=d.find("ul");
                if(!(0,s.default)(i))return!1;
                var c=CustomEase.create("custom","M0,0 C0.303,0 0,1 1,1")||Cubic.easeInOut;
                e= {
                    delayTime:5e3,$high:i,$highWrap:o,$highList:r,$highItem:u,$pagination:d,$paginationWrap:l,easeingIn:c
                }
                    ,n(),window.addEventListener("resize",n)
            }
            ()
        }
    },function(e,t) {
        "use strict";
        e.exports=function() {
            return {
                platform:function() {
                    return Modernizr.mobile||!1
                }
                ,screen:function() {
                    return Modernizr.mq("(max-width: 768px)")
                }
                ,touch:function() {
                    return Modernizr.touchevents||!1
                }
            }
        }
    },function(e,t) {
        "use strict";
        Object.defineProperty(t,"__esModule", {
                value:!0
            }
        ),t.default=function(e) {
            var t="string"==typeof e?$(e):e;
            return!!(t&&t.length>0)
        }
    },function(e,t) {
        "use strict";
        "undefined"==typeof OPPO_MODULE_FN&&(window.OPPO_MODULE_FN= {
        }
        ),"undefined"==typeof OPPO_CONFIG_ATTR&&(window.OPPO_CONFIG_ATTR= {
        }
        )
    }
    ,function(e,t,i) {
        "use strict";
        function n(e) {
            return e&&e.__esModule?e: {
                default:e
            }
        }Object.defineProperty(t,"__esModule", {
                value:!0
            }
        );
        var o=i(7),a=n(o),r=i(8),s=n(r),u= {
            regClassCache: {
            }
            ,hasClass:function(e,t) {
                return u.regClassCache[t]||(u.regClassCache[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),u.regClassCache[t].test(e.getAttribute("class")||"")&&u.regClassCache[t]
            }
            ,addClass:function(e,t) {
                u.hasClass(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)
            }
            ,removeClass:function(e,t) {
                var i;
                (i=u.hasClass(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(i," "))
            }
        },d=function() {
            function e(t,i) {
                return(0,a.default)(this,e),this.videoNode=document.getElementById(t),this.iscanplay=!1,this.isplaying=!1,this.cb=null,this.getUpdate=null,this.parent=this.videoNode.parentNode,i&&(i.loop&&(this.loop=i.loop||!1),i.unmuted&&(this.unmuted=i.unmuted||!1),i.url&&(this.url=i.url||!1),this.unmuted&&this.videoNode.setAttribute("muted",!1),this.loop&&this.videoNode.setAttribute("loop",!0)),this.onEnd=this.onEnd.bind(this),this.onPlay=this.onPlay.bind(this),this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.onTimeupdate=this.onTimeupdate.bind(this),this.videoNode&&(this.videoNode.setAttribute("playsinline","true"),this.videoNode.setAttribute("webkit-playsinline","true"),this.onComplete=this.onComplete.bind(this),this.onMetaData=this.onMetaData.bind(this),this.videoNode.addEventListener("loadmetadata",this.onMetaDta),this.onProgress=this.onProgress.bind(this),this.videoNode.addEventListener("progress",this.onProgress)),this
            }
            return(0,s.default)(e,[ {
                key:"execute",value:function() {
                    this.url&&(this.videoNode.src=this.url),this.videoNode.addEventListener("canplaythrough",this.onComplete),this.videoNode.addEventListener("ended",this.onEnd),this.videoNode.addEventListener("play",this.onPlay),this.videoNode.addEventListener("timeupdate",this.onTimeupdate),this.videoNode.load()
                }
            }, {
                key:"onProgress",value:function(e) {
                    if(!0===this.videoNode.buffered.length) {
                        var t=this.videoNode.buffered.end(0);
                        e&&"function"==typeof e&&e(t/this.videoNode.duration*100)
                    }
                }
            }
                , {
                    key:"onComplete",value:function() {
                        !u.hasClass(this.videoNode,"loaded")&&u.addClass(this.videoNode,"loaded"),this.videoNode.removeEventListener("canplaythrough",this.onComplete),this.iscanplay=!0
                    }
                }, {
                    key:"onEnd",value:function() {
                        u.hasClass(this.parent,"active")&&u.removeClass(this.parent,"active"),this.cb&&"function"==typeof this.cb&&this.cb()
                    }
                }, {
                    key:"onTimeupdate",value:function() {
                        var e= {
                                currenttime:this.videoNode.currentTime,duration:this.videoNode.duration
                            }
                            ;
                        this.getUpdate&&"function"==typeof this.getUpdate&&this.getUpdate(e)
                    }
                }, {
                    key:"onPlay",value:function() {
                        !u.hasClass(this.parent,"active")&&u.addClass(this.parent,"active")
                    }
                }, {
                    key:"play",value:function(e) {
                        this.currenttime=null,this.cb=null;
                        try {
                            this.videoNode&&(this.videoNode.currentTime=0)
                        }
                        catch(e) {
                        }
                        !u.hasClass(this.videoNode,"play")&&u.addClass(this.videoNode,"play"),this.videoNode&&this.videoNode.play(),this.isplaying=!0,e&&"function"==typeof e&&(this.cb=e)
                    }
                }, {
                    key:"pause",value:function(e) {
                        this.cb=null,u.hasClass(this.videoNode,"play")&&u.removeClass(this.videoNode,"play"),this.videoNode&&this.videoNode.pause(),this.currenttime=this.videoNode.currentTime,this.isplaying=!1,e&&"function"==typeof e&&(this.cb=e)
                    }
                }, {
                    key:"stop",value:function(e) {
                        this.videoNode&&this.videoNode.pause(),this.videoNode.currentTime=0,this.isplaying=!1
                    }
                }, {
                    key:"resume",value:function(e) {
                        this.cb=null,u.hasClass(this.videoNode,"play")&&u.removeClass(this.videoNode,"play"),this.videoNode&&this.videoNode.play(),this.currenttime&&(this.videoNode.currentTime=this.currenttime),this.isplaying=!0,this.currenttime=null,e&&"function"==typeof e&&(this.cb=e)
                    }
                }, {
                    key:"setAttribute",value:function(e) {
                        for(var t in e)this.videoNode.setAttribute(t.toString(),e[t].toString())
                    }
                }, {
                    key:"setUpdate",value:function(e) {
                    }
                }, {
                    key:"onMetaData",value:function() {
                    }
                }, {
                    key:"revert",value:function() {
                    }
                }, {
                    key:"destroy",value:function() {
                    }
                }]),e
        }
        ();
        t.default=d
    }
    ,function(e,t) {
        "use strict";
        t.__esModule=!0,t.default=function(e,t) {
            if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }
    },function(e,t,i) {
        "use strict";
        t.__esModule=!0;
        var n=i(9),o=function(e) {
            return e&&e.__esModule?e: {
                default:e
            }
        }(n);
        t.default=function() {
            function e(e,t) {
                for(var i=0;
                    i<t.length;
                    i++) {
                    var n=t[i];
                    n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(e,n.key,n)
                }
            }return function(t,i,n) {
                return i&&e(t.prototype,i),n&&e(t,n),t
            }
        }()
    }
    ,function(e,t,i) {
        e.exports= {
            default:i(10),__esModule:!0
        }
    },function(e,t,i) {
        i(11);
        var n=i(14).Object;
        e.exports=function(e,t,i) {
            return n.defineProperty(e,t,i)
        }
    },function(e,t,i) {
        var n=i(12);
        n(n.S+n.F*!i(22),"Object", {
                defineProperty:i(18).f
            }
        )
    }
    ,function(e,t,i) {
        var n=i(13),o=i(14),a=i(15),r=i(17),s=function(e,t,i) {
                var u,d,l,c=e&s.F,f=e&s.G,h=e&s.S,p=e&s.P,v=e&s.B,m=e&s.W,g=f?o:o[t]||(o[t]= {
                }
                ),y=g.prototype,w=f?n:h?n[t]:(n[t]|| {
                }
                ).prototype;
                f&&(i=t);
                for(u in i)(d=!c&&w&&void 0!==w[u])&&u in g||(l=d?w[u]:i[u],g[u]=f&&"function"!=typeof w[u]?i[u]:v&&d?a(l,n):m&&w[u]==l?function(e) {
                    var t=function(t,i,n) {
                            if(this instanceof e) {
                                switch(arguments.length) {
                                    case 0:return new e;
                                    case 1:return new e(t);
                                    case 2:return new e(t,i)
                                }
                                return new e(t,i,n)
                            }
                            return e.apply(this,arguments)
                        }
                        ;
                    return t.prototype=e.prototype,t
                }
                (l):p&&"function"==typeof l?a(Function.call,l):l,p&&((g.virtual||(g.virtual= {
                }
                ))[u]=l,e&s.R&&y&&!y[u]&&r(y,u,l)))
            }
            ;
        s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s
    }
    ,function(e,t) {
        var i=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();
        "number"==typeof __g&&(__g=i)
    }
    ,function(e,t) {
        var i=e.exports= {
                version:"2.4.0"
            }
            ;
        "number"==typeof __e&&(__e=i)
    }
    ,function(e,t,i) {
        var n=i(16);
        e.exports=function(e,t,i) {
            if(n(e),void 0===t)return e;
            switch(i) {
                case 1:return function(i) {
                    return e.call(t,i)
                }
                    ;
                case 2:return function(i,n) {
                    return e.call(t,i,n)
                }
                    ;
                case 3:return function(i,n,o) {
                    return e.call(t,i,n,o)
                }
            }return function() {
                return e.apply(t,arguments)
            }
        }
    }
    ,function(e,t) {
        e.exports=function(e) {
            if("function"!=typeof e)throw TypeError(e+" is not a function!");
            return e
        }
    },function(e,t,i) {
        var n=i(18),o=i(26);
        e.exports=i(22)?function(e,t,i) {
            return n.f(e,t,o(1,i))
        }
            :function(e,t,i) {
            return e[t]=i,e
        }
    },function(e,t,i) {
        var n=i(19),o=i(21),a=i(25),r=Object.defineProperty;
        t.f=i(22)?Object.defineProperty:function(e,t,i) {
            if(n(e),t=a(t,!0),n(i),o)try {
                return r(e,t,i)
            }
            catch(e) {
            }
            if("get"in i||"set"in i)throw TypeError("Accessors not supported!");
            return"value"in i&&(e[t]=i.value),e
        }
    },function(e,t,i) {
        var n=i(20);
        e.exports=function(e) {
            if(!n(e))throw TypeError(e+" is not an object!");
            return e
        }
    },function(e,t) {
        e.exports=function(e) {
            return"object"==typeof e?null!==e:"function"==typeof e
        }
    },function(e,t,i) {
        e.exports=!i(22)&&!i(23)(function() {
                return 7!=Object.defineProperty(i(24)("div"),"a", {
                        get:function() {
                            return 7
                        }
                    }).a
            }
        )
    }
    ,function(e,t,i) {
        e.exports=!i(23)(function() {
                return 7!=Object.defineProperty( {
                        }
                        ,"a", {
                            get:function() {
                                return 7
                            }
                        }).a
            }
        )
    }
    ,function(e,t) {
        e.exports=function(e) {
            try {
                return!!e()
            }
            catch(e) {
                return!0
            }
        }
    }
    ,function(e,t,i) {
        var n=i(20),o=i(13).document,a=n(o)&&n(o.createElement);
        e.exports=function(e) {
            return a?o.createElement(e): {
            }
        }
    }
    ,function(e,t,i) {
        var n=i(20);
        e.exports=function(e,t) {
            if(!n(e))return e;
            var i,o;
            if(t&&"function"==typeof(i=e.toString)&&!n(o=i.call(e)))return o;
            if("function"==typeof(i=e.valueOf)&&!n(o=i.call(e)))return o;
            if(!t&&"function"==typeof(i=e.toString)&&!n(o=i.call(e)))return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },function(e,t) {
        e.exports=function(e,t) {
            return {
                enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t
            }
        }
    }
    ,function(e,t) {
        "use strict";
        Object.defineProperty(t,"__esModule", {
                value:!0
            }
        ),t.default=function() {
            return function() {
                if(OPPO_MODULE_FN.common) {
                    var e=(new Date).getTime()/1e3,t=OPPO_CONFIG_ATTR.mulian_start_time,i=OPPO_CONFIG_ATTR.mulian_end_time,n=OPPO_CONFIG_ATTR.mulian_url,o=OPPO_CONFIG_ATTR.mulian_md5,a=OPPO_MODULE_FN.common.getCookies("oc_mulian_id");
                    OPPO_MODULE_FN.common.setCookies("oc_mulian_id",o),o&&null!=o&&o!=a&&e>t&&e<i&&(window.location.href=n+window.location.search)
                }
            }()
        }
    }]);
