import React from 'react';
// import trophyIcon from '/assets/Trophy Icon 2.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        {/* <img src={trophyIcon} alt="Trophy Logo" className="h-5" /> */}
      </div>
      <nav className="flex justify-center flex-grow">
        <div className="flex gap-8 bg-[#5a4634] py-3 px-10 rounded-lg">
          <a href="#" className="text-gray-200 text-base no-underline hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-200 text-base no-underline hover:text-white">
            Features
          </a>
          <a href="#" className="text-gray-200 text-base no-underline hover:text-white">
            FAQs
          </a>
          <a href="#" className="text-gray-200 text-base no-underline hover:text-white">
            Socials
          </a>
        </div>
      </nav>
      <button className="bg-[#5a4634] text-gray-200 border-none py-3 px-10 rounded-lg cursor-pointer transition-colors duration-300 text-lg hover:bg-[#7a634e]">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
