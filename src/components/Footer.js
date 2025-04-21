import React from "react";
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-2 font-semibold text-lg">Thyroid Checkup App</p>
        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400 transition" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="tel:+911234567890">
            <FaPhoneAlt className="text-2xl hover:text-green-400 transition" />
          </a>
          <a href="mailto:support@thyroidcheck.com">
            <FaEnvelope className="text-2xl hover:text-yellow-400 transition" />
          </a>
        </div>
        <p className="text-sm text-gray-300">© 2025 Thyroid Checkup. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
