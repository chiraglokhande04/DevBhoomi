import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const teamMembers = [
    { id: 1, name: "CP Tyagi", image: "/content/team-1.png" },
  
  ];

  return (
    <div className="bg-black text-white py-12 px-6" data-aos="fade-up">
      <h3 className="text-blue-400 text-sm font-medium mb-2 text-center" data-aos="fade-down">Our Team</h3>
      <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">
        Meet Our Dedicated Team of Professionals
      </h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        With a passion for excellence and a commitment to customer satisfaction,
        our team works tirelessly to deliver the best possible elevator
        solutions to our clients.
      </p>

      <div className="flex gap-6 justify-center flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg max-w-xs"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white py-4 text-center text-lg font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              {member.name} <br />
              <span className="text-sm text-gray-400">Founder & CEO</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;