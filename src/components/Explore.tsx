import Explore1 from "../image/img/card.png";
import Explore2 from "../image/img/card (2).png";
import Explore3 from "../image/img/card (1).png";
import Explore4 from "../image/img/20.png";
import Explore5 from "../image/img/03.png";

function Explore() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto max-w-screen-xl px-3">
      <div className="relative">
        <img className="w-full" src={Explore1} alt="" />
        <h2 className="absolute uppercase text-2xl lg:text-3xl font-OpenSans top-[-8%] lg:-rotate-90 lg:transform lg:origin-left lg:top-[90%] ">
          explore new and popular styles
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img className="w-full" src={Explore2} alt="" />
        <img className="w-full" src={Explore3} alt="" />
        <img className="w-full" src={Explore4} alt="" />
        <img className="w-full" src={Explore5} alt="" />
      </div>
    </section>
  );
}

export default Explore;
