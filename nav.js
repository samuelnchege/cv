// Navigation
/* Open */

function openNav() {
	document.getElementById("myNav").style.height = "100%";
}
  
  /* Close */
  function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link)=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({behavior:'smooth'});
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }
});
 