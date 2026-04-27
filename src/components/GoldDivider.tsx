import { cn } from "@/lib/utils";

export function GoldDivider({ className, withMotif = true }: { className?: string; withMotif?: boolean }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 my-2", className)}>
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-gold to-gold" />
      {withMotif && (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold">
          <path
            d="M14 2 L16 11 L25 12 L18 17 L20 26 L14 21 L8 26 L10 17 L3 12 L12 11 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="14" cy="14" r="2" fill="oklch(0.99 0.012 95)" />
        </svg>
      )}
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-gold to-gold" />
    </div>
  );
}
