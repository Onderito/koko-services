import Link from "next/link";

type CTAProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
};

export default function FooterComponent({
    title,
    description,
    buttonText,
    buttonHref,
}: CTAProps) {
    return (
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 mt-16 lg:mt-20">
            <h2 className="heading-2 text-[#404040] mb-4">
                {title}
            </h2>
            <p className="body-text mb-8 max-w-2xl mx-auto">
                {description}
            </p>
            <Link href={buttonHref}>
                <button className="bg-[#404040] text-white rounded-xl px-8 py-4 font-manrope-bold text-[16px] hover:bg-[#505050] tracking-[-0.01em] transition-colors duration-300 cursor-pointer">
                    {buttonText}
                </button>
            </Link>
        </div>
    );
}
