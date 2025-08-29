import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.3, 0.3],
    ["30deg", "-30deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="relative bg-neutral-50 border-4 border-zinc-900 text-neutral-950"
    >
      <div className="sticky top-0 flex h-[60px] items-center overflow-hidden z-40">
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-3xl font-black uppercase leading-[0.85] md:text-5xl md:leading-[0.85]"
        >
          Nothing in this world can take the place of persistence. Talent will
          not nothing is more common than unsuccessful men with talent. Genius
          will not; unrewarded genius is almost a proverb. Education will not
          the world is full of educated derelicts. Persistence and determination
          alone are omnipotent. The slogan 'Press On!' has solved and always
          will solve the problems of the human race.
        </motion.p>
      </div>
    </section>
  );
};
