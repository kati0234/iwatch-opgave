import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
const Shop = () => {
  return (
    <div className="flex gap-1 justify-center">
      <CiSearch className="text-white h-8 w-8" />

      <div className="h-8 w-px  bg-white "></div>
      <FiShoppingBag className="text-white h-8 w-8" />
    </div>
  );
};

export default Shop;
