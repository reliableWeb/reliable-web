import React from "react";

const REVIEWS = [
    {
        name: "Ghassen Hamila",
    location: "United States",
    product: "Ice Cream Plant",
    rating: 5,
        text: "Very responsive and deeply professional. They answered every technical question, adjusted the line to our exact brine spec, and had the plant running within two weeks of commissioning.",
  },
    {
        name: "Sikandar Ali",
    location: "Uttar Pradesh, India",
    product: "Ice Cream Moulds",
    rating: 5,
        text: "Finish quality is world-class. The moulds look and feel like European-grade tooling at a fraction of the cost. Lead time was exactly what they promised.",
  },
    {
        name: "Kamrujjaman",
    location: "Dhaka, Bangladesh",
    product: "Continuous Freezer",
    rating: 5,
        text: "Paperwork, export documentation, shipping, installation — they handled all of it. Our overrun stays within a 2% band across three shifts. Exactly what we were promised.",
  },
];

function Stars({ n }) {
    return (
        <div className="flex gap-1 text-[#f95738]" aria-label={`${n} star rating`}>
    {
        Array.from({ length: n }).map((_, i) => (
            <span key={i}>★</span>
        ))
    }
    </div >
  );
}

export default function Testimonials() {
    return (
        <section
            data-testid="testimonials-section"
    className ="bg-white border-b border-[#e4e4e7]"
        >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
            < div className ="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                < div >
                <div className="flex items-center gap-3 mb-6">
                    < span className ="w-10 h-[2px] bg-[#0a0a0a]" />
                        < span className ="text-[11px] uppercase tracking-[0.3em] font-bold text-[#52525b]">
    Clients
              </span >
            </div >
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
    Rated < span className ="text-[#f95738]">4.8/5</span>
        < br />
        across < span className ="italic">three continents.</span>
            </h2 >
          </div >

        <div className="flex items-center gap-8 border border-[#e4e4e7] p-6">
            < div >
            <div className="font-display font-black text-5xl leading-none">4.8</div>
                < div className ="text-[11px] uppercase tracking-[0.2em] font-bold text-[#52525b] mt-1">
    16 Verified Reviews
              </div >
            </div >
        <div className="text-sm">
            < div className ="flex justify-between gap-6">
                < span > Response</span >
                    <span className="font-bold">100%</span>
              </div >
        <div className="flex justify-between gap-6">
            < span > Quality</span >
                <span className="font-bold">100%</span>
              </div >
        <div className="flex justify-between gap-6">
            < span > Delivery</span >
                <span className="font-bold">100%</span>
              </div >
            </div >
          </div >
        </div >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
    {
        REVIEWS.map((r, i) => (
            <div
                key={i}
                data-testid={`testimonial-${i}`}
                className="bg-[#fafafa] p-8 flex flex-col"
        >
              <Stars n={r.rating} />
              <p className="mt-6 text-base leading-relaxed flex-1">
        & ldquo; { r.text }& rdquo;
              </p >
            <div className="mt-8 pt-6 border-t border-[#e4e4e7]">
                < div className ="font-display font-bold text-lg">{r.name}</div>
                    < div className ="text-xs uppercase tracking-[0.2em] font-bold text-[#52525b] mt-1">
        { r.location } · { r.product }
                </div >
              </div >
            </div >
          ))
    }
        </div >
      </div >
    </section >
  );
}
