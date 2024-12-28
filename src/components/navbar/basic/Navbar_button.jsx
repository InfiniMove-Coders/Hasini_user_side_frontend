

const Navbar_button = ({ icon, name, onClick, keyStatus, buttonKey }) => {
	return (
		<div
			onClick={onClick}
			className="w-fit h-auto flex flex-row items-center justify-center p-[5px_10px] gap-[10px] rounded-[20px] cursor-pointer"
			style={{ backgroundColor: buttonKey != keyStatus ? "#133DF6" : "white", color: buttonKey != keyStatus ? "#133DF6" : "white", }}
		>
			{icon}
			<p className="font-bold" style={{ color: buttonKey == keyStatus ? "#133DF6" : "white" }} >{name}</p>
		</div>
	)
}

export default Navbar_button