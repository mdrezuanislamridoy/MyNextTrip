import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./sections/Profile";
import Travels from "./sections/Travels";
import Bookings from "./sections/Bookings";
import FinishedTravels from "./sections/FinishedTravels";

export default function Agent() {
  const [section, setSection] = useState("profile");

  const renderSection = () => {
    switch (section) {
      case "profile":
        return <Profile></Profile>;
      case "travels":
        return <Travels></Travels>;
      case "bookings":
        return <Bookings />;
      case "finished":
        return <FinishedTravels />;
      default:
        break;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setSection={setSection} />
      <div className="flex-1 p-6">{renderSection()}</div>
    </div>
  );
}
