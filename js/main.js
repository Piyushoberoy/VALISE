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

// RESEARCH CONTROLS
// var title = document.getElementById("research-title");
// var desc = document.getElementById("research-desc");
// var RBack = document.getElementById("RBack");
// let desc = [
//     "Content for research 2",
//     "Altered Content for research 3",
//     "Modified Content for research 4"
// ];

// function RDetails()
// {
//     RBack.style.display = "block";
//     title.innerHTML="You pick up the stick. It might be useful for something.";
//     desc.innerHTML="You feel something on the ground, and you think it's a stick.";
// }
// function PRDetails()
// {
//     RBack.style.display = "none";
//     title.innerHTML=title.innerHTML;
//     desc.innerHTML=desc.innerHTML;
// }

let pages = document.querySelectorAll('.details');
let currentPage = 0;

function showNext() {
    if (currentPage === pages.length - 1) {
        currentPage = 0;
    } else {
        currentPage++;
    }
    showPage(currentPage);
}

function showPrevious() {
    if (currentPage === 0) {
        currentPage = pages.length - 1;
    } else {
        currentPage--;
    }
    showPage(currentPage);
}

function showPage(index) {
    pages.forEach(function(page) {
        page.classList.remove('current');
    });
    pages[index].classList.add('current');
}

// title.addEventListener('click', function () { RDetails()});

// EMAIL CONTROLS
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
console.log(visitCount)
if (visitCount) {
    visitCount = Number(visitCount) * 1 + 1;
    localStorage.setItem("page_view", visitCount);
    console.log(visitCount)
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    console.log("ab",visitCount)
}
counterContainer.innerHTML = visitCount;