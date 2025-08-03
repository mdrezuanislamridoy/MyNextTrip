import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faBan,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserState from "../../state/UserState";

export default function AgencyCard({
  agency,
  deleteAgencyId,
  setDeleteAgencyId,
  blockAgencyId,
  setBlockAgencyId,
  isDeleting,
  setIsDeleting,
  isBlocking,
  setIsBlocking,
  handleBlock,
  handleDelete,
}) {
  const truncate = (text, maxLength) => {
    if (!text) return "No description provided.";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="bg-white shadow-sm border rounded-2xl p-5 w-full max-w-md mx-auto hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-4">
        <Link to={`/agency/${agency._id}`}>
          <div className="w-16 h-16 rounded-full overflow-hidden border hover:scale-105 transition">
            <img
              src={agency.profilePic || "/default-avatar.png"}
              alt={agency.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <div className="flex flex-col">
          <Link
            to={`/agency/${agency._id}`}
            className="text-lg font-bold text-gray-800 hover:text-blue-600 transition"
          >
            {agency.name}
          </Link>

          {agency.address && (
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {agency.address}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-700 mt-4 text-sm leading-relaxed">
        {truncate(agency.description, 120)}
      </p>

      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={() => {
            setBlockAgencyId(agency._id);
            setIsBlocking(true);
          }}
          className="text-sm px-3 py-1 rounded-lg bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition"
        >
          <FontAwesomeIcon icon={faBan} className="mr-1" />
          Block
        </button>

        <button
          onClick={() => {
            setIsDeleting(true);
            setDeleteAgencyId(agency._id);
          }}
          className="text-sm px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          <FontAwesomeIcon icon={faTrash} className="mr-1" />
          Delete
        </button>
      </div>

      {/*Block Model */}
      {isBlocking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full border border-green-200">
            <div className="flex flex-col items-center">
              <i className="fas fa-leaf text-4xl text-green-500 mb-3"></i>
              <h3 className="text-xl font-semibold mb-4 text-green-800 text-center">
                Block this agency ?
              </h3>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleBlock(blockAgencyId)}
                  className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-semibold shadow"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setIsBlocking(false);
                    setBlockAgencyId(null);
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

      {/* Delete Modal */}
      {isDeleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full border border-green-200">
            <div className="flex flex-col items-center">
              <i className="fas fa-leaf text-4xl text-green-500 mb-3"></i>
              <h3 className="text-xl font-semibold mb-4 text-green-800 text-center">
                Delete this agency?
              </h3>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleDelete(deleteAgencyId)}
                  className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-semibold shadow"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setIsDeleting(false);
                    setDeleteAgencyId(null);
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
    </div>
  );
}
