import React from 'react';
// import footerIcon from '../../assets/Frame.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#242424] text-white p-5 flex justify-between flex-wrap">
            <div className="flex-1 min-w-[200px] m-2">
                <h3 className="border-b-2 border-white pb-1 mb-2">Help</h3>
                <ul className="list-none p-0">
                    <li className="mb-2"><a href="#trophy_guide" className="hover:underline">Trophy Guide</a></li>
                    <li className="mb-2"><a href="#team" className="hover:underline">About the Team</a></li>
                    <li className="mb-2"><a href="#faqs" className="hover:underline">FAQs</a></li>
                    <li className="mb-2"><a href="#terms_of_use" className="hover:underline">Terms of Use</a></li>
                </ul>
            </div>
            <div className="flex-1 min-w-[200px] m-2">
                <h3 className="border-b-2 border-white pb-1 mb-2">Contact Us</h3>
                <ul className="list-none p-0">
                    <li className="mb-2"><a href="#twitter" className="hover:underline">Twitter</a></li>
                    <li className="mb-2"><a href="#email" className="hover:underline">Email</a></li>
                </ul>
            </div>
            <div className="flex-1 min-w-[200px] m-2 flex flex-col items-end text-center">
                <div className="flex items-center">
                    {/* <img src={footerIcon} alt="Footer Icon" className="h-10" /> */}
                    <h2 className="ml-2">Trophy</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
