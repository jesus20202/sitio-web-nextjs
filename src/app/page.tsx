import { HeroSection } from "@/features/home/HeroSection";
import { WelcomeSection } from "@/features/home/WelcomeSection";
import { OrganizationsSection } from "@/features/home/OrganizationsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <OrganizationsSection />
    </>
  );
}