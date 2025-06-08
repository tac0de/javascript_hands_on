export function validateModalUI() {
  const modal = document.getElementById("modal");
  const msg = document.getElementById("resultMessage");

  if (!modal) {
    msg.textContent = "❌ 모달 요소를 찾을 수 없습니다.";
    msg.style.color = "red";
    return;
  }

  if (modal.classList.contains("hidden")) {
    msg.textContent = "✅ 성공";
    msg.style.color = "green";
  } else {
    msg.textContent = "❌ 모달이 닫히지 않았습니다. ESC 키 또는 타이머를 확인하세요.";
    msg.style.color = "red";
  }
}
