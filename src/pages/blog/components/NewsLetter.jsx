import React from "react";
import newsletter_bg from "./newsletter-bg.svg";
const NewsLetter = () => {
	return (
		<div
			style={{
				background: `url(${newsletter_bg}) no-repeat center center / cover`,
			}}
			className="newsletter-section"
		>
			<div className="container">
				<div className="__newsletter-wrapper">
					<div className="content">
						<h2 className="title">Subscribe to our Newsletters</h2>
						<div className="text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Phasellus malesuada nisi tellus, non imperdiet nisi tempor
							at.
						</div>
					</div>
					<form className="__newsletter-form">
						<input type="text" placeholder="Enter Your Email" />
						<button type="submit">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
