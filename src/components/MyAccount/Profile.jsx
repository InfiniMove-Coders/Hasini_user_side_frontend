import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile-title">Welcome! <span className="profile-name">Md Ishrath</span></h2>
      <div className="profile-form">
        <h3 className="profile-subtitle">Edit Your Profile</h3>
        <div className="profile-fields">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Md" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Ishrath" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="ish@gmail.com" />
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
  );
}

export default Profile;
