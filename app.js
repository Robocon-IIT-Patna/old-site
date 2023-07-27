//Scroll to reveal function
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 125;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }

  }

}

const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  effect: "cube",                     //make slider cube
  cubeEffect: {
      slideShadows: true,             // Presence of shadows on the slide surface
      shadow: true,                   // Presence of shadows below the slide
      shadowOffset: 100,              // Position of shadows below the slide (in pixels)
      shadowScale: 0.8,                 // Size Ratio of shadows below the slide (0~1)
  },
  grabCursor: true,                   //grab cursor
  speed: 1500,                        //slide speed
  autoplay: {                         //auto play
      delay: 2000,  
  },                   
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})
var tl = gsap.timeline({ repeat: -1 });
tl.to("h1", { duration: 30, backgroundPosition: "-960px 0" });
// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}

// Create a new Intersection Observer instance
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver(handleIntersection, options);

// Select the elements to apply the fade-in effect
const fadeElements = document.querySelectorAll('.fade-in');

// Observe each fade-in element
fadeElements.forEach(element => {
  observer.observe(element);
});

