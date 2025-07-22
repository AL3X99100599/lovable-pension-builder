import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">PE</span>
              </div>
              <span className="font-heading text-lg font-bold">Pension Expert</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.consultation')}</Link></li>
              <li><Link to="/tools/pension-gap-calculator" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.calculator')}</Link></li>
              <li><Link to="/hub/private-pension" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.private')}</Link></li>
              <li><Link to="/hub/riester-vs-rourup" className="text-primary-foreground/80 hover:text-accent transition-colors">Riester vs Rürup</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hub" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.guide')}</Link></li>
              <li><Link to="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.blog')}</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/datenschutz" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/impressum" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.imprint')}</Link></li>
              <li><Link to="/agb" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('footer.terms')}</Link></li>
              <li><span className="text-primary-foreground/60">BaFin Reg: 12345678</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;