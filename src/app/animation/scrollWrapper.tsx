"use client";
import { useEffect } from "react";
import { initScrollSmoother, killScrollSmoother } from "./scrollSmoother";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initScrollSmoother();
    return () => killScrollSmoother();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
