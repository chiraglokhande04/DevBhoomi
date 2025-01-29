import React, { useEffect, useState } from "react";

const ExperienceTrust = () => {
  const [contentAnimation, setContentAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentAnimation(true), 300); // Delay before animation starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-12 flex justify-center">
      <div className="w-3/4 text-center">
        <h3 className="text-blue-600 uppercase text-sm">Why Choose Us</h3>
        <h2 className="text-3xl font-bold mt-2">Experience & Trust</h2>
        <div className="mt-8 flex bg-blue-500 text-white rounded-xl overflow-hidden">
          {/* Content Section */}
          <div className={`w-2/3 p-8 grid grid-cols-2 gap-6 transition-transform duration-1000 ${contentAnimation ? 'transform translate-x-0' : 'transform translate-x-16'}`}>
            <div className="flex items-start">
              <span className="text-4xl font-bold opacity-50 mr-4">01</span>
              <div>
                <h4 className="text-lg font-semibold">Quality Assurance</h4>
                <p className="text-sm mt-2">We prioritize quality in every aspect of our operations, ensuring flawless performance and reliability in our elevators.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-4xl font-bold opacity-50 mr-4">02</span>
              <div>
                <h4 className="text-lg font-semibold">Client-Centric Approach</h4>
                <p className="text-sm mt-2">Your satisfaction is our top priority. We strive to exceed your expectations with personalized service and attention to detail.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-4xl font-bold opacity-50 mr-4">03</span>
              <div>
                <h4 className="text-lg font-semibold">Expertise and Experience</h4>
                <p className="text-sm mt-2">With years of experience and a team of highly skilled technicians, we have the knowledge and resources to handle any elevator project.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-4xl font-bold opacity-50 mr-4">04</span>
              <div>
                <h4 className="text-lg font-semibold">Trusted Partner</h4>
                <p className="text-sm mt-2">Devbhoomi Group is a name you can trust for exceptional quality, reliability, and professionalism in elevator services.</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-1/3 relative overflow-hidden">
            <div className={`absolute w-full h-full transition-transform duration-1000 ${contentAnimation ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="https://devbhoomielevator.com/wp-content/uploads/2024/03/IMAGE.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTrust;
