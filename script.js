const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Restaurant Consultants 360 consultation inquiry');
  const body = encodeURIComponent(
`Hello Cameron,

I'd like to request a consultation.

Name: ${form.get('name')}
Email: ${form.get('email')}
Restaurant: ${form.get('restaurant') || 'Not provided'}
Stage: ${form.get('stage') || 'Not specified'}

How you can help:
${form.get('message')}

Thank you.`
  );
  document.getElementById('form-status').textContent = 'Your email app should open with the inquiry prepared. Please review and send it.';
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
