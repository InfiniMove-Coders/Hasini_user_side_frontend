import { ArrowForwardIos, Download, Star, StarBorderSharp, TaskAlt } from "@mui/icons-material"
import { useState } from "react"


const OrderCard = () => {

	const [open, setOpen] = useState(false);
	const [rating, setRating] = useState(0);

	const handleOpen = () => {
		open ? setOpen(false) : setOpen(true)
	}

	return (
		<div>
			<div className="w-[100%] h-[130px] border-[1px] border-[rgba(0,0,0,0.5)] rounded-[8px] p-[5px] flex flex-row items-center justify-between">
				<div className="w-[15%] h-full border-[0px] border-[black] flex flex-row items-center justify-center">
					<img src="/images/item_details/a.jpg" className="h-full" />
				</div>
				<div className="w-[40%] h-[100%] border-r-[1px] border-[black] flex flex-col items-center justify-start gap-[10px]">
					<p className="text-[130%] font-[500]">Dairy Melts, Chocolate Bar</p>
					<div className="w-auto h-auto flex flex-col items-center justify-start gap-[5px]">
						<div className="flex flex-row items-center justify-between gap-[2px]">
							{
								Array.from(Array(rating).keys()).map((v, k) => {
									return <Star style={{ fontSize: "160%", cursor: "pointer", }} onClick={() => setRating(k + 1)} />
								})
							}
							{
								Array.from(Array(5 - rating).keys()).map((v, k) => {
									return <StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} onClick={() => setRating(rating + k + 1)} />
								})
							}
						</div>
						<p className="text-[110%] opacity-[0.6] font-[300]">Rate Out Product</p>
					</div>
				</div>
				<div className="w-[40%] h-[100%] border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px] px-[10px] py-[5px]">
					<p className="text-[90%] opacity-[0.6] font-bold">Order Id: 00675123456789</p>
					<p className="text-[#FFAD33] text-[135%] font-bold">Delivered On Tue , 17 , Dec</p>
					<button className="flex flex-row items-center justify-between gap-[10px] px-[10px] py-[5px] m-auto hover:bg-[#91A2F561] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.1)]"
						onClick={handleOpen}
						style={{ backgroundColor: open ? "#91A2F561" : "transparent", }}
					>
						More details <ArrowForwardIos style={{ transform: open ? "rotateZ(-90deg) scale(0.9)" : "rotateZ(90deg) scale(0.9)", }} />
					</button>
				</div>
			</div>

			{open &&
				<div className="w-[100%] h-[270px] border-[1px] border-[rgba(0,0,0,0.5)] rounded-[8px] p-[5px] flex flex-row items-center justify-between mt-[10px]">
					<div className="w-[25%] h-full border-[0px] border-[black] flex flex-row items-center justify-center">
						<img src="/images/item_details/a.jpg" className="h-full" />
					</div>
					<div className="w-[30%] h-[100%] border-r-[1px] border-[black] flex flex-col items-start justify-center gap-[5px]">
						<p className="text-[90%] opacity-[0.6] font-bold">Order Id: 00675123456789</p>
						<p className="text-[130%] font-[500]">Dairy Melts, Chocolate Bar</p>
						<p className="font-bold text-[170%]">&#8377; 165</p>
						<div className="w-auto h-auto flex flex-col items-center justify-start gap-[5px]">
							<div className="flex flex-row items-center justify-between gap-[2px]">
								{
									Array.from(Array(rating).keys()).map((v, k) => {
										return <Star style={{ fontSize: "160%", cursor: "pointer", }} onClick={() => setRating(k + 1)} />
									})
								}
								{
									Array.from(Array(5 - rating).keys()).map((v, k) => {
										return <StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} onClick={() => setRating(rating + k + 1)} />
									})
								}
							</div>
							<p className="text-[110%] opacity-[0.6] font-[300]">Rate Out Product</p>
							<button className="bg-[#133DF6] text-[white] px-[10px] py-[5px] rounded-[5px]">
								<Download />
								<span className="font-[500]"> Download Invoice</span>
							</button>
						</div>
					</div>
					<div className="w-[40%] h-[100%] border-[0px] border-[black] flex flex-col items-start justify-start gap-[5px] px-[10px] py-[5px]">

						<p className=" text-[#FFAD33] font-bold text-[135%] mx-auto">Order Status</p>
						<div className="w-auto h-auto flex flex-col items-start justify-start gap-[10px] relative">
							<div className="absolute h-[100%] border-[#FFAD33] border-l-[2px] top-[0px] bottom-0 left-[13px]"></div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: true ? "#FFAD33" : "white" }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px]">
									<p>Order Confirmed</p>
									<p>- Sun Dec 15</p>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: true ? "#FFAD33" : "white" }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px]">
									<p>Order Dispatched</p>
									<p>- Mon Dec 16</p>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: false ? "#FFAD33" : "white" }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px]">
									<p>Order Will be Shipped by</p>
									<p>- Tue Dec 17</p>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: false ? "#FFAD33" : "white" }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px]">
									<p>Order Will be Delivered by </p>
									<p>- Wed Dec 18</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default OrderCard