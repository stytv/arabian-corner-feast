"use client";

import React, { memo, useMemo } from "react";
import { Calendar, Clock, Trophy, Users } from "lucide-react";
import { clubInfo } from "@/data/content";
import AnimatedSection from "@/components/AnimatedSection";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

/**
 * Small memoized renderer for the inner events list (keeps BentoGridItem light)
 */
const EventList: React.FC<{ events: { name: string; description?: string }[] }> =
  memo(function EventList({ events }) {
    return (
      <div className="space-y-2 mt-2">
        {events.map((ev, i) => (
          <div
            key={i}
            className="text-sm sm:text-base bg-white/5 dark:bg-white/10 rounded-md px-3 py-2 border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <p className="font-semibold text-foreground">{ev.name}</p>
            {ev.description && (
              <p className="text-xs text-muted-foreground">{ev.description}</p>
            )}
          </div>
        ))}
      </div>
    );
  });
EventList.displayName = "EventList";

/**
 * Events section
 * - eventCategories is memoized so it isn't recreated each render
 * - BentoGridItem header receives a pre-built EventList (component is memoized)
 */
const Events: React.FC = () => {
  const eventCategories = useMemo(() => {
    return [
      {
        id: "weekly",
        title: "Weekly & Bi-weekly",
        description:
          "Hands-on coding sessions and practice meetups that sharpen your skills regularly.",
        icon: <Clock className="w-5 h-5 text-primary" />,
        events: [...clubInfo.events.weekly, ...clubInfo.events.biweekly],
        className: "md:col-span-1",
      },
      {
        id: "monthly",
        title: "Monthly Events",
        description:
          "Workshops, hackathons, and group activities to push your learning further.",
        icon: <Calendar className="w-5 h-5 text-secondary" />,
        events: clubInfo.events.monthly,
        className: "md:col-span-1",
      },
      {
        id: "semester",
        title: "Semester-long Programs",
        description:
          "Project-based learning and mentorship programs that run across semesters.",
        icon: <Users className="w-5 h-5 text-accent" />,
        events: clubInfo.events.semester,
        className: "md:col-span-1",
      },
      {
        id: "annual",
        title: "Annual Flagship Events",
        description:
          "Our biggest tech showcases and innovation events of the year.",
        icon: <Trophy className="w-5 h-5 text-primary" />,
        events: clubInfo.events.annual,
        className: "md:col-span-3",
      },
    ];
  }, []);

  const externalCompetitions = useMemo(() => clubInfo.events.external, []);

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-glow">
            Events & Activities
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Regular events to keep you learning and growing
          </p>
        </div>

        <AnimatedSection direction="up">
          <div className="glass-strong rounded-2xl p-4 sm:p-6 neon-border transition-all hover:scale-[1.01] duration-500">
            <BentoGrid className="max-w-6xl mx-auto">
              {eventCategories.map((category) => (
                <BentoGridItem
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  className={category.className}
                  header={<EventList events={category.events} />}
                />
              ))}
            </BentoGrid>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3}>
          <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border-secondary mt-12 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-glow-secondary">
              External Competitions
            </h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              We actively participate in prestigious coding competitions:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {externalCompetitions.map((competition, idx) => (
                <div
                  key={idx}
                  className="glass rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 border border-secondary/30 hover:border-secondary transition-colors"
                >
                  <span className="text-xs sm:text-sm font-medium">
                    {competition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default memo(Events);
