let currentIndex = 0;
let slidePause = false;

function moveSlide(step) {
    if (slidePause == true) { return; }
    const slides = document.querySelectorAll('.carousel-images div img');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function autoMoveSlide() {
    moveSlide(1);
    setTimeout(() => {
        autoMoveSlide();
    }, 7000);
}

setTimeout(() => {
    autoMoveSlide();

    document.querySelectorAll('.carousel-images div img').forEach(item => {
        item.addEventListener('mouseenter', function (event) {
            slidePause = true;
        });
        item.addEventListener('mouseleave', function (event) {
            slidePause = false;
        });
    })
}, 7000);

window.onscroll = function() {
    let scrollPos = this.scrollY;
    if (scrollPos > 50) {
        document.querySelector('.scroller').style.display = 'inherit';
    } else {
        document.querySelector('.scroller').style.display = 'none';
    }
}