let slideShow = 0;
let isSliderRunning = true;

document.addEventListener("DOMContentLoaded", function (event) {
    const buttonPrevious = document.querySelector('.previous');
    const buttonNext = document.querySelector('.next');
    slider();
    buttonNext.addEventListener('click', function(){
        isSliderRunning = false;
        slideShow +=1;
        slider();
    });
})

function slider() {
    const slides = document.querySelectorAll('.image');
    if (slideShow >= slides.length) {
        slideShow = 0;
    } else if (slideShow < 0) {
        slideShow = slides.length;
    }
    for (const slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideShow].style.display = 'block';
    slideShow++;
    if(isSliderRunning) {
        setTimeout(function() {
            slider()
        }, 2000)
    } else {
        isSliderRunning = true;
    }
}