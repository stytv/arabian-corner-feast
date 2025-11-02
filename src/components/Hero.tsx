"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logo.png";
import { clubInfo } from "@/data/content";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-background text-foreground transition-colors duration-700"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-primary/15 blur-[120px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-secondary/15 blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm shadow-md neon-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="tracking-wide text-foreground/90">
                SVIT's Premier Coding Club
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gradient leading-tight drop-shadow-glow">
              {clubInfo.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground">
              {clubInfo.hero.subtitle}
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              {clubInfo.hero.description}
            </p>

            <div className="flex flex-wrap gap-6">
              {clubInfo.hero.stats.map((stat, index) => (
                <div
                  key={`stat-${index}-${stat.label}`}
                  className="glass-strong rounded-xl px-6 py-4 text-center shadow-lg shadow-black/10 hover:scale-[1.03] transition-transform duration-300 neon-border"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open(clubInfo.contact.googleForm, "_blank")
                }
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.05] transition-all animate-glow-pulse"
                data-testid="button-apply-now"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="glass border-primary/40 text-foreground font-medium text-lg px-8 py-6 rounded-xl hover:bg-primary/10 transition-colors"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-2xl overflow-hidden neon-border glass-strong shadow-2xl">
              <img
                src={heroImage}
                alt="CODE VIVEKS Logo - Futuristic coding technology"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="absolute -top-5 -right-5 glass-strong rounded-xl p-3 neon-border-secondary animate-float">
              <div className="text-sm font-semibold text-secondary">
                6 Teams
              </div>
            </div>

            <div
              className="absolute -bottom-5 -left-5 glass-strong rounded-xl p-3 neon-border animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-sm font-semibold text-primary">
                150+ Members
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
