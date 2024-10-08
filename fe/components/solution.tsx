import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="text-center py-16 px-20 flex flex-col items-center bg-gradient-to-b from-[#a88a4a] to-[#594535]">
      <h2 className="text-4xl font-semibold mb-10 max-w-[55ch] bg-gradient-to-r from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent drop-shadow-md">
        Our Solution
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
        {/* Feature 1 */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <img
            src="/path/to/key-icon.png"
            alt="Join Giveaways Icon"
            className="w-20 h-20 mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Join Giveaways</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Join giveaways with the click of a button.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <img
            src="/path/to/wallet-icon.png"
            alt="Connect Wallet Icon"
            className="w-20 h-20 mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Connect Wallet</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Connect your wallet to Trophy hassle-free.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <img
            src="/path/to/gift-icon.png"
            alt="Create Giveaway Icon"
            className="w-20 h-20 mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold mb-2 text-white">Create Giveaway</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Host giveaways easily with Trophy.
          </p>
        </div>

        {/* Feature 4: Solana Actions */}
        <div className="bg-[rgba(60,60,60,0.6)] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.05] transition-all text-left">
          <img
            src="/path/to/chain-icon.png"
            alt="Solana Integration Icon"
            className="w-20 h-20 mb-4 mx-auto"
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
          <img
            src="/path/to/gear-icon.png"
            alt="Automated Raffle System Icon"
            className="w-20 h-20 mb-4 mx-auto"
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
// pnpm add @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js
