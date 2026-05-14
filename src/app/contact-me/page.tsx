"use client";
import { useMemo, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import PhoneInput from "../ui/phone-input";
type Status = "idle" | "loading" | "success" | "error";

export default function ContactMe() {
  const [countryCode, setCountryCode] = useState("+33");
  const [formData, setFormData] = useState({
    service: "transfers",
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
  const [submitError, setSubmitError] = useState("");

  // --- affichage d'erreurs après 1er submit ou blur
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [honeypot, setHoneypot] = useState("");
  const backdropRef = useRef<HTMLDivElement>(null);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    const isEmpty = (v: string) => v.trim().length === 0;
    const emailOk =
      !isEmpty(formData.email) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const phoneOk =
      !isEmpty(formData.phone) &&
      formData.phone.replace(/\s+/g, "").length >= 8;

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]:
        name === "passengers" || name === "baggage" ? Number(value) : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setTouched((p) => ({ ...p, [e.target.name]: true }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmitError("");
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: `${countryCode} ${formData.phone}`,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Contact request failed");
      }

      setStatus("success");
      setOpenModal(true);
      setCountryCode("+33");
      setFormData({
        service: "transfers",
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
      setHoneypot("");
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      }
      setStatus("error");
    }
  };

  const inputCls = (k: keyof typeof formData) =>
    `mt-2 w-full rounded-[14px] border bg-white/90 p-3 text-[15px] text-[#1F1F1F] placeholder:text-[#9A8C73] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-all duration-200 focus:outline-none focus:border-[#C9A874] focus:ring-2 focus:ring-[#E8D9C5] ${
      showError(k) ? "border-red-400" : "border-[#E9DECF]"
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
    gsap
      .timeline({ defaults: { duration: 0.25, ease: "power2.out" } })
      .to(
        backdropRef.current,
        { autoAlpha: 1, duration: 0.15, ease: "linear" },
        0,
      )
      .to(modalRef.current, { autoAlpha: 1, y: 0, scale: 1 }, 0.05);
  }, [status, openModal]);

  const closeModal = () => {
    gsap
      .timeline({
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
    <div className="container mx-auto px-2 pt-[var(--nav-clearance)] pb-16 xl:pb-32 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        <span className="inline-flex items-center rounded-full border border-[#E7D9BF] bg-white/90 px-4 py-2 text-[13px] font-manrope-bold text-[#6D5830] shadow-[0_10px_24px_rgba(135,108,61,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm xl:text-[14px]">
          Reply within 24 hours
        </span>
        <h1 className="heading-1 text-center mt-5 !text-[#111111] text-pretty">
          Contact Me
        </h1>
        <p className="body-text text-center mt-4 max-w-xl">
          Tell us about your ride and we&apos;ll get back to you with a tailored
          quote as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden mt-10 max-w-3xl mx-auto rounded-[36px] border border-[#EFE6D6] bg-[linear-gradient(180deg,#FFFFFF_0%,#FDF8EF_100%)] p-6 md:p-10 shadow-[0_18px_40px_rgba(45,33,15,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]"
        aria-labelledby="contact-form-title"
      >
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(232,217,196,0.25)_0%,rgba(232,217,196,0)_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(198,164,112,0.12)_0%,rgba(198,164,112,0)_70%)] blur-3xl"
        />

        <div className="relative z-10">
        {status === "error" && (
          <p className="mb-5 rounded-[16px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
            {submitError ||
              "Your request could not be sent. Please try again or contact us on WhatsApp."}
          </p>
        )}
        <h2 id="contact-form-title" className="sr-only">
          Booking form
        </h2>

        {/* Service */}
        <fieldset className="space-y-2">
          <legend className="font-manrope-bold text-[16px] tracking-[-0.02em] text-[#1F1F1F]">
            Select Your Service
          </legend>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls("service")}
            required
          >
            {/* valeurs normalisées (== state) */}
            <option value="transfers">Transfers</option>
            <option value="hourly-chauffeur">Hourly Chauffeur Service</option>
            <option value="chauffeur-tours">Chauffeur Tours</option>
          </select>
        </fieldset>

        {/* Date & Time */}
        <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <legend className="sr-only">Pickup schedule</legend>
          <div className="flex flex-col">
            <label
              htmlFor="pickupDate"
              className="font-manrope-bold text-[15px] text-[#1F1F1F]"
            >
              Pick-up Date
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputCls("pickupDate")}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pickupTime"
              className="font-manrope-bold text-[15px] text-[#1F1F1F]"
            >
              Pick-up Time
            </label>
            <input
              type="time"
              id="pickupTime"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputCls("pickupTime")}
              required
            />
          </div>
        </fieldset>

        {/* Locations */}
        <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <legend className="sr-only">Locations</legend>
          <div className="flex flex-col">
            <label
              htmlFor="pickupLocation"
              className="font-manrope-bold text-[15px] text-[#1F1F1F]"
            >
              Pick-up Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nice Airport (NCE), hotel…"
              autoComplete="street-address"
              className={inputCls("pickupLocation")}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="dropoffLocation"
              className="font-manrope-bold text-[15px] text-[#1F1F1F]"
            >
              Drop-off Location
            </label>
            <input
              type="text"
              id="dropoffLocation"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Monaco, Cannes…"
              className={inputCls("dropoffLocation")}
              required
            />
          </div>
        </fieldset>

        {/* Contact */}
        <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <legend className="sr-only">Contact details</legend>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="fullName" className="font-manrope-bold text-[15px] text-[#1F1F1F]">
              Firstname & Lastname
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="name"
              className={inputCls("fullName")}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-manrope-bold text-[15px] text-[#1F1F1F]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              className={inputCls("email")}
              required
            />
            {showError("email") && (
              <span className="text-xs text-red-600 mt-1">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-manrope-bold text-[15px] text-[#1F1F1F]">
              Phone Number
            </label>
            <PhoneInput
              countryCode={countryCode}
              phone={formData.phone}
              onCountryChange={setCountryCode}
              onPhoneChange={handleChange}
              onBlur={handleBlur}
              error={showError("phone")}
            />
            {showError("phone") && (
              <span className="text-xs text-red-600 mt-1">{errors.phone}</span>
            )}
          </div>
        </fieldset>

        {/* Pax / Baggage / Flight */}
        <fieldset className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <legend className="sr-only">Travel details</legend>
          <div className="flex flex-col">
            <label
              htmlFor="passengers"
              className="font-manrope-bold text-[15px] text-[#1F1F1F]"
            >
              Passengers
            </label>
            <input
              type="number"
              id="passengers"
              name="passengers"
              min={1}
              max={7}
              inputMode="numeric"
              value={formData.passengers}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputCls("passengers")}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="baggage" className="font-manrope-bold text-[15px] text-[#1F1F1F]">
              Baggage
            </label>
            <input
              type="number"
              id="baggage"
              name="baggage"
              min={0}
              max={12}
              inputMode="numeric"
              value={formData.baggage}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputCls("baggage")}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="flightNumber"
              className="font-manrope-bold text-[15px] text-[#1F1F1F]"
            >
              Flight Number (optional)
            </label>
            <input
              type="text"
              id="flightNumber"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="AF770, U24853…"
              className={inputCls("flightNumber")}
            />
          </div>
        </fieldset>

        {/* Notes */}
        <fieldset className="mt-6 space-y-2">
          <legend className="font-manrope-bold text-[15px] text-[#1F1F1F]">
            Specific Demands
          </legend>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Child seat, extra stop, meet & greet…"
            className={inputCls("notes") + " w-full resize-y"}
          />
        </fieldset>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#5C4A2E]/80 max-w-xs">
            By submitting, you agree to our terms and{" "}
            <Link href="/legal-privacy" className="underline hover:text-[#6D5830]">
              privacy policy
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={!isValid || status === "loading"}
            className={`group inline-flex items-center justify-center gap-3 rounded-[18px] px-6 py-3 font-manrope-bold text-[16px] tracking-[-0.02em] transition-all duration-200 ${
              !isValid || status === "loading"
                ? "bg-[#D9C9AE]/60 text-[#6D5830]/60 cursor-not-allowed"
                : "bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] text-[#6d5830] shadow-[0_14px_30px_-8px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(109,88,48,0.35),inset_0_1px_0_rgba(255,255,255,0.8)]"
            }`}
          >
            <span>{status === "loading" ? "Sending..." : "Send Request"}</span>
            {status !== "loading" && (
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E4D4BF] bg-[linear-gradient(180deg,#F8F0E4_0%,#EFDFC8_100%)] text-[14px] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5">
                →
              </span>
            )}
          </button>
        </div>
        </div>
      </form>

      {/* MODAL SUCCESS */}
      {openModal && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 grid place-items-center bg-[#1F1610]/50 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="modal max-w-md w-full rounded-[28px] border border-[#E8DCCB] bg-[linear-gradient(160deg,#FBF3E5_0%,#F5E6CC_100%)] p-7 shadow-[0_30px_80px_rgba(45,33,15,0.25),inset_0_1px_0_rgba(255,255,255,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-flex items-center rounded-full border border-[#E7D9BF] bg-white/90 px-3.5 py-1.5 text-[12px] font-manrope-bold uppercase tracking-[0.08em] text-[#6D5830]">
              Request sent
            </span>
            <h3
              id="modal-title"
              className="mt-4 text-[24px] font-manrope-bold text-[#111111] tracking-[-0.02em]"
            >
              Thank you!
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5C4A2E]">
              Your request has been sent. We&apos;ll get back to you shortly
              with a tailored quote.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-end">
              <Link
                href="/"
                className="px-5 py-2.5 rounded-[14px] border border-[#E4D4BF] bg-white/80 text-[14px] font-manrope-bold text-[#6D5830] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Back Home
              </Link>
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-[14px] bg-[linear-gradient(180deg,#F8F3EC_0%,#E8D9C5_100%)] text-[14px] font-manrope-bold text-[#6d5830] shadow-[0_10px_22px_-6px_rgba(109,88,48,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
