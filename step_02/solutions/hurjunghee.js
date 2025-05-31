// 허정희 / 2025-05-31
// 탭 클릭 시 콘텐츠 전환 구현

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

function showTab(index) {
  tabs.forEach((tab, i) => {
    // tab.classList.toggle("active", i === index);
    // contents[i].classList.toggle("active", i === index);
    if (i === index) {
      tab.classList.add("active");
      contents[i].classList.add("active");
    } else {
      tab.classList.remove("active");
      contents[i].classList.remove("active");
    }
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showTab(index));
});

// 초기 상태
showTab(0);

// 자동으로 3초마다 순환
let count = 0;
setInterval(() => {
  showTab(count);
  count++;
  if (count > tabs.length - 1) {
    count = 0;
  }
}, 3000);
