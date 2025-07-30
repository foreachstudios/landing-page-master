// Axees Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initFormHandling();
    initScrollEffects();
    initAnimations();
    initRotatingText();
    initCounters();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }
}

// Smooth Scrolling Functions
function scrollToWaitlist() {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus on email input for better UX
        setTimeout(() => {
            const emailInput = document.getElementById('email');
            if (emailInput) {
                emailInput.focus();
            }
        }, 1000);
    }
}

// Form Handling
function initFormHandling() {
    const waitlistForm = document.getElementById('waitlistForm');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(waitlistForm);
            const email = formData.get('email');
            const userType = formData.get('userType');
            
            // Basic validation
            if (!email) {
                showNotification('Please enter your email address', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            submitToWaitlist(email);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitToWaitlist(email) {
    const submitButton = document.querySelector('.waitlist-form .btn');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Joining...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('🎉 Welcome to the waitlist! We\'ll notify you when we launch.', 'success');
        
        // Clear form
        document.getElementById('waitlistForm').reset();
        
        // Store in localStorage for demo purposes
        const waitlistData = {
            email: email,
            userType: userType,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('axees_waitlist', JSON.stringify(waitlistData));
        
    }, 2000);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 5rem;
        right: 1rem;
        z-index: 10000;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        animation: slideIn 0.3s ease forwards;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                to { transform: translateX(0); }
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            .notification-close:hover {
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll Effects
function initScrollEffects() {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Hide/show navigation on scroll
        if (nav) {
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        const heroVisual = document.querySelector('.hero-visual');
        if (hero && heroVisual && currentScrollY < window.innerHeight) {
            const scrollPercent = currentScrollY / window.innerHeight;
            heroVisual.style.transform = `translateY(${scrollPercent * 50}px)`;
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .stat, .about-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize Animations
function initAnimations() {
    // Add CSS for animations
    if (!document.querySelector('#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            .feature-card,
            .stat,
            .about-content {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .feature-card.animate-in,
            .stat.animate-in,
            .about-content.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .nav {
                transition: transform 0.3s ease;
            }
            
            .hero-visual {
                transition: transform 0.1s ease-out;
            }
            
            /* Stagger animation for feature cards */
            .feature-card:nth-child(2).animate-in {
                transition-delay: 0.1s;
            }
            
            .feature-card:nth-child(3).animate-in {
                transition-delay: 0.2s;
            }
            
            /* Stats stagger animation */
            .stat:nth-child(2).animate-in {
                transition-delay: 0.1s;
            }
            
            .stat:nth-child(3).animate-in {
                transition-delay: 0.2s;
            }
        `;
        document.head.appendChild(style);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimizations
window.addEventListener('load', function() {
    // Remove loading states if any
    document.body.classList.add('loaded');
    
    // Preload critical images
    const criticalImages = [
        // Add any critical image URLs here
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Handle reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}

// Error handling for older browsers
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Graceful degradation - ensure basic functionality works
});

// Rotating Text Animation
function initRotatingText() {
    const textItems = document.querySelectorAll('.text-item');
    if (textItems.length === 0) return;
    
    let currentIndex = 0;
    
    function rotateText() {
        // Remove active class from all items
        textItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to current item
        textItems[currentIndex].classList.add('active');
        
        // Move to next item
        currentIndex = (currentIndex + 1) % textItems.length;
    }
    
    // Start rotation
    rotateText();
    setInterval(rotateText, 3000); // Change every 3 seconds
}

// Copy Email Function
function copyEmail() {
    const email = 'axees@axees.io';
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Email copied to clipboard!', 'success');
    });
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                
                // Format the number based on target value
                if (target >= 1000) {
                    const kValue = Math.floor(current / 1000);
                    const remainder = Math.floor((current % 1000) / 100);
                    if (remainder > 0 && current < target) {
                        counter.textContent = kValue + '.' + remainder + 'K';
                    } else {
                        counter.textContent = kValue + 'K';
                    }
                } else {
                    counter.textContent = Math.floor(current);
                }
                
                setTimeout(updateCounter, stepDuration);
            } else {
                // Final formatting
                if (target >= 1000) {
                    const kValue = Math.floor(target / 1000);
                    const remainder = Math.floor((target % 1000) / 100);
                    if (remainder > 0) {
                        counter.textContent = kValue + '.' + remainder + 'K';
                    } else {
                        counter.textContent = kValue + 'K';
                    }
                } else {
                    counter.textContent = target;
                }
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer to trigger animation when visible
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                if (!counter.dataset.animated) {
                    counter.dataset.animated = 'true';
                    // Add slight delay for staggered effect
                    const delay = Array.from(counters).indexOf(counter) * 200;
                    setTimeout(() => animateCounter(counter), delay);
                }
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Export functions for potential external use
window.AxeesLanding = {
    scrollToWaitlist,
    showNotification,
    copyEmail
};