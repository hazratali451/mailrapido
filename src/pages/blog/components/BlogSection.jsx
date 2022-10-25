import React from "react";

import img1 from "../../../assets/images/blog/blog/1.png";
import img2 from "../../../assets/images/blog/blog/2.png";
import img3 from "../../../assets/images/blog/blog/3.png";
import img4 from "../../../assets/images/blog/blog/4.png";
import img5 from "../../../assets/images/blog/blog/5.png";
import img6 from "../../../assets/images/blog/blog/6.png";
import img7 from "../../../assets/images/blog/blog/7.png";
import img8 from "../../../assets/images/blog/blog/8.png";
import img9 from "../../../assets/images/blog/blog/9.png";

import { Link } from "react-router-dom";
import author1 from "../../../assets/images/avatar2.png";

const data = [
	{
		img: img1,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img2,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img3,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img4,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img5,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img6,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img7,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img8,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
	{
		img: img9,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `#`,
	},
];
const BlogSection = () => {
	return (
		<section className="blog-section pt-120 pb-120">
			<div className="shape-1"></div>
			<div className="shape-2"></div>
			<div className="container">
				<div className="row g-3 g-sm-4 gy-xl-5">
					{data &&
						data.map(
							(
								{
									img,
									title,
									text,
									authorName,
									authorImage,
									date,
									link,
								},
								i
							) => (
								<div className="col-lg-4 col-md-6">
									<div className="__post-item">
										<Link className="post-link" to={link}></Link>
										<div className="__post-item-img">
											<img src={img} alt="" />
										</div>
										<div className="__post-item-cont">
											<div className="__post-item-cont-top">
												<h5 className="title">{title}</h5>
												<p>{text}</p>
											</div>
											<div className="__post-item-cont-bottom">
												<div className="author d-flex align-items-center">
													<img src={authorImage} alt="" />
													<h6>{authorName}</h6>
												</div>
												<span>{date}</span>
											</div>
										</div>
									</div>
								</div>
							)
						)}
				</div>
				<div className="mt-4 pt-2 text-center">
					<Link to="#" className="btn--base">
						<span>More articles</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
