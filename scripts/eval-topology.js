JSON.stringify((() => {
  const out = [];
  const walk = (el, depth) => {
    if (depth > 3) return;
    for (const child of el.children) {
      const tag = child.tagName.toLowerCase();
      if (['script', 'style', 'link', 'noscript'].includes(tag)) continue;
      const cs = getComputedStyle(child);
      const rect = child.getBoundingClientRect();
      const scrollY = window.scrollY;
      out.push({
        depth,
        tag,
        id: child.id || undefined,
        classes: (child.className || '').toString().slice(0, 120),
        top: Math.round(rect.top + scrollY),
        height: Math.round(rect.height),
        position: cs.position !== 'static' ? cs.position : undefined,
        zIndex: cs.zIndex !== 'auto' ? cs.zIndex : undefined,
        bg: cs.backgroundColor !== 'rgba(0, 0, 0, 0)' ? cs.backgroundColor : undefined,
        text: child.querySelector('h1,h2,h3')?.textContent?.trim().slice(0, 80) || undefined,
      });
      walk(child, depth + 1);
    }
  };
  walk(document.body, 0);
  return out.filter(s => s.height > 10 || s.position === 'fixed' || s.position === 'sticky');
})())
