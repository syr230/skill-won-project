import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, BarChart3, Code, Sparkles, Clock, Award, Users } from "lucide-react";
import aiImage from "@/assets/course-ai.jpg";
import dataImage from "@/assets/course-data.jpg";
import webdevImage from "@/assets/course-webdev.jpg";
import promptImage from "@/assets/course-prompt.jpg";

const Programs = () => {
  const programs = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Master AI fundamentals, machine learning algorithms, and build intelligent applications with hands-on projects.",
      image: aiImage,
      icon: Brain,
      level: "Intermediate",
      duration: "8 weeks",
      students: "1,200+",
      price: "$299",
      highlights: [
        "Neural Networks & Deep Learning",
        "Computer Vision & NLP",
        "Real-world AI Projects",
        "Industry-standard Tools",
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using Python, SQL, and modern visualization tools.",
      image: dataImage,
      icon: BarChart3,
      level: "Beginner",
      duration: "6 weeks",
      students: "2,500+",
      price: "$249",
      highlights: [
        "Python for Data Analysis",
        "SQL & Database Management",
        "Data Visualization",
        "Statistical Analysis",
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Build modern, responsive websites and web applications using the latest technologies and frameworks.",
      image: webdevImage,
      icon: Code,
      level: "Beginner",
      duration: "10 weeks",
      students: "3,000+",
      price: "$349",
      highlights: [
        "HTML, CSS & JavaScript",
        "React & Modern Frameworks",
        "Backend Development",
        "Full-stack Projects",
      ],
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering",
      description: "Learn to craft effective prompts and leverage AI tools for maximum productivity and creativity.",
      image: promptImage,
      icon: Sparkles,
      level: "Beginner",
      duration: "4 weeks",
      students: "1,800+",
      price: "$199",
      highlights: [
        "Advanced Prompting Techniques",
        "ChatGPT & AI Tools Mastery",
        "Workflow Automation",
        "Practical Use Cases",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of industry-focused courses designed to give you practical, 
            job-ready skills in the most in-demand fields.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.id} className="border-border hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden" />
                    <Icon className="absolute top-6 left-6 h-12 w-12 text-primary" />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="text-xs">{program.level}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {program.students}
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold mb-3">{program.title}</h2>
                      <p className="text-muted-foreground mb-6">{program.description}</p>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          What You'll Learn
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {program.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting at</p>
                        <p className="text-3xl font-bold text-primary">{program.price}</p>
                      </div>
                      <Button size="lg" variant="cta" asChild>
                        <Link to={`/programs/${program.id}`}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Program to Choose?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our WhatsApp community to get personalized guidance and talk to our course advisors.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a
              href="https://wa.me/YOUR_NUMBER?text=I%20need%20help%20choosing%20a%20program"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
