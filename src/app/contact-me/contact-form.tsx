"use client";

// The quote form of /contact-me, laid out in the Anti language (inspirations/IMG_8800): one white card with soft
// shadow on the grey section, labelled fields with 8px corners, a gold pill submit. Fields, names, validation, the
// /api/contact request, the error message and the success modal are unchanged. The GSAP entrance of the modal is
// gone (no animation). The phone field is drawn here in the same style (same country list from ui/phone-input, same
// input name and id), because ui/phone-input.tsx still carries the old beige look and is not part of this page.
// 28 Oct 2026, at the user's request ("animated like Cloudflare type", motions from our ATS Intelligent project): the
// date and the time open the booking bar's pop-ups (schedule-fields.tsx), and passengers and baggage are counts with
// − and + whose figure rolls (ui/booking/count-stepper.tsx). Values and validation are unchanged.
// 29 Oct 2026, at the user's request: pick-up and drop-off propose places like the hero's booking bar (quick picks,
// then live suggestions); any address can still be typed (ui/booking/place-field.tsx, PlaceTextField). The drop-off
// list ends with "Other", which opens a field to specify the destination (sent as "Other: …").

import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { countryCodes } from "../ui/phone-input";
import CountStepper from "../ui/booking/count-stepper";
import { PlaceTextField } from "../ui/booking/place-field";
import { DatePick, TimePick } from "./schedule-fields";

type Status = "idle" | "loading" | "success" | "error";

const labelCls = "text-[14px] font-semibold text-[#101828]";
const fieldBase =
  "mt-2 w-full rounded-[8px] border bg-white px-3.5 text-[15px] text-[#101828] placeholder:text-[#667085]/70 transition-colors duration-150 focus:border-[#e2b04a] focus:outline-none focus:ring-2 focus:ring-[#e2b04a]/25";

export default function ContactForm() {
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

  // Errors show after the first submit or once a field has been left.
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [honeypot, setHoneypot] = useState("");
  // "Other" in the drop-off list (user, 29 Oct 2026): a field opens below to specify it; it is sent as "Other: …".
  const [dropoffOther, setDropoffOther] = useState(false);
  const [dropoffDetail, setDropoffDetail] = useState("");
  const detailRef = useRef<HTMLInputElement>(null);

  // Success modal (no entrance animation)
  const [openModal, setOpenModal] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

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
    if (dropoffOther && isEmpty(dropoffDetail)) e.dropoffDetail = "Required";
    if (isEmpty(formData.fullName)) e.fullName = "Required";
    if (!emailOk) e.email = "Invalid email";
    if (!phoneOk) e.phone = "Invalid phone";
    if (formData.passengers < 1) e.passengers = "Min 1";
    if (formData.baggage < 0) e.baggage = "Invalid";
    return e;
  }, [formData, dropoffOther, dropoffDetail]);

  const showError = (key: keyof typeof formData) =>
    (submitted || touched[key]) && !!errors[key];

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]:
        name === "passengers" || name === "baggage" ? Number(value) : value,
    }));
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setTouched((p) => ({ ...p, [e.target.name]: true }));

  const setField = <K extends keyof typeof formData>(key: K, value: (typeof formData)[K]) =>
    setFormData((p) => ({ ...p, [key]: value }));
  const dateDone = useCallback(() => setTouched((p) => ({ ...p, pickupDate: true })), []);
  const timeDone = useCallback(() => setTouched((p) => ({ ...p, pickupTime: true })), []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          dropoffLocation: dropoffOther ? `Other: ${dropoffDetail.trim()}` : formData.dropoffLocation,
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
      setDropoffOther(false);
      setDropoffDetail("");
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

  const fieldCls = (k: keyof typeof formData, size = "h-12") =>
    `${fieldBase} ${size} ${showError(k) ? "border-red-400" : "border-[#101828]/15 hover:border-[#101828]/30"}`;

  const closeModal = () => {
    setOpenModal(false);
    setStatus("idle"); // reset
  };

  // Focus the Close button when the modal opens; Escape closes it.
  useEffect(() => {
    if (!openModal) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenModal(false);
        setStatus("idle");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openModal]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative rounded-[10px] bg-white p-6 text-[#101828] shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_30px_rgba(16,24,40,0.07)] sm:p-8 lg:p-10"
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

        {status === "error" && (
          <p role="alert" className="mb-6 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
            {submitError ||
              "Your request could not be sent. Please try again or contact us on WhatsApp."}
          </p>
        )}
        <h2 id="contact-form-title" className="sr-only">
          Booking form
        </h2>

        {/* Wide screens: a 12-column grid, three fields to a row (service, date, time / name, email, phone /
            passengers, baggage, flight), the two places side by side, the notes across. */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-6 lg:grid-cols-12">
          {/* Service */}
          <fieldset className="lg:col-span-4">
            <legend className={labelCls}>Select Your Service</legend>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${fieldCls("service")} cursor-pointer appearance-none pr-10`}
                required
              >
                {/* values match the state */}
                <option value="transfers">Transfers</option>
                <option value="hourly-chauffeur">Hourly Chauffeur Service</option>
                <option value="private-tours">Private Tours</option>
              </select>
              <ChevronDown
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute right-3.5 top-1/2 mt-1 -translate-y-1/2 text-[#667085]"
              />
            </div>
          </fieldset>

          {/* Date & Time */}
          <fieldset className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:col-span-8">
            <legend className="sr-only">Pickup schedule</legend>
            <div className="flex flex-col">
              <label htmlFor="pickupDate" className={labelCls}>
                Pick-up Date
              </label>
              <DatePick
                id="pickupDate"
                value={formData.pickupDate}
                onChange={(v) => setField("pickupDate", v)}
                onDone={dateDone}
                className={fieldCls("pickupDate")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pickupTime" className={labelCls}>
                Pick-up Time
              </label>
              <TimePick
                id="pickupTime"
                value={formData.pickupTime}
                onChange={(v) => setField("pickupTime", v)}
                onDone={timeDone}
                className={fieldCls("pickupTime")}
              />
            </div>
          </fieldset>

          {/* Locations */}
          <fieldset className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:col-span-12">
            <legend className="sr-only">Locations</legend>
            <div className="flex flex-col">
              <label htmlFor="pickupLocation" className={labelCls}>
                Pick-up Location
              </label>
              <PlaceTextField
                id="pickupLocation"
                name="pickupLocation"
                label="Pick-up location"
                value={formData.pickupLocation}
                onChange={(v) => setField("pickupLocation", v)}
                onBlur={handleBlur}
                placeholder="Nice Airport (NCE), hotel…"
                className={fieldCls("pickupLocation")}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dropoffLocation" className={labelCls}>
                Drop-off Location
              </label>
              <PlaceTextField
                id="dropoffLocation"
                name="dropoffLocation"
                label="Drop-off location"
                value={formData.dropoffLocation}
                onChange={(v) => {
                  setField("dropoffLocation", v);
                  if (v !== "Other") setDropoffOther(false);
                }}
                onBlur={handleBlur}
                placeholder="Monaco, Cannes…"
                className={fieldCls("dropoffLocation")}
                required
                other={{
                  value: "Other",
                  label: "Other",
                  hint: "Not in the list: tell us where below",
                  onChoose: () => {
                    setDropoffOther(true);
                    window.setTimeout(() => detailRef.current?.focus(), 260);
                  },
                }}
              />
              {/* Opens under the field when "Other" is chosen (250 ms, as the other form motions). */}
              <div
                inert={!dropoffOther}
                className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                  dropoffOther ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <label htmlFor="dropoffDetail" className={`mt-4 block ${labelCls}`}>
                    Please specify your drop-off
                  </label>
                  <input
                    ref={detailRef}
                    type="text"
                    id="dropoffDetail"
                    name="dropoffDetail"
                    value={dropoffDetail}
                    onChange={(e) => setDropoffDetail(e.target.value)}
                    onBlur={handleBlur}
                    maxLength={190}
                    placeholder="Full address, villa, hotel, port…"
                    required={dropoffOther}
                    className={`${fieldBase} h-12 ${
                      (submitted || touched.dropoffDetail) && errors.dropoffDetail ? "border-red-400" : "border-[#101828]/15 hover:border-[#101828]/30"
                    }`}
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Contact */}
          <fieldset className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:col-span-12 lg:grid-cols-3">
            <legend className="sr-only">Contact details</legend>
            <div className="flex flex-col md:col-span-2 lg:col-span-1">
              <label htmlFor="fullName" className={labelCls}>
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
                className={fieldCls("fullName")}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className={labelCls}>
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
                className={fieldCls("email")}
                required
              />
              {showError("email") && (
                <span className="mt-1.5 text-[13px] text-red-600">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className={labelCls}>
                Phone Number
              </label>
              <PhoneField
                countryCode={countryCode}
                phone={formData.phone}
                onCountryChange={setCountryCode}
                onPhoneChange={handleChange}
                onBlur={handleBlur}
                invalid={showError("phone")}
              />
              {showError("phone") && (
                <span className="mt-1.5 text-[13px] text-red-600">{errors.phone}</span>
              )}
            </div>
          </fieldset>

          {/* Pax / Baggage / Flight */}
          <fieldset className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-3 lg:col-span-12">
            <legend className="sr-only">Travel details</legend>
            <div className="flex flex-col">
              <span id="passengers-label" className={labelCls}>
                Passengers
              </span>
              <CountStepper
                id="passengers"
                labelledBy="passengers-label"
                value={formData.passengers}
                min={1}
                max={7}
                onChange={(n) => setField("passengers", n)}
                names={["One passenger less", "One passenger more"]}
              />
            </div>
            <div className="flex flex-col">
              <span id="baggage-label" className={labelCls}>
                Baggage
              </span>
              <CountStepper
                id="baggage"
                labelledBy="baggage-label"
                value={formData.baggage}
                min={0}
                max={12}
                onChange={(n) => setField("baggage", n)}
                names={["One bag less", "One bag more"]}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="flightNumber" className={labelCls}>
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
                className={fieldCls("flightNumber")}
              />
            </div>
          </fieldset>

          {/* Notes */}
          <fieldset className="lg:col-span-12">
            <legend className={labelCls}>Specific Demands</legend>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Child seat, extra stop, meet & greet…"
              className={fieldCls("notes", "min-h-[128px] resize-y py-3")}
            />
          </fieldset>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 border-t border-[#eaecf0] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[480px] text-[13px] leading-relaxed text-[#667085]">
            MY NICE TOURS uses your details to respond and prepare your quote. This is not a confirmed booking. Read our{" "}
            <Link href="/legal-privacy" className="font-medium text-[#101828] underline underline-offset-2 transition-colors hover:text-[#a97c25]">
              privacy policy
            </Link>
            .
          </p>
          <SubmitPill disabled={!isValid || status === "loading"} loading={status === "loading"} />
        </div>
      </form>

      {/* MODAL SUCCESS */}
      {openModal && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#0d1922]/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-[12px] bg-white p-7 text-[#101828] shadow-[0_24px_60px_rgba(13,25,34,0.35)] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="flex items-center gap-3 text-[14px] font-semibold text-[#a97c25]">
              <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e2b04a] text-[#0d1922]">
                <Check size={18} strokeWidth={2.2} />
              </span>
              Request sent
            </p>
            <h3 id="modal-title" className="mt-5 text-[26px] font-bold leading-tight tracking-[-0.02em]">
              Thank you!
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#667085]">
              Your request has been sent. We&apos;ll get back to you shortly
              with a tailored quote.
            </p>
            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <Link
                href="/"
                className="inline-flex h-11 items-center rounded-full border border-[#101828]/20 px-5 text-[14px] font-semibold text-[#101828] transition-colors duration-200 hover:border-[#101828]/45 hover:bg-[#101828]/[0.04]"
              >
                Back Home
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={closeModal}
                className="inline-flex h-11 cursor-pointer items-center rounded-full bg-[#e2b04a] px-6 text-[14px] font-semibold text-[#0f1115] transition-colors duration-200 hover:bg-[#d6a23c]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Country code and number in one field, in the form's style. Same select (aria-label "Country code") and the same
 *  tel input (id and name "phone") as ui/phone-input.tsx, with its country list. */
function PhoneField({
  countryCode,
  phone,
  onCountryChange,
  onPhoneChange,
  onBlur,
  invalid,
}: {
  countryCode: string;
  phone: string;
  onCountryChange: (code: string) => void;
  onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  invalid: boolean;
}) {
  return (
    <div
      className={`mt-2 flex h-12 rounded-[8px] border bg-white transition-colors duration-150 focus-within:border-[#e2b04a] focus-within:ring-2 focus-within:ring-[#e2b04a]/25 ${
        invalid ? "border-red-400" : "border-[#101828]/15 hover:border-[#101828]/30"
      }`}
    >
      <select
        aria-label="Country code"
        value={countryCode}
        onChange={(e) => onCountryChange(e.target.value)}
        onBlur={onBlur}
        className="shrink-0 cursor-pointer rounded-l-[7px] border-r border-[#eaecf0] bg-[#f5f6f8] px-2.5 text-[14px] text-[#101828] outline-none"
      >
        {countryCodes.map((c, i) => (
          <option key={`${c.code}-${i}`} value={c.code}>
            {c.flag} {c.code}
          </option>
        ))}
      </select>
      <input
        type="tel"
        id="phone"
        name="phone"
        inputMode="tel"
        autoComplete="tel-national"
        value={phone}
        onChange={onPhoneChange}
        onBlur={onBlur}
        placeholder="6 12 34 56 78"
        className="w-full min-w-0 rounded-r-[7px] bg-transparent px-3.5 text-[15px] text-[#101828] outline-none placeholder:text-[#667085]/70"
      />
    </div>
  );
}

/** Gold pill submit in the look of ArrowButton (Hyperiux Arrow Fill, gold tone): the dark circle with the arrow spreads
 *  over the pill on hover. Drawn here because ArrowButton renders a link and this must stay a real submit button. */
function SubmitPill({ disabled, loading }: { disabled: boolean; loading: boolean }) {
  const label = loading ? "Sending..." : "Send Request";
  const fill = "transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none";
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`group relative inline-flex h-14 w-full shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#e2b04a] pl-[26px] text-[16px] font-semibold text-[#0f1115] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#e2b04a] disabled:cursor-not-allowed disabled:opacity-50 md:w-auto ${
        loading ? "pr-[26px]" : "pr-[74px]"
      }`}
    >
      <span className="relative">{label}</span>
      {!loading && (
        <>
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-2 left-[calc(100%-48px)] right-2 top-2 rounded-full bg-[#0f1115] ${fill} [.group:enabled:hover_&]:inset-0`}
          />
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 flex items-center justify-center pl-[26px] pr-[74px] text-white [clip-path:inset(8px_8px_8px_calc(100%-48px))] ${fill} [.group:enabled:hover_&]:[clip-path:inset(0)]`}
          >
            {label}
          </span>
          <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center text-[#e2b04a]">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </>
      )}
    </button>
  );
}
