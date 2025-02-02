import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row w-full max-w-4xl mx-auto my-6 bg-white rounded-2xl shadow-lg overflow-hidden"
      data-aos="fade-up"
    >
      {/* Left Section */}
      <div
        className="bg-gray-900 text-white h-32 md:h-auto text-sm p-16 md:w-1/2 text-center flex flex-col justify-center"
        data-aos="fade-right"
      >
        <h4 className="text-blue-400 uppercase tracking-widest text-sm">
          Elevate Your Space with Devbhoomi Group.
        </h4>
        <h2 className="md:text-3xl font-bold mt-2 leading-tight">
          Take the next step towards superior elevator solutions with
          Devbhoomi Group.
        </h2>
      </div>

      {/* Right Section */}
      <div
        className="bg-blue-500 p-14 md:w-1/2"
        data-aos="fade-left"
      >
        <h3 className="text-white text-2xl font-bold mb-4">Get in Touch</h3>
        <form className="space-y-4">
          <div data-aos="zoom-in" data-aos-delay="100">
            <label className="block text-white">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Name"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Email"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <label className="block text-white">Phone</label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Phone"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <label className="block text-white">Message</label>
            <textarea
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
