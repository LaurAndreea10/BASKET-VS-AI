(() => {
  const MAIN_URL = 'https://laurandreea10.github.io/BASKET-VS-AI/';
  const ENHANCED_URL = 'https://laurandreea10.github.io/BASKET-VS-AI/enhanced.html';

  function mountEnhancedProBanner() {
    if (document.querySelector('[data-enhanced-pro-banner]')) return;

    document.title = 'Basket vs AI — Enhanced Pro version';

    const metaDescription = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content =
      'Enhanced Pro version of Basket vs AI with career hub, AI opponents, competitions, upgrades, bank shots, wind, perfect shots, and mobile controls.';
    if (!metaDescription.parentNode) document.head.append(metaDescription);

    const style = document.createElement('style');
    style.textContent = `
      .enhanced-pro-banner{
        width:100%;max-width:1040px;margin:0 auto 10px;padding:12px 14px;border:1px solid rgba(255,210,59,.32);
        border-radius:18px;background:linear-gradient(135deg,rgba(255,210,59,.13),rgba(74,217,255,.10));
        color:#f4f7ff;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;
        box-shadow:0 14px 36px rgba(0,0,0,.28);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif
      }
      .enhanced-pro-banner strong{display:block;font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:#ffd23b}
      .enhanced-pro-banner span{display:block;margin-top:2px;font-size:13px;color:rgba(244,247,255,.72)}
      .enhanced-pro-banner nav{display:flex;gap:8px;flex-wrap:wrap}
      .enhanced-pro-banner a{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:999px;
        padding:9px 12px;font-weight:850;font-size:13px;color:#f4f7ff;border:1px solid rgba(255,255,255,.14);background:rgba(18,23,32,.78)}
      .enhanced-pro-banner a[aria-current="page"]{background:linear-gradient(135deg,#ff7a2a,#d65a18);color:#111;border-color:#ff7a2a}
      @media(max-width:760px){.enhanced-pro-banner{align-items:flex-start}.enhanced-pro-banner nav{width:100%}.enhanced-pro-banner a{flex:1}}
    `;

    const banner = document.createElement('section');
    banner.className = 'enhanced-pro-banner';
    banner.dataset.enhancedProBanner = 'true';
    banner.innerHTML = `
      <div>
        <strong>Enhanced Pro version</strong>
        <span>Career hub, AI opponents, upgrades, competitions, bank shots, wind and mobile controls.</span>
      </div>
      <nav aria-label="Basket vs AI versions">
        <a href="${MAIN_URL}">Main version</a>
        <a href="${ENHANCED_URL}" aria-current="page">Enhanced Pro version</a>
      </nav>
    `;

    document.head.append(style);
    document.body.prepend(banner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountEnhancedProBanner, { once: true });
  } else {
    mountEnhancedProBanner();
  }
})();
