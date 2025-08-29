import { motion } from "framer-motion";

const GRID_SIZE = 18;
const TOTAL_SQUARES = GRID_SIZE * GRID_SIZE;

export const AnimatedGrid = () => {
  return (
    <div
      className="absolute left-80 top-8 h-90 w-96 z-0"
      style={{ transform: "skewX(-10deg)" }}
    >
      {/* Sombra chapada */}
      <div
        className="absolute top-2 left-2 h-full w-full bg-black border-2 border-zinc-900"
        style={{ zIndex: -1 }}
      />
      {/* Grid principal */}
      <div className="relative border-2 border-zinc-900 h-full w-full overflow-hidden bg-white">
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
                className={"w-full h-8 border border-black bg-zinc-200"}
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
    </div>
  );
};
