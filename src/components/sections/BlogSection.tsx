import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How We Built a Winning Solution at SIH 2024",
      excerpt: "A deep dive into our hackathon journey, from ideation to implementation, and the key strategies that led us to the runner-up position.",
      date: "Dec 15, 2024",
      readTime: "8 min",
      category: "Hackathon",
      tags: ["SIH2024", "Innovation", "Teamwork"],
      image: "📝"
    },
    {
      title: "Full-Stack Development Best Practices",
      excerpt: "Essential practices I've learned building production applications with React, Node.js, and modern deployment strategies.",
      date: "Nov 28, 2024",
      readTime: "12 min",
      category: "Development",
      tags: ["React", "Node.js", "Best Practices"],
      image: "💻"
    },
    {
      title: "Optimizing React Apps for Performance",
      excerpt: "Practical techniques for improving React application performance, including code splitting, memoization, and bundle optimization.",
      date: "Nov 10, 2024",
      readTime: "10 min",
      category: "React",
      tags: ["Performance", "Optimization", "JavaScript"],
      image: "⚡"
    },
    {
      title: "My Journey from College to Tech Industry",
      excerpt: "Sharing insights about transitioning from computer science student to a full-stack developer, including challenges and learnings.",
      date: "Oct 22, 2024",
      readTime: "6 min",
      category: "Career",
      tags: ["Career", "Learning", "Growth"],
      image: "🎯"
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt: "A comprehensive guide to designing and implementing RESTful APIs that can handle growth and maintain performance.",
      date: "Oct 8, 2024",
      readTime: "15 min",
      category: "Backend",
      tags: ["Node.js", "API", "Scalability"],
      image: "🔧"
    },
    {
      title: "Hackathon Preparation: A Complete Guide",
      excerpt: "Everything you need to know about preparing for hackathons, from skill development to team formation and project planning.",
      date: "Sep 25, 2024",
      readTime: "9 min",
      category: "Hackathon",
      tags: ["Preparation", "Strategy", "Tips"],
      image: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            ✍️ Knowledge Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, experiences, and learnings from my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group bg-card/50 border-border hover:border-primary/50 cursor-pointer transition-all duration-500 transform hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Article icon/image */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{post.image}</div>
                  <Badge variant="outline" className="bg-secondary/50 text-secondary-foreground border-secondary">
                    {post.category}
                  </Badge>
                </div>

                {/* Title with underline animation */}
                <h3 className="text-xl font-bold handwritten mb-3 neon-text group-hover:text-primary transition-colors relative">
                  {post.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta information */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/30"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Read more button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn bg-primary/10 border-primary/30 hover:bg-primary/20 transition-all duration-300"
                >
                  <BookOpen className="w-3 h-3 mr-2" />
                  Read Article
                  <ArrowUpRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all posts button */}
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;