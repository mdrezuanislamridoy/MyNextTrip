import AdminState from "../../../../state/AdminState";

export default function Sidebar() {
  const { setSelectedPortion, selectedPortion } = AdminState();

  return (
    <div className="w-full md:w-64 bg-white shadow-lg p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <div className="flex flex-row md:flex-col flex-wrap">
        <button
          onClick={() => {
            setSelectedPortion("profile");
          }}
          className={`${
            selectedPortion === "profile" ? "bg-gray-200" : ""
          } block w-1/2 sm:w-1/3 md:w-full text-left hover:text-blue-500 p-1 rounded cursor-pointer `}
        >
          Profile
        </button>
        <button
          onClick={() => {
            setSelectedPortion("travels");
          }}
          className={`${
            selectedPortion === "travels" ? "bg-gray-200" : ""
          } block w-1/2 sm:w-1/3 md:w-full text-left hover:text-blue-500 p-1 rounded cursor-pointer`}
        >
          Travels
        </button>
        <button
          onClick={() => {
            setSelectedPortion("bookings");
          }}
          className={`${
            selectedPortion === "bookings" ? "bg-gray-200" : ""
          } block w-1/2 sm:w-1/3 md:w-full text-left hover:text-blue-500 p-1 rounded cursor-pointer`}
        >
          Bookings
        </button>
        <button
          onClick={() => {
            setSelectedPortion("finished");
          }}
          className={`${
            selectedPortion === "finished" ? "bg-gray-200" : ""
          } block w-1/2 sm:w-1/3 md:w-full text-left hover:text-blue-500 p-1 rounded cursor-pointer`}
        >
          Finished Travel
        </button>
      </div>
    </div>
  );
}
