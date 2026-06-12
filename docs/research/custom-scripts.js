!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

/* ===== next script block ===== */


{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pay.com",
  "url": "/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://cdn.prod.website-files.com/69d4c843fed879b1761cec61/69d50a071c622c8409d6cf14_logo.svg"
  },
  "description": "All-in-one payment orchestration and acquiring platform engineered for acceptance. Higher approval rates, lower fees, and a checkout experience that seals the deal.",
  "sameAs": [
    "https://twitter.com/paycom",
    "https://linkedin.com/company/pay-com"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Limassol",
    "addressCountry": "CY"
  },
  "areaServed": "Worldwide",
  "slogan": "Built to approve. Designed to convert.",
  "knowsAbout": [
    "Payment Orchestration",
    "Payment Acquiring",
    "Payment Gateway",
    "Fraud Prevention",
    "Payment Routing",
    "Network Tokenization",
    "Settlement Reconciliation",
    "Payment Optimization"
  ]
}


/* ===== next script block ===== */

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTSMB4X');

/* ===== next script block ===== */


  function initButtonCharacterStagger() {
    const offsetIncrement = 0.01;
    const buttons = document.querySelectorAll('[data-button-animate-chars]');
    buttons.forEach(button => {
      const text = button.textContent.trim();
      button.innerHTML = '';
      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${index * offsetIncrement}s`;
        if (char === ' ') {
          span.style.whiteSpace = 'pre';
        }
        button.appendChild(span);
      });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    initButtonCharacterStagger();
  });


/* ===== next script block ===== */


(function() {
  // Proveri da li smo uopšte na nekoj pricing stranici
  const currentPath = window.location.pathname;
  const pricingPages = ['/pricing-eu', '/pricing-us', '/pricing-uk'];

  // Ako nismo na pricing stranici, nemoj ništa da radiš
  if (!pricingPages.includes(currentPath)) {
    return;
  }

  // Mapa zemalja po regionima
  const regions = {
    europe: [
      'AL', 'AD', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ',
      'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT',
      'XK', 'LV', 'LI', 'LT', 'LU', 'MT', 'MD', 'MC', 'ME', 'NL',
      'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS', 'SK', 'SI',
      'ES', 'SE', 'CH', 'UA', 'VA'
    ],
    us: ['US'],
    uk: ['GB']
  };

  // Mapa regiona na stranice
  const regionPages = {
    europe: '/pricing-eu',
    us: '/pricing-us',
    uk: '/pricing-uk',
    default: '/pricing-uk'
  };

  // Funkcija za redirekciju
  function redirectToRegionalPage(countryCode) {
    let targetPage;

    if (regions.europe.includes(countryCode)) {
      targetPage = regionPages.europe;
    } else if (regions.us.includes(countryCode)) {
      targetPage = regionPages.us;
    } else if (regions.uk.includes(countryCode)) {
      targetPage = regionPages.uk;
    } else {
      targetPage = regionPages.default;
    }

    // Redirektuj samo ako nismo već na pravoj stranici
    if (currentPath !== targetPage) {
      window.location.href = targetPage;
    }
  }

  // Pokušaj sa Cloudflare header-om prvo
  fetch('https://www.cloudflare.com/cdn-cgi/trace')
    .then(response => response.text())
    .then(data => {
      const countryMatch = data.match(/loc=([A-Z]{2})/);
      if (countryMatch) {
        redirectToRegionalPage(countryMatch[1]);
      } else {
        return fetch('https://ipapi.co/json/');
      }
    })
    .catch(() => {
      return fetch('https://ipapi.co/json/');
    })
    .then(response => {
      if (response) return response.json();
    })
    .then(data => {
      if (data && data.country_code) {
        redirectToRegionalPage(data.country_code);
      }
    })
    .catch(error => {
      console.log('Geo-redirect error:', error);
    });
})();


/* ===== next script block ===== */


function initTextCharacterStagger() {
  const offsetIncrement = 0.01;
  const elements = document.querySelectorAll('.text-animated-hover');

  elements.forEach(el => {
    // Prevent double init (important for Webflow)
    if (el.dataset.split === "true") return;
    el.dataset.split = "true";

    const text = el.textContent;
    el.innerHTML = '';

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;

      // stagger delay
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      // preserve spaces
      if (char === ' ') {
        span.style.whiteSpace = 'pre';
      }

      el.appendChild(span);
    });
  });
}

/* Run on page load */
document.addEventListener('DOMContentLoaded', initTextCharacterStagger);

/* Fix for Webflow interactions / dynamic content */
window.Webflow ||= [];
window.Webflow.push(() => {
  initTextCharacterStagger();
});


/* ===== next script block ===== */


(function () {
  const tabs = document.querySelectorAll('.hero-tabs-menu .w-tab-link');
  if (!tabs.length) return;

  let current = 0;
  let timer;
  let rafId;
  let isSwiping = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let lotties = [];
  let lottieDurations = [];
  let tabElapsed = [];
  let tabStartTime = 0;
  let restLoaded = false;
  let lottieRuntime = null;
  let animationDataCache = {};
  let prefetchedCount = 0;

  const style = document.createElement('style');
  style.textContent = `
    .hero-tabs-menu .w-tab-link {
      position: relative;
      overflow: hidden;
      background-color: #000000 !important;
      transition: background-color 0.2s ease;
    }
    .hero-tabs-menu .w-tab-link:hover {
      background-color: #2F2F2F !important;
    }
    .hero-tabs-menu .w-tab-link.w--current {
      background-color: rgba(47, 47, 47, 0.7) !important;
    }
    .hero-tabs-menu .w-tab-link.w--current:hover {
      background-color: rgba(47, 47, 47, 0.7) !important;
    }
    .tab-progress-bar {
      position: absolute;
      bottom: 0; left: 0; top: 0;
      height: 100%; width: 0%;
      background: #2F2F2F;
      border-radius: 0;
      pointer-events: none;
      transition: none;
      z-index: 0;
    }
    .hero-tabs-menu .w-tab-link > *:not(.tab-progress-bar) {
      position: relative;
      z-index: 1;
    }
    .w-tab-pane:not(.w--tab-active) {
      display: block !important;
      visibility: hidden !important;
      pointer-events: none !important;
      position: absolute !important;
      opacity: 0 !important;
    }
    .w-tab-pane.w--tab-active {
      visibility: visible !important;
      position: relative !important;
      opacity: 1 !important;
    }
    @media (max-width: 991px) {
      .hero-tabs-menu {
        display: flex !important;
        overflow-x: auto !important;
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
        max-width: 100vw !important;
      }
      .hero-tabs-menu::-webkit-scrollbar { display: none !important; }
      .hero-tabs-menu .w-tab-link {
        flex-shrink: 0 !important;
        white-space: nowrap !important;
        width: auto !important;
        min-width: max-content !important;
      }
      .hero-tabs-menu .w-tab-link:hover { background-color: #000000 !important; }
      .hero-tabs-menu .w-tab-link.w--current:hover {
        background-color: rgba(47, 47, 47, 0.7) !important;
      }
    }
  `;
  document.head.appendChild(style);

  tabs.forEach(function (tab) {
    var bar = document.createElement('div');
    bar.className = 'tab-progress-bar';
    tab.appendChild(bar);
  });

  function getBar(index) {
    return tabs[index].querySelector('.tab-progress-bar');
  }

  function animateProgress() {
    var bar = getBar(current);
    if (!bar) return;
    var total = lottieDurations[current] || 20000;
    var elapsed = tabElapsed[current] + (Date.now() - tabStartTime);
    var pct = Math.min((elapsed / total) * 100, 100);
    bar.style.width = pct + '%';
    if (pct < 100) rafId = requestAnimationFrame(animateProgress);
  }

  function pauseCurrentTab() {
    tabElapsed[current] = 0;
    cancelAnimationFrame(rafId);
    clearInterval(timer);
    var bar = getBar(current);
    if (bar) bar.style.width = '0%';
  }

  function destroyLottie(index) {
    var anim = lotties[index];
    if (anim) {
      anim.destroy();
      lotties[index] = null;
    }
  }

  function resumeTab(index) {
    current = index;
    tabStartTime = Date.now();
    var total = lottieDurations[index] || 20000;
    var remaining = total - tabElapsed[index];
    var anim = lotties[index];
    if (anim) anim.play();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animateProgress);
    clearInterval(timer);
    timer = setInterval(function () {
      autoAdvance();
    }, remaining);
  }

  function autoAdvance() {
    var prev = current;
    pauseCurrentTab();
    tabElapsed[prev] = 0;

    var next = (prev + 1) % tabs.length;
    tabElapsed[next] = 0;

    if (!restLoaded) {
      var found = -1;
      for (var i = 1; i < tabs.length; i++) {
        var idx = (prev + i) % tabs.length;
        var p = getTriggerPath(idx);
        if (p && animationDataCache[p]) { found = idx; break; }
      }
      if (found === -1) found = prev;
      next = found;
    }

    destroyLottie(prev);

    createInstance(next).then(function (anim) {
      activateTab(next);
      requestAnimationFrame(function () {
        anim.resize();
        anim.goToAndStop(0, true);
        resumeTab(next);
      });
    });
  }

  function activateTab(index) {
    var tabsWrapper = tabs[0].closest('.w-tabs');
    if (!tabsWrapper) return;
    var panes = tabsWrapper.querySelectorAll('.w-tab-pane');
    tabs.forEach(function (t, i) {
      if (i === index) {
        t.classList.add('w--current');
        t.setAttribute('aria-selected', 'true');
        t.setAttribute('tabindex', '0');
      } else {
        t.classList.remove('w--current');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      }
    });
    panes.forEach(function (pane, i) {
      if (i === index) pane.classList.add('w--tab-active');
      else pane.classList.remove('w--tab-active');
    });
  }

  function scrollTabIntoView(index) {
    var menu = tabs[0].closest('.hero-tabs-menu') || tabs[0].parentElement;
    if (!menu || window.innerWidth > 991) return;
    var activeTab = tabs[index];
    var menuRect = menu.getBoundingClientRect();
    var tabRect = activeTab.getBoundingClientRect();
    var targetScroll = menu.scrollLeft + (tabRect.left - menuRect.left) - 8;
    menu.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
  }

  function loadLottieRuntime() {
    return new Promise(function (resolve, reject) {
      if (lottieRuntime) { resolve(lottieRuntime); return; }
      if (window.lottie) { lottieRuntime = window.lottie; resolve(lottieRuntime); return; }
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
      s.async = true;
      s.onload = function () { lottieRuntime = window.lottie; resolve(lottieRuntime); };
      s.onerror = function () { reject(new Error('Lottie runtime failed to load')); };
      document.head.appendChild(s);
    });
  }

  function getTriggerPath(index) {
    var trigger = document.querySelector('.lottie-trigger[data-tab-index="' + index + '"]');
    return trigger ? trigger.dataset.path : null;
  }

  function prefetchAnimationData(path) {
    if (!path || animationDataCache[path]) return Promise.resolve();
    return fetch(path)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        animationDataCache[path] = data;
        prefetchedCount++;
        if (prefetchedCount === tabs.length - 1) restLoaded = true;
      })
      .catch(function () {});
  }

  function createInstance(index) {
    var trigger = document.querySelector('.lottie-trigger[data-tab-index="' + index + '"]');
    if (!trigger) return Promise.reject('No trigger for index ' + index);
    if (lotties[index]) return Promise.resolve(lotties[index]);

    var path = trigger.dataset.path;

    return loadLottieRuntime().then(function (lottie) {
      var dataPromise = animationDataCache[path]
        ? Promise.resolve(animationDataCache[path])
        : fetch(path).then(function (res) { return res.json(); }).then(function (d) {
            animationDataCache[path] = d;
            return d;
          });

      return dataPromise.then(function (animationData) {
        trigger.innerHTML = '';

        var tabWrapper = trigger.closest('.w-tabs');
        var refPane = tabWrapper ? tabWrapper.querySelector('.w--tab-active .tab-image') : null;
        var refWidth = refPane ? refPane.offsetWidth : trigger.offsetWidth;
        var refHeight = refPane ? refPane.offsetHeight : trigger.offsetHeight;

        var anim = lottie.loadAnimation({
          container: trigger,
          renderer: 'canvas',
          loop: false, // <-- IZMJENA: ne loopuj, mi kontrolišemo
          autoplay: false,
          animationData: animationData,
          rendererSettings: {
            clearCanvas: true,
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid meet',
          }
        });

        var canvas = trigger.querySelector('canvas');
        if (canvas && refWidth && refHeight) {
          canvas.width = refWidth;
          canvas.height = refHeight;
        }

        // <-- IZMJENA: kad animacija završi, zamrzni na zadnjem frejmu
        anim.addEventListener('complete', function () {
          anim.goToAndStop(anim.totalFrames - 1, true);
        });

        lotties[index] = anim;
        lottieDurations[index] = (anim.totalFrames / anim.frameRate) * 1000;
        return anim;
      });
    });
  }

  function initLotties() {
    var triggers = document.querySelectorAll('.lottie-trigger');
    if (!triggers.length) return;

    tabElapsed = new Array(tabs.length).fill(0);
    loadLottieRuntime();

    var first = document.querySelector('.lottie-trigger[data-tab-index="0"]');
    if (!first) return;

    createInstance(0).then(function (anim) {
      activateTab(0);
      requestAnimationFrame(function () {
        anim.resize();
        anim.play();
        resumeTab(0);
      });

      var idleFn = function () {
        triggers.forEach(function (trigger) {
          var idx = parseInt(trigger.dataset.tabIndex);
          if (idx === 0) return;
          prefetchAnimationData(trigger.dataset.path);
        });
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(idleFn, { timeout: 3000 });
      } else {
        setTimeout(idleFn, 500);
      }
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function (e) {
      if (isSwiping) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if (i === current) return;

      var path = getTriggerPath(i);
      if (!path || !animationDataCache[path]) return;

      pauseCurrentTab();
      destroyLottie(current);

      createInstance(i).then(function (anim) {
        activateTab(i);
        scrollTabIntoView(i);
        requestAnimationFrame(function () {
          anim.resize();
          anim.goToAndStop(0, true);
          resumeTab(i);
        });
      });
    });
  });

  var tabsMenu = tabs[0].closest('.hero-tabs-menu') || tabs[0].parentElement;
  if (tabsMenu) {
    tabsMenu.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      isSwiping = false;
    }, { passive: true });

    tabsMenu.addEventListener('touchmove', function (e) {
      var dx = Math.abs(e.changedTouches[0].screenX - touchStartX);
      var dy = Math.abs(e.changedTouches[0].screenY - touchStartY);
      if (dx > 8 && dx > dy) isSwiping = true;
    }, { passive: true });

    tabsMenu.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (isSwiping && Math.abs(diff) > 40) {
        var next = diff > 0
          ? Math.min(current + 1, tabs.length - 1)
          : Math.max(current - 1, 0);
        var path = getTriggerPath(next);
        if (next !== current && path && animationDataCache[path]) {
          pauseCurrentTab();
          destroyLottie(current);
          createInstance(next).then(function (anim) {
            activateTab(next);
            scrollTabIntoView(next);
            requestAnimationFrame(function () {
              anim.resize();
              anim.goToAndStop(0, true);
              resumeTab(next);
            });
          });
        }
      }
      setTimeout(function () { isSwiping = false; }, 300);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', initLotties);
})();


/* ===== next script block ===== */


document.addEventListener('DOMContentLoaded', function() {
  var words = ['Convert.', 'Orchestrate.', 'Route.', 'Recover.'];
  var el = document.querySelector('.span-animated');
  if (!el) return;

  var parent = el.parentElement;
  parent.style.display = 'inline-block';
  parent.style.overflow = 'hidden';
  parent.style.verticalAlign = 'middle';

  var current = 0;
  el.style.display = 'block';
  el.textContent = words[0];
  el.style.opacity = '1';
  el.style.transform = 'translateY(0%)';
  el.style.willChange = 'transform, opacity';

  function switchWord() {
    el.style.transition = 'transform 0.25s cubic-bezier(0.76,0,0.24,1), opacity 0.15s ease';
    el.style.transform = 'translateY(60%)';
    el.style.opacity = '0';
    setTimeout(function() {
      current = (current + 1) % words.length;
      el.textContent = words[current];
      el.style.transition = 'none';
      el.style.transform = 'translateY(-30%)';
      el.style.opacity = '0';
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          el.style.transition = 'transform 0.25s cubic-bezier(0.76,0,0.24,1), opacity 0.2s ease';
          el.style.transform = 'translateY(0%)';
          el.style.opacity = '1';
        });
      });
    }, 250);
  }

  setInterval(switchWord, 2800);
});


/* ===== next script block ===== */


(function() {
  const DURATION = 5850;
  const isMobile = () => window.innerWidth < 992;
  const accordions = document.querySelectorAll('.tabs-accordion');
  const images = document.querySelectorAll('.tab-image-right');
  let current = 0;
  let rafId = null;
  let collapseTimers = [];
  let expandTimers = [];
  let isInView = false;
  const lottieInstances = [];
  const lottieLoaded = [];
 
  function easeInOut(t) {
    const s = -(Math.cos(Math.PI * t) - 1) / 2;
    return -(Math.cos(Math.PI * s) - 1) / 2;
  }
 
  function getExpandedHeight(p) {
    p.style.height = 'auto';
    p.style.overflow = 'visible';
    const h = p.scrollHeight;
    p.style.height = '0px';
    p.style.overflow = 'hidden';
    p.offsetHeight;
    return h;
  }
 
  function clearAllTimers() {
    collapseTimers.forEach(clearTimeout);
    expandTimers.forEach(clearTimeout);
    collapseTimers = [];
    expandTimers = [];
  }
 
  function forceCloseAll() {
    accordions.forEach(function(acc) {
      var p = acc.querySelector('p');
      var progress = acc.querySelector('.line-progress');
      p.style.transition = 'none';
      p.style.height = '0px';
      p.style.opacity = '0';
      p.style.overflow = 'hidden';
      if (progress) progress.style.width = '0%';
      acc.classList.remove('is-active');
    });
  }
 
  function collapseAccordion(acc) {
    const p = acc.querySelector('p');
    const progress = acc.querySelector('.line-progress');
    p.style.transition = 'none';
    p.style.height = p.scrollHeight + 'px';
    p.offsetHeight;
    p.style.transition = 'height 0.5s ease, opacity 0.5s ease';
    p.style.height = '0px';
    p.style.opacity = '0';
    p.style.overflow = 'hidden';
    if (progress) progress.style.width = '0%';
    acc.classList.remove('is-active');
    var t = setTimeout(function() { p.style.height = '0px'; }, 520);
    collapseTimers.push(t);
  }
 
  function expandAccordion(acc) {
    const p = acc.querySelector('p');
    const targetHeight = getExpandedHeight(p);
    p.style.transition = 'none';
    p.style.height = '0px';
    p.style.opacity = '0';
    p.style.overflow = 'hidden';
    p.offsetHeight;
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        p.style.transition = 'height 0.5s ease, opacity 0.5s ease';
        p.style.height = targetHeight + 'px';
        p.style.opacity = '1';
        acc.classList.add('is-active');
        var t = setTimeout(function() {
          p.style.height = 'auto';
          p.style.overflow = 'visible';
        }, 520);
        expandTimers.push(t);
      });
    });
  }
 
  // ── LOTTIE ───────────────────────────────────────────────────
  function loadLottie(index) {
    if (lottieLoaded[index]) return;
    const trigger = images[index] && images[index].querySelector('.lottie-tab-trigger');
    if (!trigger || !window.lottie) return;
    const path = trigger.getAttribute('data-path');
    if (!path) return;
    const anim = window.lottie.loadAnimation({
      container: trigger,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: path
    });
    lottieInstances[index] = anim;
    lottieLoaded[index] = true;
  }
 
  function playLottie(index) {
    loadLottie(index);
    const anim = lottieInstances[index];
    if (!anim) return;
    anim.goToAndPlay(0, true);
  }
 
  function pauseLottie(index) {
    const anim = lottieInstances[index];
    if (!anim) return;
    anim.goToAndStop(0, true);
  }
 
  function pauseAllLotties() {
    lottieInstances.forEach(function(anim) {
      if (anim) anim.goToAndStop(0, true);
    });
  }
 
  // ── IMAGE SWITCH ─────────────────────────────────────────────
  // FIX: switchImage sada radi i na mobilnom
  function switchImage(fromIndex, toIndex) {
    images[fromIndex].style.removeProperty('clip-path');
    images[toIndex].style.removeProperty('clip-path');
    pauseLottie(fromIndex);
    images[fromIndex].classList.remove('is-active');
    images[toIndex].classList.add('is-active');
    if (isInView || isMobile()) playLottie(toIndex);
  }
 
  // ── TAB LOGIC ────────────────────────────────────────────────
  function activateTab(index) {
    if (index === current) return;
    cancelAnimationFrame(rafId);
    clearAllTimers();
    var fromIndex = current;
    current = index;
    forceCloseAll();
    requestAnimationFrame(function() {
      collapseAccordion(accordions[fromIndex]);
      expandAccordion(accordions[index]);
      // FIX: switchImage se poziva uvek, ne samo na desktopu
      switchImage(fromIndex, index);
      // Progress bar ostaje samo na desktopu — na mobu nema smisla
      if (!isMobile()) startProgressBar();
    });
  }
 
  function startProgressBar() {
    if (isMobile()) return;
    cancelAnimationFrame(rafId);
    var lastTime = performance.now();
    var elapsed = 0;
    var progressEl = accordions[current].querySelector('.line-progress');
    if (progressEl) progressEl.style.width = '0%';
    function animate(now) {
      var delta = Math.min(now - lastTime, 100);
      lastTime = now;
      elapsed += delta;
      var t = Math.min(elapsed / DURATION, 1);
      if (progressEl) progressEl.style.width = (easeInOut(t) * 100) + '%';
      if (t < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        activateTab((current + 1) % accordions.length);
      }
    }
    rafId = requestAnimationFrame(animate);
  }
 
  // ── EVENTS ───────────────────────────────────────────────────
  // FIX: uklonjen isMobile() early return — Lottie pause/resume radi i na mobu
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      pauseLottie(current);
    } else {
      if (isInView || isMobile()) {
        if (!isMobile()) startProgressBar();
        playLottie(current);
      }
    }
  });
 
  accordions.forEach(function(acc, i) {
    acc.addEventListener('click', function() {
      if (i === current) return;
      activateTab(i);
    });
  });
 
  var rightWrapper = document.querySelector('.tabs-right-wrapper');
  if (rightWrapper) {
    rightWrapper.addEventListener('click', function() {
      var next = (current + 1) % accordions.length;
      activateTab(next);
    });
  }
 
  // ── INIT ─────────────────────────────────────────────────────
  images.forEach(function(img, i) {
    img.style.removeProperty('clip-path');
    if (i === 0) {
      img.classList.add('is-active');
    } else {
      img.classList.remove('is-active');
    }
  });
 
  accordions.forEach(function(acc, i) {
    var p = acc.querySelector('p');
    p.style.overflow = 'hidden';
    if (i === 0) {
      acc.classList.add('is-active');
      acc.offsetHeight;
      var h = p.scrollHeight;
      p.style.height = h > 0 ? h + 'px' : 'auto';
      p.style.opacity = '1';
    } else {
      p.style.height = '0px';
      p.style.opacity = '0';
    }
  });
 
  // FIX: Observer radi i na mobilnom — potrebno za Lottie play/pause
  function initObserver() {
    var target = document.querySelector('.tabs-wrapper');
    if (!target) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          isInView = true;
          images.forEach(function(_, i) {
            if (i === current) playLottie(i);
            else pauseLottie(i);
          });
          if (!isMobile()) startProgressBar();
        } else {
          isInView = false;
          cancelAnimationFrame(rafId);
          pauseAllLotties();
          var progressEl = accordions[current] && accordions[current].querySelector('.line-progress');
          if (progressEl) progressEl.style.width = '0%';
        }
      });
    }, { threshold: 0.3 });
    observer.observe(target);
  }
 
  function waitForLottie(cb) {
    if (window.lottie) { cb(); return; }
    var interval = setInterval(function() {
      if (window.lottie) { clearInterval(interval); cb(); }
    }, 50);
  }
 
  waitForLottie(function() {
    images.forEach(function(_, i) { loadLottie(i); });
    initObserver();
    // FIX: Na mobilnom odmah pusti prvi Lottie bez čekanja na scroll
    if (isMobile()) playLottie(0);
  });
})();


/* ===== next script block ===== */


(function () {

  function initCounters() {
    document.querySelectorAll('[data-anim="count-span"]').forEach(span => {
      const original = span.textContent.trim();

      const prefixMatch = original.match(/^[^0-9]*/);
      const prefix = prefixMatch ? prefixMatch[0] : '';

      const suffixMatch = original.match(/[^0-9.]+$/);
      const suffix = suffixMatch ? suffixMatch[0] : '';

      const numberMatch = original.match(/[\d.]+/);
      if (!numberMatch) return;
      const numberStr = numberMatch[0];
      const hasDecimal = numberStr.includes('.');
      const [intPart, decPart] = numberStr.split('.');
      const digits = intPart.split('');

      span.style.display = 'inline-flex';
      span.style.alignItems = 'flex-end';
      span.style.overflow = 'visible';
      span.style.position = 'relative';
      span.style.letterSpacing = 'inherit';
      span.innerHTML = '';

      if (prefix) {
        const p = document.createElement('span');
        p.textContent = prefix;
        p.style.letterSpacing = 'inherit';
        span.appendChild(p);
      }

      const slots = [];

      digits.forEach((digit) => {
        const slot = document.createElement('span');
        slot.style.cssText = `
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          position: relative;
          height: 1.1em;
          width: 0.55em;
          letter-spacing: 0;
        `;
        const inner = document.createElement('span');
        inner.style.cssText = `
          display: flex;
          flex-direction: column;
          position: relative;
          transition: none;
          letter-spacing: 0;
        `;
        const d = parseInt(digit);
        for (let n = 0; n <= d; n++) {
          const num = document.createElement('span');
          num.style.cssText = `display: block; height: 1.1em; line-height: 1.1em; text-align: left; letter-spacing: 0;`;
          num.textContent = n;
          inner.appendChild(num);
        }
        slot.appendChild(inner);
        span.appendChild(slot);
        slots.push(inner);
      });

      if (hasDecimal && decPart) {
        const dot = document.createElement('span');
        dot.textContent = '.';
        dot.style.letterSpacing = '0';
        span.appendChild(dot);

        decPart.split('').forEach((digit) => {
          const slot = document.createElement('span');
          slot.style.cssText = `
            display: inline-block;
            overflow: hidden;
            vertical-align: bottom;
            position: relative;
            height: 1.1em;
            width: 0.55em;
            letter-spacing: 0;
          `;
          const inner = document.createElement('span');
          inner.style.cssText = `
            display: flex;
            flex-direction: column;
            position: relative;
            transition: none;
            letter-spacing: 0;
          `;
          const d = parseInt(digit);
          for (let n = 0; n <= d; n++) {
            const num = document.createElement('span');
            num.style.cssText = `display: block; height: 1.1em; line-height: 1.1em; text-align: left; letter-spacing: 0;`;
            num.textContent = n;
            inner.appendChild(num);
          }
          slot.appendChild(inner);
          span.appendChild(slot);
          slots.push(inner);
        });
      }

      if (suffix) {
        const s = document.createElement('span');
        s.textContent = suffix;
        s.style.letterSpacing = 'inherit';
        span.appendChild(s);
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          slots.forEach((inner, i) => {
            const delay = i * 120;
            const duration = 1200 + i * 150;
            setTimeout(() => {
              inner.style.transition = `transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
              inner.style.transform = `translateY(calc(-100% + 1.1em))`;
            }, delay);
          });
        });
      }, { threshold: 0.8 });

      observer.observe(span);
    });
  }

  function initParallax() {
    const items = [];

    document.querySelectorAll('[data-anim="paralax"]').forEach(img => {
      img.style.willChange = 'transform';
      items.push(img);
    });

    if (!items.length) return;

    function onScroll() {
      items.forEach(img => {
        const rect = img.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);
        const clamp = Math.min(Math.max(progress, 0), 1);
        const offset = (clamp - 0.5) * -8;
        img.style.transform = `translateY(${offset}%)`;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function init() {
    initCounters();
    initParallax();
  }

  window.Webflow ? window.Webflow.push(init) : window.addEventListener('DOMContentLoaded', init);

})();


/* ===== next script block ===== */


(function () {
  function init() {
    gsap.registerPlugin(ScrollTrigger);

    const total = 4;
    const headings = [];
    const texts = [];
    const images = [];
    for (let i = 1; i <= total; i++) {
      headings.push(document.querySelector(`[data-headline="${i}"]`));
      texts.push(document.querySelector(`[data-text="${i}"]`));
      images.push(document.querySelector(`[data-image="${i}"]`));
    }

    const track = document.querySelector('.section-track');
    if (!track) return;

    // ── LOTTIE ───────────────────────────────────────────────
    const lottieInstances = [];
    const lottieLoaded = [];

    function waitForLottie(cb) {
      if (window.lottie) { cb(); return; }
      const interval = setInterval(() => {
        if (window.lottie) { clearInterval(interval); cb(); }
      }, 50);
    }

    function loadLottie(i) {
      if (lottieLoaded[i]) return;
      const wrapper = images[i];
      if (!wrapper) return;
      const trigger = wrapper.querySelector('.lottie-tab-trigger');
      if (!trigger) return;
      const path = trigger.getAttribute('data-path');
      if (!path) return;

      const anim = window.lottie.loadAnimation({
        container: trigger,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: path,
      });

      lottieInstances[i] = anim;
      lottieLoaded[i] = true;
    }

    function playLottie(i) {
      if (!lottieInstances[i]) return;
      lottieInstances[i].goToAndPlay(0, true);
    }

    function resetLottie(i) {
      if (!lottieInstances[i]) return;
      lottieInstances[i].goToAndStop(0, true);
    }

    function initAllLotties() {
      for (let i = 0; i < total; i++) loadLottie(i);
    }

    function initTab0Trigger() {
      ScrollTrigger.create({
        trigger: track,
        start: 'top 40%',
        onEnter: () => { if (active === 0) playLottie(0); },
        onLeave: () => { if (active === 0) resetLottie(0); },
        onEnterBack: () => { if (active === 0) playLottie(0); },
        onLeaveBack: () => { if (active === 0) resetLottie(0); },
      });
    }

    waitForLottie(() => {
      initAllLotties();
      initTab0Trigger();
    });
    // ─────────────────────────────────────────────────────────

    images.forEach((img, i) => {
      gsap.set(img, {
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: i + 1,
        clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
      });
    });

    gsap.set(headings, { opacity: 0.3 });
    gsap.set(headings[0], { opacity: 1 });
    gsap.set(texts, { opacity: 0, pointerEvents: 'none' });
    gsap.set(texts[0], { opacity: 1, pointerEvents: 'auto' });
    texts.forEach((text, i) => {
      if (!text) return;
      text.style.display = i === 0 ? 'flex' : 'none';
    });

    const isMob = () => window.innerWidth < 992;
    let scrollListeners = [];
    let active = 0;
    let clickInProgress = false;

    function setTab(to, animate = true) {
      const from = active;
      if (to === from) return;
      if (to < 0 || to >= total) return;
      active = to;

      resetLottie(from);
      playLottie(to);

      headings.forEach((h, i) => {
        if (!h) return;
        gsap.to(h, { opacity: i === to ? 1 : 0.3, duration: 0.3, ease: 'power2.out' });
      });

      texts.forEach((text, i) => {
        if (!text) return;
        if (i === from) {
          gsap.to(text, {
            opacity: 0, pointerEvents: 'none', duration: 0.25, ease: 'power2.out',
            onComplete: () => { text.style.display = 'none'; }
          });
        }
        if (i === to) {
          text.style.display = 'flex';
          gsap.to(text, { opacity: 1, pointerEvents: 'auto', duration: 0.3, ease: 'power2.out' });
        }
      });

      if (to > from) {
        for (let j = from + 1; j < to; j++) gsap.set(images[j], { clipPath: 'inset(0% 0% 100% 0%)' });
        if (animate) {
          gsap.killTweensOf(images[to]);
          gsap.to(images[to], { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'ease' });
        } else {
          gsap.set(images[to], { clipPath: 'inset(0% 0% 0% 0%)' });
        }
      } else {
        for (let j = from - 1; j > to; j--) gsap.set(images[j], { clipPath: 'inset(0% 0% 100% 0%)' });
        gsap.set(images[to], { clipPath: 'inset(0% 0% 0% 0%)' });
        if (animate) {
          gsap.killTweensOf(images[from]);
          gsap.to(images[from], { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.9, ease: 'ease' });
        } else {
          gsap.set(images[from], { clipPath: 'inset(0% 0% 100% 0%)' });
        }
      }
    }

    function initDesktop() {
      const scrollable = track.offsetHeight - window.innerHeight;
      const offsets = [
        0,
        Math.round(scrollable / 4),
        Math.round(scrollable / 4 * 2),
        Math.round(scrollable / 4 * 3),
      ];

      function getTabFromScroll() {
        const trackTop = track.getBoundingClientRect().top + window.scrollY;
        const scrolled = window.scrollY - trackTop;
        if (scrolled < 0) return 0;
        for (let i = offsets.length - 1; i >= 0; i--) {
          if (scrolled >= offsets[i]) return i;
        }
        return 0;
      }

      function onScroll() {
        if (clickInProgress) return;
        const tab = getTabFromScroll();
        if (tab !== active) setTab(tab, true);
      }

      window.addEventListener('scroll', onScroll);
      scrollListeners.push(onScroll);

      headings.forEach((heading, i) => {
        if (!heading) return;
        heading.style.cursor = 'pointer';
        heading._clickHandler = () => {
          if (i === active || clickInProgress) return;
          const trackTop = track.getBoundingClientRect().top + window.scrollY;
          const targetScroll = trackTop + offsets[i];
          clickInProgress = true;
          setTab(i, true);
          window.scrollTo({ top: targetScroll, behavior: 'instant' });
          setTimeout(() => { clickInProgress = false; }, 50);
        };
        heading.addEventListener('click', heading._clickHandler);
      });
    }

    function initMobile() {
      images.forEach((img, i) => {
        gsap.set(img, { clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' });
      });
      texts.forEach((text, i) => {
        if (!text) return;
        text.style.display = i === 0 ? 'flex' : 'none';
      });
      headings.forEach((heading, i) => {
        if (!heading) return;
        heading.style.cursor = 'pointer';
        heading._clickHandler = () => {
          if (i === active) return;
          setTab(i, true);
        };
        heading.addEventListener('click', heading._clickHandler);
      });
    }

    function cleanup() {
      headings.forEach(h => {
        if (!h || !h._clickHandler) return;
        h.removeEventListener('click', h._clickHandler);
        h._clickHandler = null;
      });
      scrollListeners.forEach(fn => window.removeEventListener('scroll', fn));
      scrollListeners = [];
      clickInProgress = false;
    }

    function setup() {
      cleanup();
      active = 0;
      gsap.set(headings, { opacity: 0.3 });
      gsap.set(headings[0], { opacity: 1 });
      gsap.set(texts, { opacity: 0, pointerEvents: 'none' });
      gsap.set(texts[0], { opacity: 1, pointerEvents: 'auto' });
      texts.forEach((text, i) => {
        if (!text) return;
        text.style.display = i === 0 ? 'flex' : 'none';
      });
      images.forEach((img, i) => {
        gsap.set(img, {
          clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
          zIndex: i + 1,
        });
      });

      if (isMob()) initMobile();
      else initDesktop();
    }

    setup();

    let wasM = isMob();
    window.addEventListener('resize', () => {
      const nowM = isMob();
      if (nowM !== wasM) { wasM = nowM; setup(); }
    });
  }

  window.Webflow ? window.Webflow.push(init) : window.addEventListener('DOMContentLoaded', init);
})();


/* ===== next script block ===== */


(function () {
  const el = document.querySelector('.bento-box-right.paralax .full-image');
  if (!el) return;

  el.style.willChange = 'transform';
  el.style.scale = '1.2';

  function onScroll() {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (vh - rect.top) / (vh + rect.height);
    const clamp = Math.min(Math.max(progress, 0), 1);
    const offset = (clamp - 0.5) * -24;
    el.style.transform = `translateY(${offset}%)`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ===== next script block ===== */


(function () {
  const outerWrapper = document.querySelector('.top-companies-right');
  const logo         = outerWrapper?.querySelector('img');
  const wrapper      = document.querySelector('.right-rotate-wrapper');
  const list         = document.querySelector('.right-companies-wrapper');

  if (!wrapper || !list || !logo) {
    console.error('[Rotate] nije pronađeno');
    return;
  }

  const oldTrack = wrapper.querySelector('div[style*="will-change"]');
  if (oldTrack) {
    while (oldTrack.firstChild) wrapper.insertBefore(oldTrack.firstChild, oldTrack);
    oldTrack.remove();
  }

  const TOTAL = 7;
  const PAUSE = 1200;
  const ANIM  = 400;

  const track = document.createElement('div');
  track.style.cssText = 'width:100%; will-change:transform; position:relative;';
  list.style.cssText  = 'display:flex; flex-direction:column; width:100%;';
  wrapper.insertBefore(track, wrapper.firstChild);
  track.appendChild(list);

  let items        = [];
  let offsets      = [];
  let heights      = [];
  let cachedTarget = 0;
  let startIdx     = 0;
  let startY       = 0;
  let currentIdx   = 0;
  let currentY     = 0;
  let stepCount    = 0;
  let animating    = false;
  let resizeTimer;

  function measure() {
    track.style.transition = 'none';
    track.style.transform  = 'translateY(0px)';
    track.offsetHeight;

    items   = Array.from(list.querySelectorAll('[data-anim="text-rotate"]'));
    offsets = items.map(el => el.offsetTop);
    heights = items.map(el => el.offsetHeight);

    const logoBCR    = logo.getBoundingClientRect();
    const wrapperBCR = wrapper.getBoundingClientRect();
    const logoCenter = logoBCR.top + logoBCR.height / 2;
    const wrapperTop = wrapperBCR.top;
    cachedTarget     = logoCenter - wrapperTop;

    let best = 0, bestDist = Infinity;
    for (let i = 0; i < TOTAL; i++) {
      const d = Math.abs(offsets[i] + heights[i] / 2 - cachedTarget);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    startIdx = best;
    startY   = -(offsets[startIdx] + heights[startIdx] / 2 - cachedTarget);

    if (items.length) {
      activate(currentIdx);
      setY(targetFor(currentIdx), false);
    }
  }

  function targetFor(idx) {
    return -(offsets[idx] + heights[idx] / 2 - cachedTarget);
  }

  function setY(y, anim) {
    track.style.transition = anim ? `transform ${ANIM}ms cubic-bezier(0.4,0,0.2,1)` : 'none';
    track.style.transform  = `translateY(${y}px)`;
    currentY = y;
  }

  function activate(idx) {
    items.forEach((el, i) => el.classList.toggle('is-active', i === idx));
  }

  function next() {
    if (animating) return;
    animating = true;

    const nextIdx = currentIdx + 1;
    stepCount++;

    currentIdx = nextIdx;
    activate(nextIdx);
    setY(targetFor(nextIdx), true);

    setTimeout(() => {
      if (stepCount === TOTAL) {
        stepCount = 0;
        items.forEach(el => el.style.transition = 'none');
        currentIdx = startIdx;
        activate(startIdx);
        setY(targetFor(startIdx), false);
        track.offsetHeight;
        items.forEach(el => el.style.transition = '');
      }
      animating = false;
      requestAnimationFrame(() => setTimeout(next, PAUSE));
    }, ANIM);
  }

  function init() {
    measure();

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 150);
    });

    items.forEach(el => el.classList.remove('is-active'));
    currentIdx = startIdx;
    stepCount  = 0;
    activate(startIdx);
    setY(startY, false);

    setTimeout(next, PAUSE);
  }

  document.fonts.ready.then(init);
})();


/* ===== next script block ===== */


window._roiState = { currSym: '$', currCd: 'USD' };
window._roiFlags = {
  USD: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#uf1)"><g clip-path="url(#uf2)"><mask id="ufm" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path d="M24 0H0V24H24V0Z" fill="white"/></mask><g mask="url(#ufm)"><path d="M9.40868 0.283725L9.62498 0.500025L8.87498 1.25003L8.23196 0.60705C7.06624 0.992437 5.98031 1.55123 5.00351 2.2536L5.24996 2.50001L4.49996 3.25001L4.16501 2.91506C3.79515 3.23434 3.4428 3.57334 3.11441 3.93491L3.67946 4.5L2.92946 5.25L2.43491 4.75537C2.15505 5.12423 1.89709 5.51021 1.66069 5.91071L2.25 6.49999L1.5 7.24999L1.14105 6.89104C0.410325 8.44136 0 10.1725 0 12H12V0C11.1099 0 10.2435 0.0998625 9.40868 0.283725Z" fill="#191977"/><path d="M18.6323 1.99999C16.7321 0.73725 14.4525 0 12 0V1.99999H18.6323Z" fill="white"/><path d="M12 4H20.942C20.2612 3.2396 19.4852 2.56685 18.6323 2H12V4Z" fill="#F0263C"/><path d="M12 5.99999H22.3906C21.9759 5.2834 21.4908 4.61298 20.942 4H12L12 5.99999Z" fill="white"/><path d="M12 7.99999H23.3145C23.0673 7.30106 22.7568 6.63266 22.3906 6H12V7.99999Z" fill="#F0263C"/><path d="M12 9.99999H23.8309C23.7154 9.31167 23.5419 8.64324 23.3145 8H12L12 9.99999Z" fill="white"/><path d="M12 12H24C24 11.3182 23.9402 10.6507 23.8309 10H12V12Z" fill="#F0263C"/><path d="M12 12H0C0 12.6818 0.0598125 13.3493 0.16905 14H23.8309C23.9401 13.3493 24 12.6817 24 12H12Z" fill="white"/><path d="M0.688364 16H23.3173C23.5447 15.3567 23.7182 14.6883 23.8337 14H0.171875C0.287412 14.6883 0.460964 15.3567 0.688364 16Z" fill="#F0263C"/><path d="M1.61135 18H22.3926C22.7588 17.3673 23.0693 16.6989 23.3165 16H0.6875C0.934625 16.6989 1.2452 17.3673 1.61135 18Z" fill="white"/><path d="M3.058 20H20.9419C21.4907 19.387 21.9759 18.7166 22.3906 18H1.60938C2.02409 18.7166 2.50919 19.387 3.058 20Z" fill="#F0263C"/><path d="M5.36444 22H18.6289C19.4819 21.4331 20.2579 20.7604 20.9386 20H3.05469C3.73542 20.7604 4.51146 21.4331 5.36444 22Z" fill="white"/><path d="M11.9994 24C14.4519 24 16.7315 23.2628 18.6317 22H5.36719C7.26735 23.2628 9.54694 24 11.9994 24Z" fill="#F0263C"/><path d="M2.92969 7.75L2.17969 8.5L2.92969 9.25L3.67969 8.5L2.92969 7.75Z" fill="white"/><path d="M5.875 7.75L5.125 8.5L5.875 9.25L6.625 8.5L5.875 7.75Z" fill="white"/><path d="M8.875 7.75L8.125 8.5L8.875 9.25L9.625 8.5L8.875 7.75Z" fill="white"/><path d="M5.875 3.75L5.125 4.5L5.875 5.25L6.625 4.5L5.875 3.75Z" fill="white"/><path d="M8.875 3.75L8.125 4.5L8.875 5.25L9.625 4.5L8.875 3.75Z" fill="white"/><path d="M1.5 9.75L0.75 10.5L1.5 11.25L2.25 10.5L1.5 9.75Z" fill="white"/><path d="M4.5 9.75L3.75 10.5L4.5 11.25L5.25 10.5L4.5 9.75Z" fill="white"/><path d="M7.44531 9.75L6.69531 10.5L7.44531 11.25L8.19531 10.5L7.44531 9.75Z" fill="white"/><path d="M10.4453 9.75L9.69531 10.5L10.4453 11.25L11.1953 10.5L10.4453 9.75Z" fill="white"/><path d="M4.5 5.75L3.75 6.5L4.5 7.25L5.25 6.5L4.5 5.75Z" fill="white"/><path d="M7.44531 5.75L6.69531 6.5L7.44531 7.25L8.19531 6.5L7.44531 5.75Z" fill="white"/><path d="M10.4453 5.75L9.69531 6.5L10.4453 7.25L11.1953 6.5L10.4453 5.75Z" fill="white"/><path d="M7.44531 1.75L6.69531 2.5L7.44531 3.25L8.19531 2.5L7.44531 1.75Z" fill="white"/><path d="M10.4453 1.75L9.69531 2.5L10.4453 3.25L11.1953 2.5L10.4453 1.75Z" fill="white"/></g></g></g><defs><clipPath id="uf1"><rect width="24" height="24" fill="white"/></clipPath><clipPath id="uf2"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
  GBP: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#gf1)"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F0F0F0"/><path d="M2.47739 4.6875C1.53478 5.91389 0.824015 7.32741 0.410156 8.86298H6.65287L2.47739 4.6875Z" fill="#0052B4"/><path d="M23.5864 8.86294C23.1725 7.32741 22.4617 5.91389 21.5191 4.6875L17.3438 8.86294H23.5864Z" fill="#0052B4"/><path d="M0.410156 15.1289C0.824063 16.6644 1.53483 18.078 2.47739 19.3043L6.65274 15.1289H0.410156Z" fill="#0052B4"/><path d="M19.3043 2.47744C18.078 1.53483 16.6645 0.824063 15.1289 0.410156V6.65283L19.3043 2.47744Z" fill="#0052B4"/><path d="M4.6875 21.5191C5.91389 22.4617 7.32741 23.1725 8.86294 23.5864V17.3438L4.6875 21.5191Z" fill="#0052B4"/><path d="M8.86289 0.410156C7.32736 0.824062 5.91384 1.53483 4.6875 2.47739L8.86289 6.65278V0.410156Z" fill="#0052B4"/><path d="M15.1289 23.5864C16.6644 23.1725 18.078 22.4617 19.3043 21.5191L15.1289 17.3438V23.5864Z" fill="#0052B4"/><path d="M17.3438 15.1289L21.5191 19.3043C22.4617 18.078 23.1725 16.6644 23.5864 15.1289H17.3438Z" fill="#0052B4"/><path d="M23.8984 10.4348H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347V23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/><path d="M15.1289 15.129L20.4837 20.4838C20.73 20.2376 20.9649 19.9802 21.1891 19.7134L16.6046 15.1289H15.1289V15.129Z" fill="#D80027"/><path d="M8.87048 15.1289L3.51562 20.4837C3.76181 20.73 4.0192 20.9649 4.28602 21.189L8.87048 16.6045V15.1289Z" fill="#D80027"/><path d="M8.87269 8.87058V8.87048L3.51788 3.51562C3.27159 3.76181 3.03666 4.0192 2.8125 4.28602L7.39702 8.87053H8.87269V8.87058Z" fill="#D80027"/><path d="M15.1289 8.87274L20.4838 3.51783C20.2376 3.27155 19.9802 3.03661 19.7134 2.8125L15.1289 7.39702V8.87274Z" fill="#D80027"/></g><defs><clipPath id="gf1"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>',
  EUR: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#003399"/><g transform="translate(12,12)"><path id="rStar" d="M0,-3.5 L0.8,-1.1 L3.3,-1.1 L1.4,0.4 L2.1,2.8 L0,1.4 L-2.1,2.8 L-1.4,0.4 L-3.3,-1.1 L-0.8,-1.1 Z" fill="#FFCC00" transform="rotate(0) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(30) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(60) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(90) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(120) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(150) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(180) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(210) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(240) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(270) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(300) translate(0,-5.5) scale(0.55)"/><use href="#rStar" transform="rotate(330) translate(0,-5.5) scale(0.55)"/></g></svg>'
};
window._roiCurrData = { USD: { sym: '$' }, GBP: { sym: '£' }, EUR: { sym: '€' } };
window._roiTrendSVG = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7" stroke="#0053EF" stroke-linecap="round" stroke-linejoin="round"/></svg>';
window._roiCheckSVG = '<svg class="roi-check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 13.4912L4.635 10.625L3.75 11.51L7.49875 15.2587L16.875 5.885L15.99 5L7.5 13.4912Z" fill="#00BC70"/></svg>';

/* FIXED: Clean animate function using CSS classes, flex layout, no inline letter-spacing */
window._roiAnimateNumber = function(el, finalText) {
  var match = finalText.match(/[\d,]+/);
  if (!match) { el.textContent = finalText; return; }
  var prefix = finalText.substring(0, finalText.indexOf(match[0]));
  var numStr = match[0];
  var digits = numStr.split('');
  el.innerHTML = '';
  var slots = [];
  if (prefix) {
    var p = document.createElement('span');
    p.className = 'roi-static-char';
    p.textContent = prefix;
    el.appendChild(p);
  }
  digits.forEach(function(char) {
    if (char === ',') {
      var comma = document.createElement('span');
      comma.className = 'roi-static-char';
      comma.textContent = ',';
      el.appendChild(comma);
      return;
    }
    var d = parseInt(char);
    var slot = document.createElement('span');
    slot.className = 'roi-digit-slot';
    var inner = document.createElement('span');
    inner.className = 'roi-digit-inner';
    for (var n = 0; n <= d; n++) {
      var numEl = document.createElement('span');
      numEl.className = 'roi-digit-num';
      numEl.textContent = n;
      inner.appendChild(numEl);
    }
    slot.appendChild(inner);
    el.appendChild(slot);
    slots.push(inner);
  });
  slots.forEach(function(inner, i) {
    var delay = 100 + i * 80;
    var duration = 1200 + i * 80;
    setTimeout(function() {
      inner.style.transition = 'transform ' + duration + 'ms cubic-bezier(0.25, 1, 0.5, 1)';
      inner.style.transform = 'translateY(calc(-100% + 1.15em))';
    }, delay);
  });
};

window._roiAnimateChart = function(container) {
  var barHeights = [13, 19, 28, 40, 53, 66, 78];
  container.innerHTML = '';
  barHeights.forEach(function(h, i) {
    var bar = document.createElement('div');
    bar.className = 'roi-chart-bar';
    bar.style.height = '0px';
    container.appendChild(bar);
    setTimeout(function() {
      bar.style.transition = 'height ' + (500 + i * 80) + 'ms cubic-bezier(0.34, 1.56, 0.64, 1)';
      bar.style.height = h + 'px';
    }, 50 + i * 60);
  });
};
window._roiToggleDropdown = function(e) {
  if (e) e.stopPropagation();
  var d = document.getElementById('roiCurrDropdown');
  var chevron = document.getElementById('roiChevron');
  var isOpen = d.style.display === 'flex';
  d.style.display = isOpen ? 'none' : 'flex';
  chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
};
window._roiSelectCurrency = function(code) {
  window._roiState.currSym = window._roiCurrData[code].sym;
  window._roiState.currCd = code;
  document.getElementById('roiCurrIcon').innerHTML = window._roiFlags[code];
  document.getElementById('roiCurrCode').textContent = code;
  document.getElementById('roiSym1').textContent = window._roiCurrData[code].sym;
  document.getElementById('roiSym2').textContent = window._roiCurrData[code].sym;
  document.getElementById('roiSuf1').textContent = code;
  document.getElementById('roiSuf2').textContent = code;
  ['USD','GBP','EUR'].forEach(function(c) {
    document.getElementById('roi-check-' + c).style.visibility = c === code ? 'visible' : 'hidden';
  });
  document.getElementById('roiCurrDropdown').style.display = 'none';
  document.getElementById('roiChevron').style.transform = '';
};
window._roiClearError = function(id) {
  var wrap = document.getElementById(id + 'Wrap');
  var err = document.getElementById(id + 'Error');
  if (wrap) wrap.classList.remove('error');
  if (err) err.classList.remove('visible');
};
window._roiOnInput = function(input) {
  var raw = input.value.replace(/[^0-9]/g, '');
  input.value = raw ? parseInt(raw).toLocaleString('en-US') : '';
  window._roiClearError(input.id);
  var wrap = document.getElementById(input.id + 'Wrap');
  if (wrap) { if (raw) { wrap.classList.add('filled'); } else { wrap.classList.remove('filled'); } }
};
window._roiFormatField = function(input) {
  var raw = input.value.replace(/[^0-9]/g, '');
  if (!raw) { input.value = ''; var wrap = document.getElementById(input.id + 'Wrap'); if (wrap) wrap.classList.remove('filled'); }
};
window._roiCalculate = function() {
  var turnoverRaw = document.getElementById('roiTurnover').value.replace(/[^0-9]/g, '');
  var aovRaw = document.getElementById('roiAov').value.replace(/[^0-9]/g, '');
  var hasError = false;
  if (!turnoverRaw) { document.getElementById('roiTurnoverWrap').classList.add('error'); document.getElementById('roiTurnoverError').classList.add('visible'); hasError = true; }
  if (!aovRaw) { document.getElementById('roiAovWrap').classList.add('error'); document.getElementById('roiAovError').classList.add('visible'); hasError = true; }
  if (hasError) return;
  var btn = document.getElementById('roiCalcBtn');
  btn.innerHTML = 'Calculating <div class="roi-spinner"></div>';
  btn.disabled = true;
  setTimeout(function() { btn.innerHTML = 'Calculate Your Revenue Uplift'; btn.disabled = false; window._roiShowResults(); }, 1600);
};
window._roiGetOrCreateOverlay = function() {
  var existing = document.getElementById('roiModalOverlay');
  if (existing) { document.body.appendChild(existing); return existing; }
  var overlay = document.createElement('div');
  overlay.id = 'roiModalOverlay';
  overlay.className = 'roi-modal-overlay';
  overlay.style.display = 'none';
  overlay.innerHTML = '<div class="roi-modal" onclick="event.stopPropagation()">' +
    '<button class="roi-modal-close" onclick="window._roiCloseModal()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></button>' +
    '<div class="roi-modal-top">' +
    '<div class="roi-modal-top-label">Total Revenue Uplift</div>' +
    '<div class="roi-amount-section"><div class="roi-modal-amount" id="roiModalAmount"></div><div id="roiChartBars"></div></div>' +
    '<div class="roi-modal-divider"></div>' +
    '<div class="roi-breakdown-rows" id="roiBreakdown"></div></div>' +
    '<div class="roi-info-box">' +
    '<div class="roi-info-item">' + window._roiCheckSVG + '<span id="roiInfoLine1"></span></div>' +
    '<div class="roi-info-item">' + window._roiCheckSVG + '<span>Unlocked through our smart orchestration capabilities, including Partial Approval, Smart Routing, Cascading, and more.</span></div>' +
    '<div class="roi-info-item">' + window._roiCheckSVG + '<span>Based on the inputted AOV, there may be additional revenue opportunities yet to be captured.</span></div></div>' +
    '<p class="roi-modal-sub">Book a demo to find out how much you could be leaving on the table.</p>' +
    '<a aria-label="staggering button" href="/book-a-demo" class="btn-animate-chars base---100 w-inline-block"><div class="btn-animate-chars__bg base---101"></div><span data-button-animate-chars="" class="btn-animate-chars__text base---102"><span style="transition-delay:0s">B</span><span style="transition-delay:0.01s">o</span><span style="transition-delay:0.02s">o</span><span style="transition-delay:0.03s">k</span><span style="transition-delay:0.04s;white-space:pre"> </span><span style="transition-delay:0.05s">a</span><span style="transition-delay:0.06s;white-space:pre"> </span><span style="transition-delay:0.07s">D</span><span style="transition-delay:0.08s">e</span><span style="transition-delay:0.09s">m</span><span style="transition-delay:0.1s">o</span></span></a></div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) window._roiCloseModal(); });
  document.body.appendChild(overlay);
  return overlay;
};
window._roiShowResults = function() {
  var turnover = parseInt(document.getElementById('roiTurnover').value.replace(/[^0-9]/g, '')) || 0;
  var partial = Math.round(turnover * 0.01);
  var smart = Math.round(turnover * 0.03);
  var cascade = Math.round(turnover * 0.01);
  var total = partial + smart + cascade;
  var sym = window._roiState.currSym;
  function fmt(n) { return sym + ' ' + Math.round(n).toLocaleString('en-US'); }
  var overlay = window._roiGetOrCreateOverlay();
  document.getElementById('roiInfoLine1').textContent = 'Your estimated revenue uplift with Pay.com could be approximately ' + fmt(total);
  var rows = [
    { label: 'Partial Approval', pct: '1%', val: partial },
    { label: 'Smart Routing', pct: '3%', val: smart },
    { label: 'Cascading', pct: '1%', val: cascade }
  ];
  var bHtml = '';
  rows.forEach(function(r) {
    bHtml += '<div class="roi-breakdown-row"><div class="roi-row-left">' + r.label + ' <span class="roi-row-badge">' + window._roiTrendSVG + ' ' + r.pct + '</span></div><div class="roi-row-amount">' + fmt(r.val) + '</div></div>';
  });
  document.getElementById('roiBreakdown').innerHTML = bHtml;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    window._roiAnimateNumber(document.getElementById('roiModalAmount'), fmt(total));
    window._roiAnimateChart(document.getElementById('roiChartBars'));
  }, 50);
};
window._roiCloseModal = function() {
  var overlay = document.getElementById('roiModalOverlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
};
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') window._roiCloseModal(); });
document.addEventListener('click', function(e) {
  var btn = document.getElementById('roiCurrBtn'), dd = document.getElementById('roiCurrDropdown'), chevron = document.getElementById('roiChevron');
  if (!btn || !dd) return;
  if (!btn.contains(e.target) && !dd.contains(e.target)) { dd.style.display = 'none'; if (chevron) chevron.style.transform = ''; }
});
(function() {
  Object.keys(window._roiFlags).forEach(function(code) { var el = document.getElementById('flag-opt-' + code); if (el) el.innerHTML = window._roiFlags[code]; });
  var icon = document.getElementById('roiCurrIcon'); if (icon) icon.innerHTML = window._roiFlags['USD'];
  window._roiGetOrCreateOverlay();
})();


/* ===== next script block ===== */


 document.addEventListener("DOMContentLoaded", () => {
  const containerSel    = "#swiper-1";
  const counterSel      = "#swiper-counter-1";
  const navSel          = ".swiper-navigation";
  const dotTemplateSel  = ".swiper-nav-dot";
  const dotActiveClass  = "is-active";
  const useLeadingZeros = true;

  const prevBtn = document.querySelector("#btn-prev");
  const nextBtn = document.querySelector("#btn-next");
  if (prevBtn) { prevBtn.style.opacity = "0"; prevBtn.style.pointerEvents = "none"; }
  if (nextBtn) { nextBtn.style.opacity = "0"; nextBtn.style.pointerEvents = "none"; }

  const swiper = new Swiper(containerSel, {
    slidesPerView: 1.15,
    spaceBetween: 16,
    freeMode: false,
    speed: 800,
    a11y: {
      enabled: true,
      slideRole: "listitem",
    },
    navigation: { nextEl: "#btn-next", prevEl: "#btn-prev" },
    scrollbar:  { el: "#scrollbar-1" },
    pagination: { el: "#pagination-1", clickable: true },
    breakpoints: {
      0:    { slidesPerView: 1.15, freeMode: false, spaceBetween: 16 },
      768:  { slidesPerView: 1.15, freeMode: true,  spaceBetween: 16 },
      992:  { slidesPerView: 3,    freeMode: true,  spaceBetween: 24 },
      1500: { slidesPerView: 3,    freeMode: true,  spaceBetween: 32 },
      1920: { slidesPerView: 3,    freeMode: true,  spaceBetween: 32 },
    },
    on: {
      init(sw) {
        updateCounter(sw);
        buildDots(sw);
        const swiperWrapper = document.querySelector('#swiper-1 .swiper-wrapper');
        if (swiperWrapper) swiperWrapper.setAttribute('role', 'list');
      },
      slideChange(sw) { updateCounter(sw); updateArrows(sw); updateDots(sw); },
      resize(sw)      { updateCounter(sw); buildDots(sw); },
      breakpoint(sw)  { updateCounter(sw); buildDots(sw); },
    },
  });

  const swiperEl = document.querySelector(containerSel);
  if (swiperEl) swiperEl.style.overflow = 'visible';

  function getVisible(sw) {
    const v = sw.params.slidesPerView;
    if (v === 'auto' && typeof sw.slidesPerViewDynamic === 'function') {
      return Math.max(1, Math.floor(sw.slidesPerViewDynamic('current', true)));
    }
    if (typeof v === 'number') return v < 2 ? 1 : Math.floor(v);
    return 1;
  }

  function pad(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCounter(sw) {
    const total   = sw.slides.length;
    const visible = getVisible(sw);
    const end     = Math.min(total, sw.activeIndex + visible);
    const el      = document.querySelector(counterSel);
    if (!el) return;
    el.textContent = useLeadingZeros ? `${pad(end)}/${pad(total)}` : `${end}/${total}`;
  }

  function updateArrows(sw) {
    const prev = document.querySelector("#btn-prev");
    const next = document.querySelector("#btn-next");
    if (!prev || !next) return;
    prev.style.opacity       = sw.isBeginning ? "0" : "1";
    prev.style.pointerEvents = sw.isBeginning ? "none" : "auto";
    next.style.opacity       = sw.isEnd ? "0" : "1";
    next.style.pointerEvents = sw.isEnd ? "none" : "auto";
  }

  function buildDots(sw) {
    const nav = document.querySelector(navSel);
    if (!nav) return;
    const template = nav.querySelector(dotTemplateSel);
    if (!template) return;
    const total    = sw.slides.length;
    const visible  = getVisible(sw);
    const dotCount = Math.max(1, total - visible + 1);
    nav.querySelectorAll(dotTemplateSel).forEach(d => d.remove());
    for (let i = 0; i < dotCount; i++) {
      const dot = template.cloneNode(true);
      dot.classList.remove(dotActiveClass);
      if (i === sw.activeIndex) dot.classList.add(dotActiveClass);
      dot.style.cursor = "pointer";
      dot.addEventListener("click", () => sw.slideTo(i));
      nav.appendChild(dot);
    }
  }

  function updateDots(sw) {
    const nav = document.querySelector(navSel);
    if (!nav) return;
    const dots = nav.querySelectorAll(dotTemplateSel);
    dots.forEach((dot, i) => {
      dot.classList.toggle(dotActiveClass, i === sw.activeIndex);
    });
  }

  const sliderComponent = document.querySelector(".slider-component");
  if (sliderComponent) {
    sliderComponent.addEventListener("mouseenter", () => updateArrows(swiper));
    sliderComponent.addEventListener("mouseleave", () => {
      const prev = document.querySelector("#btn-prev");
      const next = document.querySelector("#btn-next");
      if (prev) { prev.style.opacity = "0"; prev.style.pointerEvents = "none"; }
      if (next) { next.style.opacity = "0"; next.style.pointerEvents = "none"; }
    });
  }

  const wrappers = document.querySelectorAll('.swiper-image-wrapper');
  wrappers.forEach(function(wrapper) {
    const img = wrapper.querySelector('[data-anim="paralax"]');
    if (!img) return;
    img.style.willChange = 'transform';
    function updateParallax() {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const inView = rect.bottom > 0 && rect.top < vh;
      if (!inView) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamp = Math.min(Math.max(progress, 0), 1);
      const offset = (clamp - 0.5) * -8;
      img.style.transform = 'translateY(' + offset + '%)';
    }
    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
  });
});


/* ===== next script block ===== */


(function () {
  document.querySelectorAll('.faq-paragraph-wrapper').forEach(w => {
    w.classList.remove('is-active');
    w.style.removeProperty('height');
  });
  const items = document.querySelectorAll('.faq-item, .faq-item---first');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const wrapper = item.querySelector('.faq-paragraph-wrapper');
      if (!wrapper) return;
      const isAlreadyActive = wrapper.classList.contains('is-active');
      document.querySelectorAll('.faq-paragraph-wrapper.is-active')
        .forEach(w => w.classList.remove('is-active'));
      document.querySelectorAll('.faq-item.is-open, .faq-item---first.is-open')
        .forEach(el => el.classList.remove('is-open'));
      if (!isAlreadyActive) {
        wrapper.classList.add('is-active');
        item.classList.add('is-open');
      }
    });
  });
})();


/* ===== next script block ===== */


(function () {
  const buttons = document.querySelectorAll('.cta-button');
  const bgs     = document.querySelectorAll('.cta-bg-wrapper');

  // Postavi --btn-width kao CSS varijablu na svaki button
  // da translateX zna do kud da ide
  function setWidths() {
    buttons.forEach(btn => {
      btn.style.setProperty('--btn-width', btn.offsetWidth + 'px');
    });
  }

  setWidths();
  window.addEventListener('resize', setWidths);

  // bg hover
  buttons.forEach((btn, i) => {
    const bg = bgs[i] || document.querySelector('.cta-bg-wrapper');
    if (!bg) return;
    btn.addEventListener('mouseenter', () => bg.style.opacity = '1');
    btn.addEventListener('mouseleave', () => bg.style.opacity = '0');
  });
})();


/* ===== next script block ===== */


var Webflow = Webflow || [];
Webflow.push(function () {
    var $body = $(document.body);
    var scrollPosition = 0;

    $('[scroll="disable"]').on('click', function () {
        var oldWidth = $body.innerWidth();
        scrollPosition = window.pageYOffset;
        $body.css('overflow', 'hidden');
        $body.css('position', 'fixed');
        $body.css('top', `-${scrollPosition}px`);
        $body.width(oldWidth);
    });
    $('[scroll="enable"]').on('click', function () {
        if ($body.css('overflow') != 'hidden') { scrollPosition = window.pageYOffset; }
        $body.css('overflow', '');
        $body.css('position', '');
        $body.css('top', '');
        $body.width('');
        $(window).scrollTop(scrollPosition);
    });
    $('[scroll="both"]').on('click', function () {
        if ($body.css('overflow') !== 'hidden') {
            var oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css('overflow', 'hidden');
            $body.css('position', 'fixed');
            $body.css('top', `-${scrollPosition}px`);
            $body.width(oldWidth);
        } else {
            $body.css('overflow', '');
            $body.css('position', '');
            $body.css('top', '');
            $body.width('');
            $(window).scrollTop(scrollPosition);
        }
    });
});


/* ===== next script block ===== */


var externalLinks = document.querySelectorAll('[external-link = "true"]');
if (externalLinks.length > 0) {
  externalLinks.forEach((link) => {
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('target', '_blank');
  });
};


/* ===== next script block ===== */


  var copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    copyrightElement.replaceWith(document.createTextNode(new Date().getFullYear()));
  }


/* ===== next script block ===== */


  document.addEventListener('DOMContentLoaded', function() {
  var firstFaq = document.querySelector('.faq-item---first');
  if (firstFaq) firstFaq.click();
});
