/*Theme    : Quick
 * Author  : Design_mylife
 * Version : V1.0
 * 
 */

/* ==============================================
 Sticky Navbar
 =============================================== */

$(document).ready(function () {
    $(".navbar").sticky({topSpacing: 0});
});


/* ==============================================
 main flex slider
 =============================================== */
$(window).load(function () {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav: false
    });
});


/* ==============================================
 Auto Close Responsive Navbar on Click
 =============================================== */

function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();

$(window).resize(close_toggle);


/***================================================== */
$('.chart').each(function () {
    var $this = $(this);
    var color = $(this).data('scale-color');

    setTimeout(function () {
        $this.filter(':visible').waypoint(function (direction) {
            $(this).easyPieChart({
                barColor: color,
                trackColor: '#fff',
                onStep: function (from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }, {offset: '100%'});
    }, 500);

});

//owl carousel for testimonials
$(document).ready(function () {

    $("#testi-carousel,#work-slide").owlCarousel({
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        autoPlay: true
    });

});

/*=========================*/
/*========portfolio mix====*/
/*==========================*/
$('#grid').mixitup();


/*=========================*/
/*========on hover dropdown navigation====*/
/*==========================*/


/************parallax*********************/
$(function () {
    $.stellar({
        horizontalScrolling: false
    });
});


/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});

/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
    {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false        // trigger animations on mobile devices (true is default)
    }
);
wow.init();


//MAGNIFIC POPUP
$('.show-image').magnificPopup({type: 'image'});


//smooth scroll
$(function () {
    $('.scrollto a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});


// Backstretch - Slider on Background


$(".fullscreen").backstretch([
    "img/showcase-5.jpg",
    "img/showcase-2.jpg",
    "img/showcase-3.jpg"
], {duration: 5000, fade: 1000});


//back to top

$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});

$(document).ready(function () {
    var firebaseMessage = new Firebase("https://emailresponsetimestorage.firebaseio.com/currentMessageThreadCount");
    var firebaseClients = new Firebase("https://emailresponsetimestorage.firebaseio.com/currentClientNum");
    var firebaseHours = new Firebase("https://emailresponsetimestorage.firebaseio.com/currentHoursCount");
    var firebaseProjects = new Firebase("https://emailresponsetimestorage.firebaseio.com/currentProjectNum");
    firebaseMessage.once("value", function (snapshot) {
        var data = snapshot.val();
        if (data == 1) {
            $("#this-guy").text(data + " email");
        }
        else {
            $("#this-guy").text(data + " emails");
        }

    });
    firebaseMessage.on('value', function (snapshot) {
        var data = snapshot.val();
        if (data == 1) {
            $("#this-guy").text(data + " email");
        }
        else {
            $("#this-guy").text(data + " emails");
        }
    });
    firebaseClients.once("value", function (snapshot) {
        var data = snapshot.val();
        $("#clients").text(data);

    });
    firebaseClients.on('value', function (snapshot) {
        $("#clients").text(data);
    });
    firebaseHours.once("value", function (snapshot) {
        var data = snapshot.val();
        $("#hours").text(data);

    });
    firebaseHours.on('value', function (snapshot) {
        var data = snapshot.val();
        $("#hours").text(data);
    });
    firebaseProjects.once("value", function (snapshot) {
        var data = snapshot.val();
        $("#projects").text(data);
    });
    firebaseProjects.on('value', function (snapshot) {
        var data = snapshot.val();
        $("#projects").text(data);
    });
});
$(document).ready(function () {
    var date = new Date();
    $("#currentYear").text(date.getFullYear());
});