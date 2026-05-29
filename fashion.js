/* ============================================================
   VIRGINIA CATHEY COLLECTIONS — fashion.js
   Fashion page — hero parallax
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const bg = document.querySelector('.fashion-hero-bg');
  if (bg) {
    window.addEventListener('scroll', () => {
      bg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    }, { passive: true });
  }
});
