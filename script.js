(() => {
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  /* ---- scroll reveal ---- */
  const groups = [
    ...document.querySelectorAll('.section-head'),
    ...document.querySelectorAll('.case'),
    ...document.querySelectorAll('.method-item'),
    ...document.querySelectorAll('.skill-row'),
    ...document.querySelectorAll('.about-grid > *'),
    ...document.querySelectorAll('.contact > *')
  ];
  groups.forEach(el => el.classList.add('reveal'));

  /* stagger items inside a few grouped blocks */
  [
    document.querySelector('.method-grid'),
    document.querySelector('.skill-list'),
    document.querySelector('.about-grid'),
    document.querySelector('.contact')
  ].filter(Boolean).forEach(group => {
    [...group.children].forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${i * 70}ms`);
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    groups.forEach(el => io.observe(el));
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }

  const setActive = (id) => {
    navLinks.forEach(a => {
      a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
    sections.forEach(section => spy.observe(section));
  }

  const copyBtn = document.querySelector('[data-copy]');
  if (copyBtn) {
    const original = copyBtn.textContent;
    copyBtn.addEventListener('click', async () => {
      const text = copyBtn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      copyBtn.textContent = '已复制 ✓';
      copyBtn.disabled = true;
      window.setTimeout(() => {
        copyBtn.textContent = original;
        copyBtn.disabled = false;
      }, 1800);
    });
  }
})();
