// src/router.jsx
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/skills', element: Skills },
  { path: '/projects', element: Projects },
  { path: '/blog', element: Blog },
  { path: '/blog/:slug', element: BlogPost },
  { path: '/resume', element: Resume },
  { path: '/contact', element: Contact },
];

export default routes;
