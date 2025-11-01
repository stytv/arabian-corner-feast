const ArtisticBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#1f0a20]">
      {/* Large animated blobs - made much more visible */}
      <div className="absolute inset-0">
        {/* Blue blobs - increased opacity */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/50 via-primary/30 to-transparent blur-[120px] animate-float" 
             style={{ animationDelay: '0s', animationDuration: '20s' }} />
        <div className="absolute top-1/3 -right-48 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-primary/40 via-primary/25 to-transparent blur-[130px] animate-float" 
             style={{ animationDelay: '5s', animationDuration: '25s' }} />
        
        {/* Orange blobs - increased opacity */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-secondary/45 via-secondary/25 to-transparent blur-[110px] animate-float" 
             style={{ animationDelay: '3s', animationDuration: '22s' }} />
        <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-secondary/35 via-secondary/20 to-transparent blur-[120px] animate-float" 
             style={{ animationDelay: '7s', animationDuration: '18s' }} />
        
        {/* Additional accent blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/30 via-accent/15 to-transparent blur-[100px] animate-float" 
             style={{ animationDelay: '9s', animationDuration: '23s' }} />
        
        {/* Geometric accent shapes - more visible */}
        <div className="absolute top-20 left-1/4 w-48 h-48 border-2 border-primary/40 rotate-45 animate-float"
             style={{ animationDelay: '2s', animationDuration: '15s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border-2 border-secondary/40 rotate-12 animate-float"
             style={{ animationDelay: '4s', animationDuration: '17s' }} />
        
        {/* Hexagon shapes - more visible */}
        <svg className="absolute top-32 right-1/3 w-24 h-24 text-primary/35 animate-float" 
             style={{ animationDelay: '1s', animationDuration: '19s' }}
             viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <svg className="absolute bottom-1/4 left-1/3 w-32 h-32 text-secondary/35 animate-float" 
             style={{ animationDelay: '6s', animationDuration: '21s' }}
             viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        
        {/* Circle elements */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 rounded-full border-2 border-primary/30 animate-float"
             style={{ animationDelay: '3s', animationDuration: '16s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-24 h-24 rounded-full border-2 border-secondary/30 animate-float"
             style={{ animationDelay: '5s', animationDuration: '14s' }} />
        
        {/* Dot patterns - more visible */}
        <div className="absolute top-16 right-32 flex gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-primary/70 animate-pulse" 
                 style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <div className="absolute bottom-32 left-48 flex gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-secondary/70 animate-pulse" 
                 style={{ animationDelay: `${i * 0.15}s` }} />
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
