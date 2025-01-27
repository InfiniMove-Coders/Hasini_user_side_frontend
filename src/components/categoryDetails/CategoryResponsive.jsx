import { useNavigate } from "react-router-dom"
import Footer from "../footer/footer"
import Navbar1 from "../navbar/Navbar1"
import Navbar2 from "../navbar/Navbar2"
import { ArrowBack } from "@mui/icons-material"
import { useEffect } from "react"
import { useMediaQuery } from "@mui/material"
import Dimensions from "../others/Dimensions"


const CategoryResponsive = () => {

	const navigate = useNavigate();
	const medium = Dimensions.medium();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);


	return (
		<>
			<div className="w-[100%] h-[auto] fixed top-[0px] z-[5]">
				<Navbar1 />
				<Navbar2 />
			</div>

			<p className="text-[#133DF6] mt-[39dvw] font-bold ml-[8dvw] text-[7dvw] w-fit"
				onClick={() => {
					navigate(-1);
				}}
			><ArrowBack /> Categories</p>

			<div className="w-[100%] h-auto mt-[10dvw] mb-[10dvw] border-[0px] border-[black] flex flex-row items-start justify-around flex-wrap gap-y-[30px]">
				<div className="w-[38dvw] h-[43dvw] rounded-[6px] border-[1px] border-[#FFD70066] flex flex-col items-center justify-between pb-[2px] gap-[2px] shadow-[8px_8px_6px_rgba(0,0,0,0.1)] hover:scale-[1.1] hover:transition-all origin-top-left ease-in-out"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 0 } })
					}}
				>
					<div className="w-[100%] h-[80%] flex flex-row items-center justify-center">
						<img src="/images/category/chocolate.png" className="h-[100%]" />
					</div>
					<p className="text-[130%] text-[#133DF6] font-bold">Chocolate</p>
				</div>
				<div className="w-[38dvw] h-[43dvw] rounded-[6px] border-[1px] border-[#FFD70066] flex flex-col items-center justify-between pb-[2px] gap-[2px] shadow-[8px_8px_6px_rgba(0,0,0,0.1)] hover:scale-[1.1] hover:transition-all origin-top-left ease-in-out"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 1 } })
					}}
				>
					<div className="w-[100%] h-[80%] flex flex-row items-center justify-center">
						<img src="/images/category/biscuits.png" className="h-[100%]" />
					</div>
					<p className="text-[130%] text-[#133DF6] font-bold">Biscuits</p>
				</div>
				<div className="w-[38dvw] h-[43dvw] rounded-[6px] border-[1px] border-[#FFD70066] flex flex-col items-center justify-between pb-[2px] gap-[2px] shadow-[8px_8px_6px_rgba(0,0,0,0.1)] hover:scale-[1.1] hover:transition-all origin-top-left ease-in-out"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 4 } })
					}}
				>
					<div className="w-[100%] h-[80%] flex flex-row items-center justify-center">
						<img src="/images/category/fruit.png" className="h-[100%]" />
					</div>
					<p className="text-[130%] text-[#133DF6] font-bold">Vegetables</p>
				</div>
				<div className="w-[38dvw] h-[43dvw] rounded-[6px] border-[1px] border-[#FFD70066] flex flex-col items-center justify-between pb-[2px] gap-[2px] shadow-[8px_8px_6px_rgba(0,0,0,0.1)] hover:scale-[1.1] hover:transition-all origin-top-left ease-in-out"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 3 } })
					}}
				>
					<div className="w-[100%] h-[80%] flex flex-row items-center justify-center">
						<img src="/images/category/fruit.png" className="h-[100%]" />
					</div>
					<p className="text-[130%] text-[#133DF6] font-bold">Fruits</p>
				</div>
				<div className="w-[38dvw] h-[43dvw] rounded-[6px] border-[1px] border-[#FFD70066] flex flex-col items-center justify-between pb-[2px] gap-[2px] shadow-[8px_8px_6px_rgba(0,0,0,0.1)] hover:scale-[1.1] hover:transition-all origin-top-left ease-in-out"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 2 } })
					}}
				>
					<div className="w-[100%] h-[80%] flex flex-row items-center justify-center">
						<img src="/images/category/seller.png" className="h-[100%]" />
					</div>
					<p className="text-[130%] text-[#133DF6] font-bold">Best Sellers</p>
				</div>
				<div className="w-[38dvw] h-[43dvw] rounded-[6px] border-[1px] border-[#FFD70066] flex flex-col items-center justify-between pb-[2px] gap-[2px] shadow-[8px_8px_6px_rgba(0,0,0,0.1)] hover:scale-[1.1] hover:transition-all origin-top-left ease-in-out"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 5 } })
					}}
				>
					<div className="w-[100%] h-[80%] flex flex-row items-center justify-center">
						<img src="/images/category/combo.png" className="h-[100%]" />
					</div>
					<p className="text-[130%] text-[#133DF6] font-bold">Best Combos</p>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default CategoryResponsive