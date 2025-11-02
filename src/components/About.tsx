import { clubInfo } from "@/data/content";
import { Target, Lightbulb } from "lucide-react";
import * as Icons from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { memo } from "react";

const About = memo(() => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-glow">
            Vision & Mission
          </h2>
          <p className="text-muted-foreground text-lg">
            Building the future of tech education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection direction="left">
            <div className="neumorphic rounded-2xl p-8 glow-primary hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-glow">Our Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {clubInfo.vision}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="neumorphic rounded-2xl p-8 glow-primary hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-glow text-secondary">
                  Our Mission
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {clubInfo.mission}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient text-glow">
            Core Objectives
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubInfo.objectives.map((objective, index) => {
              const IconComponent =
                Icons[objective.icon as keyof typeof Icons] as React.ComponentType<{
                  className?: string;
                }>;
              return (
                <div
                  key={`objective-${index}`}
                  className="glass rounded-xl p-6 glow-primary hover:glow-primary hover:scale-105 transition-all group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`objective-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/10 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
