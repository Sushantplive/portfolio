import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <p className="text-sm">
        Made with <FaHeart className="inline text-red-500" /> by Sushant
      </p>
    </footer>
  );
};

export default Footer;