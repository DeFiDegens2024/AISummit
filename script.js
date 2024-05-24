const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});
function openModal(imageUrl) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = imageUrl;
}

// Close the modal when the close button is clicked
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

