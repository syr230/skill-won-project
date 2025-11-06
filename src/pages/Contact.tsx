import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast({
      title: "Opening WhatsApp",
      description: "We'll redirect you to WhatsApp to send your message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Fastest way to reach us",
      detail: "Available 24/7",
      link: "https://wa.me/YOUR_NUMBER",
      cta: "Chat Now",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@skillwon.com",
      detail: "We reply within 24 hours",
      link: "mailto:info@skillwon.com",
      cta: "Send Email",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      detail: "Mon-Fri 9AM-6PM IST",
      link: "tel:+15551234567",
      cta: "Call Us",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Mumbai, Maharashtra",
      detail: "India",
      link: null,
      cta: null,
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs? We'd love to hear from you. 
            Choose your preferred way to connect with us.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger-children">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index} 
                className="group border-border hover:border-primary/50 transition-all hover-lift animate-scale-in bg-gradient-to-br from-card to-muted/20 backdrop-blur overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Icon with Gradient Background */}
                  <div className={`mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">{method.content}</p>
                  <p className="text-xs text-muted-foreground/70 mb-4">{method.detail}</p>
                  
                  {method.link && method.cta && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary/10" 
                      asChild
                    >
                      <a href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {method.cta}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Card className="border-border bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" variant="cta" className="w-full text-lg h-14 hover-lift shadow-lg group">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message via WhatsApp
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you'll be redirected to WhatsApp to send your message directly.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h3 className="text-2xl font-bold mb-4">Need Quick Answers?</h3>
          <p className="text-muted-foreground mb-6">
            Join our active WhatsApp community for instant support and connect with fellow learners
          </p>
          <Button variant="outline" size="lg" className="hover-lift" asChild>
            <a href="https://wa.me/YOUR_NUMBER?text=I%20want%20to%20join%20the%20community" target="_blank" rel="noopener noreferrer">
              Join WhatsApp Community
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
