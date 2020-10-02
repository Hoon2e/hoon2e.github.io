'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu');
const contactMe = document.querySelector('.home__contact');
// Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-dark');
    }
    else {
        navbar.classList.remove('navbar-dark')
    }
})

//Handle scrolling when tapping on the navbar menu
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link
    if (link == null)
        return;

    ScrollIntoView(link);
})

contactMe.addEventListener('click', () => {
    ScrollIntoView('#contact');
})

function ScrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}