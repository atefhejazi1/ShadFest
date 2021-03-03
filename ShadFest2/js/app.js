$(function () {
    // sticky navigation ,menu
    let nav_offsit_top = $('.navbar').height() + 50;

    function navbarFiexd() {
        if ($('.navbar').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offsit_top) {
                    $('.navbar').addClass('navbar-fixed');
                    $('.navbar').css("margin", "0");
                    // $('.upper-bar').addClass('upper-bar-display-none');
                    $(".upper-bar").fadeOut("slow");
                } else {
                    $('.upper-bar').removeClass('upper-bar-display-none');
                    $('.navbar').removeClass('navbar-fixed');
                    $(".upper-bar").fadeIn("slow");
                    $('.navbar').css("margin", "30px");
                }
            })
        }
    }

    navbarFiexd();

    $('.navbar li a').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000)
    })


    // Filteration to Top 5 
    $('.top5 .filter').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.top5 .desc').show('1000');
        } else {
            $('.top5 .desc').not('.' + value).hide('1000');
            $('.top5 .desc').filter('.' + value).show('1000');
        }
    })

    $('.top5 .filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })


    // Filteration to directions
    $('.musicSchedule .filter').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.musicSchedule .desc').show('1000');
        } else {
            $('.musicSchedule .desc').not('.' + value).hide('1000');
            $('.musicSchedule .desc').filter('.' + value).show('1000');
        }
    })

    $('.musicSchedule .filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })


    $('.pop').click(function () {
        var src = $(this).attr('src');
        $(".modal").modal("show");
        $("#popup-img").attr("src", src)
    })


    // Weather
    !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');


    let scrollBtn = $("#scroll_up");
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollBtn.show() : scrollBtn.hide();
    });

    // Click On Button To Scroll Top
    scrollBtn.click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });



    var addClassOnScroll = function () {
        var windowTop = $(window).scrollTop();
        $('section[id]').each(function (index, elem) {
            var offsetTop = $(elem).offset().top;
            var outerHeight = $(this).outerHeight(true);
            if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
                var elemId = $(elem).attr('id');
                $("nav ul li a.active").removeClass('active');
                $("nav ul li a[href='#" + elemId + "']").addClass('active');
            }
        });
    };

    $(function () {
        $(window).on('scroll', function () {
            addClassOnScroll();
        });
    });



});