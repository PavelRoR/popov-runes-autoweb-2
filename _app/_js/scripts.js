//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend slick.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                // check.next().css({
                //     'color': 'red',
                //     'transition': 'all .4s ease'
                // });
                // check.next().children().css({
                //     'color': 'red',
                //     'transition': 'all .4s ease'
                // });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {

                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            // check.next().css({
            //     "color": "#000",
            //     'transition': 'all .4s ease'
            // });
            // check.next().children().css({
            //     "color": "#000",
            //     'transition': 'all .4s ease'
            // });
            message.slideUp(500);
        });
    });
    $('.for-items').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        arrows: true
        // adaptiveHeight: true
    });
    $('.revs').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        adaptiveHeight: true,
        centerMode: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 485,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*Модалки*/
    $('.button-up, .link-up').fancybox();
    /*Видео-отзывы*/
    $(".video-wrapper-rev img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>')
    });
    $('.revs-video').on('swipe', function (event, slick, direction) {
        $('.video-wrapper-rev iframe').each(function () {
            // var v =$('.video_rev_img');
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            console.log(l);
        });
        $(".video-wrapper-rev img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?mute=1&showinfo=0&rel=0&autoplay=1&modestbranding=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });
    $('.slick-arrow').on('click', function () {
        $('.video-wrapper-rev iframe').each(function () {
            // var v =$('.video_rev_img');
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            console.log(l);
        });
        $(".video-wrapper-rev img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?mute=1&showinfo=0&rel=0&autoplay=1&modestbranding=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });
    /*Конец документа*/
});