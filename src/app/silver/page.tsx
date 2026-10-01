import { CollectionPage } from "@/components/CollectionPage";
import { silverProducts } from "@/data/products";
export const metadata = { title: "Silver Collection" };
export default function SilverPage() { return <CollectionPage metal="Silver" categories={["Earrings", "Rings", "Bracelets & Bangles", "Necklaces & Pendants", "Anklets"]} feature="Peacock Filigree Silver Necklace" featureImage="/images/silver.svg" products={silverProducts} />; }
