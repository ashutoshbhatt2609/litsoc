const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    navigation.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const joinDialog = document.querySelector("#join-dialog");
const joinOpeners = document.querySelectorAll("[data-open-join]");
const joinCloser = document.querySelector("[data-close-join]");
let lastJoinTrigger = null;

function openJoinDialog(event) {
  event?.preventDefault();
  if (!joinDialog) return;
  lastJoinTrigger = event?.currentTarget || document.activeElement;
  closeMenu();
  joinDialog.showModal();
}

function closeJoinDialog() {
  if (!joinDialog?.open) return;
  joinDialog.close();
}

joinOpeners.forEach((opener) => opener.addEventListener("click", openJoinDialog));
joinCloser?.addEventListener("click", closeJoinDialog);

joinDialog?.addEventListener("click", (event) => {
  if (event.target === joinDialog) closeJoinDialog();
});

joinDialog?.addEventListener("close", () => {
  lastJoinTrigger?.focus();
});

const instagramDialog = document.querySelector("#instagram-dialog");
const instagramOpeners = document.querySelectorAll("[data-open-instagram]");
const instagramCloser = document.querySelector("[data-close-instagram]");
let lastInstagramTrigger = null;

function openInstagramDialog(event) {
  event?.preventDefault();
  if (!instagramDialog) return;
  lastInstagramTrigger = event?.currentTarget || document.activeElement;
  closeMenu();
  instagramDialog.showModal();
}

function closeInstagramDialog() {
  if (!instagramDialog?.open) return;
  instagramDialog.close();
}

instagramOpeners.forEach((opener) => opener.addEventListener("click", openInstagramDialog));
instagramCloser?.addEventListener("click", closeInstagramDialog);

instagramDialog?.addEventListener("click", (event) => {
  if (event.target === instagramDialog) closeInstagramDialog();
});

instagramDialog?.addEventListener("close", () => {
  lastInstagramTrigger?.focus();
});
