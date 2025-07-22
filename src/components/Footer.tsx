import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
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
              Expert pension consultation for Germany's complex retirement system.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Pension Consultation</Link></li>
              <li><Link to="/tools/pension-gap-calculator" className="text-primary-foreground/80 hover:text-accent transition-colors">Pension Calculator</Link></li>
              <li><Link to="/hub/private-pension" className="text-primary-foreground/80 hover:text-accent transition-colors">Private Pension</Link></li>
              <li><Link to="/hub/riester-vs-rourup" className="text-primary-foreground/80 hover:text-accent transition-colors">Riester vs Rürup</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hub" className="text-primary-foreground/80 hover:text-accent transition-colors">Pension Guide</Link></li>
              <li><Link to="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/datenschutz" className="text-primary-foreground/80 hover:text-accent transition-colors">Datenschutzerklärung</Link></li>
              <li><Link to="/impressum" className="text-primary-foreground/80 hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link to="/agb" className="text-primary-foreground/80 hover:text-accent transition-colors">AGB</Link></li>
              <li><span className="text-primary-foreground/60">BaFin Reg: 12345678</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Pension Expert Germany. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;