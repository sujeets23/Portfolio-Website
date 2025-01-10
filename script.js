$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //logo slide to top
    $('.logo').click(function(){
        $('html').animate({scrollTop: 0});
    }
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Graphic Designer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Graphic Designer", "UI/UX Designer"],
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
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Next and Previous buttons functionality
    let currentIndex = 0;
    const carouselItems = $('.carousel .item'); // assuming each carousel item has the class 'item'
    const totalItems = carouselItems.length;

    function updateCarouselPosition() {
        const itemWidth = carouselItems.outerWidth(true); // width including margin
        $('.carousel').animate({
            scrollLeft: currentIndex * itemWidth
        }, 300);
    }

    $('.prev-btn').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    $('.next-btn').click(function() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarouselPosition();
        }
    });

    // WhatsApp send message button functionality
    $('#sendMessageBtn').click(function() {
        // Predefined message
        const message = 'Hi Sujeet, I am interested in discussing a project with you.';
        
        // WhatsApp URL format: https://wa.me/<phone_number>?text=<message>
        const whatsappURL = `https://wa.me/7483104946?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');
    });
});
