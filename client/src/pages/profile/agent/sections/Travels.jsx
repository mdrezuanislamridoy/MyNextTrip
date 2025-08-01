import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import TripState from "../../../../state/TripState";
import Travel from "../../../../components/travels/Travel";
import TravelNotFound from "../components/TravelNotFound";
import AddTravelForm from "../components/AddTravelForm";

export default function Travels() {
  const [isAdding, setIsAdding] = useState(false);
  const { getAgencyTravels, agencyTravels } = TripState();

  useEffect(() => {
    getAgencyTravels();
  }, []);

  return (
    <div className="bg-gray-50 h-full p-2 rounded-xl">
      <div className="flex flex-col items-center md:justify-between md:flex-row ">
        <div className="w-full md:w-2/3 ">
          <h2 className="text-3xl font-medium">Your Travel Packages</h2>
          <p>Manage and showcase your travel offerings</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="cursor-pointer bg-green-600 py-2 px-2 w-full md:w-1/3 rounded-full text-white"
        >
          <FontAwesomeIcon icon={faPlus} /> Add New Travel
        </button>
      </div>

      {!agencyTravels || agencyTravels.length === 0 ? (
        <TravelNotFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {agencyTravels.map((travel) => (
            <Travel key={travel._id} travel={travel} />
          ))}
        </div>
      )}

      {isAdding && (
        <div className="absolute top-10 md:top-20 left-0 w-full h-full bg-gray-300/50">
          <AddTravelForm
            setIsAdding={setIsAdding}
            getAgencyTravels={getAgencyTravels}
          />
        </div>
      )}
    </div>
  );
}
