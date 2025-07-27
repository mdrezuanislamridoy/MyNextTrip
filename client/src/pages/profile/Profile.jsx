import React from "react";
import useAuthStore from "../../state/UserState";
import Agent from "./agent/Agent";
import Traveler from "./traveler/Traveler";
import { useNavigate } from "react-router-dom";
import Admin from "./admin/Admin";

export default function Profile() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // or redirect to login
  }

  switch (user.role) {
    case "admin":
      return <Admin user={user} />;
    case "traveler":
      return <Traveler user={user} />;
    case "agecy":
      return <Agent user={user} />;
    default:
      return <Traveler />;
  }
}
