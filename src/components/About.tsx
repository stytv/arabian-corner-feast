import { clubInfo } from "@/data/content";
import { Target, Lightbulb } from "lucide-react";
import * as Icons from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Vision & Mission</h2>
          <p className="text-muted-foreground text-lg">Building the future of tech education</p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-strong rounded-2xl p-8 neon-border hover:scale-[1.02] transition-transform animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/20 neon-border">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-glow">Our Vision</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">{clubInfo.vision}</p>
          </div>

          <div className="glass-strong rounded-2xl p-8 neon-border-secondary hover:scale-[1.02] transition-transform animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-secondary/20 neon-border-secondary">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-glow-secondary">Our Mission</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">{clubInfo.mission}</p>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-3xl font-bold text-center mb-8 text-glow">Core Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubInfo.objectives.map((objective, index) => {
              const IconComponent = Icons[objective.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <div
                  key={index}
                  className="glass rounded-xl p-6 neon-border hover:neon-border-secondary hover:scale-105 transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/10 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{objective.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
