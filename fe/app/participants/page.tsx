import React from 'react';

const participants = [
  'GpPSN************',
  '0xdb67************',
  '0xdb676**********',
  'bc1qzp407************',
  'GpPSNu4F********',
  'bc1qzp407zev************',
];

const Participants: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Participants</h1>
          <a href="#" className="text-sm text-gray-300 hover:underline">&lt; Back</a>
        </header>
        <ul className="space-y-4">
          {participants.map((address, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-lg p-4 flex justify-between items-center shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              <span className="font-mono text-base">{address}</span>
              <span className="text-xs text-gray-400">Wallet {index + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Participants;
