import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/footer";


function Account() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div className='w-[100%] h-auto fixed top-[0px]'>
        <Navbar1 />
        <Navbar2 />
      </div >
      <div className="h-atuo flex mt-[130px] mb-[30px] border-[black] border-[0px] flex-row items-start">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div style={{ flex: 1, padding: "0px", backgroundColor: "#f9f9f9" }}>
          {activeTab === "profile" && <Profile />}
          {/* Add other tab components as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
