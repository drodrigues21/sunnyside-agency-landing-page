// Hamburger mane toggle
const toggleButton = document.querySelector('.container');
const navLinks = document.querySelector('.nav-links-container');

toggleButton.addEventListener('click', (e) => {
    const toggle = e.target;
    
    if(toggle.classList.contains('hamburger-menu') ||toggle.classList.contains('hamburger-menu--img')) {
       navLinks.classList.toggle('active');
    } else {
        navLinks.classList.remove('active');
    }
});