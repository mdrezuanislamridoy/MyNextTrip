import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TravelNotFound() {
  return (
    <div>
      <div className="flex flex-col items-center text-center m-4 bg-white py-6">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-6xl my-4 text-green-500"
        />
        <h3 className="text-2xl font-semibold py-2">No Travel Packages Yet</h3>
        <p>
          Start by adding your first travel package to showcase to customers
        </p>
        <button className="cursor-pointer bg-green-600 py-2 px-4 my-2  rounded-full text-white ">
          <FontAwesomeIcon icon={faPlus} /> Create Your First Package
        </button>
      </div>
    </div>
  );
}
