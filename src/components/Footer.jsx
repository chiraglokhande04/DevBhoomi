import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="/content/dev_logo.png"
          alt="Devbhoomi Elevators"
          className="h-12 sm:h-16 lg:h-20"
        />
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 text-xl mb-4">
        <FaFacebookF className="cursor-pointer text-blue-400 hover:text-white" />
        <FaInstagram className="cursor-pointer text-blue-400 hover:text-white" />
        <FaTwitter className="cursor-pointer text-blue-400 hover:text-white" />
      </div>

      {/* Contact Information */}
      <div className="flex flex-wrap justify-center gap-5 mb-4">
        <div className="text-sm mb-2 flex justify-center items-center space-x-2 w-full sm:w-auto">
          <MdLocationOn className="text-blue-500" />
          <span>Sigma City Chowk, Zirakpur, Punjab 140603</span>
        </div>
        <div className="text-sm mb-2 flex justify-center items-center space-x-2 w-full sm:w-auto">
          <FiPhoneCall className="text-blue-500" />
          <a href="tel:+919717686390" className="hover:underline">+91 97176 86390</a>
          <span className="mx-2">|</span>
          <a href="tel:+919716849858" className="hover:underline">+91 97168 49858</a>
        </div>
        <div className="text-sm mb-4 flex justify-center items-center space-x-2 w-full sm:w-auto">
          <MdEmail className="text-blue-500" />
          <a href="mailto:info@devbhoomielevator.com" className="hover:underline">
            info@devbhoomielevator.com
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-xs flex justify-center">
        © 2024 Devbhoomi Elevator. All Rights Reserved. Designed By Founder Mr. Pranav Tyagi
      </div>
    </footer>
  );
};

export default Footer;
