import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto my-6 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Left Section */}
      <div className="bg-gray-900 text-white p-8 md:w-1/2 text-center flex flex-col justify-center">
        <h4 className="text-blue-400 uppercase tracking-widest text-sm">
          Elevate Your Space with Devbhoomi Group.
        </h4>
        <h2 className="text-3xl font-bold mt-2 leading-tight">
          Take the next step towards superior elevator solutions with
          Devbhoomi Group.
        </h2>
      </div>

      {/* Right Section */}
      <div className="bg-blue-500 p-4 md:w-1/2">
        <h3 className="text-white text-2xl font-bold mb-4">Get in Touch</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-white">Phone</label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="block text-white">Message</label>
            <textarea
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          <button className="w-full bg-black text-white py-2 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
