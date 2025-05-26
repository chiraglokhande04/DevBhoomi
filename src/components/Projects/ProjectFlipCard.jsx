import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectFlipCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      key={index}
      className="relative w-64 h-52"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full px-1 py-[70px] rounded-lg shadow-lg bg-white text-black flex justify-center flex-col items-center gap-y-2"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 200 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        {project.logo ? (
          <img src={`/logo/${project.logo}`} alt={project.name} className="h-40 w-40 object-contain " />
        ) : (
          <div className="h-40 w-40 flex items-center justify-center text-xl font-bold">
            {project.name}
          </div>
        )}
        <h4 className="text-[16px] ">{project.name}</h4>
      </motion.div>

      <motion.div
        className="absolute w-full h-full px-2  py-[70px] rounded-lg shadow-lg bg-blue-500 text-white flex justify-center flex-col items-center"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <h4 className="text-lg font-bold mb-2">{project.design}</h4>
        <p className="text-sm text-center">{project.description}</p>
      </motion.div>
    </motion.div>
  );
}