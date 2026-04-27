import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("label-eyebrow inline-flex items-center gap-3", className)}>
      <span className="inline-block w-8 h-px bg-[color:var(--gold-muted)]" />
      {children}
    </span>
  );
}
