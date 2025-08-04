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
  faUsers,
  faCalendarAlt,
  faBriefcase,
  faStar,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import UserState from "../../../../state/UserState";
import banner from "../../../../assets/images/background.jpg";

export default function AgencyProfile() {
  const { user } = UserState();
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    website: user.website || "",
    address: user.address || "",
    description: user.description || "",
    foundedDate: user.foundedDate || "",
    teamSize: user.teamSize || "",
    specialization: user.specialization || "",
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
    await updateProfile(editData);
    setShowEdit(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="w-full h-48 sm:h-64 md:h-80 relative bg-cover bg-center shadow-xl rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        >
          <label className="absolute top-4 right-4 z-30 bg-white/90 hover:bg-white transition rounded-lg p-3 shadow-lg cursor-pointer border border-gray-200 flex items-center gap-2">
            <FontAwesomeIcon icon={faCamera} className="text-gray-700" />
            <span className="text-sm font-medium hidden sm:inline">
              Change Cover
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverPhotoChange}
            />
          </label>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="bg-white -mt-20 relative z-10 rounded-xl shadow-lg px-6 py-8 sm:px-10 sm:py-12 flex flex-col md:flex-row items-start md:items-center border border-gray-100">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white bg-gray-100 -mt-24">
            <img
              src={profilePic || "https://placehold.co/200"}
              alt={editData.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://placehold.co/200";
              }}
            />
            <label className="absolute bottom-2 right-2 bg-white/90 hover:bg-gray-100 transition rounded-full p-2 shadow cursor-pointer border border-gray-200">
              <FontAwesomeIcon
                icon={faCamera}
                className="text-gray-700 text-sm"
              />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
          </div>

          <div className="md:ml-8 mt-6 md:mt-0 flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {editData.name}
                </h1>
                {editData.specialization && (
                  <p className="text-blue-600 font-medium mt-1">
                    {editData.specialization}
                  </p>
                )}
              </div>
              <button
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
                onClick={() => setShowEdit(true)}
              >
                <FontAwesomeIcon icon={faEdit} />
                <span>Edit Profile</span>
              </button>
            </div>

            <p className="text-gray-600 mt-3 text-lg">
              {editData.description || "No description added yet."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span className="font-medium">Founded</span>
                </div>
                <p className="text-gray-700 mt-1">
                  {editData.foundedDate || "N/A"}
                </p>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-green-700">
                  <FontAwesomeIcon icon={faUsers} />
                  <span className="font-medium">Team Size</span>
                </div>
                <p className="text-gray-700 mt-1">
                  {editData.teamSize || "N/A"}
                </p>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-purple-700">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span className="font-medium">Projects</span>
                </div>
                <p className="text-gray-700 mt-1">150+</p>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-amber-700">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="font-medium">Rating</span>
                </div>
                <p className="text-gray-700 mt-1">4.9/5.0</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">
                    {editData.email || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">
                    {editData.phone || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium text-gray-800">
                    {editData.address || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="font-medium text-gray-800">
                    {editData.website ? (
                      <a
                        href={
                          editData.website.startsWith("http")
                            ? editData.website
                            : `https://${editData.website}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {editData.website}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Profile Modal */}
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">
                Edit Agency Profile
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 p-1"
                onClick={() => setShowEdit(false)}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            <form onSubmit={handleEditSave} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Agency Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your agency name"
                    value={editData.name}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specialization
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    placeholder="e.g. Digital Marketing, Web Design"
                    value={editData.specialization}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (123) 456-7890"
                    value={editData.phone}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder="www.agency.com"
                    value={editData.website}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Founded Date
                  </label>
                  <input
                    type="date"
                    name="foundedDate"
                    value={editData.birthDate}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Team Size
                  </label>
                  <input
                    type="number"
                    name="teamSize"
                    placeholder="Number of employees"
                    value={editData.teamSize}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Agency St, City"
                    value={editData.address}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Tell us about your agency..."
                  rows={4}
                  value={editData.description}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEdit(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faSave} />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
