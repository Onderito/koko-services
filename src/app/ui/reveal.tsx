"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  amount?: number;
  className?: string;
};

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const VIEWPORT_MARGIN = "0px 0px -10% 0px";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  amount = 0.34,
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount, margin: VIEWPORT_MARGIN }}
      transition={{
        duration: 0.68,
        delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  stagger?: number;
  y?: number;
  amount?: number;
  className?: string;
};

export function RevealGroup({
  children,
  stagger = 0.08,
  y = 18,
  amount = 0.28,
  className,
}: RevealGroupProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: VIEWPORT_MARGIN }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.08,
          },
        },
      }}
    >
      <RevealChildrenContext y={y}>{children}</RevealChildrenContext>
    </motion.div>
  );
}

function RevealChildrenContext({
  children,
  y,
}: {
  children: ReactNode;
  y: number;
}) {
  return (
    <>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.62, ease: EASE_OUT },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={{
              hidden: { opacity: 0, y, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.62, ease: EASE_OUT },
              },
            }}
          >
            {children}
          </motion.div>
        )}
    </>
  );
}
