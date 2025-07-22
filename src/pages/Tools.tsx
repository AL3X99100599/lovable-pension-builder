import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calculator, PieChart, TrendingUp, FileText } from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      title: 'Pension Gap Calculator',
      description: 'Calculate your retirement income gap and see how much you need to save',
      href: '/tools/pension-gap-calculator',
      icon: Calculator,
      featured: true
    },
    {
      title: 'Pension Portfolio Analyzer',
      description: 'Analyze your current pension mix and get optimization recommendations',
      href: '/tools/portfolio-analyzer',
      icon: PieChart,
      coming: true
    },
    {
      title: 'Tax Benefit Calculator',
      description: 'Compare tax benefits of different pension products',
      href: '/tools/tax-calculator',
      icon: FileText,
      coming: true
    },
    {
      title: 'Retirement Planner',
      description: 'Plan your retirement timeline and income needs',
      href: '/tools/retirement-planner',
      icon: TrendingUp,
      coming: true
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
              Pension Planning Tools
            </h1>
            <p className="text-xl text-muted-foreground">
              Free calculators and tools to help you plan your retirement in Germany
            </p>
          </div>

          {/* Tools Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Card 
                key={tool.href} 
                className={`hover:shadow-soft transition-shadow duration-300 relative ${
                  tool.featured ? 'border-primary shadow-soft' : ''
                }`}
              >
                {tool.featured && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                {tool.coming && (
                  <div className="absolute -top-3 right-6 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{tool.description}</p>
                  <Button 
                    asChild 
                    variant={tool.featured ? "default" : "outline"} 
                    className={`w-full ${tool.featured ? 'bg-gradient-cta hover:opacity-90' : ''}`}
                    disabled={tool.coming}
                  >
                    <Link to={tool.href}>
                      {tool.coming ? 'Coming Soon' : 'Use Tool'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center mt-16 p-8 bg-gradient-hero rounded-lg">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Need Personal Advice?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              While our tools provide great insights, every situation is unique. 
              Get personalized recommendations from our pension experts.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-accent-foreground"
            >
              <Link to="/services">
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;