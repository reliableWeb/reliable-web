import iceCreamProcessing from '../assets/ice-cream-processing.jpg';
import milkProcessing from '../assets/milk-processing.jpg';
import iceCandy from '../assets/ice-candy.jpg';
import mixingBlendingTank from '../assets/mixing-blending-tank.jpg';
import continuousFreezer from '../assets/continuous-freezer.jpg';
import continuousFreezerSample from '../assets/continuous-freezer-sample.jpg';
import pasterizer from '../assets/pasterizer.jpg';
import homogenizer from '../assets/homogenizer.jpg';
import cipSystem from '../assets/cip-system.jpg';
import perfectProcessing from '../assets/perfect-processing.jpg';
import agingTank from '../assets/aging-tank.jpg';
import img1000194632 from '../assets/1000194632.jpg';

export const PRODUCTS = [
    {
        id: "ice-cream-plant",
        name: "Automatic Ice Cream Plant",
        tagline: "Turnkey production line, 200–2000 L/hr",
        category: "Ice Cream",
        priceLabel: "From ₹ 11.00 Lakh",
        image: iceCreamProcessing,
        specs: {
            Capacity: "100–2000 L/hr",
            Material: "SS 304 Food-Grade",
            Automation: "PLC with HMI",
            Power: "3-phase, 15–60 kW",
            Cooling: "Ammonia / Freon Options",
        },
        description:
            "A fully integrated ice cream production line engineered for consistent output, batch repeatability, and effortless CIP cleaning. From pasteurisation to hardening in one cohesive system.",
    },
    {
        id: "mini-dairy-plant",
        name: "Mini Dairy Plant",
        tagline: "Compact turnkey dairy, 500–5000 L/day",
        category: "Dairy",
        priceLabel: "From ₹ 15.00 Lakh",
        image: milkProcessing,
        specs: {
            Capacity: "500–5000 L/day",
            Output: "Milk, Paneer, Curd, Ghee",
            Footprint: "800–1600 sq ft",
            Utilities: "Steam, Chilled Water",
            Delivery: "8–12 Weeks",
        },
        description:
            "A ready-to-deploy dairy line designed for entrepreneurs and co-operatives. Modular skids mean faster commissioning and simpler expansion when your herd and market grow.",
    },
    {
        id: "ice-candy-machine",
        name: "Ice Candy Making Machine",
        tagline: "Brine-bath production, 3000–12000 pcs/hr",
        category: "Ice Cream",
        priceLabel: "From ₹ 1.35 Lakh",
        image: iceCandy,
        specs: {
            Capacity: "3000–12000 pcs/hr",
            Mould: "48 / 96 / 160 cavity",
            Refrigerant: "R404a / Ammonia",
            Control: "Digital Temperature",
            Material: "SS 304 Tank",
        },
        description:
            "Precision brine-bath candy machine with tight temperature control for uniform freeze, clean demoulding, and zero product waste — built for seasonal demand spikes.",
    },
    {
        id: "bulk-milk-cooler",
        name: "Bulk Milk Cooler",
        tagline: "IBT + DX variants, 500–10000 L",
        category: "Dairy",
        priceLabel: "From ₹ 1.50 Lakh",
        image: mixingBlendingTank,
        specs: {
            Capacity: "500 / 1000 / 2000 / 5000 / 10000 L",
            "Cool-down": "35°C → 4°C in <3 hrs",
            Insulation: "PUF 60 mm",
            Agitator: "Low-shear SS",
            Standards: "ISO 5708",
        },
        description:
            "Rapid-chill coolers that protect milk quality from collection point to processing. Energy-optimised compressors and field-proven insulation keep running cost predictable.",
    },
    {
        id: "continuous-freezer",
        name: "Continuous Ice Cream Freezer",
        tagline: "Aerated overrun, 150–1500 L/hr",
        category: "Ice Cream",
        priceLabel: "Price on Request",
        image: continuousFreezer,
        specs: {
            Capacity: "150–1500 L/hr",
            Overrun: "40–120% Adjustable",
            Draw: "-5°C to -6°C",
            Dasher: "Scraped-Surface",
            Control: "PLC + VFD",
        },
        description:
            "Continuous freezers with stable overrun control deliver the silky texture premium brands demand — engineered for 24×7 shifts without drift.",
    },
    {
        id: "gelato-batch-freezer",
        name: "Gelato Batch Freezer",
        tagline: "Boutique craft, 20–60 L/batch",
        category: "Gelato",
        priceLabel: "From ₹ 85,000",
        image: continuousFreezerSample,
        specs: {
            "Batch Size": "20 / 40 / 60 L",
            "Cycle Time": "8–12 min",
            Modes: "Gelato, Sorbet, Granita",
            Cooling: "Air / Water-Cooled",
            Footprint: "600 × 750 mm",
        },
        description:
            "For artisan producers who refuse to compromise. Tight overrun control, whisper-quiet motors, and intuitive recipe memory for consistent signature flavours.",
    },
    {
        id: "ss-mini-ice-cream-plant",
        name: "SS 304 Mini Ice Cream Plant — 100 L",
        tagline: "Starter plant for emerging brands",
        category: "Ice Cream",
        priceLabel: "Price on Request",
        image: pasterizer,
        specs: {
            Capacity: "100 L/batch",
            Material: "SS 304 Mirror Finish",
            Sections: "Pasteuriser + Ageing + Freezer",
            Floor: "350 sq ft",
            Commissioning: "7 Days On-Site",
        },
        description:
            "A right-sized starter plant for D2C brands, cloud kitchens, and hotel chains — full-spec hygiene, compact floor plan, and a clear upgrade path.",
    },
    {
        id: "coconut-milk-plant",
        name: "Coconut Milk Ice Cream Plant",
        tagline: "Plant-based dedicated line",
        category: "Plant-Based",
        priceLabel: "Price on Request",
        image: homogenizer,
        specs: {
            Base: "Coconut / Oat / Almond",
            Capacity: "200–800 L/hr",
            Hygiene: "Allergen-Segregated",
            Homogeniser: "Two-Stage High-Pressure",
            Material: "SS 316 Contact Parts",
        },
        description:
            "A purpose-built line for the plant-based revolution. Dedicated, allergen-segregated design protects label claims and safeguards export compliance.",
    },
    {
        id: "ice-cream-mould",
        name: "Ice Cream Moulds & Tools",
        tagline: "Custom SS cavities, export-grade",
        category: "Accessories",
        priceLabel: "Price on Request",
        image: img1000194632,
        specs: {
            Cavities: "16 / 24 / 48 / 96",
            Shapes: "Cone, Stick, Cup, Custom",
            Material: "SS 304",
            Finish: "Mirror Polished",
            Lead: "3–4 Weeks",
        },
        description:
            "Food-grade moulds CNC-machined to micron tolerances. Custom shapes and brand embossing available — because your product deserves to look as good as it tastes.",
    },
    {
        id: "deep-freezer",
        name: "Deep Freezer — Ice Cream Plant 200 L",
        tagline: "Stainless steel hardening cabinet",
        category: "Ice Cream",
        priceLabel: "From ₹ 10.50 Lakh",
        image: cipSystem,
        specs: {
            Capacity: "200 L",
            Temperature: "-25°C to -30°C",
            Body: "SS 304",
            Insulation: "High-density PUF",
            Compressor: "Copeland / Emerson",
        },
        description:
            "Commercial hardening freezer engineered for rapid core-temperature pull-down and minimal compressor duty cycles — reliable performance, season after season.",
    },
    {
        id: "ice-cream-machines",
        name: "Ice Cream Machines — Counter-Top",
        tagline: "Cafe & QSR deployment",
        category: "Ice Cream",
        priceLabel: "From ₹ 2.35 Lakh",
        image: perfectProcessing,
        specs: {
            Flavours: "1 / 2 / 3 + Twist",
            Output: "20–35 L/hr",
            Hopper: "6 L × 2",
            Power: "2.2–3.0 kW",
            Voltage: "220V / 50Hz",
        },
        description:
            "Counter-top soft-serve machines built for back-to-back cone service during peak hours. Simple to operate, easy to clean, engineered to last.",
    },
    {
        id: "ice-cream-making-plant",
        name: "Ice Cream Making Plant",
        tagline: "Mid-scale production, 500 L/hr",
        category: "Ice Cream",
        priceLabel: "From ₹ 7.95 Lakh",
        image: agingTank,
        specs: {
            Capacity: "500 L/hr",
            Line: "Mix → Pasteuriser → Ageing → Freezer → Hardening",
            Material: "SS 304",
            Automation: "PLC Optional",
            Installation: "Turnkey",
        },
        description:
            "A proven, mid-scale line for regional brands ready to scale beyond batch production into sustained daily output without losing quality control.",
    },
];

export const PRODUCT_CATEGORIES = [
    "All",
    "Ice Cream",
    "Dairy",
    "Gelato",
    "Plant-Based",
    "Accessories",
];
