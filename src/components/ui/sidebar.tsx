"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <DesktopSidebar className={className}>{children}</DesktopSidebar>
      <MobileSidebar className={className}>{children}</MobileSidebar>
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-screen px-3 py-4 hidden lg:flex lg:flex-col glass-strong border-r border-white/10 w-[280px] shrink-0 fixed left-0 top-0 z-50",
          className
        )}
        animate={{
          width: animate ? (open ? "280px" : "72px") : "280px",
        }}
        transition={{ 
          duration: 0.25, 
          ease: [0.4, 0, 0.2, 1] // macOS-style cubic bezier
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      {/* ✅ Simple Top Bar — Only Join Button */}
      <div
        className={cn(
          "h-16 px-4 py-4 flex flex-row lg:hidden items-center justify-between glass-strong w-full fixed top-0 left-0 right-0 z-50 border-b border-primary/20"
        )}
      >
        <div className="text-xl font-bold text-glow">CODE VIVEKS</div>

        {/* ✅ Only Join Button (Removed Menu & Sidebar Drawer) */}
        <motion.a
          href="https://forms.gle/hPaXQNf8nhrdas3M8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm hover-glow transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join
        </motion.a>
      </div>
    </>
  );
};


export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-3 group/sidebar py-2.5 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 transition-all duration-200 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
      >
        {link.icon}
      </motion.div>

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="text-foreground text-sm font-medium group-hover/sidebar:translate-x-0.5 transition-transform duration-200 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </a>
  );
};
