import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
      <footer id="contact" className="w-full bg-[#134155] text-white p-6 sm:p-12 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-6 gap-8 md:gap-0">
            <div>
                <h2 className="text-2xl font-bold">Explore</h2>
                <ul>
                    <li><Link href="#czip">CZIP</Link></li>
                    <li><Link href="#ltwp">LTWP</Link></li>
                    <li><Link href="#numbers">Clients</Link></li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold"><Image width={50} height={50} src="./logo-white.svg" alt="logo"/></h2>
                <ul className="flex gap-4">
                    <FaLinkedin />
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About Us</Link></li>
                    <li><Link href="#contact">Contact Us</Link></li>
                    <li><Link href="#services">Services</Link></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} StratX. All rights reserved.</p>
          <p>StratX Capital is a private investment management company. The information provided on this website is for informational purposes only and does not constitute investment advice, an offer, or a solicitation to buy or sell any securities or financial instruments. Investments involve risk, including the potential loss of principal, and past performance is not indicative of future results. StratX Capital does not guarantee any specific outcomes or returns. Access to our services is limited and may be subject to eligibility requirements. Please consult a qualified financial advisor before making investment decisions.</p>
        </div>
      </footer>
    );
}