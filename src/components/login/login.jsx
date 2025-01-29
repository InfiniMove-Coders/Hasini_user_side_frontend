import React from "react";
import "./login.css";
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/footer";

const Login = () => {
	return (
		<>
			{/* Navbar Section */}
			<div className="w-[100%] h-auto fixed top-[0px] z-[5]">
				<Navbar1 />
				<Navbar2 />
			</div>

			{/* Main Container */}
			<div className="container">
				{/* Left Section - Shopping Cart Image */}
				<div className="left">
					<img
						src="src/assets/images/ganesh/shopping-cart-NbZTs86IlT.png"
						alt="Cart"
						className="image"
					/>
				</div>

				{/* Right Section - Login Form */}
				<div className="right">
					<div className="formContainer">
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
								<button type="button" className="button">
									Log In
								</button>
								<a href="#" className="forgotPassword">
									Forgot Password?
								</a>
							</div>
						</form>
						<p className="createAccount">
							Don’t have an account?{" "}
							<a href="#" className="createNowLink">
								Create Now
							</a>
						</p>
					</div>
				</div>
			</div>

			{/* Footer Section */}
			<Footer />
		</>
	);
};

export default Login;
