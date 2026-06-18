// Aetheris — subtle interactions
(function(){
  'use strict';

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('in'); });
  }

  // Parallax for background glows
  var glows = document.querySelectorAll('.glow');
  var orbits = document.querySelector('.orbits');
  var ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var y = window.scrollY;
      glows.forEach(function(g, i){
        var f = (i + 1) * 0.04;
        g.style.transform = 'translate3d(0,' + (y * f) + 'px,0)';
      });
      if (orbits) orbits.style.transform = 'translate3d(0,' + (y * 0.06) + 'px,0)';
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Header subtle shadow on scroll
  var header = document.querySelector('.site-header');
  function onScroll2(){
    if (!header) return;
    if (window.scrollY > 8) header.style.borderBottomColor = 'rgba(148,163,184,.16)';
    else header.style.borderBottomColor = 'rgba(148,163,184,.08)';
  }
  window.addEventListener('scroll', onScroll2, { passive: true });
})();
