import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Datamonitor';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/datamonitoring', component: <Contact /> },
];

export default routes;