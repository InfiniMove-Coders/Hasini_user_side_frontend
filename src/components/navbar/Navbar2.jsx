import { Logout, Person, Person2Outlined, Search, ShoppingCartOutlined, StarBorderOutlined } from "@mui/icons-material"
import { Box, Menu } from "@mui/material"
import { BoxIcon, FileBoxIcon } from "lucide-react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Navbar2 = () => {

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const [loginStatus, setLoginStatus] = useState(true);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	return (
		<div className="w-full h-auto md:h-[80px] border-[black] border-[0px] flex flex-col-reverse md:flex-row items-center md:justify-center justify-between py-[10px] md:py-[0px] md:gap-[190px] shadow-[0px_2px_4px_#133DF6aa] bg-white z-[5]">
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
			<div className="w-auto h-[60px] flex flex-row items-center justify-between gap-[10px] border-[black] border-[0px] cursor-pointer translate-x-[-50px]"
				onClick={() => navigate("/", { replace: true })}
			>
				<img src="/images/icons/logo1.png" className="h-[70%]" />
				<p
					className="text-[200%] text-[#38023B]"
				>HASINI ENTERPRISES</p>
			</div>
			<div className="w-auto h-auto hidden md:flex flex-row items-center justify-between gap-[15px] border-[0px] border-[black]">
				<div className="border-[0px] border-[black] p-[8px] rounded-[50%] hover:bg-[#133DF6] hover:text-white shadow-[0px_3px_4px_#00000050] cursor-pointer text-[#133DF6]">
					<ShoppingCartOutlined />
				</div>
				{loginStatus ?
					<div
						className="border-[0px] border-[black] p-[8px] hover:bg-[#133DF6] rounded-[50%] shadow-[0px_3px_4px_#00000050] cursor-pointer hover:text-white text-[#133DF6]"
						onClick={handleOpen}
					>
						{/* <img src="/images/navbar/user.png" /> */}
						<Person />
					</div>
					:
					<div
						className="border-[0px] border-[black] p-[8px] hover:bg-[#133DF6] rounded-[50%] shadow-[0px_3px_4px_#00000050] cursor-pointer hover:text-white text-[#133DF6]"
					>
						{/* <img src="/images/navbar/user.png" /> */}
						<Person />
					</div>
				}


			</div>
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				sx={{
					"& .MuiMenu-paper": {
						border: "0px solid red",
						width: "auto",
						height: "auto",
						backgroundColor: "transparent",
						boxShadow: "none",
					},


				}}

			>
				<div className="w-auto h-auto border-[black] border-[0px] bg-white shadow-[0px_0px_4px_#00000050] flex flex-col items-start justify-start rounded-lg">
					<div
						className="flex flex-row items-center justify-start gap-[10px] p-[5px_40px_5px_15px] cursor-pointer"
						onClick={() => navigate("/account")}
					>
						<Person2Outlined />
						<p>My Account</p>
					</div>
					<div className="flex flex-row items-center justify-start gap-[10px] p-[5px_40px_5px_15px] cursor-pointer">
						<FileBoxIcon />
						<p>My Orders</p>
					</div>
					<div className="flex flex-row items-center justify-start gap-[10px] p-[5px_40px_5px_15px] cursor-pointer">
						<StarBorderOutlined />
						<p>My Wishlist</p>
					</div>
					<div className="flex flex-row items-center justify-start gap-[10px] p-[5px_40px_10px_15px] cursor-pointer">
						<Logout className="-rotate-180" />
						<p>Logout</p>
					</div>
				</div>
			</Menu>
		</div>
	)
}

export default Navbar2