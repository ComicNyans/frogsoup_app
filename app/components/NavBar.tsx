"use client";

import React from "react";
import Image from "next/image";
import WalletIcon from "@mui/icons-material/Wallet";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import { useAccount } from "wagmi";

const NavBar = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [connected, setConnected] = useState<string | undefined>(
    "CONNECT WALLET"
  );

  console.log(address);

  return (
    <div className=" px-4 sm:px-8 md:px-24 lg:px-48 bg-[#7a444a]">
      <div className=" flex justify-between items-center py-2">
        <div className=" flex items-center">
          <Image
            src="/logo.png"
            height={200}
            width={200}
            className=" rounded-full w-12"
            alt=""
          />
          <h1 className=" uppercase font-roboto text-[20px] md:text-[24px] lg:text-[36px] tracking-normal ml-4 text-white">
            Frog Soup Cafe
          </h1>
        </div>
        {/* To replace with button logic */}
        {/* <w3m-button /> */}
        <div className="wallet-connect px-4 py-2  ">
          <button className=" items-center hidden sm:flex uppercase">
            <span className=" mr-2">
              <WalletIcon />
            </span>
            {connected}
          </button>
          <MenuIcon className=" sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
