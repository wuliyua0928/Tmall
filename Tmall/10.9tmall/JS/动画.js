//动画算法
            /*
		    Linear：无缓动效果(匀速运动)；
			Quad：二次方的缓动；
			Cubic：三次方的缓动
			Quartic：四次方的缓动；
			Quintic：五次方的缓动；
			Sinusoidal：正弦曲线的缓动；
			Exponential：指数曲线的缓动；
			Circular：圆形曲线的缓动；
			Elastic：指数衰减的正弦曲线缓动；
			Back：超过范围的三次方缓动）；
			Bounce：指数衰减的反弹缓动。
			

			每个效果都分三个缓动方式（方法），分别是：
			easeIn：从0开始加速的运动；
			easeOut：减速到0的运动；
			easeInOut：前半段从0开始加速，后半段减速到0的运动。
			


			函数的四个参数分别代表：

				t--- current time（当前时间）；
				b--- beginning value（初始值）；
				c--- change in value（变化量）
				d---duration（持续时间)
		


             运算的结果就是当前的运动路程。
            
          */
  //各种运动方式
         Tween = {  
            Linear: function(t,b,c,d){ return c*t/d + b; },
            Quad: {
                easeIn: function(t,b,c,d){ 
                    return c*(t/=d)*t + b;
                      
                },
                easeOut: function(t,b,c,d){
                    return -c*(t/=d)*(t-2) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t + b;
                    return -c/2 * ((--t)*(t-2) - 1) + b;
                }
            },
            Cubic: {
                easeIn: function(t,b,c,d){
                    return c*(t/=d)*t*t + b;
                },
                easeOut: function(t,b,c,d){
                    return c*((t=t/d-1)*t*t + 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t*t + b;
                    return c/2*((t-=2)*t*t + 2) + b;
                }
            },
            Quart: {
                easeIn: function(t,b,c,d){
                    return c*(t/=d)*t*t*t + b;
                },
                easeOut: function(t,b,c,d){
                    return -c * ((t=t/d-1)*t*t*t - 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                    return -c/2 * ((t-=2)*t*t*t - 2) + b;
                }
            },
            Quint: {
                easeIn: function(t,b,c,d){
                    return c*(t/=d)*t*t*t*t + b;
                },
                easeOut: function(t,b,c,d){
                    return c*((t=t/d-1)*t*t*t*t + 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                    return c/2*((t-=2)*t*t*t*t + 2) + b;
                }
            },
            Sine: {
                easeIn: function(t,b,c,d){
                    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
                },
                easeOut: function(t,b,c,d){
                    return c * Math.sin(t/d * (Math.PI/2)) + b;
                },
                easeInOut: function(t,b,c,d){
                    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
                }
            },
            Expo: {
                easeIn: function(t,b,c,d){
                    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
                },
                easeOut: function(t,b,c,d){
                    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
                },
                easeInOut: function(t,b,c,d){
                    if (t==0) return b;
                    if (t==d) return b+c;
                    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
                }
            },
            Circ: {
                easeIn: function(t,b,c,d){
                    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
                },
                easeOut: function(t,b,c,d){
                    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
                },
                easeInOut: function(t,b,c,d){
                    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
                }
            },
            Elastic: {
                easeIn: function(t,b,c,d,a,p){
                    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                    if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                },
                easeOut: function(t,b,c,d,a,p){
                    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                    if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
                },
                easeInOut: function(t,b,c,d,a,p){
                    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                    if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
                    else var s = p/(2*Math.PI) * Math.asin (c/a);
                    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
                }
            },
            Back: {
                easeIn: function(t,b,c,d,s){
                    if (s == undefined) s = 1.70158;
                    return c*(t/=d)*t*((s+1)*t - s) + b;
                },
                easeOut: function(t,b,c,d,s){
                    if (s == undefined) s = 1.70158;
                    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
                },
                easeInOut: function(t,b,c,d,s){
                    if (s == undefined) s = 1.70158; 
                    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
                }
            },
            Bounce: {
                easeIn: function(t,b,c,d){
                    return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
                },
                easeOut: function(t,b,c,d){
                    if ((t/=d) < (1/2.75)) {
                        return c*(7.5625*t*t) + b;
                    } else if (t < (2/2.75)) {
                        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                    } else if (t < (2.5/2.75)) {
                        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                    } else {
                        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                    }
                },
                easeInOut: function(t,b,c,d){
                    if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
                    else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
                }
            }
         }

//动画函数
    function animate(obj,json,duration,runStyle,callback){     //定义一个函数 形参分别传入变化的对象/变化的属性和结束值的对象/动画运动的总时间/运动方式/运行完之后要干什么
        var start={};   //定义一个对象,存储所有要变化的属性的初始值
        var end={};    //定义一个对象,存储所有要变化的属性的结束值
        var change={}; //定义一个对象,存储所有要变化的属性的变化值
        for (var i in json) {  //循环遍历json对象
            if(i=='scrollTop'){
                start[i]=obj.scrollTop;
            }else{
                start[i]=parseInt(getComputedStyle(obj,null)[i]);  //将json对象中每一个要变化的属性的初始值赋值给start的每一个
            }
            end[i]=json[i];                                   //将json对象中每一个要变化的属性的结束值值赋值给end的每一个
            change[i]=end[i]-start[i];                       //将json对象中每一个要变化的属性的变化值值赋值给change的每一个

        }
        var time=0;                   //定义一个变量time 存储动画运行的时间
        var t=setInterval(function () { //定义一个变量t存储定时器
            time+=40;                   //定时器每运行一次,运动时间+40
            if(time>duration){         //当运行的时间大于动画运动的总时间的时候
                time=duration;         //运行的时间等于动画运动的总时间
                clearInterval(t);     //清除定时器t
                for(var i in json){   //遍历json对象
                    if(i=='opacity'){
                        obj.style[i]=json[i];
                    }else if(i=='scrollTop'){
                        obj.scrollTop=json[i];
                    }else{
                        obj.style[i]=json[i]+'px';   //当运行的时间大于动画运动的总时间的时候,变化的属性值=json中的对应的值+'px'
                    }
                }
                if(callback){
                    callback();
                }
            }else{//当运行的时间不大于动画运动的总时间的时候
                for(var i in json){   // 遍历json对象
                    // obj.style[i]=(time/duration*change[i]+start[i])+'px';//变化的属性值=(运动时间/总时间*每一个的变化值+每一个的初始值)+'px'

                   if(i=="opacity"){
                       obj.style[i]=runStyle(time,start[i],change[i],duration);
                   }else if(i=='scrollTop'){
                       obj.scrollTop=runStyle(time,start[i],change[i],duration);
                   }
                   else{
                       obj.style[i]=runStyle(time,start[i],change[i],duration)+'px';
                   }
                }
            }
        },40) //定时器每经过40ms运行一次
    }