import Image from 'next/image';
import React from 'react';

const features = [
  {
    title: "Stay Cautious with Trophy on Your Side",
    description: "Eliminate the need to share your wallet address to the public. Join giveaways without your privacy at stake.",
    imgSrc: "/assets/icons/trophy.png",
    alt: "trophy icon",
  },
  {
    title: "Avoid Malicious Attacks Entirely",
    description: "Stay hidden from the NFT space as you enter giveaways freely.",
    imgSrc: "/assets/icons/vault.png",
    alt: "vault icon",
  },
  {
    title: "Legitimate Giveaways Guaranteed",
    description: "Receive your prize with confidence. Authenticity at your service.",
    imgSrc: "/assets/icons/authenticity.png",
    alt: "authenticity icon",
  },
  {
    title: "Safety and Fairness. Just for you.",
    description: "Create or join giveaways with a single click. Verify your win on the blockchain with ease.",
    imgSrc: "/assets/icons/lock.png",
    alt: "lock icon",
  },
];

const Feature: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 py-[6.5rem] px-[13rem]"> {/* feature-container */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-5 bg-transparent ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} 
        >
          <div className="max-w-1/2 text-[#d5a21a]"> {/* feature-text */}
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-l from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent drop-shadow-[10px_10px_5px_rgba(0,0,0,0.2)]"> {/* feature-text h2 */}
              {feature.title}
            </h2>
            <p className="text-xl leading-6 text-[#f2f2f2]"> {/* feature-text p */}
              {feature.description}
            </p>
          </div>
          <Image
            src={feature.imgSrc}
            alt={feature.alt}
            width={200}
            height={200}
            className="w-[300px] h-auto ml-5"
          />
        </div>
      ))}
    </div>
  );
};

export default Feature;
