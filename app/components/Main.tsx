"use client";
import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

const Main = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  console.log(address);
  return (
    <div className="container mx-auto px-4 py-8 lg:flex lg:flex-row-reverse lg:justify-between gap-4 text-black">
      <div className="lg:w-1/3 bg-gray-100 p-8 lg:mb-0 mb-4 info-panel text-lg">
        <div className="flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-3">WELCOME</h1>
              <p className=" mb-2">
                Frog Soup is the first project in the TOAD KILLER ecosystem.
              </p>
              <p>
                It is a collection of 5029 bespoke meals, prepared lovingly by
                The Chefs and ready for many adventures to come.
              </p>
              <p className="text-xl my-4 font-bold">
                --% of each mint buys $TOAD and sends it to be locked away
                safely in
                <a href=""> the kitchen</a>, further limiting circulating supply
                for good.
              </p>
              <p className=" mb-2">
                The remainder goes to the team as gratuity for their services
              </p>
            </div>
          </div>
        </div>
        <div className="progressDiv flex flex-col">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-3">Order Status</h1>
              <p>Waiting For Order...</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col mb-4">
          <h3 className="text-3xl font-bold mb-3">Promotion</h3>
          <p>The initial promotion has ended.</p>
          <div className=" mt-4">
            <a href="">
              Thanks to all who wanted soup. The free soups have been sent!{" "}
            </a>
          </div>
        </div> */}
      </div>
      <div className="lg:w-2/3 p-4 menu-sheet">
        <div className="menu-heading">MENU</div>
        <p className=" text-center">
          Welcome! Make yourself at home and order a delicious Frog Soup.
        </p>
        <p className=" text-center">
          A limited number of servings available, so get them while they're hot!
        </p>
        <div className="w-full sold-meter-outer overflow-hidden mt-2 mb-8">
          <div className="sold-meter-inner h-6" style={{ width: "0%" }}>
            <div className="meter-counter">?/5029</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-2 mb-10 mx-10 flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold soup-title">SOUP FOR ONE</h3>
              <p>A single serving of Frog Soup.</p>
              <div className="soupicon-container flex">
                <img src="/1soup.gif" alt="" />
              </div>
            </div>
            <button className="px-4 py-2 mint-button">
              <span className="mintfor">MINT FOR</span>
              <span className="price">0.03ETH</span>
            </button>
          </div>
          <hr className=" mb-5" />
          <div className="mb-10 mx-10 flex justify-between items-center">
            <div>
              <span className="discount-tag">
                10% <br />
                OFF!
              </span>
              <h3 className="text-3xl font-bold soup-title">
                THE TRIPLE TREAT
              </h3>
              <p>Three soups, for the hungry ones.</p>
              <div className="soupicon-container flex">
                <img src="/3soup.gif" alt="" />
              </div>
            </div>
            <button className="px-4 py-2 mint-button">
              <span className="mintfor">MINT FOR</span>
              <span className="price">0.03ETH</span>
            </button>
          </div>
          <hr className=" mb-5" />
          <div className="mb-10 mx-10 flex justify-between items-center">
            <div>
              <span className="discount-tag">
                20% <br />
                OFF!
              </span>
              <h3 className="text-3xl font-bold soup-title">
                THE SHIBA SPECIAL
              </h3>
              <p>Five soups, for all the pups.</p>
              <div className="soupicon-container flex">
                <img src="/5soup.gif" alt="" />
              </div>
            </div>
            <button className="px-4 py-2 mint-button">
              <span className="mintfor">MINT FOR</span>
              <span className="price">0.03ETH</span>
            </button>
          </div>
          <hr className=" mb-5" />
          <div className="mb-10 mx-10 flex justify-between items-center">
            <div>
              <span className="discount-tag">
                33% <br />
                OFF!
              </span>
              <h3 className="text-3xl font-bold soup-title">
                BANQUET DE GRENOUILLES
              </h3>
              <p>Ten soups, for when you just can't get enough.</p>
              <div className="soupicon-container flex">
                <img src="/10soup.gif" alt="" />
              </div>
            </div>
            <button className="px-4 py-2 mint-button">
              <span className="mintfor">MINT FOR</span>
              <span className="price">0.03ETH</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
