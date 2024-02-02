import { useContext } from "react";
import CartIcon from "../../components/ cart-icon/cart-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { Outlet, Link } from "react-router-dom";
import Footer from "../footer/footer";
import Logo from "../../assets/logo.png";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="flex justify-between p-5 pb-0 items-center relative">
        <div className="flex items-center">
          <Link
            to="/"
            className="h-20 flex bg-accent rounded-3xl pr-[3px] pt-[2px]"
          >
            <img src={Logo} alt="logo" className="h-full" />
          </Link>
          <Link to="/">
            <span className="pl-4 text-3xl font-semibold">ShopSphere</span>
          </Link>
        </div>
        <div className="flex gap-10 pr-4">
          <Link className="text-2xl" to="/shop">
            Shop
          </Link>
          <Link className="text-2xl" to="/">
            Contact
          </Link>
          {currentUser ? (
            <span className="text-2xl" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="text-2xl" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
