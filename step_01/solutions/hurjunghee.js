// 허정희 / 2025-05-25
// 버튼 클릭 시 텍스트 변경 + 스타일 변경 + 클릭 횟수 표시
const title = document.getElementById("title");
// const button = document.getElementById("toggleBtn");
const buttons = document.querySelectorAll("button");
const count = document.getElementById("count");

let clicked = false;
let clickCount = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clicked = !clicked;

    if (clicked) {
      title.textContent = button.classList.contains("enToggleBtn")
        ? "Clicked!"
        : "클릭됨!";
    } else {
      title.textContent = button.classList.contains("enToggleBtn")
        ? "Not clicked yet"
        : "아직 클릭 안 함";
    }
    document.body.classList.toggle("bg_color");
    title.classList.toggle("clicked");
    clickCount++;
    count.innerText = clickCount;
  });
});
