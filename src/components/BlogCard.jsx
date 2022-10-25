import React from "react";

import { Link } from "react-router-dom";
const BlogCard = ({
	img,
	title,
	text,
	authorName,
	authorImage,
	date,
	link,
}) => {
	return (
		<div className="__post-item" data-aos="fade-up">
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
	);
};

export default BlogCard;
