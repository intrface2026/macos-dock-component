"use client";

import { useState } from "react";

type CopyCodeProps = {
  title: string;
  code: string;
};

export function CopyCode({ title, code }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
        <button
          onClick={onCopy}
          className="rounded-lg border border-slate-600 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-slate-300"
          type="button"
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-300">
        <code>{code}</code>
      </pre>
    </section>
  );
}
