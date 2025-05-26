const title = document.getElementById("title");
const buttons = document.querySelectorAll("button");
const count = document.getElementById("count");

let clicked = false;
let clickCount = 0;
const colors = ["black", "pink", "red"];
let lastColor = null;

function getRandomColor() {
  let newColor;
  do {
    const randomIndex = Math.floor(Math.random() * colors.length);
    newColor = colors[randomIndex];
  } while (newColor === lastColor); // 이전 색과 같으면 다시 뽑기

  lastColor = newColor;
  return newColor;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clicked = !clicked;

    title.textContent = button.id === "enToggleBtn"
      ? (clicked ? "Clicked!" : "Not clicked yet")
      : (clicked ? "클릭됨!" : "아직 클릭 안 함");

    document.body.style.backgroundColor = getRandomColor();

    title.classList.toggle("clicked");
    clickCount++;
    count.innerText = clickCount;
  });
});
