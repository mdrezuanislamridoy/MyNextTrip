import React from "react";
import UserState from "../../state/UserState";

import Traveler from "./traveler/Traveler";
import Admin from "./admin/Admin";
import Agent from "./agent/Agent";

export default function Profile() {
  const { user } = UserState();

  if (!user) {
    return <div>Loading...</div>;
  }

  switch (user.role) {
    case "admin":
      return <Admin user={user} />;
    case "agency":
      return <Agent user={user} />;
    case "traveler":
      return <Traveler user={user} />;

    default:
      return <Traveler user={user} />;
  }
}
