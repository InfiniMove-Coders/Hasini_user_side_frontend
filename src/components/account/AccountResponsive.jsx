import { Block, Person, PersonOutline, StarBorderOutlined, SupportAgent } from "@mui/icons-material"
import Footer from "../footer/footer"
import Navbar1 from "../navbar/Navbar1"
import Navbar2 from "../navbar/Navbar2"
import FeaturedCollections from "./FeaturedCollections"
import { useNavigate } from "react-router-dom"
import { Package2 } from "lucide-react"

const AccountResponsive = () => {

	const navigate = useNavigate();

	return (
		<>
			<div className="w-[100%] h-[auto fixed top-[0px] z-[5]">
				<Navbar1 />
				<Navbar2 />
			</div>
			<p className="text-[6dvw] mt-[43dvw] w-fit m-auto">Welcome!&nbsp;
				<span className="text-[#133DF6]">Customer Name</span>
			</p>
			<div className="w-[100%] h-auto flex flex-col items-center justify-start gap-[3dvw] mt-[5dvw]">
				<div className="w-[100%] h-auto flex flex-row items-center justify-start gap-[5dvw] px-[10dvw] py-[2dvw] shadow-[0px_3px_4px_rgba(0,0,0,0.1)] text-[5dvw] bg-[#F5F5F5]"
					onClick={() => { navigate("/profile") }}
				>
					<PersonOutline style={{ color: "#133DF6", fontSize: "6dvw", }} />
					<p className="text-[#38023B]">My Profile</p>
				</div>
				<div className="w-[100%] h-auto flex flex-row items-center justify-start gap-[5dvw] px-[10dvw] py-[2dvw] shadow-[0px_3px_4px_rgba(0,0,0,0.1)] text-[5dvw] bg-[#F5F5F5]"
					onClick={() => { navigate("/orders") }}
				>
					<Package2 style={{ color: "#133DF6", fontSize: "6dvw", }} />
					<p className="text-[#38023B]">My Orders</p>
				</div>
				<div className="w-[100%] h-auto flex flex-row items-center justify-start gap-[5dvw] px-[10dvw] py-[2dvw] shadow-[0px_3px_4px_rgba(0,0,0,0.1)] text-[5dvw] bg-[#F5F5F5]"
					onClick={() => { navigate("/cancellations") }}
				>
					<Block style={{ color: "#133DF6", fontSize: "6dvw", }} />
					<p className="text-[#38023B]">My Cancellations</p>
				</div>
			</div>
			<FeaturedCollections />
			<div className="w-[100%] h-auto flex flex-col items-center justify-start gap-[3dvw] mt-[5dvw] mb-[40dvw]">
				<div className="w-[100%] h-auto flex flex-row items-center justify-start gap-[5dvw] px-[10dvw] py-[2dvw] shadow-[0px_3px_4px_rgba(0,0,0,0.1)] text-[5dvw] bg-[#F5F5F5]"
					onClick={() => { navigate("/contact") }}
				>
					<StarBorderOutlined style={{ color: "#133DF6", fontSize: "6dvw", }} />
					<p className="text-[#38023B]">Feedback</p>
				</div>
				<div className="w-[100%] h-auto flex flex-row items-center justify-start gap-[5dvw] px-[10dvw] py-[2dvw] shadow-[0px_3px_4px_rgba(0,0,0,0.1)] text-[5dvw] bg-[#F5F5F5]"
					onClick={() => { navigate("/contact") }}
				>
					<SupportAgent style={{ color: "#133DF6", fontSize: "6dvw", }} />
					<p className="text-[#38023B]">Customer Support</p>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	)
}

export default AccountResponsive