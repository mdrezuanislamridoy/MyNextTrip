export default function Sidebar({ setSection }) {
  return (
    <div className="w-64 bg-white shadow-lg p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <button
        onClick={() => setSection("profile")}
        className="block w-full text-left hover:text-blue-500 cursor-pointer"
      >
        Profile
      </button>
      <button
        onClick={() => setSection("travels")}
        className="block w-full text-left hover:text-blue-500 cursor-pointer"
      >
        Travels
      </button>
      <button
        onClick={() => setSection("bookings")}
        className="block w-full text-left hover:text-blue-500 cursor-pointer"
      >
        Bookings
      </button>
      <button
        onClick={() => setSection("finished")}
        className="block w-full text-left hover:text-blue-500 cursor-pointer"
      >
        Finished Travel
      </button>
    </div>
  );
}
