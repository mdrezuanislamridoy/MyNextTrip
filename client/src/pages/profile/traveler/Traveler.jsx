import TravelerState from "../../../state/TravelerState";
import CanceledTravels from "./sections/CanceledTravels";
import CompletedTravels from "./sections/CompletedTravels";
import MyBookings from "./sections/MyBookings";
import ProfileDetails from "./sections/ProfileDetails";

export default function Traveler({ user }) {
  const { selectedSection, setSelectedSection } = TravelerState();

  const Sections = () => {
    switch (selectedSection) {
      case "bookings":
        return <MyBookings />;
      case "completed":
        return <CompletedTravels />;
      case "canceled":
        return <CanceledTravels />;
      default:
        return <MyBookings />;
    }
  };

  console.log("hola");

  return (
    <>
      <ProfileDetails user={user} />

      <div className="w-full md:w-3xl xl:w-7xl m-auto ">
        <div className="flex justify-center gap-4 my-2 bg-slate-100 py-2 rounded-2xl">
          <button
            className={`bg-green-300 px-4 py-2 rounded-3xl cursor-pointer ${
              selectedSection === "bookings" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              setSelectedSection("bookings");
            }}
          >
            My Bookings
          </button>
          <button
            className={`bg-green-300 px-4 py-2 rounded-3xl cursor-pointer ${
              selectedSection === "completed" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              setSelectedSection("completed");
            }}
          >
            Completed Travels
          </button>
          <button
            className={`bg-green-300 px-4 py-2 rounded-3xl cursor-pointer ${
              selectedSection === "canceled" ? "bg-green-400" : ""
            }`}
            onClick={() => {
              setSelectedSection("canceled");
            }}
          >
            Canceled Travels
          </button>
        </div>
      </div>

      <div className="w-full md:w-3xl xl:w-7xl m-auto bg-slate-200 p-2">
        <Sections />
      </div>
    </>
  );
}
