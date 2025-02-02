import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size,setSize] = useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="opacity-100 flex flex-col mt-10">
      <div className=" flex flex-col sm:flex-row  gap-10 mt-10">
        <div className="flex-1 flex flex-col-reverse sm:flex-row  gap-5 ">
          <div className="sm:w-[25%] w-full flex sm:flex-col sm:overflow-x-auto overflow-y-scroll scrollbar-hidden justify-between sm:justify-normal gap-2 ">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-1/4 sm:w-full  cursor-pointer object-cover"
              />
            ))}
          </div>
          <div className="w-full sm:w-[75%] h-auto">
            <img src={image} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-semibold text-xl w-4/5">{productData.name}</h1>
          <div className="flex gap- text-amber-400 mt-5">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <p className="text-black">(122)</p>
          </div>
          <div className="text-3xl font-semibold py-5">
            {currency}
            {productData.price}
          </div>
          <p className="text-gray-500 "> {productData.description} </p>
          <div className="mt-5">
            <p>Select Size</p>
            <div className="mt-5">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`cursor-pointer bg-gray-100  ${
                    item === size ? "border border-orange-400" : ""
                  } py-2 px-4 mr-2 `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id,size)}
            className="bg-black text-white active:bg-gray-700 text-xs py-3 px-7 mt-5"
          >
            ADD TO CART
          </button>
          <hr className="text-gray-300 my-5" />
          <div className="text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="w-full text-sm mt-20">
        <div className="flex">
          <b className="px-5 py-3 border border-gray-300">Description</b>
          <p className="px-5 py-3 border border-gray-300">Reviews (122)</p>
        </div>
        <div className="p-6 border border-gray-300 flex flex-col gap-6 text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
          current={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
