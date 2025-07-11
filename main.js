/*-------------- toggle icon navbar -----------*/



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
} 


/*-------------- scroll section active link -----------*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = offsetHeigth;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + heigth) {
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('.header nav a[href*-'+ id +']').classList.add('active');
            } );
        };
    });

    /*-------------- sticky navbar -----------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*-------------- remove toggle icon and navbar -----------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
     };
     /*-------------- Scroll reveal -----------*/
     ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
     });

     ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img, .competences-container, .projets-box, .contact form', { origin:'bottom' });
     ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
     ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

     /*-------------- Typed js -----------*/
     const typed = new Typed('.multiple-text', {
        strings: ['Infirmier', 'Developpeur Web', 'Traducteur','Enseignant de langue'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
     });
    