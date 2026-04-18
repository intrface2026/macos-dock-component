"use client";

import { Dock } from "@/components/Dock";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#030303] relative overflow-hidden flex flex-col items-center justify-center selection:bg-white/20">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>
      </div>
      
      {/* Demo Content */}
      <div className="z-10 text-center space-y-8 px-4">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
          macOS Dock
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed px-4">
          A professional, sleek macOS dock experience rebuilt with <span className="text-white/80 font-medium">Next.js</span>, <span className="text-white/80 font-medium">Tailwind CSS</span>, and <span className="text-white/80 font-medium">Framer Motion</span> for high-performance fluid interactions.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-medium">Premium Component Implementation</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        {/* Installation Command */}
        <div className="pt-6">
          <div className="group relative inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
            <span className="text-xs font-mono text-white/50 tracking-tight">npx @prathameshnaidu/macos-dock</span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText("npx @prathameshnaidu/macos-dock");
                const btn = document.getElementById("copy-btn");
                if (btn) btn.innerText = "COPIED";
                setTimeout(() => { if (btn) btn.innerText = "COPY"; }, 2000);
              }}
              className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-[9px] font-bold text-white tracking-widest transition-colors cursor-pointer"
            >
              <span id="copy-btn">COPY</span>
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-0 right-0 z-40 flex justify-center pb-6">
        <Dock />
      </div>

      {/* Stable Attribution Tag */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end gap-1">
          <span className="text-[11px] text-white/50 font-medium tracking-[0.1em] bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
            Crafted by Prathamesh Naidu
          </span>
        </div>
      </div>

      {/* Device Lockout Overlay */}
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center lg:hidden px-6 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
             <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Desktop Only Experience</h2>
          <p className="text-neutral-500 text-sm max-w-[240px] leading-relaxed">
            This professional macOS dock experience is optimized specifically for laptop and desktop screens.
          </p>
        </div>
      </div>
    </main>
  );
}

