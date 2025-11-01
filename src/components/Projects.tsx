import { Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Innovative solutions built by our members
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="glass-strong rounded-2xl py-20 px-8 mx-auto max-w-2xl neon-border animate-pulse-slow">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Sparkles className="w-10 h-10 text-primary animate-spin-slow" />
            <h3 className="text-3xl font-bold text-primary text-glow">
              Coming Soon
            </h3>
            <p className="text-foreground/70 max-w-md">
              Our talented teams are working on exciting projects that will be revealed soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
