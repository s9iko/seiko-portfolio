"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnLoad() {
  const pathname = usePathname();

  // Ensure we start at the very top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset scroll on client-side navigation (path change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
