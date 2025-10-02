import React, { useState } from "react";
import Logo from "/razer-logo.avif";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-black h-20 relative text-white flex justify-between items-center px-10 py-5 gap-10 border-b-2 border-green-400">
      <div className="flex justify-center items-center gap-5">
        <div className="w-20">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        {/* Nav */}
        <nav
          className={`${
            isNavOpen
              ? "absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-gray-950 sm:relative sm:h-auto"
              : "hidden sm:relative sm:block"
          }`}
        >
          <ul
            className={`flex ${
              isNavOpen
                ? "flex-col gap-10 mt-10 px-5"
                : "flex-row gap-5 justify-center items-center"
            } text-xl cursor-pointer `}
          >
            <li>
              <a
                href="https://gold.razer.com/global/en/gold/catalog?categories=entertainment-direct-top-up,entertainment-pins-giftcards,entertainment-partner-store"
                target="_blank"
                rel="noreferrer"
              >
                Shops
              </a>
            </li>
            <li>
              <a
                href="https://gold.razer.com/global/en/silver/redeem"
                target="_blank"
                rel="noreferrer"
              >
                Rewards
              </a>
            </li>
            <li>
              <a
                href="https://gold.razer.com/global/en/gold/promotions"
                target="_blank"
                rel="noreferrer"
              >
                Promotions
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile icons */}
      <div className="sm:hidden">
        {!isNavOpen ? (
          <FaBars
            onClick={() => setIsNavOpen(true)}
            className="text-3xl cursor-pointer"
          />
        ) : (
          <FaTimes
            onClick={() => setIsNavOpen(false)}
            className="text-3xl cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
