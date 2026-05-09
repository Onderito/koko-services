import Script from "next/script";

/**
 * Analytics + verification tags.
 *
 * Loaded from env vars (set in Vercel → Project → Environment Variables):
 * - NEXT_PUBLIC_GA_ID            → GA4 measurement ID, e.g. "G-XXXXXXXXXX"
 * - NEXT_PUBLIC_GOOGLE_ADS_ID    → Google Ads conversion tag, e.g. "AW-XXXXXXXXX"
 * - NEXT_PUBLIC_GTM_ID           → Google Tag Manager container ID, e.g. "GTM-XXXXXXX"
 *
 * Each tag only renders if its ID is provided — safe to leave any unset.
 * gtag is loaded once and reused; both GA4 and Google Ads share dataLayer.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  // The tag-loader URL prefers GA4, falls back to Google Ads.
  const gtagId = gaId || googleAdsId;

  return (
    <>
      {gtmId ? (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}

      {gtagId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}');` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}

/**
 * Renders the GTM <noscript> iframe inside <body>. Only used if NEXT_PUBLIC_GTM_ID is set.
 */
export function GtmNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
