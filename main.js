/**
 * main.js
 */
requirejs.config({
    'paths': {
        'jquery': '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
})

require(['jquery'], function ($) {
    $(function () {
        var $box = $('#box'),
            index = 1,
            timer,
            isMoving = false;  // 是否在动画过程中

        require(['show'], function (showEle) {
            var tb = new showEle();
            tb.show();
            var $slider = $('#slider'),
                $left = $('#left'),
                $right = $('#right');
            var arr = document.getElementById('navs').children;

            arr[0].className = "active";
            $box.mouseover(function () {
                tb.animate($left, {
                    opacity: 0.6
                })
                tb.animate($right, {
                    opacity: 0.6
                })
                clearInterval(timer);
            })
            $box.mouseout(function () {
                tb.animate($left, {
                    opacity: 0
                })
                tb.animate($right, {
                    opacity: 0
                })
                timer = setInterval(next, 1000); //图片开始接着滚动
            })

            $right.click(next);
            $left.click(prev);

            function next() {
                if (isMoving) return;
                isMoving = true;
                index++;
                navmove();
                tb.animate($slider, {
                    left: -1200 * index
                }, function () {
                    if (index > 5) {
                        $slider.css('left', '-1200px');
                        index = 1;
                    }
                    isMoving = false;
                });
            }
            function prev() {
                if (isMoving) return;
                isMoving = true;
                index--;
                navmove();
                tb.animate($slider, {
                    left: -1200 * index
                }, function () {
                    if (index == 0) {
                        $slider.css('left', -1200 * 5 + 'px');
                        index = 5;
                    }
                    isMoving = false;
                });
            }

            // 点击圆圈 
            for (let i = 0; i < arr.length; i++) {
                arr[i].onclick = () => {
                    index = i + 1;
                    navmove();
                    tb.animate($slider, {
                        left: -1200 * (i + 1)
                    })
                }
            }
            //图片切换时按钮样式跟着切换
            function navmove() {
                for (var i = 0; i < arr.length; i++) {
                    arr[i].className = '';
                }
                if (index == 1 || index > 5) {
                    arr[0].className = "active";
                } else if (index <= 0) {
                    arr[4].className = "active";
                } else {
                    arr[index - 1].className = 'active'
                }
            }
            //页面打开时自动滚动切换
            timer = setInterval(next, 1000);
        })
    })
})
