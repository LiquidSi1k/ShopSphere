import Button from "../button/button";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItems from "../cart-item/cart-items";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="border w-96 h-96 absolute top-24 right-10 bg-secondary z-20 rounded overflow-y-auto flex flex-col justify-start shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="standardBtn">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
