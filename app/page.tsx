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
      </div>

      <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center pb-6">
        <Dock />
      </div>
    </main>
  );
}

