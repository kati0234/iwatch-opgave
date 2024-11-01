import Image from "next/image";
import Watch from "./Watch";
import navy from "../images/navy.png";
import ocean from "../images/ocean.png";
import mint from "../images/mint.png";

const WatchDispaly = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Watch bgcolor="bg-navyColor" img={navy} alt="navy ur" />
      <Watch bgcolor="bg-mintColor" img={mint} alt="mint ur" />
      <Watch bgcolor="bg-pinkColor" img={ocean} alt="ocean ur" />
    </div>
  );
};

export default WatchDispaly;
