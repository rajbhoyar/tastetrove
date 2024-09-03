import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../utils/userSlice"; // Assuming you have this action
import { AiOutlineUser } from "react-icons/ai";
import { FaSave, FaEdit } from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";

function Profile() {
  const dispatch = useDispatch();
  const userProfile = useSelector((store) => store.user.profile);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (userProfile) {
      setProfileData(userProfile);
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateUserProfile(profileData));
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
        <header className="bg-blue-800 text-white p-6 rounded-t-lg">
          <h1 className="text-4xl font-extrabold">Profile</h1>
          <button
            className={`absolute top-6 right-6 px-4 py-2 rounded-lg shadow-md ${
              isEditing ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-700"
            } hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center`}
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaEdit className="mr-2" />
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </header>
        <div className="p-8">
          <div className="flex items-start mb-8">
            <AiOutlineUser className="w-20 h-20 text-blue-800 mr-6" />
            {isEditing ? (
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <button
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center"
                  onClick={handleSave}
                >
                  <FaSave className="mr-2" />
                  Save
                </button>
              </div>
            ) : (
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AiOutlineUser className="w-6 h-6 text-gray-600 mr-2" />
                    <p className="text-lg font-semibold">
                      <span className="text-gray-700">Name:</span>{" "}
                      {userProfile?.name || "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineMail className="w-6 h-6 text-gray-600 mr-2" />
                    <p className="text-lg font-semibold">
                      <span className="text-gray-700">Email:</span>{" "}
                      {userProfile?.email || "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineLocationMarker className="w-6 h-6 text-gray-600 mr-2" />
                    <p className="text-lg font-semibold">
                      <span className="text-gray-700">Address:</span>{" "}
                      {userProfile?.address || "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <HiOutlinePhone className="w-6 h-6 text-gray-600 mr-2" />
                    <p className="text-lg font-semibold">
                      <span className="text-gray-700">Phone:</span>{" "}
                      {userProfile?.phone || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
