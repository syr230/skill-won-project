import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Outcome-Focused",
      description: "We design courses around real-world skills that employers value.",
    },
    {
      icon: Heart,
      title: "Student-First",
      description: "Your success is our priority. We provide personalized support every step of the way.",
    },
    {
      icon: Zap,
      title: "Practical Learning",
      description: "Learn by doing. Every course includes hands-on projects and real applications.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a supportive community that learns and grows together.",
    },
  ];

  const team = [
    {
      name: "Dr. Amit Kumar",
      role: "AI Program Lead",
      background: "PhD in AI from IIT, 10+ years at Google & Microsoft",
    },
    {
      name: "Priya Sharma",
      role: "Data Analytics Lead",
      background: "Senior Data Analyst at Amazon, 8 years experience",
    },
    {
      name: "Rahul Verma",
      role: "Web Development Lead",
      background: "Full-stack developer, previously at Flipkart & Zomato",
    },
    {
      name: "Ananya Desai",
      role: "Prompt Engineering Lead",
      background: "AI Product Manager & consultant for Fortune 500 companies",
    },
  ];

  const stats = [
    { number: "8,500+", label: "Students Enrolled" },
    { number: "92%", label: "Completion Rate" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "85%", label: "Career Advancement" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Future Talent
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Skillwon was founded with a simple mission: to make high-quality tech education 
            accessible, practical, and outcome-driven. We believe that everyone deserves the 
            opportunity to learn in-demand skills and transform their career.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              We're on a mission to bridge the gap between traditional education and industry needs. 
              Our practical, project-based programs are designed to give you real skills that lead to 
              real opportunities. We focus on what matters: helping you build a successful career in tech.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Instructors</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Learn from industry experts with years of real-world experience
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <Card className="border-border">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Skillwon started in 2022 when a group of tech professionals noticed a growing gap 
                  between what universities teach and what companies actually need. We saw talented 
                  individuals struggling to break into tech careers, not because they lacked potential, 
                  but because they lacked practical, hands-on training.
                </p>
                <p>
                  We decided to do something about it. We created short, intensive programs focused 
                  on real-world skills. No fluff, no theory-only lectures—just practical projects 
                  that prepare you for actual work in the field.
                </p>
                <p>
                  Today, we've helped thousands of students launch successful careers in AI, data 
                  analytics, web development, and more. Our students work at companies like Google, 
                  Microsoft, Amazon, and countless startups. But what makes us most proud is the 
                  community we've built—a supportive network where everyone helps each other succeed.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/90 mb-6">
            Join thousands of students transforming their careers with Skillwon
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
