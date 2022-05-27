$(document).ready(function () {
    // navbar shrink
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    // parallax js
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();
    // skills bar
    $(window).scroll(function () {
        var hT = $("#skill-bar-wrapper").offset().top,
            hH = $("#skill-bar-wrapper").outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - 1.4 * wH)) {
            jQuery('.skillbar-container').each(function () {
                jQuery(this).find('.skills').animate({
                    width: jQuery(this).attr('data-percent')
                }, 5000) // 5 seconds
            })
        }
    })
    // filter
    let $btns = $('.img-gallery .sortBtn .filter-btn');
    $btns.click(function (e) {
        $('.img-gallery .sortBtn .filter-btn').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.img-gallery .grid').isotope
            ({
                filter: selector
            })
        return false;
    })
    $('.image-popup').magnificPopup
        ({
            type: 'image',
            gallery: { enabled: true }
        })
    // owl carousel
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    // navbar collapse 
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    })
    // scroll
    $.scrollIt({
        topOffset: -50
    })

})

function sendmail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone_number = $('#phone-number').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    var body = "Sir,<br>We got a mail from " + name + ' as:<br>" ' + message + ' "<br> Contant details:-<br>Phone Number: ' + phone_number + "<br>Email: " + email + "<br>Thank You :)";
    Email.send({
        SecureToken: "0ae5f624-d2ec-436a-b7f9-4cad2e24e509",
        To: "ynr24piyush@gmail.com",
        From: "ynr24genius@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting. Check spam if not in inbox.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')
            }
        }
    );
}

var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
    visitCount = Number(visitCount) * 1 + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;