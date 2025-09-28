import Image from "next/image";
import HeroImage from "../../../public/images/hero.jpg";

export default function Hero() {
  return (
    <div className="w-full relative min-h-[100vh] flex items-center justify-start text-white p-8 sm:p-12">
      <Image
        src={HeroImage}
        alt="hero"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <div className="max-w-3xl space-y-6 z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          StratXCapital is a Private Investment Firm Focused on Monthly Returns
        </h1>

        <p className="text-xl sm:text-2xl">
          A Simpler, Smarter Way to Invest for a Secure Financial Future.
        </p>

        <button className="mt-6 px-8 py-4 text-lg font-semibold rounded-lg shadow-xl bg-white text-gray-900 border-2 border-white transition duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring-4 focus:ring-white/50">
          Book a Free Appointment
        </button>
      </div>
    </div>
  );
}
