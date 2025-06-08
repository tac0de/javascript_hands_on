const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const checkBtn = document.getElementById("checkResultBtn");
const resultMsg = document.getElementById("resultMessage");

let autoCloseTimer = null;

// TODO: 모달을 보여주는 함수 작성
// [설명] 왜 classList.remove를 쓰는지 주석으로 남기세요

// TODO: 모달을 닫는 함수 작성
// [설명] classList.add("hidden")이 어떤 역할을 하는지 설명하세요

// TODO: 모달이 열리면 5초 뒤 자동으로 닫히도록 setTimeout 사용
// [설명] 중복 호출 방지를 위한 clearTimeout 필요 이유 설명

// 모달을 보여주는 함수
// [설명] 모달이 보이지 않게 설정된 "hidden" 클래스를 제거하여 화면에 표시
function openModal() {
    modal.classList.remove('hidden');
    // [설명] 모달이 열린 후 5초 뒤에 자동으로 닫히도록 설정
    autoCloseTimer = setTimeout(() => {
    closeModal();
  }, 1000);
}
// 모달을 닫는 함수
// [설명] "hidden" 클래스를 다시 추가하여 모달을 화면에서 숨김
function closeModal() {
    modal.classList.add('hidden');

    // [설명] 자동 닫기 타이머 취소
    clearTimeout(autoCloseTimer);
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// TODO: ESC 키 입력 시 닫히도록 구현 (keydown 이벤트 사용)
// [설명] 왜 document에 이벤트를 붙여야 하는지 설명하세요
// [설명] 키보드 이벤트는 화면 전체 어디서든 발생할 수 있기 때문에 document에 이벤트를 연결
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// TODO: 아래 validateModalUI를 checkBtn에 연결하세요
import { validateModalUI } from './validator.js';
checkBtn.addEventListener("click", validateModalUI);
