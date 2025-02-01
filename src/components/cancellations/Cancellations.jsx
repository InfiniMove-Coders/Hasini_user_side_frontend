import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar1 from "../navbar/Navbar1"
import Navbar2 from "../navbar/Navbar2"
import CancellationCard from "./CancellationCard"
import { useNavigate } from "react-router-dom"


const Cancellations = () => {

	const navigate = useNavigate();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<div className="w-[100%] h-auto fixed md:hidden top-[0px] z-[5]">
				<Navbar1 />
				<Navbar2 />
			</div>
			<p className="md:px-[100px] md:hidden px-[10dvw] md:pt-[30px] md:mt-[150px] mt-[40dvw] border-[0px] border-[black]" >
				<span className="opacity-[0.5] cursor-pointer"
					onClick={() => {
						navigate("/");
					}}
				>Home /</span>
				<span className="opacity-[1]"> My Account</span>
			</p>
			<div className="border-l-[2px] border-[#133DF6] md:mt-[0px] mt-[3dvw] md:mb-[0dvw] mb-[10dvw]">
				<p className="md:text-[130%] text-[5dvw] w-fit m-auto md:m-0 font-bold text-[#133DF6] md:p-[0px_50px] p-[0px_5dvw]">My Cancellations</p>
				<div className="w-[100%] h-auto md:pr-[60px] pr-[5dvw] border-[0px] border-[black] mt-[20px] md:pl-[50px] pl-[5dvw]">
					<CancellationCard />
				</div>
			</div>
			{/* <div className="md:hidden">
				<Footer />
			</div> */}
		</>
	)
}

export default Cancellations