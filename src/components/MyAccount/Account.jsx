import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

function Account() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f9f9f9" }}>
        {activeTab === "profile" && <Profile />}
        {/* Add other tab components as needed */}
      </div>
    </div>
  );
}

export default Account;
