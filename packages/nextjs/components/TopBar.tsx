import React from "react";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between z-50 px-10 py-6">
      <h1 className="text-white text-2xl font-extrabold">EtherPlay</h1>
      <div className="flex items-center space-x-8">
        <button className="text-white">
          <FaBell size={24} />
        </button>
        <button className="text-white">
          <FaShoppingCart size={24} />
        </button>
        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
}
