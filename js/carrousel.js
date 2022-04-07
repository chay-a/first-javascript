let slideShow = 0;
let isSliderRunning = true;

document.addEventListener("DOMContentLoaded", function (event) {
    const slidershow = document.querySelector('.slidershow')
    const buttonPrevious = document.querySelector('.previous');
    const buttonNext = document.querySelector('.next');
    slider();

    slidershow.addEventListener('mouseover', function () {
        slideAnimation(false);
    });

    slidershow.addEventListener('mouseout', function () {
        slideAnimation(true);
    });

    slidershow.addEventListener('mouseleave', function () {
        slider();
    })

    buttonNext.addEventListener('click', function () {
        navigation(1);
    });

    buttonPrevious.addEventListener('click', function () {
        navigation(-1);
    })
})

function slider() {
    const slides = document.querySelectorAll('.image');
    if (slideShow >= slides.length) {
        slideShow = 0;
    }
    if (slideShow < 0) {
        slideShow = slides.length - 1;
    }
    for (const slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideShow].style.display = 'block';
    if (isSliderRunning) {
        slideShow++;
        setTimeout(function () {
            slider()
        }, 2000)
    }
}

function navigation(slideShowValue) {
    slideShow += slideShowValue;
    slider();
}

function slideAnimation(valueSliderRunning) {
    isSliderRunning = valueSliderRunning;
    const slider = document.querySelector('.slider');
    slider.classList.toggle('animation');
}