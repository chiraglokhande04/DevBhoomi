import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const stepTime = (duration * 1000) / (to - from);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}+</span>;
};

const AboutCompany = () => {
  const ref = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-16 min-h-[600px]" ref={ref}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-16 space-x-14">
        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-out"
          className="lg:w-1/2"
        >
          <h4 className="text-blue-500 uppercase text-sm font-bold mb-4">
            About Company
          </h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Welcome to Devbhoomi Group - Your Trusted Partner in Elevators Solutions
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With a commitment to excellence and innovation, we specialize in
            providing high-quality elevators and comprehensive maintenance services across various sectors.
            Our dedication to quality, safety, and client satisfaction sets us apart as a leader in the industry.
          </p>

          <div className="flex items-center gap-12">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">
                <Counter from={10} to={25} duration={2} />
              </h3>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div className="border-l border-gray-300 h-16"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">
                <Counter from={600} to={1250} duration={2} />
              </h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
          </div>

          <Link to="/aboutus">
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8 bg-blue-400 px-6 py-3 text-white rounded-lg hover:bg-gray-900 hover:scale-90 transition-transform"
            >
              Learn More
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="200"
          className="lg:w-3/7"
        >
          <img
            src="/content/ABOUT-US-1-copy-768x768.webp"
            alt="Elevator Building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
