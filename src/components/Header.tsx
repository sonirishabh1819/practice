import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export function Header() {
  return <header className="border-b border-linen bg-white">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 lg:flex-nowrap lg:justify-between">
      <nav className="order-2 flex gap-5 text-[11px] font-bold uppercase tracking-[.14em] lg:order-1" aria-label="Main navigation">
        <Link href="/">Home</Link><Link href="/gold">Products</Link><Link href="/about-us">About Us</Link>
      </nav>
      <Link href="/" className="order-1 flex w-full items-center justify-center gap-3 lg:order-2 lg:w-auto" aria-label="Jewellers Petlawad Wala home">
        <Image src="/images/logo.svg" alt="JP logo" width={38} height={38} className="h-9 w-9 object-cover" />
        <span className="font-serif text-xl text-burgundy sm:text-2xl">Jewellers Petlawad Wala</span>
      </Link>
      <div className="order-3 flex flex-wrap items-center justify-center gap-5 text-[11px] font-bold uppercase tracking-[.14em]">
        <Link href="/gold">Gold Prices</Link><Link href="/contact">Contact Us</Link><SocialIcons />
      </div>
    </div>
  </header>;
}
