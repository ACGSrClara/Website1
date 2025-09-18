// Jahr im Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Navigation
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Scroll-Reveal (IntersectionObserver)
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced) {
  const revealEls = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        io.unobserve(entry.target); // nur einmal animieren
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => io.observe(el));
} else {
  // Wenn Bewegungen reduziert werden sollen, alles direkt sichtbar
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("reveal--visible"));
}
