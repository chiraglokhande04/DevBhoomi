import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard({ service, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      key={index}
      className="relative w-80 h-60"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full px-12 py-[70px] rounded-lg shadow-lg bg-white text-black flex justify-center flex-col items-center"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 200 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="text-6xl mb-4 text-blue-400">{service.icon}</div>
        <h4 className="text-lg mb-2">{service.title}</h4>
      </motion.div>

      <motion.div
        className="absolute w-full h-full px-12 py-[70px] rounded-lg shadow-lg bg-blue-500 text-white flex justify-center flex-col items-center"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <h4 className="text-lg mb-2">{service.title}</h4>
        <p className="text-sm">{service.description}</p>
      </motion.div>
    </motion.div>
  );
}