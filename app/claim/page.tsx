"use client";

import React from "react";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { abi } from "../ABI/ABI";
import Link from "next/link";

const Claim = () => {
  const { writeContract } = useWriteContract();
  const { address } = useAccount();
  const [numbers, setNumbers] = React.useState<number[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numArray = value
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !isNaN(num));
    setNumbers(numArray);
  };

  const result = useReadContract({
    abi,
    address: "0x58172B314187e35892DeEc5DD0e2f847893e5405",
    functionName: "balanceOf",
    args: [address],
  });

  console.log(result.data);
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      {result.data === 0n ? (
        <div className=" flex flex-col justify-center items-center text-2xl gap-4">
          You are not eligible to claim Soup NFT
          <div>
            <img src="sad.gif" alt="" height={90} width={90} />
          </div>
          <Link href={"/"} className=" text-[#f4b41b]">
          Go to Mint =>
            </Link>
        </div>
      ) : (
        <>
          <div className=" flex flex-col justify-center items-center gap-4 text-2xl">
            You are eligible to claim Soup NFT
            <h1>Input Token ID</h1>
            <input
              type="text"
              placeholder=""
              onChange={handleInputChange}
              className="mb-4 text-black"
            />
          </div>
          <button
            className="px-4 py-2 mint-button"
            onClick={async () => {
              try {
                writeContract({
                  address: "0x58172B314187e35892DeEc5DD0e2f847893e5405",
                  abi,
                  functionName: "mintFree",
                  args: numbers,
                });
              } catch (e) {
                console.log(e);
              }
            }}
          >
            CLAIM MY SOUP
          </button>
        </>
      )}
    </div>
  );
};

export default Claim;
