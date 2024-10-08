import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-gradient-to-b from-[#a88a4a] to-[#594535] bg-cover bg-center h-[80vh]">
      <div className="flex justify-between items-center w-full max-w-[1300px] px-5 flex-col md:flex-row">
        <div className="text-left md:flex-1">
          <h1 className="text-5xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent drop-shadow-md">
            The safe way to Giveaway
          </h1>
          <p className="text-xl text-gray-200 mb-7">
            Decentralization shouldn’t cost you your privacy. Join NFT and
            crypto giveaways without having to reveal your public key to
            everyone!
          </p>
          <button className="bg-[#A86A39] text-white py-3 px-6 rounded-lg hover:bg-[#e0a94f] transition-colors">
            Browse Giveaways
          </button>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-0 md:ml-8">
          {/* <Image src={""}></Image> */}
          <img
            src="/path/to/image.png"
            alt="Hero Image"
            className="w-full h-auto max-w-sm md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
