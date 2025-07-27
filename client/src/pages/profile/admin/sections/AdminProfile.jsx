import React from "react";
import useAuth from "../hooks/useAuth"; // Replace with your actual auth hook

export default function AdminProfile() {
  const { user } = useAuth(); // Should return the logged-in admin user

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Admin Profile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}
