import React from "react";

const Footer = () => {
  return (
    <div className="text-white py-3 bg-[#7a444a] ">
      <div className="container mx-auto px-4">
        <p className="text-center">
          <span className=" text-xl">🐸 🍲</span>
          <a
            href="https://web.archive.org/web/20230607223050/https://opensea.io/collection/frog-soup"
            id="opensea-link"
            className="ml-2"
          >
            <span className="footer-link text-[#f4b41b] hover:text-[#f4cca1]">
              Opensea
            </span>
          </a>
          <a
            href="https://web.archive.org/web/20230607223050/https://opensea.io/collection/frog-soup"
            id="etherscan-link"
            className="ml-2"
          >
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
