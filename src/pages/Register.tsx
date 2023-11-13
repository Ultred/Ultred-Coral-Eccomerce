import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center lg:h-screen">
      <div className="flex max-w-3xl shadow-xl flex-col md:flex-row">
        <div className="my-10 md:my-auto flex flex-col px-10 gap-5 max-w-[90rem]">
          <h2 className="font-Roboto text-4xl uppercase mb-4 md:text-6xl">
            Register
          </h2>
          <input className="inputField" type="text" placeholder="Username" />
          <input
            className="inputField no-arrow"
            type="number"
            placeholder="Number"
          />
          <input
            className="inputField"
            type="password"
            placeholder="Password"
          />
          <input
            className="inputField"
            type="password"
            placeholder="Confirm Password"
          />
          <Link
            className="text-right italic text-sm text-blue-400"
            to={"/forget-pass"}
          >
            Forget your Password?
          </Link>
          <span className="bg-colorblue h-[.23px] w-full"></span>
          <button className="bg-colorblue p-4 text-white text-lg  font-OpenSans hover:bg-blue-950">
            Submit
          </button>
          <Link
            className="text-center italic text-sm my-4 text-blue-400"
            to={"/login"}
          >
            Already Have an Account?
          </Link>
        </div>
        <img
          className="hidden md:block rotate-180 transform scale-y-[-1] w-full max-w-[20rem]"
          src="/Ellipse1.png"
          alt="Picture"
        />
      </div>
    </div>
  );
}

export default Register;
