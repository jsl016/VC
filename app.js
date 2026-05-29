/* ============================================================
   VIRGINIA CATHEY COLLECTIONS — app.js
   Shared across all pages. One file, no dependencies.
   ============================================================ */

(function () {

  /* ── Nav: scroll state ──────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── Nav: hamburger ─────────────────────────────────────── */
  const burger    = document.getElementById('burger');
  const navMobile = document.getElementById('nav-mobile');

  if (burger && navMobile) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      navMobile.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navMobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll reveal ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => ro.observe(el));
  }

  /* ── Hero parallax ──────────────────────────────────────── */
  const heroBg = document.getElementById('parallax-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    }, { passive: true });
  }

  /* ── Count-up animation ─────────────────────────────────── */
  document.querySelectorAll('.count-up').forEach(el => {
    const co = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      co.unobserve(el);
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const dur    = 1800;
      const step   = 16;
      let cur = 0;
      const inc = target / (dur / step);
      const t = setInterval(() => {
        cur += inc;
        if (cur >= target) {
          el.textContent = target + suffix;
          clearInterval(t);
        } else {
          el.textContent = Math.floor(cur) + suffix;
        }
      }, step);
    }, { threshold: 0.5 });
    co.observe(el);
  });

  /* ── Lightbox ───────────────────────────────────────────── */
  const lb      = document.getElementById('lb');
  const lbImg   = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');

  if (lb && lbImg) {
    document.addEventListener('click', e => {
      if (e.target.classList.contains('g-photo')) {
        lbImg.src = e.target.src;
        lbImg.alt = e.target.alt;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
    function closeLb() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (lbClose) lbClose.addEventListener('click', closeLb);
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
  }

})();
