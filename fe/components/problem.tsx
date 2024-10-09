import React from "react";

const Problem: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto py-8 text-white">
      {/* Header */}
      <div className="col-span-full mb-5">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#99762E] to-[#FFC54D] bg-clip-text text-transparent">
          The Problem
        </h1>
      </div>

      {/* Tweet Container */}
      <div className="flex justify-end rounded-lg hover:scale-[1.02] transition-transform">
        <p className="text-right">
          This is a sample tweet or text block to describe a scenario.
        </p>
      </div>

      {/* Risk Section */}
      <div className="self-center">
        <p className="max-w-[30ch]">
          Risks associated with not solving this problem include...
        </p>
      </div>

      {/* Transaction List */}
      <div className="flex flex-col w-[60%] mx-auto p-4 rounded-lg bg-gradient-to-b from-[#3c1e04] to-[#040200] border border-gray-400">
        <h3 className="text-lg mb-3">Example Transactions</h3>
        <ul className="list-none text-sm">
          <li className="mb-2">Transaction 1</li>
          <li className="mb-2">Transaction 2</li>
          <li className="mb-2">Transaction 3</li>
        </ul>
      </div>

      {/* Additional Text Info */}
      <div className="flex justify-center items-center">
        <p className="max-w-[35ch]">
          Additional context or information goes here...
        </p>
      </div>

      {/* Solution Section */}
      <div className="flex justify-center">
        <p className="text-lg text-[#ffc54d] max-w-[30ch]">
          Our solution addresses these risks and improves outcomes.
        </p>
      </div>
    </div>
  );
};

export default Problem;
