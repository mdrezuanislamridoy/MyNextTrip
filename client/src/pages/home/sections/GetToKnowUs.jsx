import React from "react";
import travelpng from "../../../assets/images/travelpng.png";

export default function GetToKnowUs() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-0">
      <div className="text-center mb-8 max-w-xl">
        <h4 className="text-xs uppercase text-blue-600 font-semibold mb-2">
          Get To Know Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience the world with MyNextTrip
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ratione
          repudiandae nesciunt voluptatibus eligendi libero!
        </p>
      </div>
      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={travelpng}
            alt="Travel"
            className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-full shadow-lg"
          />
        </div>

        <div className="absolute top-4 left-4 flex flex-col items-center w-28">
          <img
            src="/images/quality1.png"
            alt="Quality"
            className="w-10 h-10 mb-2"
          />
          <h3 className="text-sm font-semibold">Best Guides</h3>
          <p className="text-xs text-gray-500 text-center">
            Expert guides for every trip.
          </p>
        </div>

        <div className="absolute top-4 right-4 flex flex-col items-center w-28">
          <img
            src="/images/quality2.png"
            alt="Quality"
            className="w-10 h-10 mb-2"
          />
          <h3 className="text-sm font-semibold">Unique Places</h3>
          <p className="text-xs text-gray-500 text-center">
            Discover hidden gems worldwide.
          </p>
        </div>

        <div className="absolute bottom-4 left-4 flex flex-col items-center w-28">
          <img
            src="/images/quality3.png"
            alt="Quality"
            className="w-10 h-10 mb-2"
          />
          <h3 className="text-sm font-semibold">Affordable Trips</h3>
          <p className="text-xs text-gray-500 text-center">
            Travel without breaking the bank.
          </p>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col items-center w-28">
          <img
            src="/images/quality4.png"
            alt="Quality"
            className="w-10 h-10 mb-2"
          />
          <h3 className="text-sm font-semibold">24/7 Support</h3>
          <p className="text-xs text-gray-500 text-center">
            We're here for you anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
