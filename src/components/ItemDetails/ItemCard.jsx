import { FavoriteBorderOutlined, FavoriteOutlined, Image, ShoppingCart, Star } from "@mui/icons-material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { useMediaQuery } from "@mui/material";
import Dimensions from "../others/Dimensions";

const ItemCard = ({ item }) => {

	const [favourite, setFavourite] = useState(false);
	const navigate = useNavigate();
	const medium = Dimensions.medium();

	const AddToCart = async () => {
		navigate("/itemdetails")
	}

	const AddToFavourite = async (event) => {
		event.stopPropagation();
		favourite ? setFavourite(false) : setFavourite(true);
	}

	return (
		<div className="md:w-full w-[42dvw] border-[black] border-[0px] flex flex-col items-center justify-start gap-[15px] cursor-pointer"
			onClick={AddToCart}
		>
			<div className="w-full h-auto bg-white rounded-[6px] p-[10px] flex flex-col items-start justify-start border-[#D9D9D9] border-[2px] gap-[5px]">
				<div className="w-[100%] md:h-[15dvw] h-[35dvw] border-[#D9D9D9] border-[1px] flex items-center justify-center rounded-[8px] overflow-hidden relative">
					{item?.imageurl
						?
						<img src={item?.imageurl} className="max-h-[100%]" />
						:
						<Image />
					}
					<div
						className="border-[rgba(0,0,0,0.5)] border-[0px] absolute bottom-[5px] right-[5px] cursor-pointer rounded-[50%] shadow-[0px_0px_0px_rgba(0,0,0,0.2)] p-[2px] scale-[0.9]"
						onClick={AddToFavourite}
					>
						{favourite ?
							<FavoriteOutlined className="text-[red]  translate-x-[-5px] translate-y-[-5px] transition-[0.3s] animate__animated animate__rubberBand"
								style={{ fontSize: medium ? "4dvw" : "100%" }}
							/>
							:
							<FavoriteBorderOutlined style={{ fontSize: medium ? "4dvw" : "100%" }} />

						}
					</div>

				</div>
				<p className="md:text-[150%] text-[4dvw] text-[#262626]">{item?.name ? item?.name : "Name"}</p>
				<p className="text-[#686363] md:text-[100%] text-[3dvw]">
					{item?.Units_Box ? item?.Units_Box : "XX"} Pcs/Box, {item?.Box_Carton ? item?.Box_Carton : "XX"} Box/Carton
				</p>
				<div className="w-full h-auto flex flex-row items-center justify-between">
					<div className="w-auto h-auto flex flex-row items-center justify-between gap-[10px]">
						<p className="text-[#686363] line-through md:text-[100%] text-[4dvw]">
							&#x20B9;{item?.Price ? item?.Price : "XXX"}
						</p>
						<p className="text-[#133DF6] font-bold md:text-[100%] text-[3dvw]">3% off</p>
					</div>
					<div className="w-auto h-auto flex items-center justify-center gap-[2px] px-[5px] bg-[#133DF6] text-[white] scale-[90%] rounded-md md:text-[100%] text-[3dvw]">
						<p>4.5</p>
						<Star className="scale-[90%]" style={{ fontSize: medium ? "4dvw" : "100%" }} />
					</div>
				</div>
				<div className="w-auto h-auto flex flex-row items-center justify-between gap-[10px]">
					<p className="md:text-[160%] text-[5dvw] font-bold text-[#262626]">
						&#x20B9;{item?.OfferPrice ? item?.OfferPrice : "XX"}
					</p>
					<p className="font-bold opacity-[90%] scale-[90%] md:text-[100%] text-[3dvw]">
						@&#x20B9;{item?.UnitPrice ? item?.UnitPrice : "XX"}-per piece
					</p>
				</div>

				{/* <div
					className=" bg-[#133df6] rounded-[20px] w-auto h-auto flex flex-row items-center justify-between gap-[15px] px-[35px] py-[5px] text-white m-auto cursor-pointer"
					onClick={AddToCart}
				>
					<ShoppingCart />
					<p className="font-bold">Add to Cart</p>
				</div> */}
			</div>
		</div>
	)
}

export default ItemCard