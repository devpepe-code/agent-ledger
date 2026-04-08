import { MarketingHero } from "./marketing-hero";
import { MarketingNav } from "./marketing-nav";
import { MarketingPricingAndFooter } from "./marketing-pricing-footer";
import { MarketingProblem } from "./marketing-problem";

/** Mostly server-rendered; only `MarketingNav` hydrates client JS for scroll + mobile menu. */
export function MarketingPage() {
  return (
    <div
      className="min-h-screen bg-[#0F0F1A] text-white"
      style={{ backgroundColor: "#0F0F1A", color: "#ffffff", minHeight: "100vh" }}
    >
      <MarketingNav />
      <MarketingHero />
      <MarketingProblem />
      <MarketingPricingAndFooter />
    </div>
  );
}
