import { Dock } from "@/components/Dock";
import { Sparkles, MousePointer2, Smartphone, Cpu } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Dynamic Scaling",
      description: "Uses Framer Motion to calculate distance between cursor and icons, creating a fluid magnification effect mirroring macOS.",
      icon: MousePointer2
    },
    {
      title: "Spring Physics",
      description: "High-performance spring animations ensure the dock feels responsive and organic, avoiding rigid transitions.",
      icon: Sparkles
    },
    {
      title: "Contextual Feedback",
      description: "Includes active indicators, premium tooltips with backdrop blurs, and group hover effects for a complete UI feel.",
      icon: Cpu
    },
    {
      title: "Optimized for Desktop",
      description: "Specifically tuned for mouse interactions with a responsive lockout for mobile devices to maintain UX integrity.",
      icon: Smartphone
    }
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-14 sm:px-10 pb-32">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Features & Engineering</h1>
        <p className="text-neutral-400 text-lg max-w-2xl font-light">
          A deep dive into the technical implementation and design decisions behind this professional macOS dock component.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {features.map((feature, i) => (
          <div key={i} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">The Engineering Behind the Magic</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light">
            We don't just scale icons; we calculate their destiny in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Visual decoration) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden md:block -z-10"></div>
          
          {/* Logic Pillar 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-sky-500/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-6 rounded-3xl border border-white/10 bg-[#0A0A0A] space-y-4 font-light">
              <h4 className="text-white font-medium">Coordinate Capture</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">A MotionValue tracks the raw mouse <code className="text-white">X</code> input, feeding high-frequency data into our transform pipe.</p>
            </div>
          </div>

          {/* Logic Pillar 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-500/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-6 rounded-3xl border border-white/10 bg-[#0A0A0A] space-y-4 font-light">
              <h4 className="text-white font-medium">Distance Mapping</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">We subtract the mouse <code className="text-white">X</code> from the icon center, creating a proximity value between <code className="text-white">-150</code> and <code className="text-white">150</code>.</p>
            </div>
          </div>

          {/* Logic Pillar 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-rose-500/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-6 rounded-3xl border border-white/10 bg-[#0A0A0A] space-y-4 font-light">
              <h4 className="text-white font-medium">Visual Synthesis</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">A bell-curve interpolation maps the distance to a size range of <code className="text-white">40px</code> to <code className="text-white">85px</code>.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-white leading-tight">Zero-stutter interpolation at any refresh rate.</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                By wrapping our transformation in <code className="text-sky-400">useSpring</code>, we add physical mass and damping. This prevents the "floaty" feel of pure linear transitions and gives the dock its characteristic organic response.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative p-1 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
                 <div className="rounded-2xl bg-black p-6 font-mono text-[11px] leading-relaxed text-sky-300 overflow-hidden">
                    <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                        <div className="w-2 h-2 rounded-full bg-rose-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <span className="text-neutral-500">// 1. Calculate proximity</span><br/>
                    <span className="text-purple-400">const</span> distance = <span className="text-yellow-400">useTransform</span>(mouseX, (val) =&gt; &#123;<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">const</span> bounds = ref.current?.getBoundingClientRect();<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> val - bounds.x - bounds.width / <span className="text-rose-400">2</span>;<br/>
                    &#125;);<br/>
                    <br/>
                    <span className="text-neutral-500">// 2. Map &amp; Smooth</span><br/>
                    <span className="text-purple-400">const</span> width = <span className="text-yellow-400">useSpring</span>(<br/>
                    &nbsp;&nbsp;<span className="text-yellow-400">useTransform</span>(distance, [<span className="text-rose-400">-150, 0, 150</span>], [<span className="text-rose-400">40, 85, 40</span>])<br/>
                    );
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dock />
    </main>
  );
}
