import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, FileText, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize Your Pension",
      description: "Optimize your retirement strategy with expert analysis of all available pension options in Germany."
    },
    {
      icon: FileText,
      title: "Clear Documentation",
      description: "Get comprehensive, easy-to-understand reports on your pension situation and recommendations."
    },
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "Avoid costly mistakes and lengthy research. Get expert advice in just 30 minutes."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;