"use client";
import useMounted from "@/hooks/useMounted";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const mounted = useMounted();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Track scroll position to hide/show the nav
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and passed 100px from the top
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  // Track mouse movement to show the nav when the cursor is near the top
  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY <= 20) {
      // If the cursor is at the very top of the screen (within 20px)
      setShowNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="#home" className="flex items-center text-[#FFC54D] text-[24px] font-semibold">
            <Image
              src={"/assets/trophy-icon-1.png"}
              alt="Trophy Logo"
              width={36}
              height={45}
            />
            <span className="ml-2">Trophy</span>
          </a>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center justify-center space-x-4 bg-[#a05b2a] text-white px-6 py-2 rounded-full">
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#faqs" className="hover:text-gray-300">
            FAQs
          </a>
        </div>

        {/* Connect Wallet Button */}
        <div className="hidden md:flex">{mounted && <WalletMultiButton />}</div>

        {/* Hamburger Menu for Mobile */}
        <button className="block md:hidden" onClick={toggleNav}>
          <span className="text-3xl text-gray-200">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#5a4634] p-5">
          <a href="#features" className="text-gray-200 hover:text-white py-2">
            Features
          </a>
          <a href="#faqs" className="text-gray-200 hover:text-white py-2">
            FAQs
          </a>
          <a href="#discord" className="text-gray-200 hover:text-white py-2">
            Discord
          </a>
          <a href="#about" className="text-gray-200 hover:text-white py-2">
            About
          </a>
          <a
            href="#connectwallet"
            className="bg-[#a05b2a] text-white px-6 py-2 rounded-full mt-4"
          >
            Connect Wallet
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
