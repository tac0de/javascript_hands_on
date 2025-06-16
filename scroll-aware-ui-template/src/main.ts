import { registerScrollSections, updateScrollStates } from './components/ScrollSection/ScrollSection';

registerScrollSections();

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollStates();
      ticking = false;
    });
    ticking = true;
  }
});
