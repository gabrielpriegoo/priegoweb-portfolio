import { ArrowUpRight } from "lucide-react";

const DottedButton = () => {
  return (
    <button className="h-12 flex items-center gap-2 cursor-pointer rounded-1xl border-2 rounded border-black bg-green-300 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[8px] hover:shadow-[-4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Curriculum <ArrowUpRight size={18} />
    </button>
  );
};

export default DottedButton;
