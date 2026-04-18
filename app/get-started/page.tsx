import Link from "next/link";
import { CopyCode } from "@/components/copy-code";
import { CoverflowDemo } from "@/components/coverflow-demo";

const installBlock = `npm install framer-motion lucide-react
# If needed:
# npm install class-variance-authority clsx tailwind-merge`;

const shadcnBlock =
  "npx shadcn@latest add https://www.intrface.in/r/coverflow.json";

const componentBlock = `import { motion } from "framer-motion";

const cards = ["Design", "Motion", "DevX", "UI Kits", "Production"];

export function CoverflowDemo() {
  return (
    <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-8">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {cards.map((card, index) => (
          <motion.article
            key={card}
            className="h-44 w-32 rounded-2xl border border-slate-600/80 bg-gradient-to-b from-slate-700 to-slate-900 p-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
          >
            <p className="text-sm font-semibold text-slate-100">{card}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}`;

export default function GetStartedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-14 sm:px-10">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Get Started</h1>
        <Link className="text-sm text-slate-300 hover:text-white" href="/">
          Back to home
        </Link>
      </div>

      <section className="mb-12 rounded-3xl border border-slate-700/70 bg-slate-900/50 p-6 sm:p-8">
        <p className="mb-5 text-sm uppercase tracking-[0.2em] text-slate-400">Live Preview Container</p>
        <CoverflowDemo />
      </section>

      <section className="grid gap-5">
        <CopyCode title="Install all dependencies" code={installBlock} />
        <CopyCode title="Quick install via shadcn registry URL" code={shadcnBlock} />
        <CopyCode title="Use this component in your project" code={componentBlock} />
      </section>
    </main>
  );
}
