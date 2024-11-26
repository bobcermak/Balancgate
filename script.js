/*Header*/

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY < lastScrollY) {
            // Rolování nahoru
            header.classList.remove('header-hidden');
        } else {
            // Rolování dolů
            header.classList.add('header-hidden');
        }
        lastScrollY = window.scrollY;
    });
});

const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    if (link.classList.contains('active')) {
        link.style.color = '#000000'; // Lime-500 barva
    }
});

//Hamburger menu//

document.addEventListener('DOMContentLoaded', function () {
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarClose = document.querySelector('.navbar-close');
    const navbarBackdrop = document.querySelector('.navbar-backdrop');

    function toggleNavbarMenu() {
        navbarMenu.classList.toggle('hidden');
        navbarBackdrop.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }


    navbarBurger.addEventListener('click', function () {
        toggleNavbarMenu();
    });

    navbarClose.addEventListener('click', function () {
        toggleNavbarMenu();
    });

  
    navbarBackdrop.addEventListener('click', function () {
        toggleNavbarMenu();
    });
});

/*Main*/

//FirstSection

document.addEventListener("DOMContentLoaded", () => {
  // Animace pro stránku s animacemi
  const animations = [
    { element: document.querySelector(".animation--balancgate"), delay: 400 },
    { element: document.querySelector(".animation--gate"), delay: 600 },
    { element: document.querySelector(".button--welcome"), delay: 800 },
    { element: document.querySelector(".img--flower"), delay: 1000 },
  ];

  animations.forEach(({ element, delay }) => {
    setTimeout(() => {
      if (element) element.classList.add("animate");
    }, delay);
  });

  // Animace pro stránku s "službami"
  const servicesAnimations = [
    { element: document.querySelector(".animation-item--1"), delay: 400 },
    { element: document.querySelector(".animation-item--2"), delay: 600 },
    { element: document.querySelector(".animation-item--3"), delay: 800 },
    { element: document.querySelector(".animation-item--4"), delay: 1000 },
    { element: document.querySelector(".animation-item--5"), delay: 1200 },
    { element: document.querySelector(".animation-item--6"), delay: 1400 },
  ];

  servicesAnimations.forEach(({ element, delay }) => {
    setTimeout(() => {
      if (element) element.classList.add("animate");
    }, delay);
  });
});

//SLider

var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: false,
});

// Contact us

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    event.preventDefault(); // Prevent form submission
    alert('Prosím vyplňte všechna povinná pole.'); // Display alert message
  }
});