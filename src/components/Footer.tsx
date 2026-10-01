import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return <>
    <section className="bg-burgundy px-5 py-16 text-center text-cream">
      <p className="eyebrow text-gold">Private previews &amp; atelier news</p>
      <h2 className="mt-3 font-serif text-3xl text-gold md:text-4xl">Be the First to See Our New Arrivals</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-cream/70">Subscribe to get notified about secret collection launches, exclusive heritage previews, and private booking opportunities at our flagship Ratlam atelier.</p>
      <form className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row" action="#">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" type="email" required placeholder="Enter your email address" className="min-w-0 flex-1 border border-gold/60 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-cream/50" />
        <button className="bg-gold px-6 py-3 text-xs font-bold uppercase tracking-widest text-burgundy">Notify Me</button>
      </form>
    </section>
    <footer className="bg-burgundy px-5 pb-8 text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 py-10 md:grid-cols-2">
        <div><h3 className="font-serif text-2xl text-gold">Jewellers Petlawad<br />Wala</h3><p className="mt-4 max-w-sm text-sm leading-6">Creating everlasting jewelry since 1961. Our creations embody classic luxury, meticulous detail, and absolute purity of gold and silver.</p><div className="mt-5"><SocialIcons light /></div></div>
        <address className="not-italic md:justify-self-end"><p className="eyebrow text-gold">Atelier Boutique</p><p className="mt-4 text-sm leading-6">171, Chandni Chowk, Ratlam,<br />Madhya Pradesh — 457001<br /><a href="mailto:contact@jpjewellers.com">contact@jpjewellers.com</a><br /><a href="tel:+919876543210">+91 98765 43210</a></p></address>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between"><p>© 2026 Jewellers Petlawad Wala. All rights reserved.</p><div className="flex flex-wrap gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Purity Guarantee</Link></div></div>
    </footer>
  </>;
}
