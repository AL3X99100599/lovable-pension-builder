import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Target, Shield, Star, ArrowRight, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  answers: (number | string)[];
  obstacles: string[];
  additionalInfo: string;
}

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    answers: Array(15).fill(''),
    obstacles: [],
    additionalInfo: ''
  });
  const [score, setScore] = useState(0);

  const bestPracticeQuestions = [
    "Do you save at least 20% of your net income each month?",
    "Do you review your budget every 30 days?",
    "Are 80%+ of your long-term investments in low-cost index funds or ETFs?",
    "Do you pay total investment fees under 1% per year?",
    "Do you keep an emergency fund equal to 3-6 months of expenses?",
    "Have you fully used Germany's tax-deductible pension allowances (e.g. Basis-Rente)?",
    "Do you raise your savings rate after each salary increase?",
    "Is your insurance cover (life/health/disability) reviewed annually?",
    "Do you rebalance your portfolio at least once a year?",
    "Have you projected expected state pension vs. desired retirement income?"
  ];

  const calculateScore = () => {
    let totalScore = 0;
    // Questions 0-9 are best practice questions (0-2 points each)
    for (let i = 0; i < 10; i++) {
      const answer = formData.answers[i];
      if (answer === 'yes') totalScore += 2;
      else if (answer === 'sometimes') totalScore += 1;
    }
    return totalScore;
  };

  const handleNext = () => {
    if (currentStep < 17) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate final score and show results
      const finalScore = calculateScore();
      setScore(finalScore);
      setCurrentStep(18); // Results page
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateAnswer = (index: number, value: any) => {
    const newAnswers = [...formData.answers];
    newAnswers[index] = value;
    setFormData({ ...formData, answers: newAnswers });
  };

  const updateObstacles = (obstacle: string, checked: boolean) => {
    let newObstacles = [...formData.obstacles];
    if (checked) {
      newObstacles.push(obstacle);
    } else {
      newObstacles = newObstacles.filter(o => o !== obstacle);
    }
    setFormData({ ...formData, obstacles: newObstacles });
  };

  const getScoreColor = (score: number) => {
    if (score >= 19) return 'text-green-600';
    if (score >= 13) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLevel = (score: number) => {
    if (score >= 19) return 'Green';
    if (score >= 13) return 'Amber';
    return 'Red';
  };

  const getPersonalizedInsight = (score: number) => {
    if (score >= 19) {
      return "You're already following key best practices. Focus on optimising tax wrappers and fine-tuning fees.";
    }
    if (score >= 13) {
      return "Great start, but your savings rate or fee drag needs attention. See quick wins below.";
    }
    return "Biggest gap: consistent saving and emergency fund. Start with the 3-Step Starter Plan below.";
  };

  const renderLandingPage = () => (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Ready to secure true <span className="text-primary">Financial Freedom</span> & a{' '}
              <span className="text-primary">Worry‑Free Retirement?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Answer 15 quick questions to find out.
            </p>
            <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
              Get your <strong>personalised Financial Freedom Roadmap</strong> in under 3 minutes — 100% free.
            </p>
            
            <Button 
              onClick={() => setCurrentStep(1)}
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-strong mb-16"
            >
              <Play className="w-5 h-5 mr-2" />
              Start the 15-question assessment — it's free, takes &lt; 3 min
            </Button>
          </div>

          {/* Benefits Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-8 text-foreground">
              This 3‑minute assessment will <span className="text-primary">measure & improve</span> three essentials:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Savings Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">How much you can safely set aside each month</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Investment Mix & Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Where hidden costs may be eating returns</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Retirement Income Gap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">The shortfall between life goals & state pension</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Plus: instant score, custom action plan, works worldwide.
            </p>
          </div>

          {/* Authority Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-card border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">AY</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                      Hi, I'm <span className="text-primary">Alex Yordanov</span>, independent pension specialist
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      (8,000+ expat finances reviewed)
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Roadmap based on research from:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• German Federal Pension Fund | "Rentenlücke 2024"</li>
                      <li>• Vanguard Retirement Study 2024</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-muted/30">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "Three minutes and I finally knew exactly which levers to pull to retire on my terms."
                </blockquote>
                <cite className="text-sm font-semibold text-foreground">
                  — Sudarshan K., Berlin
                </cite>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button 
              onClick={() => setCurrentStep(1)}
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-strong"
            >
              <Clock className="w-5 h-5 mr-2" />
              Start the 15-question assessment — it's free, takes &lt; 3 min
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );

  const renderDataCapture = () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Let's Get Started</CardTitle>
          <p className="text-center text-muted-foreground">Just need your name and email to personalize your results</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your first name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          <Button 
            onClick={handleNext}
            className="w-full"
            disabled={!formData.name || !formData.email}
          >
            Continue to Assessment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderQuestion = (questionIndex: number) => {
    const progress = ((currentStep - 1) / 15) * 100;
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline">Question {currentStep - 1} of 15</Badge>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="mb-4" />
            
            {questionIndex < 10 ? (
              <>
                <CardTitle className="text-xl">{bestPracticeQuestions[questionIndex]}</CardTitle>
                <RadioGroup
                  value={formData.answers[questionIndex] as string}
                  onValueChange={(value) => updateAnswer(questionIndex, value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sometimes" id="sometimes" />
                    <Label htmlFor="sometimes">Sometimes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </>
            ) : questionIndex === 10 ? (
              <>
                <CardTitle className="text-xl">Which age band describes you?</CardTitle>
                <RadioGroup
                  value={formData.answers[questionIndex] as string}
                  onValueChange={(value) => updateAnswer(questionIndex, value)}
                >
                  {['20-29', '30-39', '40-49', '50-59', '60+'].map((age) => (
                    <div key={age} className="flex items-center space-x-2">
                      <RadioGroupItem value={age} id={age} />
                      <Label htmlFor={age}>{age}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : questionIndex === 11 ? (
              <>
                <CardTitle className="text-xl">Which outcome matters most?</CardTitle>
                <RadioGroup
                  value={formData.answers[questionIndex] as string}
                  onValueChange={(value) => updateAnswer(questionIndex, value)}
                >
                  {[
                    'Retire before 60',
                    'Build €1m investment portfolio',
                    'Generate €3,000/mo passive income',
                    'Achieve debt-free home ownership'
                  ].map((outcome) => (
                    <div key={outcome} className="flex items-center space-x-2">
                      <RadioGroupItem value={outcome} id={outcome} />
                      <Label htmlFor={outcome}>{outcome}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : questionIndex === 12 ? (
              <>
                <CardTitle className="text-xl">What's stopping you right now? (Select all that apply)</CardTitle>
                <div className="space-y-3">
                  {[
                    'High living costs',
                    'Lack of investment knowledge',
                    'Fear of market risk',
                    'Unsure about German tax rules',
                    'No clear plan'
                  ].map((obstacle) => (
                    <div key={obstacle} className="flex items-center space-x-2">
                      <Checkbox
                        id={obstacle}
                        checked={formData.obstacles.includes(obstacle)}
                        onCheckedChange={(checked) => updateObstacles(obstacle, checked as boolean)}
                      />
                      <Label htmlFor={obstacle}>{obstacle}</Label>
                    </div>
                  ))}
                </div>
              </>
            ) : questionIndex === 13 ? (
              <>
                <CardTitle className="text-xl">Which support style suits you best?</CardTitle>
                <RadioGroup
                  value={formData.answers[questionIndex] as string}
                  onValueChange={(value) => updateAnswer(questionIndex, value)}
                >
                  {[
                    'Self-paced online course',
                    'Small-group workshop',
                    '1-to-1 advisory session',
                    'Done-for-you portfolio service'
                  ].map((style) => (
                    <div key={style} className="flex items-center space-x-2">
                      <RadioGroupItem value={style} id={style} />
                      <Label htmlFor={style}>{style}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : (
              <>
                <CardTitle className="text-xl">Is there anything else you'd like us to know? (Optional)</CardTitle>
                <Textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Any additional information..."
                  rows={4}
                />
              </>
            )}
          </CardHeader>
          
          <CardContent>
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep <= 2}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNext}
                disabled={questionIndex < 10 && !formData.answers[questionIndex]}
              >
                {currentStep === 17 ? 'Get My Results' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderResults = () => {
    const scoreLevel = getScoreLevel(score);
    const insight = getPersonalizedInsight(score);
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Score Display */}
              <div className="text-center mb-12">
                <h1 className="font-heading text-4xl font-bold mb-6 text-foreground">
                  Your Financial Freedom Readiness Score:
                </h1>
                <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
                  {score} / 24
                </div>
                <Badge 
                  variant={scoreLevel === 'Green' ? 'default' : scoreLevel === 'Amber' ? 'secondary' : 'destructive'}
                  className="text-lg px-4 py-2"
                >
                  {scoreLevel} Level
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="mb-12">
                <Progress value={(score / 24) * 100} className="h-4" />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>0</span>
                  <span>12</span>
                  <span>18</span>
                  <span>24</span>
                </div>
              </div>

              {/* Personalized Insight */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Personalized Insight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">{insight}</p>
                </CardContent>
              </Card>

              {/* Video Section */}
              <Card className="mb-12">
                <CardContent className="p-8 text-center">
                  <div className="bg-muted/30 rounded-lg p-12 mb-6">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Personal Message from Alex</h3>
                    <p className="text-muted-foreground">
                      {score >= 13 
                        ? "Looks like you're on track. Book a free strategy call and we'll map out the €0-fee upgrades."
                        : "Let's begin with our free Budget-Booster course. Once you've nailed the basics, we can talk next steps."
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <div className="text-center space-y-4">
                {score >= 19 ? (
                  <Button size="lg" className="bg-gradient-cta hover:opacity-90 text-accent-foreground">
                    Book your free 30-min call
                  </Button>
                ) : score >= 13 ? (
                  <Button size="lg" className="bg-gradient-cta hover:opacity-90 text-accent-foreground">
                    Download quick-win checklist
                  </Button>
                ) : (
                  <Button size="lg" className="bg-gradient-cta hover:opacity-90 text-accent-foreground">
                    Access 5-day email mini-course
                  </Button>
                )}
                
                <p className="text-sm text-muted-foreground">
                  Your Personal Financial Freedom Roadmap will be sent to {formData.email}
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  };

  // Render based on current step
  if (currentStep === 0) return renderLandingPage();
  if (currentStep === 1) return renderDataCapture();
  if (currentStep >= 2 && currentStep <= 16) return renderQuestion(currentStep - 2);
  if (currentStep === 17) return renderQuestion(13); // Additional info question
  return renderResults();
};

export default Assessment;