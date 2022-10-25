import React from "react";

import { Link } from "react-router-dom";
import img1 from "../../../assets/images/blog/article/1.png";
import img2 from "../../../assets/images/blog/article/2.png";
import img3 from "../../../assets/images/blog/article/3.png";
import img4 from "../../../assets/images/blog/article/4.png";
import img5 from "../../../assets/images/blog/article/5.png";
import img6 from "../../../assets/images/blog/article/6.png";
import img7 from "../../../assets/images/blog/article/7.png";
import img8 from "../../../assets/images/blog/article/8.png";
const data = [
	{
		img: img1,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img2,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img3,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img4,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img5,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img6,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img7,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
	{
		img: img8,
		title: "The Basketball Home Gym for the Quarantined...",
		text: `The Basketball Home Gym for both basketball strength and basketball conditioning...`,
		date: `October 27, 2020`,
		link: `/blog/blog-single`,
	},
];

const ReadedArticles = () => {
	return (
		<>
			<section className="article-section pb-120">
				<div className="container">
					<h2 className="article-title mb-4 mb-lg-5">
						Most readed articles
					</h2>
					<div className="m--8">
						<div className="row g-3 g-md-4">
							{data &&
								data.map(({ link, img, title, text, date }, i) => (
									<div className="col-md-6" key={i}>
										<div
											className="__article-item"
											data-aos="fade-up"
										>
											<Link to={link} className="link"></Link>
											<img
												src={img}
												className="__article-item-img"
												alt=""
											/>
											<div className="__article-item-content">
												<h4 className="title">{title}</h4>
												<div className="text">{text}</div>
												<div className="date">{date}</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ReadedArticles;
