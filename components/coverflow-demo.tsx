export function CoverflowDemo() {
  const cards = ["Design", "Motion", "DevX", "UI Kits", "Production"];

  return (
    <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-8 shadow-2xl shadow-sky-950/40">
      <p className="mb-5 text-sm uppercase tracking-[0.18em] text-slate-400">
        UI Experience Container
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {cards.map((card, index) => (
          <article
            key={card}
            className="h-44 w-32 rounded-2xl border border-slate-600/80 bg-gradient-to-b from-slate-700 to-slate-900 p-4 transition hover:-translate-y-1 hover:border-sky-400"
            style={{
              transform:
                index % 2 === 0 ? "perspective(600px) rotateY(-18deg)" : "perspective(600px) rotateY(18deg)",
            }}
          >
            <p className="text-sm font-semibold text-slate-100">{card}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
