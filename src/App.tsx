import DottedButton from "./components/ui/DottedButton";
import { FlipLink } from "./components/ui/FlipLink";
import { VelocityText } from "./components/ui/VelocityText";
import { AnimatedGrid } from "./components/ui/AnimatedGrid";
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <>
      <header className="w-full h-12 bg-neutral-50 border-b-2 border-black flex gap-2 items-center justify-end pr-5">
        <button className="border-2 border-zinc-900 w-8 h-8 flex items-center justify-center">
          <GrGithub size={20} />
        </button>
        <button className="border-2 border-zinc-900 w-8 h-8 flex items-center justify-center">
          <BsLinkedin size={20} />
        </button>
        <button className="border-2 border-zinc-900 w-8 h-8 flex items-center justify-center">
          <MdEmail size={20} />
        </button>
      </header>
      <section className="relative grid place-content-center gap-1 border-b-2 border-black px-8 py-24 text-black overflow-hidden">
        <AnimatedGrid />
        <span
          className="relative  w-40 z-10 inline-block border-2 border-indigo-600 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
          style={{
            clipPath:
              "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0px 100%, 0px 0px)",
            opacity: 1,
            transform: "none",
          }}
        >
          Desenvolvedor FullStack
          <span
            className="absolute border-2 border-indigo-600 bg-indigo-50 text-xs font-semibold text-indigo-600 rotate-45"
            style={{
              right: "-4px",
              top: "0px",
              width: "11px",
              height: "2px",
            }}
          />
        </span>

        <FlipLink>Gabriel </FlipLink>
        <FlipLink>Priego</FlipLink>
        <div>
          <DottedButton />
        </div>
      </section>
      <VelocityText />
      <div className="w-full h-screen bg-neutral-50"></div>
    </>
  );
}

export default App;
