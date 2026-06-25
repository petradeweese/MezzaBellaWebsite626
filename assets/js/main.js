const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".site-nav a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath || (currentPath === "" && href === "index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll(".menu-tabs a[href^='#'], .compact-actions a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    const styles = getComputedStyle(document.documentElement);
    const headerHeight = parseFloat(styles.getPropertyValue("--header-height")) || 0;
    const tabsHeight = document.querySelector(".menu-overview")?.offsetHeight || 0;
    const offset = headerHeight + tabsHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  });
});

const menuOverview = document.querySelector(".menu-overview");

if (menuOverview) {
  let menuOverviewTop = 0;

  const readHeaderHeight = () => {
    const styles = getComputedStyle(document.documentElement);
    return parseFloat(styles.getPropertyValue("--header-height")) || 0;
  };

  const updateMenuOverviewTop = () => {
    menuOverview.classList.remove("is-stuck");
    menuOverviewTop = menuOverview.getBoundingClientRect().top + window.scrollY;
    updateMenuOverviewState();
  };

  const updateMenuOverviewState = () => {
    const headerHeight = readHeaderHeight();
    menuOverview.classList.toggle("is-stuck", window.scrollY >= menuOverviewTop - headerHeight);
  };

  updateMenuOverviewTop();
  window.addEventListener("scroll", updateMenuOverviewState, { passive: true });
  window.addEventListener("resize", updateMenuOverviewTop);
}
