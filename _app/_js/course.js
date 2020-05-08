//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend jquery.magnific-popup.min.js
//@prepros-prepend slick.min.js

$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices'], a[href='#videos']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    /*Модалки*/
    $('.more-button').fancybox();

    $('.revs').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerPadding: '15px',
        // adaptiveHeight: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 385,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $('.revs-text-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });
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
    $('.revs-video .slick-arrow').on('click', function () {
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