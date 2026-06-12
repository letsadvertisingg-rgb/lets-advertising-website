JSON.stringify({
  styles: [...document.querySelectorAll('style')].map(s => s.textContent).filter(t => t && t.length > 40),
  scripts: [...document.querySelectorAll('script:not([src])')].map(s => s.textContent).filter(t => t && t.length > 100 && !t.includes('WebFont.load') && !t.includes('gtag')),
  scriptSrcs: [...document.querySelectorAll('script[src]')].map(s => s.src),
})
