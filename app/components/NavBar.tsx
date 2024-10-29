"use client";

import React from "react";
import Image from "next/image";
import WalletIcon from "@mui/icons-material/Wallet";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import { wagmiAdapter, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { mainnet, arbitrum } from "@reown/appkit/networks";
import { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { useAccount } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "appkit-example",
  description: "AppKit Example",
  url: "https://appkitexampleapp.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

const NavBar = ({
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [connected, setConnected] = useState<string | undefined>(
    "CONNECT WALLET"
  );
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  // if (address === undefined) {
  //   setConnected("CONNECT WALLET");
  // }

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>
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

            <div className="wallet-connect px-4 py-2  ">
              <button
                className=" items-center hidden sm:flex uppercase"
                onClick={() => modal.open()}
              >
                <span className=" mr-2">
                  <WalletIcon />
                </span>
                {connected}
              </button>
              <MenuIcon className=" sm:hidden" />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default NavBar;
