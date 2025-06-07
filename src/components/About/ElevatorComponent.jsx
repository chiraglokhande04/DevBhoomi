import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ElevatorComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Animation triggers once when element is in view
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white px-5 md:px-28 py-12 md:py-20 rounded-2xl shadow-lg">
      {/* Left Section */}
      <div
        className="md:w-1/2 space-y-6"
        data-aos="fade-up" // Add the AOS animation for the left section
      >
        <h2 className="text-xl md:text-3xl font-bold text-gray-900">
          Setting the Standard for Quality and Excellence in Elevator Solutions
        </h2>
        <div className="space-y-4">
          {/* Mobile view text in paragraphs */}
          <p className="text-xs md:text-base text-gray-700">
            At Devbhoomi Elevators India Private Limited, we prioritize client satisfaction and quality assurance. Our elevators undergo rigorous testing to ensure flawless performance, setting the standard for excellence in elevator solutions. Renowned as one of the best elevator companies in India, Devbhoomi specializes in supplying, installing, maintaining, modernizing, and repairing elevators of all kinds.
          </p>
          <p className="text-xs md:text-base text-gray-700">
            Our expertise extends to material handling equipment, with a wide range of imported and exported products including Electric Wire Rope, Hoists, Cranes, Winches, Gear Boxes, Motors, and more.
          </p>
          <p className="text-xs md:text-base text-gray-700">
            Our success is attributed to the dedication and efforts of our multidisciplinary team comprising design, production, installation, procurement, and ancillary functions. Quality and safety are paramount in our operations, ensuring constant goodwill from our clients. With a commitment to evolving as a quality-conscious company, we prioritize meeting clients’ precise requirements while upholding the highest standards of safety and excellence.
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0"
        data-aos="zoom-in" // Apply a zoom-in animation to the image
        data-aos-delay="200" // Optional: Delay the animation for the image
      >
        <img
          src="/content/elevator-maintenance-services.webp"
          alt="Elevator Technician"
          className="rounded-xl shadow-md max-w-full h-auto"
        />
      </div>
    </div>
  );
}
