"use client";
import emailjs from "@emailjs/browser";
import { useMemo, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
type Status = "idle" | "loading" | "success" | "error";

export default function ContactMe() {
    const [formData, setFormData] = useState({
        service: "transfer",
        pickupDate: "",
        pickupTime: "",
        pickupLocation: "",
        dropoffLocation: "",
        fullName: "",
        email: "",
        phone: "",
        passengers: 1,
        baggage: 0,
        flightNumber: "",
        notes: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    // --- affichage d'erreurs après 1er submit ou blur
    const [submitted, setSubmitted] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const backdropRef = useRef<HTMLDivElement>(null);


    const errors = useMemo(() => {
        const e: Record<string, string> = {};
        const isEmpty = (v: string) => v.trim().length === 0;
        const emailOk =
            !isEmpty(formData.email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        const phoneOk =
            !isEmpty(formData.phone) && formData.phone.replace(/\s+/g, "").length >= 8;

        if (isEmpty(formData.pickupDate)) e.pickupDate = "Required";
        if (isEmpty(formData.pickupTime)) e.pickupTime = "Required";
        if (isEmpty(formData.pickupLocation)) e.pickupLocation = "Required";
        if (isEmpty(formData.dropoffLocation)) e.dropoffLocation = "Required";
        if (isEmpty(formData.fullName)) e.fullName = "Required";
        if (!emailOk) e.email = "Invalid email";
        if (!phoneOk) e.phone = "Invalid phone";
        if (formData.passengers < 1) e.passengers = "Min 1";
        if (formData.baggage < 0) e.baggage = "Invalid";
        return e;
    }, [formData]);

    const showError = (key: keyof typeof formData) =>
        (submitted || touched[key]) && !!errors[key];

    const isValid = Object.keys(errors).length === 0;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((p) => ({
            ...p,
            [name]: name === "passengers" || name === "baggage" ? Number(value) : value,
        }));
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setTouched((p) => ({ ...p, [e.target.name]: true }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        if (!isValid) {
            setStatus("error");
            return;
        }
        setStatus("loading");
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    ...formData,
                    passengers: String(formData.passengers),
                    baggage: String(formData.baggage),
                    reply_to: formData.email,
                    from_name: formData.fullName,
                },
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
            );
            setStatus("success");
            setOpenModal(true)
            setFormData({
                service: "transfer",
                pickupDate: "",
                pickupTime: "",
                pickupLocation: "",
                dropoffLocation: "",
                fullName: "",
                email: "",
                phone: "",
                passengers: 1,
                baggage: 0,
                flightNumber: "",
                notes: "",
            });
            setTouched({});
            setSubmitted(false);
        } catch {
            setStatus("error");
        }
    };

    const inputCls = (k: keyof typeof formData) =>
        `mt-2 bg-[#F9FAFB] w-full rounded-xl border p-3 focus:outline-none ${showError(k) ? "border-red-500" : "border-[#E5E5E5]"
        }`;

    // --- Modal
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (status !== "success" || !openModal) return;

        // État initial invisible
        gsap.set(backdropRef.current, { autoAlpha: 0 });
        gsap.set(modalRef.current, { autoAlpha: 0, y: 12, scale: 0.96 });

        // Animation d’entrée
        gsap.timeline({ defaults: { duration: 0.25, ease: "power2.out" } })
            .to(backdropRef.current, { autoAlpha: 1, duration: 0.15, ease: "linear" }, 0)
            .to(modalRef.current, { autoAlpha: 1, y: 0, scale: 1 }, 0.05);

    }, [status, openModal]);

    const closeModal = () => {
        gsap.timeline({
            defaults: { duration: 0.2, ease: "power1.in" },
            onComplete: () => {
                setOpenModal(false);
                setStatus("idle"); // reset
            },
        })
            .to(modalRef.current, { autoAlpha: 0, y: 12, scale: 0.96 }, 0)
            .to(backdropRef.current, { autoAlpha: 0, duration: 0.15 }, 0);
    };

    return (
        <div className="container mx-auto px-2 mt-10 py-16 xl:py-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
            <h1 className="heading-1 text-center l mt-4">
                Contact Me
            </h1>
            <p className="body-text text-center mt-4">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white border-[#E5E5E5] border rounded-2xl p-4 md:p-6 mt-10 max-w-3xl mx-auto"
                aria-labelledby="contact-form-title"
            >
                <h2 id="contact-form-title" className="sr-only">Booking form</h2>

                {/* Service */}
                <fieldset className="space-y-2">
                    <legend className="font-manrope-bold text-[16px] tracking-[-0.02em]">Select Your Service</legend>
                    <select
                        id="service" name="service"
                        value={formData.service} onChange={handleChange} onBlur={handleBlur}
                        className={inputCls("service")} required
                    >
                        {/* valeurs normalisées (== state) */}
                        <option value="transfer">Transfer</option>
                        <option value="hourly">Hourly Services</option>
                        <option value="tour">Private Tour</option>
                    </select>
                </fieldset>

                {/* Date & Time */}
                <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <legend className="sr-only">Pickup schedule</legend>
                    <div className="flex flex-col">
                        <label htmlFor="pickupDate" className="font-manrope-bold text-[16px]">Pick-up Date</label>
                        <input
                            type="date" id="pickupDate" name="pickupDate"
                            value={formData.pickupDate} onChange={handleChange} onBlur={handleBlur}
                            className={inputCls("pickupDate")} required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pickupTime" className="font-manrope-bold text-[16px]">Pick-up Time</label>
                        <input
                            type="time" id="pickupTime" name="pickupTime"
                            value={formData.pickupTime} onChange={handleChange} onBlur={handleBlur}
                            className={inputCls("pickupTime")} required
                        />
                    </div>
                </fieldset>

                {/* Locations */}
                <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <legend className="sr-only">Locations</legend>
                    <div className="flex flex-col">
                        <label htmlFor="pickupLocation" className="font-manrope-bold text-[16px]">Pick-up Location</label>
                        <input
                            type="text" id="pickupLocation" name="pickupLocation"
                            value={formData.pickupLocation} onChange={handleChange} onBlur={handleBlur}
                            placeholder="Nice Airport (NCE), hotel…" autoComplete="street-address"
                            className={inputCls("pickupLocation")} required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="dropoffLocation" className="font-manrope-bold text-[16px]">Drop-off Location</label>
                        <input
                            type="text" id="dropoffLocation" name="dropoffLocation"
                            value={formData.dropoffLocation} onChange={handleChange} onBlur={handleBlur}
                            placeholder="Monaco, Cannes…" className={inputCls("dropoffLocation")} required
                        />
                    </div>
                </fieldset>

                {/* Contact */}
                <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <legend className="sr-only">Contact details</legend>
                    <div className="flex flex-col md:col-span-2">
                        <label htmlFor="fullName" className="font-manrope-bold text-[16px]">Firstname & Lastname</label>
                        <input
                            type="text" id="fullName" name="fullName"
                            value={formData.fullName} onChange={handleChange} onBlur={handleBlur}
                            autoComplete="name" className={inputCls("fullName")} required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-manrope-bold text-[16px]">Email</label>
                        <input
                            type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange} onBlur={handleBlur}
                            autoComplete="email" className={inputCls("email")} required
                        />
                        {showError("email") && <span className="text-xs text-red-600 mt-1">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-manrope-bold text-[16px]">Phone Number</label>
                        <input
                            type="tel" id="phone" name="phone" inputMode="tel" autoComplete="tel"
                            value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                            placeholder="+33 6 12 34 56 78" className={inputCls("phone")} required
                        />
                        {showError("phone") && <span className="text-xs text-red-600 mt-1">{errors.phone}</span>}
                    </div>
                </fieldset>

                {/* Pax / Baggage / Flight */}
                <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <legend className="sr-only">Travel details</legend>
                    <div className="flex flex-col">
                        <label htmlFor="passengers" className="font-manrope-bold text-[16px]">Passengers</label>
                        <input
                            type="number" id="passengers" name="passengers" min={1} max={7} inputMode="numeric"
                            value={formData.passengers} onChange={handleChange} onBlur={handleBlur}
                            className={inputCls("passengers")} required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="baggage" className="font-manrope-bold text-[16px]">Baggage</label>
                        <input
                            type="number" id="baggage" name="baggage" min={0} max={12} inputMode="numeric"
                            value={formData.baggage} onChange={handleChange} onBlur={handleBlur}
                            className={inputCls("baggage")}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="flightNumber" className="font-manrope-bold text-[16px]">Flight Number (optional)</label>
                        <input
                            type="text" id="flightNumber" name="flightNumber"
                            value={formData.flightNumber} onChange={handleChange} onBlur={handleBlur}
                            placeholder="AF770, U24853…" className={inputCls("flightNumber")}
                        />
                    </div>
                </fieldset>

                {/* Notes */}
                <fieldset className="mt-6 space-y-2">
                    <legend className="font-manrope-bold text-[16px]">Specific Demands</legend>
                    <textarea
                        id="notes" name="notes" rows={4}
                        value={formData.notes} onChange={handleChange} onBlur={handleBlur}
                        placeholder="Child seat, extra stop, meet & greet…"
                        className={inputCls("notes") + " w-full resize-y"}
                    />
                </fieldset>

                <div className="mt-6 flex items-start justify-between gap-4">
                    <p className="text-xs text-[#404040]/70">
                        By submitting, you agree to our terms and <Link href="/legal-privacy" className="underline">privacy policy</Link>.
                    </p>
                    <button
                        type="submit"
                        disabled={!isValid || status === "loading"}
                        className={`py-3 px-6 font-manrope-bold text-[16px] w-[50%] rounded-xl cursor-pointer text-white ${!isValid || status === "loading" ? "bg-[#404040]/40 cursor-not-allowed" : "bg-[#404040]"
                            }`}
                    >
                        {status === "loading" ? "Sending..." : "Book Now"}
                    </button>
                </div>
            </form>

            {/* MODAL SUCCESS */}
            {openModal && (
                <div
                    ref={backdropRef}
                    className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
                    role="dialog" aria-modal="true" aria-labelledby="modal-title"
                    onClick={closeModal}
                >
                    <div
                        ref={modalRef}
                        className="modal max-w-md w-full rounded-2xl bg-white p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 id="modal-title" className="text-xl font-manrope-bold">Thank you! 🎉</h3>
                        <p className="mt-2 text-sm text-[#404040]">
                            Your request has been sent. We’ll get back to you shortly.
                        </p>
                        <div className="mt-6 flex gap-3 justify-end">
                            <Link href="/" className="px-4 py-2 rounded-xl border border-[#E5E5E5] cursor-pointer">Back Home</Link>
                            <button onClick={closeModal} className="px-4 py-2 rounded-xl bg-[#404040] cursor-pointer text-white">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
