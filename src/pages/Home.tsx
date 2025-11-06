import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, BarChart3, Code, Sparkles, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import aiImage from "@/assets/course-ai.jpg";
import dataImage from "@/assets/course-data.jpg";
import webdevImage from "@/assets/course-webdev.jpg";
import promptImage from "@/assets/course-prompt.jpg";

const Home = () => {
  const programs = [
    {
      title: "Artificial Intelligence",
      description: "Master AI fundamentals and build intelligent applications with hands-on projects.",
      image: aiImage,
      link: "/programs/ai",
      icon: Brain,
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with industry-standard tools.",
      image: dataImage,
      link: "/programs/data-analytics",
      icon: BarChart3,
    },
    {
      title: "Web Development",
      description: "Build modern, responsive websites and web applications from scratch.",
      image: webdevImage,
      link: "/programs/web-development",
      icon: Code,
    },
    {
      title: "Prompt Engineering",
      description: "Learn to craft effective prompts and leverage AI tools for maximum productivity.",
      image: promptImage,
      link: "/programs/prompt-engineering",
      icon: Sparkles,
    },
  ];

  const benefits = [
    "Industry-focused hands-on projects",
    "Short, outcome-driven programs",
    "Live guidance & active WhatsApp community",
    "Certificates upon completion",
  ];

  const steps = [
    { number: "01", title: "Join WhatsApp Group", description: "Connect with fellow learners and get instant support" },
    { number: "02", title: "Choose a Program", description: "Select the course that matches your career goals" },
    { number: "03", title: "Start Learning", description: "Complete projects and earn your certificate" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Analyst",
      content: "The Data Analytics program gave me practical skills I use every day. Got hired within 2 months!",
    },
    {
      name: "Rahul Patel",
      role: "Web Developer",
      content: "Best investment I made. The community support and hands-on projects made all the difference.",
    },
    {
      name: "Ananya Singh",
      role: "AI Engineer",
      content: "From complete beginner to building AI applications. The course structure is brilliant!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Empowering future talent
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Master Real Skills in{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI & Tech
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Practical programs in AI, Data Analytics, Web Development and Prompt Engineering. 
                Join our WhatsApp community and start learning today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join WhatsApp Group
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/programs">View Programs</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Skillwon */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Skillwon?</h2>
            <p className="text-muted-foreground text-lg">Everything you need to succeed in your tech career</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our range of industry-focused courses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link key={index} to={program.link}>
                  <Card className="group border-border hover:border-primary/50 transition-all hover:shadow-xl h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <Icon className="absolute bottom-4 left-4 h-8 w-8 text-primary" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{program.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Start your learning journey in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground text-lg">Hear from our graduates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students learning practical tech skills. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
