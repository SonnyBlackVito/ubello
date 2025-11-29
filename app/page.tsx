import HeroSection from "./components/HeroSection";
import {
  EarnRewardsSection,
  NonCustodialSection,
  PaymentServicesSection,
  WatchVideosSection,
} from "./components/FeatureSections";
import BannerSection from "./components/BannerSection";
import ScrollAnimationPhone from "./components/ScrollAnimationPhone";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#18181C]">
      <HeroSection />
      {/* <div className=" bg-[#18181C]">
        <ScrollTriggered />
      </div> */}

      <ScrollAnimationPhone />
      <NonCustodialSection />
      <PaymentServicesSection />
      <WatchVideosSection />
      <EarnRewardsSection />
      <BannerSection />
    </main>
  );
}
