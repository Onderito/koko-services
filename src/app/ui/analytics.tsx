"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "kokolimo-consent-v1";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Consent = { version: 1; analytics: boolean; advertising: boolean; savedAt: number };
const denied = { analytics: false, advertising: false };

function readConsent(): Consent | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || "null");
    if (c?.version === 1 && typeof c.analytics === "boolean" && typeof c.advertising === "boolean" &&
      Number.isFinite(c.savedAt) && c.savedAt <= Date.now() && Date.now() - c.savedAt < MAX_AGE) return c;
  } catch { /* Storage may be unavailable. Default to no consent. */ }
  return null;
}

function clearGoogleCookies() {
  const host = window.location.hostname;
  const domains = ["", host, ...host.split(".").map((_, i, parts) => `.${parts.slice(i).join(".")}`)];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^(_ga($|_)|_gid$|_gat|_gac_|_gcl_)/.test(name)) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""}`;
  }
}

export default function Analytics() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [choices, setChoices] = useState(denied);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);
    setChoices(saved || denied);
    setOpen(!saved);
    if (!saved || (!saved.analytics && !saved.advertising)) clearGoogleCookies();
    const sync = (event: StorageEvent) => { if (event.key === KEY || event.key === null) window.location.reload(); };
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("storage", sync); };
  }, []);

  useEffect(() => {
    if (!consent) return;
    const check = () => {
      if (Date.now() - consent.savedAt >= MAX_AGE) window.location.reload();
    };
    const interval = window.setInterval(check, 60000);
    window.addEventListener("focus", check);
    return () => { window.clearInterval(interval); window.removeEventListener("focus", check); };
  }, [consent]);

  function save(value: typeof denied) {
    const next: Consent = { ...value, version: 1, savedAt: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(next)); }
    catch { setStorageError(true); return; }
    const google = window as typeof window & { gtag?: (...args: unknown[]) => void };
    google.gtag?.("consent", "update", {
      analytics_storage: value.analytics ? "granted" : "denied",
      ad_storage: value.advertising ? "granted" : "denied",
      ad_user_data: value.advertising ? "granted" : "denied",
      ad_personalization: value.advertising ? "granted" : "denied",
    });
    if (!value.analytics || !value.advertising) clearGoogleCookies();
    // Unload executed tags on any change to existing permission. Unmounting
    // a Script alone would leave timers and tracking listeners running.
    if (consent?.analytics || consent?.advertising) { window.location.reload(); return; }
    setConsent(next);
    setChoices(value);
    setOpen(false);
    setCustomize(false);
  }

  const gaId = consent?.analytics ? process.env.NEXT_PUBLIC_GA_ID : undefined;
  const adsId = consent?.advertising ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ID : undefined;
  // Unknown container contents require both permissions. Direct IDs take
  // precedence to avoid duplicate GA/Ads tracking via GTM.
  const gtmId = !process.env.NEXT_PUBLIC_GA_ID && !process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && consent?.analytics && consent?.advertising ? process.env.NEXT_PUBLIC_GTM_ID : undefined;
  const tagId = gaId || adsId;
  const button = "min-h-11 rounded-xl border border-[#D8C7AD] bg-white px-4 py-3 text-sm font-semibold text-[#40331F] hover:bg-[#F7EFE3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  return <>
    {(tagId || gtmId) && <Script id="consented-google-tags" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      gtag('consent', 'update', ${JSON.stringify({ analytics_storage: consent?.analytics ? "granted" : "denied", ad_storage: consent?.advertising ? "granted" : "denied", ad_user_data: consent?.advertising ? "granted" : "denied", ad_personalization: consent?.advertising ? "granted" : "denied" })});
      gtag('set', 'ads_data_redaction', true);
      ${tagId ? `gtag('js', new Date());
        ${gaId ? `gtag('config', ${JSON.stringify(gaId)}, {cookie_expires: 33696000, cookie_update: false, allow_google_signals: ${!!consent?.advertising}, allow_ad_personalization_signals: ${!!consent?.advertising}});` : ""}
        ${adsId ? `gtag('config', ${JSON.stringify(adsId)});` : ""}` : ""}
      var script = document.createElement('script'); script.async = true;
      ${gtmId ? `dataLayer.push({'gtm.start':Date.now(), event:'gtm.js'});` : ""}
      script.src = ${JSON.stringify(gtmId ? `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}` : `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId || "")}`)};
      document.head.appendChild(script);
    `}</Script>}
    <button type="button" onClick={() => { setChoices(consent || denied); setOpen(true); setCustomize(true); }} className="fixed bottom-3 left-3 z-[90] min-h-11 rounded-full border border-[#D8C7AD] bg-white px-4 text-xs text-[#40331F] shadow-md">Cookie settings</button>
    {open && <section aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-h-[85dvh] max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-[#D8C7AD] bg-[#FFFCF7] p-5 text-[#29231B] shadow-[0_8px_50px_rgba(0,0,0,0.25)] sm:p-6">
      <h2 className="text-xl font-bold">Your cookie choices</h2>
      <p className="mt-2 text-sm leading-relaxed">With your permission, MY NICE TOURS (Kokolimo) uses Google Analytics 4 to measure visits and Google Ads to measure advertising and personalise ads. Optional Google tags stay blocked until you agree. Refusing does not prevent you from browsing or requesting a quote.</p>
      <p className="mt-2 text-sm">Your choice is stored on this browser for 6 months. Change it anytime using Cookie settings. <Link className="underline" href="/legal-privacy#cookies">Privacy and cookies</Link></p>
      {customize && <fieldset className="my-4 space-y-3 rounded-xl border border-[#D8C7AD] p-4">
        <legend className="px-2 font-semibold">Choose by purpose</legend>
        <p className="text-sm">Essential: always active — stores your cookie choice.</p>
        <label className="flex min-h-11 items-center gap-3"><input type="checkbox" checked={choices.analytics} onChange={e => setChoices({ ...choices, analytics: e.target.checked })} className="h-5 w-5" />Statistics — Google Analytics 4</label>
        <label className="flex min-h-11 items-center gap-3"><input type="checkbox" checked={choices.advertising} onChange={e => setChoices({ ...choices, advertising: e.target.checked })} className="h-5 w-5" />Advertising — Google Ads measurement and personalisation</label>
      </fieldset>}
      {storageError && <p role="alert" className="mt-3 text-sm">Your browser cannot save preferences. Your changes have not been saved. Allow local storage to save your choice.</p>}
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <button type="button" className={button} onClick={() => save(denied)}>Reject all</button>
        <button type="button" className={button} onClick={() => customize ? save(choices) : setCustomize(true)}>{customize ? "Save my choices" : "Customise"}</button>
        <button type="button" className={button} onClick={() => save({ analytics: true, advertising: true })}>Accept all</button>
      </div>
      {consent && <button type="button" className="mt-2 min-h-11 px-2 text-sm underline" onClick={() => setOpen(false)}>Close without changing</button>}
    </section>}
  </>;
}
