
import Home from './components/HomePage';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

export const routes = [
    { path: '/', component: Home },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact },
    { path : '*', component: NotFound }
];
