import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="">
      <div className="text-3xl py-5 sm:py-10">
        <Title Text1={"YOUR"} Text2={"CART"} />
      </div>
      <div className="">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-b border-t border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex gap-4">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div className="">
                  <p className="text-gray-800 font-semibold ">
                    {productData.name}{" "}
                  </p>
                  <div className="flex items-center gap-10">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-3 py-1 w-10 text-center border border-gray-400 bg-gray-100">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                className="border border-gray-300  p-1 outline-none w-12  "
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "0" || e.target.value === ""
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />
              <DeleteOutlinedIcon
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div className="flex sm:justify-end mt-10 sm:mt-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
      <div onClick={() => navigate('/place-order')} className="w-full text-end mt-5">
        <button className="bg-black text-white px-5 py-3 cursor-pointer">
          Proceed To Chekout
        </button>
      </div>
    </div>
  );
};

export default Cart;
