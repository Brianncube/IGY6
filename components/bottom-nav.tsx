"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5">
      <div className="glass-panel mx-auto grid max-w-3xl grid-cols-5 rounded-[1.6rem] p-1.5 shadow-glow">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-medium text-[var(--muted)] transition-colors duration-300",
                active && "bg-[var(--accent-soft)] text-[var(--text)]"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
