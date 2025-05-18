

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  // Intersection Observer to reveal sections once
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });

// Scroll to anchor if loaded with hash
const hash = window.location.hash;
if (hash) {
  const target = document.querySelector(hash);
  if (target) {
    // Wait until animations start and layout settles
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1000); // Increase delay slightly to ensure visibility
  }
}



  // Parallax effect
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    sections.forEach(section => {
      const speed = 0.5;
      const yPos = -(scrollTop * speed);
      section.style.backgroundPositionY = `${yPos}px`;
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
