import { Button } from '@/components/ui/button';
import { Calculator, Users, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="text-accent">{t('hero.subtitle')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-strong"
            >
              <Link to="/assessment">
                <Calculator className="w-5 h-5 mr-2" />
                Take Free Assessment
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('hero.consultations')}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('hero.rating')}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">{t('hero.regulated')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;