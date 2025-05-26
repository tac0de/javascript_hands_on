const title = document.getElementById("title");
const buttons = document.querySelectorAll("button");
const count = document.getElementById("count");

let clicked = false;
let clickCount = 0;

const colors = ["black", "pink", "red"];
let usedColors = [];

function getRandomColor() {
  // 남은 색상 배열 만들기
  const availableColors = colors.filter(color => !usedColors.includes(color));

  // 모든 색상이 다 사용되었다면 초기화 (선택사항)
  if (availableColors.length === 0) {
    usedColors = [];
    availableColors.push(...colors);
  }

  // 랜덤 색상 선택
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const selectedColor = availableColors[randomIndex];

  // 사용된 색상 기록
  usedColors.push(selectedColor);

  return selectedColor;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clicked = !clicked;

    if (clicked) {
      title.textContent = button.id === "enToggleBtn" ? "Clicked!" : "클릭됨!";
    } else {
      title.textContent = button.id === "enToggleBtn" ? "Not clicked yet" : "아직 클릭 안 함";
    }

    // 중복되지 않는 랜덤 배경색 적용
    document.body.style.backgroundColor = getRandomColor();

    title.classList.toggle("clicked");
    clickCount++;
    count.innerText = clickCount;
  });
});
