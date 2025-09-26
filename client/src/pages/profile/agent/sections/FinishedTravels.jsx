import { useEffect, useState } from "react";
import BookingStore from "../../../../state/BookingStore";

export default function FinishedTravels() {
  const { agencyFinishedTravel } = BookingStore();

  const [completedTrips, setCompletedTrips] = useState([]);

  useEffect(() => {
    const fetchFinishedTravels = async () => {
      const res = await agencyFinishedTravel();
      setCompletedTrips(res);
    };
    fetchFinishedTravels();
  }, []);

  if (completedTrips.length === 0) {
    return <div>No Trip Found</div>;
  }
  return completedTrips;
}
