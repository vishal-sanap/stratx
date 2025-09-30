"use client";
import Link from 'next/link';
import { useState } from 'react';

// Define your navigation links
// NOTE: hrefs are changed to use section IDs (#section-id)
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent p-4 sm:p-6">
      <div className="container mx-auto flex items-center justify-between text-white">
        
        <div className="flex items-center z-50"> 
          <Link href="#home" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
            Logo
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium bg-transparent text-white hover:text-gray-300 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden relative z-50 p-3 rounded-lg bg-transparent 
                     hover:bg-gray-800/50 transition duration-300 group"
        >
          <div className="flex flex-col space-y-1.5 w-6 h-6">
            <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out 
                               ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} group-hover:bg-gray-300`}></span>
            
            <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out 
                               ${isMenuOpen ? 'opacity-0' : ''} group-hover:bg-gray-300`}></span>
            
            <span className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out 
                               ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} group-hover:bg-gray-300`}></span>
          </div>
        </button>
      </div>

      <div 
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 
                   flex flex-col items-center pt-24 space-y-8 
                   transform transition-transform duration-300 ease-in-out z-40
                   ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="text-white text-3xl font-bold hover:text-gray-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}