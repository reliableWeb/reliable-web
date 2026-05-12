import React from "react";

const CLIENTS = [
"Kwality Walls",
"Amul",
"Mother Dairy",
"Havmor",
"Creambell",
"Nandini",
"Baskin Robbins",
"Heritage",
"London Dairy",
"Vadilal",
];

export default function Marquee() {
    return (
        <section
            data-testid="clients-marquee"
    className ="bg-[#0a0a0a] text-white py-6 overflow-hidden border-y border-[#0a0a0a]"
        >
        <div className="flex items-center gap-16 marquee-track whitespace-nowrap">
    {
        [...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
            <div
                key={i}
                className="flex items-center gap-16 text-sm uppercase tracking-[0.3em] font-bold opacity-80"
        >
            <span>{c}</span>
            <span className="text-[#f95738]">◆</span>
          </div >
        ))
    }
      </div >
    </section >
  );
}
