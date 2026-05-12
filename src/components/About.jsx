import React from "react";

export default function About() {
    return (
        <section
            id="about"
    data-testid="about-section"
    className ="bg-white border-b border-[#e4e4e7]"
        >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            < div className ="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
                < div className ="aspect-[4/5] overflow-hidden bg-[#f4f4f5] relative">
                    < img
    src ="https://images.pexels.com/photos/34221993/pexels-photo-34221993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=800"
    alt ="Reliable Industries factory floor"
    className ="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white px-4 py-2">
            < div className ="text-[10px] uppercase tracking-[0.25em] font-bold text-[#52525b]">
                Greater Noida
              </div >
        <div className="font-display font-bold text-sm">Plot 181 · Udyog Kendra</div>
            </div >
          </div >
        </div >

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            < div className ="flex items-center gap-3 mb-6">
                < span className ="w-10 h-[2px] bg-[#0a0a0a]" />
                    < span className ="text-[11px] uppercase tracking-[0.3em] font-bold text-[#52525b]">
              About Reliable
            </span >
          </div >

        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            Thirteen years of < span className ="italic">hands-on</span> dairy
    engineering.
          </h2 >

        <p className="mt-6 text-lg text-[#52525b] leading-relaxed">
            Reliable Industries is a partnership firm manufacturing turnkey ice
    cream, dairy and food processing plants.We design, fabricate, install
            and support — so you deal with one accountable team, not a
            vendor chain.
          </p >

        <p className="mt-4 text-lg text-[#52525b] leading-relaxed">
            From first - time entrepreneurs opening boutique gelato cafés to
    co - operatives scaling up milk processing, our machinery is built
    for the long haul — SS 304 where it matters, PLC where it helps,
        and proven refrigeration that keeps running.
          </p >

        <div className="mt-10 grid grid-cols-2 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
    {
        [
            {
                k: "In-House", v: "Fabrication" },
              {
                    k: "Turnkey", v: "Installation" },
              {
                        k: "Export", v: "Ready (IEC)" },
              { k: "Lifetime", v: "After-Sales" },
            ].map((x) => (
                            <div key={x.k} className="bg-white p-5">
                        < div className ="font-display font-black text-xl">{x.k}</div>
                        < div className ="text-xs uppercase tracking-[0.2em] font-bold text-[#52525b] mt-1">
                  { x.v }
                </div >
              </div >
            ))
    }
          </div >
        </div >
      </div >
    </section >
  );
}
