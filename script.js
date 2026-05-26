document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU MOBILE ================= */

    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuIcon.classList.toggle("bx-x");

        });

    }

    /* ================= ACTIVE LINK ================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {

        let top = window.scrollY;

        sections.forEach(sec => {

            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    'header nav a[href*="' + id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

        /* ================= HEADER STICKY ================= */

        const header = document.querySelector(".header");

        if (header) {

            if (top > 100) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }

        }

    });

    /* ================= FECHAR MENU AO CLICAR ================= */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (menuIcon && navbar) {

                navbar.classList.remove("active");

                menuIcon.classList.remove("bx-x");

            }

        });

    });

});