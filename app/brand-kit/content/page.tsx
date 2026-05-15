import type { Metadata } from "next";

import { ContentSections } from "@/components/brand-kit/ContentSections";

export const metadata: Metadata = {
  title: "Content — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ContentSections />;
}
