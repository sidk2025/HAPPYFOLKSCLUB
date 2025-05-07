let currentSlide = 0;
const slides = document.querySelectorAll('.summit-slide img');
const totalSlides = 5;
// Initially display the first slide
slides[currentSlide].classList.add('active');

function showNextSlide() {
    // Hide current slide
    slides[currentSlide].classList.remove('active');

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show the new slide
    slides[currentSlide].classList.add('active');
}

// Start the slideshow
setInterval(showNextSlide, 4000);

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about');
    const abtTxt = document.querySelector('.abt-txt');
    const sideImg = document.querySelector('.side-img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                abtTxt.classList.add('slide-in-left');
                sideImg.classList.add('slide-in-right');
                observer.unobserve(aboutSection); // Unobserve after animation starts to prevent re-triggering
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);
});
