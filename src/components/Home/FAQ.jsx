import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const faqs = [
  {
    question: "What types of elevator services do you offer?",
    answer:
      "We provide a comprehensive range of elevator services, including installation, maintenance, repair, modernization, and upgrades for various types of elevators, such as passenger elevators, freight elevators, home elevators, and more.",
  },
  {
    question:
      "Can you upgrade existing elevators to meet modern safety and efficiency standards?",
    answer:
      "Yes, we specialize in upgrading elevators to comply with the latest safety regulations and efficiency standards, ensuring optimal performance.",
  },
  {
    question: "How can I request a quote or schedule service?",
    answer:
      "You can request a quote or schedule a service by contacting us via our website, phone, or email. Our team will assist you promptly.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Set duration and whether animation should happen only once
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/your-bg-image.jpg')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* FAQ Container */}
      <div className="relative z-10 w-full max-w-3xl p-8 bg-gray-900 bg-opacity-80 rounded-lg text-white">
        <h2 className="text-blue-400 text-lg font-semibold tracking-wider text-center">
          FAQ
        </h2>
        <h3 className="text-white text-3xl font-bold text-center mb-6">
          Frequently Asked Question
        </h3>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-lg"
              data-aos="fade-up" // AOS animation for fade-up
            >
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-semibold"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                data-aos="fade-right" // Animation for button appearance
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronDown className="text-white" />
                ) : (
                  <FaChevronRight className="text-white" />
                )}
              </button>
              {openIndex === index && (
                <div
                  className="p-4 border-t border-gray-500 text-gray-300"
                  data-aos="fade-in" // Animation for answer fade-in
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
