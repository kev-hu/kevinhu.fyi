import type { Metadata } from "next";

import { DataSections } from "@/components/brand-kit/DataSections";

export const metadata: Metadata = {
  title: "Data & Metrics — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DataSections />;
}
