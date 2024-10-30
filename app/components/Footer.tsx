import React from "react";

const Footer = () => {
  return (
    <div className="text-white py-3 bg-[#7a444a] ">
      <div className="container mx-auto px-4">
        <p className="text-center">
          <span className=" text-xl">🐸 🍲</span>
          <a href="" id="opensea-link" className="ml-2">
            <span className="footer-link text-[#f4b41b] hover:text-[#f4cca1]">
              Opensea
            </span>
          </a>
          <a href="" id="etherscan-link" className="ml-2">
            <span className="footer-link text-[#f4b41b] hover:text-[#f4cca1]">
              Etherscan
            </span>
          </a>
          <a
            href="https://t.me/thetoadkiller"
            id="telegram-link"
            className="ml-2"
          >
            <span className="footer-link text-[#f4b41b] hover:text-[#f4cca1]">
              Telegram
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
