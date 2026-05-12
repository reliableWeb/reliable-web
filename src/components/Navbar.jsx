import React, { useState, useEffect } from "react";

const LINKS = [
    {
        label: "Products", href: "#products" },
  {
            label: "Capabilities", href: "#process" },
  {
                label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onInquire }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    return (
        <header
            data-testid="site-navbar"
    className = {`sticky top-0 z-40 bg-white border-b border-[#e4e4e7] transition-shadow ${scrolled ?"shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""
} `}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-[72px]">
        <a href="#top" data-testid="brand-logo" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0a0a0a] flex items-center justify-center">
            <span className="font-display font-black text-white text-lg leading-none">R</span>
          </div>
          <div className="leading-none">
            <div className="font-display font-black text-[18px] tracking-tight">RELIABLE</div>
            <div className="text-[10px] tracking-[0.25em] text-[#52525b] uppercase font-bold">
              Industries
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav - ${ l.label.toLowerCase() } `}
              className="text-sm font-medium accent-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919811144989"
            data-testid="navbar-call-btn"
            className="hidden sm:inline-block text-xs uppercase tracking-[0.15em] font-bold text-[#52525b]"
          >
            +91 98111 44989
          </a>
          <button
            data-testid="navbar-quote-btn"
            onClick={onInquire}
            className="hidden md:inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-5 py-3 text-xs uppercase tracking-[0.15em] font-bold hover:bg-[#f95738] transition-colors"
          >
            Request Quote <span className="cta-arrow">→</span>
          </button>
          <button
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
            className="md:hidden w-10 h-10 flex items-center justify-center border border-[#e4e4e7]"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-[2px] bg-[#0a0a0a]" />
              <span className="block w-5 h-[2px] bg-[#0a0a0a]" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#e4e4e7] bg-white" data-testid="mobile-menu">
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onInquire && onInquire();
              }}
              className="mt-2 bg-[#0a0a0a] text-white px-5 py-3 text-xs uppercase tracking-[0.15em] font-bold self-start"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
