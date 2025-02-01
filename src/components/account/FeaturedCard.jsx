

const FeaturedCard = ({ image }) => {
	return (
		<div className="w-[24dvw] h-[25dvw] border-[0px] border-[black] shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-[4px]">
			<div className="w-[100%] h-[80%] flex items-center justify-center">
				<img src={image} className="h-[100%]" />
			</div>
			<p className="text-[3dvw] w-fit m-auto" >Add it Now</p>
		</div>
	)
}

export default FeaturedCard