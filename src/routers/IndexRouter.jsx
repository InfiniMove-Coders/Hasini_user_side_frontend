import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Navbar from "../components/navbar/Navbar"
import Carousel from "../components/carousel/Carousel"

const IndexRouter = () => {
	return (
		<Routes>
			<Route path="" element={<Home />} />
			<Route path="navbar" element={<Navbar />} />
			<Route path="carousel" element={<Carousel />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default IndexRouter