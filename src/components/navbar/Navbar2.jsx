import { FavoriteBorderOutlined, FavoriteOutlined, Logout, Person, Person2Outlined, Search, ShoppingCartOutlined, StarBorderOutlined } from "@mui/icons-material"
import { Menu, useMediaQuery } from "@mui/material"
import { FileBoxIcon } from "lucide-react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Dimensions from "../others/Dimensions";


const Navbar2 = () => {

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const [loginStatus, setLoginStatus] = useState(true);
	const medium = Dimensions.medium();


	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	return (
		<div className="w-full h-auto md:h-[80px] border-[black] border-[0px] flex flex-col-reverse md:flex-row items-center md:justify-between justify-between pt-[1dvw] pb-[3dvw] md:pb-[0px] md:py-[0px] md:px-[50px] md:shadow-[0px_2px_4px_#133DF6aa] shadow-[0px_3px_5px_#133DF611] bg-white z-[5] gap-[1dvw] md:gap-[0px]">
			<div className="w-[85%] md:w-[290px] md:h-[40px] h-[9dvw] rounded-[20px] border-[#133DF6] border-[1px] overflow-hidden flex flex-row items-center justify-between p-[5px] shadow-[0px_3px_4px_#00000030]">
				<input
					type="text"
					className="border-[0px] border-[black] h-[100%] w-[80%] rounded-[20px] px-[10px] outline-none "
					name="search"
					placeholder={medium ? "Search for  \" Vanilla ,Choclate Combo Pack\"" : "Search"}
				/>
				<div className="h-[100%] w-auto border-[0px] border-[black] md:p-[7px_5px] p-[7px_10px] rounded-[20px] bg-[#133DF6] text-white flex items-center justify-center text-[90%]">
					<Search />
				</div>
			</div>
			<div className="w-auto h-[60px] flex flex-row items-center justify-between md:gap-[10px] gap-[2dvw] border-[black] border-[0px] cursor-pointer md:translate-x-[-50px] relative"
				onClick={() => navigate("/", { replace: true })}
			>
				<img src="/images/icons/logo1.png" className="md:h-[70%] h-[8dvw]" />
				<p
					className="md:text-[200%] text-[6dvw] text-[#38023B] scale-x-[90%] md:scale-x-[100%]"
				>HASINI ENTERPRISES</p>
				<div className="absolute border-[0px] border-[black] p-[1.5dvw] rounded-[100%] hover:bg-[#133DF6] hover:text-white shadow-[0px_3px_4px_#00000050] cursor-pointer text-[#133DF6] md:hidden right-[-12dvw] z-[1]"
					onClick={(event) => {
						event.stopPropagation();
						navigate("/favourite")
					}
					}
				>
					<FavoriteBorderOutlined style={{ fontSize: "6dvw" }} />
				</div>
			</div>
			<div className="w-auto h-auto hidden md:flex flex-row items-center justify-between gap-[15px] border-[0px] border-[black]">
				<div className="border-[0px] border-[black] p-[8px] rounded-[50%] hover:bg-[#133DF6] hover:text-white shadow-[0px_3px_4px_#00000050] cursor-pointer text-[#133DF6]"
					onClick={() => navigate("/cart")}
				>
					<ShoppingCartOutlined />
				</div>
				<div className="border-[0px] border-[black] p-[8px] rounded-[50%] hover:bg-[#133DF6] hover:text-white shadow-[0px_3px_4px_#00000050] cursor-pointer text-[#133DF6]"
					onClick={() => navigate("/favourite")}
				>
					<FavoriteBorderOutlined />
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
					{/* <div className="flex flex-row items-center justify-start gap-[10px] p-[5px_40px_5px_15px] cursor-pointer">
						<FileBoxIcon />
						<p>My Orders</p>
					</div>
					<div className="flex flex-row items-center justify-start gap-[10px] p-[5px_40px_5px_15px] cursor-pointer">
						<StarBorderOutlined />
						<p>My Wishlist</p>
					</div> */}
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