import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  { name: 'Punjab Police Officer Institute', logo: 'https://via.placeholder.com/100' },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100' },
  { name: 'ISION INDIA GROUP', logo: 'https://via.placeholder.com/100' },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100' },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100' },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100' },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100' },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100' },
];

export default function MaintenanceProjects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div className="bg-black text-white py-10 px-4">
      <h3 className="text-center text-blue-400 text-sm uppercase tracking-widest">Our Project</h3>
      <h2 className="text-center text-3xl font-bold text-white mb-8">Maintenance Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up" // You can change this to other AOS animation types like 'fade-down', 'zoom-in', etc.
            data-aos-delay={`${index * 100}`} // Optional: adds a delay for each project for staggered animation
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
          >
            <img src={project.logo} alt={project.name} className="h-20 w-20 object-contain mb-4" />
            <p className="text-gray-700 text-center font-medium">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
