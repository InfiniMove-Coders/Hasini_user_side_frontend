import Footer from "../footer/footer"
import Navbar1 from "../navbar/Navbar1"
import Navbar2 from "../navbar/Navbar2"
import Navbar3 from "../navbar/Navbar3"
import CategoryCard from "./CategoryCard"
import { useLocation } from "react-router-dom"


const Category = () => {

	const item = {
		imageurl: "/images/item_details/a.jpg",
		name: "Dairy Melts , Chocolate Bar ",
		Units_Box: 33,
		Box_Carton: 24,
		Price: 170,
		OfferPrice: 165,
		UnitPrice: 5,
	}
	const arr = ["Chocolates", "Biscuits", "Best Sellers", "Fruits", "Vegetables"]

	const location = useLocation();
	/* console.log(location); */
	const keyStatusState = location?.state?.keyStatusState

	return (
		<>
			<div className='w-[100%] h-auto fixed top-[0px] z-[1]'>
				<Navbar1 />
				<Navbar2 />
				<Navbar3 keyStatusState={keyStatusState} />
			</div>
			<p className="px-[100px] pt-[30px] mt-[150px]" >
				<span className="opacity-[0.5]">Home /</span>
				<span className="opacity-[1]"> {arr[keyStatusState]}</span>
			</p>
			<div className="m-auto mt-[40px] w-[90%] h-auto flex flex-row items-start justify-evenly gap-[15px] flex-wrap mb-[50px] border-[0px] border-[black]">
				<CategoryCard item={item} />
				<CategoryCard item={item} />
				<CategoryCard item={item} />
				<CategoryCard item={item} />
				<CategoryCard item={item} />
				<CategoryCard item={item} />
				<CategoryCard item={item} />
				<CategoryCard item={item} />

			</div>
			<Footer />
		</>
	)
}

export default Category