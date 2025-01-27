import { useState } from "react"
import Navbar_button from "./basic/Navbar_button";
import { Cookie, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Navbar3 = ({ keyStatusState }) => {

	const [keyStatus, setKeyStatus] = useState(keyStatusState);
	const navigate = useNavigate();

	return (
		<div className="w-full h-auto bg-[#133DF6] border-[black] border-[0px] py-[5px] hidden md:flex flex-row items-center justify-around z-[5] px-[10px]">
			<Navbar_button
				icon={keyStatus == 0 ? <img src="/images/navbar/chocolate.png" /> : <img src="/images/navbar/chocolate1.png" />}
				name={"Chocolates"} keyStatus={keyStatus} buttonKey={0}
				onClick={() => {
					setKeyStatus(0);
					navigate("/category", { state: { keyStatusState: 0 } });
				}}
			/>
			<Navbar_button
				icon={keyStatus == 1 ? <Cookie className="text-[#133DF6]" /> : <Cookie className="text-white" />}
				name={"Biscuits"} keyStatus={keyStatus} buttonKey={1}
				onClick={() => {
					setKeyStatus(1);
					navigate("/category", { state: { keyStatusState: 1 } });
				}}
			/>
			<Navbar_button
				icon={keyStatus == 2 ? <Star className="text-[#133DF6]" /> : <Star className="text-white" />}
				name={"Best Sellers"} keyStatus={keyStatus} buttonKey={2}
				onClick={() => {
					setKeyStatus(2);
					navigate("/category", { state: { keyStatusState: 2 } });
				}}
			/>
			<Navbar_button
				icon={keyStatus == 3 ? <img src="/images/navbar/fruit.png" /> : <img src="/images/navbar/fruit1.png" />}
				name={"Fruits"} keyStatus={keyStatus} buttonKey={3}
				onClick={() => {
					setKeyStatus(3);
					navigate("/category", { state: { keyStatusState: 3 } });
				}}
			/>
			<Navbar_button
				icon={keyStatus == 4 ? <img src="/images/navbar/vegetable.png" /> : <img src="/images/navbar/vegetable1.png" />}
				name={"Vegetables"} keyStatus={keyStatus} buttonKey={4}
				onClick={() => {
					setKeyStatus(4);
					navigate("/category", { state: { keyStatusState: 4 } });
				}}
			/>
		</div>
	)
}

export default Navbar3