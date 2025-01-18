import CancellationCard from "./CancellationCard"


const Cancellations = () => {
	return (
		<>
			<div className="border-l-[2px] border-[#133DF6]">
				<p className="text-[130%] font-bold text-[#133DF6] p-[0px_50px]">My Cancellations</p>
				<div className="w-[100%] h-auto pr-[60px] border-[0px] border-[black] mt-[20px] pl-[50px]">
					<CancellationCard />
				</div>
			</div>
		</>
	)
}

export default Cancellations