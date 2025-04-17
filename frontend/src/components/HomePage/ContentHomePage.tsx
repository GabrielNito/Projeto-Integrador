import About from "./About";
import Specialization from "./Specialization";
import HeroSection from "./HeroSection";

export default function ContentHomePage() {
  return (
    <div className="flex flex-col min-h-screen gap-12">
      <HeroSection />

      <About />

      <Specialization />
    </div>
  );
}
