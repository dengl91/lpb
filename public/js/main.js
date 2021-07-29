// custom script

(function($) {
    $(document).ready(function() {

        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true
        });

        $('.banner__slider.main').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 2,
            dots: true,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        infinite: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.banner__slider.testimonials').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.experts__content').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        });

        // logical

        $('[data-active]').on('click', function() {
            $(this).toggleClass('active');
        });

        $('[data-control]').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let target = $(this).data('control');
            $('.' + target).toggleClass('active');
        });

        $('[data-control-parent]').on('click', function() {
            let parent = $(this).data('control-parent');
            $(this).closest('.' + parent).toggleClass('active');
        });

        // Search

        $('.search input[type=text]').val('');

        $('.search input[type=submit]').on('click', function(e) {
            if ( !$(this).siblings('input').val() ) {
                e.preventDefault();
                $(this).siblings('input').toggleClass('active');
            }
        });

        $('body').on('click', function(e) {
            if ( $(e.target).closest('.search').length ) return;
            $('.search input').removeClass('active');
        });

        // data-events

        $('[data-bg]').each(function() {
            let bg_img = $(this).data('bg');
            $(this).css('background-image', 'url(' + bg_img + ')');
        });

        $('[data-click]').on('click', function() {
            $(this).toggleClass('active');
        });

        // Menu
        
        $('.menu-btn').on('click', function() {
            $('.menu-btn, .menu').toggleClass('active');
            $('body').toggleClass('unscroll');
        });

        $('.menu').on('click', function(e) {
            if ( e.target !== this ) return;
            $('.menu-btn, .menu').removeClass('active');
            $('body').removeClass('unscroll');
        });

        // Global keypress

        $(document).keyup(function(e) {
            if ( e.key === "Escape" ) {
                $('.menu-btn, .menu, .modal, .search input').removeClass('active');
                $('body').removeClass('unscroll');
            }
        });

        // Tabs

        $('.tabs-nav__item.active').each(function() {
            tabs_line($(this));
        });

        $('.tabs-nav__item').hover(function() {
            tabs_line($(this));
        }, function() {
            tabs_line($(this).siblings('.active'));
        });

        function tabs_line(e) {
            let tab_index = e.index();
            let line_width = e.outerWidth() - 20;
            for ( i = 0; i < tab_index; i++ ) {
                line_width += e.siblings().eq(i).outerWidth();
            }
            let window_width = $(window).width();
            let container_width = $('.container').width();
            e.siblings('.tabs-nav__line').css('width',  + (window_width - container_width) / 2 + Math.round(line_width));
        }

        $('span.tabs-nav__item').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            $('.tabs__content').hide();
            $('.tabs__content').eq(index).show();
        });

        // cookie

        $('.cookie__btn, .cookie__close').on('click', function(e) {
            $('.cookie').removeClass('active');
        });

        // Modal

        $('body').on('click', function(e) {
            if ( $('.modal.active').length ) {
                if ( $(e.target).closest('.modal').length ) return;
                $('.modal').removeClass('active');
            }
        });

        $('.modal__close, .modal__blur').on('click', function(e) {
            if ( e.target == e ) return;
            $(this).closest('.modal').removeClass('active');
        });

        $('.staff__item').on('click', function() {
            $('.modal--staff').addClass('active');
            let staff_img         = $(this).find('img').attr('src');
            let staff_title       = $(this).find('.staff__title').text();
            let staff_position    = $(this).find('.staff__position').text();
            let staff_description = $(this).find('.staff__description').text();
            $('.modal--staff').find('img').attr('src', staff_img);
            $('.modal--staff').find('.common-title').text(staff_title);
            $('.modal--staff').find('.staff__position').text(staff_position);
            $('.modal--staff').find('.staff__description').text(staff_description);
        });

        $('.popup-form-content').mousedown( function(e) {
            if (e.target !== this)
                return;
            
            $(this).removeClass('active');
        });

        // Counter

        $(window).scroll( function() {
            $('[data-count]').each(function () {
                let target = $(this);
                if ( isOnScreen(target) && !target.hasClass('counted') ) {
                    countUp(target);
                    target.addClass('counted');
                }
            });
            $('[data-width]').each(function () {
                let target = $(this);
                if ( isOnScreen(target) && !target.hasClass('counted') ) {
                    setWidth(target);
                    target.addClass('counted');
                }
            });
            $('.nums__item svg circle').each(function () {
                const target = $(this);
                if ( isOnScreen(target) ) {
                    const percent = target.data('percent');
                    const dasharray = 400 - percent * 3.8;
                    target.css('stroke-dashoffset', dasharray);
                }
            });
        });

        // datepicker

        if ( $('.datepicker-here').length ) {
            $datepicker = $('.datepicker-here').datepicker({
                minDate: new Date(),
                inline: true,
                onSelect: function (dateText, inst) {
                    let date = dateText.replace(/\./g, '/');
                }
            });

            $datepicker.data('datepicker').selectDate(new Date());
        }

        function countUp(target) {
            let defaultCount = parseFloat(target.text());
            let totalCount = target.data('count');
            let increaser = totalCount / 50;
            defaultCount = defaultCount + increaser;
            if ( totalCount >= defaultCount ) {
                target.text(parseFloat(defaultCount).toFixed(1));
                setTimeout(() => {
                    countUp(target);
                }, 100);
            } else {
                return;
            }
        }

        function setWidth(target) {
            let width = target.data('width');
            target.css('width', width + '%');
        }

        // Timeline

        $('.timeline__row--title').on('click', function() {
            $(this).closest('.timeline__item').toggleClass('active');
        });

        // Animated logo

        $(window).scroll( function() {
            $('.logical__bg').each(function() {
                if ( isOnScreen(this) ) {
                    $(this).addClass('animated');
                }
            });
        });

        // Animation

        let keywords = {
            ac: "active",
            fi: "animate__fadeIn",
            bi: "animate__bounceIn",
            fir: "animate__fadeInRight",
            fiu: "animate__fadeInUp",
            fil: "animate__fadeInLeft",
            fid: "animate__fadeInDown",
            ri: "animate__rotateIn",
            riur: "animate__rotateInUpRight",
            sid: "animate__slideInDown",
            sil: "animate__slideInLeft",
            sir: "animate__slideInRight",
            siu: "animate__slideInUp",
            zi: "animate__zoomIn",
            jitb: "animate__jackInTheBox",
        };

        $(window).scroll( function() {
            $('.animate__animated').each(function () {
                let target = $(this);
                for (const key in keywords) {
                    if ( isOnScreen(target) && target.hasClass(key)) {
                        target.addClass(keywords[key]);
                    }
                }
            });
        });
    
        function isOnScreen(elem) {
            if( elem.length == 0 ) {
                return;
            }
            var $window = $(window)
            var viewport_top = $window.scrollTop()
            var viewport_height = $window.height()
            var viewport_bottom = ( viewport_top + viewport_height ) * 1.1
            var $elem = $(elem)
            var top = $elem.offset().top
            var height = $elem.height()
            var bottom = top + height
        
            return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
        }

    });

})( jQuery );