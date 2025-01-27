import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar1 from "../navbar/Navbar1"
import Navbar2 from "../navbar/Navbar2"
import CancellationCard from "./CancellationCard"


const Cancellations = () => {

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<div className="w-[100%] h-auto fixed md:hidden top-[0px] z-[5]">
				<Navbar1 />
				<Navbar2 />
			</div>
			<div className="border-l-[2px] border-[#133DF6] md:mt-[0px] mt-[35dvw] md:mb-[0dvw] mb-[10dvw]">
				<p className="md:text-[130%] text-[4dvw] font-bold text-[#133DF6] md:p-[0px_50px] p-[0px_5dvw]">My Cancellations</p>
				<div className="w-[100%] h-auto md:pr-[60px] pr-[5dvw] border-[0px] border-[black] mt-[20px] md:pl-[50px] pl-[5dvw]">
					<CancellationCard />
				</div>
			</div>
			<div className="md:hidden">
				<Footer />
			</div>
		</>
	)
}

export default Cancellations