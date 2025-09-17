// Global variables
let currentSlide = 0;
let currentAmount = 500;
let currentPaymentMethod = 'upi';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeDonationPage();
    initializeSmoothScrolling();
});

// Mobile Navigation
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburgerBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav) {
        mobileNav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    }
}

// Carousel Functions
function initializeCarousel() {
    const carousel = document.getElementById('carouselSlides');
    if (!carousel) return;

    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000);
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.remove('active');
    }
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
    
    // Transform carousel
    const carousel = document.getElementById('carouselSlides');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function previousSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.remove('active');
    }
    
    // Move to previous slide
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
    
    // Transform carousel
    const carousel = document.getElementById('carouselSlides');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0 || slideIndex >= slides.length) return;
    
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.remove('active');
    }
    
    // Set new slide
    currentSlide = slideIndex;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
    
    // Transform carousel
    const carousel = document.getElementById('carouselSlides');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

// Donation Page Functions
function initializeDonationPage() {
    // Only run on donation page
    if (!document.querySelector('.donation-section')) return;
    
    updateSelectedImpact();
}

function selectAmount(amount) {
    // Remove selected class from all amount buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    const selectedBtn = document.querySelector(`[data-amount="${amount}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    // Clear custom amount input
    const customInput = document.getElementById('customAmount');
    if (customInput) {
        customInput.value = '';
    }
    
    // Update current amount
    currentAmount = amount;
    updateSelectedImpact();
    updateQRAmount();
}

function updateDonationAmount(amount) {
    if (amount && amount >= 100) {
        // Remove selected class from all amount buttons
        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        currentAmount = parseInt(amount);
        updateSelectedImpact();
        updateQRAmount();
    }
}

function updateSelectedImpact() {
    const donationAmountElement = document.getElementById('donationAmount');
    const impactDescriptionElement = document.getElementById('impactDescription');
    
    if (!donationAmountElement || !impactDescriptionElement) return;
    
    donationAmountElement.textContent = `₹${currentAmount.toLocaleString()}`;
    
    // Calculate impact based on amount
    let impact = '';
    if (currentAmount >= 5000) {
        const people = Math.floor(currentAmount / 500);
        impact = `medical care for ${people} people`;
    } else if (currentAmount >= 3000) {
        impact = 'complete relief package for a family';
    } else if (currentAmount >= 1500) {
        const weeks = Math.floor(currentAmount / 1500);
        impact = `emergency shelter for ${weeks === 1 ? 'a week' : weeks + ' weeks'}`;
    } else if (currentAmount >= 500) {
        const days = Math.floor(currentAmount / 167); // Approximately ₹167 per day
        impact = `${days} days food for a family`;
    } else {
        const meals = Math.floor(currentAmount / 50);
        impact = `${meals} meals for flood victims`;
    }
    
    impactDescriptionElement.textContent = impact;
}

function updateQRAmount() {
    const qrAmountElement = document.getElementById('qrAmount');
    if (qrAmountElement) {
        qrAmountElement.textContent = `Amount: ₹${currentAmount.toLocaleString()}`;
    }
}

function showPaymentMethod(method) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.payment-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.payment-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to selected tab and content
    const selectedTab = document.querySelector(`[data-method="${method}"]`);
    const selectedContent = document.getElementById(`${method}-payment`);
    
    if (selectedTab && selectedContent) {
        selectedTab.classList.add('active');
        selectedContent.classList.add('active');
    }
    
    currentPaymentMethod = method;
}

function payWithUPI(provider) {
    const upiId = 'punarnirman@upi';
    const amount = currentAmount;
    const message = `Donation to PunarNirman Trust - Punjab Flood Relief`;
    
    let upiUrl = '';
    
    switch (provider) {
        case 'gpay':
            upiUrl = `gpay://upi/pay?pa=${upiId}&pn=PunarNirman Trust&am=${amount}&cu=INR&tn=${encodeURIComponent(message)}`;
            break;
        case 'phonepe':
            upiUrl = `phonepe://pay?pa=${upiId}&pn=PunarNirman Trust&am=${amount}&cu=INR&tn=${encodeURIComponent(message)}`;
            break;
        case 'paytm':
            upiUrl = `paytm://upi/pay?pa=${upiId}&pn=PunarNirman Trust&am=${amount}&cu=INR&tn=${encodeURIComponent(message)}`;
            break;
        default:
            showToast('Please select a valid UPI app', 'error');
            return;
    }
    
    // Try to open UPI app
    try {
        window.open(upiUrl, '_blank');
        showToast(`Opening ${provider.charAt(0).toUpperCase() + provider.slice(1)} for payment...`, 'success');
    } catch (error) {
        showToast(`Please install ${provider.charAt(0).toUpperCase() + provider.slice(1)} app to continue`, 'error');
    }
}

function copyUPI() {
    const upiId = 'punarnirman@upi';
    copyText(upiId);
}

function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyText(text);
        });
    } else {
        fallbackCopyText(text);
    }
}

function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Copied to clipboard!', 'success');
    } catch (err) {
        showToast('Failed to copy. Please copy manually.', 'error');
    }
    
    document.body.removeChild(textArea);
}

function processDonation() {
    // Simulate donation processing
    const processingToast = showToast('Processing your donation...', 'info', 3000);
    
    setTimeout(() => {
        const methods = {
            'upi': 'UPI',
            'bank': 'Bank Transfer',
            'qr': 'QR Code'
        };
        
        showToast(`Thank you for your ₹${currentAmount.toLocaleString()} donation via ${methods[currentPaymentMethod]}! You will receive a confirmation shortly.`, 'success', 5000);
        
        // Simulate adding to recent donations
        addToRecentDonations();
    }, 2000);
}

function addToRecentDonations() {
    const donationsList = document.querySelector('.donations-list');
    if (!donationsList) return;
    
    const newDonation = document.createElement('div');
    newDonation.className = 'donation-item';
    newDonation.innerHTML = `
        <div class="donor-avatar">Y</div>
        <div class="donation-info">
            <div class="donor-name">You</div>
            <div class="donation-amount">₹${currentAmount.toLocaleString()}</div>
        </div>
        <div class="donation-time">Just now</div>
    `;
    
    // Add to top of list
    donationsList.insertBefore(newDonation, donationsList.firstChild);
    
    // Highlight the new donation
    newDonation.style.background = 'rgba(59, 130, 246, 0.1)';
    setTimeout(() => {
        newDonation.style.background = '';
    }, 3000);
}

// Toast Notification System
function showToast(message, type = 'info', duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Toast styles
    const baseStyles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        color: 'white',
        fontWeight: '600',
        fontSize: '0.875rem',
        zIndex: '9999',
        maxWidth: '400px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out'
    };
    
    const typeStyles = {
        success: { backgroundColor: '#10b981' },
        error: { backgroundColor: '#ef4444' },
        info: { backgroundColor: '#3b82f6' },
        warning: { backgroundColor: '#f59e0b' }
    };
    
    Object.assign(toast.style, baseStyles, typeStyles[type]);
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
    
    return toast;
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.service-card, .story-card, .team-member, .impact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// Handle form submissions and external link clicks
document.addEventListener('click', function(e) {
    // Handle external links
    if (e.target.tagName === 'A' && e.target.href && !e.target.href.includes(window.location.hostname)) {
        e.preventDefault();
        window.open(e.target.href, '_blank', 'noopener,noreferrer');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Handle page visibility for carousel auto-play
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause carousel when page is not visible
        clearInterval(window.carouselInterval);
    } else {
        // Resume carousel when page becomes visible
        window.carouselInterval = setInterval(nextSlide, 5000);
    }
});

// Keyboard navigation for carousel
document.addEventListener('keydown', function(e) {
    if (document.querySelector('.carousel-section')) {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }
});

// Touch/swipe support for mobile carousel
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.carousel-slides')) {
        touchStartX = e.changedTouches[0].screenX;
    }
});

document.addEventListener('touchend', function(e) {
    if (e.target.closest('.carousel-slides')) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swiped left, go to next
        } else {
            previousSlide(); // Swiped right, go to previous
        }
    }
}

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);