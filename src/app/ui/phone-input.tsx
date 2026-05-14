"use client";

export const countryCodes = [
  { code: "+33", flag: "🇫🇷", label: "France" },
  { code: "+377", flag: "🇲🇨", label: "Monaco" },
  { code: "+39", flag: "🇮🇹", label: "Italy" },
  { code: "+34", flag: "🇪🇸", label: "Spain" },
  { code: "+41", flag: "🇨🇭", label: "Switzerland" },
  { code: "+32", flag: "🇧🇪", label: "Belgium" },
  { code: "+352", flag: "🇱🇺", label: "Luxembourg" },
  { code: "+31", flag: "🇳🇱", label: "Netherlands" },
  { code: "+49", flag: "🇩🇪", label: "Germany" },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
  { code: "+1", flag: "🇺🇸", label: "United States" },
  { code: "+1", flag: "🇨🇦", label: "Canada" },
  { code: "+7", flag: "🇷🇺", label: "Russia" },
  { code: "+971", flag: "🇦🇪", label: "UAE" },
  { code: "+966", flag: "🇸🇦", label: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", label: "Qatar" },
  { code: "+965", flag: "🇰🇼", label: "Kuwait" },
  { code: "+212", flag: "🇲🇦", label: "Morocco" },
  { code: "+213", flag: "🇩🇿", label: "Algeria" },
  { code: "+216", flag: "🇹🇳", label: "Tunisia" },
  { code: "+86", flag: "🇨🇳", label: "China" },
  { code: "+81", flag: "🇯🇵", label: "Japan" },
  { code: "+82", flag: "🇰🇷", label: "South Korea" },
  { code: "+91", flag: "🇮🇳", label: "India" },
  { code: "+55", flag: "🇧🇷", label: "Brazil" },
  { code: "+61", flag: "🇦🇺", label: "Australia" },
];

type PhoneInputProps = {
  countryCode: string;
  phone: string;
  onCountryChange: (code: string) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: boolean;
  inputClassName?: string;
};

export default function PhoneInput({
  countryCode,
  phone,
  onCountryChange,
  onPhoneChange,
  onBlur,
  error,
  inputClassName,
}: PhoneInputProps) {
  const borderCls = error
    ? "border-red-400 focus:ring-red-300"
    : "border-[#E5E5E5] focus:ring-[#D4B896]/40";

  return (
    <div
      className={`flex overflow-hidden rounded-xl border bg-white transition-shadow focus-within:ring-2 ${borderCls}`}
    >
      {/* Country code select */}
      <select
        aria-label="Country code"
        value={countryCode}
        onChange={(e) => onCountryChange(e.target.value)}
        onBlur={onBlur}
        className="shrink-0 border-r border-[#E5E5E5] bg-[#FAFAFA] px-2 py-3 text-[14px] text-[#404040] outline-none focus:bg-[#F5F0E8] cursor-pointer"
      >
        {countryCodes.map((c, i) => (
          <option key={`${c.code}-${i}`} value={c.code}>
            {c.flag} {c.code}
          </option>
        ))}
      </select>

      {/* Phone number */}
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
        className={`w-full bg-transparent px-3 py-3 text-[15px] text-[#1F1F1F] placeholder:text-gray-400 outline-none ${inputClassName ?? ""}`}
      />
    </div>
  );
}
