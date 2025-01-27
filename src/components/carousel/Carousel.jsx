import Carousel_slide from "./basic/Carousel_slide"
import "./Carousel.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Carousel = () => {

	const handleSlideChange = (swiper) => {
		swiper.slides.forEach((slide) => {
			slide.style.opacity = "0.3";
		});
		const activeSlide = swiper.slides[swiper.activeIndex];
		activeSlide.style.opacity = "1";
		activeSlide.style.transform = "scale(1)";
	};

	return (
		<>
			<div className="w-[100%] h-auto border-[0px] border-[black] md:mt-[200px] mt-[36dvw]">
				<Swiper
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1.5}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					onSlideChange={handleSlideChange}
					navigation={{
						nextEl: ".custom-next",
						prevEl: ".custom-prev",
					}}
					pagination={{
						el: ".custom-pagination",
						clickable: true,
						style: { width: "auto" }
					}}
					modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
					className="mySwiper"
					style={{ border: "0px solid red", padding: "0px 0px 3dvw 0px", }}
				>
					<SwiperSlide>
						<Carousel_slide
							image={"/images/carousel/a.png"}
							onClick={() => { return }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Carousel_slide
							image={"/images/carousel/b.png"}
							onClick={() => { return }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Carousel_slide
							image={"/images/carousel/c.png"}
							onClick={() => { return }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Carousel_slide
							image={"/images/carousel/d.png"}
							onClick={() => { return }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Carousel_slide
							image={"/images/carousel/e.png"}
							onClick={() => { return }}
						/>
					</SwiperSlide>
				</Swiper>

				<div className="custom-navigation border-[black] border-[0px]">
					<button className="custom-prev"><ArrowBack /></button>
					<div className="custom-pagination"></div>
					<button className="custom-next"><ArrowForward /></button>
				</div>




			</div >


		</>
	)
}

export default Carousel