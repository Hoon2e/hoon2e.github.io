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
    navbarMenu.classList.remove('open');
    ScrollIntoView(link);
})

//Navbar toggle when mobile mode
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', (e) => {
    console.log('click');
    navbarMenu.classList.contains('open') ? navbarMenu.classList.remove('open') : navbarMenu.classList.add('open');
})

contactMe.addEventListener('click', () => {
    ScrollIntoView('#contact');
})

function ScrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
// 스크롤 내려갈 수록 홈 컨테이너 투명
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
})


//스크롤 다운일 때 업 버튼 나타남 
const pageUpBtn = document.querySelector('#pageUpBtn');

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        pageUpBtn.classList.add('activePageupBtn');
    }
    else {
        pageUpBtn.classList.remove('activePageupBtn');
    }

})

pageUpBtn.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
})

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    // My work toggle feature
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');
    projectContainer.classList.add('anim-out');


    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }
            else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
})

