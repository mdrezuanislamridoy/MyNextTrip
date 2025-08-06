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
      className="w-full xl:max-w-[1280px] flex flex-col xl:flex-row xl:m-auto min-h-[476px] text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="backdrop-blur-lg w-full flex flex-col items-center justify-end p-4 md:p-10">
        <div className="my-6 w-full flex flex-col items-center">
          <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight max-w-2xl">
            Discover The World, one adventure at a time
          </h1>
          <p className="text-center text-base sm:text-lg mb-6 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Assumenda, inventore!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 w-full sm:w-auto">
            <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded-md shadow hover:bg-green-800 transition w-full sm:w-auto">
              Contact Us
            </button>
            <button className="px-6 py-2 bg-transparent text-white font-semibold border border-white rounded-md shadow hover:border-green-600 transition w-full sm:w-auto">
              Get Quote
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="h-auto min-h-[300px] md:h-72 w-full bg-center bg-cover bg-no-repeat flex justify-center items-end"
        >
          <div className="bg-white/20 backdrop-blur-xl h-auto md:h-40 m-2 md:m-6 w-full max-w-4xl rounded-lg shadow-lg flex items-center">
            <form
              className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 px-2 md:px-6 py-4"
              onSubmit={handleSearch}
            >
              <div className="flex flex-col flex-1 min-w-[120px] w-full md:w-auto">
                <label
                  htmlFor="Destination"
                  className="text-sm font-medium mb-1"
                >
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Destination"
                  id="Destination"
                  name="Destination"
                  className="px-3 py-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-[120px] w-full md:w-auto">
                <label htmlFor="Duration" className="text-sm font-medium mb-1">
                  Duration in Days
                </label>
                <input
                  type="number"
                  placeholder="Duration"
                  id="Duration"
                  name="Duration"
                  className="px-3 py-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-[120px] w-full md:w-auto">
                <label htmlFor="Category" className="text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="Category"
                  id="Category"
                  className="px-3 py-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                  defaultValue=""
                >
                  <option value="" disabled>
                    -Choose One Category-
                  </option>
                  <option value="adventure">Adventure</option>
                  <option value="beach">Beach</option>
                  <option value="cultural">Cultural</option>
                  <option value="wildlife">Wildlife</option>
                  <option value="family">Family</option>
                  <option value="romantic">Romantic</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[120px] w-full md:w-auto">
                <label htmlFor="Visitors" className="text-sm font-medium mb-1">
                  Total Visitors
                </label>
                <input
                  type="number"
                  placeholder="Visitors"
                  id="Visitors"
                  name="Visitors"
                  className="px-3 py-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-green-700 text-white font-semibold rounded-md shadow hover:bg-green-800 transition w-full md:w-auto"
              >
                <FontAwesomeIcon icon={faSearch} />
                Find Availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
