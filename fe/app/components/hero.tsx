import React from 'react';
// import InfiniteCarousel from './infinitecarousel';

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-cover bg-center bg-no-repeat h-[80vh]">
      <div className="flex items-center justify-between max-w-[1300px] w-full">
        <div className="flex-1 text-[#f3bf63]">
          <h1 className="text-6xl mb-5">The safe way to Giveaway</h1>
          <p className="text-xl mb-7 text-gray-200">
            Decentralization shouldn’t cost you your privacy. Join NFT and crypto giveaways without having to reveal your public key to everyone!
          </p>
          <button className="bg-[#f3bf63] text-[#3b2b1e] border-none py-4 px-8 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#e0a94f]">
            Browse Giveaways
          </button>
        </div>
        <div className="flex-1 mt-[-3.5rem] ml-8 py-4 flex justify-center items-center">
          {/* <InfiniteCarousel /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
