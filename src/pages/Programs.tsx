import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Sparkles, 
  Clock, 
  Award, 
  Users, 
  Coffee,
  Shield,
  Cloud,
  Wifi,
  Globe,
  Cpu,
  CheckCircle2
} from "lucide-react";
import aiImage from "@/assets/course-ai.jpg";
import dataImage from "@/assets/course-data.jpg";
import webdevImage from "@/assets/course-webdev.jpg";
import promptImage from "@/assets/course-prompt.jpg";

const Programs = () => {
  const programs = [
    {
      id: "python",
      title: "Python Programming",
      description: "Master Python from basics to advanced. Build real-world applications, automate tasks, and kickstart your coding journey.",
      image: webdevImage,
      icon: Code,
      level: "Beginner",
      duration: "8 weeks",
      students: "3,500+",
      price: "$249",
      popular: true,
      highlights: [
        "Python Fundamentals",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Real Projects",
      ],
    },
    {
      id: "java",
      title: "Java Development",
      description: "Learn enterprise-level Java programming. Build robust applications and master object-oriented design patterns.",
      image: webdevImage,
      icon: Coffee,
      level: "Intermediate",
      duration: "10 weeks",
      students: "2,800+",
      price: "$299",
      popular: false,
      highlights: [
        "Core Java & Advanced Concepts",
        "Spring Framework",
        "Database Integration",
        "Enterprise Applications",
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Build modern, responsive websites and web applications using HTML, CSS, JavaScript, React, and full-stack technologies.",
      image: webdevImage,
      icon: Globe,
      level: "Beginner",
      duration: "12 weeks",
      students: "4,200+",
      price: "$349",
      popular: true,
      highlights: [
        "HTML, CSS & JavaScript",
        "React & Modern Frameworks",
        "Backend Development",
        "Full-stack Projects",
      ],
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Transform raw data into actionable insights. Master Python, SQL, Machine Learning, and data visualization tools.",
      image: dataImage,
      icon: BarChart3,
      level: "Intermediate",
      duration: "10 weeks",
      students: "3,100+",
      price: "$399",
      popular: true,
      highlights: [
        "Python for Data Science",
        "Machine Learning",
        "Data Visualization",
        "Statistical Analysis",
      ],
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      description: "Learn to protect systems and networks. Master ethical hacking, security protocols, and threat detection techniques.",
      image: aiImage,
      icon: Shield,
      level: "Advanced",
      duration: "12 weeks",
      students: "2,100+",
      price: "$449",
      popular: false,
      highlights: [
        "Network Security",
        "Ethical Hacking",
        "Security Tools & Protocols",
        "Threat Analysis",
      ],
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Master AI fundamentals, neural networks, deep learning, and build intelligent applications with hands-on projects.",
      image: aiImage,
      icon: Brain,
      level: "Advanced",
      duration: "14 weeks",
      students: "2,600+",
      price: "$499",
      popular: true,
      highlights: [
        "Neural Networks & Deep Learning",
        "Computer Vision & NLP",
        "TensorFlow & PyTorch",
        "Real-world AI Projects",
      ],
    },
    {
      id: "iot",
      title: "Internet of Things (IoT)",
      description: "Build smart connected devices. Learn IoT architecture, sensors, embedded systems, and cloud integration.",
      image: promptImage,
      icon: Wifi,
      level: "Intermediate",
      duration: "10 weeks",
      students: "1,800+",
      price: "$379",
      popular: false,
      highlights: [
        "IoT Architecture",
        "Sensor Integration",
        "Arduino & Raspberry Pi",
        "Cloud Connectivity",
      ],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description: "Master AWS, Azure, and cloud architecture. Learn to deploy, manage, and scale applications in the cloud.",
      image: dataImage,
      icon: Cloud,
      level: "Intermediate",
      duration: "10 weeks",
      students: "2,900+",
      price: "$429",
      popular: true,
      highlights: [
        "AWS & Azure Fundamentals",
        "Cloud Architecture",
        "DevOps & CI/CD",
        "Serverless Computing",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/30 animate-glow">
              🚀 Transform Your Career with Industry-Ready Skills
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Explore Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Choose from 8 cutting-edge tech programs designed by industry experts. 
            Learn practical skills, build real projects, and get job-ready in weeks.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground flex-wrap">
            <Badge variant="outline" className="border-primary/30">💻 100% Online</Badge>
            <Badge variant="outline" className="border-primary/30">🎯 Live Sessions</Badge>
            <Badge variant="outline" className="border-primary/30">🏆 Certificates</Badge>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-children">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Link key={program.id} to={`/programs/${program.id}`}>
                <Card 
                  className="group relative border-border hover:border-primary/50 transition-all hover-lift overflow-hidden animate-scale-in bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {program.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white border-0 shadow-lg animate-glow">
                        ⭐ Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Level Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur text-foreground font-semibold">{program.level}</Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 relative flex flex-col h-[calc(100%-13rem)]">
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {program.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{program.students}</span>
                        </div>
                      </div>                      {/* Highlights */}
                      <div className="mb-4 flex-1">
                        <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">What You'll Learn:</p>
                        <ul className="space-y-2">
                          {program.highlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                        <div>
                          <p className="text-xs text-muted-foreground">Starting at</p>
                          <p className="text-2xl font-bold text-primary">{program.price}</p>
                        </div>
                        <Button variant="cta" size="sm" className="group/btn hover-lift">
                          View Details
                          <span className="ml-1 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          <Card className="text-center p-6 bg-gradient-to-br from-card to-muted/20 border-primary/20 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">8+</div>
            <p className="text-sm text-muted-foreground">Programs Available</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-card to-muted/20 border-primary/20 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">25K+</div>
            <p className="text-sm text-muted-foreground">Active Students</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-card to-muted/20 border-primary/20 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-card to-muted/20 border-primary/20 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Online Mode</p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Program to Choose?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our WhatsApp community to get personalized guidance and talk to our course advisors. 
              We'll help you find the perfect program for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="hover-lift shadow-xl group" asChild>
                <a
                  href="https://wa.me/YOUR_NUMBER?text=I%20need%20help%20choosing%20a%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Consultation
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover-lift backdrop-blur" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
