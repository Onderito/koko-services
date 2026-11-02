// /legal-privacy in the Anti language (inspirations/IMG_8800): a navy band hero with the header inside it (h1 and
// update date), then the legal text in one readable column on white, its contents list beside it (sticky on wide
// screens, on top on phones), the contact line and links in a grey panel, then the site footer. Texts, links, anchors
// and ids unchanged; no animation.

import { ArrowUpRight } from "lucide-react";
import Footer from "../layout/footer";
import { AntiSection } from "../ui/anti";
import ArrowButton from "../ui/arrow-button";
import { Accent } from "../ui/kit";
import { contactEmail, contactPhone, contactPhoneDisplay } from "../data/site-config";

const sections = [
  { id: "publisher", title: "1. Website publisher", paragraphs: [
    "Kokolimo is the commercial name used on this website for services operated by MY NICE TOURS, also known as My Riviera Tours, a French limited liability company (SARL) with share capital of €5,000.",
    "Registered office: Le Wagram, 33 rue de Châteauneuf, 06000 Nice, France. SIREN: 838 777 787. RCS Nice: 838 777 787. VAT number: FR16 838 777 787. Activity code: 49.32Z.",
    "Company manager and publication director: Marie-Pierre Gouliardon. Website design and technical maintenance: Ulas Önder. Business enquiries and personal data requests: info@myriviera.fr. Company contact telephone: +33 6 50 02 00 19. The Kokolimo booking contact is listed below.",
  ] },
  { id: "hosting", title: "2. Hosting and website content", paragraphs: [
    "Hosting provider: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. Published contact telephone: +1 559 288 7060. Website: vercel.com.",
    "Texts, photographs, graphics and other website elements are protected by the rights of their respective owners. Reproduction or commercial reuse requires the relevant permission. Third-party brands remain the property of their owners.",
    "Prices displayed as guide prices are indicative. Availability, itinerary, total price and included services are confirmed in a personalised quote. Sending an enquiry does not create a confirmed booking. Event schedules and travel times may change; confirm essential arrangements before travelling.",
  ] },
  { id: "privacy", title: "3. Personal data and purposes", paragraphs: [
    "MY NICE TOURS is the controller of personal data collected through Kokolimo. This policy explains processing under the General Data Protection Regulation (GDPR) and the French Data Protection Act.",
    "Quote enquiries: name, email, telephone, selected service, dates and times, pickup and destination, passenger and luggage numbers, flight number and any message you provide. These details are used to answer your request, prepare a quote and, if you book, organise the service. The legal basis is taking steps at your request before a contract and performing that contract.",
    "Partner enquiries: professional contact details, organisation and information you provide about your activity. We use these to assess and respond to proposed partnerships, based on our legitimate interest in managing professional relationships and, where applicable, pre-contractual steps.",
    "Technical connection information may be processed by our hosting and email providers to deliver and secure the website and messages, based on legitimate interests in operating a secure service. Accounting records are processed to meet legal obligations. Optional analytics and advertising rely on consent.",
    "Fields marked as required are necessary to process the request. Without them we may be unable to respond or prepare a quote. Please do not send bank card details, identity documents or unnecessary sensitive information through the free-text fields. Form submissions are not newsletter subscriptions and are not consent to advertising cookies.",
  ] },
  { id: "recipients", title: "4. Recipients and international processing", paragraphs: [
    "Access is limited to people handling your enquiry and service, and the technical providers needed to operate the website. Vercel provides hosting; Resend delivers form emails to the business mailbox. Where a booking requires a driver or transport partner, only relevant operational details are shared. Accounting or legal advisers and authorities may receive information where necessary or legally required.",
    "If you accept the relevant cookies, Google processes analytics and/or advertising information. Providers may process information outside the European Economic Area, including in the United States. Such processing must rely on an applicable adequacy decision or appropriate safeguards, such as the European Commission’s standard contractual clauses. Contact us for information about the safeguards applicable to your data.",
    "WhatsApp, Google Reviews and Tripadvisor are external services. Following their links takes you to a service governed by its own privacy policy; opening a link does not authorise optional tracking on Kokolimo.",
  ] },
  { id: "retention", title: "5. Retention", paragraphs: [
    "Enquiries and prospective partner records are retained only as long as necessary to follow up the request, with a maximum of three years after your last contact where a commercial follow-up remains relevant. Booking data is kept for the service and any necessary contractual follow-up. Records needed as evidence may be archived with restricted access for the applicable legal limitation period. Accounting documents are retained for ten years under French law.",
    "Cookie choices are stored for 180 days on this browser. Analytics cookies configured directly by this website expire after a maximum of 13 months without automatically extending that period on each visit. Other Google cookie lifetimes depend on their purpose and Google’s settings. Server-side analytics retention is separate from cookie lifetime. You can request details or deletion using the contact below, subject to applicable legal obligations.",
  ] },
  { id: "cookies", title: "6. Cookies and your choices", paragraphs: [
    "Essential storage: kokolimo-consent-v1 records your choices, their date and the policy version in this browser’s local storage. It is used to respect your preferences and does not require optional-cookie consent.",
    "Statistics: Google Analytics 4 measures visits and use of the site, including pages viewed, device and browser information and interactions. Google cookies such as _ga and _ga_* may be used. This purpose is off by default.",
    "Advertising: Google Ads measures advertising effectiveness and supports advertising personalisation. It may use cookies such as _gcl_au and other Google advertising cookies and identifiers. This purpose is off by default and has its own preference.",
    "Use Reject all, Accept all or Customise in the cookie banner. Optional Google tags are not loaded before permission. Your choice is saved for 180 days, after which you are asked again. Use the Cookie settings button on any page to change or withdraw consent just as easily. Changing an active permission reloads the page to stop previously loaded tags and attempts to remove accessible Google cookies on this domain; third-party cookies can also be removed through your browser settings. Withdrawal does not affect the lawfulness of earlier processing.",
  ] },
  { id: "rights", title: "7. Your rights and complaints", paragraphs: [
    "Depending on the processing and legal conditions, you may request access, correction, erasure, restriction, portability, object to processing based on legitimate interests and withdraw consent. You may also provide instructions concerning your data after your death under French law.",
    "Send your request to info@myriviera.fr or MY NICE TOURS, Le Wagram, 33 rue de Châteauneuf, 06000 Nice, France. We may ask for proportionate identity verification when necessary. Requests are normally answered within one month; a permitted extension will be explained where the request is complex.",
    "You may lodge a complaint with the CNIL, the French supervisory authority, at cnil.fr. This does not prevent you from exercising other available rights or remedies.",
  ] },
];

const references = [
  { href: "https://www.cnil.fr/fr/plaintes", label: "Contact the CNIL" },
  { href: "https://policies.google.com/technologies/partner-sites", label: "How Google uses data" },
  { href: "https://vercel.com/legal/privacy-policy", label: "Vercel privacy" },
  { href: "https://resend.com/legal/privacy-policy", label: "Resend privacy" },
];

const inlineLink = "font-medium text-[#101828] underline decoration-[#e2b04a] decoration-2 underline-offset-[5px] transition-colors hover:text-[#a97c25]";

export default function LegalNotice() {
  return <>
    <article>
      <header data-hero-tone="dark" data-nav-tone="dark" className="bg-[#0d1922] text-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-14 pt-[calc(var(--header-h)+3.5rem)] md:px-6 md:pb-16 lg:pb-20 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <h1 className="max-w-[780px] text-[40px] font-bold leading-[1.04] tracking-[-0.025em] sm:text-[54px] lg:text-[64px]" style={{ textWrap: "balance" }}>
            <Accent text="Legal notice & privacy policy" accent="privacy policy" tone="dark" />
          </h1>
          <p className="mt-5 text-[17px] text-white/70 md:text-[18px]">Updated 19 September 2026</p>
        </div>
      </header>

      <AntiSection tone="white" innerClassName="grid gap-10 lg:grid-cols-[264px_minmax(0,760px)] lg:gap-16 xl:gap-24">
        <nav aria-label="Legal page contents" className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
          <ul className="rounded-[10px] bg-[#f5f6f8] p-2">
            {sections.map(section => <li key={section.id}>
              <a href={`#${section.id}`} className="block rounded-[8px] px-3.5 py-2.5 text-[14px] font-medium leading-snug text-[#475467] transition-colors duration-150 hover:bg-white hover:text-[#101828]">{section.title}</a>
            </li>)}
          </ul>
        </nav>

        <div className="min-w-0 text-[17px] leading-[1.75] text-[#344054]">
          {sections.map((section, i) => <section key={section.id} id={section.id} className={`scroll-mt-28 ${i > 0 ? "mt-12 border-t border-[#eaecf0] pt-12" : ""}`}>
            <h2 className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-[#101828] md:text-[28px]">{section.title}</h2>
            {section.paragraphs.map(p => <p key={p} className="mt-5">{p}</p>)}
          </section>)}

          <div className="mt-14 rounded-[10px] bg-[#f5f6f8] p-6 md:p-8">
            <p>Contact: <a className={inlineLink} href={`mailto:${contactEmail}`}>{contactEmail}</a> · <a className={`${inlineLink} whitespace-nowrap`} href={`tel:${contactPhone}`}>{contactPhoneDisplay}</a>.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {references.map(link => <a key={link.href} href={link.href} className="inline-flex h-11 items-center gap-2 rounded-full border border-[#101828]/15 bg-white px-5 text-[14px] font-semibold text-[#101828] transition-colors duration-200 hover:border-[#101828]/40">
                {link.label}
                <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" className="text-[#a97c25]" />
              </a>)}
              <ArrowButton text="Request a quote" href="/contact-me" />
            </div>
          </div>
        </div>
      </AntiSection>
    </article>
    <Footer />
  </>;
}
