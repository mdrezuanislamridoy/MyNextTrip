import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripState from "../../state/TripState";
import UserState from "../../state/UserState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faTag,
  faDollarSign,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Travel() {
  const { id } = useParams();
  const { getSingleTravel, travel, removeTravel } = TripState();
  const { user } = UserState();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getTaravel = async () => {
      const res = await getSingleTravel(id);

      console.log(res);

      if (res.status === 200 || res.status === 201) {
        setLoading(false);
      }
    };
    getTaravel();
  }, [id]);

  if (loading || !travel) {
    return (
      <h2 className="text-center py-10 text-xl font-semibold">Loading...</h2>
    );
  }

  const handleDelete = async () => {
    await removeTravel(id);
    navigate("/profile");
  };
  const handleEdit = async () => {};

  const isAgency = user?._id === travel?.agencyId;

  const agency = travel?.agencyId === user?._id;

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-xl shadow mt-6">
      {travel.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {travel.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Image ${i}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2">{travel.title}</h1>
      <p className="text-gray-700 mb-6">{travel.description}</p>

      <div className="grid md:grid-cols-2 gap-6 text-gray-800">
        <div>
          <p>
            <FontAwesomeIcon icon={faDollarSign} className="text-green-600" />{" "}
            Price: ${travel.price}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} className="text-blue-600" />{" "}
            Duration: {travel.duration} days
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600" />{" "}
            Location: {travel.location}
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faTag} className="text-purple-600" />{" "}
            Categories: {travel.categories?.join(", ")}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: {travel.email || "N/A"}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Phone: {travel.number || "N/A"}
          </p>
          <p>Address: {travel.contactAddress || "N/A"}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {isAgency || user.role === "admin" ? (
          <>
            {agency ? (
              <div className="flex gap-4">
                <button
                  onClick={handleEdit}
                  className="cursor-pointer bg-blue-400 rounded-4xl text-white py-2 px-4 "
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="cursor-pointer bg-red-400 rounded-4xl text-white py-2 px-4 "
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>Contract if you want to contribute with this agency</div>
            )}
          </>
        ) : (
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
            Book This Travel
          </button>
        )}
      </div>
    </div>
  );
}
