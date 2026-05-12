import React from "react";

const STEPS = [
    {
        n: "01",
    t: "Consult",
    d: "We start with your product, your floor plan and your budget. No generic pitches — just honest engineering advice.",
  },
    {
        n: "02",
    t: "Design",
    d: "CAD drawings, capacity charts, utility load calculations and a fixed-price proposal within 7 working days.",
  },
    {
        n: "03",
    t: "Manufacture",
    d: "Built in-house in Greater Noida. SS 304 wherever product touches, Copeland/Emerson compressors, Siemens PLCs.",
  },
    {
        n: "04",
    t: "Install",
    d: "Our team commissions on-site, trains your operators, and stays until your first production batch clears QC.",
  },
    {
        n: "05",
    t: "Support",
    d: "Annual maintenance contracts, spare parts in stock, and an engineer on-call for the life of the machine.",
  },
];

export default function Process() {
    return (
        <section
            id="process"
    data-testid="process-section"
    className ="bg-[#fafafa] border-b border-[#e4e4e7]"
        >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
            < div className ="max-w-3xl">
                < div className ="flex items-center gap-3 mb-6">
                    < span className ="w-10 h-[2px] bg-[#0a0a0a]" />
                        < span className ="text-[11px] uppercase tracking-[0.3em] font-bold text-[#52525b]">
              How we work
            </span >
          </div >
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            From drawing board
        < br />
        to < span className ="italic">first batch.</span>
          </h2 >
        </div >

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
    {
        STEPS.map((s) => (
            <div key={s.n} className="bg-white p-6 md:p-8 flex flex-col min-h-[260px]">
        < div className ="flex items-center justify-between">
        < span className ="font-display font-black text-3xl md:text-4xl text-[#f95738]">
                  { s.n }
                </span >
            <span className="w-8 h-[2px] bg-[#0a0a0a]" />
              </div >
            <h3 className="font-display font-bold text-2xl mt-8">{s.t}</h3>
        < p className ="text-sm text-[#52525b] mt-3 leading-relaxed flex-1">{s.d}</p>
            </div >
          ))
    }
        </div >
      </div >
    </section >
  );
}
