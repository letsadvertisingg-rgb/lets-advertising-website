JSON.stringify({
  title: document.title,
  metaDescription: document.querySelector('meta[name="description"]')?.content,
  ogImage: document.querySelector('meta[property="og:image"]')?.content,
  framework: {
    next: !!window.__NEXT_DATA__ || !!document.getElementById('__next'),
    nuxt: !!window.__NUXT__,
    gatsby: !!document.getElementById('___gatsby'),
    bodyClasses: document.body.className,
    htmlClasses: document.documentElement.className,
  },
  smoothScroll: {
    lenis: !!document.querySelector('.lenis, [data-lenis]'),
    locomotive: !!document.querySelector('.locomotive-scroll, [data-scroll-container]'),
    htmlScrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
  },
  fontLinks: [...document.querySelectorAll('link[rel="stylesheet"], link[rel="preload"][as="font"], style')].map(l => l.href || (l.tagName === 'STYLE' ? '(inline style ' + (l.textContent||'').slice(0,80).replace(/\s+/g,' ') + ')' : null)).filter(Boolean).slice(0, 40),
  fontsUsed: [...new Set([...document.querySelectorAll('h1,h2,h3,h4,p,a,button,span,body,div')].slice(0, 800).map(el => getComputedStyle(el).fontFamily))],
  images: [...document.querySelectorAll('img')].map(img => ({
    src: img.currentSrc || img.src,
    srcset: img.srcset ? img.srcset.slice(0, 300) : undefined,
    alt: img.alt,
    w: img.naturalWidth, h: img.naturalHeight,
    loading: img.loading,
    parentClasses: (img.parentElement?.className || '').toString().slice(0, 100),
    position: getComputedStyle(img).position,
  })),
  videos: [...document.querySelectorAll('video')].map(v => ({
    src: v.src || v.querySelector('source')?.src, poster: v.poster,
    autoplay: v.autoplay, loop: v.loop, muted: v.muted,
  })),
  backgroundImages: [...document.querySelectorAll('*')].filter(el => {
    const bg = getComputedStyle(el).backgroundImage;
    return bg && bg !== 'none' && bg.includes('url(');
  }).map(el => ({
    url: getComputedStyle(el).backgroundImage.slice(0, 300),
    el: el.tagName + '.' + (el.className||'').toString().split(' ')[0],
  })).slice(0, 60),
  svgCount: document.querySelectorAll('svg').length,
  favicons: [...document.querySelectorAll('link[rel*="icon"], link[rel="manifest"], link[rel="apple-touch-icon"]')].map(l => ({ rel: l.rel, href: l.href, sizes: l.sizes?.toString() })),
  bodyBg: getComputedStyle(document.body).backgroundColor,
  bodyColor: getComputedStyle(document.body).color,
  bodyFont: getComputedStyle(document.body).fontFamily,
})
