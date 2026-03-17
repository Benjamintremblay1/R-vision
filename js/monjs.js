const modal = document.getElementById("modal");
const icones = document.querySelectorAll(".footer-icons .icon-circle");
const closeBtn = document.getElementById("close-modal");

icones.forEach(icon => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
  }
});