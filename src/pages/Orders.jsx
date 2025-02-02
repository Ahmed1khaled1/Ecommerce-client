import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    setMyOrders(products.slice(0, 3));
  }, [products]);
  return (
    <div>
      <div className="text-3xl my-10">
        <Title Text1={"MY"} Text2={"ORDERS"} />
      </div>
      <div className="flex flex-col gap-10">
        {myOrders.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-5 justify-between md:items-center border-b border-gray-300 py-5 ">
            <div className=" flex gap-5">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center gap-5 ">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>Size:M</p>
                </div>
                <p>
                  Date: <span className="text-gray-600"> 25,jul,2025</span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <p className="w-3 aspect-square bg-green-500 rounded-full "></p>
              <p >Ready To Ship</p>
            </div>
            
            <button className=" cursor-pointer px-6 py-2 border border-gray-300 bg-gray-50">Track Order</button>
          
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Orders;
