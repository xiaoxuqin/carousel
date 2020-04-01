define(['jquery'], function($){
    function  showEle() {  
        var $box = $('#box');
        var $html = $(
        '<div class="slider" id="slider">'
            + '<div class="slide"><img src="img/b5.png" alt=""></div>'
            + '<div class="slide"><img src="img/b1.png" alt=""></div>'
            + '<div class="slide"><img src="img/b2.png" alt=""></div>'
            + '<div class="slide"><img src="img/b3.png" alt=""></div>'
            + '<div class="slide"><img src="img/b4.png" alt=""></div>'
            + '<div class="slide"><img src="img/b5.png" alt=""></div>'
            + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '</div>'
        + '<span id="left"><</span>'
        + '<span id="right">></span>'
        + '<ul class="nav" id="navs">'
            + '<li id="one">1</li>'
            + '<li>2</li>'
            + '<li>3</li>'
            + '<li>4</li>'
            + '<li id="last">5</li>'
        + '</ul>');
        this.show=function () {  
            $box.append($html);
        }
            function getStyle(obj,attr){
                if(obj.currentStyle){
                    return obj.currentStyle[attr];
                }else{
                    return $(obj.selector).css(attr);
                }
            }
            this.animate = function(obj, json, callback) { 
                clearInterval(obj.timer); 
                obj.timer = setInterval(function () { 
                    var flag = true;
                    for(var attr in json){
                        if(attr == 'opacity'){
                            var now = parseInt(getStyle(obj,attr)*100);
                            var dest = json[attr]*100;
                        } else{
                            var now = parseInt(getStyle(obj,attr));
                            var dest = json[attr];
                        }
                        var speed = (dest-now)/6;
                        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                        if(now != dest){
                            flag = false;
                            if(attr == 'opacity'){
                                $(obj.selector).css(attr,(now + speed) /100);
                            }else{
                                $(obj.selector).css(attr,now+speed+'px');
                            }
                        }
                    }
                    if(flag){
                        clearInterval(obj.timer);
                        callback&&callback();
                    }
                },30)   
            }
        
    };
    return showEle;
})
