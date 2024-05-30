document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.unique-navbar');
    const menuToggle = document.querySelector('.unique-menu-toggle');
    const navLinks = document.querySelector('.unique-nav-links');

    // Change navbar background color on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle menu in mobile view
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Close the modal when the close button is clicked
function closeModal() {
    t
    document.getElementById("modal").style.display = "none";
}
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    var message = document.getElementById('message');
    message.textContent = 'Thank you for subscribing!';
    message.style.color = 'blue';
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.unique-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




