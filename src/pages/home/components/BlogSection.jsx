import React from "react";
import blog from "../../../assets/images/blog/blog.png";
import SectionHeader from "../../../components/SectionHeader";

import { Link } from "react-router-dom";

import img1 from "../../../assets/images/blog/1.png";
import img2 from "../../../assets/images/blog/2.png";
import img3 from "../../../assets/images/blog/3.png";
import img4 from "../../../assets/images/blog/4.png";

const data = [
	{
		img: img1,
		title: "The Basketball Home Gym for the Quarantined...",
		text: "The Basketball Home Gym for both basketball strength and basketball conditioning...",
		date: "28 Jan 2022",
	},
	{
		img: img2,
		title: "The Basketball Home Gym for the Quarantined...",
		text: "The Basketball Home Gym for both basketball strength and basketball conditioning...",
		date: "28 Jan 2022",
	},
	{
		img: img3,
		title: "The Basketball Home Gym for the Quarantined...",
		text: "The Basketball Home Gym for both basketball strength and basketball conditioning...",
		date: "28 Jan 2022",
	},
	{
		img: img4,
		title: "The Basketball Home Gym for the Quarantined...",
		text: "The Basketball Home Gym for both basketball strength and basketball conditioning...",
		date: "28 Jan 2022",
	},
];

const BlogSection = () => {
	return (
		<section className="blog-section pt-120 pb-120">
			<div className="blog-shape"></div>
			<div className="container">
				<SectionHeader title="Our Latest Article" subtitle="Blog" />
				<div className="row gy-5 align-items-center justify-content-center">
					<div className="col-lg-6 col-md-8">
						<Link to="#" className="blog-item" data-aos="fade-up">
							<img src={blog} alt="" />
							<div className="content">
								<h3 className="title">
									Basketball Strength with Bodyweight Exercises...
								</h3>
								<div className="text">
									Are you a one sport middle schooler, basketball? If
									so, you are at a higher risk...
								</div>
								<div className="date">OCTOBER 27, 2020</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-6">
						<div className="home-blog-container" data-aos="fade-up">
							{data &&
								data.map(({ img, title, text, date }, i) => (
									<Link className="blog-item-2" to="#" key={i}>
										<div className="img">
											<img src={img} alt="" />
										</div>
										<div className="content">
											<h5 className="title">{title}</h5>
											<div className="text">{text}</div>
											{date && <span>{date}</span>}
										</div>
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
