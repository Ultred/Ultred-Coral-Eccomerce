import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useErrorShow from "../hooks/useErrorShow";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { errorMessage, setError, showError } = useErrorShow();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      setError("Please put text in the field");
      return;
    }
    setSearchInput("");
    navigate("/search/" + searchInput);
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      {showError && (
        <h1 className=" absolute  bg-red-600 text-white p-4">{errorMessage}</h1>
      )}
      <BiSearch />
      <input
        className="bg-transparent outline-none px-3 hidden md:block"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search.."
      />
      <button
        className="absolute top-2/4 right-[14%] transform translate-x-full -translate-y-1/2 cursor-pointer "
        type="submit"
      ></button>
    </form>
  );
}

export default Searchbar;
