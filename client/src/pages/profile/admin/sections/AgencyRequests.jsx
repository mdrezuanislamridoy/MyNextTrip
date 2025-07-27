import React, { useEffect, useState } from "react";
import {
  getPendingAgencies,
  approveAgency,
  rejectAgency,
} from "../api/adminAPI";

export default function AgencyRequests() {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    fetchPending();
  }, []);

  const fetchPending = async () => {
    const res = await getPendingAgencies();
    setAgencies(res);
  };

  const handleApprove = async (id) => {
    await approveAgency(id);
    fetchPending();
  };

  const handleReject = async (id) => {
    await rejectAgency(id);
    fetchPending();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Pending Agency Requests</h2>
      {agencies.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency) => (
              <tr key={agency._id}>
                <td className="p-2">{agency.name}</td>
                <td className="p-2">{agency.email}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleApprove(agency._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(agency._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
