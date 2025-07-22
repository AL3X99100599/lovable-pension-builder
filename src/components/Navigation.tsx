import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.hub'), href: '/hub' },
    { name: t('nav.tools'), href: '/tools' },
    { name: 'Assessment', href: '/assessment' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.about'), href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PE</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Pension Expert
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switch & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2"
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-cta hover:opacity-90">
              {t('nav.consultation')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base font-medium",
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 mb-2"
                  onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
                <Button className="w-full bg-gradient-cta hover:opacity-90">
                  {t('nav.consultation')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;