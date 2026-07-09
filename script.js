const printButton = document.querySelector("#printButton");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.open("assets/cv-jonathan-cleutjens.pdf", "_blank");
  });
}

const dialogOpeners = document.querySelectorAll("[data-open-dialog]");

dialogOpeners.forEach((opener) => {
  const dialog = document.querySelector(`#${opener.dataset.openDialog}`);

  if (!dialog) {
    return;
  }

  opener.addEventListener("click", () => {
    dialog.showModal();
  });

  dialog.querySelectorAll("[data-dialog-close]").forEach((closer) => {
    closer.addEventListener("click", () => {
      dialog.close();
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

const root = document.documentElement;

window.addEventListener(
  "pointermove",
  (event) => {
    const x = Math.round((event.clientX / window.innerWidth) * 100);
    const y = Math.round((event.clientY / window.innerHeight) * 100);
    root.style.setProperty("--pointer-x", `${x}%`);
    root.style.setProperty("--pointer-y", `${y}%`);
    root.style.setProperty("--liquid-shift-x", `${(x - 50) / 16}px`);
    root.style.setProperty("--liquid-shift-y", `${(y - 50) / 20}px`);
  },
  { passive: true },
);

let lastScrollY = window.scrollY;
const scrollThreshold = 12;

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY + scrollThreshold;
    const isScrollingUp = currentScrollY < lastScrollY - scrollThreshold;

    if (currentScrollY < 80 || isScrollingUp) {
      document.body.classList.remove("nav-hidden");
    } else if (isScrollingDown) {
      document.body.classList.add("nav-hidden");
    }

    lastScrollY = currentScrollY;
  },
  { passive: true },
);
