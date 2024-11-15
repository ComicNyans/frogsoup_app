'use client';

import React, { useState, useEffect } from 'react';
import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { useContext } from 'react';
import { ModalContext } from './../../context/index';
import { abi } from '../ABI/ABI';
import { parseEther } from 'viem';
import Image from 'next/image';
import SoupBowls from './soupbowls';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#7a444a',
  border: '5px solid #f4b41b',
  boxShadow: 24,
  p: 4,
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modal = useContext(ModalContext);
  
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [minted, setMinted] = useState<any>();

  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();

  const result = useReadContract({
    abi,
    address: '0x58172B314187e35892DeEc5DD0e2f847893e5405',
    functionName: 'totalSupply',
  });

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setMinted(result.data as string);
  }, [result.data]);

  const handleMint = async (count: number) => {
    if (!address) {
      modal.open();
      return;
    }
    handleOpen();
  };

  return (
    <div className="lg:w-2/3 px-8 py-4 relative menu-style pixel-text md:mt-0 sm:mt-8 mt-0">
      <div 
        className="absolute inset-[0px] image-rendering-pixelated"
        style={{
          borderImage: 'url(/menu_bg.png) 30 30 30 30 stretch',
          borderWidth: '60px',
          borderStyle: 'solid',
          background: '#f3cca1'
        }}
      />
      <div className="relative z-10">
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex flex-col items-center justify-center text-white text-xl">
                <Image
                  src="/frogsoup_sticker_nooutline.gif"
                  width={64 * 3}
                  height={64 * 3}
                  alt=""
                  className="image-rendering-pixelated -mt-8"
                  unoptimized
                />
                <h2 className="-mt-10 pixel-text">Frog Soup is cooking!</h2>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="menu-heading mt-2">Menu</div>
        <p className="text-center">
          Order some delicious Frog Soup from the menu below!
        </p>
        <p className="text-center">
          A limited number of servings available, so get them while they&apos;re
          hot!
        </p>
        <div className="w-full sold-meter-outer overflow-hidden mt-3 mb-2">
          <div className="sold-meter-inner h-6" style={{ width: "36%" }}>
            <div className="meter-counter">
              <span data-numbers>{minted ? minted : "-"}&nbsp;/&nbsp;5029{" "}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div 
            className="my-5 mx-5 lg:mr-0 mr-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center relative"
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
              <h3 className="text-3xl font-bold soup-title">SOUP FOR ONE</h3>
              <p>A single serving of Frog Soup.</p>
              <div className="soupicon-container flex">
                <SoupBowls 
                  count={1} 
                  hasLoaded={hasLoaded}
                  isHovered={hoveredItem === 1}
                />
              </div>
            </div>
            <button 
              className="px-4 py-4 mint-button" 
              onClick={() => handleMint(1)}
            >
              <span className="mintfor">mint for</span>
              <span className="price"><span data-numbers>0.03</span> ETH</span>
            </button>
          </div>
          <hr className="mb-0" />
          <div 
            className="my-5 mx-5 lg:mr-0 mr-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center"
            onMouseEnter={() => setHoveredItem(3)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
              <span className="discount-tag pixel-text">
                <span data-numbers>10</span>% <br />
                OFF!
              </span>
              <h3 className="text-3xl font-bold soup-title">THE TRIPLE TREAT</h3>
              <p>Three soups, for the hungry ones.</p>
              <div className="soupicon-container flex">
                <SoupBowls 
                  count={3} 
                  hasLoaded={hasLoaded}
                  isHovered={hoveredItem === 3}
                />
              </div>
            </div>
            <button 
              className="px-4 py-4 mint-button" 
              onClick={() => handleMint(3)}
            >
              <span className="mintfor">mint for</span>
              <span className="price"><span data-numbers>0.08</span> ETH</span>
            </button>
          </div>
          <hr className="mb-0" />
          <div 
            className="my-5 mx-5 lg:mr-0 mr-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center"
            onMouseEnter={() => setHoveredItem(5)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
              <span className="discount-tag pixel-text">
                <span data-numbers>20</span>% <br />
                OFF!
              </span>
              <h3 className="text-3xl font-bold soup-title">THE SHIBA SPECIAL</h3>
              <p>Five soups, for all the pups.</p>
              <div className="soupicon-container flex">
                <SoupBowls 
                  count={5} 
                  hasLoaded={hasLoaded}
                  isHovered={hoveredItem === 5}
                />
              </div>
            </div>
            <button 
              className="px-4 py-4 mint-button" 
              onClick={() => handleMint(5)}
            >
              <span className="mintfor">mint for</span>
              <span className="price"><span data-numbers>0.12</span> ETH</span>
            </button>
          </div>
          <hr className="mb-0" />
          <div 
            className="my-5 mx-5 lg:mr-0 mr-10 flex flex-col text-center md:text-start md:flex-row justify-between items-center"
            onMouseEnter={() => setHoveredItem(10)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex flex-col items-center md:items-start pb-4 md:pb-4 w-[]100% lg:w-[75%]">
              <span className="discount-tag pixel-text">
                <span data-numbers>33</span>% <br />
                OFF!
              </span>
              <h3 className="text-3xl font-bold soup-title">
                BANQUET DE GRENOUILLES
              </h3>
              <p>Ten soups.</p>
              <p>For when you just can&apos;t get enough.</p>
              <div className="soupicon-container flex">
                <SoupBowls 
                  count={10} 
                  hasLoaded={hasLoaded}
                  isHovered={hoveredItem === 10}
                />
              </div>
            </div>
            <button 
              className="px-4 py-4 mint-button" 
              onClick={() => handleMint(10)}
            >
              <span className="mintfor">mint for</span>
              <span className="price"><span data-numbers>0.20</span> ETH</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;