import { AppShowcase } from "@/components/AppShowcase";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IdentitySection } from "@/components/IdentitySection";
import { PhotoSection } from "@/components/PhotoSection";
import { ProductsSection } from "@/components/ProductsSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { WorldSection } from "@/components/WorldSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <AppShowcase />
        <WorldSection />
        <IdentitySection />
        <ProductsSection />
        <PhotoSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
