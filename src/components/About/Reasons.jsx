import React from "react";

export default function Reasons() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 md:p-8 md:mx-20 my-5 lg:p-16">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-xl md:text-3xl font-bold mb-4">REASONS TO CHOOSE DEVBHOOMI</h1>
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
          We at Devbhoomi Group are committed to preserving the essence of real
          places through our top-notch elevators installed in various settings
          such as Government Projects, Public Places, Hospitals, Hotels, and
          Residential Societies. Specializing in trading and supplying a range
          of elevators including Passenger Elevators, Hospital Elevators,
          Commercial Elevators, Car Elevators, Freight Elevators, and
          Dumbwaiters, we ensure optimal quality by utilizing premium components
          and trusted motors under the name of DEVBHOOMI group.
        </p>
      </div>

      {/* Right Elevator Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src="https://devbhoomielevator.com/wp-content/uploads/2024/03/SECTION1.webp"
          alt="Elevator Example"
          className="rounded-2xl shadow-lg w-full max-w-xl"
        />
      </div>
    </div>
  );
}