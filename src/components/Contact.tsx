import { clubInfo } from "@/data/content";
import { Mail, Instagram, Linkedin, Github, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-20 relative border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-2 text-glow">CODE VIVEKS</h3>
            <p className="text-muted-foreground mb-4">{clubInfo.tagline}</p>
            <p className="text-sm text-foreground/60">{clubInfo.institution}</p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Teams", "Events", "Leadership", "Join"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${clubInfo.contact.email}`}
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{clubInfo.contact.email}</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href={clubInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href={clubInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href={clubInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href={clubInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg neon-border hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CODE VIVEKS. All rights reserved. Built with passion by the Web Development Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
