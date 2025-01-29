

export default function ElevatorComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white px-28 py-20 rounded-2xl shadow-lg">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Setting the Standard for Quality and Excellence in Elevator Solutions
        </h2>
        <p className="text-gray-700">
          At Devbhoomi Elevators India Private Limited, we prioritize client satisfaction and quality assurance. Our elevators undergo rigorous testing to ensure flawless performance, setting the standard for excellence in elevator solutions. Renowned as one of the best elevator companies in India, Devbhoomi specializes in supplying, installing, maintaining, modernizing, and repairing elevators of all kinds.
        </p>
        <p className="text-gray-700">
          Our expertise extends to material handling equipment, with a wide range of imported and exported products including Electric Wire Rope, Hoists, Cranes, Winches, Gear Boxes, Motors, and more.
        </p>
        <p className="text-gray-700">
          Our success is attributed to the dedication and efforts of our multidisciplinary team comprising design, production, installation, procurement, and ancillary functions. Quality and safety are paramount in our operations, ensuring constant goodwill from our clients. With a commitment to evolving as a quality-conscious company, we prioritize meeting clients’ precise requirements while upholding the highest standards of safety and excellence.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
        <img
          src="https://devbhoomielevator.com/wp-content/uploads/2024/03/elevator-maintenance-services.webp"
          alt="Elevator Technician"
          width={500}
          height={500}
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}