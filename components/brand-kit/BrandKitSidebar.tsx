"use client";

import { usePathname } from "next/navigation";

import { BrandKitTOC } from "@/components/BrandKitTOC";
import { TOC_ITEMS_BY_TAB, type BrandKitTabSlug } from "@/components/brand-kit/tabs";

const VALID_SLUGS = new Set<BrandKitTabSlug>(["tokens", "components", "animations", "heroes", "data"]);

function getSlug(pathname: string | null): BrandKitTabSlug {
  const segment = pathname?.split("/")[2];
  return segment && VALID_SLUGS.has(segment as BrandKitTabSlug)
    ? (segment as BrandKitTabSlug)
    : "tokens";
}

export function BrandKitSidebar() {
  const pathname = usePathname();
  const slug = getSlug(pathname);
  return <BrandKitTOC items={TOC_ITEMS_BY_TAB[slug]} />;
}
