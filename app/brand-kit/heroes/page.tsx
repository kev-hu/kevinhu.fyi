import type { Metadata } from "next";

import { HeroSections } from "@/components/brand-kit/HeroSections";

export const metadata: Metadata = {
  title: "Hero Sections — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HeroSections />;
}
