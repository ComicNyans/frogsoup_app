'use client';

import { useEffect, useState } from 'react';
import { useWriteContract } from 'wagmi';
import { abi } from '../ABI/ABI';

const BURN_PHRASES = [
  'BURN, BURN, BURN!',
  'LIGHT THAT CANDLE!',
  'BURN BABY BURN!',
  'IMMOLATE THAT THANG!'
];

export default function Burn() {
  const { writeContract } = useWriteContract();
  const [randomPhrase, setRandomPhrase] = useState('');

  useEffect(() => {
    const lastPhrase = localStorage.getItem('lastBurnPhrase');
    const availablePhrases = BURN_PHRASES.filter(phrase => phrase !== lastPhrase);
    const newPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
    
    setRandomPhrase(newPhrase);
    localStorage.setItem('lastBurnPhrase', newPhrase);
  }, []);

  return (
    <div className="flex items-center justify-center flex-1 text-white flex-col gap-4 text-base sm:text-lg md:text-2xl text-center px-4 sm:px-8 pixel-text mt-32">
      <div className="text-[#f47e1b] max-w-full">
        <div className="flex items-center justify-center mb-4 flex-col lg:flex-row lg:items-center lg:justify-center">
          <span className="text-[#a93b3b] text-4xl sm:text-6xl md:text-8xl" data-numbers>1,000,000,000</span>
          <div className="flex sm:flex-row lg:flex-col lg:items-start lg:ml-4 text-[#a93b3b] text-3xl md:text-3xl mt-2 sm:mt-0 lg:mt-2">
            <span>$TOAD&nbsp;</span>
            <span>BURNED</span>
          </div>
        </div>
        
        <p className="mb-4 text-2xl">Anyone can burn $TOAD.</p>
        
        <p className="mb-4 text-2xl">
          <span data-numbers>33</span>% of Frog Soup minting proceeds are reserved for burning $TOAD, 
          reducing the circulating supply forever. Burned tokens are sent to{' '}
          <a 
            className="text-[#f4b41b]"
            href="https://etherscan.io/address/0x000000000000000000000000000000000000dead"
          >
            0x0000...dead
          </a>.
        </p>
        
        <p className="text-3xl">
          <span data-numbers>1,000,000</span> $TOAD is currently available to burn.
        </p>
      </div>
      
      <button
        className="px-4 py-2 burn-button"
        onClick={() => writeContract({
          abi,
          address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          functionName: "getToads",
        })}
      >
        {randomPhrase}
      </button>
    </div>
  );
}