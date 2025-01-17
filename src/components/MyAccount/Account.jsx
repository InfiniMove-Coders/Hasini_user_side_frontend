import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/footer";
import Orders from "../orders/Orders";
import Cancellations from "../cancellations/Cancellations";


function Account() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div className='w-[100%] h-auto fixed top-[0px] z-[2]'>
        <Navbar1 />
        <Navbar2 />
      </div >
      <p className="px-[30px] pt-[30px] mt-[120px]" >
        <span className="opacity-[0.5]">Home /</span>
        <span className="opacity-[1]"> MyAccount</span>
      </p>
      <div className="h-atuo flex mt-[20px] mb-[30px] border-[black] border-[0px] flex-row items-start">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div style={{ flex: 1, padding: "0px" }}>
          {activeTab === "profile" && <Profile />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "cancellations" && <Cancellations />}
          {/* Add other tab components as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
