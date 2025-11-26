// EM SEA Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('show');
      
      // Toggle icon
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      const formMessage = document.getElementById('form-message');
      const lang = document.querySelector('input[name="lang"]').value;
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value,
        lang: lang
      };
      
      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      btnText.textContent = lang === 'zh' ? '發送中...' : 'Sending...';
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        // Show message
        formMessage.classList.remove('hidden', 'form-error', 'form-success');
        
        if (result.success) {
          formMessage.classList.add('form-success');
          formMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>' + result.message;
          contactForm.reset();
        } else {
          formMessage.classList.add('form-error');
          formMessage.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>' + result.message;
        }
      } catch (error) {
        formMessage.classList.remove('hidden', 'form-success');
        formMessage.classList.add('form-error');
        formMessage.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>' + 
          (lang === 'zh' ? '發送失敗，請稍後再試。' : 'Failed to send. Please try again later.');
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
        btnText.textContent = lang === 'zh' ? '發送消息' : 'Send Message';
      }
    });
  }
  
  // Highlight current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPath = href.split('?')[0];
      if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
        link.classList.add('active', 'text-primary-600', 'font-semibold');
        link.classList.remove('text-gray-600');
      }
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
  
  // Section reveal on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  function revealOnScroll() {
    revealElements.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  if (revealElements.length > 0) {
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
  }
  
  // Navbar background on scroll
  const navbar = document.querySelector('nav');
  
  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }
  }
  
  if (navbar) {
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('show');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    }
  });
  
  // Language preference storage
  const urlParams = new URLSearchParams(window.location.search);
  const currentLang = urlParams.get('lang');
  
  if (currentLang) {
    localStorage.setItem('emsea-lang', currentLang);
  }
  
  console.log('EM SEA website initialized');
});
