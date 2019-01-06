(function ($) {
	'use strict';

  //smooth scroll

  $(document).ready(function(){
      $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
          }, 900);
          return false;
        }
      });
    });

  

    // On Scroll bg color Script
    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if (scroll > 150) {
            $(".navbar").addClass("inner-navbar");
          }

          else{
              $(".navbar").removeClass("inner-navbar");
          }
      })
    })

    // owl-Carousel Scripts

    $(document).ready(function(){

      /* brand-active */
      $(".owl-one").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          575: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      });


      /// Team section script
     $('.owl-two').owlCarousel({
      items: 5,
      loop:true,
      margin:25,
      dots: true,
      autoplay:false,
      stopOnHover : true,
      autoplayTimeout:4000,
      autoplayHoverPause: false,
      pagination: true,
      responsive:{
          0:{
              items:1
          },
          575:{
              items:2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          },
      }
  })

      // ===========Screens============
        $(".gallary").owlCarousel({
            center: true,
            items: 4,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],

            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                800: {
                    items: 2,
                    nav: true
                },
            }
          });

        /* Testimonial */
      $(".owl-four").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: false,
        dots: true,
      });


     /* Blog */
    $(".owl-three").owlCarousel({
          items: 3,
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          dots: true,
          responsive: {
            0:{
            items:1,
            },
            600:{
                items:2,
            },
            1200:{
                items:3,
            }
          }
        });
  });
   
 
//Pricing Tabs
  if($('.pricing-tabs').length){
    $('.pricing-tabs .tab-btns .tab-btn').on('click', function(e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));
      
      if ($(target).hasClass('actve-tab')){
        return false;
      }else{
        $('.pricing-tabs .tab-btns .tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('.pricing-tabs .pr-content .pr-tab').removeClass('active-tab');
        $(target).addClass('active-tab');
      }
    });
  }

  // Counter Up
    jQuery(document).ready(function($) {
        $('.counter-value').counterUp({
            delay: 10,
            time: 1000
        });
    });

        /*WoW js Active
        =================*/
        // new WOW().init({
        // mobile: true,
        // });
    // });

})(jQuery);