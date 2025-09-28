export default function Footer() {
    return (
      <footer className="w-full bg-[#134155] text-white p-6 sm:p-12 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-6 gap-8 md:gap-0">
            <div>
                <h2 className="text-2xl font-bold">Explore</h2>
                <ul>
                    <li>CZIP</li>
                    <li>LTWP</li>
                    <li>Clients</li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Logo</h2>
                <ul className="flex gap-4">
                    <li>insta</li>
                    <li>fb</li>
                    <li>twitter</li>
                    <li>linkdin</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} StratX. All rights reserved.</p>
        </div>
      </footer>
    );
}