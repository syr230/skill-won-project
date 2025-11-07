import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check, 
  Brain, 
  BarChart3, 
  Code, 
  Sparkles, 
  Users, 
  Award, 
  Clock,
  Coffee,
  Shield,
  Cloud,
  Wifi,
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-learning.jpg";
import aiImage from "@/assets/course-ai.jpg";
import dataImage from "@/assets/course-data.jpg";
import webdevImage from "@/assets/course-webdev.jpg";
import promptImage from "@/assets/course-prompt.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const programs = [
    {
      title: "Python Programming",
      description: "Master Python from basics to advanced. Build real-world applications and automate tasks.",
      image: webdevImage,
      link: "/programs/python",
      icon: Code,
    },
    {
      title: "Java Development",
      description: "Learn enterprise-level Java programming and build robust applications.",
      image: webdevImage,
      link: "/programs/java",
      icon: Coffee,
    },
    {
      title: "Web Development",
      description: "Build modern, responsive websites and web applications from scratch.",
      image: webdevImage,
      link: "/programs/web-development",
      icon: Globe,
    },
    {
      title: "Data Science",
      description: "Transform raw data into actionable insights with Machine Learning and AI.",
      image: dataImage,
      link: "/programs/data-science",
      icon: BarChart3,
    },
    {
      title: "Cyber Security",
      description: "Learn to protect systems and networks with ethical hacking techniques.",
      image: aiImage,
      link: "/programs/cyber-security",
      icon: Shield,
    },
    {
      title: "AI & Machine Learning",
      description: "Master AI fundamentals and build intelligent applications with hands-on projects.",
      image: aiImage,
      link: "/programs/ai-ml",
      icon: Brain,
    },
    {
      title: "Internet of Things",
      description: "Build smart connected devices and learn IoT architecture.",
      image: promptImage,
      link: "/programs/iot",
      icon: Wifi,
    },
    {
      title: "Cloud Computing",
      description: "Master AWS, Azure, and cloud architecture for modern applications.",
      image: dataImage,
      link: "/programs/cloud-computing",
      icon: Cloud,
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

  // Carousel auto-play logic - Auto-advance every 3 seconds with fade transition
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, programs.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  // Calculate visible programs (show 4 at a time)
  const getVisiblePrograms = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(programs[(currentSlide + i) % programs.length]);
    }
    return visible;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
      >
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-slide-in">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-sm font-medium border border-primary/20 animate-glow backdrop-blur-sm">
                ✨ Empowering future talent
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-slide-up text-white drop-shadow-lg">
              Master Real Skills in{" "}
              <span className="gradient-text animate-gradient">
                AI & Tech
              </span>
            </h1>
            <p className="text-xl text-white/90 animate-fade-in max-w-2xl mx-auto font-medium drop-shadow-md" style={{ animationDelay: "0.2s" }}>
              Practical programs in AI, Data Analytics, Web Development and Prompt Engineering. 
              Join our WhatsApp community and start learning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="cta" size="lg" className="hover-lift group" asChild>
                <a
                  href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join WhatsApp Group
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover-lift hover:border-primary/50 backdrop-blur-sm" asChild>
                <Link to="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Skillwon */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          
          {/* Floating squares */}
          <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-primary/20 rotate-45 animate-float" style={{ animationDelay: "0.8s" }}></div>
          <div className="absolute bottom-32 left-1/3 w-8 h-8 border-2 border-accent/20 rotate-12 animate-float" style={{ animationDelay: "2.2s" }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why Choose Skillwon?</h2>
            <p className="text-muted-foreground text-lg">Everything you need to succeed in your tech career</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover-lift animate-slide-up group bg-gradient-to-br from-card to-card/50 backdrop-blur">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
          
          {/* Moving dots */}
          <div className="absolute top-32 left-20 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "1.2s" }}></div>
          <div className="absolute bottom-40 right-32 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "2.4s" }}></div>
          <div className="absolute top-48 right-16 w-4 h-4 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "3.6s" }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our 8 industry-focused courses designed for success
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-gradient-to-r from-primary to-primary/80 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all hover-lift hidden md:flex items-center justify-center"
              aria-label="Previous programs"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-gradient-to-r from-primary to-primary/80 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all hover-lift hidden md:flex items-center justify-center"
              aria-label="Next programs"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Programs Carousel */}
            <div className="overflow-hidden">
              <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-opacity duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                {getVisiblePrograms().map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <Link key={`${program.title}-${index}`} to={program.link}>
                      <Card className="group border-border hover:border-primary/50 transition-all duration-500 hover-lift h-full overflow-hidden bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-6 relative">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10">
                            {program.title}
                          </h3>
                          <p className="text-muted-foreground text-sm relative z-10">{program.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mb-6">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    index === currentSlide
                      ? "w-8 bg-gradient-to-r from-primary to-primary/80 shadow-md"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                  }`}
                  aria-label={`Go to program ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* View All Programs Button */}
          <div className="text-center mt-8 animate-fade-in">
            <Button variant="outline" size="lg" className="hover-lift hover:border-primary/50 group" asChild>
              <Link to="/programs">
                View All Programs & Details
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
            <p className="text-muted-foreground text-lg">Start your learning journey in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-border hover:border-primary/50 transition-all hover-lift animate-slide-up group bg-gradient-to-br from-card to-muted/20 backdrop-blur overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="text-7xl font-bold bg-gradient-to-br from-primary/30 to-accent/30 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-24 left-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }}></div>
          
          {/* Moving triangles */}
          <div className="absolute top-32 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-accent/20 animate-float" style={{ animationDelay: "1.8s" }}></div>
          <div className="absolute bottom-40 right-1/3 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-primary/20 animate-float" style={{ animationDelay: "3.2s" }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground text-lg">Hear from our graduates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-primary/50 hover-lift transition-all animate-scale-in group bg-gradient-to-br from-card to-muted/20 backdrop-blur">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary via-accent to-secondary group-hover:scale-110 transition-transform flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Ready to Transform Your Career?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join thousands of students learning practical tech skills. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="secondary" className="hover-lift shadow-xl group" asChild>
              <a
                href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20Skillwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover-lift border-white/20 shadow-xl" asChild>
              <Link to="/programs">Browse Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
