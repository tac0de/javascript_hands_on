
# ✨ Dynamic UI Framework의 스타일 시스템

본 프레임워크는 **PostCSS**를 핵심 스타일 처리 도구로 사용합니다.

---

## 🧠 왜 PostCSS인가?

PostCSS는 Sass나 Less처럼 전처리기(preprocessor)가 아니라,  
**플러그인 기반의 CSS 후처리기(postprocessor)**입니다.

즉, CSS를 해석하고 변형할 수 있는 **모듈식 엔진**으로,  
프레임워크 수준의 테마 시스템이나 반응형 UI 구성에 적합합니다.

---

## ✅ PostCSS의 핵심 장점

- ⚙️ 플러그인 기반으로 유연하게 조립 가능  
- ✅ 표준 CSS 문법 100% 호환  
- 🔄 Vite, Webpack, Parcel 등 최신 빌드 도구와 매끄럽게 통합  
- 🎨 커스텀 프로퍼티, 중첩(Nesting), 테마 프리셋 지원  
- 🧩 TailwindCSS와도 완벽하게 연동 가능 (Tailwind 내부도 PostCSS 기반)

---

## 🔍 Sass / Less / Tailwind 와의 비교

| 항목 / 도구        | **PostCSS**            | **Sass**          | **Less**          | **TailwindCSS**         |
|-------------------|-------------------------|-------------------|-------------------|--------------------------|
| 분류              | 후처리기 (PostCSS)     | 전처리기          | 전처리기          | 유틸리티 CSS             |
| 확장성            | ✅ 플러그인 방식        | ❌ 제한적          | ❌ 제한적          | ❌ 구성 파일 중심         |
| 중첩(Nesting)     | ✅ (플러그인 필요)      | ✅ 기본 지원        | ✅ 기본 지원        | ❌ 의도적으로 미지원       |
| 변수 사용         | ✅ CSS 변수 사용 가능    | `$var`            | `@var`            | `theme()` 기반           |
| 자동 접두어       | ✅ `autoprefixer`        | ❌ (외부 도구 필요) | ❌ (외부 도구 필요) | ✅ 내장                   |
| 표준 CSS와 호환   | ✅ 100%                  | ❌ (독자 문법 존재) | ❌                 | ✅                        |
| Tailwind과 연계성 | ✅ 핵심 구성 요소로 사용 | ⚠️ 별도 설정 필요   | ⚠️ 별도 설정 필요   | —                         |
| 빌드 도구 연동    | 매우 우수               | 보통              | 낮음               | 매우 우수                 |

---

## 🔧 사용 중인 주요 PostCSS 플러그인

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'postcss-custom-properties': {},
  },
};
```

- `postcss-import`: CSS 파일 간 import 지원  
- `postcss-nested`: Sass처럼 중첩 문법 사용 가능  
- `autoprefixer`: 브라우저 접두어 자동 추가  
- `postcss-custom-properties`: CSS 변수 지원

---

## 💡 Sass나 Tailwind만으로 부족한가요?

- **Sass**는 강력하지만, 자체 문법이 많아 러닝 커브와 JS 연동성이 떨어집니다.  
- **Tailwind**는 빠르지만, 유틸리티 클래스 중심이라 **디자인 시스템 구현에는 제약**이 있습니다.

**PostCSS는 표준 CSS를 기반으로, 당신의 스타일 시스템을 직접 설계하고 확장할 수 있는 유연한 기반**입니다.

---

## 🎨 예시: PostCSS 기반 테마 프리셋

```css
:root {
  --color-accent-light: #ff0077;
  --color-bg-light: #ffffff;
  --color-text-light: #222222;
  --radius-md: 8px;
  --glow-strength: 0.3;
}
```

- JavaScript와 연동하여 다크 모드, 커스텀 테마 구현 가능  
- CSS 변수와 PostCSS 플러그인으로 손쉽게 전역 테마 구성

---

## 📦 결론

> PostCSS는 단순한 CSS 처리 도구가 아니라,  
> **디자인 시스템을 구성하고 자동화하는 진짜 "스타일 엔진"**입니다.
