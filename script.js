const printButton = document.querySelector("#printButton");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.open("assets/cv-jonathan-cleutjens.pdf", "_blank");
  });
}
