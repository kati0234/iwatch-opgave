import Image from "next/image";
import Watch from "./Watch";
import navy from "../images/navy.png";
import ocean from "../images/ocean.png";
import mint from "../images/mint.png";

const WatchDispaly = () => {
  return (
    <div className="flex">
      <Watch bg="text-sky-800" img={navy} alt="navy ur" />
      <Watch bgcolor="bg-[#434558]" img={mint} alt="mint ur" />
      <Watch img={ocean} alt="ocean ur" />
      <div className=" w-2 h-3 bg-slate-600"></div>
    </div>
  );
};

export default WatchDispaly;
