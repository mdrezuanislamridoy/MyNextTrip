import React, { useState } from "react";
import AdminProfile from "./sections/AdminProfile";
import AgencyRequests from "./sections/AgencyRequests";

export default function Admin() {
  const [section, setSection] = useState("profile");

  const renderSection = () => {
    switch (section) {
      case "profile":
        return <AdminProfile />;
      case "requests":
        return <AgencyRequests />;
      default:
        return <AdminProfile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-60 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <button onClick={() => setSection("profile")} className="block mb-4">
          Profile
        </button>
        <button onClick={() => setSection("requests")} className="block">
          Agency Requests
        </button>
      </aside>
      <main className="flex-1 p-6">{renderSection()}</main>
    </div>
  );
}
