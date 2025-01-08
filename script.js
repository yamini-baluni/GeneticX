const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.style.backgroundColor = "#002648";
  }
  else if (window.scrollY < 300) {
    navbar.style.backgroundColor = "transparent";
  }
});