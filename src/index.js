import './style.css';
import { pageOne, pageTwo, pageThree } from './pages.js';
// main page

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  const initialPage = `<nav class="navbar">
    <ul class="links">
      <li class="link">One</li>
      <li class="link">Two</li>
      <li class="link">Three</li>
    </ul>
    </nav>
    <main>
    ${pageOne}
    </main>`;
  container.innerHTML = initialPage;
  const links = document.querySelectorAll('.link');

  links.forEach((link) => {
    link.addEventListener('click', test);
  });
});

function test(e) {
  const target = e.currentTarget.textContent;
  const main = document.querySelector('main');

  switch (target) {
    case 'One':
      main.innerHTML = pageOne;
      break;
    case 'Two':
      main.innerHTML = pageTwo;
      break;
    case 'Three':
      main.innerHTML = pageThree;
      break;
  }
}
