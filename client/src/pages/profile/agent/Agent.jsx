import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./sections/Profile";
import Travels from "./sections/Travels";
import Bookings from "./sections/Bookings";
import FinishedTravels from "./sections/FinishedTravels";
import AdminState from "../../../state/AdminState";

export default function Agent() {
  const { selectedPortion } = AdminState();

  const renderSection = () => {
    switch (selectedPortion) {
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
    <div className="block md:flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">{renderSection()}</div>
    </div>
  );
}
