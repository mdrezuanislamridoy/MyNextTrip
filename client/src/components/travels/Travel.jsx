import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function TravelCard({ travel }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img
        src={travel.images?.[0] || "/default-travel.jpg"}
        alt={travel.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{travel.title}</h3>
        <p className="text-gray-600 line-clamp-2">{travel.description}</p>

        <div className="text-sm text-gray-700 flex flex-wrap gap-3 mt-2">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {travel.location}
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} />
            {travel.duration} days
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faDollarSign} />${travel.price}
          </span>
        </div>

        <Link
          to={`/travel/${travel._id}`}
          className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
