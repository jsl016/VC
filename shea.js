/* ============================================================
   VIRGINIA CATHEY COLLECTIONS — shea.js
   Shea page — hero parallax
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const bg = document.querySelector('.shea-hero-bg');
  if (bg) {
    window.addEventListener('scroll', () => {
      bg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    }, { passive: true });
  }
});
