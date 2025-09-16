import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/contexts/NavigationContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  LinkIcon 
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setDirection, setCurrentPage } = useNavigation();

  const navigation = [
    { name: 'Home', href: '/', index: 0 },
    { name: 'Features', href: '/features', index: 1 },
    { name: 'Industries', href: '/industries', index: 2 },
    { name: 'Directory', href: '/directory', index: 3 },
    { name: 'Contact', href: '/contact', index: 4 },
  ];

  const currentIndex = navigation.findIndex(item => item.href === location.pathname);

  const handleNavigation = (href: string, index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setDirection(direction);
    setCurrentPage(href.substring(1) || 'home');
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/"
              onClick={() => handleNavigation('/', 0)}
              className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-accent transition-colors"
            >
              <LinkIcon className="h-8 w-8" />
              <span>ChainLink Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary bg-highlight'
                      : 'text-foreground hover:text-primary hover:bg-highlight/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-hero-outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="btn-hero" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-border/50">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.index)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary bg-highlight'
                      : 'text-foreground hover:text-primary hover:bg-highlight/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="outline" className="w-full btn-hero-outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="w-full btn-hero" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;