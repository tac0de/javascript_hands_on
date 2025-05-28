const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

function showTab(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    contents[i].classList.toggle("active", i === index);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showTab(index));
});

// 초기 상태
showTab(0);
