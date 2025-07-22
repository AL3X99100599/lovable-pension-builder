import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, Phone } from 'lucide-react';

const PensionCalculator = () => {
  const relatedGuides = [
    {
      title: 'Private Pension Guide',
      description: 'Learn about private pension options to fill your retirement gap',
      href: '/hub/private-pension'
    },
    {
      title: 'Riester vs Rürup Comparison',
      description: 'Compare Germany\'s main tax-advantaged pension products',
      href: '/hub/riester-vs-rourup'
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
              Pension Gap Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate how much you need to save for a comfortable retirement
            </p>
          </div>

          {/* Calculator Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="shadow-strong">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Calculator className="w-6 h-6 text-primary" />
                  Pension Gap Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Calculator Iframe Placeholder */}
                <div className="bg-muted/30 rounded-lg p-12 text-center">
                  <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Calculator Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    This will be replaced with your actual pension calculator widget
                  </p>
                  <div className="bg-card p-6 rounded border border-border text-left max-w-md mx-auto">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Technical Integration:</strong>
                    </p>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      &lt;iframe src="https://YOUR-CALCAPP-URL" width="100%" height="600"&gt;&lt;/iframe&gt;
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-soft mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Your Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Estimated Monthly Pension Gap</h3>
                  <p className="text-3xl font-bold text-primary">€XXX</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Additional monthly savings needed for comfortable retirement
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground">Current Pension</h4>
                    <p className="text-xl font-bold text-muted-foreground">€XXX/month</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground">Target Income</h4>
                    <p className="text-xl font-bold text-muted-foreground">€XXX/month</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-gradient-cta hover:opacity-90 text-accent-foreground"
                  >
                    <Link to="/services">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Personal Consultation
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Nur 5 neue Fälle pro Woche - Book your slot now
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related Guides */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-center mb-8 text-foreground">
                Recommended Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedGuides.map((guide) => (
                  <Card key={guide.href} className="hover:shadow-soft transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{guide.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={guide.href}>Read Guide</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Pension Gap Calculator",
            "operatingSystem": "Web",
            "applicationCategory": "FinanceApplication",
            "description": "Calculate your pension gap and retirement savings needs in Germany",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "featureList": [
              "Pension gap calculation",
              "Retirement income planning",
              "Tax-optimized savings recommendations"
            ]
          })
        }}
      />
    </div>
  );
};

export default PensionCalculator;