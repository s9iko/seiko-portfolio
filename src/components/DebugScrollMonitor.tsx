"use client";

import { useEffect } from "react";

export default function DebugScrollMonitor() {
  useEffect(() => {
    const origScrollTo = window.scrollTo.bind(window);
    const origScrollBy = window.scrollBy.bind(window);
    const origScrollIntoView = Element.prototype.scrollIntoView;

    function logCall(name: string, args: any[]) {
      // Keep lightweight: log stack + args to console
      // eslint-disable-next-line no-console
      console.warn(`[ScrollMonitor] ${name} called`, args, new Error().stack);
    }

    // Patch methods
    // @ts-ignore
    window.scrollTo = function (...args: any[]) {
      logCall("window.scrollTo", args);
      return origScrollTo(...args);
    };
    // @ts-ignore
    window.scrollBy = function (...args: any[]) {
      logCall("window.scrollBy", args);
      return origScrollBy(...args);
    };

    Element.prototype.scrollIntoView = function (...args: any[]) {
      logCall("element.scrollIntoView", args);
      // @ts-ignore
      return origScrollIntoView.apply(this, args);
    };

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 200) {
        // eslint-disable-next-line no-console
        console.warn("[ScrollMonitor] detected large scroll jump", { lastY, y, stack: new Error().stack });
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      // @ts-ignore
      window.scrollTo = origScrollTo;
      // @ts-ignore
      window.scrollBy = origScrollBy;
      Element.prototype.scrollIntoView = origScrollIntoView;
    };
  }, []);

  return null;
}
