const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
let currentIndex = 0;
let autoRotate = setInterval(autoTab, 3000);

function showTab(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    contents[i].classList.toggle("active", i === index);
  });

  currentIndex = index;
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showTab(index));
  
  clearInterval(autoRotate);
  autoRotate = setInterval(autoTab, 3000);
});

function autoTab() {
  const nextIndex = (currentIndex + 1) % tabs.length;
  showTab(nextIndex);
}

// 초기 상태
showTab(0);

