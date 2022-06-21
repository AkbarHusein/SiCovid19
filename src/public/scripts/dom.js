const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item a');

window.addEventListener('load', () => {
  const typed = new Typed('.home-header', {
    strings: [
      `Aku^500, Kamu^500, Kita Semua </br><span class="two">Bisa Kalahkan</span></br> <span
                    class="three">Covid-19</span>`,
    ],
    typeSpeed: 60,
  });
});

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
