import React, { useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const Questions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How exactly does Trophy help prevent scams?',
      answer: 'Trophy prevents scammers scouring X to send malicious NFTs and track your wallet.'
    },
    {
      question: 'How does Trophy choose winners of the giveaway?',
      answer: 'Trophy utilizes a Solana Verifiable Random Function (VRF) in order to choose a random winner on-chain.'
    },
    {
      question: 'How do I join a giveaway on Trophy?',
      answer: 'You can easily join a giveaway on Trophy by following the instructions on the platform.'
    },
    {
      question: 'How do I make my giveaway a Blink?',
      answer: 'Simply just share your giveaway link on X and watch the magic unfold! No extra input necessary.'
    },
  ];

  return (
    <div className="py-10"> {/* Updated background gradient */}
      <div className="max-w-[800px] mx-auto px-5 text-white pb-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent drop-shadow-lg mb-8">
          FAQs
        </h2>

        {faqs.map((item, index) => (
          <div 
            key={index} 
            className={`mb-4 p-4 rounded-lg border border-yellow-600 ${activeIndex === index ? 'bg-opacity-30' : ''}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer p-3 rounded-lg"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex items-center space-x-3">
                <FaTrophy className="text-yellow-400" />
                <h3 className="text-xl font-semibold">{item.question}</h3>
              </div>
              <span className="text-lg text-yellow-400">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <div className="p-3 rounded-lg bg-opacity-20 mt-2 text-gray-300">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
