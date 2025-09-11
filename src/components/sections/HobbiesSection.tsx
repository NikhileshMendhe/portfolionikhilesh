import { useState } from 'react';
import { Music, Gamepad2, Coffee, Camera, Book, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HobbiesSection = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const hobbies = [
    {
      icon: Music,
      emoji: "🎵",
      title: "Music Lover",
      fact: "I code better with lo-fi beats playing in the background. My Spotify playlist has over 500 coding tracks!",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: Gamepad2,
      emoji: "🎮",
      title: "Gaming",
      fact: "Strategy games and puzzle games are my favorite. They help me think algorithmically and solve complex problems.",
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      icon: Coffee,
      emoji: "☕",
      title: "Coffee Enthusiast",
      fact: "I've tried over 20 different coffee brewing methods. Nothing beats a perfect cup while debugging code at 2 AM.",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10"
    },
    {
      icon: Camera,
      emoji: "📸",
      title: "Photography",
      fact: "I love capturing moments during hackathons and tech events. Photography teaches me to see details and perspectives.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: Book,
      emoji: "📚",
      title: "Tech Reading",
      fact: "Always reading about new technologies, design patterns, and industry trends. Currently exploring AI and ML.",
      color: "text-red-400",
      bgColor: "bg-red-400/10"
    },
    {
      icon: Plane,
      emoji: "✈️",
      title: "Travel Dreams",
      fact: "Planning to visit tech hubs around the world - Silicon Valley, Tokyo, Berlin. Want to experience different tech cultures.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10"
    }
  ];

  const toggleFlip = (index) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold handwritten-bold mb-4 neon-text">
            🎮 Fun & Hobbies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Life beyond code - what keeps me creative and inspired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            const isFlipped = flippedCards.has(index);

            return (
              <div
                key={index}
                className="group perspective-1000 h-64"
                style={{ 
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <Card
                  className="relative w-full h-full cursor-pointer transition-all duration-700 transform-style-preserve-3d bg-card/50 border-border hover:border-primary/50"
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                  onClick={() => toggleFlip(index)}
                >
                  {/* Front side */}
                  <CardContent
                    className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center backface-hidden"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${hobby.bgColor} mb-6 pulse-glow`}>
                      <span className="text-4xl">{hobby.emoji}</span>
                    </div>
                    <h3 className="text-2xl font-bold handwritten neon-text mb-4">
                      {hobby.title}
                    </h3>
                    <div className="text-sm text-muted-foreground opacity-70">
                      Click to reveal more
                    </div>
                  </CardContent>

                  {/* Back side */}
                  <CardContent
                    className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <IconComponent className={`w-12 h-12 ${hobby.color} mb-4`} />
                    <h3 className="text-xl font-bold handwritten neon-text mb-4">
                      {hobby.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {hobby.fact}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Fun stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold handwritten neon-text">500+</div>
              <div className="text-sm text-muted-foreground">Coding Tracks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold handwritten neon-text">50+</div>
              <div className="text-sm text-muted-foreground">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold handwritten neon-text">∞</div>
              <div className="text-sm text-muted-foreground">Cups of Coffee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold handwritten neon-text">20+</div>
              <div className="text-sm text-muted-foreground">Books Read</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;