import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#a88a4a] to-[#594535]">
      <footer className="bg-[#6C572D] rounded-t-[40px] text-white p-5 flex justify-between flex-wrap">
        <div className="flex-1 min-w-[200px] mx-2">
          <h3 className="border-b-2 border-white pb-1 mb-1">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#careers" className="hover:underline">Careers</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px] mx-2">
          <h3 className="border-b-2 border-white pb-1 mb-1">Help</h3>
          <ul>
            <li className="mb-2">
              <a href="#faq" className="hover:underline">FAQ</a>
            </li>
            <li className="mb-2">
              <a href="#support" className="hover:underline">Support</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end items-end text-center mx-2">
          <img src="/path/to/icon.png" alt="Company Logo" className="h-10" />
          <h2 className="ml-3">Our Company</h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
