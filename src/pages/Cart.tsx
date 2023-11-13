import { useAddToCart } from "../context/Zustand";
import { AiOutlineArrowRight } from "react-icons/ai";
import { UiAddCartStateMain } from "../interface/Allinterface";
import { BsCartFill } from "react-icons/bs";

import { Link } from "react-router-dom";
function Cart() {
  const { cart, updateCartQuantity, removeToCart, clearCart } = useAddToCart();
  const handleAddProduct = (propsAdd: UiAddCartStateMain) => {
    const updatedCartItem = {
      date: propsAdd.date,
      quantity: propsAdd.quantity + 1,
      item: propsAdd.item,
    };
    updateCartQuantity([updatedCartItem]);
  };
  const handleMinusProduct = (propsMinus: UiAddCartStateMain) => {
    const updatedCartItem = {
      date: propsMinus.date,
      quantity: propsMinus.quantity - 1,
      item: propsMinus.item,
    };
    if (propsMinus.quantity <= 1) {
      removeToCart([propsMinus]);
      return;
    }
    updateCartQuantity([updatedCartItem]);
  };

  function getMaxTotal() {
    return cart.reduce((total, props) => {
      return total + props.quantity * props.item.price;
    }, 0);
  }

  return (
    <div className="mx-auto max-w-screen-xl px-3">
      <div className="flex justify-between pb-3 my-6 border-b-[1px] border-b-colorblue">
        <h1 className="font-OpenSans font-semibold text-4xl ">My Cart</h1>
        {cart.length !== 0 && (
          <button
            className="bg-red-600 text-white p-2 rounded font-bold text-2xl uppercase"
            onClick={() => clearCart()}
          >
            Clear All
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8">
        {cart.length === 0 ? (
          <div>No Product in The Cart</div>
        ) : (
          cart.map((props, index) => (
            <div className=" py2 px-5 rounded-md" key={index}>
              <div className="flex items-center flex-col md:flex-row justify-between ">
                <img
                  src={props.item.image}
                  className="w-[7rem] h-[7rem]"
                  alt={props.item.title}
                />
                <Link to={"/product/" + props.item.id}>
                  <h2>{props.item?.title}</h2>
                </Link>
                <div className="flex gap-3 border border-colorblue my-4">
                  <button
                    onClick={() => handleAddProduct(props)}
                    className="border-r-[1px] w-9 border-colorblue px-3"
                  >
                    +
                  </button>
                  <input
                    disabled
                    type="number"
                    className="outline-none h-9 w-7 text-center no-arrow bg-none"
                    value={props.quantity}
                  ></input>
                  <button
                    onClick={() => handleMinusProduct(props)}
                    className="border-l-[1px] w-9 border-colorblue px-3"
                  >
                    -
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <p>
                  Price: <b> ${props.item?.price}</b>
                </p>
                <h2>
                  Total:
                  <b> ${(props.quantity * props.item.price).toFixed(2)}</b>
                </h2>
              </div>
              <div className="float-right">
                <button
                  className="bg-red-600 text-white p-2 rounded font-bold text-base mt-3 uppercase"
                  onClick={() => removeToCart([props])}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="float-right border-t-[1px] border-t-colorblue my-9">
        <h2 className="text-lg my-2">
          SubTotal: <b> ${getMaxTotal().toFixed(2)}</b>
        </h2>
        {cart.length === 0 ? (
          <Link
            to={"/"}
            className="flex gap-3 rounded-md bg-colorblue text-white p-3 justify-center items-center"
          >
            Shop Now <BsCartFill />
            <div className="text-lg font-extrabold"></div>
          </Link>
        ) : (
          <button
            disabled={cart.length === 0}
            className="flex gap-3 rounded-md bg-colorblue text-white p-3 justify-center items-center"
          >
            Proceed to CheckOut
            <div className="text-lg font-extrabold">
              <AiOutlineArrowRight />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
