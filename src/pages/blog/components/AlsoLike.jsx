import React from "react";
import img1 from "../../../assets/images/blog/blog/1.png";
import img2 from "../../../assets/images/blog/blog/2.png";
import img3 from "../../../assets/images/blog/blog/3.png";
import img4 from "../../../assets/images/blog/blog/4.png";

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
];
const AlsoLike = () => {
	return (
		<>
			<section className="you-may-also-like-section pb-120">
				<div className="container">
					<h2 className="article-title mb-4 mb-lg-5">You may also like</h2>
					<div className="row g-3 g-sm-4 gy-xl-5 justify-content-center">
						{data &&
							data.map((item, i) => (
								<div className="col-lg-3 col-sm-6" key={i}>
									<BlogCard {...item} />
								</div>
							))}
					</div>
				</div>
			</section>
		</>
	);
};

export default AlsoLike;
