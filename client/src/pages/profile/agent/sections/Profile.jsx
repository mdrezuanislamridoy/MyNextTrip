import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEdit,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import UserState from "../../../state/UserState";
import banner from "../../../assets/images/banner.jpg"; // Agency default banner

export default function Profile({ user }) {
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    website: user.website || "",
    address: user.address || "",
    description: user.description || "",
  });

  const {
    setProfile,
    setCover,
    updateProfilePicture,
    updateCoverPicture,
    updateProfile,
  } = UserState();

  const [profilePic, setProfilePic] = useState(user.profilePic || "");
  const [coverPhoto, setCoverPhoto] = useState(user.coverPic || banner);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await setProfile(file);
      const res = await updateProfilePicture();
      const url = res?.data?.user?.profilePic || URL.createObjectURL(file);
      setProfilePic(url);
    }
  };

  const handleCoverPhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await setCover(file);
      const res = await updateCoverPicture();
      const url = res?.data?.user?.coverPic || URL.createObjectURL(file);
      setCoverPhoto(url);
    }
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    await updateProfile(
      editData.name,
      editData.email,
      editData.phone,
      editData.website,
      editData.address,
      editData.description
    );
    setShowEdit(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto">
        <div
          className="w-full h-60 relative bg-cover bg-center shadow-md rounded-2xl overflow-hidden"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        >
          <label className="absolute top-4 right-4 bg-white/80 hover:bg-white transition rounded-full p-3 shadow cursor-pointer border border-gray-200">
            <FontAwesomeIcon icon={faCamera} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverPhotoChange}
            />
          </label>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="bg-white -mt-20 relative z-10 rounded-2xl shadow-lg px-8 py-10 flex flex-col md:flex-row items-center border border-gray-100">
          <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-100">
            <img
              src={profilePic}
              alt="Agency"
              className="w-full h-full object-cover"
            />
            <label className="absolute bottom-2 right-2 bg-white/90 hover:bg-gray-100 transition rounded-full p-2 shadow cursor-pointer border border-gray-200">
              <FontAwesomeIcon icon={faCamera} className="text-gray-700" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
          </div>
          <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h2 className="text-3xl font-bold text-gray-800">
                {editData.name}
              </h2>
              <button
                className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700"
                onClick={() => setShowEdit(true)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
            <p className="text-gray-600 mt-2 text-lg">
              {editData.description || "No description added."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{editData.email || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>{editData.phone || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{editData.address || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGlobe} />
                <span>{editData.website || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowEdit(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h3 className="text-xl font-semibold mb-6 text-center">
              Edit Agency Profile
            </h3>
            <form onSubmit={handleEditSave} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Agency Name"
                value={editData.name}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={editData.email}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={editData.phone}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={editData.website}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={editData.address}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <textarea
                name="description"
                placeholder="Short Description"
                rows={3}
                value={editData.description}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={() => setShowEdit(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
