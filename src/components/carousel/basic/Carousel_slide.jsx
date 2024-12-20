

const Carousel_slide = ({ image, onClick }) => {
	return (
		<div onClick={onClick} className="w-[100%] h-[500px] cursor-pointer border-[0px] border-[black] rounded-[20px] overflow-hidden">
			<img src={image} className="w-[100%] h-[100%] rouded-[20px]" />
		</div>
	)
}

export default Carousel_slide