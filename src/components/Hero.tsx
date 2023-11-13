import vector from "../image/Vector.png";
import ShopNow from "./buttons/ShopNow";
import Heropic from "../image/image-product.png";
function Hero() {
  return (
    <section className="bg-colorgray py-10 ">
      <div className="mx-auto h-[90vh] max-h-[40rem] max-w-screen-xl px-3 relative">
        <img
          src={vector}
          className="w-28 md:w-40 absolute left-0 bottom-0 rotate-180"
          alt=""
        />
        <img
          src={vector}
          className="w-28 md:w-36 absolute right-0 top-0 "
          alt=""
        />

        <div className="flex flex-col items-center md:justify-between md:flex-row">
          <div className="mb-5 md:max-w-2xl">
            <h1 className="font-Roboto text-4xl uppercase mb-4 md:text-6xl">
              Collections
            </h1>
            <p className="font-OpenSans mb-4 text-lg md:text-xl">
              You can explore and shop from a wide variety of collections
              featuring products from different brands here.
            </p>
            <ShopNow />
          </div>
          <img className="w-[21rem] md:w-[24rem]" src={Heropic} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
