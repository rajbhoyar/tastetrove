import React from "react";

function User() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Name: Raj</h2>
        <h3 className="text-2xl text-gray-600 mb-2">Location: Pune</h3>
        <h4 className="text-lg text-gray-500">
          Contact:{" "}
          <a
            href="mailto:Rajbhoyar21@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Rajbhoyar21@gmail.com
          </a>
        </h4>
      </div>
    </div>
  );
}

export default User;
