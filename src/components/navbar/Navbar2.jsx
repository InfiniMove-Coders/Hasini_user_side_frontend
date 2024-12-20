import { Search, ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material"


const Navbar2 = () => {
	return (
		<div className="w-full h-[80px] border-[black] border-[0px] flex flex-row items-center justify-center gap-[190px]">
			<div className="w-[290px] h-[40px] rounded-[20px] border-[#133DF6] border-[1px] overflow-hidden flex flex-row items-center justify-between p-[5px] shadow-[0px_3px_4px_#00000030]">
				<input
					type="text"
					className="border-[0px] border-[black] h-[100%] w-[80%] rounded-[20px] px-[10px] outline-none "
					name="search"
					placeholder="Search"
				/>
				<div className="h-[100%] w-auto border-[0px] border-[black] p-[7px_5px] rounded-[20px] bg-[#133DF6] text-white flex items-center justify-center text-[90%]">
					<Search />
				</div>
			</div>
			<div className="w-auto h-[60px] flex flex-row items-center justify-between gap-[10px] border-[black] border-[0px] cursor-pointer">
				<img src="/images/icons/logo.png" className="h-[70%]" />
				<p className="text-[200%] text-[#38023B]">HASINI ENTERPRISES</p>
			</div>
			<div className="w-auto h-auto flex flex-row items-center justify-between gap-[15px] border-[0px] border-[black]">
				<div className="border-[0px] border-[black] p-[8px] rounded-[50%] bg-[#133DF6] text-white shadow-[0px_3px_4px_#00000050] cursor-pointer">
					<ShoppingCartOutlined />
				</div>
				<div className="border-[0px] border-[black] p-[8px] rounded-[50%] shadow-[0px_3px_4px_#00000050] cursor-pointer">
					<img src="/images/navbar/user.png" />
				</div>
			</div>
		</div>
	)
}

export default Navbar2