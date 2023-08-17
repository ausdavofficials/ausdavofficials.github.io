jQuery(document).ready(function($) {  
  // Owl Carousel                     
  var owl = $('.carousel-fade-transition');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true, 
    animateOut: 'fadeOut',
    autoplayTimeout: 5000
  });
});

const animateElements = document.querySelectorAll('.animate-element');

function animateOnScroll() {
  animateElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight / 1.2) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);