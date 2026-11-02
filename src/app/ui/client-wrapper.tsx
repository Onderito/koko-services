import type { ReactNode } from "react";

// Rebrand: native scrolling (the Lenis smooth-scroll hook is no longer mounted). Kept as a plain wrapper for the layout.
export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
