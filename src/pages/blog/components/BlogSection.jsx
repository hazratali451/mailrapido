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
import BlogCard from "../../../components/BlogCard";

const data = [
	{
		img: img1,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img2,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img3,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img4,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img5,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img6,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img7,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img8,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
	{
		img: img9,
		title: `your software & really enjoy the account setup`,
		text: `I tried your software and really enjoy account setup`,
		authorName: `Hawkins`,
		authorImage: author1,
		date: `April 24, 2022 - 5 m read`,
		link: `/blog/blog-single`,
	},
];
const BlogSection = () => {
	return (
		<section className="blog-section pt-120 pb-120">
			<div className="shape-1"></div>
			<div className="shape-2"></div>
			<div className="container">
				<div className="row g-3 g-sm-4 gy-xl-5 justify-content-center">
					{data &&
						data.map((item, i) => (
							<div className="col-lg-4 col-sm-6" key={i}>
								<BlogCard {...item} />
							</div>
						))}
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
