import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <footer
            className="rounded-2xl relative overflow-hidden min-h-[234px] xl:min-h-[430px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <Image
                src="/bg-layout/footer.webp"
                alt="Scenic French Riviera background"
                fill
                priority
                className="object-cover"
            />
            {/* Vector overlay */}
            <Image
                className="absolute inset-0 w-full xl:h-full  object-cover z-10 pointer-events-none"
                src="/vector-footer.svg"
                alt="vector-footer"
                aria-hidden="true"
                width={500}
                height={500}
            />
            {/* Content layer */}
            <div className="relative z-20 flex items-center justify-center">
                <Link href="/contact-me">
                    <button className="bg-white rounded-xl px-8 py-4 cursor-pointer inner-shadow-dark font-manrope-bold text-[16px] hover:scale-105 transition-transform duration-300">
                        Reserve Your Ride
                    </button>
                </Link>
            </div>
            <Link className="text-white font-manrope-regular absolute bottom-5 left-5 underline" href="/legal-privacy">Legal privacy policy</Link>
        </footer>
    )
}