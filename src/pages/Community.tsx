import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Lightbulb, Heart, Shield, Zap } from "lucide-react";

const Community = () => {
  const benefits = [
    {
      icon: Users,
      title: "Network with Peers",
      description: "Connect with thousands of learners from diverse backgrounds and skill levels.",
    },
    {
      icon: Lightbulb,
      title: "Get Instant Help",
      description: "Ask questions and get quick answers from instructors and fellow students.",
    },
    {
      icon: Zap,
      title: "Share Resources",
      description: "Access shared notes, projects, and learning materials from the community.",
    },
    {
      icon: Heart,
      title: "Find Study Groups",
      description: "Form study groups, work on projects together, and learn collaboratively.",
    },
  ];

  const rules = [
    "Be respectful and supportive of all members",
    "No spam or self-promotion without permission",
    "Keep conversations relevant to learning and courses",
    "Share knowledge and help others when you can",
    "Ask questions - there are no stupid questions!",
    "Respect privacy - don't share personal information",
  ];

  const stats = [
    { number: "8,500+", label: "Active Members" },
    { number: "150+", label: "Daily Discussions" },
    { number: "95%", label: "Response Rate" },
    { number: "24/7", label: "Community Support" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <MessageCircle className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our WhatsApp Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with fellow learners, get instant support, and stay updated with the latest 
            course materials and opportunities.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a
              href="https://wa.me/YOUR_NUMBER?text=I%20want%20to%20join%20the%20Skillwon%20community"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Group
            </a>
          </Button>
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

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Community?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Community Rules */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Community Guidelines</h2>
                <p className="text-muted-foreground">
                  To maintain a positive and productive learning environment, we ask all members to follow these simple rules:
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">{index + 1}.</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Past Projects Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Student Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            See what our community members are building and get inspired!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Chatbot for Customer Service",
                author: "Priya S.",
                course: "AI",
              },
              {
                title: "Sales Dashboard with Power BI",
                author: "Rahul K.",
                course: "Data Analytics",
              },
              {
                title: "E-commerce Platform",
                author: "Ananya M.",
                course: "Web Development",
              },
            ].map((project, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4" />
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">By {project.author}</span>
                    <span className="text-primary font-medium">{project.course}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Become part of a thriving community of learners and accelerate your growth!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://wa.me/YOUR_NUMBER?text=I'm%20ready%20to%20join%20the%20community"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Community
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;
