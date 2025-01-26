import { Add, ArrowBack, ArrowForward, FavoriteOutlined, Remove, ShoppingCart, Star, StarHalf } from "@mui/icons-material";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./itemDetails.css"
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/footer";
import "animate.css";

const ItemDetails = () => {

	const [count, setCount] = useState(1);
	const [favourite, setFavourite] = useState(false);

	const countIncrease = () => {
		setCount(count + 1);
	}

	const countDecrease = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	}

	const AddToFavourite = async () => {
		favourite ? setFavourite(false) : setFavourite(true);
	}

	const BuyProduct = async () => {
		alert("You order the product successfully");
	}

	const AddToCart = () => {
		alert("Product added to cart successfully");
	}

	const item = {
		imageurl: "/images/item_details/a.jpg",
		name: "Dairy Melts , Chocolate Bar ",
		Units_Box: 33,
		Box_Carton: 24,
		Price: 170,
		OfferPrice: 165,
		UnitPrice: 5,
	}

	return (
		<>
			<div className='w-[100%] h-auto fixed top-[0px] z-[1]'>
				<Navbar1 />
				<Navbar2 />
			</div>
			<p className="px-[100px] pt-[30px] mt-[130px]" >
				<span className="opacity-[0.5]">Home /</span>
				<span className="opacity-[0.5]"> Chocolates /</span>
				<span> Dairy Melts Chocolate Bar</span>
			</p>
			<div className="w-full h-auto border-[black] border-[0px] flex flex-row items-start justify-center gap-[100px] pt-[40px] pb-[40px]">
				<div className="w-[30%] h-[400px] border-[#D9D9D9] border-[1px] flex flex-row items-center justify-center rounded-[8px] overflow-hidden relative">
					<img src="/images/item_details/a.jpg" className="h-[100%]" />
					<div className="absolute bottom-[10px] right-[10px] border-[0px] border-[black] w-auto h-auto cursor-pointer"
						onClick={AddToFavourite}
					>
						{favourite ? <FavoriteOutlined className="text-[80%] text-[red]  translate-x-[-5px] translate-y-[-5px] transition-all animate__animated animate__rubberBand" /> : <FavoriteBorderOutlined className="text-[100%]" />}
					</div>
				</div>
				<div className="w-[40%] h-auto border-[0px] border-[black]">
					<p className="text-[160%] text-[#262626]">{"Dairy Melts , Chocolate Bar "}</p>
					<div className="w-fit h-auto flex flex-row items-center justify-between gap-[3px]">
						<Star className="text-[#C7EF00]" />
						<Star className="text-[#C7EF00]" />
						<Star className="text-[#C7EF00]" />
						<Star className="text-[#C7EF00]" />
						<StarHalf className="text-[#C7EF00]" />
						<p className="text-[#38023B]">(300 Reviews)</p>
					</div>
					<div className="w-auto h-auto flex flex-row items-center justify-start flex-wrap gap-[10px] mt-[15px]">
						<p className="font-bold text-[160%]">&#x20B9;165</p>
						<p className="text-[130%] font-bold text-[#133DF6]">3% off</p>
						<p className="opacity-[0.5]"><span className="line-through">&#x20B9;170</span> @ &#x20B9;5 per piece</p>
					</div>
					<div className="bg-[#133DF636] w-full h-[3px] my-[10px]"></div>
					<p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
					<p className="mt-[10px]">{"33"} Pcs / Box , {"24"} Box /Carton</p>
					<div className="w-full h-auto mt-[20px] flex flex-row items-center justify-start flex-wrap gap-[20px]">
						<div className="w-fit h-auto flex flex-row items-center justify-between border-[rgba(0,0,0,0.8)] border-[0px]">
							<div className="w-fit h-auto flex items-center justify-center border-[1px] border-[#00000080] cursor-pointer hover:bg-[#133DF6] hover:text-white p-[5px]" onClick={countDecrease}>
								<Remove />
							</div>
							<p className="border-t-[#00000080] border-b-[#00000080] border-[1px] w-fit flex items-center justify-center py-[5px] px-[30px]">
								{count}
							</p>
							<div className="w-auto h-auto flex items-center justify-center border-[1px] border-[#00000080] cursor-pointer hover:bg-[#133DF6] hover:text-white p-[5px]" onClick={countIncrease}>
								<Add />
							</div>
						</div>
						<button
							className="px-[25px] py-[6px] text-white rounded-[4px] bg-[#133DF6] cursor-pointer"
							onClick={AddToCart}
						>
							Add to Cart
						</button>
						<button
							className="px-[25px] py-[6px] text-white rounded-[4px] bg-[#133DF6] cursor-pointer"
							onClick={BuyProduct}
						>
							Buy Now
						</button>
						{/* <div
							className="p-[5px] bg-[#133DF6] rounded-[3px] text-white text-[50%] cursor-pointer"
							onClick={AddToFavourite}
						>
							{favourite ? <FavoriteOutlined className="text-[100%]" /> : <FavoriteBorderOutlined className="text-[90%]" />}

						</div> */}
					</div>
				</div>
			</div>
			<div className="h-[1px] bg-[#133DF6] w-[70%] m-auto"></div>
			<div className="mt-[40px] mb-[40px] w-full h-auto flex flex-col items-center justify-start gap-[40px] px-[60px]">
				<p className="w-fit h-auto px-[100px] py-[3px] rounded-[25px] bg-[#4000FF] text-white text-[160%] font-bold">Similar Products</p>
				<div className="w-full h-auto border-[black] border-[0px] relative z-[0]">
					<Swiper
						grabCursor={false}
						slidesPerView={4}
						spaceBetween={15}
						navigation={{
							nextEl: ".custom-next",
							prevEl: ".custom-prev",
						}}
						modules={[Navigation]}
						className="mySwiper"
						style={{ border: "0px solid red", }}
					>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
						<SwiperSlide>
							<ItemCard item={item} />
						</SwiperSlide>
					</Swiper>

					<div className="custom-prev"><ArrowBack /></div>
					<div className="custom-next"><ArrowForward /></div>

				</div>
			</div >
			<Footer />
		</>
	)
}

export default ItemDetails;