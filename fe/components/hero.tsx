import React from "react";
import InfiniteCarousel from "./infinitecarousel";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-cover bg-center bg-no-repeat h-[80vh]"> {/* hero */}
      <div className="flex items-center justify-between max-w-[1300px] w-full"> {/* hero content */}
        {/* Left column for text */}
        <div className="flex-1 flex flex-col text-[#99762e]"> {/* hero text */}
          <h1 className="text-7xl mb-5 bg-gradient-to-r from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent drop-shadow-[10px_10px_5px_rgba(0,0,0,0.2)]"> {/* hero title */}
            The safe way to Giveaway
          </h1>
          <p className="text-base mb-7 text-gray-200"> {/* hero description */}
            Decentralization shouldn’t cost you your privacy. Join NFT and
            crypto giveaways without having to reveal your public key to
            everyone!
          </p>
          <button className="bg-[#A86A39] text-white border-none py-3 px-6 rounded-lg w-cursor-pointer transition-colors duration-300 hover:bg-[#e0a94f]" style={{ width: "290px", height: "50px" }}> {/* hero button */}
            Browse and Create Giveaways
          </button>
        </div>

        {/* Right column for image */}
        <div className="ml-8">
          <InfiniteCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
