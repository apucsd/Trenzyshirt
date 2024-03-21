import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import { HeroSection } from "@/components/home/HeroSection";
import TrendingProduct from "@/components/home/TrendingProduct";
export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <FlashSale />
      <Category />
      <TrendingProduct />
    </div>
  );
}
