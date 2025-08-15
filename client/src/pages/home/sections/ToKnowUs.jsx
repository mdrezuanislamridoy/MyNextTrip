import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import travelpng from "../../../assets/images/travelpng.png";

export default function ToKnowUs() {
  return (
    <section className="py-16 max-w-7xl m-auto">
      <div className="m-auto md:mx-4  flex flex-col-reverse md:flex-row items-center gap-12 px-4 md:px-0">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h4 className="uppercase text-green-700 font-semibold mb-2 tracking-wide">
            Get To Know Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Experience the world With MyNextTrip
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            blanditiis officia error, esse aperiam delectus!
          </p>
          <h3 className="text-xl font-semibold mb-4 text-green-500 bg-white rounded-md p-4">
            The world is a book and those who do not travel read only one page.
          </h3>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon
                icon={faPlane}
                className="text-green-700 -rotate-45"
              />
              To curate personalized itineraries
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon
                icon={faPlane}
                className="text-green-700 -rotate-45"
              />
              We believe travel fosters understanding
            </li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded text-white font-semibold shadow">
            Discover More
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={travelpng}
            alt="Travel"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
