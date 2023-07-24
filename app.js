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
  
  