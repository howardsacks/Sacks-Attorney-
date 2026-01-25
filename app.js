(function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navLinks');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      });
    });
  }

  // Contact form fallback: if no endpoint, use mailto
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      const action = (form.getAttribute('action')||'').trim();
      if(action && action !== '#') return; // allow normal submit
      e.preventDefault();

      const name = (document.getElementById('name')||{}).value || '';
      const email = (document.getElementById('email')||{}).value || '';
      const phone = (document.getElementById('phone')||{}).value || '';
      const service = (document.getElementById('service')||{}).value || '';
      const message = (document.getElementById('message')||{}).value || '';

      const subject = encodeURIComponent('Website Enquiry - ' + (service || 'General'));
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        (phone ? ('Phone: ' + phone + '\n') : '') +
        (service ? ('Service: ' + service + '\n\n') : '\n') +
        message
      );

      window.location.href = 'mailto:info@sackslaw.co.za?subject=' + subject + '&body=' + body;
      alert('Opening your email app. If it doesn\'t open, please email info@sackslaw.co.za.');
    });
  }
})();