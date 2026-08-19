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

document.querySelectorAll(".quote").forEach((quote) => {
  const text = quote.querySelector(".quote__text");
  const toggle = quote.querySelector(".quote__toggle");
  if (!text || !toggle) return;

  if (text.scrollHeight - text.clientHeight > 1) {
    toggle.hidden = false;
  }

  toggle.addEventListener("click", () => {
    const expanded = text.classList.toggle("is-expanded");
    toggle.textContent = expanded ? "Zobrazit méně" : "Zobrazit více";
  });
});
