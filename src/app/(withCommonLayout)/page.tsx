import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import { HeroSection } from "@/components/home/HeroSection";
import TrendingProduct from "@/components/home/TrendingProduct";
import Loading from "../loading";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <Category />
      <TrendingProduct />
    </div>
  );
}
