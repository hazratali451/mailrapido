import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/temp-email/1.png";
import img2 from "../../../assets/images/temp-email/2.png";
import img3 from "../../../assets/images/temp-email/3.png";
import img4 from "../../../assets/images/temp-email/4.png";
import img5 from "../../../assets/images/temp-email/5.png";

const data = [
	{
		img: img1,
		link: "#",
	},
	{
		img: img2,
		link: "#",
	},
	{
		img: img3,
		link: "#",
	},
	{
		img: img4,
		link: "#",
	},
	{
		img: img5,
		link: "#",
	},
];

const AddOns = () => {
	return (
		<>
			<section className="pb-120 overflow-hidden">
				<div className="container">
					<div className="row align-items-center gy-4">
						<div className="col-lg-5 text-center text-lg-start">
							<h2 className="temp-email-title mx-auto ms-lg-0">
								Temporary Email Generator by Temporary Email Generator
							</h2>
						</div>
						<div className="col-lg-7">
							<div className="temp-email-imgaes">
								{data &&
									data.map(({ img, link }, i) => (
										<Link to={link} key={i}>
											<img src={img} alt="" />
										</Link>
									))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AddOns;
