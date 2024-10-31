"use client";

import React from "react";
import { useWriteContract } from "wagmi";
import { abi } from "../ABI/ABI";

const Burn = () => {
  const { writeContract } = useWriteContract();
  return (
    <div className="flex items-center justify-center h-screen text-white flex-col gap-4 text-lg sm:text-2xl text-center">
      <img src="fire.gif" alt="" height={90} width={90} />
      <div>
        Buy burning you are sending{" "}
        <span className=" text-[#eea160]">$TOAD </span> tokens to the kitchen to
        be be
        <br /> locked away safely further limiting circulating supply for good.
      </div>
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
