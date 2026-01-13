// ===================================
// MAIN.JS - Mobile Menu, Smooth Scroll, Language Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // ========== Mobile Menu Toggle ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // ========== Smooth Scroll ==========
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Language Toggle ==========
    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlElement = document.documentElement;

    langButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');

            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update HTML attributes
            htmlElement.setAttribute('lang', lang);
            htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

            // Update all translatable elements
            document.querySelectorAll('[data-ar]').forEach(el => {
                if (lang === 'ar') {
                    el.textContent = el.getAttribute('data-ar');
                } else {
                    el.textContent = el.getAttribute('data-fr');
                }
            });

            // Save preference
            localStorage.setItem('siraj-lang', lang);

            // Redirect to appropriate page
            if (lang === 'fr' && !window.location.pathname.includes('/fr/')) {
                window.location.href = '/fr/';
            } else if (lang === 'ar' && window.location.pathname.includes('/fr/')) {
                window.location.href = '/';
            }
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('siraj-lang');
    if (savedLang) {
        const btn = document.querySelector(`[data-lang="${savedLang}"]`);
        if (btn && !btn.classList.contains('active')) {
            btn.click();
        }
    }

    // ========== FAQ Accordion ==========
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function () {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // ========== Header Scroll Effect ==========
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // ========== Download Button Handler ==========
    const downloadButtons = document.querySelectorAll('.btn-download');

    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // If download file doesn't exist, show message
            if (href === '#' || href === 'downloads/siraj-trial.exe') {
                e.preventDefault();

                const lang = htmlElement.getAttribute('lang');
                const message = lang === 'ar'
                    ? 'قريباً... يمكنك التواصل معنا عبر واتساب للحصول على النسخة التجريبية'
                    : 'Bientôt disponible... Contactez-nous via WhatsApp pour obtenir la version d\'essai';

                alert(message);

                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ========== Scroll Reveal Animation (Optional) ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.card, .step-card, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== Form Validation (if contact form exists) ==========
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const name = this.querySelector('[name="name"]').value;
            const phone = this.querySelector('[name="phone"]').value;
            const message = this.querySelector('[name="message"]').value;

            if (!name || !phone || !message) {
                const lang = htmlElement.getAttribute('lang');
                const errorMsg = lang === 'ar'
                    ? 'الرجاء ملء جميع الحقول'
                    : 'Veuillez remplir tous les champs';
                alert(errorMsg);
                return;
            }

            // Here you would typically send the form data
            const lang = htmlElement.getAttribute('lang');
            const successMsg = lang === 'ar'
                ? 'شكراً لتواصلك! سنرد عليك قريباً'
                : 'Merci pour votre message! Nous vous répondrons bientôt';
            alert(successMsg);

            this.reset();
        });
    }

    // ========== WhatsApp Click Tracking (Optional Analytics) ==========
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('WhatsApp link clicked');
            // Add analytics tracking here if needed
            // gtag('event', 'whatsapp_click', { ... });
        });
    });

});

// ========== Utility Functions ==========

// Debounce function for performance
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
