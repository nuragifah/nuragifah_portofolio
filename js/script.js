// ===============================
// MENU TOGGLE
// ===============================

const toggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('.nav-menu');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});


// ===============================
// TUTUP MENU SAAT LINK DIKLIK
// ===============================

document.querySelectorAll('.nav-menu a').forEach(a => {

  a.addEventListener('click', () => {
    nav.classList.remove('open');
  });

});


// ===============================
// DROPDOWN ABOUT
// ===============================

const drop = document.querySelector('.dropdown');

const dropdownButton =
  document.querySelector('.dropdown-btn');

dropdownButton?.addEventListener('click', () => {
  drop.classList.toggle('open');
});


// ===============================
// ANIMASI REVEAL
// ===============================

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

      }

    });

  },

  {
    threshold: 0.12
  }

);


// ===============================
// AKTIFKAN ANIMASI
// ===============================

document.querySelectorAll('.reveal').forEach(element => {

  observer.observe(element);

});