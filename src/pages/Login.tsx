import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex  shadow-xl flex-col md:flex-row">
        <img
          className="w-full max-w-[20rem] hidden md:block"
          src="/Ellipse1.png"
          alt="Picture"
        />
        <div className="my-10 md:my-auto flex flex-col px-10 gap-5  lg:min-w-[25rem]">
          <h2 className="font-Roboto text-4xl uppercase mb-4 md:text-6xl">
            Login
          </h2>
          <input className="inputField" type="text" placeholder="Username" />
          <input
            className="inputField"
            type="password"
            placeholder="Password"
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
            to={"/register"}
          >
            Create An Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
