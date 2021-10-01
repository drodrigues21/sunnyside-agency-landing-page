// Hamburger mane toggle
const toggleButton = document.querySelector('.container');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', (e) => {
    const toggle = e.target;
    
    if(toggle.classList.contains('hamburger-menu') ||toggle.classList.contains('hamburger-menu--img')) {
        mobileNav.classList.toggle('active');
    } else {
        mobileNav.classList.remove('active');
    }
});