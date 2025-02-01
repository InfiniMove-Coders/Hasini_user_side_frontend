import React from "react";
import "./Profile.css";
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";

function Profile() {
  return (
    <>
      <div className="w-[100%] h-auto fixed top-[0px] z-[5] md:hidden">
        <Navbar1 />
        <Navbar2 />
      </div>
      <div className="profile border-[black] border-[0px] md:mt-[0px] mt-[40dvw] md:mb-[0px] mb-[40dvw]" >
        <h2 className="profile-title">Welcome! <span className="profile-name">Customer Name</span></h2>
        <div className="profile-form">
          <h3 className="profile-subtitle">Edit Your Profile</h3>
          <div className="profile-fields">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="" />
            </div>
          </div>
          <h3 className="profile-subtitle">Password Changes</h3>
          <div className="profile-fields">
            <div>
              <label>Current Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div>
              <label>New Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div>
              <label>Confirm New Password</label>
              <input type="password" placeholder="********" />
            </div>
          </div>
          <div className="profile-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
