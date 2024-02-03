import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";

const Checkout = () => {
  const { cartItems, addItemsToCart, removeItemsFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div className="m-4 border">
      <h1 className="text-3xl font-semibold py-4">Checkout</h1>
      {cartItems.map((cartItem) => {
        const { id, quantity, price, name } = cartItem;

        return (
          <div key={id}>
            <h2>{name}:</h2>
            <div className="flex gap-4 items-center">
              <span onClick={() => removeItemsFromCart(cartItem)}>
                <FaCaretLeft />
              </span>
              <p>{quantity}</p>
              <span onClick={() => addItemsToCart(cartItem)}>
                <FaCaretRight />
              </span>
              <p>total ${price * quantity}</p>
            </div>
          </div>
        );
      })}
      <p>total price: ${totalPrice}</p>
    </div>
  );
};

export default Checkout;
