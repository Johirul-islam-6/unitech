import Image from "next/image";
import "./Navbar.css";
import "./Responsive.css";
// import searchIcon from "../../../app/Assets/Navbar/searchbar.svg";

export const SearchBar = () => {
  return (
    <>
      <div className="relative w-[100%] ">
        <input
          type="search"
          name="serch"
          placeholder="Search books, Category books etc.."
          className="bg-[#F6F5F7] search-bar-container search-input-text h-12 px-5 pr-10 rounded-full text-[18px] focus:outline-4 outline-[#563A9F] w-[100%] mx-auto GT"
        />
        <button className="absolute right-0 top-0 mt-3 mr-4">
          <Image width={20} height={20} className="" src={""} alt="" />
        </button>
      </div>
    </>
  );
};
