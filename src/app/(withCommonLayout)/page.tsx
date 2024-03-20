import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import { HeroSection } from "@/components/home/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <Category />
    </div>
  );
}
