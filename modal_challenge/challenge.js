const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const checkBtn = document.getElementById("checkResultBtn");
const resultMsg = document.getElementById("resultMessage");

// 자동 닫힘 타이머 id 저장
let autoCloseTimer = null;

// TODO: 모달을 보여주는 함수 작성
// [설명] 왜 classList.remove를 쓰는지 주석으로 남기세요
function openModal() {
    // hidden 클래스 제거해서 display:none 제거해서 모달 보이게 처리
    modal.classList.remove("hidden");
    // 중복 타이머 방지를 위해 먼저 이전 타이머 제거
    clearTimeout(autoCloseTimer);
    // 5초 후 자동으로 닫히도록 타이머 설정
    autoCloseTimer = setTimeout(() => {
        closeModal();
    }, 5000);
}

// TODO: 모달을 닫는 함수 작성
// [설명] classList.add("hidden")이 어떤 역할을 하는지 설명하세요

function closeModal() {
    //hidden 클래스 추가해서 display:none 추가해서 모달 보이지 않게 처리
    modal.classList.add("hidden");
    // 모달 닫히면 타이머도 제거
    clearTimeout(autoCloseTimer);
}

// TODO: ESC 키 입력 시 닫히도록 구현 (keydown 이벤트 사용)
// [설명] 왜 document에 이벤트를 붙여야 하는지 설명하세요

// document에 이벤트를 붙여야 모든 영역에서 키 감지할 수 있어서
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// TODO: 모달이 열리면 5초 뒤 자동으로 닫히도록 setTimeout 사용
// [설명] 중복 호출 방지를 위한 clearTimeout 필요 이유 설명

// TODO: 아래 validateModalUI를 checkBtn에 연결하세요
import { validateModalUI } from "./validator.js";
checkBtn.addEventListener("click", validateModalUI);

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
