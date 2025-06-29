 // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  


  const heroImage = document.getElementById("hero-image");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 250;

    const scale = Math.max(0, 1 - scrollY / maxScroll);
    const opacity = Math.max(0, 1 - scrollY / maxScroll);

    heroImage.style.transform = `scale(${scale})`;
    heroImage.style.opacity = opacity;
  });
  

  // Project js

   