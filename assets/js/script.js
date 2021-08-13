(function($) {
    'use strict'

    /* ============================================================
        [Master Stylesheet]

    	Theme Name: Mariana - App Landing HTML Template
    	Theme URI: https://themeforest.net/user/jubaearislam86664
    	Description: Mariana - App Landing HTML Template
    	Author: Riyadhossain 
    	Author URI: 
    	Version: 1.0  

    ============================================================== */
    /*
    ========================================
    Preloader
    ========================================
    */
    $(window).on('load', function() {
        $('#preloader').delay(200).fadeOut('slow');
        $('body').delay(200).css({
            'overflow': 'visible'
        });
    });


    /*
    ========================================
        Mobile header
    ========================================
    */

    if ($('.mobile-adders').length) {
        $('.mobile-adders').on('click', function() {
            $('.header-responsive').toggleClass('show');
        });
    }

    /*
    ========================================
        Responsive Menu
    ========================================
    */

    // Responsive Menu
    $(document).ready(function() {
        $("[data-trigger]").on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass("show");
            $('body').toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
        });

        $(".close, .screen-overlay,.menu-one ul li a").click(function(e) {
            $(".screen-overlay").removeClass("show");
            $(".mobile-offcanvas").removeClass("show");
            $("body").removeClass("offcanvas-active");
            $(".icon").removeClass("icon-bar");

        });

    });

    /* close  */
    $('.icon').click(function() {
        $('.icon').toggleClass('icon-bar');
    });


    /*
    ========================================
    Counter
    ========================================
    */
    if ($('.counts').length) {
        $('.counts').countUp({
            'time': 2000,
            'delay': 30
        });
    }
    /* ===============================================
        fixed menu js
       ===============================================
    */
    if ($('#mainNav').length) {
        window.onscroll = function() { myFunction() };

        var navbar = document.getElementById("mainNav");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }



    /* 
    =====================================================
        Start active menu
    ======================================================
    */
    var sections = jQuery('section'),
        nav = jQuery('nav'),
        nav_height = nav.outerHeight();

    jQuery(window).on('scroll', function() {
        var cur_pos = jQuery(this).scrollTop();

        sections.each(function() {
            var top = jQuery(this).offset().top - nav_height,
                bottom = top + jQuery(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                jQuery(this).addClass('active');
                nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    /*
    ========================================
    accordion
    ========================================
    */

    if ($('.accordion').length) {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

        $(".accordion > .accordion-item").on('click', function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    }
    /* 
    ========================================
        slick slide
    ========================================
    */

    $('.slick-slides').slick({
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        focusOnSelect: false,
    });
    /* 
        ========================================
            Client-logo
        ========================================
        */

    $('.slide-logo').slick({
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /* 
    ========================================
        Tab
    ========================================
    */
    $(document).ready(function() {
        $('ul.click-tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.click-tabs li').removeClass('active');
            $('.tab-content').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        })
    });


    /*
    ========================================
    Select Js
    ========================================
    */

    $(document).ready(function() {
        $('select').niceSelect();
    });

    /*
    ========================================
    wow js
    ========================================
    */

    new WOW().init();

})(jQuery);