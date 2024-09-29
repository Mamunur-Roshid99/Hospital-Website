function slidingNav() {
    const header = document.querySelector('.header');
const navbar = document.querySelector('#navbar');
const contact = document.querySelector('#contact');

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 0) {
        header.classList.add('slided');
        navbar.classList.add('nav');
        contact.classList.add('cont');
    }else {
        header.classList.remove('slided');
        navbar.classList.remove('nav');
        contact.classList.remove('cont');
    }
})
}

slidingNav();

function ShowHideNav() {
const menuIcon = document.querySelector("#menuIcon");
const navSidebar = document.querySelector("#nav-sidebar");

const closeIcon = document.querySelector("#closeicon");

menuIcon.addEventListener("click", () => {
    navSidebar.style.display = "block"
})

closeIcon.addEventListener("click", ()=> {
    navSidebar.style.display = "none"
})
}

ShowHideNav();