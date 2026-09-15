// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const inputs = this.querySelectorAll('input, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const subject = inputs[2].value;
        const message = inputs[3].value;

        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();

        // You can integrate with a backend service here
        // Example: Send to FormSubmit.co, EmailJS, or your own backend
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInLeft 0.8s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.project-card, .skill-category, .cert-card, .about-stats .stat-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const navLinks = document.querySelectorAll('.nav-link');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// Counter Animation for Stats
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');
    const counters = new Map();

    statCards.forEach(card => {
        const text = card.textContent;
        const number = parseInt(text);
        if (!isNaN(number)) {
            counters.set(card, { target: number, current: 0 });
        }
    });

    const animate = () => {
        let allDone = true;
        counters.forEach((value, key) => {
            if (value.current < value.target) {
                value.current += Math.ceil(value.target / 50);
                if (value.current > value.target) {
                    value.current = value.target;
                } else {
                    allDone = false;
                }
                const originalText = key.textContent;
                const suffix = originalText.includes('+') ? '+' : originalText.includes('★') ? '★' : '';
                key.textContent = value.current + suffix;
            }
        });

        if (!allDone) {
            requestAnimationFrame(animate);
        }
    };

    // Start animation when stats are visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }
}

// Call counter animation
window.addEventListener('load', () => {
    animateCounters();
});

// Smooth scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Mobile menu hamburger animation
const hamburgerSpans = document.querySelectorAll('.hamburger span');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburgerSpans[0].style.transform = this.classList.contains('active') ? 'rotate(45deg) translate(10px, 10px)' : 'none';
        hamburgerSpans[1].style.opacity = this.classList.contains('active') ? '0' : '1';
        hamburgerSpans[2].style.transform = this.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
    });
}

// Add scroll animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInLeft 0.8s ease-out forwards`;
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    timelineObserver.observe(item);
});

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
    }
});

// Add scroll indicator
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

console.log('🚀 Portfolio loaded successfully!');
console.log('👨‍💻 Hassan Raza - Mobile App Developer');
console.log('📍 Karachi, Pakistan');
