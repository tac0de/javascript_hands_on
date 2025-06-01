const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

let currentIndex = 0;
let autoRotate;
let autoRotateDelay;

function showTab(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    contents[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function startAutoRotate() {
  clearInterval(autoRotate);
  autoRotate = setInterval(autoTab, 3000);
}

function resetAutoRotate() {
  clearTimeout(autoRotateDelay);
  clearInterval(autoRotate);
  autoRotateDelay = setTimeout(startAutoRotate, 3000); // 3초 기다린 뒤에 다시 시작
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    showTab(index);
    resetAutoRotate(); // 수동 클릭 → 지연된 자동 시작
  });
});

function autoTab() {
  const nextIndex = (currentIndex + 1) % tabs.length;
  showTab(nextIndex);
}

// 초기 상태
showTab(0);
startAutoRotate(); // 초기에 자동 순환 시작
