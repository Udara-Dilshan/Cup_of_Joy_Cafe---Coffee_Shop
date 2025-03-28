document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector("#navbar");
    
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll("#navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
        });
    });
    
    // Header scroll effect
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    
    // Back to top button
    const backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });
    
    // Animate stats counter
    const statNumbers = document.querySelectorAll(".stat-number");
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-count"));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(counter);
                    stat.textContent = target;
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
    
    // Initialize ScrollReveal
    ScrollReveal().reveal('.animate__animated', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        reset: true
    });
    
    // Animate stats when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector(".about-us"));
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    });
});