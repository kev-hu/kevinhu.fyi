import type { Metadata } from "next";

import { TokensSections } from "@/components/brand-kit/TokensSections";

export const metadata: Metadata = {
  title: "Design Tokens — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <TokensSections />;
}
