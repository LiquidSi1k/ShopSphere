import { Outlet, Link } from "react-router-dom";
import Footer from "../footer/footer";
import Logo from "../../assets/logo.png";
import { BiCartDownload } from "react-icons/bi";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-between p-5 pb-0 items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="h-20 flex bg-accent rounded-3xl pr-[3px] pt-[2px]"
          >
            <img src={Logo} alt="logo" className="h-full" />
          </Link>
          <span className="pl-4 text-3xl font-semibold">ShopSphere</span>
        </div>
        <div className="flex gap-10 pr-4">
          <Link className="text-2xl" to="/shop">
            Shop
          </Link>
          <Link className="text-2xl" to="/">
            Contact
          </Link>
          <Link className="text-2xl" to="/auth">
            Sign In
          </Link>
          <BiCartDownload className="text-3xl" />
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
