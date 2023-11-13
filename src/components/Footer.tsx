import { AiOutlineArrowUp } from "react-icons/ai";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className=" bg-colorblue text-colorgray">
      <div className="flex md:flex-row flex-col items-center py-3 justify-between md:gap-0 gap-6  mx-auto max-w-screen-xl px-3">
        <p className=" font-Roboto italic">2023 Coral, Inc</p>
        <img className="h-7" src="/public/payments.png" alt="payment" />
        <p className="flex gap-2 items-center font-OpenSans">
          Scroll to Top
          <span
            className="rounded-full bg-colorgray p-1 text-colorblue cursor-pointer"
            onClick={scrollToTop}
          >
            <AiOutlineArrowUp />
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
