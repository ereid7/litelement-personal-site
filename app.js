import {Router} from '@vaadin/router';

// setup a Router instance
const outlet = document.querySelector('output');
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'about-me'},
  {path: '/aboutme', component: 'about-me'},
  {path: '/resume', component: 'resume-page'},
]);