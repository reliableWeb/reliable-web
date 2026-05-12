import React from "react";

export default function Hero({ onInquire }) {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative bg-[#fafafa] border-b border-[#e4e4e7]"
        >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end py-16 md:py-24 lg:py-28">
                {/* Left */}
                <div className="lg:col-span-7 reveal-up">
                    < div className="flex items-center gap-3 mb-8">
                        < span className="w-12 h-[2px] bg-[#0a0a0a]" />
                        < span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#52525b]">
                            Est. 2012 · Greater Noida, India
                        </span >
                    </div >

                    <h1
                        data-testid="hero-title"
                        className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-tight"
                    >
                        Machinery that
                        < br />
                        <span className="italic font-black">makes your</span>
                        < br />
                        dairy business < span className="text-[#f95738]">reliable.</span>
                    </h1 >

                    <p
                        data-testid="hero-subtitle"
                        className="mt-8 max-w-xl text-lg md:text-xl text-[#52525b] leading-relaxed"
                    >
                        End - to - end ice cream, dairy and food processing plants —
                        engineered, fabricated and installed by Reliable Industries.One
                        partner, from blueprint to first batch.
                    </p >

                    <div className="mt-10 flex flex-wrap gap-4">
                        < a
                            href="#products"
                            data-testid="hero-cta-explore"
                            className="group inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#f95738] transition-colors"
                        >
                            Explore Machinery < span className="cta-arrow">→</span>
                        </a >
                        <button
                            onClick={onInquire}
                            data-testid="hero-cta-engineer"
                            className="group inline-flex items-center gap-3 bg-transparent border border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#0a0a0a] hover:text-white transition-colors"
                        >
                            Talk to Engineering < span className="cta-arrow">→</span>
                        </button >
                    </div >

                    {/* Trust stats */}
                    < div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl border-t border-[#e4e4e7] pt-8">
                        < Stat k="500+" label="Plants Installed" />
                        < Stat k="25+" label="Countries Served" />
                        < Stat k="4.8/5" label="Customer Rating" />
                    </div >
                </div >

                {/* Right — image */}
                < div className="lg:col-span-5 relative">
                    < div className="relative aspect-[4/5] overflow-hidden bg-[#f4f4f5]">
                        < img
                            data-testid="hero-image"
                            src="https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=900"
                            alt="Industrial machinery factory floor"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                            < div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                                Now Building
                            </div >
                            <div className="font-display font-bold text-lg mt-1">
                                2 MT / day Dairy Line · Kenya Export
                            </div >
                        </div >
                    </div >
                    {/* Floating badge */}
                    < div className="absolute -top-5 -left-5 bg-[#f95738] text-white px-5 py-3 hidden sm:block">
                        < div className="font-display font-black text-xl leading-none">ISO 5708</div>
                        < div className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-90 mt-1">
                            Compliant Builds
                        </div >
                    </div >
                </div >
            </div >
        </section >
    );
}

function Stat({ k, label }) {
    return (
        <div>
            <div className="font-display font-black text-3xl md:text-4xl leading-none">{k}</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#52525b] font-bold mt-2">
                {label}
            </div >
        </div >
    );
}
