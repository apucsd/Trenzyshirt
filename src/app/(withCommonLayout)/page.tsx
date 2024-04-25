import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import { HeroSection } from "@/components/home/HeroSection";
import TrendingProduct from "@/components/home/TrendingProduct";
import AboutUsPage from "./about-us/page";
import Testimonial from "@/components/home/Testimonial";
import Featured from "@/components/home/Featured";
export default function Home() {
  return (
    <div className="md:container">
      <HeroSection />
      <FlashSale />
      <Category />
      <Featured />
      <TrendingProduct />
      <AboutUsPage />
      <Testimonial />
    </div>
  );
}
