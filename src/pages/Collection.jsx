import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Searchbar from "../components/Searchbar";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applayFilter = () => {
    let productsCopy = products.slice();

    if(showSearch&&search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applayFilter();
  }, [category, subCategory, showSearch, search]);

  const sortProducts = () => {
    let copy = filterProducts.slice();

    switch (sortType) {
      case "Low-High":
        setFilterProducts(copy.sort((a, b) => a.price - b.price));
        break;

      case "High-Low":
        setFilterProducts(copy.sort((a, b) => b.price - a.price));
        break;

      default:
        applayFilter();
        break;
    }
  };
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (<>
  <Searchbar/>
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* left side */}
      <div className="min-w-60">
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="bg-gray-50 p-5 mb-5 font-semibold text-xl flex items-center pb-3 cursor-pointer"
        >
          FILTERS
          <div className={` ${showFilter ? "rotate-90" : ""} sm:hidden`}>
            <ChevronRightIcon />
          </div>
        </div>
        {/* CATEGORIES */}
        <div
          className={`p-3 border border-gray-300 mb-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="pb-3 font-semibold">CATEGORIES</p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Men"}
              onChange={toggleCategory}
            />
            Men
          </p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Women"}
              onChange={toggleCategory}
            />
            Women
          </p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Kids"}
              onChange={toggleCategory}
            />
            Kids
          </p>
        </div>
        {/* subcategories */}
        <div
          className={`p-3 border border-gray-300 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="pb-3 font-semibold">TYPE</p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            Topwear
          </p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Winterwear"}
              onChange={toggleSubCategory}
            />
            Winterwear
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base md:text-2xl">
          <Title Text1={"ALL"} Text2={"COLLECTIONS"} />
          <select
            className="border-2 border-gray-300 outline-none px-2 text-base"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="Relavent">Sort by:Relavent</option>
            <option value="Low-High">Sort by:Low to High</option>
            <option value="High-Low">Sort by:High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5 ">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Collection;
