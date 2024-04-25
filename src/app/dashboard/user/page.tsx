"use client";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <div className=" min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Account Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Account Information
              </h2>

              <p className="text-gray-600">Email : {user!.email}</p>
              <p className="text-gray-600">Role : {user!.role}</p>
            </div>
            {/* Order History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>

              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-gray-600">Order History</p>
                  {/* Add more details like date, items, and total */}
                  <Link
                    href="/dashboard/user/my-orders"
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
                {/* Add more order summaries here */}
              </div>
            </div>
            {/* Wishlist */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
              {/* Show wishlist items or a message if empty */}
              {/* Add links to view or manage wishlist */}
            </div>
            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
              {/* Show personalized product recommendations */}
              {/* Add links to recommended products */}
            </div>
          </div>
          {/* Account Settings */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            {/* Add options for managing account settings */}
            {/* Add links to edit profile, change password, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
