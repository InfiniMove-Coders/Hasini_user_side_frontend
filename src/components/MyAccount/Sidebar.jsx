import React from "react";
import "./Sidebar.css";

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="sidebar-container border-[black] border-[0px]">
      <h3 className="sidebar-title">Manage My Account</h3>
      <button
        className={`sidebar-btn ${activeTab === "profile" ? "active" : ""}`}
        onClick={() => setActiveTab("profile")}
      >
        My Profile
      </button>
      <h3 className="sidebar-title">Manage Orders</h3>
      <button
        className={`sidebar-btn ${activeTab === "orders" ? "active" : ""}`}
        onClick={() => setActiveTab("orders")}
      >
        My Orders
      </button>
      <button
        className={`sidebar-btn ${activeTab === "cancellations" ? "active" : ""}`}
        onClick={() => setActiveTab("cancellations")}
      >
        My Cancellations
      </button>
    </div>
  );
}

export default Sidebar;
