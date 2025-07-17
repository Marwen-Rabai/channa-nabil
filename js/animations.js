/**
 * Advanced UI/UX Animations for Nabil Channa Portfolio
 * Includes: Text typing effects, scroll animations, micro-interactions, and loading states
 * Optimized for performance and cross-browser compatibility
 */

class PortfolioAnimations {
    constructor() {
        this.init();
        this.setupObservers();
        this.bindEvents();
    }

    init() {
        this.setupTypingEffects();
        this.setupScrollAnimations();
        this.setupMicroInteractions();
        this.setupLoadingStates();
        this.setupParallaxEffects();
    }

    /**
     * Text Typing Effects for main headings
     */
    setupTypingEffects() {
        const typeWriterElements = [
            { selector: '.user-info__name', speed: 100, delay: 500 },
            { selector: '.user-info__job', speed: 50, delay: 1500 },
            { selector: '.page__name', speed: 100, delay: 800 },
            { selector: '.page__job', speed: 50, delay: 2000 }
        ];

        typeWriterElements.forEach(element => {
            try {
                const targetElement = document.querySelector(element.selector);
                if (targetElement && targetElement.textContent) {
                    this.typeWriter(targetElement, element.speed, element.delay);
                }
            } catch (error) {
                console.warn(`Failed to initialize typing effect for ${element.selector}:`, error);
            }
        });
    }

    typeWriter(element, speed = 100, delay = 0) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--color-secondary)';
        element.style.animation = 'blink 1s infinite';
        
        setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                        element.style.animation = 'none';
                    }, 1000);
                }
            }, speed);
        }, delay);
    }

    /**
     * Scroll Animations and Intersection Observer
     */
    setupScrollAnimations() {
        try {
            const fadeInElements = document.querySelectorAll(
                '.content__page, .about__personal-info, .services__service, .testimonials__testimonial, .portfolio__work, .blog__post'
            );

            if (fadeInElements.length === 0) {
                return;
            }

            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        fadeInObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            fadeInElements.forEach(element => {
                if (element) {
                    element.classList.add('fade-element');
                    fadeInObserver.observe(element);
                }
            });

            this.setupCounterAnimations();
        } catch (error) {
            console.warn('Failed to setup scroll animations:', error);
        }
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('[data-counter]');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-counter'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.getAttribute('data-suffix') || '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.getAttribute('data-suffix') || '');
            }
        }, 16);
    }

    /**
     * Micro-interactions for interactive elements
     */
    setupMicroInteractions() {
        try {
            const menuLinks = document.querySelectorAll('.menu__link');
            menuLinks.forEach(link => {
                if (link) {
                    link.addEventListener('mouseenter', this.menuHoverIn);
                    link.addEventListener('mouseleave', this.menuHoverOut);
                }
            });

            const socialLinks = document.querySelectorAll('.social__link');
            socialLinks.forEach(link => {
                if (link) {
                    link.addEventListener('mouseenter', this.socialHoverIn);
                    link.addEventListener('mouseleave', this.socialHoverOut);
                }
            });

            const buttons = document.querySelectorAll('.user-info__btn, .btn, button');
            buttons.forEach(button => {
                if (button) {
                    button.addEventListener('mouseenter', this.buttonHoverIn);
                    button.addEventListener('mouseleave', this.buttonHoverOut);
                    button.addEventListener('click', this.buttonClick);
                }
            });

            const portfolioItems = document.querySelectorAll('.portfolio__work, .work__item');
            portfolioItems.forEach(item => {
                if (item) {
                    item.addEventListener('mouseenter', this.portfolioHoverIn);
                    item.addEventListener('mouseleave', this.portfolioHoverOut);
                }
            });
        } catch (error) {
            console.warn('Failed to setup micro-interactions:', error);
        }
    }

    menuHoverIn(e) {
        const icon = e.currentTarget.querySelector('.menu__icon');
        const overlay = e.currentTarget.querySelector('.menu__overlay');
        
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }
        
        if (overlay) {
            overlay.style.transform = 'translateX(5px)';
            overlay.style.transition = 'all 0.3s ease';
        }
        
        e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-secondary), #02a3cc)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(4, 180, 224, 0.3)';
    }

    menuHoverOut(e) {
        const icon = e.currentTarget.querySelector('.menu__icon');
        const overlay = e.currentTarget.querySelector('.menu__overlay');
        
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        if (overlay) {
            overlay.style.transform = 'translateX(0)';
        }
        
        e.currentTarget.style.background = '';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
    }

    socialHoverIn(e) {
        const icon = e.currentTarget.querySelector('.social__icon');
        if (icon) {
            icon.style.transform = 'scale(1.3) rotate(10deg)';
            icon.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }
        
        e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-secondary), #ff6b6b)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(4, 180, 224, 0.4)';
    }

    socialHoverOut(e) {
        const icon = e.currentTarget.querySelector('.social__icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        e.currentTarget.style.background = '';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
    }

    buttonHoverIn(e) {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(4, 180, 224, 0.4)';
        e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-secondary), #02a3cc)';
        e.currentTarget.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    buttonHoverOut(e) {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.background = '';
    }

    buttonClick(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    portfolioHoverIn(e) {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        const image = e.currentTarget.querySelector('img');
        if (image) {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'all 0.4s ease';
        }
    }

    portfolioHoverOut(e) {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '';
        
        const image = e.currentTarget.querySelector('img');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    }

    /**
     * Loading States for images and content
     */
    setupLoadingStates() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            if (!img.complete) {
                img.style.opacity = '0';
                img.style.filter = 'blur(5px)';
                
                img.addEventListener('load', () => {
                    img.style.transition = 'all 0.5s ease';
                    img.style.opacity = '1';
                    img.style.filter = 'blur(0)';
                });
            }
        });

        this.showContentWithDelay();
    }

    showContentWithDelay() {
        const contentElements = document.querySelectorAll('.layout__content > *');
        contentElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100 + 300);
        });
    }

    /**
     * Parallax Effects
     */
    setupParallaxEffects() {
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            const backgroundElements = document.querySelectorAll('body');
            backgroundElements.forEach(element => {
                element.style.backgroundPosition = `center ${rate}px`;
            });
            
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick);
    }

    /**
     * Observers setup
     */
    setupObservers() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Event bindings
     */
    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        const navigationLinks = document.querySelectorAll('.menu__link[href$=".html"]');
        navigationLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    
                    document.body.style.opacity = '0.5';
                    setTimeout(() => {
                        window.location.href = href;
                    }, 200);
                }
            });
        });
    }
}

// Mobile menu functionality is handled in menu.js to avoid conflicts

// Utility functions for performance
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioAnimations();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animationPlayState !== undefined) {
                el.style.animationPlayState = 'paused';
            }
        });
    } else {
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animationPlayState !== undefined) {
                el.style.animationPlayState = 'running';
            }
        });
    }
});