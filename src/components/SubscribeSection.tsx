import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../service/Allfetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import SelectCateg from "./SelectCateg";
import { UiProductList } from "../interface/Allinterface";
import { useAddToCart } from "../context/Zustand";
function SubscribeSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("allProduct");
  const { addToCart, cart } = useAddToCart();
  const itemsPerPage = 8;
  //React Query TO Fetch All Product
  const productList = useQuery({
    queryKey: ["Product"],
    queryFn: fetchProduct,
  });
  function checkProductCart(productId: number) {
    const checker = cart.some((checkProps) => checkProps.item.id === productId);
    return checker;
  }
  useEffect(() => {
    if (selectedCategory !== "allProduct") {
      setCurrentPage(1);
    }
  }, [productList.data, selectedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredProducts =
    selectedCategory === "allProduct"
      ? productList.data
      : productList.data?.filter(
          (product: UiProductList) => product.category === selectedCategory
        );

  const currentItems = filteredProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil((filteredProducts?.length || 0) / itemsPerPage);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const handleAddtoCart = (items: UiProductList) => {
    addToCart(items, 1);
  };
  if (productList.isError) {
    return <h1 className="text-red-700">Error</h1>;
  }
  return (
    <section id="ShopLink" className="mx-auto max-w-screen-xl px-3 my-24">
      <h2 className="font-OpenSans font-semibold text-4xl text-center mb-10">
        Or Browse to our Products
      </h2>
      <div className="flex items-center justify-between">
        <h3 className="lg:text-xl my-6 font-OpenSans font-semibold">
          Products
        </h3>
        <SelectCateg onSelectCategory={setSelectedCategory} />
      </div>

      {productList.isLoading && productList.isFetching ? (
        <h1 className="text-red-700">Loading Please Wait</h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {currentItems?.map((props: UiProductList) => (
            <Link to={"product/" + props.id} key={props.id}>
              <div className="relative shadow-md px-4" key={props.id}>
                <h2 className="absolute bg-yellow-300 text-white px-4 py-1 font-OpenSans font-bold text-lg w-16 left-0 z-[1]">
                  {props.rating.rate}
                </h2>

                <div className="relative">
                  <img
                    className="w-[10rem] h-[12rem] md:w-[14rem] md:h-[17rem] min-w-full"
                    src={props.image}
                    alt=""
                  />
                  {!checkProductCart(props.id) ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddtoCart(props);
                      }}
                      className="flex items-center text-white gap-3 p-2 rounded-sm -bottom-3 -right-4 bg-green-600 absolute z-[1]"
                    >
                      Add To Cart <BsCartFill />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center text-white gap-3 p-2 rounded-sm -bottom-3 -right-4  absolute z-[1]  bg-green-900 "
                    >
                      Added to Cart <BsCartFill />
                    </button>
                  )}
                </div>
                <div className="border-t-[1px] mt-2 pt-3 border-t-colorblue">
                  <h2 className=" font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {props.title}
                  </h2>
                  <div className="flex justify-between my-3 ">
                    <h3 className="uppercase text-gray-600 ">
                      {props.category}
                    </h3>
                    <p className="text-colorblue"> ${props.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-2 rounded ${
              currentPage === index + 1
                ? "bg-gray-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SubscribeSection;
