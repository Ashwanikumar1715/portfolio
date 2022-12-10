$(document).ready(function () {

    $(window).scroll(function () {
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });



    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" C and C++ Programmer", " Frontend Developer", " Competitive Coder", " Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var typed = new Typed(".typing-2", {
        strings: ["b.tech", "2nd year", "com.sci.eng(cse)", "mmmut", "gorakhpur"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

