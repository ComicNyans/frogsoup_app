"use client";

import React from "react";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { abi } from "../ABI/ABI";

const Burn = () => {
  const { writeContract } = useWriteContract();
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 mint-button"
        onClick={() =>
          writeContract({
            abi,
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            functionName: "getToads",
          })
        }
      >
        BURN $TOAD
      </button>
    </div>
  );
};

export default Burn;
