 AOS.init({
     duration: 800,
     easing: 'slide',
     once: false
 });

 jQuery(document).ready(function ($) {

     "use strict";


     $(".loader").delay(1000).fadeOut("slow");
     $("#overlayer").delay(1000).fadeOut("slow");


     var siteMenuClone = function () {

         $('.js-clone-nav').each(function () {
             var $this = $(this);
             $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
         });


         setTimeout(function () {

             var counter = 0;
             $('.site-mobile-menu .has-children').each(function () {
                 var $this = $(this);

                 $this.prepend('<span class="arrow-collapse collapsed">');

                 $this.find('.arrow-collapse').attr({
                     'data-toggle': 'collapse',
                     'data-target': '#collapseItem' + counter,
                 });

                 $this.find('> ul').attr({
                     'class': 'collapse',
                     'id': 'collapseItem' + counter,
                 });

                 counter++;

             });

         }, 1000);

         $('body').on('click', '.arrow-collapse', function (e) {
             var $this = $(this);
             if ($this.closest('li').find('.collapse').hasClass('show')) {
                 $this.removeClass('active');
             } else {
                 $this.addClass('active');
             }
             e.preventDefault();

         });

         $(window).resize(function () {
             var $this = $(this),
                 w = $this.width();

             if (w > 768) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         })

         $('body').on('click', '.js-menu-toggle', function (e) {
             var $this = $(this);
             e.preventDefault();

             if ($('body').hasClass('offcanvas-menu')) {
                 $('body').removeClass('offcanvas-menu');
                 $this.removeClass('active');
             } else {
                 $('body').addClass('offcanvas-menu');
                 $this.addClass('active');
             }
         })

         // click outisde offcanvas
         $(document).mouseup(function (e) {
             var container = $(".site-mobile-menu");
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         });
     };
     siteMenuClone();


     var sitePlusMinus = function () {
         $('.js-btn-minus').on('click', function (e) {
             e.preventDefault();
             if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                 $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
             } else {
                 $(this).closest('.input-group').find('.form-control').val(parseInt(0));
             }
         });
         $('.js-btn-plus').on('click', function (e) {
             e.preventDefault();
             $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
         });
     };
     // sitePlusMinus();


     var siteSliderRange = function () {
         $("#slider-range").slider({
             range: true,
             min: 0,
             max: 500,
             values: [75, 300],
             slide: function (event, ui) {
                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
             }
         });
         $("#amount").val("$" + $("#slider-range").slider("values", 0) +
             " - $" + $("#slider-range").slider("values", 1));
     };
     // siteSliderRange();



     var siteCarousel = function () {
         if ($('.nonloop-block-13').length > 0) {
             $('.nonloop-block-13').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 margin: 0,
                 autoplay: true,
                 nav: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 0,
                         nav: true,
                         items: 2
                     },
                     1000: {
                         margin: 0,
                         stagePadding: 0,
                         nav: true,
                         items: 3
                     },
                     1200: {
                         margin: 0,
                         stagePadding: 0,
                         nav: true,
                         items: 4
                     }
                 }
             });
         }

         $('.slide-one-item').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             autoplay: true,
             pauseOnHover: false,
             nav: true,
             navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
         });

         // $('.slide-one-item-alt').owlCarousel({
         //   center: false,
         //   items: 1,
         //   loop: true,
         // stagePadding: 0,
         // smartSpeed: 700,
         //   margin: 0,
         //   autoplay: true,
         //   pauseOnHover: false,

         // });

         // $('.slide-one-item-alt-text').owlCarousel({
         //   center: false,
         //   items: 1,
         //   loop: true,
         // stagePadding: 0,
         // smartSpeed: 700,
         //   margin: 0,
         //   autoplay: true,
         //   pauseOnHover: false,
         // });

         $('.slide-one-item-alt').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             smartSpeed: 1000,
             //                                       autoplay: true,
             pauseOnHover: true,
             onDragged: function (event) {
                 console.log('event : ', event.relatedTarget['_drag']['direction'])
                 if (event.relatedTarget['_drag']['direction'] == 'left') {
                     $('.slide-one-item-alt-text').trigger('next.owl.carousel');
                 } else {
                     $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
                 }
             }
         });
         $('.slide-one-item-alt-text').owlCarousel({
             center: false,
             items: 1,
             loop: true,
             stagePadding: 0,
             margin: 0,
             smartSpeed: 1000,
             //                                       autoplay: true,
             pauseOnHover: true,
             onDragged: function (event) {
                 console.log('event : ', event.relatedTarget['_drag']['direction'])
                 if (event.relatedTarget['_drag']['direction'] == 'left') {
                     $('.slide-one-item-alt').trigger('next.owl.carousel');
                 } else {
                     $('.slide-one-item-alt').trigger('prev.owl.carousel');
                 }
             }
         });


         $('.custom-next').click(function (e) {
             e.preventDefault();
             $('.slide-one-item-alt').trigger('next.owl.carousel');
             $('.slide-one-item-alt-text').trigger('next.owl.carousel');
         });
         $('.custom-prev').click(function (e) {
             e.preventDefault();
             $('.slide-one-item-alt').trigger('prev.owl.carousel');
             $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
         });

     };
     siteCarousel();

     var siteStellar = function () {
         $(window).stellar({
             responsive: false,
             parallaxBackgrounds: true,
             parallaxElements: true,
             horizontalScrolling: false,
             hideDistantElements: false,
             scrollProperty: 'scroll'
         });
     };
     // siteStellar();

     var siteCountDown = function () {

         $('#date-countdown').countdown('2020/10/10', function (event) {
             var $this = $(this).html(event.strftime('' +
                 '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
                 '<span class="countdown-block"><span class="label">%d</span> days </span>' +
                 '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
                 '<span class="countdown-block"><span class="label">%M</span> min </span>' +
                 '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
         });

     };
     siteCountDown();

     var siteDatePicker = function () {

         if ($('.datepicker').length > 0) {
             $('.datepicker').datepicker();
         }

     };
     siteDatePicker();

     var siteSticky = function () {
         $(".js-sticky-header").sticky({
             topSpacing: 0
         });
     };
     siteSticky();

     // navigation
     var OnePageNavigation = function () {
         var navToggler = $('.site-menu-toggle');
         $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
             e.preventDefault();

             var hash = this.hash;

             $('html, body').animate({
                 'scrollTop': $(hash).offset().top
             }, 600, 'easeInOutExpo', function () {
                 window.location.hash = hash;
             });

         });
     };
     OnePageNavigation();

     var siteScroll = function () {



         $(window).scroll(function () {

             var st = $(this).scrollTop();

             if (st > 100) {
                 $('.js-sticky-header').addClass('shrink');
             } else {
                 $('.js-sticky-header').removeClass('shrink');
             }

         })

     };
     siteScroll();


     var siteIstotope = function () {
         /* activate jquery isotope */
         var $container = $('#posts').isotope({
             itemSelector: '.item',
             isFitWidth: true
         });

         $(window).resize(function () {
             $container.isotope({
                 columnWidth: '.col-sm-3'
             });
         });

         $container.isotope({
             filter: '*'
         });

         // filter items on button click
         $('#filters').on('click', 'button', function () {
             var filterValue = $(this).attr('data-filter');
             $container.isotope({
                 filter: filterValue
             });
             $('#filters button').removeClass('active');
             $(this).addClass('active');
         });
     }

     siteIstotope();


     $('.fancybox').on('click', function () {
         var visibleLinks = $('.fancybox');

         $.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

         return false;
     });


     //     프로그래스

     $(".circle_percent").each(function () {
         var $this = $(this),
             $dataV = $this.data("percent"),
             $dataDeg = $dataV * 3.6,
             $round = $this.find(".round_per");
         $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
         $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
         $this.prop('Counter', 0).animate({
             Counter: $dataV
         }, {
             duration: 2000,
             easing: 'swing',
             step: function (now) {
                 $this.find(".percent_text").text(Math.ceil(now) + "%");
             }
         });
         if ($dataV >= 51) {
             $round.css("transform", "rotate(" + 360 + "deg)");
             setTimeout(function () {
                 $this.addClass("percent_more");
             }, 1000);
             setTimeout(function () {
                 $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
             }, 1000);
         }
     });








     //     top메뉴
     $(function () {
         $(window).scroll(function () {
             if ($(this).scrollTop() > 500) {
                 $('.quick_top').fadeIn();
             } else {
                 $('.quick_top').fadeOut();
             }
         });

         $(".quick_top").click(function () {
             $('html, body').animate({
                 scrollTop: 0
             }, 400);
             return false;
         });
     });









     //     스톤헨지 줄바꿈
     //페이지 로드시 실행
     fnEqualHeight();



     //cofs.tistory.com/188 [CofS]
     // 프로그래스 스크롤 액션
     //     $("body").scroll(function () {
     //         // 현재스크롤바 위치
     //         var scTop = $(this).scrollTop();
     //         //console.log("스크롤위치:" + scTop);
     //
     //         if (scTop >= 512) {
     //             $(".circle_percent").addClass("on");
     //
     //        } else {
     //            $(".circle_percent").removeClass("on");
     //        }
     //     }); /////////////////// scroll //////////////
     //     /////////////////////////////////////////////////  

     //
     //     $(window).scroll(function () {
     //         // 현재스크롤바 위치
     //         var scTop = $(this).scrollTop();
     //         console.log("스크롤위치:" + scTop);
     //
     //     }); /////////////////// scroll //////////////
     //     /////////////////////////////////////////////////
     //
     //     // 


     /// 페이지 새로 고칠때 맨위로 가게하기(브라우저 캐쉬가 잘 안지워져서 쓰는 것임!) 
     //     setTimeout(function () {
     //         $("html").animate({
     //             scrollTop: "0px"
     //         }, 10); /// animate ////
     //     }, 500); //// 타임아웃 ////////
     //
     //
     //  $(window).scroll(function () {
     //
     //    var scTop = $(this).scrollTop();
     //    var $percentElements = $('.circle_percent');
     //    if (scTop >= 512 ) {
     //        if( $percentElements.hasClass('on') ) return;
     //
     //        $percentElements.addClass("on");
     //        $percentElements.each(function () {
     //            var $this = $(this),
     //                $dataV = $this.data("percent"),
     //                $dataDeg = $dataV * 3.6,
     //                $round = $this.find(".round_per");
     //                
     //            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
     //            $this.prop('Counter', 0).stop().animate({
     //                Counter: $dataV
     //            }, {
     //                duration: 2000,
     //                easing: 'swing',
     //                step: function (now) {
     //                    $this.find(".percent_text").text(Math.ceil(now) + "%");
     //                }
     //            });
     //            if ($dataV >= 51) {
     //                $round.css("transform", "rotate(" + 360 + "deg)");
     //                setTimeout(function () {
     //                    $this.addClass("percent_more");
     //                }, 1000);
     //                setTimeout(function () {
     //                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
     //                }, 1000);
     //            }
     //        });
     //
     //    } else {
     //        $percentElements.removeClass("on");
     //    }
     //});


 });



 //     스톤헨지 줄바꿈

 //항상 같게하는 함수
 function fnEqualHeight() {
     //서로를 구한다.
     let vc = $('.variable-content');
     let vc_child = $(vc).children();
     let tc = $('.target-content');

     //같은 인덱스끼리 높이를 같게한다
     for (var i = 0; i < vc_child.length; i++) {
         let val = $(vc).children().eq(i).height();
         $(tc).children().eq(i).css("height", val);
     }
 };


 //창크기 변화시 실행
 $(window).resize(fnEqualHeight);
