"use client";

import React from "react";
import { Dock } from "@/components/Dock";
import { Terminal, Send, ChevronRight, MessageSquare, Sparkles, Workflow, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function TerminalPage() {
  const promptText = `I’m looking at the documentation for this professional macOS Dock component. I want to integrate it into my React (TypeScript) project. 

Help me understand how to use it step-by-step, including explaining the fundamental concepts behind its fluid animations—specifically how it handles mouse proximity tracking and spring-based scaling. 

Please provide practical examples with TypeScript code that I can directly copy and use. I may also need your help with debugging integration issues or customizing the icon behavior.`;

  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openAI = async (url: string) => {
    await navigator.clipboard.writeText(promptText);
    window.open(url, "_blank");
  };

  const aiOptions = [
    { name: "Open in v0", icon: Workflow, url: "https://v0.dev" },
    { name: "Open in ChatGPT", icon: BrainCircuit, url: "https://chatgpt.com" },
    { name: "Open in Claude", icon: MessageSquare, url: "https://claude.ai" },
    { name: "Open in Scira AI", icon: Sparkles, url: "https://scira.app" },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-14 sm:px-10 pb-32">
      <div className="mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
           <Terminal className="w-3 h-3" />
           AI Integration Helper
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Generate with AI</h1>
        <p className="text-neutral-500 font-light text-sm">Paste this prompt into your favorite AI model to get custom implementation help.</p>
      </div>

      <div className="space-y-6">
        {/* Main Prompt Container */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative rounded-[2rem] border border-white/10 bg-neutral-900/40 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-neutral-300 hover:bg-white/10 transition-colors"
                  >
                      {copied ? <Send className="w-3 h-3 text-green-400" /> : <Send className="w-3 h-3" />}
                      {copied ? "Copied Prompt" : "Copy Prompt"}
                  </button>
                </div>
            </div>
            <div className="p-8">
                <textarea 
                  readOnly
                  className="w-full bg-transparent border-none focus:ring-0 text-neutral-300 font-mono text-sm leading-relaxed resize-none h-64 scrollbar-thin scrollbar-thumb-white/5"
                  value={promptText}
                />
            </div>
          </div>
        </div>

        {/* AI Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          {aiOptions.map((opt, i) => (
            <button 
              key={i}
              onClick={() => openAI(opt.url)}
              className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:border-white/10 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <opt.icon className="w-4 h-4 text-white/50 group-hover:text-white" />
                </div>
                <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">{opt.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <Dock />
    </main>
  );
}
