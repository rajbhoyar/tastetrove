import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPencilAlt,
} from "react-icons/fa";
import { updateUserProfile } from "../utils/userSlice";

function Profile() {
  const profile = useSelector((store) => store.user.profile);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editDetails, setEditDetails] = useState(profile);

  if (!profile) {
    return <div className="text-center p-4">Loading...</div>; // Handle the case when data is not yet available
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(updateUserProfile(editDetails));
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-4xl font-semibold">
            {profile.name ? profile.name.charAt(0).toUpperCase() : "N/A"}
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md shadow-md flex items-center"
            onClick={() => setIsEditing(true)}
          >
            <FaPencilAlt className="mr-2" />
            Edit
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          User Profile
        </h2>
        <div className="space-y-4">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
            <FaUser className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-gray-600 text-lg font-medium">Name</h3>
              <p className="text-gray-800 text-base">{profile.name || "N/A"}</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
            <FaEnvelope className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-gray-600 text-lg font-medium">Email</h3>
              <p className="text-gray-800 text-base">
                {profile.email || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-gray-600 text-lg font-medium">Address</h3>
              <p className="text-gray-800 text-base">
                {profile.address || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
            <FaPhone className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-gray-600 text-lg font-medium">Phone</h3>
              <p className="text-gray-800 text-base">
                {profile.phone || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Modal for Editing */}
        {isEditing && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
              <label className="block mb-4">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={editDetails.name}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={editDetails.email}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Address</span>
                <input
                  type="text"
                  name="address"
                  value={editDetails.address}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={editDetails.phone}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
