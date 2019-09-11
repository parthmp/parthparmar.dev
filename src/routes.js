
import Home from './components/HomePage';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

export const routes = [
    { path: '/', component: Home },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact },
    { path: '/portfolio', component: Portfolio },
    { path : '*', component: NotFound }
];
