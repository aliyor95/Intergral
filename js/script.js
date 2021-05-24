jQuery(document).ready(function () {
    $('.number').counterUp({
        delay: 10,
        time: 3000
    });

    //  Menu nav toggle
    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('#nav__link').toggleClass('active');
    });

    $(function () {
        var header = $('#nav'),
            introH = $('#header').innerHeight(),
            scrollOffset = $(window).scrollTop();

        // ! Fixed header
        checkScroll(scrollOffset);
        $(window).on('scroll', function () {
            scrollOffset = $(this).scrollTop();
            checkScroll(scrollOffset);
        });

        function checkScroll(scrollOffset) {
            if (scrollOffset >= introH) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }
    });

    // Smooth scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav__link a').removeClass('active');
        $this.addClass('active');

        $('#nav__link').removeClass('active');
        $('#nav_toggle').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 100);
    });

    // Slick slider
    $(function () {
        $('.slick-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            responsive: [{
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 410,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });

});

// Init AOS
(function ($) {
    "use strict";

    function aosInit() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
    }
    $(window).on('load', function () {
        aosInit();
    });

})(jQuery);

new WOW().init();

$(document).ready(function () {
    $(".list").click(function () {

        let value = $(this).attr("data-filter");

        if (value == "all") {
            $(".items").show(1000);
        } else {
            $(".items").not("." + value).hide(1000);
            $(".items").filter("." + value).show(1000);
        }

        $(".list").removeClass("active");
        $(this).addClass("active");
    });


    $('.items-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true,

            preload: [0, 2],

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
        },

        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});
$(document).ready(function () {
    $(".list").click(function () {

        let value = $(this).attr("data-filter");

        if (value == "all") {
            $(".items").show(1000);
        } else {
            $(".items").not("." + value).hide(1000);
            $(".items").filter("." + value).show(1000);
        }

        $(".list").removeClass("active");
        $(this).addClass("active");
    });


    $('.items-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true,

            preload: [0, 2],

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
        },

        mainClass: 'mfp-with-zoom',

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});