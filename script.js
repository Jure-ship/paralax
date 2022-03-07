window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("section").style.transform = `translateY(${distance *
      -1}px)`;
    
  });