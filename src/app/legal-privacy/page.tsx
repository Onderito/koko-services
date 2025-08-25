"use client";

export default function LegalNotice() {
    return (
        <div className="px-6 md:px-20 py-12 max-w-5xl mx-auto text-[#404040]">
            <h1 className="text-3xl md:text-5xl xl:leading-16 font-manrope-bold mb-8 text-center">
                Legal Notice & Privacy Policy
            </h1>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Introduction</h2>
                    <p>
                        With the development of new communication tools, special attention
                        must be paid to the protection of privacy. That is why we are
                        committed to respecting the confidentiality of the personal data we
                        collect.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">
                        Collection of Personal Information
                    </h2>
                    <p>First name, Email address, Telephone / Fax number.</p>
                    <p className="mt-2">
                        The personal data we collect is gathered through forms and through
                        the interactivity established between you and our website. We also
                        use, as indicated in the following section, cookies and/or log files
                        to gather information about you.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Forms and Interactivity</h2>
                    <p>
                        Your personal information is collected through forms, such as:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Website registration form</li>
                    </ul>
                    <p className="mt-2">
                        We use the information collected for the following purposes:
                        Statistics, Contact
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">
                        Right to Object and Withdraw
                    </h2>
                    <p>
                        We are committed to offering you the right to object to and withdraw
                        your personal data.
                    </p>
                    <p className="mt-2">
                        The right to object means that users may refuse to allow their
                        personal information to be used for certain purposes mentioned at
                        the time of collection.
                    </p>
                    <p className="mt-2">
                        The right of withdrawal means that users may request that their
                        personal information no longer appear, for example, in a mailing
                        list.
                    </p>
                    <p className="mt-2">
                        To exercise these rights, you may contact us at:
                        <br /> Postal code: 06000
                        <br /> Email:{" "}
                        <a
                            href="mailto:Info@myriviera.fr"
                            className="text-blue-600 hover:underline"
                        >
                            Info@myriviera.fr
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Right of Access</h2>
                    <p>
                        We are committed to granting a right of access and rectification to
                        individuals who wish to consult, modify, or delete the information
                        concerning them.
                    </p>
                    <p className="mt-2">
                        This right may be exercised at:
                        <br /> Postal code: 06000
                        <br /> Email:{" "}
                        <a
                            href="mailto:Info@myriviera.fr"
                            className="text-blue-600 hover:underline"
                        >
                            Info@myriviera.fr
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Security</h2>
                    <p>
                        The personal information we collect is kept in a secure environment.
                        People working for us are required to respect the confidentiality of
                        your information.
                    </p>
                    <p className="mt-2">
                        To ensure the security of your personal information, we use the
                        following measures:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>SSL Protocol</li>
                    </ul>
                    <p className="mt-2">
                        We are committed to maintaining a high level of confidentiality by
                        integrating the latest technological innovations to ensure the
                        security of your transactions. However, since no mechanism can
                        provide maximum security, some degree of risk is always present when
                        using the Internet to transmit personal data.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-manrope-bold mb-2">Legislation</h2>
                    <p>
                        We are committed to complying with the legislative provisions set
                        out in:
                        <br />
                        <strong>Disclaimer:</strong> Neither the use of this Privacy Policy
                        Generator nor the resulting policy constitutes, in any way, legal
                        advice.
                    </p>
                </div>
            </section>
        </div>
    );
}
