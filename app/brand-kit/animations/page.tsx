import type { Metadata } from "next";

import { AnimationsSections } from "@/components/brand-kit/AnimationsSections";

export const metadata: Metadata = {
  title: "Animations — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AnimationsSections />;
}
