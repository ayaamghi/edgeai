import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import ToggleTheme from './ToggleTheme';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tool', label: 'Tool' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-brand transition-colors">
            Edge Labs
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand ${
                  isActive(link.path)
                    ? 'bg-brand/10 text-brand'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-gray-300 dark:border-gray-700">
              <ToggleTheme />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
