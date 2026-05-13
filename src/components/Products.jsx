import React, { useState, useMemo } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";

export default function Products({ onInquire }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active],
  );

  return (
    <section
      id="products"
      data-testid="products-section"
      className="bg-[#fafafa] border-b border-[#e4e4e7]"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        < div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          < div >
            <div className="flex items-center gap-3 mb-5">
              < span className="w-10 h-[2px] bg-[#0a0a0a]" />
              < span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#52525b]">
                Catalogue · 12 Systems
              </span >
            </div >
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
              Precision - built
              < br />
              machinery, <span className="italic">ready to ship.</span>
            </h2 >
          </div >
          <p className="max-w-md text-base md:text-lg text-[#52525b]">
            Each system below is manufactured in -house, stress - tested on our
            floor, and shipped with turnkey installation across India and 25 +
            countries.
          </p >
        </div >

        {/* Filters */}
        < div className="flex flex-wrap gap-2 mb-10" data-testid="product-filters">
          {
            PRODUCT_CATEGORIES.map((c) => (
              <button
                key={c}
                data-testid={`filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(c)}
                className={`text-xs uppercase tracking-[0.2em]font - bold px - 5 py - 3 border transition - colors ${active === c
                    ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                    : "bg-white text-[#0a0a0a] border-[#e4e4e7] hover:border-[#0a0a0a]"
                  } `}
              >
                {c}
              </button>
            ))}
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -m-px"
          data-testid="products-grid"
        >
          {filtered.map((p, idx) => (
            <article
              key={p.id}
              data-testid={`product - card - ${p.id} `}
              className="product-card group relative bg-white border border-[#e4e4e7] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="num-overline text-sm text-[#52525b]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#52525b] border border-[#e4e4e7] px-2 py-1">
                  {p.category}
                </span>
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-[#f4f4f5] mb-6">
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-image w-full h-full object-fill"
                  loading="lazy"
                />
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
                {p.name}
              </h3>
              <p className="text-sm text-[#52525b] mt-2 flex-1">{p.tagline}</p>

              <div className="mt-6 pt-4 border-t border-[#e4e4e7] flex items-center justify-between">
                <span className="text-sm font-bold">{p.priceLabel}</span>
                <button
                  onClick={() => setSelected(p)}
                  data-testid={`view - details - ${p.id} `}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold inline-flex items-center gap-2 hover:text-[#f95738] transition-colors"
                >
                  View Specs <span className="cta-arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent
          data-testid="product-detail-dialog"
          className="max-w-3xl p-0 border border-[#0a0a0a] rounded-none gap-0"
        >
          {selected && (
            <>
              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-[#f4f4f5] overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <DialogHeader className="text-left space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#52525b]">
                      {selected.category}
                    </span>
                    <DialogTitle className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight">
                      {selected.name}
                    </DialogTitle>
                    <DialogDescription className="text-[#52525b] text-base leading-relaxed">
                      {selected.description}
                    </DialogDescription>
                  </DialogHeader>

                  <dl className="mt-6 border-t border-[#e4e4e7] divide-y divide-[#e4e4e7]">
                    {Object.entries(selected.specs).map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between py-2.5">
                        <dt className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#52525b]">
                          {k}
                        </dt>
                        <dd className="text-sm font-bold text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <DialogFooter className="mt-auto pt-6 flex-col sm:flex-row gap-3 sm:gap-2">
                    <div className="text-sm font-bold flex-1">{selected.priceLabel}</div>
                    <button
                      data-testid="dialog-inquire-btn"
                      onClick={() => {
                        setSelected(null);
                        setTimeout(() => onInquire && onInquire(selected.name), 150);
                      }}
                      className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#f95738] transition-colors"
                    >
                      Request Quote <span className="cta-arrow">→</span>
                    </button>
                  </DialogFooter>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
