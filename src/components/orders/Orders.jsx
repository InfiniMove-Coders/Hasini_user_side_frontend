import OrderCard from "./OrderCard"


const Orders = () => {
	return (
		<div className="border-l-[2px] border-[#133DF6]">
			<p className="text-[130%] font-bold text-[#133DF6] p-[0px_50px]">My Orders</p>
			<div className="w-[100%] h-auto pr-[60px] border-[0px] border-[black] mt-[20px] pl-[50px] flex flex-col gap-[30px]">
				<OrderCard />
				<OrderCard />
			</div>
		</div>
	)
}

export default Orders