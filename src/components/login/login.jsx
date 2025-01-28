import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLogin = () => {
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
          <h2>Log in to Shop Now</h2>
          <p className="subheading">Enter your details below</p>
          <form className="form">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="input"
            />
            <input type="password" placeholder="Password" className="input" />
            <div className="buttonWrapper">
              <button
                type="button"
                className="button"
                onClick={handleLogin}
              >
                Log In
              </button>
                <a href="#" className="forgotPassword">Forgot Password?</a>
            </div>
          </form>
          <p className="createAccount">
            Don’t have an account,{" "}
            <a href="#" className="createNowLink">
              Create Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
