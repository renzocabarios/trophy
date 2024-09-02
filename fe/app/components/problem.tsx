import React from 'react';
import { Tweet } from 'react-tweet';

const Problem: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto p-8 text-white">
      <header className="col-span-2 mb-5">
        <h2 className="text-2xl font-semibold">The Problem:</h2>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#99762e] to-[#ffc54d] bg-clip-text text-transparent">
          Joining crypto and NFT giveaways online can expose your identity.
        </h1>
      </header>
      <section className="flex justify-end items-end rounded-lg mb-5 transform transition-transform duration-300 hover:scale-105">
        <Tweet id="1818129644270538861" />
      </section>
      <section className="flex flex-col items-center justify-start pt-10 gap-5">
        <h1 className="bg-[#1a1a1a] p-5 rounded-lg text-lg text-center shadow-[0_0_20px_rgba(240,165,0,0.8)] max-w-[400px] w-full">
          Wallet: f4df-ai0d
        </h1>
        <h1 className="bg-[#1a1a1a] p-5 rounded-lg text-lg text-center shadow-[0_0_20px_rgba(240,165,0,0.8)] max-w-[400px] w-full">
          Name: Karl Contreras
        </h1>
      </section>
      <section className="flex justify-center">
        <p className="max-w-[30ch]">
        There’s risk involved when sharing your public keys everywhere.
        </p>
      </section>
      <section className="col-span-1 flex flex-col items-center w-[60%] border border-[#a39898] rounded-lg p-4 bg-gradient-to-b from-[#3c1e04] to-black grid-row-2">
        <h3 className="font-normal text-lg mb-3">Transactions of wallet fada-97cd</h3>
        <ul className="list-none p-0 text-sm">
          <li>0.0043 SOL &rarr; #661-ue76 | 15:27:00</li>
          <li>0.0043 SOL &rarr; 4661-75 | 15:27:00</li>
          <li>0.0043 SOL &rarr; 661-ue7s | 15:27:00</li>
          <li>0.0043 SOL &rarr; e661-uels | 15:27:00</li>
        </ul>
      </section>
      <section className="flex justify-center">
        <p className="max-w-[35ch]">
            Bad actors can target your wallet and send malicious NFTs You may be the target of other attacks to steal your wallet
        </p>
      </section>
      <section className="flex justify-left col-span-2">
        <p className="text-lg max-w-[30ch] text-[#ffc54d]">
          We believe that you don't need to share your social media accounts and email addresses to join giveaways.
        </p>
      </section>
    </div>
  );
};

export default Problem;
