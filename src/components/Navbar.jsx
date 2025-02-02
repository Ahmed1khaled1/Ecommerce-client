import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { ShopContext } from "../context/ShopContext";


export const Navbar = () => {    

  const { showSearch, setShowSearch, getCartCount ,navigate } = useContext(ShopContext);
  
  const [visable, setVisable] = useState(false);
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-300">
      <Link to="/">
        <p className="text-xl font-bold " >CLOTHES SHOP</p>
      </Link>
      <ul className="hidden md:flex gap-5">
        <NavLink to="/" className="flex flex-col items-center">
          <p>HOME</p>
          <hr className="border w-1/2 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <p>COLLECTION</p>
          <hr className="border w-1/2 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <p>ABOUT</p>
          <hr className="border w-1/2 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <p>CONTACT</p>
          <hr className="border w-1/2 hidden" />
        </NavLink>
      </ul>
      <div className="flex gap-5 items-center">
        <SearchOutlinedIcon
          className=" cursor-pointer"
          onClick={() => {setShowSearch(!showSearch)
            navigate("/collection")
          }}
        />
        <div className=" relative">
          <PersonOutlineOutlinedIcon
            onClick={() => navigate('/login')}
            className="w-5 cursor-pointer "
          />
        </div>
        <Link to="/cart" className="relative flex items-center gap-1">
          <ShoppingCartOutlinedIcon className="w-5 cursor-pointer " />
          <p className="absolute bg-red-500 text-white aspect-square rounded-full text-[12px] left-3 top-3 w-5 text-center leading-5 ">
            {getCartCount()}
          </p>
        </Link>
        <div className="w-5 cursor-pointer block md:hidden">
          <MenuOutlinedIcon onClick={() => setVisable(true)} />
        </div>
        <div
          className={`flex flex-col absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${
            visable ? `w-full` : `w-0`
          }`}
        >
          <div
            onClick={() => setVisable(false)}
            className="flex items-center gap-2 cursor-pointer p-4 border-b-2 border-gray-400 hover:text-blue-600"
          >
            <ChevronLeftOutlinedIcon className="h-5 " />
            <p className="text-xl  font-semibold hover:text-blue-600">back</p>
          </div>
          <NavLink
            onClick={() => setVisable(false)}
            to="/"
            className="cursor-pointer py-3 px-10 border-b-2 border-gray-400 text-xl font-semibold hover:text-blue-600"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisable(false)}
            to="/collection"
            className="cursor-pointer py-3 px-10 border-b-2 border-gray-400 text-xl font-semibold hover:text-blue-600"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisable(false)}
            to="/about"
            className="cursor -poicursor-pointer py-3 px-10 border-b-2 border-gray-400 text-xl font-semibold hover:text-blue-600"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisable(false)}
            to="/contact"
            className="cursor -poicursor-pointer py-3 px-10 border-b-2 border-gray-400 text-xl font-semibold hover:text-blue-600"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};
