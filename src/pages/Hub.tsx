import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calculator, Users, FileText, Globe, TrendingUp, Shield } from 'lucide-react';

const Hub = () => {
  const hubSections = [
    { id: 'overview', title: 'Überblick des deutschen Rentensystems', icon: '🏛️' },
    { id: 'statutory', title: 'Gesetzliche Rente', icon: '📊' },
    { id: 'occupational', title: 'Betriebliche Altersvorsorge', icon: '🏢' },
    { id: 'private', title: 'Private Altersvorsorge', icon: '💰' },
    { id: 'tax-benefits', title: 'Steuervorteile nutzen', icon: '📋' },
    { id: 'planning', title: 'Planung & Strategien', icon: '🎯' }
  ];

  const spokePages = [
    {
      title: 'Private Pension Guide',
      description: 'Complete guide to private pension options in Germany',
      href: '/hub/private-pension',
      icon: TrendingUp
    },
    {
      title: 'Freelancer Pension',
      description: 'Pension planning for self-employed and freelancers',
      href: '/hub/freelancer-pension', 
      icon: Users
    },
    {
      title: 'Expat Pension Guide',
      description: 'Retirement planning for expats living in Germany',
      href: '/hub/expat-pension',
      icon: Globe
    },
    {
      title: 'Riester vs Rürup',
      description: 'Detailed comparison of Germany\'s main pension products',
      href: '/hub/riester-vs-rourup',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Der ultimative Leitfaden zum deutschen Rentensystem 2025
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Verstehen Sie Deutschlands komplexes Rentensystem und optimieren Sie Ihre Altersvorsorge
            </p>
            
            {/* TL;DR Box */}
            <Card className="bg-gradient-card border-l-4 border-l-primary shadow-soft mb-8">
              <CardContent className="p-6 text-left">
                <h6 className="font-semibold text-lg mb-3 text-foreground">TL;DR</h6>
                <p className="text-muted-foreground">
                  Deutschland hat ein 3-Säulen-System: Gesetzliche Rente (48% Ersatzrate), 
                  betriebliche Altersvorsorge und private Vorsorge. Die meisten Menschen 
                  benötigen zusätzliche private Ersparnisse für einen komfortablen Ruhestand.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Jump Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">Schnellnavigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hubSections.map((section) => (
                <Button
                  key={section.id}
                  variant="outline"
                  className="justify-start h-auto p-4 text-left"
                  asChild
                >
                  <a href={`#${section.id}`}>
                    <span className="mr-3 text-lg">{section.icon}</span>
                    <span className="text-sm">{section.title}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none mb-12">
            <section id="overview" className="mb-12">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">🏛️ Überblick des deutschen Rentensystems</h2>
              <p className="text-muted-foreground mb-4">
                Das deutsche Rentensystem basiert auf drei Säulen, die zusammen Ihre Altersvorsorge bilden. 
                Jede Säule hat unterschiedliche Vorteile und spielt eine wichtige Rolle bei der Sicherung 
                Ihres Lebensstandards im Alter.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1. Säule: Gesetzlich</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Basisversorgung durch gesetzliche Rentenversicherung</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">2. Säule: Betrieblich</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Zusatzversorgung über den Arbeitgeber</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">3. Säule: Privat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Eigenverantwortliche Vorsorge (Riester, Rürup, etc.)</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <div className="text-center my-12 p-8 bg-gradient-hero rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Berechnen Sie Ihre persönliche Rentenlücke
              </h3>
              <p className="text-white/90 mb-6">
                Finden Sie heraus, wie viel Sie zusätzlich sparen müssen
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-cta hover:opacity-90 text-accent-foreground"
              >
                <Link to="/tools/pension-gap-calculator">
                  <Calculator className="w-5 h-5 mr-2" />
                  Jetzt berechnen
                </Link>
              </Button>
            </div>

            <section id="statutory" className="mb-12">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">📊 Gesetzliche Rente</h2>
              <p className="text-muted-foreground mb-4">
                Die gesetzliche Rentenversicherung bildet das Fundament der deutschen Altersvorsorge. 
                Sie basiert auf dem Umlageverfahren und wird durch Beiträge von Arbeitnehmern und 
                Arbeitgebern finanziert.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Wichtige Fakten:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Rentenbeitragssatz: 18,6% des Bruttoeinkommens (Stand 2025)</li>
                <li>Beitragsbemessungsgrenze: 7.500€ monatlich (West), 7.100€ (Ost)</li>
                <li>Standardrente: ca. 1.620€ nach 45 Beitragsjahren</li>
                <li>Rentenniveau: aktuell 48% des Durchschnittseinkommens</li>
              </ul>
            </section>

            {/* Continue with more sections... */}
          </div>

          {/* Spoke Pages */}
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center mb-12 text-foreground">
              Spezielle Ratgeber
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {spokePages.map((page) => (
                <Card key={page.href} className="hover:shadow-soft transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <page.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-xl">{page.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{page.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={page.href}>Mehr erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hub;