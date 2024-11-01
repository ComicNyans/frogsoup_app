"use client";

import React from "react";
import Image from "next/image";
import WalletIcon from "@mui/icons-material/Wallet";
import MenuIcon from "@mui/icons-material/Menu";
import { useAccount } from "wagmi";
import { useContext } from "react";
import { ModalContext } from "./../../context/index";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  width: "100%",
  bgcolor: "#7a444a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NavBar = () => {
  const { address } = useAccount();
  const modal = useContext(ModalContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" px-4 sm:px-8 md:px-24 lg:px-48 bg-[#7a444a]">
      <div className=" flex justify-between items-center py-2">
        <Link href="/" className=" no-underline">
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
          </div>{" "}
        </Link>
        {/* To replace with button logic */}
        {/* <w3m-button /> */}
        <div className=" flex items-center">
          <div className=" text-[#f4b41b]  text-2xl mr-4 justify-between gap-4 cursor-pointer hidden sm:flex">
            <a href="/claim" className="text-[#f4b41b]">
              <h1 className="hover:text-[#f4cca1]">CLAIM</h1>
            </a>
            <a href="/burn" className="text-[#f4b41b]">
              <h1 className="hover:text-[#f4cca1]">BURN</h1>
            </a>
            <a
              href="https://shibarium.shib.io/bridge-nfts"
              target="blank"
              className="text-[#f4b41b]"
            >
              <h1 className="hover:text-[#f4cca1]">BRIDGE</h1>
            </a>
          </div>

          <div className="wallet-connect hidden sm:flex  px-4 py-2  ">
            <button
              className=" items-center flex uppercase"
              onClick={() => {
                modal.open();
              }}
            >
              <span className=" mr-2">
                <WalletIcon className=" md:hidden lg:block" />
              </span>
              {address
                ? `${address?.slice(0, 6)}...${address?.slice(-6)}`
                : "Connect Wallet"}
            </button>
          </div>
          <div className="wallet-connect px-4 py-2 sm:hidden  ">
            <div>
              <MenuIcon onClick={handleOpen} />
              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className=" flex flex-col  items-end w-full"
                >
                  <Box sx={style}>
                    <div className=" text-[#f4b41b]  text-xl mr-4 justify-between gap-4 cursor-pointer sm:flex">
                      <a href="/claim" className="text-[#f4b41b]">
                        <h1 className="hover:text-[#f4cca1]">CLAIM</h1>
                      </a>
                      <a href="/burn" className="text-[#f4b41b]">
                        <h1 className="hover:text-[#f4cca1]">BURN</h1>
                      </a>
                      <a
                        href="https://shibarium.shib.io/bridge-nfts"
                        target="blank"
                        className="text-[#f4b41b]"
                      >
                        <h1 className="hover:text-[#f4cca1]">BRIDGE</h1>
                      </a>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
