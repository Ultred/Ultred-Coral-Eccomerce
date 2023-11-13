import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSoloProduct } from "../service/Allfetch";
import { BsCartFill } from "react-icons/bs";
import { useState, ChangeEvent } from "react";
import RatingStars from "../components/RatingStars";
import { useAddToCart } from "../context/Zustand";
import { UiProductList } from "../interface/Allinterface";
function SoloProduct() {
  const params = useParams();
  const [countProduct, setcountProduct] = useState(1);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["soloProduct", params.id],
    queryFn: fetchSoloProduct,
    staleTime: 30000,
  });
  const { addToCart, cart } = useAddToCart();

  const handleAddProduct = () => {
    if (countProduct >= data.rating.count) {
      return;
    }
    setcountProduct((prev) => prev + 1);
  };
  const handleAddtoCart = (item: UiProductList) => {
    addToCart(item, countProduct);
  };
  const handleMinusProduct = () => {
    if (countProduct === 1) {
      return;
    }
    setcountProduct((prev) => prev - 1);
  };
  const handleCountInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setcountProduct(1);
      return;
    }
    if (inputValue >= data.rating.count) {
      setcountProduct(data.rating.count);
      return;
    }
    setcountProduct(parseInt(inputValue));
  };

  function checkProductCart(productId: number) {
    return cart.some((checkProps) => checkProps.item.id === productId);
  }

  return (
    <div className="mx-auto max-w-screen-xl px-3 my-20">
      {isLoading && isFetching ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <img
              className="w-full h-[25rem]"
              src={data.image}
              alt={data.title}
            />
            <div className=" font-OpenSans">
              <div className="flex items-center justify-between">
                <h2 className="uppercase font-semibold text-sm md:text-2xl">
                  {data.category}
                </h2>
                <RatingStars rating={data.rating.rate} />
              </div>

              <h1 className="text-xl font-semibold my-2 md:text-4xl">
                {data.title}
              </h1>
              <div className="flex justify-between items-center text-colorblue text-lg  font-Roboto md:text-xl">
                <p className="">${data.price}</p>
                {data.rating.count === 0 ? (
                  <p>Out of Stocks</p>
                ) : (
                  <p className="text-green-600">
                    In Stock/
                    <span className="font-light text-sm text-gray-400">
                      {data.rating.count}
                    </span>
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center md:text-xl">
                <h2>Quantity</h2>
                <div className="flex gap-3 border border-colorblue my-4">
                  <button
                    onClick={() => handleAddProduct()}
                    className="border-r-[1px] border-colorblue px-3"
                  >
                    +
                  </button>
                  <input
                    type="number"
                    className="outline-none w-10 text-center no-arrow"
                    value={countProduct}
                    onChange={handleCountInput}
                  ></input>
                  <button
                    onClick={() => handleMinusProduct()}
                    className="border-l-[1px] border-colorblue px-3"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex justify-end w-full">
                {!checkProductCart(data.id) ? (
                  <button
                    onClick={() => handleAddtoCart(data)}
                    className="flex items-center  text-white gap-3 p-2 rounded-sm  bg-green-700 "
                  >
                    Add To Cart <BsCartFill />
                  </button>
                ) : (
                  <button className="flex items-center  text-white gap-3 p-2 rounded-sm  bg-green-900 ">
                    Added to Cart <BsCartFill />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="my-9">
            <h2 className="font-semibold  md:text-2xl ">Description</h2>
            <p className="my-6 text-justify md:text-lg">{data.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SoloProduct;
