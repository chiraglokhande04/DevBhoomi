import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation triggers once when element is in view
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-[#0099FF] text-white rounded-lg p-8 m-4 md:m-36">
      {/* Left Section (Contact Info) */}
      <div
        className="md:w-1/2 space-y-6 mb-6 md:mb-0"
        data-aos="fade-right" // AOS animation for left content
      >
        <h2 className="text-xl font-semibold tracking-widest">
          DEVBHOOMI Contact & Support
        </h2>
        <p className="text-sm">
          Thank you for your interest in DEVBHOOMI Elevators India Pvt. Ltd. We are dedicated to providing top-notch service and support for all your elevator needs.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 border border-white rounded-md">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-bold">Email</h3>
              <p>info@devbhoomielevator.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border border-white rounded-md">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>+91 97176 86390 +91 9716849858</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border border-white rounded-md">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="font-bold">Location</h3>
              <p>SCO No 20 (First Floor), Lohgarh Road, near Sigma City Chowk, Zirakpur, Punjab 140603</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div
        className="md:w-1/2 p-4"
        data-aos="fade-left" // AOS animation for right content
      >
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded-md bg-white text-black"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
