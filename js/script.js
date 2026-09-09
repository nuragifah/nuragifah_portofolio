/* ==================================================
   PORTFOLIO NUR AGIFAH
   JAVASCRIPT UTAMA
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       1. DROPDOWN NAVBAR
    ================================================== */

    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");

    if (dropdown && dropdownBtn) {

        dropdownBtn.setAttribute("aria-expanded", "false");

        dropdownBtn.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = dropdown.classList.toggle("open");

            dropdownBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        // Menutup dropdown ketika klik di luar
        document.addEventListener("click", function (event) {

            if (!dropdown.contains(event.target)) {

                dropdown.classList.remove("open");

                dropdownBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        // Menutup dropdown setelah memilih menu
        const dropdownLinks =
            dropdown.querySelectorAll(".dropdown-menu a");

        dropdownLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                dropdown.classList.remove("open");

                dropdownBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* ==================================================
       2. SKILL BAR
    ================================================== */

    const skillBars =
        document.querySelectorAll(".bar span");

    if (skillBars.length > 0) {

        skillBars.forEach(function (bar) {

            const targetWidth = bar.style.width;

            if (!targetWidth) {
                return;
            }

            // Simpan nilai asli
            bar.dataset.width = targetWidth;

            // Mulai dari 0
            bar.style.width = "0";

            // Animasi menggunakan transition
            bar.style.transition =
                "width 1.5s ease";

        });


        const skillObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            const bar = entry.target;

                            bar.style.width =
                                bar.dataset.width;

                            observer.unobserve(bar);

                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );


        skillBars.forEach(function (bar) {

            skillObserver.observe(bar);

        });

    }


    /* ==================================================
       3. FORM CONTACT
    ================================================== */

    const contactForm =
        document.querySelector(".contact-form form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                const nama =
                    document.querySelector("#nama");

                const email =
                    document.querySelector("#email");

                const pesan =
                    document.querySelector("#pesan");


                if (!nama || !email || !pesan) {
                    return;
                }


                const namaValue =
                    nama.value.trim();

                const emailValue =
                    email.value.trim();

                const pesanValue =
                    pesan.value.trim();


                /* Validasi nama */

                if (namaValue.length < 3) {

                    event.preventDefault();

                    alert(
                        "Nama harus diisi minimal 3 karakter."
                    );

                    nama.focus();

                    return;
                }


                /* Validasi email */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(emailValue)) {

                    event.preventDefault();

                    alert(
                        "Masukkan alamat email yang valid."
                    );

                    email.focus();

                    return;
                }


                /* Validasi pesan */

                if (pesanValue.length < 5) {

                    event.preventDefault();

                    alert(
                        "Pesan harus diisi minimal 5 karakter."
                    );

                    pesan.focus();

                    return;
                }


                // Jika valid, biarkan mailto berjalan
                const button =
                    contactForm.querySelector(
                        "button[type='submit']"
                    );


                if (button) {

                    button.textContent =
                        "Membuka Email...";

                    button.disabled = true;

                }

            }
        );

    }


    /* ==================================================
       4. INPUT CONTACT
    ================================================== */

    const inputs =
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        );


    inputs.forEach(function (input) {

        input.addEventListener("focus", function () {

            input.classList.add("input-focus");

        });


        input.addEventListener("blur", function () {

            input.classList.remove("input-focus");

        });

    });


    /* ==================================================
       5. PROJECT CARD
    ================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add("project-active");

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove("project-active");

            }
        );

    });


    /* ==================================================
       6. TAHUN FOOTER OTOMATIS
    ================================================== */

    const yearElement =
        document.querySelector("[data-year]");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ==================================================
       7. PESAN CONSOLE
    ================================================== */

    console.log(
        "✨ Portfolio Nur Agifah berhasil dimuat!"
    );

});