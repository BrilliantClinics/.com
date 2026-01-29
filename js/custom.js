(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    document.getElementById('lang-switch').classList.add('animate-heartbeat');

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })

    document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.querySelector('.video-carousel');
        const leftBtn = document.querySelector('.left-btn');
        const rightBtn = document.querySelector('.right-btn');
        const gap = 30; // same as CSS gap

        const getScrollAmount = () => {
            return carousel.querySelector('.video-item').offsetWidth + gap;
        };

        leftBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        // Drag to scroll
        let isDown = false, startX, scrollLeft;
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.classList.add('dragging');
        });
        carousel.addEventListener('mouseleave', () => { isDown = false; carousel.classList.remove('dragging'); });
        carousel.addEventListener('mouseup', () => { isDown = false; carousel.classList.remove('dragging'); });
        carousel.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });

    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const videoCarousel = document.querySelector('.video-carousel');

    leftBtn.addEventListener('click', () => {
        videoCarousel.scrollBy({ left: -350, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        videoCarousel.scrollBy({ left: 350, behavior: 'smooth' });
    });

    // Optional: drag scroll with mouse
    let isDown = false;
    let startX;
    let scrollLeft;

    videoCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        videoCarousel.classList.add('active');
        startX = e.pageX - videoCarousel.offsetLeft;
        scrollLeft = videoCarousel.scrollLeft;
    });
    videoCarousel.addEventListener('mouseleave', () => isDown = false);
    videoCarousel.addEventListener('mouseup', () => isDown = false);
    videoCarousel.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - videoCarousel.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        videoCarousel.scrollLeft = scrollLeft - walk;
    });

    document.addEventListener('DOMContentLoaded', () => {
        const leftBtn = document.querySelector('.left-btn');
        const rightBtn = document.querySelector('.right-btn');
        const carousel = document.querySelector('.video-carousel');

        const item = document.querySelector('.video-item');
        const scrollAmount = item.offsetWidth + parseInt(getComputedStyle(item).marginRight);

        leftBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });

    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
