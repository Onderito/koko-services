// Rebrand: content is never hidden waiting for a scroll effect. Reveal and RevealGroup keep their API and the same
// wrapper elements (so grids and spacing do not move) but render immediately, with no animation and no JavaScript.

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  amount?: number;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}

type RevealGroupProps = {
  children: ReactNode;
  stagger?: number;
  y?: number;
  amount?: number;
  className?: string;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <div className={className}>
      {Array.isArray(children) ? children.map((child, i) => <div key={i}>{child}</div>) : <div>{children}</div>}
    </div>
  );
}
