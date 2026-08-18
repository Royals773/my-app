"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { MeridianMark } from "./meridian-mark";

const LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors duration-200 hover:border-gold hover:text-gold active:scale-[0.97]"
      >
        <Menu className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2.5 font-display text-xl italic text-paper">
                <MeridianMark className="h-6 w-6 text-gold" />
                Meridian
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors duration-200 hover:border-gold hover:text-gold active:scale-[0.97]"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-8">
              {LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 font-display text-4xl italic text-paper transition-colors duration-200 hover:text-gold"
                >
                  <span className="font-mono text-sm not-italic text-stone-light">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="mailto:hello@meridian.studio"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:bg-gold-bright active:scale-[0.97]"
            >
              Start a project
            </a>
          </div>,
          document.body,
        )}
    </div>
  );
}
