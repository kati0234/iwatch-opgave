import NavLink from "./NavLink";
import { FaApple } from "react-icons/fa";
import Shop from "./Shop";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <FaApple className="text-white w-12 h-12" />
      <ul className="flex gap-7 justify-between ">
        <NavLink text="Mac " />
        <NavLink text="Iphone" />
        <NavLink text="Ipad" />
        <NavLink text="Iwatch" />
        <NavLink text="Suport" />
      </ul>
      <Shop />
    </nav>
  );
};

export default Nav;
