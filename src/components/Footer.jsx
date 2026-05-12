import React from "react";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
    className ="bg-[#0a0a0a] text-white relative overflow-hidden"
        >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
            < div className ="grid grid-cols-1 md:grid-cols-12 gap-10">
                < div className ="md:col-span-5">
                    < div className ="flex items-center gap-2 mb-6">
                        < div className ="w-8 h-8 bg-white flex items-center justify-center">
                            < span className ="font-display font-black text-[#0a0a0a] text-lg leading-none">
    R
                </span >
              </div >
        <div className="leading-none">
            < div className ="font-display font-black text-[20px] tracking-tight">
                  RELIABLE INDUSTRIES
                </div >
        <div className="text-[10px] tracking-[0.25em] text-white/60 uppercase font-bold">
                  Ice Cream · Dairy · Food Processing
                </div >
              </div >
            </div >
        <p className="text-white/70 leading-relaxed max-w-md">
              Turnkey machinery for entrepreneurs and established producers.
        Designed, fabricated, installed and supported — by one
              accountable team in Greater Noida, India.
            </p >
          </div >

        <div className="md:col-span-2">
            < FooterTitle > Catalogue</FooterTitle >
                <ul className="space-y-2 mt-4 text-white/70">
                    < li > <a href="#products">Ice Cream Plants</a></li>
                        < li > <a href="#products">Dairy Plants</a></li>
                            < li > <a href="#products">Gelato Machines</a></li>
                                < li > <a href="#products">Plant-Based Lines</a></li>
                                    < li > <a href="#products">Moulds & Tools</a></li>
            </ul >
          </div >

        <div className="md:col-span-2">
            < FooterTitle > Company</FooterTitle >
                <ul className="space-y-2 mt-4 text-white/70">
                    < li > <a href="#about">About</a></li>
                        < li > <a href="#process">How We Work</a></li>
                            < li > <a href="#contact">Contact</a></li>
                                < li > <a href="#contact">Careers</a></li>
            </ul >
          </div >

        <div className="md:col-span-3">
            < FooterTitle > Contact</FooterTitle >
                <ul className="space-y-2 mt-4 text-white/70">
                    < li className ="font-display font-bold text-white text-lg">Deepak Chauhan</li>
                        < li >
                        <a href="tel:+919811144989" data-testid="footer-phone">
                            + 91 98111 44989
                </a >
              </li >
        <li>
            <a
                href="https://wa.me/919811144989"
            target="_blank"
            rel="noreferrer"
            data-testid="footer-whatsapp"
                >
            WhatsApp →
        </a>
              </li >
              <li>Plot 181, Udyog Kendra-I</li>
              <li>Ecotech-III, Greater Noida, UP</li>
            </ul >
          </div >
        </div >

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em] font-bold text-white/50">
            < div >© { new Date().getFullYear() } Reliable Industries · All rights reserved</div >
                <div>GST · IEC Registered Exporter</div>
        </div >
      </div >

        {/* Watermark */ }
        < div
    aria-hidden
    className ="pointer-events-none absolute bottom-0 left-0 right-0 text-center font-display font-black leading-none text-white/[0.04] select-none"
    style = {{
        fontSize: "clamp(120px, 22vw, 360px)", letterSpacing: "-0.04em" }}
            >
            RELIABLE
      </div >
    </footer >
  );
    }

    function FooterTitle({ children }) {
        return (
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
        { children }
    </div >
  );
    }
    