document.addEventListener("DOMContentLoaded", function (event) {
    const carrouselDiv = document.querySelector('.carrousel');
    const slides = document.querySelectorAll('.image');
    let slideShow = 0;
    slider(slideShow, slides)
})

function slider(slideShow, slides) {
    for (const slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideShow].style.display = 'block';
    slideShow++;
    if (slideShow >= slides.length) {
        slideShow = 0;
    }
    setTimeout(function() {
        slider(slideShow, slides)
    }, 2000)
}