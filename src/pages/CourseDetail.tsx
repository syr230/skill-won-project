import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Users, Award, Download, CheckCircle2, Brain, BarChart3, Code, Sparkles } from "lucide-react";
import aiImage from "@/assets/course-ai.jpg";
import dataImage from "@/assets/course-data.jpg";
import webdevImage from "@/assets/course-webdev.jpg";
import promptImage from "@/assets/course-prompt.jpg";

const CourseDetail = () => {
  const { courseId } = useParams();

  const courseData: Record<string, any> = {
    ai: {
      title: "Artificial Intelligence",
      description: "Master AI fundamentals, machine learning algorithms, and build intelligent applications with real-world projects.",
      image: aiImage,
      icon: Brain,
      level: "Intermediate",
      duration: "8 weeks",
      effort: "5-7 hours/week",
      students: "1,200+",
      price: "$299",
      outcomes: [
        "Build and train neural networks from scratch",
        "Implement computer vision and NLP applications",
        "Deploy AI models to production",
        "Work with TensorFlow and PyTorch",
        "Create intelligent chatbots and recommendation systems",
      ],
      curriculum: [
        {
          week: "Week 1-2",
          title: "AI Fundamentals",
          topics: ["Introduction to AI & ML", "Python for AI", "NumPy & Pandas", "Linear Algebra Basics"],
        },
        {
          week: "Week 3-4",
          title: "Machine Learning",
          topics: ["Supervised Learning", "Classification & Regression", "Model Evaluation", "Feature Engineering"],
        },
        {
          week: "Week 5-6",
          title: "Deep Learning",
          topics: ["Neural Networks", "CNNs for Computer Vision", "RNNs & LSTMs", "Transfer Learning"],
        },
        {
          week: "Week 7-8",
          title: "Advanced Topics & Projects",
          topics: ["Natural Language Processing", "GANs & Transformers", "AI Ethics", "Capstone Project"],
        },
      ],
      instructor: {
        name: "Dr. Amit Kumar",
        bio: "PhD in AI from IIT, 10+ years industry experience at Google and Microsoft. Published researcher with 20+ papers.",
      },
      faqs: [
        {
          question: "Do I need prior programming experience?",
          answer: "Basic Python knowledge is recommended. We provide pre-course materials to help you get up to speed.",
        },
        {
          question: "What software/tools will I need?",
          answer: "You'll need a computer with Python installed. We provide free cloud computing credits for GPU access.",
        },
        {
          question: "Will I get a certificate?",
          answer: "Yes, you'll receive a certificate of completion after finishing all modules and the capstone project.",
        },
      ],
    },
    "data-analytics": {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using Python, SQL, and modern visualization tools.",
      image: dataImage,
      icon: BarChart3,
      level: "Beginner",
      duration: "6 weeks",
      effort: "5-7 hours/week",
      students: "2,500+",
      price: "$249",
      outcomes: [
        "Perform data analysis using Python and Pandas",
        "Write complex SQL queries for data extraction",
        "Create compelling data visualizations",
        "Build interactive dashboards",
        "Apply statistical analysis techniques",
      ],
      curriculum: [
        {
          week: "Week 1-2",
          title: "Data Fundamentals",
          topics: ["Python Basics", "Pandas & NumPy", "Data Cleaning", "Exploratory Data Analysis"],
        },
        {
          week: "Week 3-4",
          title: "SQL & Databases",
          topics: ["SQL Fundamentals", "Joins & Subqueries", "Database Design", "Query Optimization"],
        },
        {
          week: "Week 5",
          title: "Data Visualization",
          topics: ["Matplotlib & Seaborn", "Tableau/Power BI", "Dashboard Design", "Storytelling with Data"],
        },
        {
          week: "Week 6",
          title: "Analytics Project",
          topics: ["Statistical Analysis", "A/B Testing", "Business Metrics", "Final Project"],
        },
      ],
      instructor: {
        name: "Priya Sharma",
        bio: "Senior Data Analyst at Amazon. 8 years of experience in business intelligence and analytics.",
      },
      faqs: [
        {
          question: "Is this suitable for complete beginners?",
          answer: "Yes! This course starts from basics and gradually builds up your skills.",
        },
        {
          question: "What tools will I learn?",
          answer: "Python, SQL, Excel, Tableau/Power BI, and various Python libraries for data analysis.",
        },
        {
          question: "Are there any prerequisites?",
          answer: "No prerequisites. Basic computer skills and willingness to learn are all you need.",
        },
      ],
    },
    "web-development": {
      title: "Web Development",
      description: "Build modern, responsive websites and web applications using the latest technologies and frameworks.",
      image: webdevImage,
      icon: Code,
      level: "Beginner",
      duration: "10 weeks",
      effort: "6-8 hours/week",
      students: "3,000+",
      price: "$349",
      outcomes: [
        "Build responsive websites with HTML, CSS, and JavaScript",
        "Create dynamic applications with React",
        "Develop backend APIs with Node.js",
        "Deploy full-stack applications",
        "Work with databases and authentication",
      ],
      curriculum: [
        {
          week: "Week 1-3",
          title: "Frontend Fundamentals",
          topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Git & GitHub"],
        },
        {
          week: "Week 4-6",
          title: "React & Modern Frontend",
          topics: ["React Components", "State Management", "React Hooks", "UI Libraries"],
        },
        {
          week: "Week 7-8",
          title: "Backend Development",
          topics: ["Node.js & Express", "RESTful APIs", "Database Integration", "Authentication"],
        },
        {
          week: "Week 9-10",
          title: "Full-stack Project",
          topics: ["Deployment", "Testing", "Performance", "Portfolio Project"],
        },
      ],
      instructor: {
        name: "Rahul Verma",
        bio: "Full-stack developer with 12 years experience. Previously at Flipkart and Zomato.",
      },
      faqs: [
        {
          question: "Do I need to know how to code?",
          answer: "No prior coding experience required. We start from absolute basics.",
        },
        {
          question: "What will I build?",
          answer: "You'll build multiple projects including a personal website, todo app, e-commerce site, and a full-stack application.",
        },
        {
          question: "Can I build my own app after this?",
          answer: "Absolutely! You'll have all the skills needed to build and deploy your own web applications.",
        },
      ],
    },
    "prompt-engineering": {
      title: "Prompt Engineering",
      description: "Learn to craft effective prompts and leverage AI tools for maximum productivity and creativity.",
      image: promptImage,
      icon: Sparkles,
      level: "Beginner",
      duration: "4 weeks",
      effort: "4-5 hours/week",
      students: "1,800+",
      price: "$199",
      outcomes: [
        "Master advanced prompting techniques",
        "Use ChatGPT and other AI tools effectively",
        "Automate workflows with AI",
        "Generate high-quality content",
        "Build AI-powered solutions",
      ],
      curriculum: [
        {
          week: "Week 1",
          title: "Prompting Fundamentals",
          topics: ["AI Model Basics", "Prompt Structure", "Context Setting", "Best Practices"],
        },
        {
          week: "Week 2",
          title: "Advanced Techniques",
          topics: ["Few-shot Learning", "Chain-of-Thought", "Role Prompting", "Prompt Templates"],
        },
        {
          week: "Week 3",
          title: "Practical Applications",
          topics: ["Content Creation", "Code Generation", "Data Analysis", "Research & Summarization"],
        },
        {
          week: "Week 4",
          title: "AI Tools & Automation",
          topics: ["ChatGPT API", "Workflow Automation", "Custom AI Solutions", "Final Project"],
        },
      ],
      instructor: {
        name: "Ananya Desai",
        bio: "AI Product Manager and prompt engineering expert. Consultant for Fortune 500 companies.",
      },
      faqs: [
        {
          question: "Is this only about ChatGPT?",
          answer: "No, we cover ChatGPT, Claude, Midjourney, and other AI tools. The techniques apply broadly.",
        },
        {
          question: "Do I need technical skills?",
          answer: "No technical background needed. This course is designed for anyone who wants to use AI effectively.",
        },
        {
          question: "How is this different from just using ChatGPT?",
          answer: "You'll learn professional techniques that dramatically improve your results and efficiency with AI tools.",
        },
      ],
    },
  };

  const course = courseId ? courseData[courseId] : null;

  if (!course) {
    return <Navigate to="/programs" replace />;
  }

  const Icon = course.icon;

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <Link to="/programs" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Programs
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-8 w-8 text-primary" />
              <Badge variant="secondary">{course.level}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Effort</p>
                  <p className="font-semibold">{course.effort}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Students</p>
                  <p className="font-semibold">{course.students}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20the%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll Now - {course.price}
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Learning Outcomes */}
        <section className="mb-12">
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>{outcome}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Curriculum */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {course.curriculum.map((module: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="text-left">
                    <span className="text-primary">{module.week}</span> - {module.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-4">
                    {module.topics.map((topic: string, topicIndex: number) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Instructor */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Instructor</h2>
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{course.instructor.name}</h3>
                  <p className="text-muted-foreground">{course.instructor.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {course.faqs.map((faq: any, index: number) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join {course.students} students already learning {course.title}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://wa.me/YOUR_NUMBER?text=I'm%20ready%20to%20enroll"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now - {course.price}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
