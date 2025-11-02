import { clubInfo } from "@/data/content";
import { Calendar, CheckCircle2, FileText, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, memo } from "react";

const Join = memo(() => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who can apply?",
      a: "All SVIT students from any branch can apply. We value passion and commitment over just grades."
    },
    {
      q: "What's the time commitment?",
      a: "Minimum 75% attendance at club activities. Approximately 4-6 hours per week including events and practice."
    },
    {
      q: "Can I join multiple teams?",
      a: "You'll be allocated to one primary team based on your interests and assessment, but can collaborate across teams."
    }
  ];

  return (
    <section id="join" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-glow">Join CODE VIVEKS</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Your journey to tech excellence starts here</p>
        </div>

        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-glow-secondary">Selection Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {clubInfo.selection.phases.map((phase, index) => {
              const icons = [FileText, Calendar, Users2, CheckCircle2];
              const IconComponent = icons[index];
              return (
                <div
                  key={index}
                  className="glass-strong rounded-2xl p-4 sm:p-6 neon-border hover:scale-105 transition-transform animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 sm:p-3 rounded-full bg-primary/20 mb-3 sm:mb-4">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{index + 1}</div>
                    <h4 className="font-bold text-base sm:text-lg mb-2">{phase.phase}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">{phase.description}</p>
                    <span className="text-xs text-secondary">{phase.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border text-center mb-8 sm:mb-12 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-glow">Ready to Apply?</h3>
          <Button
            size="lg"
            onClick={() => window.open(clubInfo.contact.googleForm, "_blank")}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 animate-glow-pulse hover:scale-105 transition-transform w-full sm:w-auto"
            data-testid="button-apply-form"
          >
            Apply Now via Google Form
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="glass rounded-2xl p-4 sm:p-6 neon-border-secondary animate-slide-up">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-glow-secondary">Member Benefits</h4>
            <ul className="space-y-2">
              {clubInfo.selection.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6 neon-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-glow">Eligibility Criteria</h4>
            <ul className="space-y-2">
              {clubInfo.selection.eligibility.map((criterion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/80">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-glow">Frequently Asked Questions</h3>
          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-lg overflow-hidden border border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                data-testid={`faq-${index}`}
              >
                <div className="p-3 sm:p-4 flex items-center justify-between">
                  <h5 className="font-semibold text-sm sm:text-base">{faq.q}</h5>
                  {faqOpen === index ? (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-primary/50 flex-shrink-0" />
                  )}
                </div>
                {faqOpen === index && (
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground animate-slide-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Join.displayName = "Join";

export default Join;
