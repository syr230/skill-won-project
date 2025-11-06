import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BarChart3,
  Code,
  CheckCircle2,
  Star,
  Users,
  Award,
  TrendingUp,
  Zap,
  Target,
  Rocket,
  MessageCircle,
  ArrowRight,
  PlayCircle,
  Globe,
  Clock,
  Sparkles
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: Target,
      title: "Industry-Ready Skills",
      description: "Learn practical skills that employers actually want. Our curriculum is designed with input from top tech companies."
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join 25,000+ students in our WhatsApp community. Get help, network, and grow together."
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description: "Earn certificates recognized by leading companies. Boost your resume and LinkedIn profile."
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Complete programs in 8-14 weeks. Start building your career faster than traditional education."
    }
  ];

  const programs = [
    {
      title: "Python Programming",
      description: "Master Python from basics to advanced",
      icon: Code,
      students: "3,500+",
      rating: "4.8"
    },
    {
      title: "Web Development",
      description: "Build modern full-stack applications",
      icon: Globe,
      students: "4,200+",
      rating: "4.9"
    },
    {
      title: "Data Science",
      description: "Transform data into insights",
      icon: BarChart3,
      students: "3,100+",
      rating: "4.8"
    },
    {
      title: "AI & Machine Learning",
      description: "Build intelligent applications",
      icon: Brain,
      students: "2,600+",
      rating: "4.9"
    }
  ];

  const stats = [
    { number: "25K+", label: "Active Students" },
    { number: "8+", label: "Programs" },
    { number: "95%", label: "Success Rate" },
    { number: "4.8★", label: "Average Rating" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Analyst at Google",
      content: "Skillwon's Data Science program transformed my career. I landed my dream job within 2 months of completing the course!",
      image: "PS",
      rating: 5
    },
    {
      name: "Rahul Patel",
      role: "Full Stack Developer",
      content: "The best investment I made in my career. The hands-on projects and community support made all the difference.",
      image: "RP",
      rating: 5
    },
    {
      name: "Ananya Singh",
      role: "AI Engineer at Microsoft",
      content: "From complete beginner to building AI applications. The course structure is brilliant and instructors are amazing!",
      image: "AS",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-primary/3 via-primary/2 to-background">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/30 animate-glow">
              <Sparkles className="h-4 w-4 inline mr-2" />
              Transform Your Career in Tech - Join 25,000+ Students
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Master <span className="gradient-text">In-Demand Tech Skills</span> in Weeks, Not Years
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
              Learn Python, Web Development, Data Science, AI/ML and more through hands-on projects. 
              Get job-ready with industry-recognized certificates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="cta" size="lg" className="text-lg px-8 hover-lift group" asChild>
                <a
                  href="https://wa.me/YOUR_NUMBER?text=I%20want%20to%20start%20learning%20with%20Skillwon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 hover-lift border-2" asChild>
                <Link to="/programs">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Explore Programs
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>100% Online Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Live Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Job Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Skillwon */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/30">
              Why Choose Skillwon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've built the perfect learning platform to help you achieve your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group border-border hover:border-primary/50 transition-all hover-lift overflow-hidden bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/30">
              Popular Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From programming fundamentals to advanced AI - we have programs for every skill level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="group border-border hover:border-primary/50 transition-all hover-lift overflow-hidden bg-gradient-to-br from-card to-muted/20 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{program.students}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-bold">{program.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center animate-fade-in">
            <Button variant="outline" size="lg" className="hover-lift border-2 group" asChild>
              <Link to="/programs">
                View All 8 Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/30">
              Student Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="gradient-text">25,000+ Students</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Skillwon has transformed careers and changed lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover-lift bg-gradient-to-br from-card to-muted/20 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/30">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="gradient-text">Skillwon Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start learning in minutes - it's that easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Join WhatsApp Community",
                description: "Connect with mentors and fellow learners. Get instant support and guidance from day one."
              },
              {
                step: "02",
                title: "Choose Your Program",
                description: "Select from 8 industry-focused programs. Start with fundamentals or dive into advanced topics."
              },
              {
                step: "03",
                title: "Build & Get Certified",
                description: "Complete hands-on projects, get feedback, and earn your verified certificate to boost your career."
              }
            ].map((step, index) => (
              <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-primary/30">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center py-20 px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
                Join 25,000+ students who are already building their dream careers. 
                Start learning today and see results in weeks, not years!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg px-8 hover-lift shadow-xl group" asChild>
                  <a
                    href="https://wa.me/YOUR_NUMBER?text=I%20want%20to%20join%20Skillwon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Join Free Community
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 hover-lift backdrop-blur" asChild>
                  <Link to="/programs">
                    Browse All Programs
                  </Link>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Start Learning Immediately</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
