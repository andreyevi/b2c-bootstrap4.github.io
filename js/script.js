/*------------------------------------------------------------------*/
/*Прокрутка наверх*/
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $('#up').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});
/*------------------------------------------------------------------*/
/*Карусель знизу*/
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});



/* Smooth scrolling to anchors */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Back button */

function goBack() {
  window.history.back();
}

/* Tooltip */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});



