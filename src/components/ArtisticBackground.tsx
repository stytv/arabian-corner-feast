import { useTheme } from "@/contexts/ThemeContext";

const ArtisticBackground = () => {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${
      theme === "dark" 
        ? "bg-gradient-to-br from-[#0a1628] via-[#0f0a1a] to-[#1a0f1e]" 
        : "bg-gradient-to-br from-sky-50 via-orange-50 to-blue-50"
    }`}>
      {/* Large animated blobs */}
      <div className="absolute inset-0">
        {/* Blue blobs */}
        <div className={`absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full blur-[100px] animate-float ${
          theme === "dark" 
            ? "bg-gradient-to-br from-[#5BC0F8]/60 via-[#3A9FD9]/40 to-transparent" 
            : "bg-gradient-to-br from-sky-300/30 via-blue-200/20 to-transparent"
        }`} style={{ animationDelay: '0s', animationDuration: '20s' }} />
        <div className={`absolute top-1/3 -right-48 w-[900px] h-[900px] rounded-full blur-[110px] animate-float ${
          theme === "dark" 
            ? "bg-gradient-to-bl from-[#3A9FD9]/50 via-[#5BC0F8]/35 to-transparent" 
            : "bg-gradient-to-bl from-blue-300/25 via-sky-200/15 to-transparent"
        }`} style={{ animationDelay: '5s', animationDuration: '25s' }} />
        
        {/* Orange blobs */}
        <div className={`absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full blur-[90px] animate-float ${
          theme === "dark" 
            ? "bg-gradient-to-tr from-[#FF6B35]/60 via-[#FF8C42]/40 to-transparent" 
            : "bg-gradient-to-tr from-orange-300/30 via-amber-200/20 to-transparent"
        }`} style={{ animationDelay: '3s', animationDuration: '22s' }} />
        <div className={`absolute top-1/2 right-1/4 w-[750px] h-[750px] rounded-full blur-[100px] animate-float ${
          theme === "dark" 
            ? "bg-gradient-to-bl from-[#FF8C42]/50 via-[#FF6B35]/35 to-transparent" 
            : "bg-gradient-to-bl from-amber-300/25 via-orange-200/15 to-transparent"
        }`} style={{ animationDelay: '7s', animationDuration: '18s' }} />
        
        {/* Additional colorful blobs */}
        <div className={`absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[90px] animate-float ${
          theme === "dark" 
            ? "bg-gradient-to-br from-[#5BC0F8]/35 via-[#5BC0F8]/20 to-transparent" 
            : "bg-gradient-to-br from-sky-400/20 via-blue-300/10 to-transparent"
        }`} style={{ animationDelay: '9s', animationDuration: '23s' }} />
        <div className={`absolute bottom-1/4 right-1/3 w-[550px] h-[550px] rounded-full blur-[95px] animate-float ${
          theme === "dark" 
            ? "bg-gradient-to-tl from-[#FF6B35]/40 via-[#FF6B35]/25 to-transparent" 
            : "bg-gradient-to-tl from-orange-400/25 via-amber-300/15 to-transparent"
        }`} style={{ animationDelay: '11s', animationDuration: '26s' }} />
        
        {/* Geometric accent shapes */}
        <div className={`absolute top-20 left-1/4 w-48 h-48 border-3 rotate-45 animate-float ${
          theme === "dark" ? "border-[#5BC0F8]/50" : "border-sky-400/30"
        }`} style={{ animationDelay: '2s', animationDuration: '15s' }} />
        <div className={`absolute bottom-1/3 right-1/4 w-40 h-40 border-3 rotate-12 animate-float ${
          theme === "dark" ? "border-[#FF6B35]/50" : "border-orange-400/30"
        }`} style={{ animationDelay: '4s', animationDuration: '17s' }} />
        
        {/* Hexagon shapes */}
        <svg className={`absolute top-32 right-1/3 w-28 h-28 animate-float ${
          theme === "dark" ? "text-[#5BC0F8]/40" : "text-sky-400/25"
        }`} style={{ animationDelay: '1s', animationDuration: '19s' }} viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
        <svg className={`absolute bottom-1/4 left-1/3 w-36 h-36 animate-float ${
          theme === "dark" ? "text-[#FF8C42]/40" : "text-orange-400/25"
        }`} style={{ animationDelay: '6s', animationDuration: '21s' }} viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
        
        {/* Circle elements */}
        <div className={`absolute top-1/4 left-1/2 w-36 h-36 rounded-full border-3 animate-float ${
          theme === "dark" ? "border-[#5BC0F8]/40" : "border-sky-400/25"
        }`} style={{ animationDelay: '3s', animationDuration: '16s' }} />
        <div className={`absolute bottom-1/3 right-1/2 w-28 h-28 rounded-full border-3 animate-float ${
          theme === "dark" ? "border-[#FF6B35]/40" : "border-orange-400/25"
        }`} style={{ animationDelay: '5s', animationDuration: '14s' }} />
        
        {/* Dot patterns */}
        <div className="absolute top-16 right-32 flex gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={`blue-${i}`} className={`w-4 h-4 rounded-full animate-pulse ${
              theme === "dark" ? "bg-[#5BC0F8]/80" : "bg-sky-400/50"
            }`} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <div className="absolute bottom-32 left-48 flex gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={`orange-${i}`} className={`w-4 h-4 rounded-full animate-pulse ${
              theme === "dark" ? "bg-[#FF6B35]/80" : "bg-orange-400/50"
            }`} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        
        {/* Animated lines - more visible */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M 0 200 Q 400 150 800 200 T 1600 200" 
                stroke="url(#lineGradient)" 
                strokeWidth="3" 
                fill="none" />
          <path d="M 0 400 Q 500 350 1000 400 T 2000 400" 
                stroke="url(#lineGradient)" 
                strokeWidth="3" 
                fill="none" />
        </svg>
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
    </div>
  );
};

export default ArtisticBackground;
