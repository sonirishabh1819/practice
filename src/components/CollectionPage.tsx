import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { TrustStrip } from "./TrustStrip";

type Props = { metal: "Gold" | "Silver"; categories: string[]; feature: string; featureImage: string; products: Product[] };
export function CollectionPage({ metal, categories, feature, featureImage, products }: Props) {
  const gold = metal === "Gold";
  return <main>
    <nav className="overflow-x-auto bg-burgundy px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[.2em] text-cream" aria-label={`${metal} categories`}><div className="mx-auto flex min-w-max max-w-4xl justify-center gap-8">{categories.map(x => <a href="#collection" key={x}>{x}</a>)}</div></nav>
    <section className="bg-cream px-5 py-20 text-center"><p className="eyebrow">Pure craftsmanship since 1961</p><h1 className="mt-4 font-serif text-5xl text-burgundy md:text-6xl">The {metal} Collection</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate">Handcrafted masterpieces in {gold ? "22K gold" : "sterling silver"}, carrying forward a legacy of purity, detail, and trusted Indian heritage.</p><div className="ornament">✦</div></section>
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2"><div className="relative aspect-square overflow-hidden"><Image src={featureImage} alt={feature} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div><p className="eyebrow">Featured masterpiece</p><h2 className="mt-3 font-serif text-4xl text-burgundy md:text-5xl">{feature}</h2><p className="mt-6 leading-7 text-slate">A defining expression of our atelier, shaped by patient hands and a discerning eye. Intricate detailing and balanced proportions make it an heirloom for generations.</p><div className="mt-8 flex flex-wrap gap-3"><a href="tel:+919876543210" className="button-primary">Book appointment</a><Link href="/products/royal-kundan-bridal-necklace-set" className="button-outline">View details</Link></div></div></section>
    <section id="collection" className="bg-cream px-5 py-20"><div className="section-heading"><p className="eyebrow">Curated treasures</p><h2>Explore the Collection</h2></div><div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map(p => <ProductCard key={p.name} product={p} />)}</div></section>
    <TrustStrip />
    <section className="bg-cream px-5 py-20"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"><div className={gold ? "order-1" : "order-2 md:order-1"}><p className="eyebrow">{gold ? "Our gold legacy" : "Preserving radiance"}</p><h2 className="mt-3 font-serif text-4xl text-burgundy">{gold ? "60+ Years of Purity and Devotion" : "Silver Care, Made Simple"}</h2><p className="mt-5 leading-7 text-slate">{gold ? "Passed down through generations, each design at Jewellers Petlawad Wala is treated as a piece of sacred art. We craft memories in gold and silver, adhering strictly to hallmark parameters while maintaining our antique finishes." : "Keep each piece dry, store it separately in soft cloth, and use a gentle silver polishing cloth after wear. Our atelier also offers professional cleaning for cherished heirlooms."}</p></div><div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/atelier.svg" alt={gold ? "Gold artisan at work" : "Silver jewelry craftsmanship"} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div></div></section>
  </main>;
}
