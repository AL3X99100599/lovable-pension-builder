import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.hub': 'Ratgeber',
    'nav.tools': 'Rechner',
    'nav.services': 'Beratung',
    'nav.resources': 'Ressourcen',
    'nav.about': 'Über uns',
    'nav.consultation': 'Kostenlose Beratung',
    
    // Hero Section
    'hero.title': 'Private & Gesetzliche Rente—',
    'hero.subtitle': 'Einfach erklärt',
    'hero.description': 'Navigieren Sie durch Deutschlands komplexes Rentensystem mit Vertrauen. Erhalten Sie Expertenberatung, die auf Ihre Situation zugeschnitten ist.',
    'hero.cta': 'Berechne deine Rentenlücke',
    'hero.consultations': '2000+ Beratungen',
    'hero.rating': '★★★★★ 4,9/5 Bewertung',
    'hero.regulated': 'BaFin Reguliert',
    
    // Benefits Section
    'benefits.title': 'Warum Pension Expert wählen?',
    'benefits.expert.title': 'Expertenberatung',
    'benefits.expert.desc': 'Zertifizierte Finanzberater mit Spezialisierung auf das deutsche Rentensystem',
    'benefits.personal.title': 'Persönliche Analyse',
    'benefits.personal.desc': 'Individuelle Rentenlückenanalyse und maßgeschneiderte Lösungen',
    'benefits.transparent.title': 'Transparente Beratung',
    'benefits.transparent.desc': 'Keine versteckten Gebühren, klare Empfehlungen ohne Verkaufsdruck',
    
    // Summary Section
    'summary.title': 'Das Wichtigste in Kürze',
    'summary.content': 'Deutschland hat ein 3-Säulen-Rentensystem. Die gesetzliche Rente deckt nur etwa 48% Ihres letzten Einkommens ab. Die meisten Menschen benötigen zusätzliche private Altersvorsorge für einen komfortablen Ruhestand. Unser kostenloser Rechner zeigt Ihnen, wie groß Ihre Rentenlücke ist.',
    
    // FAQ Section
    'faq.title': 'Häufig gestellte Fragen',
    'faq.q1': 'Wie viel Rente bekomme ich tatsächlich in Deutschland?',
    'faq.a1': 'Ihre Rente hängt von Ihren Beitragsjahren, dem Durchschnittseinkommen und der Rentenart ab. Die gesetzliche Rente ersetzt typischerweise nur 48% Ihres Vorruhestandseinkommens. Die meisten Menschen benötigen zusätzliche private Altersvorsorge.',
    'faq.q2': 'Soll ich Riester oder Rürup wählen?',
    'faq.a2': 'Das hängt von Ihrem Beschäftigungsstatus, Einkommen und Ihrer Steuersituation ab. Riester profitiert Angestellten und bietet Flexibilität, während Rürup für Gutverdiener und Selbstständige mit besseren Steuervorteilen aber weniger Flexibilität geeignet ist.',
    'faq.q3': 'Wann sollte ich mit der Altersvorsorge beginnen?',
    'faq.a3': 'Je früher, desto besser. Mit der Altersvorsorge in den 20ern oder 30ern zu beginnen, bringt Ihnen maximalen Nutzen durch Zinseszins und Steuervorteile. Es ist jedoch nie zu spät, Ihre Altersvorsorgenstrategie zu optimieren.',
    
    // Calculator Page
    'calc.title': 'Rentenlücken-Rechner',
    'calc.subtitle': 'Berechnen Sie, wie viel Sie für einen komfortablen Ruhestand sparen müssen',
    'calc.cta.title': 'Rechner-Integration',
    'calc.cta.desc': 'Dies wird durch Ihr tatsächliches Rentenlücken-Rechner-Widget ersetzt',
    'calc.results': 'Ihre Ergebnisse',
    'calc.gap': 'Geschätzte monatliche Rentenlücke',
    'calc.gap.desc': 'Zusätzliche monatliche Ersparnisse für komfortablen Ruhestand benötigt',
    'calc.current': 'Aktuelle Rente',
    'calc.target': 'Ziel-Einkommen',
    'calc.consultation': 'Persönliche Beratung erhalten',
    'calc.scarcity': 'Nur 5 neue Fälle pro Woche - Buchen Sie jetzt Ihren Termin',
    'calc.reading': 'Empfohlene Lektüre',
    'calc.read': 'Ratgeber lesen',
    
    // Hub Page  
    'hub.title': 'Der ultimative Leitfaden zum deutschen Rentensystem 2025',
    'hub.subtitle': 'Verstehen Sie Deutschlands komplexes Rentensystem und optimieren Sie Ihre Altersvorsorge',
    'hub.tldr': 'Deutschland hat ein 3-Säulen-System: Gesetzliche Rente (48% Ersatzrate), betriebliche Altersvorsorge und private Vorsorge. Die meisten Menschen benötigen zusätzliche private Ersparnisse für einen komfortablen Ruhestand.',
    'hub.navigation': 'Schnellnavigation',
    'hub.guides': 'Spezielle Ratgeber',
    'hub.learn.more': 'Mehr erfahren',
    'hub.calculate.cta': 'Berechnen Sie Ihre persönliche Rentenlücke',
    'hub.calculate.desc': 'Finden Sie heraus, wie viel Sie zusätzlich sparen müssen',
    'hub.calculate.btn': 'Jetzt berechnen',
    
    // Footer
    'footer.services': 'Dienstleistungen',
    'footer.consultation': 'Rentenberatung',
    'footer.calculator': 'Rentenrechner',
    'footer.private': 'Private Rente',
    'footer.resources': 'Ressourcen',
    'footer.guide': 'Rentenratgeber',
    'footer.blog': 'Blog',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.imprint': 'Impressum',
    'footer.terms': 'AGB',
    'footer.copyright': '© 2025 Pension Expert Germany. Alle Rechte vorbehalten.',
    'footer.desc': 'Experten-Rentenberatung für Deutschlands komplexes Rentensystem.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.hub': 'Hub',
    'nav.tools': 'Tools',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.consultation': 'Free Consultation',
    
    // Hero Section
    'hero.title': 'Private & State Pensions—',
    'hero.subtitle': 'Explained in Plain English',
    'hero.description': 'Navigate Germany\'s complex pension system with confidence. Get expert guidance tailored to your situation.',
    'hero.cta': 'Calculate Your Pension Gap',
    'hero.consultations': '2000+ Consultations',
    'hero.rating': '★★★★★ 4.9/5 Rating',
    'hero.regulated': 'BaFin Regulated',
    
    // Benefits Section
    'benefits.title': 'Why Choose Pension Expert?',
    'benefits.expert.title': 'Expert Consultation',
    'benefits.expert.desc': 'Certified financial advisors specializing in the German pension system',
    'benefits.personal.title': 'Personal Analysis',
    'benefits.personal.desc': 'Individual pension gap analysis and tailored solutions',
    'benefits.transparent.title': 'Transparent Advice',
    'benefits.transparent.desc': 'No hidden fees, clear recommendations without sales pressure',
    
    // Summary Section
    'summary.title': 'Key Takeaways',
    'summary.content': 'Germany has a 3-pillar pension system. The statutory pension covers only about 48% of your last income. Most people need additional private pension savings for a comfortable retirement. Our free calculator shows you how big your pension gap is.',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How much pension will I actually receive in Germany?',
    'faq.a1': 'Your pension depends on your contribution years, average salary, and pension type. The statutory pension typically replaces only 48% of your pre-retirement income. Most people need additional private pension savings to maintain their lifestyle.',
    'faq.q2': 'Should I choose Riester or Rürup pension?',
    'faq.a2': 'This depends on your employment status, income level, and tax situation. Riester benefits employees and offers flexibility, while Rürup suits high earners and self-employed individuals with better tax advantages but less flexibility.',
    'faq.q3': 'When should I start pension planning?',
    'faq.a3': 'The earlier, the better. Starting pension planning in your 20s or 30s gives you maximum benefit from compound interest and tax advantages. However, it\'s never too late to optimize your pension strategy.',
    
    // Calculator Page
    'calc.title': 'Pension Gap Calculator',
    'calc.subtitle': 'Calculate how much you need to save for a comfortable retirement',
    'calc.cta.title': 'Calculator Integration',
    'calc.cta.desc': 'This will be replaced with your actual pension calculator widget',
    'calc.results': 'Your Results',
    'calc.gap': 'Estimated Monthly Pension Gap',
    'calc.gap.desc': 'Additional monthly savings needed for comfortable retirement',
    'calc.current': 'Current Pension',
    'calc.target': 'Target Income',
    'calc.consultation': 'Get Personal Consultation',
    'calc.scarcity': 'Only 5 new cases per week - Book your slot now',
    'calc.reading': 'Recommended Reading',
    'calc.read': 'Read Guide',
    
    // Hub Page
    'hub.title': 'The Ultimate Guide to German Pension System 2025',
    'hub.subtitle': 'Understand Germany\'s complex pension system and optimize your retirement planning',
    'hub.tldr': 'Germany has a 3-pillar system: Statutory pension (48% replacement rate), occupational pension, and private pension. Most people need additional private savings for comfortable retirement.',
    'hub.navigation': 'Quick Navigation',
    'hub.guides': 'Specialized Guides',
    'hub.learn.more': 'Learn More',
    'hub.calculate.cta': 'Calculate Your Personal Pension Gap',
    'hub.calculate.desc': 'Find out how much you need to save additionally',
    'hub.calculate.btn': 'Calculate Now',
    
    // Footer
    'footer.services': 'Services',
    'footer.consultation': 'Pension Consultation',
    'footer.calculator': 'Pension Calculator',
    'footer.private': 'Private Pension',
    'footer.resources': 'Resources',
    'footer.guide': 'Pension Guide',
    'footer.blog': 'Blog',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.terms': 'Terms',
    'footer.copyright': '© 2025 Pension Expert Germany. All rights reserved.',
    'footer.desc': 'Expert pension consultation for Germany\'s complex retirement system.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};