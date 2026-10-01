import { CollectionPage } from "@/components/CollectionPage";
import { goldProducts } from "@/data/products";
export const metadata = { title: "Gold Collection" };
export default function GoldPage() { return <CollectionPage metal="Gold" categories={["Earrings", "Rings", "Bracelets & Bangles", "Necklaces & Pendants", "Mangalsutra"]} feature="Royal Kundan Bridal Necklace Set" featureImage="/images/gold.svg" products={goldProducts} />; }
