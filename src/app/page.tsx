import React from "react";
import { Hero } from "@/components/home/Hero";
import { BrandPromiseSection } from "@/components/story/BrandPromiseSection";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { StoryPreview } from "@/components/home/StoryPreview";
import { FamilySection } from "@/components/home/FamilySection";
import { FeaturedTreats } from "@/components/home/FeaturedTreats";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { InstagramSection } from "@/components/home/InstagramSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSchema } from "@/components/seo/FAQSchema";

export default function HomePage() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <BrandPromiseSection />
      <FeaturedCategories />
      <StoryPreview />
      <FamilySection />
      <FeaturedTreats />
      <CustomerReviews />
      <GalleryPreview />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
