import Searchbar from "./Searchbar";
import logo from "../image/logo.png";
import { BsCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useErrorShow from "../hooks/useErrorShow";
import { useAddToCart } from "../context/Zustand";
function Navbar() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { errorMessage, setError, showError } = useErrorShow();
  const [searchInput1, setSearchInput1] = useState<string>("");
  const { cart } = useAddToCart();
  const navigate = useNavigate();
  const handleonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowInput((prevShowInput) => !prevShowInput);
  };
  const handlemobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput1.trim() === "") {
      setError("Please put a text in the field");
      return;
    }
    navigate("/search/" + searchInput1);
  };
  return (
    <nav className="bg-colorgray sticky md:border-b-slate-200 md:border top-0 font-OpenSans z-30">
      {showError && (
        <h1 className=" absolute  bg-red-600 text-white p-4">{errorMessage}</h1>
      )}
      <div className="md:relative mx-auto max-w-screen-xl flex items-center md:justify-between justify-center md:py-5 px-3   py-3">
        <div className="hidden md:block">
          <Searchbar />
        </div>
        <NavLink className="w-32 md:w-44 md:absolute md:left-[43%]" to={"/"}>
          <img src={logo} alt="Carol" />
        </NavLink>

        <div className="md:flex items-center gap-4 hidden md:text-lg">
          <NavLink
            to={"account"}
            className="flex items-center gap-2 cursor-pointer"
          >
            Account
            <FaUser />
          </NavLink>
          <NavLink
            to={"cart"}
            className="flex items-center gap-2 cursor-pointer "
          >
            Cart
            <div className="relative">
              <BsCartFill />
              <div className="absolute text-xs top-[10px] -right-[8px] rounded-full bg-white text-red-600 w-4 h-4 flex items-center justify-center">
                {cart.length}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex relative justify-between max-w-screen-xl mx-auto px-3 md:hidden bg-colorgray py-3 border border-b-slate-200">
        {showInput && (
          <form
            onSubmit={handlemobileSearch}
            className="w-full absolute h-16 top-0 left-0 bg-colorblue pl-7 pt-[1.2rem] "
          >
            <input
              type="text"
              className="bg-transparent outline-none px-3 text-white w-full "
              placeholder="Search.."
              value={searchInput1}
              onChange={(e) => setSearchInput1(e.target.value)}
            />
          </form>
        )}
        <div
          className={`${
            showInput ? "text-white" : "text-colorblue"
          }  cursor-pointer my-3`}
          onClick={handleonClick}
        >
          <Searchbar />
        </div>

        <div className="flex items-center gap-4 ">
          <NavLink to={"account"}>
            <div className="flex items-center gap-2 cursor-pointer">
              Account
              <FaUser />
            </div>
          </NavLink>

          <NavLink
            to={"cart"}
            className="flex items-center gap-2 cursor-pointer "
          >
            Cart
            <div className="relative">
              <BsCartFill />
              <div className="absolute text-xs top-[10px] -right-[8px] rounded-full bg-white text-red-600 w-4 h-4 flex items-center justify-center">
                {cart.length}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
