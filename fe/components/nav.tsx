"use client";
import React, { useState } from "react";
import TrophyIcon from "@/components/icons/trophy";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useMounted from "@/hooks/useMounted";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mounted = useMounted();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-[#3b2b1e] transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <Logo alt="Logo" className="h-10 w-auto" /> */}
          <TrophyIcon className={"size-20"} />

          <Image
            src={"/assets/icons/authenticity.png"}
            alt=""
            width={200}
            height={200}
          />
          {/* <span className="text-white text-lg font-bold">Trophy</span> */}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center justify-center space-x-4 bg-[#a05b2a] text-white px-6 py-2 rounded-full">
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#faqs" className="hover:text-gray-300">
            FAQs
          </a>
          <a href="#discord" className="hover:text-gray-300">
            Discord
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
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
