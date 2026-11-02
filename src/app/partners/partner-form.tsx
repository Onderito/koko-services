"use client";

// The partner application form of /partners, in the Anti language (inspirations/IMG_8800): a white card with soft
// shadow, 8px inputs with visible labels, gold-outlined choices and a gold pill submit. The only part of the page that
// needs state. Fields, labels, validation, payload and messages are unchanged; the confirmation dialog now opens and
// closes without animation (gsap removed) as a crisp white card.

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";

import PhoneInput from "../ui/phone-input";
import { AntiOutlinePill } from "../ui/anti";

type Status = "idle" | "loading" | "success" | "error";

type PartnerFormData = {
  fullName: string;
  companyName: string;
  companyType: string;
  country: string;
  email: string;
  phone: string;
  monthlyBookings: string;
  clientSummary: string;
};

const companyTypes = [
  "Travel Agency",
  "Hotel / Concierge",
  "Yacht / Marina Service",
  "Event / DMC Agency",
  "Corporate / PA Service",
  "Other",
] as const;

const monthlyBookingRanges = ["1-5", "5-10", "10-20", "20+"] as const;

const initialFormData: PartnerFormData = {
  fullName: "",
  companyName: "",
  companyType: "",
  country: "",
  email: "",
  phone: "",
  monthlyBookings: "",
  clientSummary: "",
};

const cardShadow = "shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)]";
const labelCls = "text-[14px] font-semibold text-[#101828]";

/** One choice of a radio group: an outlined row that turns gold when chosen (the input stays the real control). */
function Choice({
  name,
  value,
  checked,
  onChange,
}: {
  name: keyof PartnerFormData;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-[8px] border px-4 py-3.5 transition-colors duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#e2b04a]/40 ${
        checked ? "border-[#e2b04a] bg-[#e2b04a]/10" : "border-[#101828]/15 bg-white hover:border-[#101828]/30"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <span
        aria-hidden="true"
        className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${checked ? "border-[#e2b04a] bg-[#e2b04a]" : "border-[#101828]/25 bg-white"}`}
      >
        {checked ? <span className="h-1.5 w-1.5 rounded-full bg-[#0d1922]" /> : null}
      </span>
      <span className="text-[15px] font-medium text-[#101828]">{value}</span>
    </label>
  );
}

export default function PartnerForm() {
  const [countryCode, setCountryCode] = useState("+33");
  const [formData, setFormData] = useState<PartnerFormData>(initialFormData);
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [openModal, setOpenModal] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    const isEmpty = (value: string) => value.trim().length === 0;
    const emailOk =
      !isEmpty(formData.email) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const phoneOk =
      !isEmpty(formData.phone) &&
      formData.phone.replace(/\s+/g, "").length >= 8;

    if (isEmpty(formData.fullName)) e.fullName = "Required";
    if (isEmpty(formData.companyName)) e.companyName = "Required";
    if (isEmpty(formData.companyType)) e.companyType = "Required";
    if (isEmpty(formData.country)) e.country = "Required";
    if (!emailOk) e.email = "Invalid email";
    if (!phoneOk) e.phone = "Invalid phone";
    if (isEmpty(formData.monthlyBookings)) e.monthlyBookings = "Required";

    return e;
  }, [formData]);

  const showError = (key: keyof PartnerFormData) =>
    (submitted || touched[key]) && !!errors[key];

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const closeModal = () => {
    setOpenModal(false);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone: `${countryCode} ${formData.phone}` }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Partner application failed");
      }

      setStatus("success");
      setOpenModal(true);
      setCountryCode("+33");
      setFormData(initialFormData);
      setTouched({});
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (key: keyof PartnerFormData) =>
    `mt-2 w-full rounded-[8px] border bg-white px-3.5 py-3 text-[15px] text-[#101828] placeholder:text-[#98a2b3] transition-colors duration-150 focus:border-[#e2b04a] focus:outline-none focus:ring-2 focus:ring-[#e2b04a]/25 ${
      showError(key) ? "border-red-400" : "border-[#101828]/15"
    }`;

  const loading = status === "loading";

  return (
    <>
      <div className={`rounded-[10px] bg-white p-6 md:p-8 ${cardShadow}`}>
        {status === "error" ? (
          <p className="mb-6 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
            Something went wrong while sending the application. Please try
            again or contact us directly on WhatsApp.
          </p>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelCls}>
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputCls("fullName")}
                required
              />
            </div>

            <div>
              <label htmlFor="companyName" className={labelCls}>
                Company Name *
              </label>
              <input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputCls("companyName")}
                required
              />
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className={labelCls}>Company Type *</legend>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {companyTypes.map((option) => (
                <Choice
                  key={option}
                  name="companyType"
                  value={option}
                  checked={formData.companyType === option}
                  onChange={handleChange}
                />
              ))}
            </div>
            {showError("companyType") ? (
              <p className="mt-2 text-[13px] text-red-600">
                Please select a company type.
              </p>
            ) : null}
          </fieldset>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="country" className={labelCls}>
                Country *
              </label>
              <input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputCls("country")}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputCls("email")}
                required
              />
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="phone" className={labelCls}>
                Phone / WhatsApp *
              </label>
              {/* The shared phone field keeps its own markup; only its corners, border and focus ring follow the card. */}
              <div
                className={`mt-2 [&>div]:rounded-[8px] [&>div]:focus-within:border-[#e2b04a] [&>div]:focus-within:ring-[#e2b04a]/25 ${
                  showError("phone") ? "" : "[&>div]:border-[#101828]/15"
                }`}
              >
                <PhoneInput
                  countryCode={countryCode}
                  phone={formData.phone}
                  onCountryChange={setCountryCode}
                  onPhoneChange={handleChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                  error={showError("phone")}
                />
              </div>
              {showError("phone") && (
                <span className="mt-1 text-xs text-red-600">{errors.phone}</span>
              )}
            </div>

            <fieldset>
              <legend className={labelCls}>Estimated Monthly Bookings *</legend>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {monthlyBookingRanges.map((option) => (
                  <Choice
                    key={option}
                    name="monthlyBookings"
                    value={option}
                    checked={formData.monthlyBookings === option}
                    onChange={handleChange}
                  />
                ))}
              </div>
              {showError("monthlyBookings") ? (
                <p className="mt-2 text-[13px] text-red-600">
                  Please select a monthly booking range.
                </p>
              ) : null}
            </fieldset>
          </div>

          <div className="mt-6">
            <label htmlFor="clientSummary" className={labelCls}>
              Tell us about your clients
            </label>
            <textarea
              id="clientSummary"
              name="clientSummary"
              value={formData.clientSummary}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={inputCls("clientSummary")}
              placeholder="Luxury FIT, airport arrivals, event guests, concierge requests, executive travel..."
            />
          </div>

          <p className="mt-6 text-[13px] leading-relaxed text-[#667085]">
            MY NICE TOURS uses your professional details to assess and respond to
            your partnership enquiry. Please do not include personal details of
            your clients. Read our <Link href="/legal-privacy#privacy" className="font-medium text-[#101828] underline decoration-[#e2b04a] decoration-2 underline-offset-4 transition-colors hover:text-[#a97c25]">privacy policy</Link> for retention and your rights.
          </p>

          <div className="mt-8">
            {/* A real submit button, drawn like the gold ArrowButton at rest: label and a dark circle with the arrow. */}
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex h-12 cursor-pointer items-center gap-3.5 rounded-full bg-[#e2b04a] text-[15px] font-semibold text-[#0f1115] transition-colors duration-200 hover:bg-[#d6a23c] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#e2b04a] disabled:cursor-not-allowed disabled:opacity-70 ${
                loading ? "px-6" : "pl-6 pr-2"
              }`}
            >
              <span>
                {loading
                  ? "Sending application..."
                  : "Send Partner Application"}
              </span>
              {!loading ? (
                <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#0f1115] text-[#e2b04a]">
                  <ArrowRight size={16} strokeWidth={1.8} />
                </span>
              ) : null}
            </button>
          </div>
        </form>
      </div>

      {openModal ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#0d1922]/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-[12px] bg-white p-7 shadow-[0_24px_64px_rgba(13,25,34,0.28)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#a97c25]">
              <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-[#e2b04a] text-[#0d1922]">
                <Check size={14} strokeWidth={2.4} />
              </span>
              Application sent
            </span>
            <h3
              id="partner-modal-title"
              className="mt-4 text-[24px] font-bold tracking-[-0.02em] text-[#101828]"
            >
              Thank you
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#667085]">
              Your partner application has been sent. We&apos;ll review it and
              come back to you shortly.
            </p>
            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <AntiOutlinePill href="/" dark={false}>
                Back Home
              </AntiOutlinePill>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex h-11 cursor-pointer items-center rounded-full bg-[#e2b04a] px-6 text-[15px] font-semibold text-[#0f1115] transition-colors duration-200 hover:bg-[#d6a23c] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#e2b04a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
