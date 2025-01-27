import { StarBorderSharp } from "@mui/icons-material"


const CancellationCard = () => {
	return (
		<div>
			<div className="w-[100%] md:h-[120px] h-[22dvw] border-[1px] border-[rgba(0,0,0,0.5)] rounded-[8px] p-[5px] flex flex-row items-center justify-between">
				<div className="w-[20%] h-full border-[0px] border-[black] flex flex-row items-center justify-center">
					<img src="/images/item_details/a.jpg" className="h-full" />
				</div>
				<div className="w-[40%] h-[100%] border-r-[1px] border-[black] flex flex-col items-center justify-start md:gap-[10px] gap-[0dvw]">
					<p className="md:text-[130%] text-[3dvw] font-[500]">Dairy Melts, Chocolate Bar</p>
					<div className="w-auto h-auto flex flex-col items-center justify-start gap-[5px]">
						{/* <div className="flex flex-row items-center justify-between gap-[2px]">
							<StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} />
							<StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} />
							<StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} />
							<StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} />
							<StarBorderSharp style={{ fontSize: "160%", cursor: "pointer", }} />
						</div>
						<p className="text-[110%] opacity-[0.6] font-[300]">Rate Out Product</p> */}
						<p className="md:text-[110%] text-[3dvw] opacity-[0.6] font-[300]">Cancelled Date: 22/01/2025</p>
					</div>
				</div>
				<div className="w-[35%] h-[100%] border-[0px] border-[black] flex flex-col items-center justify-start md:gap-[10px] gap-[1dvw] px-[10px] md:py-[10px] py-[2dvw]">
					<p className="md:text-[90%] text-[2dvw] opacity-[0.6] font-bold">Order Id: 00675123456789</p>
					<p className="text-[#BE462C] md:text-[135%] text-[4dvw] font-bold">Cancelled</p>
				</div>
			</div>
		</div>
	)
}

export default CancellationCard