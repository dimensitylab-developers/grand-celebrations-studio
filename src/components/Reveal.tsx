import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "article";
}) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    // @ts-expect-error polymorphic
    <As ref={ref} className={cn("reveal", className)} style={style}>
      {children}
    </As>
  );
}
