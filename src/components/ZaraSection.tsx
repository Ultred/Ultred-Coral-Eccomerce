import Zarabg from "../image/Zara.png";

function ZaraSection() {
  return (
    <div
      className="h-screen w-full max-h-[40rem]  bg-cover bg-no-repeat bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${Zarabg})` }}
    >
      <div className="relative max-w-screen-xl px-3 mx-auto h-screen w-full max-h-[40rem] ">
        <span className="text-white absolute font-Roboto text-9xl opacity-30 lg:text-[15rem] -right-[15%]">
          ZARA
        </span>

        <div className="absolute text-white max-w-[20rem] right-0 top-[18%] lg:right-48 lg:top-[25%]">
          <h1 className="font-Roboto text-4xl uppercase mb-4 md:text-6xl lg:text-8xl">
            Zara
          </h1>
          <p className="font-OpenSans mb-4  text-lg md:text-xl ">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white hover:bg-colorblue hover:text-white text-black p-4 font-semibold transition-all ">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default ZaraSection;
