import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ?(
    <div className="flex justify-center items-center bg-gray-50 text-center p-5">
      <div className="inline-flex items-center border border-gray-400 rounded-full w-full md:w-1/2 px-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none p-2 w-full"
          placeholder="Search..."
        />
        <SearchOutlinedIcon className="cursor-pointer" />
      </div>
      <CloseIcon
        onClick={() => setShowSearch(false)}
        className="cursor-pointer mx-2"
      />
    </div>
  ):null
};

export default Searchbar;
