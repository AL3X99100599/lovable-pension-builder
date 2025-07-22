import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How much pension will I actually receive in Germany?",
      answer: "Your pension depends on your contribution years, average salary, and pension type. The statutory pension typically replaces only 48% of your pre-retirement income. Most people need additional private pension savings to maintain their lifestyle."
    },
    {
      question: "Should I choose Riester or Rürup pension?",
      answer: "This depends on your employment status, income level, and tax situation. Riester benefits employees and offers flexibility, while Rürup suits high earners and self-employed individuals with better tax advantages but less flexibility."
    },
    {
      question: "When should I start pension planning?",
      answer: "The earlier, the better. Starting pension planning in your 20s or 30s gives you maximum benefit from compound interest and tax advantages. However, it's never too late to optimize your pension strategy."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-soft bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Structured Data for FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;