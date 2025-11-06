import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
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
      link: "https://wa.me/YOUR_NUMBER",
      cta: "Chat Now",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@skillwon.com",
      link: "mailto:info@skillwon.com",
      cta: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      cta: "Call Us",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Mumbai, Maharashtra, India",
      link: null,
      cta: null,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" variant="cta" className="w-full">
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card key={index} className="border-border hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-1">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{method.content}</p>
                            {method.cta && method.link && (
                              <Button variant="outline" size="sm" asChild>
                                <a href={method.link} target="_blank" rel="noopener noreferrer">
                                  {method.cta}
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* FAQ Quick Links */}
            <Card className="border-border bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Looking for Quick Answers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out our course pages for specific program details and FAQs.
                </p>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <a href="/programs">View All Programs</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <a href="/pricing">Pricing Information</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <a href="/community">Community Guidelines</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hours */}
        <Card className="border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Support Hours</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div>
                <p className="font-semibold mb-2">WhatsApp Support</p>
                <p className="text-sm text-muted-foreground">24/7 - Always available</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Email & Phone</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 6 PM IST</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
