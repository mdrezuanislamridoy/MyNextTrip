import React from "react";
import background from "../../../assets/images/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  const handleSearch = async (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="w-full  xl:max-w-[1280px] flex xl:m-auto min-h-[476px]  text-white bg-cover bg-center "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="backdrop-blur-lg w-full flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl md:text-6xl text-center ">
          Book Your Next Trip Now
        </h1>
        <div className="flex justify-center items-center w-full">
          <form className="relative flex border-2 rounded-full mt-6 w-3/4 md:w-1/2 p-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 text-2xl top-4"
            ></FontAwesomeIcon>
            <input
              type="text"
              placeholder="Search for place or trips"
              className="w-full py-2 pl-10 pr-2 text-xl outline-0"
            />
            <button
              className="rounded-full border-none  px-4 py-2 bg-green-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
