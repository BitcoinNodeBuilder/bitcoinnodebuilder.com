
(function(){
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if(menuBtn){
    menuBtn.addEventListener('click', function(){
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  fetch('site.config.json')
    .then(r => r.json())
    .then(cfg => {
      const btcpayUrl = cfg.btcpay_pos_url || '#';
      [ 'supportLink', 'supportLinkHero', 'supportLinkCallout', 'supportLinkPig', 'supportLinkAbout' ]
        .forEach(id => {
          const el = document.getElementById(id);
          if(el){ el.href = btcpayUrl; }
        });
      const subBtn = document.getElementById('substackBtn');
      if(subBtn){ subBtn.href = (cfg.substack_url || 'https://substack.com'); }
    })
    .catch(() => {});
})();
