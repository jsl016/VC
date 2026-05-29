/* ============================================================
   VIRGINIA CATHEY COLLECTIONS — index.js
   Hero Parallax
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const shift = scrollY * 0.35;
      heroBg.style.transform = `scale(1.08) translateY(${shift}px)`;
    }, { passive: true });
  }
});
