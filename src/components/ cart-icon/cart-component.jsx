import { useContext } from "react";
import { BiCartDownload } from "react-icons/bi";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="relative" onClick={toggleIsCartOpen}>
      <BiCartDownload className="text-3xl" />
      <span className="absolute -top-3 -right-2 border-2 border-primary rounded-full w-5 h-5 flex justify-center items-center text-sm">
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
