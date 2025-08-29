import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import DottedButton from "./components/ui/DottedButton";
import { FlipLink } from "./components/ui/FlipLink";
import { VelocityText } from "./components/ui/VelocityText";
import IllustrationsFiguresOne from "@/../public/figures-pc.svg";
import IllustrationsFiguresTwo from "@/../public/figures-rocket.svg";

function App() {
  return (
    <>
      <header className="w-full h-14 bg-green-300 border-b-4 border-black flex  justify-around items-center px-6">
        <h1 className="font-sans font-bold text-1xl shadow-[2px_2px_0px_black]   bg-amber-500 py-1 px-2 border-2 border-zinc-900 rounded">
          GP
        </h1>
        <div className="flex items-center gap-2">
          <button className="border-2 rounded hover:translate-x-boxShadowX hover:translate-y-boxShadowY shadow-[2px_2px_0px_black]  hover:translate-x-[4px]! transition-all cursor-pointer hover:translate-y-[4px]! hover:shadow-none border-zinc-900 bg-neutral-100 w-8 h-8 flex items-center justify-center">
            <GrGithub size={20} />
          </button>
          <button className="border-2 rounded hover:translate-x-boxShadowX hover:translate-y-boxShadowY shadow-[2px_2px_0px_black]  hover:translate-x-[4px]! transition-all cursor-pointer hover:translate-y-[4px]! hover:shadow-none border-zinc-900 bg-neutral-100 w-8 h-8 flex items-center justify-center">
            <BsLinkedin size={20} />
          </button>
          <button className="border-2 rounded hover:translate-x-boxShadowX hover:translate-y-boxShadowY shadow-[2px_2px_0px_black]  hover:translate-x-[4px]! transition-all cursor-pointer hover:translate-y-[4px]! hover:shadow-none border-zinc-900 bg-neutral-100 w-8 h-8 flex items-center justify-center">
            <MdEmail size={20} />
          </button>
        </div>
      </header>
      <div className="bg-amber-200 flex items-center justify-center gap-8 py-8 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
        <div className="">
          <img alt="developer desk" width={180} src={IllustrationsFiguresTwo} />
        </div>
        <section className="flex flex-col items-center gap-6 text-black overflow-hidden py-3">
          <div>
            <span
              className="relative  w-44 z-10 inline-block border-2 border-indigo-600 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
              style={{
                clipPath:
                  "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0px 100%, 0px 0px)",
                opacity: 1,
                transform: "none",
              }}
            >
              Desenvolvedor FullStack <span className="text-sm">🚀</span>
              <span
                className="absolute border-2 border-indigo-600 bg-indigo-200 text-xs font-semibold text-indigo-600 rotate-45"
                style={{
                  right: "-4px",
                  top: "0px",
                  width: "11px",
                  height: "2px",
                }}
              />
            </span>
          </div>

          <FlipLink>Gabriel </FlipLink>
          <FlipLink>Priego</FlipLink>
          <DottedButton />
        </section>
        <div className="">
          <img alt="developer desk" width={180} src={IllustrationsFiguresOne} />
        </div>
      </div>
      <VelocityText />
      <div className="w-full h-screen bg-neutral-50"></div>
    </>
  );
}

export default App;
