const title = document.getElementById("title");
const button = document.getElementById("toggleBtn");
const buttonEn = document.getElementById("toggleBtnEn");
const count = document.getElementById('count');

let clicked = false;
let clickCount = 0;

button.addEventListener("click", () => {
  clicked = !clicked;

  title.textContent = clicked ? "클릭됨!" : "아직 클릭 안 함";
  title.classList.toggle("clicked");
  document.body.style.backgroundColor = clicked ? "pink" : "";

  // 클릭됨일 때만 카운트 증가
  if (clicked) {
    clickCount++;
    count.textContent = `총 클릭 횟수: ${clickCount}`;
  }
});

buttonEn.addEventListener("click", () => {
  clicked = !clicked;

  title.textContent = clicked ? "Clicked!" : "Not clicked yet";
  title.classList.toggle("clicked");
  document.body.style.backgroundColor = clicked ? "lightblue" : "";

  // 클릭됨일 때만 카운트 증가
  if (clicked) {
    clickCount++;
    count.textContent = `총 클릭 횟수: ${clickCount}`;
  }
});

