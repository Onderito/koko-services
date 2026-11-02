"use client";

// Kokolimo's main buttons: Hyperiux's Arrow Fill Button (the circle with the arrow spreads over the button on hover)
// in our colours and sizes. The Hyperiux file is used unchanged; sizing lives in arrow-button.module.css.

import ArrowFillButton, { type ArrowFillButtonProps } from "@/components/effects/arrow-fill-button";
import s from "./arrow-button.module.css";

export type ArrowTone = "gold" | "dark" | "light" | "outline";

// Resting colour / label / circle, then the colour that spreads on hover and its label.
const TONES: Record<ArrowTone, Pick<ArrowFillButtonProps, "bgColor" | "textColor" | "fillBgColor" | "fillTextColor" | "hoverFillBgColor" | "hoverFillTextColor" | "arrowColor" | "hoverArrowColor">> = {
  gold: { bgColor: "#e8ba64", textColor: "#0f1115", fillBgColor: "#0f1115", fillTextColor: "#ffffff", hoverFillBgColor: "#0f1115", hoverFillTextColor: "#ffffff", arrowColor: "#e8ba64", hoverArrowColor: "#e8ba64" },
  dark: { bgColor: "#0f1115", textColor: "#ffffff", fillBgColor: "#e8ba64", fillTextColor: "#0f1115", hoverFillBgColor: "#e8ba64", hoverFillTextColor: "#0f1115", arrowColor: "#0f1115", hoverArrowColor: "#0f1115" },
  light: { bgColor: "#ffffff", textColor: "#0f1115", fillBgColor: "#e8ba64", fillTextColor: "#0f1115", hoverFillBgColor: "#e8ba64", hoverFillTextColor: "#0f1115", arrowColor: "#0f1115", hoverArrowColor: "#0f1115" },
  // IMG_8794's "View Details →" card button: white with a hairline border; the navy fill spreads from the circle on hover.
  outline: { bgColor: "#ffffff", textColor: "#101828", fillBgColor: "#0d1922", fillTextColor: "#ffffff", hoverFillBgColor: "#0d1922", hoverFillTextColor: "#ffffff", arrowColor: "#e8ba64", hoverArrowColor: "#e8ba64" },
};

export default function ArrowButton({
  text,
  href,
  tone = "gold",
  size = "md",
  full = false,
  className = "",
  ...rest
}: { text: string; href: string; tone?: ArrowTone; size?: "sm" | "md" | "lg"; full?: boolean | "mobile" } & Omit<ArrowFillButtonProps, "btnText" | "href">) {
  return (
    <ArrowFillButton
      btnText={text}
      href={href}
      {...TONES[tone]}
      className={`${s.btn} ${size === "sm" ? s.sm : size === "lg" ? s.lg : ""} ${full === "mobile" ? s.fullMobile : full ? s.full : ""} ${tone === "outline" ? s.outline : ""} ${className}`}
      {...rest}
    />
  );
}
