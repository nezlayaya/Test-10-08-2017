/*----------------------------------Slider--------------------------*/

var currentSlide = 0;
var sliderForRemoving = 0;
var slider = document.querySelectorAll('.item');
var listLi = document.querySelectorAll('li');
var ul = document.querySelector('ul');
var interval = null;

ul.addEventListener('click', switchCurrentSlide);
document.addEventListener('keyup', onKeyup);

playInterval();

function playInterval() {
    if (interval) clearInterval(interval);

    interval = setInterval(function () {
        clickRight();
    }, 5000)
}

function onKeyup(e) {
    if (e.key === 'ArrowLeft') {
        clickLeft();
    }
    if (e.key === 'ArrowRight') {
        clickRight();
    }
}

function switchCurrentSlide(e) {
    if (e.target.value || e.target.value === 0) {
        sliderForRemoving = currentSlide;
        currentSlide = e.target.value;
        changeSlide();
    }
}

function clickLeft() {
    if (currentSlide === 0) {
        sliderForRemoving = 0;
        currentSlide = slider.length - 1;
    } else {
        sliderForRemoving = currentSlide;
        currentSlide--;
    }
    changeSlide();
}

function clickRight() {
    if (currentSlide === slider.length - 1) {
        sliderForRemoving = slider.length - 1;
        currentSlide = 0;
    } else {
        sliderForRemoving = currentSlide;
        currentSlide++;
    }
    changeSlide();
}

function changeSlide() {
    slider[sliderForRemoving].classList.remove('show');
    slider[currentSlide].classList.add('show');

    listLi[sliderForRemoving].classList.remove('active');
    listLi[currentSlide].classList.add('active');
}

/*----------------------Slow scroll----------------------------------------*/


$(document).ready(function () {
    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".menu-icon").on("click", function () {
        $("header .menu").slideToggle();
    });
});


