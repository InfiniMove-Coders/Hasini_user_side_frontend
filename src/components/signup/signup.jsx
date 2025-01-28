import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./signup.css";

const Signup = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSignup = () => {
    setIsAnimating(true);

    setTimeout(() => {
      window.location.href = "/loading-page"; 
    }, 8000);
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left">
        <img
          src="src/assets/images/ganesh/shopping-cart-NbZTs86IlT.png"
          alt="Cart"
          className="image"
        />
      </div>

      {/* Right Section */}
      <div className="right">
        <div className={`formContainer ${isAnimating ? "hidden" : ""}`}>
          <h2>Create an account</h2>
          <p className="subheading">Enter your details below</p>
          <form className="form">
            <input type="text" placeholder="Name" className="input" />
            <input type="text" placeholder="Email or Phone Number" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input type="password" placeholder="Confirm Password" className="input" />

            <div className="buttonWrapper">
              <button type="button" className="button" onClick={handleSignup}>
                Create Account
              </button>
            </div>

            <button type="button" className="googleButton">
              <img src="src/assets/images/ganesh/google.png" alt="Google Icon" className="googleIcon" />
              Sign up with Google
            </button>
          </form>
          
          <p className="loginText">
            Already have an account?{" "}
            <span className="loginLink" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
