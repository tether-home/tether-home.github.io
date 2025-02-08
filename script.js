document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
        
        // Close mobile menu when clicking a link
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
      });
    });

    // Burger menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burgerMenu.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });

    // Handle starter pack order button
    const orderButton = document.querySelector('.buy-btn');
    orderButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = 'sam.tetherhome@gmail.com';
        const subject = 'Tether Starter Pack Order';
        const body = `Hi,

I'd like to order a Tether Starter Pack.

Best regards,

[Insert Name]`;

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
  });
  