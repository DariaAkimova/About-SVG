const upButton = document.querySelector(".btn-up");

const goUp = () => window.scrollTo(0, 0);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    upButton.classList.remove("visually-hidden");
    upButton.addEventListener("click", goUp);
  } else {
    upButton.classList.add("visually-hidden");
    upButton.removeEventListener("click", goUp);
  }
});
