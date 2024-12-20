import Carousel from "../carousel/Carousel"
import Navbar1 from "./Navbar1"
import Navbar2 from "./Navbar2"
import Navbar3 from "./Navbar3"


const Navbar = () => {
	return (
		<div className="w-full h-auto border-[black] border-[0px]">
			<Navbar1 />
			<Navbar2 />
			<Navbar3 />
			<Carousel />
		</div>
	)
}

export default Navbar