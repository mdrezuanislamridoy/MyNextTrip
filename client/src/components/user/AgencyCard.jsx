import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faBan,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function AgencyCard({ agency, onDelete, onBlock }) {
  const truncate = (text, maxLength) => {
    if (!text) return "No description provided.";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="bg-white shadow-sm border rounded-2xl p-5 w-full max-w-md mx-auto hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4">
        <Link to={`/agency/${agency._id}`}>
          <div className="w-16 h-16 rounded-full overflow-hidden border hover:scale-105 transition">
            <img
              src={agency.profilePic || "/default-avatar.png"}
              alt={agency.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <div className="flex flex-col">
          <Link
            to={`/agency/${agency._id}`}
            className="text-lg font-bold text-gray-800 hover:text-blue-600 transition"
          >
            {agency.name}
          </Link>

          {agency.address && (
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {agency.address}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-700 mt-4 text-sm leading-relaxed">
        {truncate(agency.description, 120)}
      </p>

      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={() => onBlock(agency._id)}
          className="text-sm px-3 py-1 rounded-lg bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition"
        >
          <FontAwesomeIcon icon={faBan} className="mr-1" />
          Block
        </button>

        <button
          onClick={() => onDelete(agency._id)}
          className="text-sm px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          <FontAwesomeIcon icon={faTrash} className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
}
