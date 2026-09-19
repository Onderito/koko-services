import Link from "next/link";
import Footer from "../layout/footer";
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

export default function LegalNotice() {
  return <>
    <article className="mx-auto max-w-4xl px-6 pb-16 pt-32 text-[#404040]">
      <h1 className="text-3xl font-bold md:text-5xl">Legal notice & privacy policy</h1>
      <p className="mt-4 text-sm text-gray-600">Updated 19 September 2026</p>
      <nav aria-label="Legal page contents" className="my-8 flex flex-wrap gap-3">
        {sections.map(section => <a key={section.id} href={`#${section.id}`} className="rounded-lg border px-3 py-2 text-sm underline">{section.title}</a>)}
      </nav>
      {sections.map(section => <section key={section.id} id={section.id} className="mb-9 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
        {section.paragraphs.map(p => <p key={p} className="mt-3 leading-relaxed">{p}</p>)}
      </section>)}
      <p className="leading-relaxed">Contact: <a className="underline" href={`mailto:${contactEmail}`}>{contactEmail}</a> · <a className="underline" href={`tel:${contactPhone}`}>{contactPhoneDisplay}</a>.</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm underline">
        <a href="https://www.cnil.fr/fr/plaintes">Contact the CNIL</a>
        <a href="https://policies.google.com/technologies/partner-sites">How Google uses data</a>
        <a href="https://vercel.com/legal/privacy-policy">Vercel privacy</a>
        <a href="https://resend.com/legal/privacy-policy">Resend privacy</a>
        <Link href="/contact-me">Request a quote</Link>
      </div>
    </article>
    <Footer />
  </>;
}
