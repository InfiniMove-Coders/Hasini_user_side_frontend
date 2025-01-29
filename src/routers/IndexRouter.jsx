import { Routes, Route } from "react-router-dom"
import Dimensions from "../components/others/Dimensions"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import ItemDetails from "../components/ItemDetails/ItemDetails"
import ContactForm from "../components/Contact/ContactUS"
import Loading from "../components/Loading/Loading"
import Account from "../components/MyAccount/Account"
import Category from "../components/categoryDetails/Category"
import SplashScreen from "../components/splash screen/Splash"
import CategoryResponsive from "../components/categoryDetails/CategoryResponsive"
import Orders from "../components/orders/Orders"
import Cancellations from "../components/cancellations/Cancellations"
import Login from "../components/login/login"
import Signup from "../components/signup/signup"
import Cart from "../components/cart/cart"
import Favourite from "../components/favourites/Favourite"

const IndexRouter = () => {

	const medium = Dimensions.medium();

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="home" element={<Home />} /> */}
			<Route path="category" element={<Category />} />
			{medium &&
				<>
					<Route path="categories" element={<CategoryResponsive />} />
					<Route path="orders" element={<Orders />} />
					<Route path="cancellations" element={<Cancellations />} />
				</>
			}
			<Route path="itemdetails" element={<ItemDetails />} />
			<Route path="account" element={<Account />} />
			<Route path="contact" element={<ContactForm />} />
			<Route path="Loading" element={<Loading />} />
			<Route path='login' element={<Login />} />
			<Route path='signup' element={<Signup />} />
<<<<<<< HEAD
			<Route path='cart' element={<Cart />} />
			<Route path="*" element={<NotFound />} />
=======
			z			<Route path="*" element={<NotFound />} />
>>>>>>> ff7f5d3 (small change)
		</Routes >
	)
}

export default IndexRouter