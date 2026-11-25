import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { marketingInsights } from '@/data/marketingData';

const BlogSection = () => {
  return (
    <section id="insights" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            ✍️ Marketing Insights
          </h2>
          <div className="h-1 w-24 bg-gradient-neon mx-auto mb-6 neon-glow rounded-full" />
          <p className="text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Actionable playbooks on paid ads, SEO breakdowns, attribution tracking, and campaign teardowns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {marketingInsights.map((post, index) => (
            <Card
              key={index}
              data-placeholder="[Placeholder]"
              className="group bg-white/90 dark:bg-card/50 border border-slate-200/90 dark:border-border hover:border-blue-400 dark:hover:border-primary/50 cursor-pointer transition-all duration-500 transform hover:scale-105 animate-slide-in-left flex flex-col justify-between shadow-md hover:shadow-xl rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Article category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{post.image}</div>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-secondary/50 text-slate-700 dark:text-secondary-foreground border border-slate-200 dark:border-secondary font-medium">
                      {post.category}
                    </Badge>
                  </div>

                  {/* TODO: [Placeholder] Article title */}
                  <h3 className="text-xl font-bold handwritten mb-3 text-slate-900 dark:text-foreground group-hover:text-blue-600 transition-colors relative leading-snug">
                    {post.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                  </h3>

                  {/* TODO: [Placeholder] Article excerpt */}
                  <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  {/* Meta information */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-blue-500" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-blue-500" />
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
                        className="text-xs bg-blue-50 dark:bg-primary/10 text-blue-600 dark:text-primary border border-blue-200/60 dark:border-primary/30 font-medium"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read Article Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn bg-blue-50 dark:bg-primary/10 text-blue-600 dark:text-primary border border-blue-200 dark:border-primary/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 font-semibold rounded-xl"
                  >
                    <BookOpen className="w-3 h-3 mr-2" />
                    Read Breakdown
                    <ArrowUpRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
