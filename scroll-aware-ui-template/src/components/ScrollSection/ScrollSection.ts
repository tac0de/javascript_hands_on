/**
 * ScrollSection.ts
 * 스크롤 상태 기반 섹션 관리
 */

export type ScrollState = 'idle' | 'entering' | 'active' | 'leaving';

interface ScrollTrackedSection {
  el: HTMLElement;
  state: ScrollState;
  id: string;
}

const sections: ScrollTrackedSection[] = [];

export function registerScrollSections(selector: string = '.scroll-section'): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el, index) => {
    const id = el.id || `scroll-section-${index}`;
    if (!el.id) el.id = id;

    sections.push({
      el,
      state: 'idle',
      id,
    });
  });
}

export function updateScrollStates(): void {
  sections.forEach((section) => {
    const rect: DOMRect = section.el.getBoundingClientRect();
    const inView: boolean = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

    const newState: ScrollState = inView ? 'active' : 'idle';

    if (section.state !== newState) {
      section.el.dataset.scrollState = newState;
      section.state = newState;

      console.log(`[ScrollState] ${section.id} → ${newState}`);
    }
  });
}
