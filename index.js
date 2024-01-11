document.addEventListener('DOMContentLoaded', function () {
    const scroll = new SmoothScroll('a[href*="index.html"]', {
        speed: 800,
        speedAsDuration: true
    });
});