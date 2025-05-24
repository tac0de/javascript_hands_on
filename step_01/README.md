# JavaScript Interaction 실습 과제

## ✅ 과제 개요

버튼을 클릭하면 텍스트가 바뀌고, 스타일이 변하며, 클릭 횟수를 카운트하는 기능을 구현합니다.
HTML/CSS/JS로 구성된 웹페이지의 기본 상호작용 감각을 익히는 것이 목적입니다.

---

## 📁 프로젝트 구조

```
project-root/
├── index.html              # 기본 마크업
├── style.css               # 버튼 및 텍스트 스타일
├── script.js               # 강의용 예시 기본 스크립트
├── solutions/              # 수강생 과제 제출용 디렉토리
│   └── honggildong.js      # 예: 수강생 이름.js (브랜치마다 하나씩)
└── README.md               # 제출 가이드 및 설명
```

---

## 📝 제출 방법

1. 이 저장소를 `git clone` 혹은 `git pull` 합니다.
2. 본인의 이름 또는 닉네임으로 브랜치를 생성합니다. 예: `git checkout -b honggildong`
3. `solutions/honggildong.js` 파일을 만들고, 과제 코드를 작성합니다.
4. 커밋 후 본인의 브랜치에 push 합니다:

```bash
git add .
git commit -m "과제1 - 홍길동 제출"
git push origin honggildong
```

5. GitHub에서 Pull Request를 생성하여 제출합니다.

---

## 📌 과제 요구사항

- 버튼을 하나 더 추가해서, 두 번째 버튼은 텍스트를 영어로 변경하게 해보세요.
  버튼 1: "클릭됨!" / "아직 클릭 안 함"
  버튼 2: "Clicked!" / "Not clicked yet
- 버튼 클릭할 때마다 숫자가 올라가도록 만들기
  클릭 횟수를 세고, `<p id="count">`에 실시간 반영되어야 합니다.

---

## ✨ 보너스 과제 (선택)

- 버튼 클릭 시 배경색도 같이 바뀌게 해보세요 (`document.body.style.backgroundColor 활용`)

---

## ✅ 예시 주석 포맷

```js
// 홍길동 / 2025-05-24
// 버튼 클릭 시 텍스트 변경 + 스타일 변경 + 클릭 횟수 표시
```

---

## 📚 학습 목표

- JavaScript DOM 요소 선택 및 조작
- 이벤트 리스너(`addEventListener`)의 사용법
- `textContent`, `classList`, `innerText` 등 속성 다루기
- 기본적인 `if`문 / 변수 활용
