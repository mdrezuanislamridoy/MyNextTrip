import React, { useState } from "react";
import TripState from "../../../../state/TripState";

export default function AddTravelForm({ setIsAdding }) {
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    categories: [],
    duration: 0,
    price: 0,
  });

  const { addTravel, error } = TripState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryKeyDown = (e) => {
    if (e.key === "Enter" && categoryInput.trim() !== "") {
      e.preventDefault();
      if (!categories.includes(categoryInput.trim())) {
        setCategories([...categories, categoryInput.trim()]);
        setCategoryInput("");
      }
    }
  };

  const removeCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      categories,
    });

    await addTravel(formData);

    setIsAdding(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Travel Package</h2>
      {error ? <p className="text-red-600 font-medium mb-4">{error}</p> : ""}
      <form className="space-y-5">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Travel Title
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            name="title"
            placeholder="Enter your travel title"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            placeholder="Describe your travel package"
            rows={3}
            id="description"
            className="w-full border px-3 py-2 rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <div>
          <label htmlFor="location" className="block font-medium mb-1">
            Travel Location
          </label>
          <input
            value={formData.location}
            onChange={handleChange}
            type="text"
            name="location"
            id="location"
            placeholder="Enter your travel title"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="category">
            Categories
          </label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Type and press Enter to add category"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            onKeyDown={handleCategoryKeyDown}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {categories.map((cat, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {cat}
                <button
                  type="button"
                  onClick={() => removeCategory(index)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="price" className="block font-medium mb-1">
            Price (in $)
          </label>
          <input
            value={formData.price}
            onChange={handleChange}
            type="number"
            name="price"
            id="price"
            placeholder="e.g. 500"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="duration" className="block font-medium mb-1">
            Duration (in Days)
          </label>
          <input
            value={formData.duration}
            onChange={handleChange}
            type="number"
            name="duration"
            id="duration"
            placeholder="e.g. 500"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex gap-2">
          <button
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit Travel Package
          </button>
        </div>
      </form>
    </div>
  );
}
