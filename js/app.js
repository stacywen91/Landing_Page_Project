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


// Define Global Variables
const sections = document.querySelectorAll('section');
const navList = document.querySelector("#navbar__list");
const navItems = [];
// End Global Variables

// build the nav
function buildnav(){
  const navFrag = document.createDocumentFragment();
  sections.forEach((section) => {
         const liEle = document.createElement('li');
         const aEle = document.createElement('a');
         aEle.innerHTML = section.getAttribute("data-nav");
         liEle.appendChild(aEle);
         navFrag.appendChild(liEle);
         const navItem = {
           elementNav: aEle,
           elementSection: section
         };
       navItems.push(navItem);
     });
  navList.appendChild(navFrag);
}

// Add class 'active' to section when near top of viewport
window.addEventListener ('click', function(ev) {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetHeight+sectionTop;
        if(ev.pageY < sectionBottom & ev.pageY >= sectionTop) {
            current = section.getAttribute("id");
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});

// Scroll to section on link click
navList.addEventListener("click",(e) => {
  navItems.forEach(({elementSection, elementNav}) => {
    if (elementNav === e.target) {
      elementSection.scrollIntoView({behavior: 'smooth'});
    }
  });
})

// Build menu
buildnav();

// Scroll to section on link click

// Set sections as active
