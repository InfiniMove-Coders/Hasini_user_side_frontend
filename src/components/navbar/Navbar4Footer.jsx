import { GridView, Home, HomeMax, Person2Outlined, ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material"
import HomeOutlined from "@mui/icons-material/HomeOutlined"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


const Navbar4Footer = () => {

	const [keyStatus, setKeyStatus] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname == "/") {
			setKeyStatus(0);
		}
		else if (location.pathname == "/categories" || location.pathname == "/category" || location.pathname == "/itemdetails") {
			setKeyStatus(1);
		}
		else if (location.pathname == "/cart") {
			setKeyStatus(2);
		}
		else if (["/account", "/orders", "/cancellations"].includes(location.pathname)) {
			setKeyStatus(3)
		}
	}, [location.pathname])

	return (
		<>
			<div className="w-[100%] h-[18dvw] fixed bottom-[0px] z-[5] flex md:hidden flex-row items-center justify-around border-[0px] border-[black] bg-[white] shadow-[0px_-1px_4px_rgba(0,0,0,0.1)] py-[3dvw]">
				<div
					className="w-auto h-[100%] flex flex-col items-center justify-between gap-[0px]"
					onClick={() => {
						setKeyStatus(0);
						navigate("/");
					}}
				>
					<HomeOutlined sx={{ strokeWidth: keyStatus == 0 ? 0.1 : 0.5, stroke: "white" }} style={{ fontSize: "8dvw", borderRadius: "50%", padding: keyStatus == 0 ? "1px" : "0px", backgroundColor: keyStatus == 0 ? "#133DF6" : "white", color: keyStatus == 0 ? "white" : "black" }} />
					<p className="text-[2.5dvw]" style={{ color: keyStatus == 0 ? "#133DF6" : "black" }}>HOME</p>
				</div>
				<div
					className="w-auto h-[100%] flex flex-col items-center justify-between gap-[0px]"
					onClick={() => {
						setKeyStatus(1);
						navigate("/categories");
					}}
				>
					<GridView sx={{ strokeWidth: keyStatus == 1 ? 0.1 : 0.5, stroke: "white" }} style={{ fontSize: "8dvw", borderRadius: "50%", padding: keyStatus == 1 ? "3px" : "0px", backgroundColor: keyStatus == 1 ? "#133DF6" : "white", color: keyStatus == 1 ? "white" : "black" }} />
					<p className="text-[2.5dvw]" style={{ color: keyStatus == 1 ? "#133DF6" : "black" }}>CATEGORIES</p>
				</div>
				<div
					className="w-auto h-[100%] flex flex-col items-center justify-between gap-[0px]"
					onClick={() => {
						setKeyStatus(2);
						navigate("/cart");
					}}
				>
					<ShoppingCartOutlined sx={{ strokeWidth: keyStatus == 2 ? 0.1 : 0.5, stroke: "white" }} style={{ fontSize: "8dvw", borderRadius: "50%", padding: keyStatus == 2 ? "3px" : "0px", backgroundColor: keyStatus == 2 ? "#133DF6" : "white", color: keyStatus == 2 ? "white" : "black" }} />
					<p className="text-[2.5dvw]" style={{ color: keyStatus == 2 ? "#133DF6" : "black" }}>CART</p>
				</div>
				<div
					className="w-auto h-[100%] flex flex-col items-center justify-between gap-[0px]"
					onClick={() => {
						setKeyStatus(3);
						navigate("/account");
					}}
				>
					<Person2Outlined sx={{ strokeWidth: keyStatus == 3 ? 0.1 : 0.5, stroke: "white" }} style={{ fontSize: "8dvw", borderRadius: "50%", padding: keyStatus == 3 ? "1px" : "0px", backgroundColor: keyStatus == 3 ? "#133DF6" : "white", color: keyStatus == 3 ? "white" : "black" }} />
					<p className="text-[2.5dvw]" style={{ color: keyStatus == 3 ? "#133DF6" : "black" }}>ACCOUNT</p>
				</div>
			</div>
		</>
	)
}

export default Navbar4Footer