import React, { useState } from 'react';

const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How exactly does Trophy help prevent scams?',
      answer: 'Trophy prevents scammers scouring X to send malicious NFTs and track your wallet.',
    },
    {
      question: 'How does Trophy choose winners of the giveaway?',
      answer: 'Trophy utilizes a Solana Verifiable Random Function (VRF) in order to choose a random winner on-chain.',
    },
    {
      question: 'How do I join a giveaway on Trophy?',
      answer: 'If you have Blockchain Links (Blinks) enabled on your wallet, simply click the "Enter Giveaway" button displayed on X.',
    },
    {
      question: 'How do I make my giveaway a Blink?',
      answer: 'Simply just share your giveaway link on X and watch the magic unfold! No extra input necessary.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[800px] mx-auto p-5 pb-20 text-white">
      <h2 className="text-2xl font-semibold mb-5">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-600 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-3 rounded"
            onClick={() => handleToggle(index)}
          >
            <h3 className="m-0 text-lg">{faq.question}</h3>
            <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="p-3 rounded mt-2">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
