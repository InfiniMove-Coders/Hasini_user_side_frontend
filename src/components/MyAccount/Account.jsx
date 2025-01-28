import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/footer";
import Orders from "../orders/Orders";
import Cancellations from "../cancellations/Cancellations";

function Account() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-[100%] h-auto fixed top-[0px] z-[2]">
        <Navbar1 />
        <Navbar2 />
      </div>
      <p className="px-[30px] pt-[30px] mt-[120px]">
        <span className="opacity-[0.5]">Home /</span>
        <span className="opacity-[1]"> My Account</span>
      </p>
      <div className="h-auto flex mt-[20px] mb-[30px] border-[black] border-[0px] flex-col items-start">
        {!isMobile ? (
          <div className="flex flex-row w-full">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div style={{ flex: 1, padding: "0px" }}>
              {activeTab === "profile" && <Profile />}
              {activeTab === "orders" && <Orders />}
              {activeTab === "cancellations" && <Cancellations />}
            </div>
          </div>
        ) : (
          // Mobile View
          <div className="w-full px-4">
            <select
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="profile">Edit Profile</option>
              <option value="orders">Orders</option>
              <option value="cancellations">Cancellations</option>
            </select>
            <div className="mt-4">
              {activeTab === "profile" && (
                <form className="w-full flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="font-medium mb-1 text-sm text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Md"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium mb-1 text-sm text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Ishrath"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium mb-1 text-sm text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="ish@gmail.com"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium mb-1 text-sm text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-medium mb-1 text-sm text-gray-700">
                      Password Changes
                    </label>
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100 mb-2"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100 mb-2"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="border border-gray-300 p-2 rounded-md w-full bg-gray-100"
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="text-red-500 font-semibold">
                      Cancel
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
                      Save Changes
                    </button>
                  </div>
                </form>
              )}
              {activeTab === "orders" && <Orders />}
              {activeTab === "cancellations" && <Cancellations />}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Account;
