(function () {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const navbarCollapse = document.getElementById('mainNavbar');
  const mobileMenu = navbarCollapse ? new bootstrap.Collapse(navbarCollapse, { toggle: false }) : null;

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992 && mobileMenu) {
        mobileMenu.hide();
      }
    });
  });
})();
