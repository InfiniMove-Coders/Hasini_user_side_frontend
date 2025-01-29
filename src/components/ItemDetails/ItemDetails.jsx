import { Add, ArrowBack, ArrowForward, FavoriteOutlined, Remove, ShoppingCart, Star, StarHalf } from "@mui/icons-material";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./itemDetails.css"
import Navbar1 from "../navbar/Navbar1";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/footer";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/system";
import Dimensions from "../others/Dimensions";

const ItemDetails = () => {

	const [count, setCount] = useState(1);
	const [favourite, setFavourite] = useState(false);
	const navigate = useNavigate();
	const medium = Dimensions.medium();

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

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<div className='w-[100%] h-auto fixed top-[0px] z-[1]'>
				<Navbar1 />
				<Navbar2 />
			</div>
			<p className="md:px-[100px] px-[10dvw] pt-[30px] md:mt-[130px] mt-[35dvw] md:text-[100%] text-[3.5dvw]" >
				<span className="opacity-[0.5] cursor-pointer"
					onClick={() => {
						navigate("/ ", { replace: true });
					}}
				>Home /</span>
				<span className="opacity-[0.5] cursor-pointer"
					onClick={() => {
						navigate("/category", { state: { keyStatusState: 0 }, replace: true });
					}}
				> Chocolates /</span>
				<span> Dairy Melts Chocolate Bar</span>
			</p>
			<div className="md:w-full w-[90%] m-auto h-auto border-[black] border-[0px] flex md:flex-row flex-col md:items-start items-center md:justify-center justify-start md:gap-[100px] gap-[2dvw] md:pt-[40px] pt-[8dvw] md:pb-[40px] pb-[8dvw]">
				<div className="md:w-[30%] w-[100%] md:h-[400px] h-[80dvw] border-[#D9D9D9] border-[1px] flex flex-row items-center justify-center rounded-[8px] overflow-hidden relative">
					<img src="/images/item_details/a.jpg" className="h-[100%]" />
					<div className="absolute bottom-[10px] right-[10px] border-[0px] border-[black] w-auto h-auto cursor-pointer"
						onClick={AddToFavourite}
					>
						{favourite ? <FavoriteOutlined className="text-[80%] text-[red]  translate-x-[-5px] translate-y-[-5px] transition-all animate__animated animate__rubberBand" /> : <FavoriteBorderOutlined className="text-[100%]" />}
					</div>
				</div>
				<div className="md:w-[40%] w-[100%] h-auto border-[0px] border-[black]">
					<p className="md:text-[160%] text-[5dvw] text-[#262626]">{"Dairy Melts , Chocolate Bar "}</p>
					<div className="w-fit h-auto flex flex-row items-center justify-between gap-[3px]">
						<Star className="text-[#C7EF00]" />
						<Star className="text-[#C7EF00]" />
						<Star className="text-[#C7EF00]" />
						<Star className="text-[#C7EF00]" />
						<StarHalf className="text-[#C7EF00]" />
						<p className="text-[#38023B] md:text-[100%] text-[3dvw]">(300 Reviews)</p>
					</div>
					<div className="w-auto h-auto flex flex-row items-center justify-start flex-wrap gap-[10px] mt-[15px]">
						<p className="font-bold md:text-[160%] text-[6dvw]">&#x20B9;165</p>
						<p className="md:text-[130%] text-[4dvw] font-bold text-[#133DF6]">3% off</p>
						<p className="opacity-[0.5] md:text-[100%] text-[3dvw]"><span className="line-through">&#x20B9;170</span> @ &#x20B9;5 per piece</p>
					</div>
					<div className="bg-[#133DF636] w-full h-[3px] md:my-[10px] my-[3dvw]"></div>
					<p className="md:text-[100%] text-[3dvw]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
					<p className="mt-[10px] md:text-[100%] text-[3dvw]">{"33"} Pcs / Box , {"24"} Box /Carton</p>
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
			<div className="md:mt-[40px] mt-[8dvw] md:mb-[40px] mb-[8dvw] w-full h-auto flex flex-col items-center justify-start gap-[40px] md:px-[60px] px-[8dvw]">
				<p className="w-fit h-auto md:px-[100px] px-[10dvw] md:py-[3px] py-[1dvw] rounded-[25px] bg-[#4000FF] text-white md:text-[160%] text-[5dvw] font-bold">Similar Products</p>
				<div className="w-full h-auto border-[black] border-[0px] relative z-[0]">
					<Swiper
						grabCursor={false}
						slidesPerView={medium ? 1.5 : 4}
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