"use client";
import { useState, memo } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/sidebar";
import {
  Home,
  Info,
  Users,
  Calendar,
  Award,
  UserPlus,
  FolderOpen,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Events from "@/components/Events";
import Leadership from "@/components/Leadership";
import Join from "@/components/Join";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ArtisticBackground from "@/components/ArtisticBackground";
import logo from "@/assets/logo.png";

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
    setOpen(false);
  };

  const sections = [
    { id: "hero", component: <Hero />, style: "glass animate-scaleIn" },
    { id: "about", component: <About />, style: "neumorphic-soft animate-fadeInUp" },
    { id: "leadership", component: <Leadership />, style: "glass animate-slideInLeft" },
    { id: "teams", component: <Teams />, style: "neumorphic-soft animate-fadeInUp" },
    { id: "events", component: <Events />, style: "glass animate-slideInRight" },
    { id: "join", component: <Join />, style: "neumorphic-soft animate-fadeInUp" },
    { id: "projects", component: <Projects />, style: "glass animate-scaleIn" },
    { id: "contact", component: <Contact />, style: "neumorphic-soft animate-fadeInUp" },
  ];

  return (
    <div className="relative min-h-screen flex w-full bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      <ArtisticBackground />

      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 glass-strong rounded-2xl border border-white/10 shadow-lg shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link) => (
                <div
                  key={`nav-${link.label}`}
                  onClick={() => scrollToSection(link.href)}
                  className="cursor-pointer"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <ThemeToggle open={open} />
            <motion.a
              href="https://forms.gle/hPaXQNf8nhrdas3M8"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn flex items-center justify-center gap-2 font-semibold text-sm text-primary-foreground rounded-xl py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              data-testid="button-join-now"
            >
              <UserPlus className="h-5 w-5 shrink-0" />
              {open && <span>Join Now</span>}
            </motion.a>
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 w-full lg:ml-[72px] px-6 py-10 space-y-10">
        {sections.map((section, i) => (
          <motion.section
            key={section.id}
            id={section.id}
            className={`${section.style} rounded-2xl hover-lift scroll-reveal p-4 md:p-8 transition-all duration-700 content-visibility-auto`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {section.component}
          </motion.section>
        ))}
      </main>
    </div>
  );
};

const Logo = memo(() => (
  <motion.div
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <img
      src={logo}
      alt="CODE VIVEKS Logo"
      className="h-10 w-auto drop-shadow-lg hover:drop-shadow-glow transition-all duration-300"
      loading="eager"
    />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-bold whitespace-pre text-gradient text-lg"
    >
      CODE VIVEKS
    </motion.span>
  </motion.div>
));

Logo.displayName = "Logo";

const LogoIcon = memo(() => (
  <motion.div
    className="relative z-20 flex items-center justify-center py-1"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <img
      src={logo}
      alt="CODE VIVEKS Icon"
      className="h-10 w-auto drop-shadow-lg hover:drop-shadow-glow transition-all duration-300"
      loading="eager"
    />
  </motion.div>
));

LogoIcon.displayName = "LogoIcon";

const ThemeToggle = memo(({ open }: { open: boolean }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border-0 hover:bg-white/5 active:bg-white/10 transition-all w-full backdrop-blur-sm neumorphic-btn"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      data-testid="button-theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 shrink-0 text-primary" />
      ) : (
        <Moon className="h-5 w-5 shrink-0 text-primary" />
      )}
      {open && (
        <motion.span
          className="text-sm font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </motion.span>
      )}
    </motion.button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default Index;
