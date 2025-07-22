import { Card, CardContent } from '@/components/ui/card';
import { InfoIcon } from 'lucide-react';

const SummarySection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-l-4 border-l-primary bg-card shadow-soft">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <InfoIcon className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h6 className="summary font-semibold text-lg mb-3 text-foreground">
                  TL;DR - Your Pension Strategy
                </h6>
                <p className="text-muted-foreground leading-relaxed">
                  Germany's pension system combines state, occupational, and private pensions. 
                  Most people face a significant pension gap that requires private savings to maintain 
                  their standard of living in retirement. Our expert consultation helps you identify 
                  the optimal mix of Riester, Rürup, and other pension products based on your 
                  individual situation, tax benefits, and retirement goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SummarySection;