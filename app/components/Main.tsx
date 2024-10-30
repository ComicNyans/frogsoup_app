"use client";
import React from "react";
import { useAccount } from "wagmi";
import Order from "./Order";
import Menu from "./Menu";

const Main = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  console.log(address);
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center lg:flex-row lg:items-start lg:flex  lg:justify-between gap-4 text-black">
      <Menu />
      <Order />
    </div>
  );
};

export default Main;
