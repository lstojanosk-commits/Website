// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Loading screen
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Add fade-in class to elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.info-card, .feature-item, .rule-category');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
    });
});

// Server status simulation (for demo purposes)
function updateServerStatus() {
    const statusElement = document.querySelector('.status');
    const playerCountElement = document.querySelector('.player-count');
    
    if (statusElement && playerCountElement) {
        // Simulate online status
        statusElement.textContent = 'Online';
        statusElement.className = 'status online';
        
        // Simulate player count
        const playerCount = Math.floor(Math.random() * 50) + 10;
        playerCountElement.textContent = playerCount;
    }
}

// Update server status every 30 seconds
setInterval(updateServerStatus, 30000);
updateServerStatus(); // Initial call

// Add hover effects to rule items
document.addEventListener('DOMContentLoaded', () => {
    const ruleItems = document.querySelectorAll('.rule-item');
    ruleItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
});

// Add click effects to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .nav-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn, .nav-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title (if exists)
function typeWriter(element, text, speed = 100) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Add counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Initialize counter animations when elements come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target') || '0');
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => counterObserver.observe(counter));
});

// Add smooth reveal animation for rule categories
document.addEventListener('DOMContentLoaded', () => {
    const ruleCategories = document.querySelectorAll('.rule-category');
    ruleCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            category.style.transition = 'all 0.6s ease';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add interactive tooltips for rule icons
document.addEventListener('DOMContentLoaded', () => {
    const ruleIcons = document.querySelectorAll('.rule-icon');
    ruleIcons.forEach(icon => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = icon.querySelector('i').classList.contains('fa-check') ? 'Erlaubt' : 'Verboten';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1000;
        `;
        
        icon.style.position = 'relative';
        icon.appendChild(tooltip);
        
        icon.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });
        
        icon.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary-color)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
});

// Add error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('JavaScript error:', e.error);
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);



// Rules search and filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('rulesSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const ruleItems = document.querySelectorAll('.rule-item');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterRules);
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            filterRules();
        });
    });
    
    function filterRules() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        
        ruleItems.forEach(item => {
            const text = item.querySelector('.rule-text').textContent.toLowerCase();
            const isAllowed = item.classList.contains('allowed');
            const isForbidden = !isAllowed;
            
            let showByFilter = true;
            if (activeFilter === 'allowed') {
                showByFilter = isAllowed;
            } else if (activeFilter === 'forbidden') {
                showByFilter = isForbidden;
            }
            
            const showBySearch = text.includes(searchTerm);
            const shouldShow = showByFilter && showBySearch;
            
            if (shouldShow) {
                item.style.display = 'flex';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
            }
        });
        
        // Show/hide rule categories based on visible items
        const ruleCategories = document.querySelectorAll('.rule-category');
        ruleCategories.forEach(category => {
            const visibleItems = category.querySelectorAll('.rule-item[style*="display: flex"]');
            if (visibleItems.length === 0) {
                category.style.display = 'none';
            } else {
                category.style.display = 'block';
            }
        });
    }
});

// Add highlight effect for search results
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Back to top functionality
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Enhanced Animations
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-animate class to elements
    const elementsToAnimate = document.querySelectorAll('.info-card, .feature-item, .rule-category, .discord-card, .value-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-animate');
    });

    // Enhanced scroll observer
    const enhancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                const gridItems = entry.target.querySelectorAll('.scroll-animate');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(el => {
        enhancedObserver.observe(el);
    });

    // Particle system
    createParticles();
    
    // Typing effect for hero titles
    initTypingEffect();
    
    // Parallax effects
    initParallax();
    
    // Mouse trail effect
    initMouseTrail();
    
    // Enhanced button effects
    initButtonEffects();
    
    // 3D card effects
    init3DCards();
});

// Particle system
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        hero.appendChild(particle);
    }
}

// Typing effect
function initTypingEffect() {
    const titles = document.querySelectorAll('.hero-title, .section-title');
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                title.style.borderRight = 'none';
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(title);
    });
}

// Parallax effects
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, .discord-hero, .about-hero, .rules-hero');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Mouse trail effect
function initMouseTrail() {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        opacity: 0.7;
    `;
    document.body.appendChild(trail);
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
}

// Enhanced button effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 3D card effects
function init3DCards() {
    const cards = document.querySelectorAll('.info-card, .feature-item, .discord-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(start);
    }, 16);
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
});

// Remove loading animation - user doesn't like it
window.addEventListener('load', () => {
    // Page loads normally without loading screen
    document.body.style.opacity = '1';
});

// Add CSS keyframes for new animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes gentleFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
    
    @keyframes gentlePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    @keyframes gentleGlow {
        0%, 100% { box-shadow: 0 0 5px rgba(76, 175, 80, 0.3); }
        50% { box-shadow: 0 0 15px rgba(76, 175, 80, 0.6); }
    }
    
    @keyframes expandWidth {
        to { width: 100px; }
    }
    
    @keyframes textGlow {
        0%, 100% { text-shadow: 0 0 5px rgba(76, 175, 80, 0.3); }
        50% { text-shadow: 0 0 20px rgba(76, 175, 80, 0.8); }
    }
    
    @keyframes rainbowText {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Enhanced Interactive Animations
document.addEventListener('DOMContentLoaded', () => {
    // Add text glow effect on hover
    addTextGlowEffects();
    
    // Add rainbow effect to special elements
    addRainbowEffects();
    
    // Add scroll-triggered animations
    addScrollTriggeredAnimations();
    
    // Add keyboard navigation effects
    addKeyboardEffects();
    
    // Add mouse follow effects
    addMouseFollowEffects();
    
    // Add sound effects (visual feedback)
    addSoundEffects();
});

// Text glow effects
function addTextGlowEffects() {
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.animation = 'textGlow 1s ease-in-out infinite';
        });
        title.addEventListener('mouseleave', () => {
            title.style.animation = '';
        });
    });
}

// Rainbow effects for special elements
function addRainbowEffects() {
    const specialElements = document.querySelectorAll('.nav-logo, .hero-title');
    specialElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'rainbowText 2s linear infinite';
        });
        element.addEventListener('mouseleave', () => {
            element.style.animation = '';
        });
    });
}

// Scroll-triggered animations
function addScrollTriggeredAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.info-card, .feature-item, .footer-section');
    elements.forEach(el => observer.observe(el));
}

// Keyboard navigation effects
function addKeyboardEffects() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.style.animation = 'gentleGlow 0.3s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 300);
        }
    });
}

// Mouse follow effects
function addMouseFollowEffects() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, var(--primary-color), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Expand cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, var(--accent-color), transparent)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, var(--primary-color), transparent)';
        });
    });
}

// Visual sound effects
function addSoundEffects() {
    const buttons = document.querySelectorAll('.btn, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            button.style.position = 'relative';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Enhanced particle system
function createEnhancedParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Remove existing particles
    const existingParticles = hero.querySelectorAll('.particle');
    existingParticles.forEach(p => p.remove());
    
    // Create new particles with different colors and sizes
    const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#E91E63'];
    const sizes = [4, 6, 8, 4, 6];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${sizes[i % sizes.length]}px;
            height: ${sizes[i % sizes.length]}px;
            background: ${colors[i % colors.length]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        hero.appendChild(particle);
    }
}

// Initialize enhanced particles
document.addEventListener('DOMContentLoaded', () => {
    createEnhancedParticles();
    
    // Recreate particles every 30 seconds for variety
    setInterval(createEnhancedParticles, 30000);
});
