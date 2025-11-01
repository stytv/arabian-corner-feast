import { useState } from "react";
import { clubInfo } from "@/data/content";
import { ChevronDown, ChevronUp, Users } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// ✅ Leadership images (all local assets)
import President from "@/assets/president.jpg";
import Secretary from "@/assets/Secretary.jpg";
import ViceAndTreasurer from "@/assets/viseandtreasurer.jpg";
import Event from "@/assets/event.jpg";
import PROutreachHead from "@/assets/pr.jpg";
import OperationsHead from "@/assets/operations.jpg";
import PhotographyHead from "@/assets/logo.png";
import DesigningHead from "@/assets/logo.png";
import FacultyCoordinator from "@/assets/logo.png";
import Technical from "@/assets/Technical.jpg";

const Leadership = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  // ✅ Leadership testimonials data
  const leadershipTestimonials = [
    {
      quote:
        "As the President and Founder of CODE VIVEKS, I strive to foster innovation, leadership, and a culture of continuous learning within our club.",
      name: "M. Sai Deekshith",
      designation: "Principal Executive Officer & Club Founder",
      src: President,
    },
    {
      quote:
        "Responsible for maintaining club records and correspondence, ensuring smooth communication and documentation within the organization.",
      name: "C. Sakshi",
      designation: "Secretary",
      src: Secretary,
    },
    {
      quote:
        "Assists the Secretary in administrative tasks while managing the club’s finances with transparency and accountability.",
      name: "Sakshi & Nikhil",
      designation: "Vice-Secretary & Treasurer",
      src: ViceAndTreasurer,
    },
    {
      quote:
        "Leading the technical initiatives of CODE VIVEKS by overseeing development projects, mentoring members, and ensuring innovation thrives in every tech domain.",
      name: "Younus Syed",
      designation: "Technical Lead",
      src: Technical,
    },
    {
      quote:
        "Responsible for planning and executing impactful workshops and events that inspire creativity and hands-on learning among members.",
      name: "Nikhil",
      designation: "Event & Workshop Head",
      src: Event,
    },
    {
      quote:
        "Handles public relations, outreach, and branding activities to promote CODE VIVEKS and expand its community presence.",
      name: "Sirisha",
      designation: "PR & Outreach Head",
      src: PROutreachHead,
    },
    {
      quote:
      "Acts as the bridge between the club and faculty, ensuring alignment with academic goals and institutional support.",
      name: "S. Jyotsna Garu",
      designation: "Faculty Coordinator",
      src: FacultyCoordinator,
    },
    // {
    //   quote:
    //     "Ensures all operational aspects of CODE VIVEKS run seamlessly, managing logistics, resources, and internal coordination.",
    //   name: "Rehan Hussain",
    //   designation: "Operations Head",
    //   src: OperationsHead,
    // },
    // {
    //   quote:
    //     "Captures the spirit of CODE VIVEKS through photography and visual storytelling, curating memorable moments from all our events.",
    //   name: "C. Kovidh",
    //   designation: "Photography Head",
    //   src: PhotographyHead,
    // },
    // {
    //   quote:
    //     "Designs and maintains the visual identity of CODE VIVEKS through creative graphics and digital branding materials.",
    //   name: "Y. Sai Tarun",
    //   designation: "Designing Head",
    //   src: DesigningHead,
    // },
  ];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Core Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the minds behind CODE VIVEKS
          </p>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={leadershipTestimonials} autoplay />

        {/* Organizational Structure */}
        <div className="text-center mt-16 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Organizational Structure
          </h3>
          <p className="text-muted-foreground text-lg">
            Organized hierarchy for effective management
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* President */}
          <div className="glass-strong rounded-2xl p-6 neon-border text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold text-glow">President</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Overall Club Leadership
            </p>
          </div>

          {/* Connector Line */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" />
          </div>

          {/* Core Committee */}
          <div className="glass rounded-xl p-4 border border-secondary/30 text-center animate-fade-in">
            <h4 className="font-semibold text-secondary mb-2">
              Core Committee
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {clubInfo.leadership.structure.slice(1).map((position, index) => (
                <div
                  key={index}
                  className={`glass-strong rounded-lg p-3 cursor-pointer hover:scale-105 transition-all neon-border ${
                    expandedRole === position.role ? "bg-primary/10" : ""
                  }`}
                  onClick={() =>
                    setExpandedRole(
                      expandedRole === position.role ? null : position.role
                    )
                  }
                >
                  <p className="text-sm font-semibold mb-1">{position.role}</p>
                  {expandedRole === position.role ? (
                    <ChevronUp className="w-4 h-4 mx-auto text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 mx-auto text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Role Details */}
          {expandedRole && (
            <div className="glass-strong rounded-2xl p-6 neon-border animate-slide-up">
              <h4 className="text-xl font-bold mb-4 text-primary">
                {expandedRole} Responsibilities
              </h4>
              <ul className="space-y-2 text-left">
                {clubInfo.leadership.structure
                  .find((s) => s.role === expandedRole)
                  ?.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-secondary mt-1">▸</span>
                      <span className="text-foreground/80">{resp}</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-primary" />
          </div>

          {/* Team Leads */}
          <div className="glass rounded-xl p-6 border border-primary/30 text-center animate-fade-in">
            <h4 className="font-semibold text-primary mb-3">6 Team Leads</h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {clubInfo.teams.map((team, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-lg p-2 text-xs hover:scale-105 transition-all"
                >
                  {team.name}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              {clubInfo.leadership.teamLeads}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
