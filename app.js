import {Router} from '@vaadin/router';

// setup a Router instance
const outlet = document.querySelector('output');
const body = document.querySelector('body');
const sideBar = document.querySelector('side-bar');

sideBar.addEventListener('darkMode', (e) => {
  console.log(e);
  //outlet.classList.add("dark");
  body.classList.add("dark");
  outlet.classList.add("dark");
});
sideBar.addEventListener('lightMode', (e) => {
  console.log(e);
  //outlet.classList.add("dark");
  body.classList.remove("dark");
  outlet.classList.add("dark");
});
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'about-me'},
  {path: '/aboutme', component: 'about-me'},
  {path: '/resume', component: 'resume-page'},
]);