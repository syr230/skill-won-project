import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      period: "per course",
      description: "Perfect for trying out a single course",
      icon: Zap,
      features: [
        "Access to one course",
        "WhatsApp community access",
        "Video lessons & assignments",
        "3 months access",
        "Email support",
        "Course certificate",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "Best for serious learners",
      icon: Crown,
      features: [
        "Access to ALL courses",
        "Priority WhatsApp support",
        "All video lessons & projects",
        "Lifetime access",
        "Live doubt-clearing sessions",
        "Verified certificates",
        "Career guidance calls",
        "Exclusive resources",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium",
      price: "$399",
      period: "per year",
      description: "Maximum value for committed learners",
      icon: Sparkles,
      features: [
        "Everything in Pro",
        "2 months FREE (worth $98)",
        "1-on-1 mentorship sessions",
        "Job placement assistance",
        "Portfolio review",
        "Interview preparation",
        "Industry connections",
        "Early access to new courses",
      ],
      cta: "Get Premium",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, Pro and Premium plans come with a 7-day free trial. No credit card required!",
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full.",
    },
    {
      question: "Can I pay with UPI or other methods?",
      answer: "Yes! We accept UPI, credit/debit cards, net banking, and international payments.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Learning Path</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing plans designed to fit your goals and budget. Start learning today!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`relative border-2 transition-all hover:shadow-2xl ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-12 w-12 rounded-full ${plan.popular ? 'bg-primary' : 'bg-primary/10'} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/ {plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "cta" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20the%20${plan.name}%20plan`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </div>

        {/* FAQs */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/90 mb-6">
            Chat with us on WhatsApp and we'll help you choose the right plan!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://wa.me/YOUR_NUMBER?text=I%20have%20questions%20about%20pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat With Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
