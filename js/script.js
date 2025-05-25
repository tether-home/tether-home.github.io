document.addEventListener("DOMContentLoaded", function () {
    // Function to load the navbar
    async function loadNavbar() {
        try {
            const response = await fetch('navbar.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const navbarHtml = await response.text();
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = navbarHtml;
                // Re-initialize burger menu functionality after navbar is loaded
                initializeBurgerMenu(); 
            } else {
                console.error('Navbar placeholder not found.');
            }
        } catch (error) {
            console.error('Could not load the navbar:', error);
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) { // Check if targetSection exists
            targetSection.scrollIntoView({
              behavior: "smooth"
            });
        }
        
        // Close mobile menu when clicking a link (ensure nav and burgerMenu are defined)
        const nav = document.querySelector('nav');
        const burgerMenu = document.querySelector('.burger-menu');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (burgerMenu) burgerMenu.classList.remove('active');
        }
      });
    });

    // Burger menu functionality - moved to a separate function to be callable after navbar load
    function initializeBurgerMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const nav = document.querySelector('nav');

        if (burgerMenu && nav) {
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
        } else {
            // console.error('Burger menu or nav not found for initialization.');
        }
    }
    loadNavbar();
});