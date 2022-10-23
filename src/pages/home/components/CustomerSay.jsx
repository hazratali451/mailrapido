import React from "react";
import SectionHeader from "../../../components/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/images/customer/1.png";
import img2 from "../../../assets/images/customer/2.png";
import img3 from "../../../assets/images/customer/3.png";

import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
	{
		quote: `Just a quick note to say that I recently hired Valkyrie to do some quite complex coding work for me. He finished the job within a reasonable timeframe and to a very high standard with great communication throughout.`,
		name: `Mang Oleh`,
		designation: `Apple store review`,
		img: img1,
	},
	{
		quote: `Great job on my Cakephp scraper script! Easy to communicate with and even did a few additional tasks that were not apart of the project that were greatly appreciated! Will be hiring again for sure. ;-) `,
		name: `Grafx`,
		designation: `Play store Review`,
		img: img2,
	},
	{
		quote: `Finally I found a good programmer, he just completed a responsive web-project on wordpress for me. He did a perfect job throughout the whole process for a reasonable price. I am looking forward to `,
		name: `Mang Oleh`,
		designation: `Chrome store Review`,
		img: img3,
	},
];

const CustomerSay = () => {
	return (
		<>
			<section className="customer-section">
				<div className="customer-shape"></div>
				<div className="container position-relative">
					<SectionHeader title="What Our Customer Says" />
					<div className="customer-slider">
						<Swiper
							spaceBetween={16}
							slidesPerView={1}
							loop={true}
							navigation
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
							modules={[Navigation, Pagination]}
						>
							{data &&
								data.map(({ quote, name, img, designation }, i) => (
									<SwiperSlide key={i}>
										<div className="__client-item">
											<blockquote>{quote}</blockquote>
											<img src={img} className="avatar" alt="" />
											<h5 className="name">{name}</h5>
											<span className="designation">
												{designation}
											</span>
										</div>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default CustomerSay;
