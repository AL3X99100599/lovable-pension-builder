import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import SummarySection from '@/components/SummarySection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <BenefitsSection />
        <SummarySection />
        <FAQSection />
      </main>

      <Footer />

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pension Expert Germany",
            "url": "https://pension-expert.de",
            "logo": "https://pension-expert.de/logo.png",
            "description": "Expert pension consultation for Germany's retirement system",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-xxx-xxx-xxxx",
              "contactType": "customer service",
              "availableLanguage": ["German", "English"]
            }
          })
        }}
      />
    </div>
  );
};

export default Index;
