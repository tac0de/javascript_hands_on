const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const checkBtn = document.getElementById("checkResultBtn");
const resultMsg = document.getElementById("resultMessage");

// TODO: 모달을 보여주는 함수 작성
// [설명] 왜 classList.remove를 쓰는지 주석으로 남기세요

// TODO: 모달을 닫는 함수 작성
// [설명] classList.add("hidden")이 어떤 역할을 하는지 설명하세요

// TODO: ESC 키 입력 시 닫히도록 구현 (keydown 이벤트 사용)
// [설명] 왜 document에 이벤트를 붙여야 하는지 설명하세요

// TODO: 모달이 열리면 5초 뒤 자동으로 닫히도록 setTimeout 사용
// [설명] 중복 호출 방지를 위한 clearTimeout 필요 이유 설명

// TODO: 아래 validateModalUI를 checkBtn에 연결하세요
import { validateModalUI } from './validator.js';
checkBtn.addEventListener("click", validateModalUI);
