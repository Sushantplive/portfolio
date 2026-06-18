import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="site-section text-gray-300 py-4 text-center border-t border-cyan-900/30">
      <p className="text-sm">
        Made with <FaHeart className="inline text-cyan-400" /> by Sushant
      </p>
    </footer>
  );
};

export default Footer;