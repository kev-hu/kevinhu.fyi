import type { Metadata } from "next";

import { ComponentsSections } from "@/components/brand-kit/ComponentsSections";

export const metadata: Metadata = {
  title: "Components — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ComponentsSections />;
}
