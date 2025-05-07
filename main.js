//responsive navbar
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.navgrp').classList.toggle('active');
});

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.slide-up');

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Check if the element is in the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('show');
        }
    });
});