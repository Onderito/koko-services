"use client";

// Kokolimo's text links with an arrow: Hyperiux's Link Button (animated underline, arrow turning on hover), used
// unchanged from src/components/effects/link-button with our colours and size. Same label on phones.

import LinkButton from "@/components/effects/link-button";
import s from "./link-arrow.module.css";

export default function LinkArrow({
  href,
  children,
  tone = "light",
  external = false,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: string;
  tone?: "light" | "dark";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <LinkButton
      href={href}
      text={children}
      mobileText={children}
      textColor={tone === "dark" ? "#ffffff" : "#101828"}
      hoverColor={tone === "dark" ? "#d4b471" : "#9a7a3e"}
      clickedColor={tone === "dark" ? "#d4b471" : "#9a7a3e"}
      className={`${s.lk} ${className}`}
      aria-label={ariaLabel}
      linkProps={external ? { target: "_blank", rel: "noopener noreferrer" } : undefined}
    />
  );
}
