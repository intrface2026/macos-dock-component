import Link from "next/link";
import { CopyCode } from "@/components/copy-code";
import { Dock } from "@/components/Dock";

const cliBlock = `npx "@intrface.in/macos-dock"`;

const manualBlock = `1. Install dependencies:
npm i framer-motion lucide-react

2. Copy the component code into components/macos-dock.tsx`;

const usageBlock = `import { Dock } from "@/components/macos-dock";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303]">
      {/* Your application content here */}
      
      <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center">
        <Dock />
      </div>
    </div>
  );
}`;

export default function GetStartedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-14 sm:px-10 pb-32">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Get Started</h1>
        <p className="text-neutral-400">Follow these steps to integrate the macOS Dock into your project.</p>
      </div>

      <div className="space-y-16">
        <section className="grid gap-12">
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm">1</span>
                    CLI Installation
                </h2>
                <div className="bg-white/[0.02] rounded-2xl border border-white/10 p-1">
                    <CopyCode title="Run this command" code={cliBlock} />
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm">2</span>
                    Manual Installation
                </h2>
                <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                    <div className="space-y-3">
                        <p className="text-neutral-300 text-sm font-medium">1. Install dependencies:</p>
                        <code className="block bg-black/60 p-4 rounded-xl text-sky-400 font-mono text-sm border border-white/5">npm i framer-motion lucide-react</code>
                    </div>
                    <div className="space-y-3 pt-2">
                        <p className="text-neutral-300 text-sm font-medium">2. Copy the component code into <code className="text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded">components/macos-dock.tsx</code></p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm">3</span>
                    Usage Example
                </h2>
                <p className="text-neutral-400 text-sm">You can use the component like this in your project:</p>
                <div className="bg-white/[0.02] rounded-2xl border border-white/10 p-1">
                    <CopyCode title="App.tsx" code={usageBlock} />
                </div>
            </div>
        </section>
      </div>

      <Dock />
    </main>
  );
}


