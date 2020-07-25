/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
/**
 * Define Global Variables
*/
let navbar = document.getElementById('navbar__list');
let sections = document.querySelectorAll('*[data-nav]');
/*
 * End Global Variables
 * Start Helper Functions
 *
*/
/* Function to check if element is in viewport  */
let isInViewport = function (elem) {
    let x = elem.getBoundingClientRect().left;
    let y = elem.getBoundingClientRect().top;
    let ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let w = elem.clientWidth;
    let h = elem.clientHeight;
    return (
        (y < hw && y + h > 0) &&
        (x < ww &&x + w > 0)
    );
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
/* Convert nodelist to array using spread operator */
const sectionArr = [...sections];
/* Use for each method to loop through the array elements */
sectionArr.forEach(buildNav);
// build the nav
function buildNav(e) {
    let navLi = document.createElement("LI");
    navLi.innerHTML = `<a class="menu__link" href="#${e.id}">${e.dataset.nav}</a>`;
    navbar.appendChild(navLi);
}
// Add class 'active' to section when near top of viewport
sectionArr.forEach(e => {
    window.addEventListener('scroll', event => {
        if ( isInViewport(e)) {
        e.classList.add('your-active-class')
        } else {
        e.classList.remove('your-active-class')
        }
    }, false);
})
