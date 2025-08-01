import { useEffect, useState } from "react";
import TripState from "../../state/TripState";
import TravelCard from "../../components/travels/Travel";

export default function Travels() {
  const { travels, getAllTravels } = TripState();

  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchTravels = async () => {
      setIsLoading(true);
      const res = await getAllTravels();
      if (res?.status === 200 || res?.status === 201) {
        return setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchTravels();
  }, []);

  if (isLoading) {
    return <h3 className="text-center py-10 text-lg">Loading...</h3>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">All Travel Packages</h2>

        {travels?.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No Travel Found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {travels.map((travel) => (
              <TravelCard key={travel._id} travel={travel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
