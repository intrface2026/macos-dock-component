"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

type CopyCodeProps = {
  title: string;
  code: string;
};

export function CopyCode({ title, code }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 group transition-all duration-300 hover:border-white/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">{title}</h3>
        <button
          onClick={onCopy}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-neutral-400 transition-all hover:bg-white/10 hover:text-white group-hover/btn:scale-105"
          type="button"
        >
          <div className="relative w-3.5 h-3.5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Check className="w-3.5 h-3.5 text-green-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Copy className="w-3.5 h-3.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="min-w-[40px]">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="relative overflow-hidden group/pre">
        <pre className="overflow-x-auto rounded-xl bg-black/40 p-5 text-xs leading-relaxed text-neutral-400 font-mono border border-white/5 scrollbar-thin scrollbar-thumb-white/10">
          <code>{code}</code>
        </pre>
        {/* Subtle gradient overlay for better depth */}
        <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/pre:opacity-100 transition-opacity"></div>
      </div>
    </section>
  );
}

