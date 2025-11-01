import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Home, Info, Users, Calendar, Award, UserPlus, FolderOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Events from "@/components/Events";
import Leadership from "@/components/Leadership";
import Join from "@/components/Join";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ArtisticBackground from "@/components/ArtisticBackground";
import logo from "@/assets/logo.png"; // ✅ Import your logo

const Index = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero", icon: <Home className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "About", href: "#about", icon: <Info className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "Teams", href: "#teams", icon: <Users className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "Events", href: "#events", icon: <Calendar className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "Leadership", href: "#leadership", icon: <Award className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "Join", href: "#join", icon: <UserPlus className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "Projects", href: "#projects", icon: <FolderOpen className="h-5 w-5 shrink-0 text-primary" /> },
    { label: "Contact", href: "#contact", icon: <Mail className="h-5 w-5 shrink-0 text-primary" /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden flex w-full">
      <ArtisticBackground />
      
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div key={idx} onClick={() => scrollToSection(link.href)}>
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <a
              href="https://forms.gle/hPaXQNf8nhrdas3M8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm animate-glow-pulse hover:scale-105 transition-transform"
            >
              <UserPlus className="h-5 w-5 shrink-0" />
              {open && <span>Join Now</span>}
            </a>
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 w-full lg:ml-[80px]">
        <Hero />
        <About />
        <Teams />
        <Events />
        <Leadership />
        <Join />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

// ✅ Full Logo (when sidebar open)
const Logo = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal">
      <img
        src={logo}
        alt="CODE VIVEKS Logo"
        className="h-10 w-auto drop-shadow-glow hover:scale-105 transition-transform"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold whitespace-pre text-glow text-lg"
      >
        CODE VIVEKS
      </motion.span>
    </div>
  );
};

// ✅ Icon Only (when sidebar collapsed)
const LogoIcon = () => {
  return (
    <div className="relative z-20 flex items-center justify-center py-1">
      <img
        src={logo}
        alt="CODE VIVEKS Logo Icon"
        className="h-10 w-auto drop-shadow-glow"
      />
    </div>
  );
};

export default Index;
