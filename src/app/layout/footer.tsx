import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="rounded-2xl relative overflow-hidden min-h-[234px] xl:min-h-[430px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: "url('/bg-layout/footer-bg.jpg')"
            }}
        >
            {/* Vector overlay */}
            <Image
                className="absolute inset-0 w-full xl:h-full  object-cover z-10 pointer-events-none"
                src="/vector-footer.svg"
                alt="vector-footer"
                width={500}
                height={500}
            />

            {/* Content layer */}
            <div className="relative z-20 flex items-center justify-center">
                <button className="bg-white rounded-xl px-8 py-4 cursor-pointer inner-shadow-dark font-manrope-bold text-[16px] hover:scale-105 transition-transform duration-300">
                    Reserve Your Ride
                </button>
            </div>
        </footer>
    )
}