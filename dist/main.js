const revealTargets = document.querySelectorAll(
  ".section-heading, .pain-grid article, .card, .timeline li, .value-grid p, .case-list article, .final-cta"
);

revealTargets.forEach((element) => {
  element.dataset.reveal = "";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((element) => observer.observe(element));
