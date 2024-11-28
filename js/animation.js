document.addEventListener("DOMContentLoaded", () => {
  // Timeline Animation
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));

  // Project Card Interaction
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const button = card.querySelector(".project-button");
      if (button) {
        window.location.href = button.href; // Redirect to the button's link
      }
    });
  });
});
