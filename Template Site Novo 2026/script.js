let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');

/* ================= MENU MOBILE ================= */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ================= ACTIVE LINK ================= */
window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};