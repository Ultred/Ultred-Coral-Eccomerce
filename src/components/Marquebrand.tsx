import Brand1 from "../image/brand/brand-1.png";
import Brand2 from "../image/brand/brand-2.png";
import Brand3 from "../image/brand/brand-3.png";
import Brand4 from "../image/brand/brand-4.png";
import Marquee from "react-fast-marquee";

function Marquebrand() {
  return (
    <div className="my-28 mx-auto max-w-screen-xl px-3">
      <Marquee speed={100} autoFill={true} pauseOnHover={true}>
        <img className="mx-5" src={Brand1} alt="Graphic Studio" />
        <img className="mx-5" src={Brand2} alt="Travel LookBook" />
        <img src={Brand3} alt="Golden Studio" />
        <img className="mx-5" src={Brand4} alt="Furniture Design" />
      </Marquee>
    </div>
  );
}

export default Marquebrand;
