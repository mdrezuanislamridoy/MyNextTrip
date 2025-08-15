import React, { useEffect, useState } from "react";
import AdminState from "../../../../state/AdminState";

export default function AgencyRequests() {
  const { agencies, getPendingAgencies, approveAgency, rejectAgency, message } =
    AdminState();
  const [isApprove, setIsApprove] = useState(false);
  const [isRejection, setIsRejection] = useState(false);
  const [approveAgencyId, setApproveAgencyId] = useState(null);
  const [rejectAgencyId, setRejectAgencyId] = useState(null);

  const fetchPending = React.useCallback(async () => {
    await getPendingAgencies();
    console.log(message);
  }, [getPendingAgencies, message]);

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  const handleApprove = async (id) => {
    await approveAgency(id);
    console.log(message);
    fetchPending();
    setApproveAgencyId(null);
    setIsApprove(false);
    fetchPending();
  };

  const handleReject = async (id) => {
    await rejectAgency(id);
    console.log(message);
    setIsRejection(false);
    setRejectAgencyId(null);
    fetchPending();
  };

  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full mx-auto max-w-7xl border border-green-200">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-green-800">
        <i className="fas fa-leaf text-green-600"></i>
        Pending Agency Requests
      </h2>
      {!agencies || agencies.length === 0 ? (
        <div className="flex flex-col items-center py-12">
          <i className="fas fa-seedling text-5xl text-green-400 mb-4"></i>
          <p className="text-lg text-green-700 font-medium">
            No pending requests.
          </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full border text-left bg-white/80">
              <thead>
                <tr className="bg-green-100 text-green-900">
                  <th className="p-3 font-semibold">Name</th>
                  <th className="p-3 font-semibold">Email</th>
                  <th className="p-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {agencies &&
                  agencies.map((agency) => (
                    <tr
                      key={agency._id}
                      className="hover:bg-green-50 transition"
                    >
                      <td className="p-3">{agency.name}</td>
                      <td className="p-3">{agency.email}</td>
                      <td className="p-3 flex gap-2">
                        <button
                          onClick={() => {
                            setIsApprove(true);
                            setApproveAgencyId(agency._id);
                          }}
                          className="flex items-center gap-1 px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded shadow transition"
                        >
                          <i className="fas fa-check-circle"></i> Approve
                        </button>
                        <button
                          onClick={() => {
                            setIsRejection(true);
                            setRejectAgencyId(agency._id);
                          }}
                          className="flex items-center gap-1 px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded shadow transition"
                        >
                          <i className="fas fa-times-circle"></i> Reject
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Approve Modal */}
          {isApprove && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full border border-green-200">
                <div className="flex flex-col items-center">
                  <i className="fas fa-leaf text-4xl text-green-500 mb-3"></i>
                  <h3 className="text-xl font-semibold mb-4 text-green-800 text-center">
                    Approve this agency?
                  </h3>
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => handleApprove(approveAgencyId)}
                      className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-semibold shadow"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setIsApprove(false);
                        setApproveAgencyId(null);
                      }}
                      className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-green-800 rounded font-semibold shadow"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Reject Modal */}
          {isRejection && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full border border-red-200">
                <div className="flex flex-col items-center">
                  <i className="fas fa-tree text-4xl text-red-500 mb-3"></i>
                  <h3 className="text-xl font-semibold mb-4 text-red-800 text-center">
                    Reject this agency?
                  </h3>
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => handleReject(rejectAgencyId)}
                      className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-semibold shadow"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setIsRejection(false);
                        setRejectAgencyId(null);
                      }}
                      className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-red-800 rounded font-semibold shadow"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
