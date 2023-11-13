import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../service/Allfetch";
import { useQuery } from "@tanstack/react-query";
import { UiProductList } from "../interface/Allinterface";
import { BsCartFill } from "react-icons/bs";
function SearchProduct() {
  const { idprod } = useParams();
  const { data: productList } = useQuery({
    queryKey: ["Product"],
    queryFn: fetchProduct,
  });

  const lowercaseIdprod = idprod ? idprod.toLowerCase() : "";

  const filteredProducts = productList.filter(
    (product: UiProductList) =>
      product.title.toLowerCase().includes(lowercaseIdprod) ||
      product.category.toLowerCase().includes(lowercaseIdprod)
  );

  return (
    <div className="mx-auto max-w-screen-xl px-3">
      <h1 className="font-OpenSans text-2xl uppercase my-20">
        Search Product: {idprod}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {filteredProducts.length === 0 ? (
          <h1 className="font-OpenSans text-lg">No Product Find</h1>
        ) : (
          filteredProducts.map((props: UiProductList) => (
            <Link to={"/product/" + props.id} key={props.id}>
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
                  <button className="flex items-center text-white gap-3 p-2 rounded-sm -bottom-3 -right-4 bg-colorblue absolute z-[1]">
                    Add To Cart <BsCartFill />
                  </button>
                </div>
                <div className="border-t-[1px] mt-2 pt-3 border-t-colorblue">
                  <h2 className=" font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {props.title}
                  </h2>
                  <div className="flex justify-between my-3 ">
                    <h3 className="uppercase text-gray-600 ">
                      {props.category}
                    </h3>
                    <p className="text-colorblue">{props.price} $</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
