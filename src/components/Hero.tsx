import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logo.png";
import { clubInfo } from "@/data/content";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm neon-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>SVIT's Premier Coding Club</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-glow">
              {clubInfo.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground">
              {clubInfo.hero.subtitle}
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {clubInfo.hero.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {clubInfo.hero.stats.map((stat, index) => (
                <div key={index} className="glass-strong rounded-lg px-6 py-4 neon-border">
                  <div className="text-3xl font-bold text-glow-secondary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => window.open(clubInfo.contact.googleForm, "_blank")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg px-8 animate-glow-pulse hover:scale-105 transition-transform"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="glass border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden neon-border shadow-2xl shadow-primary/20">
              <img
                src={heroImage}
                alt="Futuristic coding technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass-strong rounded-lg p-3 neon-border-secondary animate-float">
              <div className="text-sm font-semibold text-secondary">6 Teams</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-lg p-3 neon-border animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="text-sm font-semibold text-primary">150+ Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
