"use client";

import { I18nProvider } from "@/lib/i18n";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { BrandStatement } from "@/components/site/BrandStatement";
import { RoomsSection } from "@/components/site/RoomsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { EventCenterSection } from "@/components/site/EventCenterSection";
import { OffersSection } from "@/components/site/OffersSection";
import { GallerySection } from "@/components/site/GallerySection";
import { LocationSection } from "@/components/site/LocationSection";
import { BookingSection } from "@/components/site/BookingSection";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CookieBanner } from "@/components/site/CookieBanner";

export default function Home() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <PromoBanner />
        <Header />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <BrandStatement />
          <RoomsSection />
          <ServicesSection />
          <EventCenterSection />
          <OffersSection />
          <GallerySection />
          <LocationSection />
          <BookingSection />
        </main>
        <Footer />

        {/* Floating overlays */}
        <WhatsAppButton />
        <MobileActionBar />
        <CookieBanner />
      </div>
    </I18nProvider>
  );
}
