import React, { useState, useCallback } from "react";
import "./App.css";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppSticky from "./components/WhatsappSticky";

function App() {
  const [prefillProduct, setPrefillProduct] = useState("");

  const goToContact = useCallback((productName) => {
    if (typeof productName === "string") setPrefillProduct(productName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="App font-body">
      < Navbar onInquire={() => goToContact()
      } />
      < main >
        <Hero onInquire={() => goToContact()} />
        <Marquee />
        <Products onInquire={goToContact} />
        <About />
        <Process />
        <Testimonials />
        <Contact
          prefillProduct={prefillProduct}
          onPrefillHandled={() => setPrefillProduct("")}
        />
      </main>
      <Footer />
      <WhatsAppSticky />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: 0,
            border: "1px solid #0a0a0a",
            fontFamily: "Satoshi, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
