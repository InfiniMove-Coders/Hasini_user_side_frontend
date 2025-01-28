import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import ItemDetails from "../components/ItemDetails/ItemDetails"
import ContactForm from "../components/Contact/ContactUS"
import Loading from "../components/Loading/Loading"
import Account from "../components/MyAccount/Account"
import Category from "../components/categoryDetails/Category"
import SplashScreen from "../components/splash screen/Splash"

const IndexRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<SplashScreen/>} />	
			<Route path="home" element={<Home />} />
			<Route path="category" element={<Category />} />
			<Route path="itemdetails" element={<ItemDetails />} />
			<Route path="account" element={<Account />} />
			<Route path="contact" element={<ContactForm />} />
			<Route path="Loading" element={<Loading />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default IndexRouter