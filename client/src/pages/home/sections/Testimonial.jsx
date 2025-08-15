import React from "react";

const testimonials = [
  {
    name: "John Doe",
    profession: "Photographer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amazing experience! Highly recommended for all travelers.",
  },
  {
    name: "Jane Smith",
    profession: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "A trip to remember. The service was top-notch!",
  },
  {
    name: "Alex Lee",
    profession: "Adventurer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Loved every moment. Will book again soon!",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = React.useState(0);

  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">What Travelers Say</h2>
        <div className="relative">
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-4 border-blue-500 mb-4 object-cover"
            />
            <p className="text-gray-700 mb-4">
              &quot;{testimonials[current].text}&quot;
            </p>
            <div>
              <span className="font-semibold">
                {testimonials[current].name}
              </span>
              <span className="text-sm text-gray-500 block">
                {testimonials[current].profession}
              </span>
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
