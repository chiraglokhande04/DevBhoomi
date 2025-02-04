// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"> 
      {/* Darker background with opacity */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 relative transform transition-transform scale-100">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Connect With Us</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="tel" placeholder="Phone" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded"></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
