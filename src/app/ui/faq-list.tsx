"use client";

// Kokolimo's FAQs: Hyperiux's Animated FAQ (src/components/effects/animated-faq, used unchanged) in Anti's white cards.
// The answers stay in the HTML when closed (height 0), so search engines and AI assistants still read them; each
// question keeps its heading level through `as`.

import type { ElementType, ReactNode } from "react";
import { FAQContent, FAQGroup, FAQTitle, FAQWrapper } from "@/components/effects/animated-faq";

export type FaqItem = { question: string; answer: ReactNode };

export default function FaqList({ items, as: Tag = "h3", dark = false }: { items: FaqItem[]; as?: ElementType; dark?: boolean }) {
  return (
    <FAQGroup allowMultiple={false}>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FAQWrapper
            key={item.question}
            itemId={`faq-${i}`}
            className={`rounded-[10px] px-6 py-5 outline-none transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-[#d4b471] ${
              dark ? "border border-white/10 bg-[#1a2a36] text-white" : "bg-white shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] hover:shadow-[0_2px_4px_rgba(16,24,40,0.06),0_16px_40px_rgba(16,24,40,0.1)]"
            }`}
            titleClassName={dark ? "text-white" : "text-[#101828]"}
            iconClassName={dark ? "text-[#d4b471]" : "text-[#9a7a3e]"}
            iconSize={18}
            iconStrokeWidth={2}
            duration={0.5}
          >
            <FAQTitle>
              <Tag className="text-[16px] font-semibold leading-snug md:text-[17px]">{item.question}</Tag>
            </FAQTitle>
            <FAQContent className={`pt-3 text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-[#667085]"}`}>{item.answer}</FAQContent>
          </FAQWrapper>
        ))}
      </div>
    </FAQGroup>
  );
}
