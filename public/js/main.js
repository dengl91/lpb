// custom script

(function($) {
    $(document).ready(function() {

        $('.banner__slider.main').on('init', function(event, slick){
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });

        $('.banner__slider.main').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 2,
            dots: true,
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

        $('[data-bg]').each(function() {
            let bg_img = $(this).data('bg');
            $(this).css('background-image', 'url(' + bg_img + ')');
        });
        
        $('.topmenu__menu-btn, .header__menu-btn').on('click', function() {
            $(this).toggleClass('active');
        });

        // tabs

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

        $('.tabs-nav__item').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            $('.tabs__content').hide();
            $('.tabs__content').eq(index).show();
        });

        // modal

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
        });

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

        $('.timeline__row--title').on('click', function() {
            $(this).closest('.timeline__item').toggleClass('active');
        });

        $('.popup-form-content').mousedown( function(e) {
            if (e.target !== this)
                return;
            
            $(this).removeClass('active');
        });

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