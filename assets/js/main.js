const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLinks = document.querySelectorAll('.nav__link')

document.addEventListener('DOMContentLoaded', () => {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
  navLinks.forEach(link => link.addEventListener('click', () => navMenu.classList.remove('show-menu')))
  window.addEventListener('scroll', scrolling)
})

const scrolling = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

const swiper = new Swiper('.travel__swiper', {
  loop: true,
  spaceBetween: '32',
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    600: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    }
  }
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  delay: 300,
  reset: true
})

sr.reveal('.home__data, .travel__swiper')
sr.reveal('.home__img', { origin: 'bottom' })
sr.reveal('.home__ovni', { delay: 800 })