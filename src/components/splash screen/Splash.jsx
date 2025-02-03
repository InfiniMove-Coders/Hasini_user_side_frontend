import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
	const [animationComplete, setAnimationComplete] = useState(false);
	const navigate = useNavigate();
	const [openStatus, setOpenStatus] = useState(true);

	const loading = () => {
		localStorage.setItem("hasiniAnimation", "complete");
		setOpenStatus(false);
	}

	useEffect(() => {
		if (animationComplete) {
			setTimeout(loading, 4000);
		}
	}, [animationComplete, navigate]);

	useEffect(() => {
		if (localStorage.getItem("hasiniAnimation") == "complete") {
			setOpenStatus(false)
		}
		else {
			setOpenStatus(true);
		}
	}, [])

	return (
		<>
			{openStatus &&
				<div className="fixed inset-0 flex items-center justify-center z-50 bg-white" >
					<motion.div
						className="absolute bg-gradient-to-b from-[#0C31AB] to-[#421A6D] rounded-full w-[220vw] h-[220vw] md:w-[130vw] md:h-[130vw] sm:w-[220vw] sm:h-[220vw]"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						transition={{ duration: 1.5, ease: "easeInOut" }}
					/>

					<motion.img
						src="/images/icons/logo.png"
						alt="Logo"
						className="w-10 h-10 z-10 sm:w-6 sm:h-6 md:w-20 md:h-20 lg:w-28 lg:h-28 "
						initial={{ scale: 0.5, rotate: 0, x: 0 }}
						animate={{
							scale: [0.5, 1],
							rotate: [0, 360],
							x: [0, 0, "-40vw"],
							y: ["-50px"],
						}}
						transition={{
							duration: 4,
							times: [0, 0.5, 1],
							ease: "easeInOut",
						}}
						onAnimationComplete={() => setAnimationComplete(true)}
					/>

					<motion.div
						className="absolute font-bold text-white z-10 sm:text-xs sm:mt-20 md:text-4xl md:mb-14 lg:text-6xl lg:mr-20 lg:mb-20"
						initial={{ y: "400px", x: "15%", scale: 0.5 }}
						animate={animationComplete ? { y: "-50px", x: "15%", scale: 1.8 } : {}}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
						}}
					>
						HASINI ENTERPRISES
					</motion.div>
				</div>
			}
		</>
	);
};

export default SplashScreen;
