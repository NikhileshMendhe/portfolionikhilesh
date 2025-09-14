import { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, GitPullRequest } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const OpenSourceSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    commits: 0,
    prs: 0,
    stars: 0,
    repos: 0
  });

  const stats = {
    commits: 250,
    prs: 15,
    stars: 45,
    repos: 8
  };

  const repos = [
    {
      name: "react-portfolio-template",
      description: "A modern, responsive portfolio template built with React and Tailwind CSS",
      language: "TypeScript",
      stars: 24,
      forks: 8,
      contributions: 3,
      lastUpdated: "2 days ago",
      topics: ["react", "portfolio", "tailwindcss", "typescript"]
    },
    {
      name: "hackathon-starter-kit",
      description: "Complete starter kit for hackathon projects with auth, database, and deployment",
      language: "JavaScript",
      stars: 12,
      forks: 5,
      contributions: 5,
      lastUpdated: "1 week ago",
      topics: ["hackathon", "nodejs", "mongodb", "express"]
    },
    {
      name: "algorithms-visualizer",
      description: "Interactive web app to visualize sorting and graph algorithms",
      language: "JavaScript",
      stars: 9,
      forks: 3,
      contributions: 2,
      lastUpdated: "3 weeks ago",
      topics: ["algorithms", "visualization", "education"]
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        commits: Math.min(prev.commits + Math.ceil(stats.commits / steps), stats.commits),
        prs: Math.min(prev.prs + Math.ceil(stats.prs / steps), stats.prs),
        stars: Math.min(prev.stars + Math.ceil(stats.stars / steps), stats.stars),
        repos: Math.min(prev.repos + Math.ceil(stats.repos / steps), stats.repos)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setAnimatedStats(stats);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="opensource" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold handwritten-bold mb-4 neon-text">
            🔓 Open Source Contributions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building in public and contributing to the developer community
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16 max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border text-center p-4 sm:p-6">
            <Github className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
            <div className="text-2xl sm:text-3xl font-bold handwritten neon-text">
              {animatedStats.commits}+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Commits</div>
          </Card>
          
          <Card className="bg-card/50 border-border text-center p-4 sm:p-6">
            <GitPullRequest className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-green-400" />
            <div className="text-2xl sm:text-3xl font-bold handwritten neon-text">
              {animatedStats.prs}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Pull Requests</div>
          </Card>
          
          <Card className="bg-card/50 border-border text-center p-4 sm:p-6">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-yellow-400" />
            <div className="text-2xl sm:text-3xl font-bold handwritten neon-text">
              {animatedStats.stars}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Stars Earned</div>
          </Card>
          
          <Card className="bg-card/50 border-border text-center p-4 sm:p-6">
            <GitFork className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-400" />
            <div className="text-2xl sm:text-3xl font-bold handwritten neon-text">
              {animatedStats.repos}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Repositories</div>
          </Card>
        </div>

        {/* Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {repos.map((repo, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Github className="w-5 h-5 text-muted-foreground" />
                    <h3 className="font-bold handwritten text-lg neon-text">
                      {repo.name}
                    </h3>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {repo.contributions} PRs
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-1" />
                      {repo.language}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {repo.forks}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                    <Badge
                      key={topicIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/50"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-primary/10 border-primary/30 hover:bg-primary/20"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-card/50 border-border hover:bg-primary/10"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground mt-3">
                  Updated {repo.lastUpdated}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Github className="w-5 h-5 mr-2" />
            View Full GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;