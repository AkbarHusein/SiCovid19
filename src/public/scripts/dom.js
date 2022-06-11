const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item a');

window.onscroll = () => {
  let currentScrollPosition = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 70) {
      currentScrollPosition = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.classList.contains(currentScrollPosition)) {
      link.classList.add('active');
    }
  });
};
