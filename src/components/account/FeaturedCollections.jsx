import FeaturedCard from "./FeaturedCard"


const FeaturedCollections = () => {
	return (
		<>
			<p className="w-fit text-[#38023B] text-[5dvw] px-[10dvw] mt-[5dvw]">Our Featured Collections</p>
			<div className="w-[full] h-auto mt-[3dvw] overflow-x-auto border-[0px] border-[red]">
				<div className="w-[150dvw] h-auto flex flex-row items-center justify-start gap-[2dvw] py-[1.3dvw] px-[1dvw]">
					<FeaturedCard image={"/images/featured/a.png"} />
					<FeaturedCard image={"/images/featured/b.png"} />
					<FeaturedCard image={"/images/featured/c.png"} />
					<FeaturedCard image={"/images/featured/d.png"} />
					<FeaturedCard image={"/images/featured/a.png"} />
					<FeaturedCard image={"/images/featured/b.png"} />
				</div>
			</div>
		</>
	)
}

export default FeaturedCollections