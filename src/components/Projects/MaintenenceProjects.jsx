import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectFlipCard from './ProjectFlipCard';

const projects = [
  { name: 'Punjab Police Officer Institute', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/5.png' ,design:"Architecture", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus"},
  { name: 'Loram maintenance', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/10.png' ,design:"Interior Design", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus"},
  { name: 'VISION INDIA GROUP', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/11.png' ,design:"Furniture Design", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus"},
  { name: 'Loram maintenance', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/image-2.png' ,design:'Home Decor', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus"},
  { name: 'Loram maintenance', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/images-2.png',design:"Architecture", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus" },
  { name: 'Loram maintenance', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/3.png',design:"Interior Design", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus" },
  { name: 'Loram maintenance', logo: 'https://devbhoomielevator.com/wp-content/uploads/2024/03/4.png',design:"Furniture Design", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus" },
  { name: 'Loram maintenance', logo: 'https://via.placeholder.com/100',design:'Home Decor', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus" },
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
         <ProjectFlipCard project={project} index={index} key={index} data-aos="zoom-in" data-aos-delay={index * 100} />
        ))}
      </div>
    </div>
  );
}
