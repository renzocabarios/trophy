import React from 'react';

const Feature: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 py-24 px-10 bg-gradient-to-b from-[#a88a4a] to-[#594535] lg:px-24 md:px-16 sm:px-10">
      {/* Feature 1: Text Left, Image Right */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-5">
        <div className="text-left max-w-[50%] lg:max-w-[45%] text-[#d5a21a]">
          <h2 className="text-3xl font-semibold mb-2 text-[#FFC54D]">
            Stay Cautious with Trophy on Your Side
          </h2>
          <p className="text-lg leading-7 text-white">
            Eliminate the need to share your wallet address to the public. Join giveaways without your privacy at stake.
          </p>
        </div>
        <img src="/path/to/trophy-icon.png" alt="Trophy Icon" className="w-36 h-auto ml-5 lg:ml-10 lg:order-1" />
      </div>

      {/* Feature 2: Text Right, Image Left (with right-aligned text) */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between py-5">
        <div className="text-right max-w-[50%] lg:max-w-[45%] text-[#d5a21a]">
          <h2 className="text-3xl font-semibold mb-2 text-[#FFC54D]">
            Avoid Malicious Attacks Entirely
          </h2>
          <p className="text-lg leading-7 text-white">
            Stay hidden from the NFT space as you enter giveaways freely.
          </p>
        </div>
        <img src="/path/to/safe-icon.png" alt="Safe Icon" className="w-36 h-auto mr-5 lg:mr-10" />
      </div>

      {/* Feature 3: Text Left, Image Right */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-5">
        <div className="text-left max-w-[50%] lg:max-w-[45%] text-[#d5a21a]">
          <h2 className="text-3xl font-semibold mb-2 text-[#FFC54D]">
            Legitimate Giveaways Guaranteed
          </h2>
          <p className="text-lg leading-7 text-white">
            Receive your prize with confidence. Authenticity at your service.
          </p>
        </div>
        <img src="/path/to/shield-icon.png" alt="Shield Icon" className="w-36 h-auto ml-5 lg:ml-10 lg:order-1" />
      </div>

      {/* Feature 4: Text Right, Image Left (with right-aligned text) */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between py-5">
        <div className="text-right max-w-[50%] lg:max-w-[45%] text-[#d5a21a]">
          <h2 className="text-3xl font-semibold mb-2 text-[#FFC54D]">
            Safety and Fairness. Just for you.
          </h2>
          <p className="text-lg leading-7 text-white">
            Create or join giveaways with a single click. Verify your win on the blockchain with ease.
          </p>
        </div>
        <img src="/path/to/lock-icon.png" alt="Lock Icon" className="w-36 h-auto mr-5 lg:mr-10" />
      </div>
    </div>
  );
};

export default Feature;
