import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ML Portfolio</Link>
        <ul className="flex gap-4">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}