import { BsCartFill } from "react-icons/bs";

function ShopNow() {
  return (
    <button className="bg-colorblue p-4 text-white text-lg flex items-center gap-2 font-OpenSans">
      <BsCartFill />
      <a href="#ShopLink">Shop Now</a>
    </button>
  );
}

export default ShopNow;
