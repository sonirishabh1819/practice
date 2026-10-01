import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: { default: "Jewellers Petlawad Wala", template: "%s | Jewellers Petlawad Wala" }, description: "Heritage gold and silver jewelry, handcrafted in Ratlam since 1961." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased"><Header />{children}<Footer /></body></html>;
}
