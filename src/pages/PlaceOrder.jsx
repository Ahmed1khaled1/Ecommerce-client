import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method,setMethod] =useState("cod")
  const {navigate} = useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5 ">
      <div className="flex-1 w-full sm:max-w-[500px]  flex flex-col gap-5">
        <div className="text-2xl mt-5 ">
          <Title Text1={"DELIVERY"} Text2={"INFORMATION"} />
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className=" flex gap-3 ">
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="First name"
            />
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="Last name"
            />
          </div>
          <input
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
            placeholder="Email"
          />
          <input
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
            placeholder="Street adress"
          />
          <div className=" flex gap-3 ">
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="City"
            />
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="state"
            />
          </div>
          <div className=" flex gap-3 ">
            <input
              type="number"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="Postal-code"
            />
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="country"
            />
          </div>
          <input
            type="number"
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="flex-1 w-full sm:max-w-[500px] flex flex-col gap-5 mt-10">
        <CartTotal />
        <div className="text-xl mt-5 ">
          <Title Text1={"PAYMENT"} Text2={"METHOD"} />
        </div>
        <div className="flex flex-col gap-3 ">
          <div
            onClick={() => setMethod("stripe")}
            className="cursor-pointer flex items-center gap-3 border border-gray-300 rounded-md p-2"
          >
            <p
              className={`w-3 rounded-full aspect-square ${
                method === "stripe" ? "bg-green-500" : ""
              } border border-gray-400`}
            ></p>
            <img src={assets.stripe_logo} alt="" className="h-5" />
          </div>
          <div
            onClick={() => setMethod("razor")}
            className="cursor-pointer flex items-center gap-3 border border-gray-300 rounded-md p-2"
          >
            <p
              className={`w-3 rounded-full aspect-square ${
                method === "razor" ? "bg-green-500" : ""
              } border border-gray-400`}
            ></p>
            <img src={assets.razorpay_logo} alt="" className="h-5" />
          </div>
          <div
            onClick={() => setMethod("cod")}
            className="cursor-pointer flex items-center gap-3 border border-gray-300 rounded-md p-2"
          >
            <p
              className={`w-3 rounded-full aspect-square ${
                method === "cod" ? "bg-green-500" : ""
              } border border-gray-400`}
            ></p>
            <p
              src={assets.cash}
              alt=""
              className="h-5 font-semibold text-gray-600"
            >
              CASH ON DELIVERY
            </p>
          </div>
        </div>
        <div className="w-full text-end">
          <button
            onClick={() => navigate("/orders")}
            className="cursor-pointer bg-black text-white px-10 py-3 text-sm"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
