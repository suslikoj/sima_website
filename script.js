const navLinks = document.querySelectorAll(".nav__link");
const sections = [...navLinks].map((link) =>
  document.querySelector(link.getAttribute("href"))
);

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
);

sections.forEach((section) => section && observer.observe(section));
