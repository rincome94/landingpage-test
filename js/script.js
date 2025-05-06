// JavaScript for website functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Countdown timer functionality
    const countdown = document.getElementById('countdown');
    if (countdown) {
        // Set the countdown date (6 days from now)
        const countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 6);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }
        
        // Update the countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    
    // Form validation
    const form = document.getElementById('opt-in-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you shortly with more information.');
            form.reset();
        });
    }
    
    // Horizontal timeline animation
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to activate timeline points when they come into view
    function activateTimelinePoints() {
        timelinePoints.forEach(point => {
            if (isInViewport(point)) {
                point.classList.add('active');
            }
        });
    }
    
    // Initial check and scroll event
    activateTimelinePoints();
    window.addEventListener('scroll', activateTimelinePoints);
    
    // Activate first point by default
    if (timelinePoints.length > 0) {
        timelinePoints[0].classList.add('active');
        
        // Activate remaining points with delay
        setTimeout(() => {
            if (timelinePoints.length > 1) timelinePoints[1].classList.add('active');
            setTimeout(() => {
                if (timelinePoints.length > 2) timelinePoints[2].classList.add('active');
            }, 500);
        }, 500);
    }
});
