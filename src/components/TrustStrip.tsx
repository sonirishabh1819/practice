const items = [
  ["◇", "BIS Hallmark Certified", "Purity authenticated"], ["✦", "Ethically Sourced", "Gold and silver"], ["❖", "Handcrafted by Masters", "Generational artisans"], ["↻", "Lifetime Exchange", "Secure investment"]
];
export function TrustStrip({ dark = false }: { dark?: boolean }) {
  return <section className={dark ? "bg-burgundy text-cream" : "bg-white"}><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">{items.map(([icon, title, text]) => <div key={title}><span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold">{icon}</span><h3 className={`mt-3 font-serif ${dark ? "text-gold" : "text-burgundy"}`}>{title}</h3><p className="mt-1 text-xs opacity-60">{text}</p></div>)}</div></section>;
}
