import Home from './Pages/Home';
import About from './Pages/About';
import Deskripsi from './Pages/Deskripsi';
import MonAlatPg from './Pages//Datamonitor';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/datamonitoring', component: <MonAlatPg/> },
  { path: '/deskripsialat', component: <Deskripsi /> },

];

export default routes;