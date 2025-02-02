import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"

const CartTotal = () => {

  const {    delivery_fee, getCartAmount,    currency,
}= useContext(ShopContext)
  return (
    <div className="w-full">
      <div className="text-2xl mb-5">
        <Title Text1={"CART"} Text2={"TOTAL"} />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr className="text-gray-300 my-2" />
        <div className="flex items-center justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr className="text-gray-300 my-2" />
        <div className="flex items-center justify-between">
          <p>Total</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal