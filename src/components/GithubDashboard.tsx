"use client";

import { GitBranch, Github, Code, Flame } from "lucide-react";

export default function GithubDashboard() {
  // Generate a mock grid representing contribution history (24 columns x 7 rows)
  const columns = 28;
  const rows = 7;
  
  // Custom mock contribution levels (0 to 4)
  const generateContributions = () => {
    const data = [];
    for (let i = 0; i < columns * rows; i++) {
      const intensity = Math.random() > 0.35 
        ? Math.floor(Math.random() * 4) 
        : 0;
      data.push(intensity);
    }
    return data;
  };

  const contributions = generateContributions();

  // Language stats
  const languages = [
    { name: "TypeScript", percentage: 42, color: "bg-secondary" },
    { name: "JavaScript", percentage: 33, color: "bg-primary" },
    { name: "Python", percentage: 15, color: "bg-[#f59e0b]" },
    { name: "HTML & CSS", percentage: 10, color: "bg-[#e11d48]" },
  ];

  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="relative mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Github className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Open Source
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#F8FAFC]">
            Developer <span className="text-gradient-cyan">Activity Dashboard</span>
          </h3>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-4xl mx-auto rounded-[2rem] glass p-6 md:p-8 border border-white/5 relative overflow-hidden shadow-2xl bg-white/[0.002]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
          
          {/* Top Panel: Profile Summary */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-white/10 overflow-hidden bg-[#070b19]">
                <img
                  src="https://i.ibb.co/Kjcy84SR/profile.jpg"
                  alt="Sai Siddharth Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <a
                  href="https://github.com/Saisidd05"
                  target="_blank"
                  rel="noreferrer"
                  className="font-heading font-bold text-[#F8FAFC] flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  @Saisidd05 <Github className="w-4 h-4 text-[#94A3B8]" />
                </a>
                <p className="text-xs text-[#94A3B8] font-light mt-0.5">
                  B.Tech IT Developer Profile
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Saisidd05"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-full bg-white/5 border border-white/10 hover:border-primary/40 text-[#F8FAFC] transition-colors"
              >
                Follow on GitHub
              </a>
            </div>
          </div>

          {/* Middle Panel: Stats & Grid */}
          <div className="grid lg:grid-cols-12 gap-8 pt-8 items-start">
            
            {/* Left: Interactive Stats */}
            <div className="lg:col-span-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                  <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">Repositories</span>
                  <div className="flex items-end gap-1.5 mt-2">
                    <span className="text-2xl font-bold font-heading text-[#F8FAFC]">20+</span>
                    <GitBranch className="w-4 h-4 text-primary mb-1" />
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                  <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">Commits (YTD)</span>
                  <div className="flex items-end gap-1.5 mt-2">
                    <span className="text-2xl font-bold font-heading text-[#F8FAFC]">412</span>
                    <Flame className="w-4 h-4 text-secondary mb-1" />
                  </div>
                </div>
              </div>

              {/* Language Breakdown */}
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-3">
                <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" /> Language Weight
                </span>
                
                {/* Horizontal Bar representation */}
                <div className="h-2 rounded-full overflow-hidden flex w-full bg-white/5">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className={`h-full ${lang.color}`}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-medium pt-1">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                      <span className="text-[#94A3B8]">{lang.name}</span>
                      <span className="text-[#F8FAFC]/80 font-mono ml-auto">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Simulated Contribution Heatmap */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider block">
                Repository Contributions (Last 6 Months)
              </span>

              <div className="p-5 rounded-xl bg-[#020617] border border-white/5 overflow-x-auto">
                <div 
                  className="grid gap-1.5 select-none pointer-events-none"
                  style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    width: "max-content",
                    minWidth: "100%",
                  }}
                >
                  {contributions.map((level, idx) => {
                    // map levels (0 to 4) to primary green opacity
                    let colorClass = "bg-white/5";
                    if (level === 1) colorClass = "bg-primary/20 shadow-[0_0_4px_rgba(0,208,132,0.1)]";
                    if (level === 2) colorClass = "bg-primary/50 shadow-[0_0_6px_rgba(0,208,132,0.2)]";
                    if (level === 3) colorClass = "bg-primary/80 shadow-[0_0_8px_rgba(0,208,132,0.3)]";
                    if (level === 4) colorClass = "bg-primary shadow-[0_0_10px_rgba(0,208,132,0.5)]";

                    return (
                      <div
                        key={idx}
                        className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${colorClass}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Grid Legend */}
              <div className="flex items-center justify-end gap-1.5 text-[10px] text-[#94A3B8] font-medium pt-1 font-mono">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-white/5" />
                <span className="w-2.5 h-2.5 rounded-sm bg-primary/20" />
                <span className="w-2.5 h-2.5 rounded-sm bg-primary/50" />
                <span className="w-2.5 h-2.5 rounded-sm bg-primary/80" />
                <span className="w-2.5 h-2.5 rounded-sm bg-primary" />
                <span>More</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
