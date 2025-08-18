import React from "react";

export default function Destinations() {
  const destinations = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "Paris",
      location: "France",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "Tokyo",
      location: "Japan",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "New York",
      location: "USA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "Sydney",
      location: "Australia",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "Rome",
      location: "Italy",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "London",
      location: "UK",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "Dubai",
      location: "UAE",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      name: "Istanbul",
      location: "Turkey",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 bg-gray-100 m-2 rounded-2xl">
      <h4 className="text-xs uppercase font-semibold text-blue-600 mb-2 text-center">
        Top Destinations
      </h4>
      <h2 className="text-3xl font-bold mb-4 text-center">
        Search a best place in the world
      </h2>
      <p className="text-gray-600 mb-8 text-center md:w-2/3 m-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
        reprehenderit odio dignissimos nemo deserunt nisi hic quaerat esse
        placeat consequatur.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="w-12 h-12 mb-3 object-contain"
            />
            <h3 className="text-lg font-medium">{dest.name}</h3>
            <span className="location text-xs text-gray-500">
              {dest.location}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
