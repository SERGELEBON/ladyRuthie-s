"use client";

import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
  showBaseline = true,
}: {
  variant?: "dark" | "light";
  className?: string;
  showBaseline?: boolean;
}) {
  const color = variant === "light" ? "text-white" : "text-[#4A1E3D]";
  const subColor = variant === "light" ? "text-white/70" : "text-[#6B2A55]";

  return (
    <a href="#top" className={cn("inline-flex flex-col items-center gap-1 group", className)} aria-label={`${SITE.fullName} — home`}>
      <div className="flex items-center gap-2.5">
        {/* Monogram emblem */}
        <span
          className={cn(
            "inline-flex items-center justify-center w-9 h-9 border transition-colors",
            variant === "light" ? "border-white/80 text-white" : "border-[#4A1E3D] text-[#4A1E3D]"
          )}
          aria-hidden
        >
          <span className="font-serif text-[18px] leading-none tracking-tight">LR</span>
        </span>
        <span className={cn("font-serif text-[22px] md:text-[26px] leading-none tracking-[0.01em] transition-colors", color)}>
          {SITE.name}
        </span>
      </div>
      {showBaseline && (
        <span className={cn("nav-link text-[9px] tracking-[0.32em] italic", subColor)}>
          {SITE.tagline}
        </span>
      )}
    </a>
  );
}
