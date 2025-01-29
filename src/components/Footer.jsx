import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6">
      <div className="flex justify-center mb-4">
        <img
          src="/logo.png"
          alt="Devbhoomi Elevators"
          className="h-12"
        />
      </div>
      <div className="flex justify-center space-x-4 text-xl mb-4">
        <FaFacebookF className="cursor-pointer hover:text-blue-500" />
        <FaInstagram className="cursor-pointer hover:text-pink-500" />
        <FaTwitter className="cursor-pointer hover:text-blue-400" />
      </div>
      <div className="text-sm mb-2">
        📍 Sigma City Chowk, Zirakpur, Punjab 140603
      </div>
      <div className="text-sm mb-2">
        📞 <a href="tel:+919717686390" className="hover:underline">+91 97176 86390</a> |
        <a href="tel:+919716849858" className="hover:underline"> +91 97168 49858</a>
      </div>
      <div className="text-sm mb-4">
        ✉️ <a href="mailto:info@devbhoomielevator.com" className="hover:underline">info@devbhoomielevator.com</a>
      </div>
      <div className="text-xs">
        © 2024 Devbhoomi Elevator. All Rights Reserved. Designed By Founder Mr. Pranav Tyagi
      </div>
    </footer>
  );
};

export default Footer;