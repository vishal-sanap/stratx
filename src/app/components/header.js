import Link from 'next/link';

// Define your navigation links
const navItems = [
  { name: 'Home', href: '/features' },
  { name: 'Services', href: '/pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-20 w-full shadow-md p-8 sm:p-12">
      <div className="container flex items-center justify-between">
        
        <div className="flex items-center">
          <Link href="/" className="text-2xl">
            Logo
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </div>

      </div>
    </header>
  );
}