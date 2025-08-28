import { motion } from "framer-motion";

const GRID_SIZE = 18;
const TOTAL_SQUARES = GRID_SIZE * GRID_SIZE;

const colors = [
  //   "bg-blue-300",
  "bg-indigo-300",
  // "bg-blue-500",
  // "bg-indigo-300",
  // "bg-indigo-400",
  // "bg-indigo-500",
  // "bg-purple-300",
  // "bg-purple-400",
];

export const AnimatedGrid = () => {
  return (
    <div className="absolute left-80  top-0 h-full w-96 overflow-hidden">
      <motion.div
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE * 2}, 1fr)`, // Duplicamos as linhas para o scroll contínuo
          height: "120%", // Altura dupla para permitir o scroll
        }}
        animate={{
          y: [0, -50], // Move para cima criando efeito de scroll para baixo
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {Array.from({ length: TOTAL_SQUARES * 2 }).map((_, i) => {
          // Duplicamos os quadrados
          return (
            <motion.div
              key={i}
              className={`w-full h-8 border border-black ${
                colors[Math.floor(Math.random() * colors.length)]
              }`}
              initial={{
                opacity: 1,
                scale: 1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              //   whileHover={{
              //     scale: 1.05,
              //     transition: { duration: 0.4 },
              //   }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};
