import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; // ✅ Correct icon

export default function PopularTour() {
  const tours = [
    {
      id: 1,
      image: "/images/california.jpg",
      location: "California",
      title: "Sunny California Adventure",
      rating: 4.8,
      price: "$1200",
    },
    {
      id: 2,
      image: "/images/paris.jpg",
      location: "Paris",
      title: "Romantic Paris Getaway",
      rating: 4.7,
      price: "$1500",
    },
    {
      id: 3,
      image: "/images/tokyo.jpg",
      location: "Tokyo",
      title: "Tokyo City Lights",
      rating: 4.6,
      price: "$1300",
    },
    {
      id: 4,
      image: "/images/sydney.jpg",
      location: "Sydney",
      title: "Sydney Opera Tour",
      rating: 4.5,
      price: "$1100",
    },
    {
      id: 5,
      image: "/images/rome.jpg",
      location: "Rome",
      title: "Historic Rome",
      rating: 4.9,
      price: "$1400",
    },
    {
      id: 6,
      image: "/images/london.jpg",
      location: "London",
      title: "London Explorer",
      rating: 4.4,
      price: "$1250",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i <= Math.round(rating) ? "#43a047" : "#ccc" }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h4 className="text-green-700 mb-2 font-bold text-base tracking-wide">
            Popular Tour
          </h4>
          <h2 className="font-bold mb-8 text-3xl md:text-4xl text-green-900 mx-auto leading-tight">
            See Destination You'll Love To Visit
          </h2>
        </div>

        <div className="mb-8 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 rounded-full border-none bg-green-600 text-white font-bold shadow-md cursor-pointer">
            All
          </button>
          <button className="px-6 py-2 rounded-full border border-green-600 bg-white text-green-600 font-bold cursor-pointer">
            Adventure
          </button>
          <button className="px-6 py-2 rounded-full border border-green-600 bg-white text-green-600 font-bold cursor-pointer">
            Romantic
          </button>
          <button className="px-6 py-2 rounded-full border border-green-600 bg-white text-green-600 font-bold cursor-pointer">
            Historic
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <p className="text-green-700 mb-2 flex items-center gap-2 font-medium">
                  <FontAwesomeIcon icon={faLocationDot} /> {tour.location}
                </p>
                <h3 className="text-lg mb-2 text-green-900 font-semibold">
                  {tour.title}
                </h3>
                <div className="mb-2 flex items-center">
                  {renderStars(tour.rating)}
                  <span className="text-gray-500 text-sm ml-2">
                    {tour.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="text-green-600 font-bold text-base">
                    {tour.price}
                  </h4>
                  <button className="px-4 py-2 rounded-lg border-none bg-green-700 text-white cursor-pointer font-bold shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
