import Image from "next/image";
import React from "react";

const Solution: React.FC = () => {
  return (
    <div id="about" className="h-screen text-center py-16 px-20 flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-10 max-w-[55ch] bg-gradient-to-r from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent drop-shadow-md">
        What Trophy is All About
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 justify-center">
        {/* Feature 1 */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <Image
            src="/assets/icons/key.png"
            alt="key icon"
            width={210}
            height={210}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Joining Giveaways</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Join giveaways with the click of a button.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <Image
            src="/assets/icons/wallet.png"
            alt="wallet icon"
            width={210}
            height={210}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Connect Wallet</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Connect your wallet to Trophy hassle-free.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <Image
            src="/assets/icons/gift.png"
            alt="gift icon"
            width={210}
            height={210}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Creating Giveaways</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Host giveaways easily with Trophy.
          </p>
        </div>
      </div>

      {/* Center the last row if it contains fewer than 3 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center gap-8 mb-5">
         {/* Feature 4: Solana Actions */}
         <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <Image
            src="/assets/icons/chain.png"
            alt="chain icon"
            width={210}
            height={210}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">
            Solana Actions BLINKS Integration
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Join giveaways through various different platforms.
          </p>
        </div>

        {/* Feature 5: Automated Raffle System */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <Image
            src="/assets/icons/gear.png"
            alt="gear icon"
            width={210}
            height={210}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-white">
            Automated Raffle System
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Win with certainty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
