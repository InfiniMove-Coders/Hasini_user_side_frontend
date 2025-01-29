import { useEffect } from "react"
import Footer from "../footer/footer"
import Navbar1 from "../navbar/Navbar1"
import Navbar2 from "../navbar/Navbar2"
import { useLocation, useNavigate } from "react-router-dom"
import FavouriteCard from "./FavouriteCard"


const Favourite = () => {

	const item = {
		imageurl: "/images/item_details/a.jpg",
		name: "Dairy Melts , Chocolate Bar ",
		Units_Box: 33,
		Box_Carton: 24,
		Price: 170,
		OfferPrice: 165,
		UnitPrice: 5,
	}

	const navigate = useNavigate();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<div className='w-[100%] h-auto fixed top-[0px] z-[1]'>
				<Navbar1 />
				<Navbar2 />
			</div>
			<p className="md:px-[100px] px-[10dvw] pt-[30px] md:mt-[150px] mt-[30dvw]" >
				<span className="opacity-[0.5] cursor-pointer"
					onClick={() => {
						navigate("/");
					}}
				>Home /</span>
				<span className="opacity-[1]"> My Favourites</span>
			</p>
			<div className="m-auto mt-[40px] w-[90%] h-auto flex flex-row items-start justify-evenly gap-[15px] flex-wrap mb-[50px] border-[0px] border-[black]">
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />
				<FavouriteCard item={item} />

			</div>
			<Footer />
		</>
	)
}

export default Favourite;