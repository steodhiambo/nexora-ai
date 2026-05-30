import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Solutions } from "@/components/sections/solutions";
import { Industries } from "@/components/sections/industries";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AutomationSystems } from "@/components/sections/automation-systems";
import { WhyNexora } from "@/components/sections/why-nexora";
import { FutureCapabilities } from "@/components/sections/future-capabilities";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Industries />
        <HowItWorks />
        <AutomationSystems />
        <WhyNexora />
        <FutureCapabilities />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
