import React from 'react';

const Solution: React.FC = () => {
  return (
    <div className="text-left p-10 h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-normal text-[#ffc54d] mb-5 max-w-[55ch]">
        With Trophy, you can instantly create and join NFT and crypto giveaways
        without having to reveal your public key to everyone!
      </h1>

      <div className="flex justify-center mb-7 flex-wrap">
        <div className="bg-gradient-to-br from-[#2c2c2c] to-[#444444] rounded-lg p-5 m-4 w-[320px] shadow-md transition-transform duration-300 text-white flex flex-col justify-center text-left hover:scale-105 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Join Giveaway</h3>
          <p className="text-base leading-6 text-[#cccccc]">
            Participate in exciting NFT and crypto giveaways easily.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#2c2c2c] to-[#444444] rounded-lg p-5 m-4 w-[320px] shadow-md transition-transform duration-300 text-white flex flex-col justify-center text-left hover:scale-105 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Connect Wallet</h3>
          <p className="text-base leading-6 text-[#cccccc]">
            Securely connect your wallet to participate in the giveaways.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#2c2c2c] to-[#444444] rounded-lg p-5 m-4 w-[320px] shadow-md transition-transform duration-300 text-white flex flex-col justify-center text-left hover:scale-105 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Create Giveaway</h3>
          <p className="text-base leading-6 text-[#cccccc]">
            Host your own NFT or crypto giveaway with ease.
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-7 flex-wrap">
        <div className="bg-gradient-to-br from-[#2c2c2c] to-[#444444] rounded-lg p-5 m-4 w-[320px] shadow-md transition-transform duration-300 text-white flex flex-col justify-center text-left hover:scale-105 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Solana BLINKS Integration</h3>
          <p className="text-base leading-6 text-[#cccccc]">
            Integrate with Solana BLINKS for seamless crypto transactions.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#2c2c2c] to-[#444444] rounded-lg p-5 m-4 w-[320px] shadow-md transition-transform duration-300 text-white flex flex-col justify-center text-left hover:scale-105 hover:shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Automated Raffle System</h3>
          <p className="text-base leading-6 text-[#cccccc]">
            Use our automated system to ensure fair and transparent raffles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
