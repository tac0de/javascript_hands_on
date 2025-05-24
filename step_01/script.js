const title = document.getElementById("title");
const button = document.getElementById("toggleBtn");
const count = document.getElementById('count')

let clicked = false;
let clickCount = 0;

button.addEventListener("click", () => {
  clicked = !clicked;

  title.textContent = clicked ? "클릭됨!" : "아직 클릭 안 함";
  title.classList.toggle("clicked");
});
