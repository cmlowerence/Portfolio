/*====================== MENU SHOW HIDDEN Y ======================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

//  MENU SHOW
// Validate weather constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
    })
}

// MENU HIDDEN
// Validate weather constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show__menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ============================ ACCORDION SKILLS ============================

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



//============================= QUALIFICATION TABS ==========================
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tabs.classList.add('qualification__active');
    })
})

//=================================== SERVICE MODALS =============================
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = (modalClick) => {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

// Portfolio Swiper
const swiperPortfolio = new Swiper('.portfolio__container', {

    // Optional parameters
    cssMode: true,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


const swiperTestimonial = new Swiper('.testimonial__container', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    grabCursor: true,
    spaceBetween: 48,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        690: {
            slidesPerView: 2,
        }
    }
});

//   ===================== SCROLL SECTIONS ACTIVE LINKS=========================
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        const menuItem = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
        if (menuItem) { // Check if menuItem is not null
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                menuItem.classList.add('active-link');
            } else {
                menuItem.classList.remove('active-link');
            }
        }
    })
}
window.addEventListener('scroll', scrollActive);

// ===================== CHANGE BACKGROUND HEADER ==========================

const scrollHeader = () => {
    const nav = document.getElementById('header');

    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80 && document.body.classList.contains('dark-theme')) {
        nav.classList.add('scroll-header-dark');
    }else if (this.scrollY>=80 && !document.body.classList.contains('dark-theme')){
        nav.classList.add('scroll-header-light');
    }
    else {
        nav.classList.remove('scroll-header-light');
        nav.classList.remove('scroll-header-dark');
    }
}
window.addEventListener('scroll', scrollHeader);

// ========================== SHOW SCROLL TOP =========================
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When scroll is higher than 560 viewport height, add the show-scroll class to the desired tag
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// ====================== DARK LIGHT THEME =======================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Cached themes
const selectedTheme = localStorage.getItem('selected-theme');
// console.log(selectedTheme);
const selectedIcon = localStorage.getItem('selected-icon');
// console.log(selectedIcon);

// Obtaining current theme by validating weather dark-theme is active or not
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validating weather user have selected theme previously 
if (selectedTheme) {
    // if the validation is fulfilled, we add or remove darkTheme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activating or Deactivating theme manually via button
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    // themeButton.classList.toggle(iconTheme);
    if (document.body.classList.contains(darkTheme)){
        themeButton.classList.remove('uil-moon');
        themeButton.classList.add('uil-sun');
    }else{
        themeButton.classList.remove('uil-sun');
        themeButton.classList.add('uil-moon');
    }
    // Saving chosen theme to local storage of browser for future visit
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})