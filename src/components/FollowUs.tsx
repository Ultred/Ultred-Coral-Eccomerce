import Card1 from "../image/FollowCard/card (1).png";
import Card2 from "../image/FollowCard/card.png";
import Card3 from "../image/FollowCard/card (3).png";
import Card4 from "../image/FollowCard/card (4).png";
import Card5 from "../image/FollowCard/card (5).png";
import Card6 from "../image/FollowCard/card (2).png";

function FollowUs() {
  return (
    <div className="bg-colorgray py-2">
      <div className="text-center mx-auto max-w-screen-xl px-3 my-24">
        <h2 className="font-OpenSans font-semibold text-4xl ">
          Follow products and discounts on Instagram
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 my-9">
          <img className="w-full" src={Card1} alt="" />
          <img className="w-full" src={Card2} alt="" />
          <img className="w-full" src={Card3} alt="" />
          <img className="w-full" src={Card4} alt="" />
          <img className="w-full" src={Card5} alt="" />
          <img className="w-full" src={Card6} alt="" />
        </div>
        <h2 className="font-OpenSans font-semibold text-4xl ">
          Or subscribe to the newsletter
        </h2>
        <form className="flex justify-center my-9 ">
          <input
            className="outline-none px-5 py-4 bg-transparent border-b-2 w-[40rem] focus:border-b-colorblue"
            placeholder="Type your Email Here"
            type="text"
            name=""
            id=""
          />
          <button className="bg-colorblue p-4 text-white text-lg  font-OpenSans">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FollowUs;
