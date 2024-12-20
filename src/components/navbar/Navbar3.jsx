import { useState } from "react"
import Navbar_button from "./basic/Navbar_button";
import { Cookie, Star } from "@mui/icons-material";


const Navbar3 = () => {

	const [keyStatus, setKeyStatus] = useState(0);

	return (
		<div className="w-full h-auto bg-[#133DF6] border-[black] border-[0px] py-[5px] flex flex-row items-center justify-center gap-[100px]">
			<Navbar_button
				icon={keyStatus == 0 ? <Cookie className="text-[#133DF6]" /> : <Cookie className="text-[#ffffff]" />}
				name={"Chocolates"} keyStatus={keyStatus} buttonKey={0}
				onClick={() => {
					setKeyStatus(0);
				}}
			/>
			<Navbar_button
				icon={keyStatus == 1 ? <Cookie className="text-[#133DF6]" /> : <Cookie className="text-white" />}
				name={"Biscuits"} keyStatus={keyStatus} buttonKey={1}
				onClick={() => {
					setKeyStatus(1);
				}}
			/>
			<Navbar_button
				icon={keyStatus == 2 ? <Star className="text-[#133DF6]" /> : <Star className="text-white" />}
				name={"Best Sellers"} keyStatus={keyStatus} buttonKey={2}
				onClick={() => {
					setKeyStatus(2);
				}}
			/>
			<Navbar_button
				icon={keyStatus == 3 ? <Cookie className="text-[#133DF6]" /> : <Cookie className="text-white" />}
				name={"Fruits"} keyStatus={keyStatus} buttonKey={3}
				onClick={() => {
					setKeyStatus(3);
				}}
			/>
			<Navbar_button
				icon={keyStatus == 4 ? <Cookie className="text-[#133DF6]" /> : <Cookie className="text-white" />}
				name={"Vegetables"} keyStatus={keyStatus} buttonKey={4}
				onClick={() => {
					setKeyStatus(4);
				}}
			/>
		</div>
	)
}

export default Navbar3