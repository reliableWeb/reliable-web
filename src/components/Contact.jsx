import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { PRODUCTS } from "../data/products";

const API = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/api";

export default function Contact({ prefillProduct, onPrefillHandled }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        product_interest: "",
        quantity: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (prefillProduct) {
            setForm((f) => ({
                ...f,
                product_interest: prefillProduct,
                message: f.message || `I am interested in the ${prefillProduct}. Please share quotation and delivery timeline.`,
            }));
            onPrefillHandled && onPrefillHandled();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
        // eslint-disable-next-line
    }, [prefillProduct]);

    const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        try {
            // Using Web3Forms for frontend-only email sending
            await axios.post("https://api.web3forms.com/submit", {
                access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
                subject: `New Inquiry: ${form.product_interest || "General"} — ${form.name}`,
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                product_interest: form.product_interest.trim() || "General Inquiry",
                quantity: form.quantity.trim() || "Not specified",
                message: form.message.trim(),
            });
            toast.success("Inquiry received. Our engineering team will respond within 24 hours.");
            setForm({
                name: "",
                email: "",
                phone: "",
                product_interest: "",
                quantity: "",
                message: "",
            });
        } catch (err) {
            toast.error("Submission failed. Please make sure your Web3Forms access key is configured.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="bg-[#fafafa] border-b border-[#e4e4e7]"
        >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left info */}
                <div className="lg:col-span-5">
                    < div className="flex items-center gap-3 mb-6">
                        < span className="w-10 h-[2px] bg-[#0a0a0a]" />
                        < span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#52525b]">
                            Let & apos;s build
                        </span >
                    </div >

                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
                        Tell us what
                        < br />
                        you & apos;re building.
                    </h2 >

                    <p className="mt-6 text-lg text-[#52525b] leading-relaxed">
                        Share your capacity, product and timeline.An engineer(not a sales
                        rep) will respond within 24 hours with a clear proposal.
                    </p >

                    <div className="mt-10 space-y-5 border-t border-[#e4e4e7] pt-8">
                        < InfoRow
                            k="Engineering Lead"
                            v="Deepak Chauhan"
                            sub="Director, Reliable Industries"
                        />
                        <a href="tel:+919811144989" data-testid="contact-phone" className="block">
                            < InfoRow k="Direct Line" v="+91 98111 44989" sub="Mon–Sat, 9:00–19:00 IST" />
                        </a >
                        <a
                            href="https://wa.me/919811144989"
                            target="_blank"
                            rel="noreferrer"
                            data-testid="contact-whatsapp"
                            className="block"
                        >
                            <InfoRow k="WhatsApp" v="+91 98111 44989" sub="Fastest for technical specs" />
                        </a >
                        <InfoRow
                            k="Factory"
                            v="Greater Noida"
                            sub="Plot 181, Udyog Kendra-I, Ecotech-III, UP"
                        />
                    </div >
                </div >

                {/* Right form */}
                < div className="lg:col-span-7">
                    < form
                        onSubmit={submit}
                        data-testid="contact-form"
                        className="bg-white border border-[#e4e4e7] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <Field label="Full Name" required>
                            < input
                                data-testid="form-name"
                                required
                                value={form.name}
                                onChange={
                                    update("name")}
                                placeholder="Deepak Sharma"
                                className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base"
                            />
                        </Field >
                        <Field label="Email" required>
                            < input
                                data-testid="form-email"
                                required
                                type="email"
                                value={form.email}
                                onChange={
                                    update("email")}
                                placeholder="you@company.com"
                                className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base"
                            />
                        </Field >
                        <Field label="Phone / WhatsApp" required>
                            < input
                                data-testid="form-phone"
                                required
                                value={form.phone}
                                onChange={
                                    update("phone")}
                                placeholder="+91 98xxx xxxxx"
                                className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base"
                            />
                        </Field >
                        <Field label="Product Interest">
                            < select
                                data-testid="form-product"
                                value={form.product_interest}
                                onChange={
                                    update("product_interest")}
                                className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base"
                            >
                                <option value="">Select a product…</option>
                                {
                                    PRODUCTS.map((p) => (
                                        <option key={p.id} value={p.name}>
                                            {p.name}
                                        </option>
                                    ))
                                }
                                <option value="Custom / Turnkey Plant">Custom / Turnkey Plant</option>
                            </select >
                        </Field >
                        <Field label="Capacity / Quantity">
                            < input
                                data-testid="form-quantity"
                                value={form.quantity}
                                onChange={
                                    update("quantity")}
                                placeholder="e.g. 500 L/hr"
                                className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base"
                            />
                        </Field >
                        <Field label="Location">
                            < input
                                data-testid="form-location"
                                placeholder="City, Country"
                                className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base"
                            />
                        </Field >

                        <div className="md:col-span-2">
                            < Field label="Project Details" required>
                                < textarea
                                    data-testid="form-message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={
                                        update("message")}
                                    placeholder="Tell us about your product, target capacity, site readiness and timeline."
                                    className="w-full bg-transparent border-b border-[#e4e4e7] py-3 focus:outline-none focus:border-[#0a0a0a] transition-colors text-base resize-none"
                                />
                            </Field >
                        </div >

                        <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#e4e4e7]">
                            < p className="text-xs text-[#52525b] max-w-sm">
                                We respond within 24 hours.Your details are never shared with
                                third parties.
                            </p >
                            <button
                                type="submit"
                                disabled={submitting}
                                data-testid="form-submit"
                                className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#f95738] transition-colors disabled:opacity-60"
                            >
                                {
                                    submitting ? "Sending…" : "Send Inquiry"} <span className="cta-arrow">→</span>
                            </button>
                        </div >
                    </form >
                </div >
            </div >
        </section >
    );
}

function Field({ label, required, children }) {
    return (
        <label className="block">
            < span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#52525b] block mb-1">
                {label} {
                    required && <span className="text-[#f95738]">*</span>}
            </span >
            {children}
        </label >
    );
}

function InfoRow({ k, v, sub }) {
    return (
        <div className="group">
            < div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#52525b]">{k}</div>
            < div className="font-display font-bold text-xl mt-1 group-hover:text-[#f95738] transition-colors">
                {v}
            </div >
            {sub && <div className="text-sm text-[#52525b] mt-0.5">{sub}</div>}
        </div >
    );
}
